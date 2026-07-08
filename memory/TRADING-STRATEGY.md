# Trading Strategy

## Mission
Beat the S&P 500 over the challenge window. Stocks only — no options, ever.

## Capital & Constraints
- Starting capital: ~$10,000
- Platform: Alpaca (PAPER by default)
- Instruments: Stocks ONLY
- PDT limit: 3 day trades per 5 rolling days (account < $25k)

## Core Rules
1. NO OPTIONS — ever
2. 75-85% deployed
3. 5-6 positions at a time, max 20% each
4. 10% trailing stop on every position as a real GTC order
5. Cut losers at -7% manually
6. Tighten trail: 7% at +15%, 5% at +20%
7. Never within 3% of current price; never move a stop down
8. Max 3 new trades per week
9. Follow sector momentum
10. Exit a sector after 2 consecutive failed trades
11. Patience > activity

## Entry Checklist
- Specific catalyst?
- Sector in momentum?
- Stop level (7-10% below entry)
- Target (min 2:1 R:R)
- Confluence: at least 2 of {VWAP, RSI, 200-SMA, insider signal} align

## Indicator Canon

### VWAP (Volume-Weighted Average Price)
- BUY signal: price below VWAP (mean-revert candidate) with momentum re-emerging
- SELL signal: price above VWAP with volume weakening

### RSI (Relative Strength Index, 14)
- Overbought: > 70 (sell / no new long)
- Oversold: < 30 (mean-revert candidate for buy)
- Divergence with price is worth more than absolute level

### Moving averages
- 200-SMA: long-bias filter — only long when price > 200-SMA on daily
- 50-EMA: intermediate trend
- 20-EMA: short-term trend; TJL uses this as intraday pullback zone

### Insider signal (Openinsider)
- Cluster buys (multiple insiders buying within 30d) = strong bullish
- CEO / President personal-account buys > $500k = strong bullish
- Selling by executives = neutral (they diversify) unless unusually large

### Confluence rule
No entry unless ≥ 2 indicators agree AND at least 1 catalyst is documented.

## Valuation guardrails
- P/E ratio — compare to S&P 500 average (~29 as of 2026)
- P/S ratio — for non-profitable / high-growth (> 15 common for fast growers)
- Forward P/E — favor when available; investors price the future
- Skip valuation for pure momentum setups (< 3-day hold intent)

## Trailing stop mechanics
- Base: 10% trailing GTC on every new position
- Tighten to 7% once position is +15%
- Tighten to 5% once position is +20%
- Never move stop DOWN. Never within 3% of current price.
- Prefer trailing_stop order type (Alpaca supports GTC trailing stops on paper + live)

## Sector rotation (economic cycle)

| Phase | Favored sectors |
|-------|-----------------|
| Early cycle (post-recession recovery) | Technology, Consumer Discretionary, Industrials |
| Mid cycle (steady growth) | Healthcare, Consumer Staples, Utilities |
| Late cycle (inflation rising) | Energy, Materials, Financials |
| Recession | Utilities, REITs, Consumer Staples (defensive) |

Cycle indicators to monitor: yield-curve inversion, GDP growth trend, unemployment,
CPI/PPI trend. Use sector ETFs (XLK, XLF, XLE, XLU) for broad exposure before
individual picks.

## Openinsider workflow
1. Openinsider.com → Latest Cluster Buys (top of page)
2. Openinsider.com → Latest Insider Buys (CEO/President filter)
3. Feed the ticker through Perplexity Finance for 10-12 min deep research
4. If catalyst + insider + confluence align → add to Tier 1 with a plan

## Watchlist tier system
- Tier 1 — immediate trades (setup queued, entry within a few sessions)
- Tier 2 — 30-day prospects (research done, waiting for entry trigger)
- Tier 3 — long-term watch (accumulate on dips, low urgency)
- Cap at 20-30 total tickers to avoid analysis paralysis
- Sector-diversified (no > 25% in one sector)

## Financial-statement checks (Tier 2/3 candidates before Tier 1 promotion)
- Income statement: revenue growth trend, operating margin expansion
- Balance sheet: current ratio > 1.5, debt/equity < 0.6
- Cash flow: FCF positive and growing year-over-year
- Red flags: declining gross margins, ballooning inventory, frequent one-time charges
- Read the earnings-call transcript on Seeking Alpha for management tone

## What this strategy explicitly does NOT do
- Options / futures / crypto / forex — refuse to trade
- Day trading > 3 in 5 days (PDT rule)
- Chase — no entry within 3% of a print > 5% up on the day
- Bottom-fish — no long entry without a documented catalyst; drawdown alone is not a catalyst
- Average down on a losing position (cut at -7% instead)
