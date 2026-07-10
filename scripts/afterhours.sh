#!/usr/bin/env bash
# After-hours data wrapper. Pulls afterhours + insider + finviz + Google Finance
# for a ticker, primarily via Perplexity with site-constrained queries.
#
# Usage:
#   bash scripts/afterhours.sh TICKER
#   bash scripts/afterhours.sh TICKER --json    # machine-readable output
#
# Sources (in query priority):
#   1. finviz.com/quote.ashx?t=TICKER — snapshot, ratios, insider transactions
#   2. google.com/finance/quote/TICKER:NASDAQ — after-hours price + news
#   3. openinsider.com/screener?s=TICKER — cluster + individual insider buys
#   4. benzinga.com/quote/TICKER — catalyst / recent headlines
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT/.env"
if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi
tick="${1:-}"
mode="${2:-text}"
if [[ -z "$tick" ]]; then
  echo "usage: bash scripts/afterhours.sh TICKER [--json]" >&2
  exit 1
fi

if [[ -z "${PERPLEXITY_API_KEY:-}" ]]; then
  echo "WARNING: PERPLEXITY_API_KEY not set — falling back to WebSearch (LLM must run this)." >&2
  # Emit a stub that the routine can interpret to trigger native WebSearch fallback.
  cat <<EOF
{"ticker":"$tick","fallback":"websearch","query_hints":{
  "finviz":"site:finviz.com $tick",
  "google_finance":"site:google.com/finance $tick",
  "openinsider":"site:openinsider.com $tick",
  "benzinga":"site:benzinga.com/quote/$tick"
}}
EOF
  exit 3
fi

MODEL="${PERPLEXITY_MODEL:-sonar}"

query="For ticker $tick, extract from finviz.com, google.com/finance, openinsider.com, and benzinga.com the following facts. Return STRICT JSON only, no prose:
{
  \"ticker\": \"$tick\",
  \"afterhours_price\": <number or null>,
  \"afterhours_change_pct\": <number or null>,
  \"finviz\": {\"price\": ..., \"pe\": ..., \"forward_pe\": ..., \"ps\": ..., \"rsi_14\": ..., \"volume\": ..., \"target_price\": ...},
  \"google_finance\": {\"price\": ..., \"change_today_pct\": ..., \"latest_news\": [\"headline 1\", \"headline 2\"]},
  \"insider\": {\"cluster_buy_last_90d\": <bool>, \"recent_transactions\": [{\"date\":\"\", \"insider\":\"\", \"role\":\"\", \"buy_or_sell\":\"\", \"shares\":N, \"price\":P}]},
  \"benzinga_catalyst\": \"<one sentence>\"
}
If any field is unknown, use null. Do not fabricate numbers."

payload="$(python -c "
import json, sys
print(json.dumps({
    'model': sys.argv[1],
    'messages': [
        {'role': 'system', 'content': 'You are a precise financial data extractor. Cite each fact with its source URL in a separate 'sources' field appended to the JSON.'},
        {'role': 'user', 'content': sys.argv[2]},
    ],
}))
" "$MODEL" "$query")"

resp="$(curl -fsS --ssl-no-revoke https://api.perplexity.ai/chat/completions \
  -H "Authorization: Bearer $PERPLEXITY_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$payload")"

if [[ "$mode" == "--json" ]]; then
  # Extract only the assistant content field
  printf '%s' "$resp" | python -c "
import json, sys
d = json.load(sys.stdin)
try:
    print(d['choices'][0]['message']['content'])
except Exception:
    print(json.dumps({'error':'unexpected_perplexity_shape','raw':d}))
"
else
  printf '%s\n' "$resp"
fi
