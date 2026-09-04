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

## Week ending 2026-08-21
### Stats
| Metric | Value |
|--------|-------|
| Starting portfolio | $100,000.00 |
| Ending portfolio | $100,000.00 |
| Week return | $0.00 (0.00%) |
| S&P 500 week | -1.3% (~7,782.84 → 7,681) |
| Bot vs S&P | +1.3% |
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
- Discipline held all 5 sessions through a genuinely volatile week (30Y yield highest since Jun 2007, hot PPI print, Iran-sanctions/Hormuz headline risk, WMT/ROST earnings) — no forced trades, no chasing the two-sided Brent/geopolitical headline
- Caught and correctly invalidated a real script bug same-day: the 10:16 ET gappers auto-scan flagged 2 "hits" (BWLP, LPG) that were stale-`dailyBar` artifacts from a post-open trigger, not real gaps — verified via live quotes before any research time was spent, zero false signal reached a trade decision
- Setup-scan (Alpaca-bars fallback) kept surfacing candidates weekly (BMNR grade-B, RSI 69.6/ADX 26.55) despite `tradingview-data` MCP still down — the fallback pipeline is functioning as a real second read, not just a stopgap
- Account/position state re-confirmed live via `alpaca.sh` every session — no reliance on stale cached figures
- Bot beat the S&P this week (flat vs. -1.3%) — first week this phase the zero-entry stance was rewarded rather than costly, though this is variance, not skill
### What Didn't Work
- 6th consecutive zero-entry week (32 trading days since launch, Jul 9) — the streak itself is now the dominant fact about this account, independent of this week's favorable variance
- `tradingview-data` MCP still down (30+ consecutive sessions) — confluence's technical leg remains structurally unsatisfiable via the primary path; the Alpaca-bars fallback still hasn't been wired into the pre-market/gappers confluence check itself, 3rd week running this exact fix was proposed and not shipped
- New confirmed bug this week (`scripts/gappers-alpaca.sh` uses stale `dailyBar` once market is open, fabricating gap signals on a post-9:30 trigger) — caught and worked around today, but not yet fixed at the source; will recur on every future post-open Gappers trigger until patched
- Missing dated Market-Open/Pre-Market TRADE-LOG entries on Aug 18 and Aug 21 (2 of 5 sessions) — same intermittent logging gap flagged in each of the last 3 weekly reviews, still unresolved
- $100k live equity vs $10,000 baseline in TRADING-STRATEGY.md/PROJECT-CONTEXT.md mismatch, flagged every session since Jul 27 (39 straight sessions / 8th consecutive weekly review), still unresolved — no operator response yet
### Key Lessons
- A structural bug (stale `dailyBar` post-open) sitting undiscovered for weeks until a routine happened to fire post-open is a reminder that "no trades taken" doesn't mean "no risk" — this one would have fed fabricated gap-down signals into research time, or worse, a trade decision, on a differently-timed trigger
- Proposed infrastructure fixes (technical fallback wiring, TRADE-LOG logging gaps, baseline mismatch) that get re-flagged 3-8 weeks running without shipping are a process failure distinct from the trading discipline itself, which continues to hold up under real catalysts
- This week's outperformance vs. S&P (flat vs. -1.3%) is not evidence the zero-entry stance is working — it is a single data point in a down week; the multi-week opportunity cost from Aug 7 (-3.6% missed) still dominates the phase-to-date picture
### Adjustments for Next Week
- Fix `scripts/gappers-alpaca.sh` at the source: prefer `prevDailyBar` once `now > 9:30 ET`, or validate `dailyBar`'s timestamp against today's session start, before trusting any post-open Gappers trigger again
- Wire the Alpaca-bars technical fallback into the pre-market/gappers confluence check — carried over for a 3rd straight week, now blocking real candidate promotion (e.g., this week's BMNR grade-B) not just a hypothetical one
- Investigate the Aug 18/Aug 21 missing TRADE-LOG entry pattern — 4th week running with at least one missing dated entry
- Escalate the $10k vs $100k baseline mismatch again in this week's ClickUp send (8th week flagged, still no operator action) — recommend the operator either reconcile the number or explicitly confirm $100k is correct so this stops re-flagging
- Keep trade limits and confluence rule unchanged — no strategy rule proven wrong; every blocker this week and prior weeks is operational/data-pipeline, not the rules themselves
### Overall Grade: C

## Week ending 2026-08-28
### Stats
| Metric | Value |
|--------|-------|
| Starting portfolio | $100,000.00 |
| Ending portfolio | $100,000.00 |
| Week return | $0.00 (0.00%) |
| S&P 500 week | +0.5% (7,674.37 → 7,711.76) |
| Bot vs S&P | -0.5% |
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
- Discipline held all 5 sessions through a genuinely catalyst-dense week (active Iran-war risk-off tick Mon, NVDA earnings Wed, core PCE Wed, MRVL earnings Thu, Fed Chair Jackson Hole speech Fri) — zero forced trades into any of the stacked binary events
- Correctly avoided sizing AI/semis read-through (AVGO, AMD) around the NVDA/MRVL prints and passed on fresh energy longs into a multi-day Brent/WTI unwind
- Caught the Aug 26 10:15 ET gappers false positives (APT, ZIM, WLDS, UMAC) via live-quote/bars cross-check before spending any deep-dive research time on fabricated signals
- Flagged data conflicts instead of acting on them — sector-momentum reads contradicted each other Aug 27 vs Aug 28, and BKSY's -7.25% gap conflicted with same-day AAII data — both correctly left as watch-only, not sized
- Account/position state re-confirmed live via `alpaca.sh` every session — no reliance on stale cached figures
### What Didn't Work
- 7th consecutive zero-entry week (37 trading days since launch, Jul 9) — sat in 100% cash through a modestly positive (+0.5%) S&P week
- Apify RAG web browser degraded sharply this week — near-total outage Aug 27 ("Scraped 0 pages" on every query, including a bare test query) and garbled/unusable results on 5 of 6 queries Aug 28, plus partial drift Aug 26 — a worse failure mode than prior weeks' occasional single-query drift; WebSearch fallback carried most of the week's research
- `scripts/gappers-alpaca.sh`'s stale-`dailyBar` bug recurred a **2nd confirmed time** (Aug 26, 10:15 ET run, 4 fabricated gap signals) — the Aug 21 fix proposal (prefer `prevDailyBar` once `now > 9:30 ET`, or validate `dailyBar`'s own timestamp) still hasn't shipped, 5 days after the first recurrence
- `tradingview-data` MCP still down the entire week (8th consecutive week) — confluence's technical leg remains structurally unsatisfiable via the primary path; the Alpaca-bars fallback still hasn't been wired into the pre-market/gappers confluence check itself, now a **4th straight week** this exact fix has been proposed and not shipped
- $100k live equity vs $10,000 baseline in TRADING-STRATEGY.md/PROJECT-CONTEXT.md mismatch, flagged every session since Jul 27 (9th consecutive weekly review), unresolved 47 straight sessions — no operator response yet
### Key Lessons
- Two confirmed recurrences of the same stale-`dailyBar` bug (Aug 21, then Aug 26) show a documented-but-unshipped fix compounds risk every time the routine happens to fire post-open — this is now an established pattern, not a one-off
- A near-total single-day Apify outage (Aug 27) shows the WebSearch fallback path is doing first-class work, not just backstopping occasional drift — it deserves monitoring as a primary dependency going forward
- Infrastructure proposals re-flagged 3-4+ weeks running without shipping (technical fallback wiring, gappers bug fix, baseline mismatch) are a distinct process failure, separate from the trading discipline itself, which kept correctly filtering real catalysts (Iran war, NVDA, MRVL, Jackson Hole) without forcing a trade
### Adjustments for Next Week
- Fix `scripts/gappers-alpaca.sh` at the source (prefer `prevDailyBar` once `now > 9:30 ET`, or validate `dailyBar`'s own timestamp) — now a 2nd confirmed recurrence, top priority
- Wire the Alpaca-bars technical fallback into the pre-market/gappers confluence check — 4th straight week this fix has been proposed and not shipped
- Escalate the $10k vs $100k baseline mismatch again in this week's ClickUp send (9th week flagged, 47 straight sessions, still no operator action) — recommend the operator explicitly reconcile the figure or confirm $100k is correct
- Keep trade limits and confluence rule unchanged — no strategy rule proven wrong; every blocker this week and prior weeks is operational/data-pipeline, not the rules themselves
### Overall Grade: C

## Week ending 2026-09-04
### Stats
| Metric | Value |
|--------|-------|
| Starting portfolio | $100,000.00 |
| Ending portfolio | $100,000.00 |
| Week return | $0.00 (0.00%) |
| S&P 500 week | +0.09% (7,711.76 → 7,718.60) |
| Bot vs S&P | -0.09% |
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
- **Shipped a fix that had been re-proposed 4+ straight weeks**: `scripts/gappers-alpaca.sh`'s stale-`dailyBar` post-open false-positive bug (5th confirmed recurrence, Sep 4 11:15 ET run — KLIC/BWLP/LPG fabricated) was root-caused and patched at the source instead of manually invalidated again — now derives the prev-close baseline from the bars' own timestamps, not wall-clock time, and prefers real trade prints over wide/stale quote-midpoints (a 2nd, previously-undetected bug found while verifying the fix, which would have produced a false BKSY hit). Re-ran post-fix and surfaced 2 real hits (DPRO, BMNR) that the stale-baseline bug had simultaneously been masking
- Discipline held all 5 sessions through a live Iran/Hormuz re-escalation (first direct US-Iran military exchange in weeks, Brent +1.8-5.8% at various points, VIX pops) and Friday's NFP print — no forced trades into an actively unresolved geopolitical/macro binary
- Account/position state re-confirmed live via `alpaca.sh` every session — no reliance on stale cached figures
### What Didn't Work
- 8th consecutive zero-entry week (42 trading days since launch, Jul 9) — sat in 100% cash through a roughly flat (+0.09%) S&P week, though opportunity cost was minimal this particular week
- `tradingview-data` MCP still down the entire week (5th+ straight week) — confluence's technical leg remains structurally unsatisfiable via the primary path; the Alpaca-bars fallback still hasn't been wired into the pre-market/gappers confluence check itself, now the 5th straight week this exact fix has been proposed and not shipped
- New Apify RAG web browser failure pattern identified: the literal "S&P 500 futures"/"S&P 500 weekly performance" query specifically misfires (matches unrelated "S"-letter Wikipedia/Wiktionary pages and Spotify instead of real data) — reproduced 3+ sessions running in RESEARCH-LOG (Sep 1-3) and again during this review's own S&P week-performance lookup; WebSearch fallback covered it every time, but the query itself needs rewording (e.g. avoid a bare "S&P 500" root match) to stop wasting an Apify call each time
- $100k live equity vs $10,000 baseline in TRADING-STRATEGY.md/PROJECT-CONTEXT.md mismatch, flagged every session since Jul 27 (53 straight sessions / 10th consecutive weekly review), still unresolved — no operator response yet
### Key Lessons
- A fix that gets re-proposed weekly without shipping (gappers stale-baseline bug, 4+ weeks running) finally landed only once a 5th recurrence forced the root-cause work instead of another one-off invalidation — process lesson holds: flag-and-defer doesn't converge, only actually patching does
- The Apify RAG web browser's "S&P 500" misfire is narrow and reproducible enough to be a query-phrasing bug, not a general degradation — worth a targeted workaround rather than continued fallback-and-log
### Adjustments for Next Week
- Reword the Apify RAG web browser's S&P-500-performance/futures query (e.g. quote the full index name or add disambiguating terms) so it stops matching the "S" Wikipedia article and burning a call before falling back to WebSearch
- Wire the Alpaca-bars technical fallback into the pre-market/gappers confluence check — carried over for a 5th straight week, now the sole remaining item on last week's list still unshipped
- Escalate the $10k vs $100k baseline mismatch again in this week's ClickUp send (10th week flagged, 53 straight sessions, still no operator action) — recommend the operator explicitly reconcile the figure or confirm $100k is correct
- Keep trade limits and confluence rule unchanged — no strategy rule proven wrong; this week's real infra win (gappers fix shipped) shows the operational backlog can move when root-caused instead of re-flagged
### Overall Grade: C
