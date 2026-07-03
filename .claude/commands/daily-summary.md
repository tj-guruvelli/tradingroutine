---
description: Local end-of-day summary. Computes P&L, appends EOD snapshot to TRADE-LOG. No git push.
---

Local run of the daily summary workflow. Credentials from local .env.
Ultra-concise. Stocks only. Resolve date: DATE=$(date +%Y-%m-%d).

STEP 1 — Read memory: tail of memory/TRADE-LOG.md (most recent EOD snapshot ->
yesterday's equity for Day P&L); count today's trades and this week's trades.

STEP 2 — Pull final state:
  bash scripts/alpaca.sh account
  bash scripts/alpaca.sh positions
  bash scripts/alpaca.sh orders

STEP 3 — Compute: Day P&L ($ and %) = today_equity - yesterday_equity; Phase
cumulative P&L; trades today; trades this week.

STEP 4 — Append EOD snapshot to memory/TRADE-LOG.md:
### MMM DD — EOD Snapshot (Day N, Weekday)
**Portfolio:** $X | **Cash:** $X (X%) | **Day P&L:** ±$X (±X%) | **Phase P&L:** ±$X (±X%)
| Ticker | Shares | Entry | Close | Day Chg | Unrealized P&L | Stop |
**Notes:** one-paragraph plain-english summary.

STEP 5 — Print the same summary to chat (<= 15 lines). (Local mode: no git push.)
