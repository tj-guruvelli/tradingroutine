#!/usr/bin/env bash
# Telegram notification wrapper. Posts to a Telegram chat via the Bot API.
# Usage: bash scripts/telegram.sh "<message>"
#        echo "message" | bash scripts/telegram.sh
# If credentials are unset, appends to a local fallback file.
# Silent-on-success like the other wrappers. Exit code:
#   0 — sent (or fallback appended)
#   3 — credentials unset AND fallback write failed
#   nonzero — Telegram API error
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$ROOT/.env"
FALLBACK="$ROOT/DAILY-SUMMARY.md"
if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi
if [[ $# -gt 0 ]]; then
  msg="$*"
else
  msg="$(cat)"
fi
if [[ -z "${msg// /}" ]]; then
  echo "usage: bash scripts/telegram.sh \"<message>\"" >&2
  exit 1
fi
stamp="$(date '+%Y-%m-%d %H:%M %Z')"
if [[ -z "${TELEGRAM_BOT_TOKEN:-}" || -z "${TELEGRAM_CHAT_ID:-}" ]]; then
  printf "\n---\n## %s (fallback — Telegram not configured)\n%s\n" "$stamp" "$msg" >> "$FALLBACK" \
    && { echo "[telegram fallback] appended to DAILY-SUMMARY.md"; echo "$msg"; exit 0; }
  exit 3
fi
# Telegram Markdown v2 requires escaping several special chars. To keep this
# wrapper simple, use plain text (default parse_mode omitted).
payload="$(python -c "
import json, sys
print(json.dumps({
    'chat_id': sys.argv[1],
    'text': sys.argv[2],
    'disable_web_page_preview': True,
}))
" "$TELEGRAM_CHAT_ID" "$msg")"
curl -fsS -X POST \
  "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage" \
  -H "Content-Type: application/json" \
  -d "$payload"
echo
