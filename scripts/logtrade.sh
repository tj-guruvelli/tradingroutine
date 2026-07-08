#!/usr/bin/env bash
# Append a filled trade to data/trades.csv (tax-ready columnar record).
# Called by /trade and /market-open AFTER the Alpaca order confirms fill.
#
# Usage:
#   bash scripts/logtrade.sh SYMBOL SIDE QTY PRICE ORDER_ID MODE [NOTES]
#   MODE = paper | live
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CSV="$ROOT/data/trades.csv"

sym="${1:?}"
side="${2:?}"
qty="${3:?}"
price="${4:?}"
oid="${5:?}"
mode="${6:?}"
notes="${7:-}"

mkdir -p "$ROOT/data"
if [[ ! -f "$CSV" ]]; then
  echo "Date,Time,Exchange,Symbol,Side,Quantity,Price,Total USD,Fee (est.),Net Amount,Order ID,Mode,Notes" > "$CSV"
fi

date="$(date -u '+%Y-%m-%d')"
time="$(date -u '+%H:%M:%S')"
total="$(python -c "print(round($qty * $price, 4))")"
# Alpaca stocks are commission-free; keep a $0 fee column for schema compat
fee="0.00"
net="$total"

# CSV-escape notes if it contains commas or quotes
notes_esc="$(printf '%s' "$notes" | python -c "import sys,csv,io; b=io.StringIO(); csv.writer(b).writerow([sys.stdin.read().rstrip()]); print(b.getvalue().rstrip())")"

printf '%s,%s,Alpaca,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s\n' \
  "$date" "$time" "$sym" "$side" "$qty" "$price" "$total" "$fee" "$net" "$oid" "$mode" "$notes_esc" \
  >> "$CSV"

echo "logged: $sym $side $qty @ $price ($mode)"
