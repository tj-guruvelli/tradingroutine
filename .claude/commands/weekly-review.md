---
description: Local Friday weekly review. Computes week stats, appends review + letter grade to WEEKLY-REVIEW. No git push.
---

Local run of the weekly review workflow. Credentials from local .env.
Ultra-concise. Stocks only. Resolve date: DATE=$(date +%Y-%m-%d).

STEP 1 — Read memory: memory/WEEKLY-REVIEW.md (match template exactly), ALL this
week's memory/TRADE-LOG.md and memory/RESEARCH-LOG.md entries,
memory/TRADING-STRATEGY.md.

STEP 2 — Pull week-end state:
  bash scripts/alpaca.sh account
  bash scripts/alpaca.sh positions

STEP 3 — Compute: starting portfolio (Mon AM), ending portfolio, week return
($ and %), S&P 500 week return (bash scripts/perplexity.sh "S&P 500 weekly
performance week ending $DATE"), trades W/L/open, win rate, best/worst trade,
profit factor. If Perplexity is unset (exit 3), fall back to native WebSearch
for the same S&P 500 query.

STEP 4 — Append a full review section to memory/WEEKLY-REVIEW.md: stats table,
closed trades table, open positions at week end, what worked (3-5), what didn't
(3-5), key lessons, adjustments for next week, overall letter grade A-F.

STEP 5 — If a rule proved out for 2+ weeks or failed badly, propose an update to
memory/TRADING-STRATEGY.md and call it out in the review.

STEP 6 — Print headline numbers to chat (<= 15 lines). (Local mode: no git push.)
