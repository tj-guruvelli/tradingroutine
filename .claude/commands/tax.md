---
description: Tax snapshot — realized short/long-term P&L and potential wash-sale flags for a given year
---

Print a concise year-to-date tax snapshot. Read-only, no state changes.

Args: optional YEAR (defaults to current year).

1. Verify env: ALPACA_API_KEY and ALPACA_SECRET_KEY must be set. If missing, STOP.
2. Run: `bash scripts/tax.sh summary ${YEAR:-$(date +%Y)}`
3. If any wash-sale flags appear, immediately run:
   `bash scripts/tax.sh wash ${YEAR:-$(date +%Y)}`
   and print the raw flags so the user can review each one.
4. Append or update the entry for this YEAR in memory/TAX-LOG.md:
   - Total realized P&L (short vs long)
   - Trade count and win rate
   - Wash-sale flag count (with a `TODO: review` marker if > 0)
   - Timestamp of snapshot
5. If ALPACA_ENDPOINT points at paper-api.alpaca.markets, add a bold reminder that
   paper trades have no tax consequence — this is pipeline testing only.

Do NOT send this to Telegram/ClickUp by default (personal financial data).
Explicitly ask the user before pushing tax numbers to any external channel.
