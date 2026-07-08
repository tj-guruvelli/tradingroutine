---
description: Local pre-market research run. Reads memory + account, researches, writes RESEARCH-LOG. No git push.
---

Local run of the pre-market research workflow. Credentials come from the local
.env. Ultra-concise. Stocks only — never options. Resolve date: DATE=$(date +%Y-%m-%d).

STEP 1 — Read memory: memory/TRADING-STRATEGY.md, tail of memory/TRADE-LOG.md,
tail of memory/RESEARCH-LOG.md.

STEP 2 — Pull live state:
  bash scripts/alpaca.sh account
  bash scripts/alpaca.sh positions
  bash scripts/alpaca.sh orders

STEP 3 — Research via Perplexity (bash scripts/perplexity.sh "<query>"):
oil prices; S&P futures; VIX; today's catalysts; pre-market earnings; economic
calendar; sector momentum; news on each held ticker. If perplexity.sh exits 3,
fall back to native WebSearch and note the fallback.

STEP 3.5 — Chart + sentiment read on each currently-held ticker + any Tier-1
watchlist candidate:
    mcp__tradingview-data__combined_analysis { symbol, exchange: "NASDAQ", timeframe: "1D" }
This one call replaces a standalone sentiment-only lookup — it returns
technical (RSI/MACD/SMA/EMA/Bollinger/ADX/support-resistance/stock_score/
grade/trend_state), Reddit sentiment, and news in one shot. Use the
`technical` block as the chart-read baseline for each candidate; note
`stock_score` and `grade` alongside the trade idea in STEP 4.
If `sentiment.posts_analyzed` is 0 across the board, the upstream Reddit
feed is down (known issue as of 2026-07-07) — skip that field silently, do
not block on it, and do not spend more than one retry per ticker. The
`technical` block is unaffected by this and should always be populated.

STEP 4 — Append a dated entry to memory/RESEARCH-LOG.md: account snapshot,
market context, 2-3 trade ideas (catalyst + entry/stop/target + stock_score/
grade from STEP 3.5), risk factors, sentiment notes (if available), and a
TRADE/HOLD decision (default HOLD).

STEP 5 — Print a short summary to the chat. (Local mode: no git commit/push.)
