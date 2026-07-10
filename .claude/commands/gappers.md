---
description: Premarket gappers scanner — Alpaca snapshot universe + Benzinga catalyst (Humbled Trader Scanner A shape)
---

Two-source premarket gap scan. Adapted from the Humbled Trader Scanner A pattern.
Yahoo Finance is NOT an approved data source (see CLAUDE.md Data Sources) —
never WebFetch finance.yahoo.com for anything, including the gainers page.

## Args
- optional `--threshold N` — minimum absolute gap % (default 5.0)
- optional `--pmvol N` — minimum premarket volume (default 50000)
- optional `--price N` — minimum price (default 3.0)
- optional `--source alpaca|watchlist` — default `alpaca` (Alpaca most-actives
  snapshot); `watchlist` scans memory/WATCHLIST.md's full tracked universe
  instead of the broad market.

## Prereq
Verify env: `ALPACA_API_KEY`, `ALPACA_SECRET_KEY`, `PERPLEXITY_API_KEY` (optional
but recommended for catalysts).

## Steps

### Step 1 — Pull gainers (universe)

- `--source alpaca` (default): `bash scripts/gappers-alpaca.sh most-active`
  (Alpaca most-actives snapshot, approved broker/market-data source).
- `--source watchlist`: `bash scripts/gappers-alpaca.sh watchlist` (scans
  only memory/WATCHLIST.md's tracked tickers via Alpaca snapshot).

### Step 2 — Filter

- `gap_pct >= threshold`
- `price >= price_min`
- `premarket_volume >= pmvol_min`
- Keep top 10 by |gap_pct| descending.

### Step 3 — Catalyst per ticker

For each of the top 10, run in parallel:
`bash scripts/perplexity.sh "What recent news or catalyst is driving $TICKER stock today? Return a one-sentence summary, then up to 2 recent headlines verbatim. Just the data — no commentary."`

If Perplexity is unset (`exit 3`), fall back to native `WebFetch https://www.benzinga.com/quote/$TICKER`
with the same prompt. NEVER use any finance.yahoo.com URL — not an approved
source, and the news endpoint 503s reliably anyway.

### Step 4 — Save JSON

Save to `data/premarket_gappers_YYYY-MM-DD.json`:
```json
{
  "scanned_at": "",
  "gappers": [
    {"rank": 1, "symbol": "AAPL", "price": 175.20, "gap_pct": 7.5,
     "premarket_volume": 1200000, "catalyst": "Beat Q1 earnings, raised FY guidance",
     "headlines": ["Apple Reports Strong Q1", "Analysts Boost Price Targets"],
     "stock_score": 7, "grade": "Buy", "sentiment_label": null}
  ]
}
```

If a single ticker's catalyst fetch fails, set `catalyst: null` and `headlines: []`
for that row — do NOT abort the whole scan.

### Step 4.5 — Sentiment + technical grade

For each of the top 10, in parallel:
`mcp__tradingview-data__combined_analysis { symbol, exchange: "NASDAQ", timeframe: "1D" }`

Extract `sentiment.sentiment_label`, `sentiment.posts_analyzed`, and
`technical.stock_score` / `technical.grade`. Add these three fields to each
gapper's JSON row. If `posts_analyzed == 0` (known upstream Reddit-feed
issue as of 2026-07-07), set `sentiment_label: null` rather than blocking —
this is informational enrichment, never a filter on whether a gapper makes
the list.

### Step 5 — Telegram

Send in this exact format:
```
📊 *Premarket Gappers* — YYYY-MM-DD
• TICKER $price +gap% — catalyst sentence [grade: X/10, sentiment: Y]
```

Bullet per gapper. If catalyst is null, omit the ` — catalyst` portion. If
sentiment_label is null, omit the `, sentiment: Y` portion (keep `grade` if
available — that data source is reliable even when sentiment isn't).

`bash scripts/telegram.sh "$MSG"` (falls back to ClickUp if Telegram fails).

### Step 6 — Append to memory

Append the ranked table to `memory/RESEARCH-LOG.md` under today's date as
`### Gappers (auto-scan HH:MM ET)`. Do NOT overwrite existing content.

### Step 7 — Feed Scanner B

If time is between 10:00 and 15:00 NY, save the ticker list to
`data/scanner_b_universe.txt` (one ticker per line). The /tjl command reads this.

## Rules
- Never auto-trade a gapper. Feed it to `/trade` (which runs full safety-check).
- Expected runtime 60-90 sec. Do not re-run within 25 min unless asked.
- Cache Perplexity results by (ticker, date) key to save tokens on rescans.
