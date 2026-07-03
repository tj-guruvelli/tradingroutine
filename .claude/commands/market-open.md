---
description: Local market-open execution run. Validates + places planned trades with stops. No git push.
---

Local run of the market-open execution workflow. Credentials from local .env.
Ultra-concise. Stocks only — never options. Resolve date: DATE=$(date +%Y-%m-%d).

STEP 1 — Read memory: memory/TRADING-STRATEGY.md, TODAY's memory/RESEARCH-LOG.md
entry (if missing, do pre-market research inline first — never trade without
documented research), tail of memory/TRADE-LOG.md (weekly trade count).

STEP 2 — Re-validate with live data:
  bash scripts/alpaca.sh account
  bash scripts/alpaca.sh positions
  bash scripts/alpaca.sh quote <each planned ticker>

STEP 3 — Hard-check rules before EACH order; skip + log any that fail:
positions after trade <= 6; trades this week <= 3; cost <= 20% equity;
cost <= available cash; catalyst in today's RESEARCH-LOG; daytrade_count leaves
room (PDT 3/5); instrument is a stock.

STEP 4 — Buys (market, day TIF):
  bash scripts/alpaca.sh order '{"symbol":"SYM","qty":"N","side":"buy","type":"market","time_in_force":"day"}'
Wait for fill before placing the stop.

STEP 5 — Immediately place 10% trailing stop GTC per new position:
  bash scripts/alpaca.sh order '{"symbol":"SYM","qty":"N","side":"sell","type":"trailing_stop","trail_percent":"10","time_in_force":"gtc"}'
PDT rejection -> fixed stop 10% below entry -> if also blocked, queue in
TRADE-LOG as "PDT-blocked, set tomorrow AM".

STEP 6 — Append each trade to memory/TRADE-LOG.md (match existing format).

STEP 7 — Print a short summary. (Local mode: no git commit/push.)
