---
description: Reddit sentiment + RSS news for a ticker via tradingview-data MCP
---

Fills the "Social Feed" / "News Agent" gap identified in the Fable Five reel
gap-analysis (see `market-journal/RESEARCH-fable-five-ai-hedge-fund-reel.md`).
Read-only. No trades, no file writes unless run from `/pre-market`.

## KNOWN ISSUE (as of 2026-07-07)

Both `market_sentiment` and `financial_news` currently return **empty results
for every symbol tested** (AAPL, NVDA, TSLA all returned 0 posts / 0 items),
despite `feedparser_available: true`. This is an upstream data-source issue
on the MCP server side (Reddit scraping and/or RSS feed), not a parameter
bug — the correct parameters ARE wired below and verified against the live
tool schema. If you get 0 results, do not assume the wiring is broken; note
it and fall back to `bash scripts/perplexity.sh` or native WebSearch for
sentiment/news color instead.

## Args
- `<INPUT_SYMBOL>` — the stock symbol the user gives you (required). This is
  just a placeholder name for "whatever ticker the user typed" — it is NOT
  a tool parameter name. Do not call any tool with a key literally named
  `ticker`.
- `<INPUT_CATEGORY>` (optional; `stocks` | `crypto` | `all`, default `stocks`)

## Steps

1. ⚠️ THE ONLY VALID PARAMETER NAME ON BOTH TOOLS IS `symbol`. Both tools
   will throw a Pydantic `Field required` error if you pass `ticker` instead
   — this has happened before in this exact repo (see BACKTEST-LOG.md
   2026-07-07). Call in parallel using the JSON key `symbol`, set to
   `<INPUT_SYMBOL>`'s value:
   ```
   mcp__tradingview-data__market_sentiment { "symbol": "<value>", "category": "<INPUT_CATEGORY>", "limit": 20 }
   mcp__tradingview-data__financial_news { "symbol": "<value>", "category": "<INPUT_CATEGORY>", "limit": 10 }
   ```

2. If `market_sentiment.posts_analyzed == 0` AND `financial_news.count == 0`,
   the upstream source is down. Fall back:
   ```
   bash scripts/perplexity.sh "What is current Reddit/social sentiment and recent news on <value>? One paragraph."
   ```
   If Perplexity is unset (exit 3), fall back to native WebSearch.

3. Print a compact summary:
   ```
   <value> sentiment: <bullish/bearish/neutral> (score X, N posts)
   Top posts: ...
   Recent news: ...
   ```

4. Never treat sentiment alone as a trade signal — per TRADING-STRATEGY.md,
   a documented catalyst is still required. Sentiment is confluence, not
   a standalone entry trigger.
