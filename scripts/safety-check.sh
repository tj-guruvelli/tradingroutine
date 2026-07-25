#!/usr/bin/env bash
# Safety check runner. Reads config/rules.json + live account state + candidate trade,
# emits a per-decision JSON to data/safety-check-log.json (append-only).
#
# Usage:
#   bash scripts/safety-check.sh SYMBOL SHARES SIDE THESIS
#
# Exit code:
#   0 — all rules pass (safe to submit)
#   2 — one or more rules FAIL (do NOT submit)
#   1 — usage / config error
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT/.env"
if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi
: "${ALPACA_API_KEY:?ALPACA_API_KEY not set in environment}"
: "${ALPACA_SECRET_KEY:?ALPACA_SECRET_KEY not set in environment}"

sym="${1:?usage: safety-check SYMBOL SHARES SIDE THESIS}"
qty="${2:?}"
side="${3:?}"
thesis="${4:-}"

RULES="$ROOT/config/rules.json"
if [[ ! -f "$RULES" ]]; then echo "config/rules.json missing" >&2; exit 1; fi

# Pull live state (via existing wrapper)
account="$(bash "$ROOT/scripts/alpaca.sh" account 2>/dev/null || echo '{}')"
positions="$(bash "$ROOT/scripts/alpaca.sh" positions 2>/dev/null || echo '[]')"
quote="$(bash "$ROOT/scripts/alpaca.sh" quote "$sym" 2>/dev/null || echo '{}')"

mkdir -p "$ROOT/data"
LOG="$ROOT/data/safety-check-log.json"
[[ -f "$LOG" ]] || echo "[]" > "$LOG"

# --- Circuit breaker: portfolio drawdown from peak (1M window) ---
# BLOCK new orders + alert on breach. Deviation from source template: we do
# NOT auto-flatten positions — execution stays human-gated per this repo's
# doctrine. Fails CLOSED (block) if portfolio history is unavailable.
if history_json="$(bash "$ROOT/scripts/alpaca.sh" account 2>/dev/null)" && \
   ph_json="$(curl -fsS --ssl-no-revoke \
     -H "APCA-API-KEY-ID: $ALPACA_API_KEY" -H "APCA-API-SECRET-KEY: $ALPACA_SECRET_KEY" \
     "${ALPACA_ENDPOINT:-https://paper-api.alpaca.markets/v2}/account/portfolio/history?period=1M&timeframe=1D" 2>/dev/null)"; then
  RULES="$RULES" PH="$ph_json" python - <<'PY'
import json, os, sys, pathlib
rules = json.loads(pathlib.Path(os.environ["RULES"]).read_text())
ph = json.loads(os.environ["PH"] or "{}")
equity = [e for e in (ph.get("equity") or []) if e is not None]
if not equity:
    print("CIRCUIT BREAKER: no portfolio history equity series available — failing CLOSED", file=sys.stderr)
    sys.exit(2)
peak = max(equity)
current = equity[-1]
dd_pct = (peak - current) / peak * 100 if peak else 0
max_dd = rules.get("circuit_breaker", {}).get("max_drawdown_from_peak_pct", 10)
result = {"peak_equity": peak, "current_equity": current, "drawdown_pct": round(dd_pct, 2), "max_allowed_pct": max_dd}
print(json.dumps(result, indent=2))
sys.exit(2 if dd_pct >= max_dd else 0)
PY
  cb_status=$?
  if [[ $cb_status -eq 2 ]]; then
    msg="CIRCUIT BREAKER TRIPPED: drawdown from peak >= ${max_dd:-10}% — BLOCKING new orders. Positions NOT auto-flattened (human-gated)."
    bash "$ROOT/scripts/telegram.sh" "$msg" || true
    echo "safety-check: $msg" >&2
    exit 2
  fi
else
  echo "safety-check: CIRCUIT BREAKER — portfolio history unavailable, failing CLOSED (BLOCK)" >&2
  exit 2
fi

# --- Correlation gate: block new entries correlated with existing book ---
if [[ "$side" == "buy" ]]; then
  if ! corr_out="$(node "$ROOT/scripts/corr-gate.mjs" "$sym" 2>&1)"; then
    corr_status=$?
    if [[ $corr_status -eq 2 ]]; then
      echo "safety-check: CORRELATION GATE BLOCKED — $corr_out" >&2
      exit 2
    else
      echo "safety-check: CORRELATION GATE — risk data unavailable, failing CLOSED (BLOCK): $corr_out" >&2
      exit 2
    fi
  fi
fi

RULES="$RULES" ACCOUNT="$account" POSITIONS="$positions" QUOTE="$quote" \
SYM="$sym" QTY="$qty" SIDE="$side" THESIS="$thesis" LOG="$LOG" \
python - <<'PY'
import json, os, sys, datetime, pathlib

rules = json.loads(pathlib.Path(os.environ["RULES"]).read_text())
account = json.loads(os.environ["ACCOUNT"] or "{}")
positions = json.loads(os.environ["POSITIONS"] or "[]")
quote = json.loads(os.environ["QUOTE"] or "{}")
sym = os.environ["SYM"].upper()
qty = float(os.environ["QTY"])
side = os.environ["SIDE"].lower()
thesis = os.environ["THESIS"]

# Extract live values with defensive defaults
equity = float(account.get("equity", 0) or 0)
cash = float(account.get("cash", 0) or 0)
day_trade_count = int(account.get("daytrade_count", 0) or 0)
open_positions = len(positions)
q = (quote.get("quote") or {})
ask = float(q.get("ap") or 0) or float(quote.get("latestTrade", {}).get("p") or 0)
notional = qty * ask

r = rules.get("risk_rules", {})
er = rules.get("entry_rules", {})
checks = []

def add(name, passed, actual, need):
    checks.append({"rule": name, "passed": bool(passed), "actual": actual, "required": need})

if side == "buy":
    add("max_positions_open",
        (open_positions + 1) <= r.get("max_positions_open", 6),
        f"open+1={open_positions+1}", f"<= {r.get('max_positions_open', 6)}")
    add("max_position_pct_of_equity",
        equity == 0 or (notional / equity * 100) <= r.get("max_position_pct_of_equity", 20),
        f"{(notional/equity*100 if equity else 'N/A'):.2f}%" if equity else "N/A",
        f"<= {r.get('max_position_pct_of_equity', 20)}%")
    add("sufficient_cash",
        notional <= cash,
        f"${notional:.2f} vs cash ${cash:.2f}", "notional <= cash")
    add("pdt_day_trade_count_max",
        day_trade_count < r.get("pdt_day_trade_count_max", 3),
        f"day_trade_count={day_trade_count}", f"< {r.get('pdt_day_trade_count_max', 3)}")
    add("stop_never_within_pct_of_current",
        True,  # informational; enforced when placing stop
        f"trailing_stop_pct={r.get('trailing_stop_pct_default', 10)}",
        f">= {r.get('stop_never_within_pct_of_current', 3)}% away")
    add("catalyst_documented",
        bool(thesis) and len(thesis) >= 15,
        f"thesis_len={len(thesis)}", ">= 15 chars")
elif side == "sell":
    holds = next((p for p in positions if p.get("symbol") == sym), None)
    add("position_exists_and_qty_matches",
        holds is not None and float(holds.get("qty", 0)) >= qty,
        f"holds={holds}", f"qty >= {qty}")
else:
    add("side_valid", False, side, "buy or sell")

verdict = "PASS" if all(c["passed"] for c in checks) else "BLOCK"
first_fail = next((c["rule"] for c in checks if not c["passed"]), None)

entry = {
    "ts": datetime.datetime.utcnow().isoformat(timespec="seconds") + "Z",
    "symbol": sym, "qty": qty, "side": side,
    "notional_est": round(notional, 4),
    "quote_ask": ask,
    "verdict": verdict,
    "first_fail": first_fail,
    "checks": checks,
    "thesis": thesis[:200] if thesis else None,
}

log_path = pathlib.Path(os.environ["LOG"])
log = json.loads(log_path.read_text())
log.append(entry)
log_path.write_text(json.dumps(log, indent=2))
print(json.dumps(entry, indent=2))
sys.exit(0 if verdict == "PASS" else 2)
PY
