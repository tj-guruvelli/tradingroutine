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
    # Pre-market: today's session hasn't started, so Alpaca's "dailyBar" is
    # still carrying the most recently COMPLETED session (i.e. yesterday's
    # close) — that's the correct baseline for a premarket gap. Once today's
    # regular session opens, Alpaca rolls "dailyBar" over to today's
    # in-progress bar and "prevDailyBar" becomes yesterday's completed close
    # instead. Detect this by the bar's own date rather than trusting a
    # fixed clock cutoff (holidays/halts shift when the rollover happens):
    # if dailyBar's timestamp is today, it's the in-progress bar and
    # prevDailyBar is the real prior close (confirmed recurring false-positive
    # bug, 2026-08-21 and 2026-08-26 — see RESEARCH-LOG).
    daily = snap.get("dailyBar") or {}
    prev = snap.get("prevDailyBar") or {}
    daily_date = str(daily.get("t", ""))[:10]
    if daily and daily_date == today:
        prev_close = prev.get("c") or 0.0
    else:
        prev_close = daily.get("c") or prev.get("c") or 0.0
    # Pick whichever of quote/trade is more recent, but only trust it if it's
    # actually from today's session — thinly-traded names can carry Monday's
    # closing quote/trade forward unchanged, which produces a fake "gap"
    # against dailyBar (stale bid/ask spread noise, not a real move).
    quote = snap.get("latestQuote") or {}
    trade = snap.get("latestTrade") or {}
    quote_px = (quote["ap"] + quote["bp"]) / 2.0 if quote.get("ap") and quote.get("bp") else None
    trade_px = trade.get("p")
    candidates = []
    if quote_px and str(quote.get("t", "")).startswith(today):
        candidates.append((quote["t"], quote_px))
    if trade_px and str(trade.get("t", "")).startswith(today):
        candidates.append((trade["t"], trade_px))
    if not candidates:
        continue  # no fresh premarket data for this symbol — skip, don't fake it
    candidates.sort(key=lambda c: c[0])
    current = candidates[-1][1]
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
