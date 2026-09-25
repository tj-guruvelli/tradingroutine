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
    # Pre-market (before today's bar has started forming): Alpaca's "dailyBar"
    # is still carrying the most recently COMPLETED session (i.e. yesterday's
    # close) — that's the correct baseline. Once today's bar exists (session
    # open, or extended-hours trades already posted under today's date),
    # "dailyBar" IS today and "prevDailyBar" is the correct prior-close
    # baseline instead — using dailyBar.c as prev_close after the bar has
    # started forming compares today's price to itself and fabricates/misses
    # gaps (confirmed 2026-09-04: a mid-session run of the old logic invented
    # fake ~6-7% "gaps" in KLIC/BWLP/LPG while missing real moves of +17.6%/
    # -16%/-8.3%/-6.3% in QMMM/PTNM/DPRO/BMNR). Decide which bar is "today's"
    # from the bar dates themselves (data-driven, not wall-clock) so this is
    # correct whenever the routine happens to run.
    daily = snap.get("dailyBar") or {}
    prev = snap.get("prevDailyBar") or {}
    daily_date = str(daily.get("t", ""))[:10]
    prev_date = str(prev.get("t", ""))[:10]
    if daily_date and prev_date and daily_date != prev_date:
        # dailyBar is today's own bar (forming or complete) -> prevDailyBar
        # is yesterday's close, the correct gap baseline.
        prev_close = prev.get("c") or daily.get("c") or 0.0
    else:
        # today's bar hasn't started forming yet (genuine pre-market) ->
        # dailyBar still carries the last completed session's close.
        prev_close = daily.get("c") or prev.get("c") or 0.0
    # Prefer the latest TRADE (a real executed print) over the latest QUOTE.
    # Thinly-traded names routinely carry a stale/one-sided bid or ask that's
    # far from the last print, so the bid/ask midpoint can be several percent
    # off the real price — confirmed 2026-09-04: BKSY/BWLP each showed a fake
    # ~6-7% "gap" purely from a mid-quote computed off a stale/wide-side quote
    # (spreads of 11-14% of price), while the real trade-based gap was <1%.
    # Only fall back to the quote midpoint if there's no trade from today's
    # session, and even then skip it if the spread is too wide (>2% of price)
    # to trust as a price.
    quote = snap.get("latestQuote") or {}
    trade = snap.get("latestTrade") or {}
    trade_px = trade.get("p")
    current = None
    if trade_px and str(trade.get("t", "")).startswith(today):
        current = trade_px
    elif quote.get("ap") and quote.get("bp") and str(quote.get("t", "")).startswith(today):
        mid = (quote["ap"] + quote["bp"]) / 2.0
        spread_pct = (quote["ap"] - quote["bp"]) / mid * 100.0 if mid else 100.0
        if spread_pct <= 2.0:
            current = mid
    if current is None:
        continue  # no fresh, trustworthy price for this symbol — skip, don't fake it
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
