#!/usr/bin/env bash
# Alpaca API wrapper. All trading API calls go through here.
# Usage: bash scripts/alpaca.sh <subcommand> [args...]
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
# SAFETY DEFAULT = PAPER. To go LIVE, set ALPACA_ENDPOINT=https://api.alpaca.markets/v2
# (deliberate action) in your .env or routine env. Data endpoint is shared paper/live.
API="${ALPACA_ENDPOINT:-https://paper-api.alpaca.markets/v2}"
DATA="${ALPACA_DATA_ENDPOINT:-https://data.alpaca.markets/v2}"
H_KEY="APCA-API-KEY-ID: $ALPACA_API_KEY"
H_SEC="APCA-API-SECRET-KEY: $ALPACA_SECRET_KEY"
# --ssl-no-revoke: Windows schannel curl + AV HTTPS interception fails cert
# revocation checks (CRYPT_E_NO_REVOCATION_CHECK). No-op on non-schannel builds.
acurl() { curl -fsS --ssl-no-revoke "$@"; }
cmd="${1:-}"
shift || true
case "$cmd" in
account)
  acurl -H "$H_KEY" -H "$H_SEC" "$API/account"
  ;;
positions)
  acurl -H "$H_KEY" -H "$H_SEC" "$API/positions"
  ;;
position)
  sym="${1:?usage: position SYM}"
  acurl -H "$H_KEY" -H "$H_SEC" "$API/positions/$sym"
  ;;
quote)
  sym="${1:?usage: quote SYM}"
  acurl -H "$H_KEY" -H "$H_SEC" "$DATA/stocks/$sym/quotes/latest"
  ;;
bars)
  # usage: bars SYM TIMEFRAME START END [LIMIT]
  # TIMEFRAME: 1Min, 5Min, 15Min, 1Hour, 1Day. START/END: RFC3339 (e.g. 2026-07-01T00:00:00Z).
  # Free-tier IEX feed: premarket coverage is sparse/partial vs a paid SIP feed —
  # a computed premarket-high from this endpoint is a lower bound, not exact.
  sym="${1:?usage: bars SYM TIMEFRAME START END [LIMIT]}"
  tf="${2:?usage: bars SYM TIMEFRAME START END [LIMIT]}"
  start="${3:?usage: bars SYM TIMEFRAME START END [LIMIT]}"
  end="${4:?usage: bars SYM TIMEFRAME START END [LIMIT]}"
  limit="${5:-1000}"
  acurl -H "$H_KEY" -H "$H_SEC" \
    "$DATA/stocks/$sym/bars?timeframe=$tf&start=$start&end=$end&limit=$limit&feed=iex&adjustment=raw"
  ;;
crypto-bars)
  # usage: crypto-bars SYM TIMEFRAME START END [LIMIT]
  # SYM: Alpaca crypto pair format, e.g. BTC/USD. Separate endpoint from stock bars.
  sym="${1:?usage: crypto-bars SYM TIMEFRAME START END [LIMIT]}"
  tf="${2:?usage: crypto-bars SYM TIMEFRAME START END [LIMIT]}"
  start="${3:?usage: crypto-bars SYM TIMEFRAME START END [LIMIT]}"
  end="${4:?usage: crypto-bars SYM TIMEFRAME START END [LIMIT]}"
  limit="${5:-1000}"
  acurl -H "$H_KEY" -H "$H_SEC" \
    "https://data.alpaca.markets/v1beta3/crypto/us/bars?symbols=$sym&timeframe=$tf&start=$start&end=$end&limit=$limit"
  ;;
orders)
  status="${1:-open}"
  acurl -H "$H_KEY" -H "$H_SEC" "$API/orders?status=$status"
  ;;
order)
  body="${1:?usage: order '<json>'}"
  acurl -H "$H_KEY" -H "$H_SEC" -H "Content-Type: application/json" \
    -X POST -d "$body" "$API/orders"
  ;;
cancel)
  oid="${1:?usage: cancel ORDER_ID}"
  acurl -H "$H_KEY" -H "$H_SEC" -X DELETE "$API/orders/$oid"
  ;;
cancel-all)
  acurl -H "$H_KEY" -H "$H_SEC" -X DELETE "$API/orders"
  ;;
close)
  sym="${1:?usage: close SYM}"
  acurl -H "$H_KEY" -H "$H_SEC" -X DELETE "$API/positions/$sym"
  ;;
close-all)
  acurl -H "$H_KEY" -H "$H_SEC" -X DELETE "$API/positions"
  ;;
*)
  echo "Usage: bash scripts/alpaca.sh <account|positions|position|quote|bars|crypto-bars|orders|order|cancel|cancel-all|close|close-all> [args]" >&2
  exit 1
  ;;
esac
echo
