#!/usr/bin/env bash
# Research wrapper. All market research goes through Perplexity.
# Usage: bash scripts/perplexity.sh "<query>"
# Exits with code 3 if PERPLEXITY_API_KEY is unset, OR if the API call itself
# fails for any reason (invalid/expired key, rate limit, network, 5xx) — so
# callers checking for exit 3 get a consistent fall-back signal either way.
set -uo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT/.env"
if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi
query="${1:-}"
if [[ -z "$query" ]]; then
  echo "usage: bash scripts/perplexity.sh \"<query>\"" >&2
  exit 1
fi
if [[ -z "${PERPLEXITY_API_KEY:-}" ]]; then
  echo "WARNING: PERPLEXITY_API_KEY not set. Fall back to WebSearch." >&2
  exit 3
fi
MODEL="${PERPLEXITY_MODEL:-sonar}"
if ! command -v python >/dev/null 2>&1; then
  echo "WARNING: python not found on PATH. Fall back to WebSearch." >&2
  exit 3
fi
if ! command -v curl >/dev/null 2>&1; then
  echo "WARNING: curl not found on PATH. Fall back to WebSearch." >&2
  exit 3
fi
payload="$(python -c "
import json, sys
print(json.dumps({
    'model': sys.argv[1],
    'messages': [
        {'role': 'system', 'content': 'You are a precise financial research assistant. Cite every claim. Be concise.'},
        {'role': 'user', 'content': sys.argv[2]},
    ],
}))
" "$MODEL" "$query")"
response="$(curl -fsS --ssl-no-revoke https://api.perplexity.ai/chat/completions \
  -H "Authorization: Bearer $PERPLEXITY_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$payload" 2>/tmp/perplexity_curl_err.$$)"
status=$?
if [[ $status -ne 0 ]]; then
  echo "WARNING: Perplexity API call failed ($(cat /tmp/perplexity_curl_err.$$ 2>/dev/null)). Fall back to WebSearch." >&2
  rm -f "/tmp/perplexity_curl_err.$$"
  exit 3
fi
rm -f "/tmp/perplexity_curl_err.$$"
echo "$response"
