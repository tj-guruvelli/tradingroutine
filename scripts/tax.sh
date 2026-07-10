#!/usr/bin/env bash
# Tax accounting wrapper. Pulls filled Alpaca activities and computes realized gains.
# Usage:
#   bash scripts/tax.sh realized [YEAR]      # realized gains (short vs long term) for YEAR (default: current)
#   bash scripts/tax.sh activities [YEAR]    # raw FILL activities as JSON
#   bash scripts/tax.sh wash [YEAR]          # flag potential wash sales (buy within 30d of a loss sale)
#   bash scripts/tax.sh summary [YEAR]       # human-readable summary
#
# Notes:
# - Alpaca returns FIFO cost basis in the /account/activities?activity_types=FILL feed.
# - Long-term = held > 365 days. Short-term = <=365 days (US tax convention).
# - Wash-sale detection is a HEURISTIC; do NOT rely on this for filing.
#   Consult a CPA. This tool is for pipeline tracking, not tax preparation.
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
API="${ALPACA_ENDPOINT:-https://paper-api.alpaca.markets/v2}"
H_KEY="APCA-API-KEY-ID: $ALPACA_API_KEY"
H_SEC="APCA-API-SECRET-KEY: $ALPACA_SECRET_KEY"

cmd="${1:-summary}"
year="${2:-$(date +%Y)}"
start="${year}-01-01"
end="${year}-12-31"

fetch_fills() {
  # Alpaca paginates activities in chunks of 100 (or use ?page_token for cursor).
  # Loop until we've pulled all pages for the year.
  local page_token=""
  local out="["
  local first=1
  while :; do
    local url="$API/account/activities?activity_types=FILL&date=$start&until=$end&page_size=100"
    if [[ -n "$page_token" ]]; then url="$url&page_token=$page_token"; fi
    local resp
    resp="$(curl -fsS --ssl-no-revoke -H "$H_KEY" -H "$H_SEC" "$url")"
    # `resp` is a JSON array. Append (or start) into `out`.
    local n
    n="$(printf '%s' "$resp" | python -c "import json,sys; print(len(json.load(sys.stdin)))")"
    if [[ "$n" == "0" ]]; then break; fi
    if [[ "$first" == "1" ]]; then out="$resp"; first=0
    else out="$(printf '%s\n%s' "$out" "$resp" | python -c "
import json, sys
data = sys.stdin.read().strip().split('\n')
combined = []
for line in data:
    if line: combined.extend(json.loads(line))
print(json.dumps(combined))
")"
    fi
    # Alpaca uses the `id` of the last item as the next page_token
    page_token="$(printf '%s' "$resp" | python -c "import json,sys; d=json.load(sys.stdin); print(d[-1]['id'] if d else '')")"
    if [[ "$n" -lt "100" ]]; then break; fi
  done
  printf '%s' "$out"
}

case "$cmd" in
activities)
  fetch_fills
  echo
  ;;
realized|wash|summary)
  fills="$(fetch_fills)"
  MODE="$cmd" YEAR="$year" python - <<'PY' <<<"$fills"
import json, os, sys
from datetime import datetime, timedelta
from collections import defaultdict, deque

mode = os.environ.get("MODE", "summary")
year = int(os.environ.get("YEAR", "0"))
raw = sys.stdin.read().strip() or "[]"
fills = json.loads(raw)

# Sort chronologically (Alpaca returns most-recent-first).
fills.sort(key=lambda f: f.get("transaction_time", ""))

# FIFO lot accounting per symbol.
lots = defaultdict(deque)  # symbol -> deque of {qty, price, date}
realized = []  # list of {symbol, buy_date, sell_date, qty, buy_price, sell_price, pnl, term}
loss_sales = []  # {symbol, sell_date, pnl}

def to_dt(s):
    # Alpaca uses ISO 8601 with 'Z' or offset. Normalize.
    if s.endswith("Z"): s = s[:-1] + "+00:00"
    try: return datetime.fromisoformat(s)
    except Exception: return datetime.strptime(s[:10], "%Y-%m-%d")

for f in fills:
    sym = f.get("symbol", "?")
    side = f.get("side", "")
    qty = float(f.get("qty", "0") or "0")
    price = float(f.get("price", "0") or "0")
    tdate = to_dt(f.get("transaction_time", "1970-01-01T00:00:00Z"))

    if side == "buy":
        lots[sym].append({"qty": qty, "price": price, "date": tdate})
    elif side == "sell":
        remaining = qty
        while remaining > 1e-9 and lots[sym]:
            lot = lots[sym][0]
            take = min(remaining, lot["qty"])
            pnl = (price - lot["price"]) * take
            days_held = (tdate - lot["date"]).days
            term = "long" if days_held > 365 else "short"
            realized.append({
                "symbol": sym,
                "buy_date": lot["date"].date().isoformat(),
                "sell_date": tdate.date().isoformat(),
                "qty": take,
                "buy_price": lot["price"],
                "sell_price": price,
                "pnl": pnl,
                "days_held": days_held,
                "term": term,
            })
            if pnl < 0:
                loss_sales.append({"symbol": sym, "sell_date": tdate.date().isoformat(), "pnl": pnl})
            lot["qty"] -= take
            remaining -= take
            if lot["qty"] <= 1e-9:
                lots[sym].popleft()

# Filter to requested year.
realized_year = [r for r in realized if r["sell_date"].startswith(str(year))]
short_pnl = sum(r["pnl"] for r in realized_year if r["term"] == "short")
long_pnl = sum(r["pnl"] for r in realized_year if r["term"] == "long")

def wash_flags():
    # Heuristic: any buy in same symbol within 30 days AFTER a loss sale = potential wash.
    flags = []
    for ls in loss_sales:
        sell_dt = datetime.fromisoformat(ls["sell_date"])
        for f in fills:
            if f.get("side") != "buy": continue
            if f.get("symbol") != ls["symbol"]: continue
            bdt = to_dt(f.get("transaction_time"))
            delta = (bdt - sell_dt).days
            if -30 <= delta <= 30:  # 30 days before OR after (IRS §1091)
                flags.append({
                    "symbol": ls["symbol"],
                    "loss_sell_date": ls["sell_date"],
                    "repurchase_date": bdt.date().isoformat(),
                    "days_delta": delta,
                    "loss_amount": ls["pnl"],
                })
    return flags

if mode == "realized":
    print(json.dumps({
        "year": year,
        "trades": realized_year,
        "totals": {"short_term_pnl": short_pnl, "long_term_pnl": long_pnl, "net_pnl": short_pnl + long_pnl},
    }, indent=2))
elif mode == "wash":
    print(json.dumps(wash_flags(), indent=2))
else:  # summary
    print(f"Tax Summary — {year}")
    print(f"  Realized short-term P&L: ${short_pnl:,.2f}  ({sum(1 for r in realized_year if r['term']=='short')} trades)")
    print(f"  Realized long-term  P&L: ${long_pnl:,.2f}  ({sum(1 for r in realized_year if r['term']=='long')} trades)")
    print(f"  Net realized P&L:        ${short_pnl+long_pnl:,.2f}")
    winners = [r for r in realized_year if r["pnl"] > 0]
    losers = [r for r in realized_year if r["pnl"] < 0]
    print(f"  Winners: {len(winners)}   Losers: {len(losers)}   Win rate: "
          f"{(len(winners)/len(realized_year)*100 if realized_year else 0):.1f}%")
    flags = wash_flags()
    if flags:
        print(f"  Potential wash sales: {len(flags)} — review manually.")
    else:
        print("  Potential wash sales: 0")
    print()
    print("  Reminder: paper-account activity has no tax consequence.")
    print("  For live-account filing, consult a CPA and cross-check Alpaca's 1099.")
PY
  ;;
*)
  echo "Usage: bash scripts/tax.sh <activities|realized|wash|summary> [YEAR]" >&2
  exit 1
  ;;
esac
