# Weekly Review

Friday reviews appended here.

Template for each entry:

## Week ending YYYY-MM-DD
### Stats
| Metric | Value |
|--------|-------|
| Starting portfolio | $X |
| Ending portfolio | $X |
| Week return | ±$X (±X%) |
| S&P 500 week | ±X% |
| Bot vs S&P | ±X% |
| Trades | N (W:X / L:Y / open:Z) |
| Win rate | X% |
| Best trade | SYM +X% |
| Worst trade | SYM -X% |
| Profit factor | X.XX |
### Closed Trades
| Ticker | Entry | Exit | P&L | Notes |
### Open Positions at Week End
| Ticker | Entry | Close | Unrealized | Stop |
### What Worked
- ...
### What Didn't Work
- ...
### Key Lessons
- ...
### Adjustments for Next Week
- ...
### Overall Grade: X

## Week ending 2026-07-31
### Stats
| Metric | Value |
|--------|-------|
| Starting portfolio | $100,000.00 |
| Ending portfolio | $100,000.00 |
| Week return | $0.00 (0.00%) |
| S&P 500 week | +1.05% (7,411.98 → 7,489.72) |
| Bot vs S&P | -1.05% |
| Trades | 0 (W:0 / L:0 / open:0) |
| Win rate | N/A (no closed trades) |
| Best trade | N/A |
| Worst trade | N/A |
| Profit factor | N/A (no trades) |
### Closed Trades
| Ticker | Entry | Exit | P&L | Notes |
| — | — | — | — | No trades closed this week |
### Open Positions at Week End
| Ticker | Entry | Close | Unrealized | Stop |
| — | — | — | — | 0 open positions |
### What Worked
- Discipline held all 5 sessions — zero forced trades despite repeated gap candidates (BE 3 straight days, CRWV 2 straight days, NBIS, plus MSFT/AMZN earnings pop) that each failed confluence or the no-chase rule
- Caught and fixed a real data-quality bug in the gappers scanner (fake gaps + stale snapshots) same-day, Jul 31 10:14 ET, before it could seed a bad signal
- Account/position state re-confirmed live via alpaca.sh every session — no reliance on stale cached figures
### What Didn't Work
- `tradingview-data` MCP down the entire week (6th+ consecutive session) — confluence's technical leg was unsatisfiable every day, blocking action regardless of setup quality
- Apify RAG web browser hit its monthly hard cap mid-week, degrading pre-market sourcing to WebSearch-fallback only
- Third consecutive zero-entry week (17 trading days since launch, Jul 9) — sat in 100% cash while S&P rose +1.05%
- $100k live equity vs $10,000 baseline in TRADING-STRATEGY.md/PROJECT-CONTEXT.md mismatch, flagged daily in TRADE-LOG since Jul 27, still unresolved — no operator response yet
### Key Lessons
- With the primary technical MCP down this long, "HOLD by default" isn't patience, it's a broken confluence pipeline — need a fallback technical path (Alpaca bars → RSI/SMA/VWAP) so setups can still be evaluated when tradingview-data is unavailable
- A mismatch flagged 5 sessions running without operator action needs to escalate via the weekly ClickUp alert, not just another log note
### Adjustments for Next Week
- Stand up an Alpaca-bars-based fallback for RSI/SMA/VWAP so confluence can be checked independent of tradingview-data MCP uptime
- Escalate the $10k vs $100k baseline mismatch explicitly in this week's ClickUp send
- Keep trade limits and confluence rule unchanged — no rule proven wrong, only the data pipeline underneath it
### Overall Grade: C
