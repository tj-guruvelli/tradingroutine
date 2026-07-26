#!/usr/bin/env bash
# Low-float gap scanner via Alpaca market data. PAPER/DATA ONLY — never places orders.
# Usage:
#   bash scripts/lowfloat-alpaca.sh watchlist       # scan tickers listed in memory/WATCHLIST.md
#   bash scripts/lowfloat-alpaca.sh symbols SYM,... # scan a comma-separated list
#   bash scripts/lowfloat-alpaca.sh most-active     # Alpaca's most-active endpoint (all US equities)
#
# Filters (fixed, not configurable): price $0.20-$10.00, exclude OTC-exchange
# listings, cumulative day volume >= 100,000, gap up >= 2% vs prior close.
# Output: JSON array of {symbol, prev_close, current, gap_pct, volume, dollar_volume,
# exchange} sorted by dollar_volume (price * volume) DESC.
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
DATA="${ALPACA_DATA_ENDPOINT:-https://data.alpaca.markets/v2}"
H_KEY="APCA-API-KEY-ID: $ALPACA_API_KEY"
H_SEC="APCA-API-SECRET-KEY: $ALPACA_SECRET_KEY"
PRICE_MIN="${LOWFLOAT_PRICE_MIN:-0.20}"
PRICE_MAX="${LOWFLOAT_PRICE_MAX:-10.00}"
VOL_MIN="${LOWFLOAT_VOL_MIN:-100000}"
GAP_MIN="${LOWFLOAT_GAP_MIN:-2.0}"

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
    echo "Usage: bash scripts/lowfloat-alpaca.sh <watchlist|symbols SYM,...|most-active>" >&2
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

# Exchange lookup (read-only asset metadata — used only to exclude OTC listings).
# Written to a temp file, not an env var — the full active-assets list can exceed
# the OS argv/environment size limit.
ASSETS_FILE="$(mktemp)"
trap 'rm -f "$ASSETS_FILE"' EXIT
curl -fsS --ssl-no-revoke -H "$H_KEY" -H "$H_SEC" \
  "$API/assets?status=active&asset_class=us_equity" > "$ASSETS_FILE"

PRICE_MIN="$PRICE_MIN" PRICE_MAX="$PRICE_MAX" VOL_MIN="$VOL_MIN" GAP_MIN="$GAP_MIN" \
SNAPSHOT_JSON="$snapshot" ASSETS_FILE="$ASSETS_FILE" python - <<'PY'
import json, os
price_min = float(os.environ["PRICE_MIN"])
price_max = float(os.environ["PRICE_MAX"])
vol_min = float(os.environ["VOL_MIN"])
gap_min = float(os.environ["GAP_MIN"])
data = json.loads(os.environ["SNAPSHOT_JSON"])
with open(os.environ["ASSETS_FILE"], encoding="utf-8") as f:
    assets = json.load(f)
exch_by_sym = {a["symbol"]: a.get("exchange", "") for a in assets if isinstance(a, dict) and "symbol" in a}

rows = []
for sym, snap in data.items():
    prev = snap.get("prevDailyBar") or {}
    latest = snap.get("latestQuote") or snap.get("latestTrade") or {}
    prev_close = prev.get("c") or 0.0
    # latestQuote: use midpoint; latestTrade: use price
    current = 0.0
    if "ap" in latest and "bp" in latest and latest["ap"] and latest["bp"]:
        current = (latest["ap"] + latest["bp"]) / 2.0
    elif "p" in latest:
        current = latest["p"]
    if not prev_close or not current:
        continue
    exchange = exch_by_sym.get(sym, "")
    if exchange == "OTC":
        continue
    if not (price_min <= current <= price_max):
        continue
    gap = (current - prev_close) / prev_close * 100.0
    if gap < gap_min:
        continue
    day = snap.get("dailyBar") or {}
    volume = day.get("v") or prev.get("v") or 0
    if volume < vol_min:
        continue
    rows.append({
        "symbol": sym,
        "prev_close": round(prev_close, 4),
        "current": round(current, 4),
        "gap_pct": round(gap, 2),
        "volume": volume,
        "dollar_volume": round(current * volume, 2),
        "exchange": exchange,
    })
rows.sort(key=lambda r: r["dollar_volume"], reverse=True)
print(json.dumps(rows, indent=2))
PY
