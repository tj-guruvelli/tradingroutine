---
description: Send a one-line notification via Telegram (primary) and ClickUp (fallback)
---

Send an ad-hoc notification. Args: the message text (multiple words OK).

1. If no args, ask for the message.
2. Send via Telegram first:
   `bash scripts/telegram.sh "<message>"`
3. If Telegram exits nonzero AND ClickUp is configured, also send via ClickUp:
   `bash scripts/clickup.sh "<message>"`
4. Print exit status of both. If BOTH fail, tell the user to check env vars.

Do NOT include position sizes, account P&L, or trade rationale in notifications
unless the user explicitly asks — keep messages terse and non-sensitive.
