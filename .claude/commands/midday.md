---
description: Local midday scan. Cuts -7% losers, tightens stops on winners, checks theses. No git push.
---

Local run of the midday scan workflow. Credentials from local .env.
Ultra-concise. Stocks only. Resolve date: DATE=$(date +%Y-%m-%d).

STEP 1 — Read memory: memory/TRADING-STRATEGY.md (exit rules), tail of
memory/TRADE-LOG.md (entries/thesis/stops), today's memory/RESEARCH-LOG.md.

STEP 2 — Pull state:
  bash scripts/alpaca.sh positions
  bash scripts/alpaca.sh orders

STEP 3 — Cut losers. For every position with unrealized_plpc <= -0.07:
  bash scripts/alpaca.sh close SYM
  bash scripts/alpaca.sh cancel ORDER_ID
Log the exit (exit price, realized P&L, "cut at -7% per rule").

STEP 4 — Tighten winners' trailing stops (cancel old, place new):
up >= +20% -> "5"; up >= +15% -> "7". Never within 3% of price; never move down.

STEP 5 — Thesis check: cut any position whose thesis broke intraday, even if
not at -7%. Document reasoning in TRADE-LOG.

STEP 6 — Optional intraday Perplexity research if something moves sharply with
no obvious cause; append an afternoon addendum to RESEARCH-LOG.

STEP 7 — Print a short summary. (Local mode: no git commit/push.)
