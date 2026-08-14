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

## Week ending 2026-08-07
### Stats
| Metric | Value |
|--------|-------|
| Starting portfolio | $100,000.00 |
| Ending portfolio | $100,000.00 |
| Week return | $0.00 (0.00%) |
| S&P 500 week | +3.6% (7,489.72 → 7,757.64) |
| Bot vs S&P | -3.6% |
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
- Discipline held all 5 sessions — zero forced trades despite active gap/momentum candidates (ASTS, BE, CRWV, KTOS, AMPX, OPEN, NYT, GFS) that each failed confluence, the chase rule, or the earnings-binary exclusion
- Correctly caught ASTS as a chase (already ~13% above prior close, ~6% above its own 20-day SMA, stacked on a prior 3-day +19.7% bounce) and passed
- Correctly excluded earnings-binary names (BKSY, UMAC, SATL) per the no-earnings-binary rule ahead of their respective earnings dates
- Account/position state re-confirmed live via alpaca.sh every session — no reliance on stale cached figures
### What Didn't Work
- 4th consecutive zero-entry week (22 trading days since launch, Jul 9) — sat in 100% cash through a +3.6% S&P week, the largest single-week opportunity cost of the challenge so far
- `tradingview-data` MCP down the entire week (20+ consecutive sessions) — confluence's technical leg stayed unsatisfiable every day regardless of setup quality
- The Alpaca-bars RSI/SMA/VWAP fallback proposed in last week's review (2026-07-31) was not built — same blocker recurred all 5 sessions with no mitigation in place
- Missing Market-Open TRADE-LOG entries on Aug 3, Aug 6, and Aug 7 (3 of 5 sessions) — routine did not log, or did not run; audit trail has gaps this week beyond the usual research notes
- $100k live equity vs $10,000 baseline in TRADING-STRATEGY.md/PROJECT-CONTEXT.md mismatch, flagged every session since Jul 27 (6th consecutive week), still unresolved — no operator response yet
### Key Lessons
- Three-plus weeks of continuous `tradingview-data` downtime is no longer a temporary outage to wait out — it is the dominant blocker on every actionable idea. "HOLD by default" without a working fallback path stops being patience and starts being a structurally broken pipeline
- A proposed fix that doesn't get built by the following week just repeats the same missed-opportunity outcome — the fallback needs to actually ship, not just be re-proposed
- Missing Market-Open TRADE-LOG entries on 3 separate days this week is itself worth investigating — distinguish "routine ran, correctly found nothing" from "routine didn't run at all"
### Adjustments for Next Week
- Build the Alpaca-bars-based RSI/SMA/VWAP fallback so confluence can be evaluated independent of `tradingview-data` MCP uptime — carried over from last week, now the top priority given a second week of missed gains
- Investigate why Market-Open TRADE-LOG entries were missing Aug 3/6/7; confirm the routine is firing reliably each session
- Escalate the $10k vs $100k baseline mismatch again in this week's ClickUp send (6th week flagged, still no operator action)
- Keep trade limits and confluence rule unchanged — no rule proven wrong, only the data pipeline underneath it
### Overall Grade: D

## Week ending 2026-08-14
### Stats
| Metric | Value |
|--------|-------|
| Starting portfolio | $100,000.00 |
| Ending portfolio | $100,000.00 |
| Week return | $0.00 (0.00%) |
| S&P 500 week | +0.3% (7,757.64 → ~7,782.84) |
| Bot vs S&P | -0.3% |
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
- Discipline held all 5 sessions — zero forced trades despite a genuinely eventful macro week (Strait of Hormuz escalation, CPI Wed + PPI Thu prints, RCAT/AMPX/ONDS drone-tariff gap Fri) where several ideas had real catalysts but none cleared the 2-indicator confluence bar or passed the chase rule
- Correctly stayed flat into both CPI (Aug 12) and PPI (Aug 13) prints rather than sizing new risk into binary macro releases, per strategy discipline
- Every setup-scan run this week (5 sessions, incl. 2x/day some days) returned 0 grade-A hits — cross-checked against TRADE-LOG/RESEARCH-LOG, confirms no missed high-quality setup was left on the table, only low-conviction grade-B momentum names (CRWV, PEPG, LUNR, V at various points)
- Account/position state re-confirmed live via `alpaca.sh` every session — no reliance on stale cached figures
### What Didn't Work
- 5th consecutive zero-entry week (27 trading days since launch, Jul 9) — sat in 100% cash through a modestly positive (+0.3%) S&P week, though the opportunity cost was small this week vs. prior weeks
- `tradingview-data` MCP still down (30+ consecutive sessions per today's setup-scan log) — confluence's technical leg remains structurally unsatisfiable via the primary path; the Alpaca-bars RSI/EMA/ADX fallback in `setup-scan-cloud.mjs` is carrying all technical reads now, but the full VWAP/200-SMA/insider confluence set proposed Jul 31/Aug 7 still hasn't shipped
- Missing Market-Open TRADE-LOG entry on Aug 13 (Gappers ran, Market-Open/Pre-Market did not log) — same intermittent logging gap flagged in each of the last 2 weekly reviews
- $100k live equity vs $10,000 baseline in TRADING-STRATEGY.md/PROJECT-CONTEXT.md mismatch, flagged every session since Jul 27 (7th consecutive week), still unresolved — no operator response yet
### Key Lessons
- A macro-event-dense week (Hormuz, CPI, PPI, tariff headline) with genuine catalysts and still zero entries shows the confluence + chase-rule + no-earnings-binary combination is doing real filtering work, not just defaulting to HOLD by data-outage default — worth noting as evidence the discipline itself is sound, independent of the MCP gap
- The MCP-outage fallback (Alpaca-bars RSI/EMA/ADX in setup-scan) is functioning and surfacing grade-B candidates weekly, but it has not yet been wired into the pre-market/gappers confluence check itself — that gap (proposed 3 weeks running) is the actual remaining blocker, not raw data availability
### Adjustments for Next Week
- Wire the working Alpaca-bars technical fallback (already proven in setup-scan-cloud.mjs) into the pre-market/gappers confluence check so a qualifying grade-B/A candidate can actually be promoted to a trade without waiting on tradingview-data MCP recovery
- Investigate the Aug 13 missing Market-Open TRADE-LOG entry pattern — 3rd time in 3 weeks a routine appears to have not logged
- Escalate the $10k vs $100k baseline mismatch again in this week's ClickUp send (7th week flagged, still no operator action)
- Keep trade limits and confluence rule unchanged — no rule proven wrong; this week's discipline held up even with real catalysts in play
### Overall Grade: C
