#!/usr/bin/env bash
# Pre-market gappers scan via Alpaca market data.
# Usage:
#   bash scripts/gappers-alpaca.sh watchlist       # scan tickers listed in memory/WATCHLIST.md
#   bash scripts/gappers-alpaca.sh symbols SYM,... # scan a comma-separated list
#   bash scripts/gappers-alpaca.sh most-active     # Alpaca's most-active endpoint (all US equities)
#
# Output: JSON array of {symbol, prev_close, current, gap_pct, volume} sorted by |gap_pct| DESC.
# A "gapper" here = |gap_pct| >= 3.0 (configurable via GAP_THRESHOLD env var).
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
DATA="${ALPACA_DATA_ENDPOINT:-https://data.alpaca.markets/v2}"
H_KEY="APCA-API-KEY-ID: $ALPACA_API_KEY"
H_SEC="APCA-API-SECRET-KEY: $ALPACA_SECRET_KEY"
THRESH="${GAP_THRESHOLD:-3.0}"

get_symbols() {
  case "${1:-}" in
  watchlist)
    # Extract tickers from memory/WATCHLIST.md. Accept both table format
    # (`| TICK |` at line start) and comma-separated section lines.
    python - <<'PY'
import re, pathlib, sys
wl = pathlib.Path("memory/WATCHLIST.md")
if not wl.exists():
    print("", end=""); sys.exit(0)
text = wl.read_text(encoding="utf-8", errors="ignore")
found = set()
# Table rows: `| SYMBOL |`
for m in re.finditer(r"^\|\s*([A-Z]{1,5}(?:\.[A-Z]{1,3})?)\s*\|", text, re.M):
    found.add(m.group(1))
# Ticker soup lines (space or bullet separated)
for line in text.splitlines():
    if not line.strip() or line.startswith("#") or line.startswith("|"): continue
    for tok in re.findall(r"\b([A-Z]{2,5})\b", line):
        # Skip common English uppercase words that appear in prose
        if tok in {"CEO","IPO","YTD","AI","EV","NATO","YTD","US","UK","EU","AM","PM","GTC","PDT","SP","YOY","VIX","MCP","JSON","API","CDP"}: continue
        found.add(tok)
print(",".join(sorted(found)))
PY
    ;;
  symbols)
    echo "${2:?comma-separated list required}"
    ;;
  most-active)
    curl -fsS --ssl-no-revoke -H "$H_KEY" -H "$H_SEC" \
      "$DATA/stocks/most-actives?by=volume&top=25" \
      | python -c "import json,sys; d=json.load(sys.stdin); print(','.join(m['symbol'] for m in d.get('most_actives', [])))"
    ;;
  *)
    echo "Usage: bash scripts/gappers-alpaca.sh <watchlist|symbols SYM,...|most-active>" >&2
    exit 1
    ;;
  esac
}

symbols="$(get_symbols "$@")"
if [[ -z "$symbols" ]]; then
  echo "No symbols to scan." >&2
  exit 0
fi

# Alpaca snapshot endpoint returns previous daily bar + latest quote/trade.
# Batch (comma-separated) — endpoint supports up to 1000 symbols per call.
snap_url="$DATA/stocks/snapshots?symbols=$symbols"
snapshot="$(curl -fsS --ssl-no-revoke -H "$H_KEY" -H "$H_SEC" "$snap_url")"
TODAY_UTC="$(date -u +%Y-%m-%d)"

THRESH="$THRESH" SNAPSHOT_JSON="$snapshot" TODAY_UTC="$TODAY_UTC" python - <<'PY'
import json, os
thresh = float(os.environ["THRESH"])
today = os.environ["TODAY_UTC"]
data = json.loads(os.environ["SNAPSHOT_JSON"])
rows = []
for sym, snap in data.items():
    # Baseline must be the last COMPLETED session. Alpaca's "dailyBar" carries
    # yesterday's close pre-market but rolls over to today's own (partial) bar
    # once the session is underway — and it does so mid-morning, not at 09:30.
    # Measuring against today's own bar yields a near-zero or nonsense gap, so
    # skip dailyBar whenever it is already stamped today and use prevDailyBar.
    daily = snap.get("dailyBar") or {}
    prev = snap.get("prevDailyBar") or {}
    daily_is_today = str(daily.get("t", "")).startswith(today)
    baseline_bar = prev if daily_is_today else daily
    prev_close = baseline_bar.get("c") or prev.get("c") or 0.0
    # Prefer the last actual trade. A quote mid is only a fallback for names
    # with no print yet, and is rejected when the spread is wide — a stale or
    # one-sided ask (e.g. bid 4.51 / ask 5.26 on a $5.23 stock) otherwise
    # manufactures a multi-percent "gap" out of pure spread noise.
    quote = snap.get("latestQuote") or {}
    trade = snap.get("latestTrade") or {}
    bid, ask = quote.get("bp"), quote.get("ap")
    quote_px = None
    if bid and ask:
        mid = (bid + ask) / 2.0
        if (ask - bid) / mid <= 0.02:
            quote_px = mid
    trade_px = trade.get("p")
    if trade_px and str(trade.get("t", "")).startswith(today):
        current = trade_px
    elif quote_px and str(quote.get("t", "")).startswith(today):
        current = quote_px
    else:
        continue  # no fresh, trustworthy print for this symbol — skip, don't fake it
    if not prev_close: continue
    gap = (current - prev_close) / prev_close * 100.0
    if abs(gap) < thresh: continue
    rows.append({
        "symbol": sym,
        "prev_close": round(prev_close, 4),
        "current": round(current, 4),
        "gap_pct": round(gap, 2),
        # Alpaca's snapshot has no distinct premarket-volume field; this is
        # the most recent completed session's full-day volume, not today's
        # premarket volume.
        "volume": daily.get("v") or prev.get("v") or 0,
    })
rows.sort(key=lambda r: abs(r["gap_pct"]), reverse=True)
print(json.dumps(rows, indent=2))
PY
