# RESEARCH-LOG-RECOVERED.md

This file holds memory/RESEARCH-LOG.md content from cloud routine runs
(pre-market research and gappers scans) whose `git push origin main` failed
because main had moved (another routine appended to RESEARCH-LOG.md under
the same date header first) and the routine's `git pull --rebase` then hit
a content conflict in RESEARCH-LOG.md and gave up. The platform pushed only
the session branch (never merged to main), so this content never reached
main until now.

Recovered 2026-09-08 from 46 `origin/claude/*` session branches whose tips
were not ancestors of main (out of 64 total lost branches; the rest made no
RESEARCH-LOG.md or TRADE-LOG.md change worth recovering). Each block below
is the raw text that branch's commit added to RESEARCH-LOG.md, in
chronological order by commit time. Blocks are kept as-is (not re-filed
under a single date header) so nothing is silently rewritten.

Any code/script changes on these branches were deliberately NOT recovered —
main has since received newer fixes to those same scripts and blindly
replaying old script diffs would regress them. Only memory/ log text and
data/ files were recovered (data/ files recovered separately, see
data/*.json additions in the same commit as this recovery).

Today's three lost runs (2026-09-08 pre-market, 09:24 ET gappers, 10:12 ET
gappers) are ALSO appended directly into memory/RESEARCH-LOG.md itself
(under the existing `## 2026-09-08` area) so today's later routines and
this week's weekly review see them without having to consult this file;
they remain here too for a complete record.

---

## RECOVERED from claude/eager-wozniak-5b5r5e (a9a7db20, 2026-07-28 13:22Z, "gappers scan 2026-07-28 09:20 ET (cloud) — 4 hits: AMKR/HXL/BE/STM")

### Gappers (auto-scan 09:20 ET, cloud)

Second cloud-gappers run today (10 min to open, vs. the 08:10 ET run above
which found 0 hits). Same fixed `scripts/gappers-alpaca.sh` (dailyBar-based
prev_close, today-timestamped quote/trade only). This run clears the gate:
4 candidates pass all three filters (|gap| >= 5%, price >= $3,
premarket_volume >= 50,000 — note this volume field is Monday's full-day
volume used as a liquidity proxy, not true premarket volume; Alpaca's
snapshot has no distinct premarket-volume field). Cross-checked all 4 against
`scripts/alpaca.sh bars`/`quote` before writing up: prev_close values match
Monday 7/27 daily-bar closes exactly, and quote timestamps are fresh
(~09:07 ET) — no repeat of this morning's stale-data bug. Caveat: bid/ask
spreads on all 4 are unusually wide for pre-open (9-24%), so the quote-
midpoint "current" price carries more noise than usual; gap% should be
treated as directional, not precise, until the open print.

Deep-dive cap: 5 (all 4 candidates get full deep-dive; none held back).

#### Gappers (auto-scan 09:20 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | AMKR | $52.89 | -12.93% | 540,051 | Q2 2026 earnings beat (rev +26% YoY, EPS $0.70) but stock sells off on 'sell the news' reaction despite in-line Q3 guidance |
| 2 | HXL | $102.40 | -6.68% | 63,940 | No HXL-specific catalyst found; looks like macro/beta unwind in a broad risk-off, chips-selling-off tape |
| 3 | BE | $177.72 | -5.54% | 524,559 | Earnings due after today's close (Jul 28); premarket weakness reads as pre-earnings de-risking, not a reaction to results |
| 4 | STM | $50.45 | -5.52% | 936,895 | Mixed Q2 2026 earnings — EPS beat, Q3 revenue guide below expectations, giving back part of a ~150% 3-month AI-driven rally |

#### Deep dive: AMKR $52.89 -12.93%
- Catalyst: Amkor reported Q2 2026 after Monday's close — net sales $1.898B
  (+26% YoY, record), gross margin 16.8% (up from 12.0% y/y), EPS $0.70 (vs
  $0.22 Q2'25). Q3 guide: $1.95-2.05B sales, 18.5-19.5% gross margin,
  $0.72-0.82 EPS — sequential growth on every line, capex guide raised to
  $2.5-3.0B (expansion, not caution). No warning language in the release.
- Why: Classic 'sell the news' — AMKR was already up ~52% YTD on the
  AI-packaging/OSAT story heading into print, so a clean beat-and-raise that
  just confirms the existing bull case invites profit-taking. This exact
  ticker did the same thing on its Q2'24 print (beat + guide, stock still
  dropped ~6-7%). Compounded by a broad chip-sector selloff today.
- Impact: Volume (540K, Monday's full-day print, liquidity proxy only) is
  well above AMKR's norm on a fundamentals-driven print — a real repricing,
  not noise. Read-through: STM (below) shows the identical beat-but-selloff
  pattern today — a sector-wide 'good quarter isn't good enough' reaction,
  not company-specific.
- Horizon: SHORT_TERM for a trade decision today (earnings gap, elevated IV,
  no edge in post-earnings day-1 drift direction) — LONG_TERM thesis intact
  (record revenue, raised capex, AI/HPC packaging demand); revisit once the
  gap settles and 200-SMA/VWAP confluence can be checked.
- Opportunity cost: 0 open positions, 0 trades this week — no displacement,
  no weekly-cap pressure. Clearest documented catalyst of today's 4 gappers.
  Confluence rule (2 of VWAP/RSI/200-SMA/insider) not yet checked; required
  before any /trade action.

#### Deep dive: HXL $102.40 -6.68%
- Catalyst: No HXL-specific news dated today after two separate searches
  (catalyst query + fundamentals query). Last earnings were Q1 2026
  (~Apr 23, beat, stock surged) — stale, not today's driver. Most recent
  company item on file is a March CFO-change story, also stale.
- Why: No identified HXL-specific mechanism. Best working read is beta/
  momentum unwind riding a broad risk-off tape (chips-selling-off backdrop
  cited across today's other gappers) — HXL is aerospace-composites, not
  semis, but still an industrial cyclical caught in broad de-risking.
- Impact: Volume (63,940, Monday's full-day print, liquidity proxy) barely
  clears the 50K floor and is normal range for HXL, not an outlier. Reads
  more like a one-day beta wobble than a durable repricing, absent a catalyst.
- Horizon: SHORT_TERM — no structural catalyst identified, doesn't qualify
  for a multi-day swing thesis regardless of current sector-rotation phase.
- Opportunity cost: No open positions to displace. Fails the Confluence
  rule's catalyst requirement outright — hold-and-watch, not a trade
  candidate, unless further research turns up an actual reason for the move.

#### Deep dive: BE $177.72 -5.54%
- Catalyst: Bloom Energy reports Q2 2026 earnings AFTER today's close —
  today's premarket weakness predates the print, not a reaction to it.
- Catalyst detail: No BE-specific news dated today; the one forward-looking
  piece on file flags earnings due tonight. BE is up ~110% YTD, carrying a
  large embedded move into the print. A prior-session marketwatch snippet
  references a broad "Nasdaq drops 2%, Dow falls 950 points, chips slide"
  tape, consistent with the same risk-off backdrop hitting AMKR/STM/HXL.
- Why: Reads as pre-earnings de-risking/profit-taking after a huge YTD run,
  amplified by a broad risk-off/chip-weak tape rather than any BE-specific
  negative print — distinct mechanism from AMKR/STM's post-earnings reaction.
- Impact: Volume (524,559, Monday's full-day print, liquidity proxy) is high
  for BE, consistent with real position-trimming. Not a stable read either
  way — the real move happens after tonight's print; anything read into
  today's gap is provisional.
- Horizon: SHORT_TERM — explicitly event-driven (earnings tonight); no basis
  for a multi-day thesis until the print lands and can be re-checked against
  Confluence.
- Opportunity cost: No open positions to displace, no trade-cap pressure.
  Entering BE today, ahead of its own earnings, would be binary event risk
  with no informational edge — better to wait for the print and re-scan than
  size a position now.

#### Deep dive: STM $50.45 -5.52%
- Catalyst: Mixed Q2 2026 earnings — EPS beat, but Q3 revenue guidance below
  expectations, pulling back after a ~150% 3-month AI-driven rally.
- Catalyst detail: STM beat Q2 2026 EPS estimates but guided Q3 revenue below
  Street expectations, following a run where the stock had already soared
  ~150% over the prior three months on AI/data-center demand optimism — the
  same AI-infrastructure story driving AMKR.
- Why: Guidance miss after a parabolic run is a textbook giveback trigger —
  expectations ran well ahead of what management is now committing to for
  Q3, even with a clean EPS beat on the quarter just reported. Directly
  parallels AMKR's reaction today — both AI-supply-chain semis getting a
  "good quarter, cautious guide" selloff the same morning, reinforcing a
  sector-wide read-through rather than a company-specific one.
- Impact: Volume (936,895, Monday's full-day print, liquidity proxy) is the
  largest of today's 4 names and well above normal — consistent with a real
  institutional repricing off the guidance miss. Given the size of the
  preceding rally, this reads as legitimate mean-reversion/profit-taking with
  room to continue if the broader chip tape stays weak, not a one-day spike.
- Horizon: SHORT_TERM for now (guidance-driven, elevated post-earnings
  volatility), with a LONG_TERM watch-item flag: if the pullback stabilizes
  above the pre-rally base and the AI-demand thesis holds, this could
  re-qualify as a swing candidate on a later /trade check.
- Opportunity cost: No open positions to displace, no weekly-cap constraint.
  STM and AMKR both have clean, earnings-based catalysts (satisfying
  Confluence's catalyst requirement) versus HXL (no catalyst) and BE
  (pre-earnings, not post). If only one AI-supply-chain semis name were sized
  this week, STM vs. AMKR needs a head-to-head on guidance quality and
  valuation reset before either clears a full /trade check.

### Decision
**HOLD — no trades, no alert here.** Research-only per routine rules (STEP 8);
execution, if any, happens in market-open or a gated /trade check. All 4
gappers clear the scan filters and have deep-dive writeups above, but two
(AMKR, STM) are earnings-gap situations needing post-gap settling + Confluence
check, one (BE) is pre-earnings binary risk, and one (HXL) has no documented
catalyst at all and fails Confluence outright. Telegram alert sent per
routine rule (hits > 0).

## RECOVERED from claude/eager-wozniak-c7gp1r (e57c7637, 2026-07-29 12:13Z, "gappers scan 2026-07-29 08:10 ET (cloud) - 1 hit: BE, Apify still c...")

## 2026-07-29 — Gappers (auto-scan 08:10 ET, cloud)

Watchlist scan (60 tickers, GAP_THRESHOLD=5.0) via `scripts/gappers-alpaca.sh
watchlist` returned exactly 1 qualifying hit — BE. Apify RAG web browser is
still hard-capped ("Monthly usage hard limit exceeded" on every query,
matching this morning's pre-market entry) — fell back to WebFetch against
Benzinga per the routine's fallback rule.

### Gappers (auto-scan 08:10 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BE | 181.66 | +8.76% | 1,007,762 | Q2 2026 earnings beat ($1.07B rev) + raised FY26 guidance |

#### Deep dive: BE $181.66 +8.76%
- Catalyst: Bloom Energy reported Q2 2026 revenue of $1.07B, beating
  analyst estimates, and management raised full-year 2026 guidance. The
  print follows a rough prior session (closed July 27 down 11.34%), and
  pre-market is now pricing $182.00 vs the $167.04 prior close. Consensus
  analyst price target is $192.87 with an overall Hold rating.
- Why: Earnings beat plus raised guidance removes near-term downside
  uncertainty and pulls in both short covering (7.78% short interest) and
  fresh momentum buyers repricing toward the raised outlook.
- Impact: Pre-market volume (~1.0M shares) is already running well above a
  typical pre-open print, consistent with a real earnings-driven repricing
  rather than pure headline noise. Forward P/E near 75x means the move
  still leans on continued execution, not cheap valuation. Sector
  read-through: watch other power-infrastructure / AI-datacenter-power
  names (fuel cell, grid, natural gas peaker plays) for a sympathy move,
  since the guidance raise partly reflects datacenter power demand.
- Horizon: LONG_TERM — raised full-year guidance is a structural catalyst,
  not a one-day headline, and dovetails with the ongoing AI/datacenter
  power-demand theme; still needs a later `/trade` confluence check
  (tradingview-data MCP remains down) before sizing.
- Opportunity cost: Zero open positions and 0/3 weekly trades used, so BE
  displaces nothing. It's the only gapper on today's list (1 of 60
  watchlist names cleared 5%), but it's already up 8.76% pre-market on top
  of Friday's plunge — a same-day chase compresses the stop distance
  needed to still clear the strategy's 2:1 minimum R:R, so entry timing
  (pullback vs breakout) matters more than usual. Research only, no order
  placed.

## RECOVERED from claude/eager-wozniak-p1dsk3 (2ed35488, 2026-07-30 00:58Z, "gappers scan 2026-07-29 20:56 ET (cloud) - skipped, post-close froz...")

## 2026-07-29 — Gappers (auto-scan 20:56 ET, cloud) — SKIPPED, post-close frozen feed, 3rd run today

Session clock started this routine mid-day (last checkpoint before a worker
restart showed Mon 2026-07-27 11:10 ET), but the worker restarted multiple
times and by the time execution resumed, wall-clock had jumped to **Wed
2026-07-29 20:56 ET — nearly 5 hours after the 16:00 ET close**, on a
trading day that already had two gappers-cloud runs this morning (09:11 ET
and 11:10 ET, both logged above).

`GAP_THRESHOLD=5.0 bash scripts/gappers-alpaca.sh watchlist` returned `[]`
even at `GAP_THRESHOLD=0.5` — not "no movers," a frozen feed. Pulled the raw
snapshot directly for AAPL/QBTS/BMNR: `latestQuote`/`latestTrade` all
timestamped `2026-07-29T20:00:0{0,1}...Z` — the closing-auction print,
~57 minutes stale relative to the 20:56 ET run time, and identical to the
second for names with no reason to trade in lockstep. This Alpaca data plan
does not appear to carry extended-hours quotes; the feed freezes at the
16:00 ET close print and stays there until the next session's pre-market
prints begin. The script's own same-UTC-day freshness guard (added since
the 11:10 ET run, see `scripts/gappers-alpaca.sh` diff) correctly rejected
this stale close print rather than reporting a fake gap.

Per the same reasoning as the 2026-07-25 02:05 ET / 14:33 ET entries: no
data file written (nothing but a stale close print to put in it), no
duplicate deep-dive, no Telegram alert (0 hits, and a post-close alert would
misrepresent a frozen quote as a live premarket gap).

**Scheduling flag for the operator:** this is the 3rd gappers-cloud
invocation on 2026-07-29 (09:11, 11:10, now 20:56 ET) and the first two were
genuinely in/near the premarket window while this one landed well after the
close. Recommend checking the cron/trigger config for this routine —
repeated post-close firings burn Alpaca calls for data that hasn't changed
and risk a session mistaking a frozen close print for a live gap. Same
pattern already flagged in the 2026-07-25 entries above; still unresolved.

Research-only. No orders placed.

## RECOVERED from claude/eager-wozniak-y59jn0 (a9d5d48b, 2026-07-30 13:16Z, "gappers scan 2026-07-30 09:14 ET data")

## 2026-07-30 — Gappers (auto-scan 09:14 ET, cloud, 2nd run today)

Apify RAG web browser still hard-capped (same outage flagged in the 08:12
run) — fell back to Benzinga WebFetch per routine rule, then cross-checked
CRWV/AMKR via WebSearch since their Benzinga top-headlines were stale
(dated Jul 26) and read the wrong direction at first glance. Both resolved
once combined with fresher sources: today's session is a Big Tech earnings
day (MSFT/META reported after Tuesday's close), and CRWV/AMKR are bouncing
off their own separate pre-existing selloffs. Watchlist scan (60 tickers)
returned 6 qualifying gappers (>=5% gap, >=$3, vol populated) vs. 2 at
08:12 — the AI-earnings reaction widened the pool. Deep-dive capped at 5
per routine; AMKR (rank 6) gets quick-scan only.

### Gappers (auto-scan 09:14 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | NBIS | 164.38 | +10.95% | 1,128,738 | Nvidia discloses 9.3% stake + $1B Reflection AI compute deal, bouncing off Wed's correction |
| 2 | CRWV | 67.32 | +10.63% | 1,147,817 | Extends bounce off 30%-in-a-month drawdown as MSFT's Azure beat eases hyperscaler-competition fears |
| 3 | MSFT | 428.72 | +9.65% | 1,558,652 | Q4 revenue $90B beats, Azure accelerates to 43%, FY26 capex guidance cut on longer asset-life assumptions |
| 4 | BE | 179.08 | +9.5% | 1,601,851 | Extends Q2 beat-and-raise rally, adds $1.7B Nebius AI-power deal + JPMorgan PT hike to $346 |
| 5 | META | 533.65 | -9.15% | 839,088 | Mixed Q2 — revenue beat, EPS miss on AI/legal opex — raised capex spooks investors |
| 6 | AMKR | 46.01 | +7.66% | 538,335 | Bounces off Wed's post-earnings guidance-miss selloff on NVIDIA/TSMC packaging deal news |

#### Deep dive: NBIS $164.38 +10.95%
- Catalyst: Nebius shares are rebounding off a sharp correction (low $180s
  down to ~$148 at Wednesday's close) after Nvidia disclosed a passive
  9.3% stake (existing shares + a prefunded warrant) and Nebius agreed to
  sell over $1B of compute to Reflection AI through 2029. Amplified by
  sympathy with Microsoft's blowout Azure print overnight — Microsoft is
  one of Nebius's own multibillion-dollar AI-infrastructure customers.
- Why: Nvidia's equity stake signals demand/legitimacy for the GPU-cloud
  model, and the new $1B compute deal adds visible backlog right as MSFT's
  strong Azure/AI capex commentary eases fears hyperscalers will undercut
  neocloud demand.
- Impact: Volume (~1.13M) well above recent selloff-day average; recovers
  a meaningful chunk of Wednesday's rout — reads as a genuine relief rally
  on fresh company news plus a supportive tape (MSFT, CRWV both up), not a
  pure headline spike, though NBIS remains far below its $220 high and
  highly volatile (avg analyst Buy $258 PT vs. one Sell at $95).
- Horizon: LONG_TERM — Nvidia's stake and the multi-year Reflection AI
  contract are structural, aligned with AI-infrastructure momentum;
  still worth a same-day confluence recheck given volatility.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing. At $164.38 a 10% stop is ~$16.44 away; needs a ~20%+
  target for 2:1 R:R, plausible given the bounce but competes directly
  with CRWV/BE for the same AI-infra thesis slot. Research only, no size
  given.

#### Deep dive: CRWV $67.32 +10.63%
- Catalyst: CoreWeave extends a bounce off a brutal ~30%-in-a-month
  drawdown (triggered Jul 17 by Meta's "Meta Compute" cloud service
  announcement, worsened by Fed Governor Warsh's hawkish remarks ~Jul 26).
  Company tailwinds this week: better terms on a $2.6B loan and a new Flow
  Traders deal to power AI quant-training. Today's extension is boosted
  further by MSFT's strong Azure print undercutting the hyperscaler-
  cannibalization fear that drove the original selloff.
- Why: A macro/competition-driven overreaction is unwinding as financing
  terms improve, a new logo lands, and MSFT's print shows AI infra demand
  still accelerating rather than being insourced away from CoreWeave.
- Impact: Volume (~1.15M) elevated, bounce holding through the premarket
  session rather than fading, but CRWV is still >30% below its highs and
  next earnings (Aug 11) is an unresolved catalyst risk. Sector read-
  through: same-day NBIS move confirms an AI-infra-wide relief bounce,
  not CRWV-idiosyncratic.
- Horizon: SHORT_TERM — loan refinancing and Flow Traders deal are real,
  but the primary driver is unwind of a macro/competition scare rather
  than a new durable catalyst; recheck before carrying past Aug 11
  earnings.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week — no
  existing holding displaced, but directly competes with NBIS and BE for
  the single AI-infra-bounce slot (max 3 trades/week, max 6 positions).
  At $67.32 a 10% stop is ~$6.73 away; needs a ~20% move for 2:1 R:R —
  achievable given the size of the prior drawdown, but earnings risk
  (Aug 11) sits inside a multi-week hold. Research only, no size given.

#### Deep dive: MSFT $428.72 +9.65%
- Catalyst: Microsoft's fiscal Q4 revenue hit $90B (+18% YoY), GAAP EPS
  $4.81 (+31% YoY), adjusted EPS $4.74 vs. $4.24 est. Azure and other
  cloud revenue grew 43% (accelerating from 40% prior quarter) and topped
  $100B for the full fiscal year for the first time; Copilot passed 30M
  paid seats. Capex was $41B for the quarter (+69% YoY) but management cut
  the calendar-2026 capex forecast to ~$175B from ~$190B by extending
  assumed useful life of data-center/office assets to 25 years from 15.
- Why: An across-the-board beat combined with a capex guidance CUT (via a
  useful-life accounting change, not a spending pullback) reads as AI
  capex finally paying off with rising efficiency — the opposite read of
  META's raised-capex/missed-EPS report the same night, explaining the
  sharp divergence between the two stocks this morning.
- Impact: Volume (~1.56M), the highest of today's list — a genuine post-
  earnings gap, not a headline spike; commercial RPO up 84% to $678B backs
  a durable growth read. Sector read-through: lifting the whole AI-infra
  complex (NBIS, CRWV both up double digits) since MSFT is a customer/
  proof-point for both.
- Horizon: LONG_TERM — structural beat with an efficiency-improving capex
  revision and record backlog; consistent with continued Technology-
  sector momentum per TRADING-STRATEGY.md, though the gap is already large
  enough that chasing needs a same-day confluence check for entry timing.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing, but MSFT's 9.65% gap makes for a wide stop: 10% from
  $428.72 is ~$42.87 away, needing an ~20% move for 2:1 R:R on a mega-cap
  — a tall ask versus sizing NBIS/CRWV/BE instead, which have more room
  left after their own drawdowns. Research only, no size given.

#### Deep dive: BE $179.08 +9.5%
- Catalyst: Bloom Energy extends its Q2 beat-and-raise: revenue $1.07B
  (vs. $822.8M est.), adjusted EPS $0.78 (vs. $0.40 est.), FY26 guidance
  raised to $3.9-4.2B revenue / $2.55-2.85 EPS. New this session: a $1.7B
  Nebius AI-power deal (backed by IDF and Oaktree) adds to an already-large
  ~$20B contracted backlog (Brookfield $5B, Oracle Project Jupiter up to
  2.8GW, AEP $2.65B), and JPMorgan raised its price target to $346
  (Overweight).
- Why: A record beat-and-raise plus a steady drumbeat of large multi-year
  AI-power contracts (Nebius the latest) keeps pulling in momentum buyers
  who see fuel cells as bottleneck-relief for AI datacenter power — each
  new deal reinforces rather than replaces the thesis.
- Impact: Third consecutive up session on the same underlying catalyst
  (highest volume of today's list, ~1.6M) — the move has extended, not
  faded, with fresh contract news each day. Sector read-through: bullish
  for AI-power-infrastructure peers generally.
- Horizon: LONG_TERM — structural (earnings beat + guidance raise + a
  growing multi-year contracted backlog), aligned with Technology-adjacent
  momentum in TRADING-STRATEGY.md.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing, but BE is now the most extended of today's names
  (3rd up day) versus NBIS/CRWV which are earlier in their bounce. At
  $179.08 a 10% stop is ~$17.91 away; needs a ~20%+ target for 2:1 R:R —
  plausible given backlog growth but chasing a 3-day-old move raises
  entry-price risk versus the earlier-stage NBIS/CRWV setups. Research
  only, no size given.

#### Deep dive: META $533.65 -9.15%
- Catalyst: Meta's Q2 revenue was $60.8B (+28% YoY, beating the $59.5B
  est.) but adjusted EPS of $6.18 missed the $7.13 estimate as AI/legal
  opex drove a 55% rise in operating costs and an 8% drop in operating
  income. Management raised full-year capex guidance to $130-145B (from
  $125-145B) and guided FY26 expenses to $165-169B; Q3 revenue guided to
  $61-64B.
- Why: The market is penalizing rising AI-infrastructure and legal spend
  compressing near-term margins even as top-line growth and ad metrics
  (impressions +14% YoY, price/ad +12% YoY) stayed healthy — a sharp
  contrast to MSFT's same-night print, where capex guidance was actually
  cut via an accounting change, making META's raised-capex/missed-EPS
  combination look worse by comparison.
- Impact: Volume (~839K, lowest of today's list) but a clean post-earnings
  gap down, not a stale headline — reads as a genuine re-rating of AI-
  spend tolerance rather than a one-day overreaction likely to fully
  reverse, though ad-business fundamentals argue against a full re-rating
  lower. Sector read-through: contrasts sharply with MSFT's rally same
  morning — investors discriminating between AI-capex stories by
  near-term margin impact.
- Horizon: SHORT_TERM — no confluence check performed; TRADING-STRATEGY.md's
  Entry Checklist implies a long-biased book (200-SMA long filter, no
  defined short process) so a -9% gap down is not a long candidate here —
  flagged for sector context only, not as a trade idea.
- Opportunity cost: Not applicable as a long — META's gap is a decline,
  not a long setup within this long-biased strategy. Noted only for
  sector-context completeness (explains why NBIS/CRWV/MSFT/BE diverge from
  META today).

## RECOVERED from claude/eager-wozniak-xtyku6 (60723931, 2026-08-03 15:12Z, "gappers scan 2026-08-03 11:09 ET")
## 2026-08-03 — Gappers (auto-scan 11:09 ET, cloud)

Fourth scheduled fire of the day. Re-scanned the full watchlist via
`scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0) — one raw hit
(AGMH, +6.31%, $0.7792) but it fails the $3.00 minimum price filter, so
**zero qualifying gappers** after filtering. BKSY/BW/UMAC from the 10:11 run
are no longer showing as fresh gap candidates this pass. No catalyst/deep-dive
research needed since there were no qualifying candidates. Per routine rule,
no Telegram/ClickUp notify sent (only fires on hits > 0 or scan error;
neither applies).

### Gappers (auto-scan 11:09 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| — | — | — | — | — | No tickers cleared the $3.00 price / 5.0% gap filters (AGMH +6.31% at $0.78 excluded on price) |


## RECOVERED from claude/clever-goodall-vutgnv (1c94a3b1, 2026-08-04 11:03Z, "pre-market research 2026-08-04")

## 2026-08-04 — Pre-Market Research (cloud routine)

Apify RAG web browser hit "Monthly usage hard limit exceeded" on all 6 topic
queries — same outage flagged every session since 2026-07-31, cap still not
reset. Fell back to native WebSearch (Yahoo domains blocked via
`blocked_domains`) for the entire session per the routine's fallback rule.
`tradingview-data` MCP still absent (`ToolSearch`: no match) — confluence
rule (>=2 of VWAP/RSI/200-SMA/insider) remains unsatisfiable, same
unresolved gap as every session since 2026-07-25.

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 19 straight trading days
  since the Day-0 baseline (2026-07-08 launch). Same confirmed-live-vs-
  $10k-baseline mismatch flagged 2026-07-27, still unresolved/operator
  pending — not re-litigating here.
- Weekly trade count: 0/3 (week of Aug 3).

### Market Context (WebSearch fallback, Tue 8/4 premarket ET)
- **Oil — elevated, near multi-day highs**: Brent ~$89.81/bbl (5:20am ET
  today, +$2.43 vs yesterday morning), WTI ~$81.08/bbl. Sources attribute
  the move to renewed US-Iran hostilities shattering the interim peace deal,
  with disruption risk spanning the Strait of Hormuz to the Red Sea. This
  directly conflicts with the same-morning equity-side narrative below
  ("lower oil prices easing inflation concerns") — see Risk Factors.
- **S&P 500 futures — risk-on**: ES +0.21% early Tuesday, near a record high
  after Monday's tech-led rally. Polymarket implies 77% odds of an up open.
  Premarket movers: PLTR +16% on raised guidance; AMD and SpaceX (first
  earnings as a public company) both due to report today.
- **VIX — calm**: closed 15.99 (8/3), opened 15.76 today, live ~15.83. Low
  vol, risk-on, complacency flag carried over from prior sessions (was 16.0
  yesterday, 17.09 on 7/31 — trending down).
- **Earnings — today, before open**: large cross-section incl. CAT, MCD,
  PFE, BP, MPC, SPOT, TM, HSBC, MRK, KMB, DD, APO, GWW, IDXX (full list in
  source). AMD and SpaceX also report today (session timing unconfirmed by
  WebSearch). None held; checked against WATCHLIST.md — no overlap.
- **Econ calendar this week**: JOLTS today (Tue), ISM Manufacturing/Services
  PMI and the July jobs report (Fri) later this week — exact day/time for
  each not confirmed by WebSearch. No CPI, no FOMC this week.
- **Sector YTD** (as of 7/24, same source used yesterday): Energy leads
  (+3.6%), then Utilities (+2.2%), Industrials (+1.6%), Materials (+1.4%).
  Communications worst (-6.1%), Consumer Discretionary next-worst (-5.6%).
  Same Q2-large-cap source conflict as prior sessions (that read has Tech
  leading at +43%) — not sizing sector bets off either figure without
  `tradingview-data` confirmation.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None cleared to Tier-1 (documented-catalyst + confluence bar not met):
1. **AMD — earnings-day binary, not a setup.** Reports today (SpaceX too,
   also a binary event as its debut public print). Strategy explicitly
   excludes earnings-day binary bets without technical confirmation (same
   rule applied to ON 8/3, MSFT/AMZN 7/31) — watch only, no entry today
   regardless of print direction.
2. **Energy sector (XLE-style exposure) — watch only.** Catalyst: YTD
   momentum leader (+3.6%) and oil pushing to $89.81 Brent on Middle East
   escalation. But the same escalation headline conflicts with the
   "de-escalation/lower oil" framing in the equity-futures coverage this
   morning — thesis unstable until one source resolves the conflict. No
   confluence data available to set entry/stop/target.
3. **Utilities (XLU-style exposure) — watch only.** Catalyst: #2 YTD sector
   (+2.2%), defensive tilt that would pair well if Friday's jobs report
   surprises risk-off. No confluence data to confirm entry level; purely a
   sector-rotation watch.

### Risk Factors
- **Oil/geopolitical narrative conflict, now sharper than yesterday**: one
  thread has Brent +23% on renewed US-Iran hostilities and Hormuz/Red Sea
  disruption risk; the same-morning equity-futures thread cites "lower oil
  prices easing inflation concerns" as a reason stocks are up. These cannot
  both be the dominant read — treat oil/geopolitical direction as unresolved
  until a same-day, non-Yahoo source reconciles it. Carried over and
  worsened from the 8/3 flag.
- **VIX at ~15.8, third straight session lower** (17.09 -> 16.0 -> 15.8) —
  thin insurance heading into a dense earnings day (AMD, SpaceX, CAT, MCD,
  PFE, HSBC, BP, MRK and dozens more) plus JOLTS today and jobs Friday.
- **Apify still fully down** — cap has not reset since at least 7/31, now 5+
  consecutive sessions. Operator: check Apify billing/plan; blocking the
  primary research path.
- **`tradingview-data` MCP still absent** — confluence rule unsatisfiable
  for the entire stretch since 7/25. Same operator flag, escalating in
  duration.
- **Sector-YTD source conflict** (Energy-led vs. Tech-led reads) — don't
  size or rank sector bets off either figure until resolved.

### Decision
**HOLD — no trades.** Tape is nominally risk-on (VIX ~15.8, S&P futures
+0.21% near record highs, PLTR +16% premarket) but the oil/geopolitical
catalyst is now more sharply contradictory across sources than yesterday,
AMD/SpaceX earnings are binary bets excluded by strategy rule, and
Energy/Utilities sector ideas have no technical confirmation available —
`tradingview-data` still down, confluence rule unsatisfiable. Zero
positions, zero orders, 19 straight flat trading days — patience over
activity. 0/3 weekly trade slots used. ClickUp notify call returned a
server-side HTTP 500 (keys all confirmed present — same recurring
non-credential failure as 7/31 and 8/3), flagging for operator awareness,
not blocking.

## RECOVERED from claude/eager-wozniak-yledtc (403fd627, 2026-08-04 13:25Z, "gappers scan 2026-08-04 09:20 ET")

### Gappers (auto-scan 09:20 ET, cloud)
Apify RAG web browser hit its monthly usage hard cap on all 5 catalyst
queries — fell back to Benzinga (`WebFetch`) for STEP 2 quick-scan
headlines and to `WebSearch` (Yahoo Finance domains blocked per routine
rule) for STEP 3 deep-dive fundamentals/recent-developments research.

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned 6 raw candidates; SYNA (+6.42%, 17,922 premarket vol) filtered
out for volume < 50,000. **5 qualifying gappers**, all upside, under the
10-ticker cap — deep-dive cap of 5 covers all of them.

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | ASTS | $68.17 | +7.30% | 235,697 | Premarket pop ahead of BlueBird 11-13 launch (~Aug 5) and Aug 10 business update call |
| 2 | SATL | $4.25 | +7.20% | 282,680 | Reports Q2 2026 earnings Aug 5 AMC; Merlin constellation + new $18M+ defense contract |
| 3 | KLIC | $96.56 | +7.03% | 50,471 | Beat Q2 FY2026 earnings, guided Q3 above consensus, raising capex for capacity expansion |
| 4 | AMKR | $54.06 | +6.39% | 193,846 | Record Q2 revenue on AI datacenter demand; new TSMC 10-yr packaging deal + NVIDIA collab |
| 5 | GFS | $53.12 | +6.27% | 128,517 | $874M CHIPS Act AI-manufacturing award (top recipient) + $300M photonics award, SEALSQ deal |

#### Deep dive: ASTS $68.17 +7.30%
- Catalyst: BlueBird 11-13 launching via SpaceX Falcon 9 (targeting Aug 5), next-gen satellites nearly doubling peak download speed vs the initial BlueBird block. Company holds $3.5B cash (funds 100+ satellites, no near-term convertible-debt need), reaffirmed 2026 revenue guidance $150-200M and flagged ~$1B for 2027 on $1.2B contracted commitments. FCC granted Supplemental Coverage from Space authorization. H1 business update call set for Aug 10.
- Why: Anticipation buying ahead of a hard, dated launch catalyst plus accelerating constellation cadence and fresh FCC regulatory clearance, read by the market as de-risking the path to commercial space-based cellular broadband.
- Impact: Volume (236K sh) elevated but not extreme for ASTS's typical liquidity; tied to a concrete, dated catalyst rather than pure rumor — still vulnerable to a sell-the-news fade post-launch. Loose sector read-through to SATL, also gapping today.
- Horizon: LONG_TERM — BlueBird buildout plus FCC clearance and $1.2B contracted revenue ramp is structural, multi-quarter; a multi-day/week swing hold is defensible IF it also clears Confluence on a later `/trade` check.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used (week of Aug 3) — nothing to displace. Highest-conviction of today's 5 (dated launch + regulatory clearance vs SATL's earnings-binary risk or KLIC/AMKR/GFS's chip-cycle beta); a 7-10% stop below a $68.17 entry (~$4.77-6.82 risk) needs a $9.54-13.63+ target for 2:1 R:R, plausible on a clean launch with no material pullback. Research only, not a sized recommendation.

#### Deep dive: SATL $4.25 +7.20%
- Catalyst: Q2 2026 print due Aug 5 AMC, call 4:30pm ET. Q1 2026 marked an inflection point (first positive net operating cash contribution, 58% TTM revenue growth, 75% gross margin, still unprofitable). Unveiled the Merlin constellation (daily one-meter-resolution global remapping, first satellite Oct 2026, full operational capability H1 2027). New $18M+ one-year defense-imagery contract and a SpaceKnow AI-analytics partnership.
- Why: Momentum/positioning buying ahead of the Aug 5 print, amplified by the Merlin roadmap and defense-contract wins building anticipation for a strong quarter.
- Impact: Volume (283K sh) meaningful for a sub-$5 name, but pre-earnings gaps on thin small-caps are prone to violent reversal on the print either direction — speculative positioning, not confirmed trend. Loose sector read-through to ASTS.
- Horizon: SHORT_TERM — earnings-binary event tomorrow (Aug 5 AMC), no durable thesis until the print clears; expect volatile resolution within 1-2 sessions.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing to displace. Same earnings-binary exclusion already applied to BKSY/UMAC (8/3) and to SATL itself in the 08:21 ET scan; a 7-10% stop below a $4.245 entry (~$0.30-0.42 risk) needs a $0.85+ target for 2:1 R:R, only plausible on a clean beat that can't be known pre-report. Pass pending post-earnings confirmation.

#### Deep dive: KLIC $96.56 +7.03%
- Catalyst: Q2 FY2026 net revenue $242.6M (beat), GAAP diluted EPS $0.66, gross margin 49.3% on stronger semiconductor/memory demand. Guided Q3 FY2026 revenue ~$310M +/-$20M, GAAP EPS ~$0.87 +/-10%, non-GAAP EPS ~$1.00 +/-10%. Raising FY2026 capex to ~$22M (from ~$12M) for Thermo-Compression bonding capacity, expanding Advanced Solutions toward ~$400M revenue (Asterion-TW, ProMEM Suite, ACELON). Trailing 4-quarter avg earnings surprise +23.8%, beat every quarter. Note: a Benzinga snapshot referenced a Q3 report "tomorrow" (Aug 5) that conflicts with Q3 guidance already given alongside this Q2 beat — likely stale cached copy, treated as unconfirmed.
- Why: Earnings beat plus above-consensus forward guidance pulls in momentum buyers, reinforced by capex-driven capacity expansion signaling confidence in AI-infrastructure-linked semiconductor demand.
- Impact: Volume (50K sh) sits right at the routine's 50K floor — thin for a $96 stock, reads more as headline-beta than heavy accumulation so far. Genuine beat-and-raise, not a rumor spike. Clear sector-wide read-through: AMKR and GFS both gapping on their own semiconductor/AI-capex catalysts today.
- Horizon: LONG_TERM — beat-and-raise plus a multi-quarter capacity-expansion plan is a structural re-rate aligned with the AI-infrastructure demand cycle (Technology favored in early-cycle sector rotation); worth a multi-day/week hold if it also clears Confluence on a later `/trade` check.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing to displace. Strongest fundamentally-confirmed catalyst of the 3 chip names (KLIC/AMKR/GFS) — clean beat-and-raise vs AMKR's mixed guidance optics and GFS's non-earnings catalyst. A 7-10% stop below a $96.56 entry (~$6.76-9.66 risk) needs a $13.51-19.31+ target for 2:1 R:R, plausible on continued AI-capex momentum; verify the unconfirmed Aug 5 report date before treating this as clear of near-term earnings risk.

#### Deep dive: AMKR $54.06 +6.39%
- Catalyst: Q2 2026 revenue $1.9B (record, +26% YoY), EPS $0.70 (more than tripled YoY) on record computing plus automotive/industrial segment revenue. Q3 guidance EPS $0.72-0.82 (above $0.62 consensus), revenue $2.0-2.1B (roughly in line with $2.1B consensus). Signed a 10-year advanced-packaging capacity agreement with TSMC (Arizona campus) and a multi-year NVIDIA AI-infrastructure packaging/test collaboration. Announced a $300M share buyback. Note: an earlier Benzinga snapshot had flagged the stock falling on guidance optics before today's premarket move — flagged, not resolved.
- Why: Beat-and-raise EPS guide plus two headline strategic partnerships (TSMC, NVIDIA) pulling in AI-supply-chain momentum buyers; looks like a delayed recovery/re-rate as the market digests the EPS beat and partnership news after an earlier guidance-optics selloff.
- Impact: Volume (194K sh) solid, move now aligns with underlying fundamentals (record revenue, above-consensus EPS guide, two durable partnerships) rather than a pure headline spike — though the earlier "stock tanks on guidance" reaction is a flag sentiment could reverse again. Clear sector-wide read-through: KLIC and GFS both gapping today on their own AI/semiconductor-demand catalysts.
- Horizon: LONG_TERM — TSMC/NVIDIA multi-year packaging partnerships and 2028/2030 revenue targets ($9B/$11B) are structural, aligned with the AI-infrastructure buildout and early-cycle Tech sector-rotation favor; worth a multi-day/week hold if it also clears Confluence on a later `/trade` check, though the earlier down-on-guidance reaction argues for waiting on price confirmation first.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing to displace. Against KLIC's cleaner beat-and-raise, AMKR's earlier "stock tanks" headline is a yellow flag worth resolving before treating this as the top idea among the 3 chip names; a 7-10% stop below a $54.06 entry (~$3.78-5.41 risk) needs a $7.57-10.81+ target for 2:1 R:R, plausible if the TSMC/NVIDIA narrative holds without a guidance-driven pullback repeat.

#### Deep dive: GFS $53.12 +6.27%
- Catalyst: GF holds up to $1.5B in original CHIPS Act direct funding (Nov 2024). Most recently signed an LOI for a $300M CHIPS silicon-photonics R&D award (optical materials/wafers/advanced packaging for AI-datacenter interconnects) and received $375M from a newer Trump-administration CHIPS AI-manufacturing award (of the $874M total, GF the top recipient). Completed the Synopsys Processor IP Solutions Business acquisition (June 2, 2026) and signed an MOU with SEALSQ for post-quantum-cryptography semiconductor development. Combined investments expected to create 1,500+ manufacturing jobs and ~9,000 construction jobs. Stock up 89.1% YTD.
- Why: Federal funding award plus a wave of strategic-partnership announcements (Synopsys IP acquisition, SEALSQ) reads as durable government-backed capacity growth, pulling in momentum buyers positioning around the AI-chip-manufacturing reshoring theme.
- Impact: Volume (129K sh) solid; policy/contract-driven news, not a rumor, but one prior search result flagged GFS down 6.6% after a similar-sounding $300M CHIPS photonics announcement on an earlier date — the stock has sold off on comparable headlines before, so the premarket pop should be confirmed against actual reaction rather than assumed durable. Clear semiconductor-sector-wide read-through alongside KLIC and AMKR.
- Horizon: LONG_TERM — CHIPS Act funding plus the IP-acquisition/partnership stack are structural, multi-year catalysts aligned with the AI-reshoring theme and early-cycle Tech sector-rotation favor; worth a multi-day/week hold if it also clears Confluence on a later `/trade` check, though the noted sell-the-news history on similar CHIPS headlines argues for confirming price action first.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing to displace. Lowest-ranked of the 5 by gap magnitude and the weakest link between "why the catalyst matters" and "why today specifically" (funding awards announced serially over recent weeks, not a single fresh event); a 7-10% stop below a $53.12 entry (~$3.72-5.31 risk) needs a $7.44-10.62+ target for 2:1 R:R, plausible but the most crowded, latest-in-sequence idea of the three chip names today.

## RECOVERED from claude/eager-wozniak-yqxqh9 (15eb0d9e, 2026-08-06 12:26Z, "gappers scan 2026-08-06 08:24 ET")

## 2026-08-06 — Gappers (auto-scan 08:24 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **1 hit** of 60 tracked tickers (|gap|>=5%, price>=$3,
premarket_volume field not populated by this script so that filter was
skipped). Apify RAG web browser still "Monthly usage hard limit exceeded"
on both queries (10th+ consecutive session) — fell back to WebFetch
(Benzinga) for the quick-scan catalyst and native WebSearch (Yahoo domains
blocked via `blocked_domains`) for the deep-dive per routine rule.

### Gappers (auto-scan 08:24 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | RDW | 11.81 | +10.07% | 712,124 | Redwire stock rises as strong Q2 demand drives record backlog. |

#### Deep dive: RDW $11.81 +10.07%
- Catalyst: Redwire reported Q2 2026 results Aug 5: record revenue of
  $117.1M (+89.6% YoY, beat estimates), gross margin turned positive at
  27.8%, and contracted backlog hit a record $542.1M (+64.5% YoY, LTM
  book-to-bill 1.52). GAAP net loss narrowed by $56.0M to $41.0M. New
  defense contract wins (Stalker Block 30 follow-ons for the Marine
  Corps/Army, a multi-year Penguin UAS deal with an undisclosed NATO
  country) underpinned the backlog growth; company reaffirmed FY26 revenue
  guidance of $450-500M.
- Why: Beat-and-raise-adjacent print (revenue beat, margin inflection,
  record backlog, reaffirmed guidance) plus fresh defense contract wins is
  classic momentum-buyer bait — traders chase the backlog/book-to-bill
  number as a forward-revenue signal even though the company is still
  adjusted-EBITDA-negative (-$3.2M).
- Impact: 712K shares pre-market on a non-mega-cap name is a real volume
  spike, not thin-tape noise, and it's a same-day earnings reaction, so the
  move should mostly hold through the session but carries one-day-
  headline-spike/fade risk given adjusted EBITDA is still negative. No
  peer read-through flagged among other watchlist space names
  (RKLB/ASTS/IRDM/LUNR/BKSY) in this scan.
- Horizon: LONG_TERM — record contracted backlog (+64.5% YoY, book-to-bill
  1.52) and reaffirmed FY26 guidance are structural, not just headline
  noise, and RDW sits in the space/defense sector already on the
  watchlist; still needs a later `/trade` confluence check, not a
  same-day chase given today's 10%+ gap.
- Opportunity cost: 0/6 open positions and 0/3 weekly trades used this
  week, so RDW wouldn't displace an existing holding or a higher-ranked
  gapper today (it's the only hit). Entry is barred right now by the
  "never chase >5% within 3%" rule (gapped 10.07% pre-market); waiting for
  a pullback/basing entry preserves room to size up to 20% of equity, but
  post-earnings volatility may make a sane stop distance hard to clear the
  2:1 R:R minimum same-day. Research only, no order recommended here.

Deep-dive cap: 5 (only 1 hit this run, so all of it got the deep dive).
No execution here — research only. Feed to `/trade` for the full
safety-check gate if pursued next session.

## RECOVERED from claude/eager-wozniak-sw2tia (af64d43c, 2026-08-07 13:36Z, "gappers scan 2026-08-07 09:33 ET")

## 2026-08-07 — Gappers (auto-scan 09:33 ET, cloud)

Watchlist scan via `scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0):
7 raw hits, 1 excluded (BWLP, volume 10,473 < 50k threshold — note the
script's "volume" field is the prior completed session's full-day volume,
not true premarket volume; Alpaca's snapshot has no distinct premarket-
volume field). 6 gappers cleared the filter, ranked by |gap%|, capped at
top 10 (all 6 shown). Apify RAG web browser hit "Monthly usage hard limit
exceeded" on all 12 queries — same outage flagged continuously since
2026-07-29 (11th+ consecutive session). Benzinga WebFetch fallback also
failed (HTTP 403 on all 6 quote pages). Fell back to native WebSearch with
Yahoo domains blocked via `blocked_domains`, per the routine's "do not
abort the whole scan" rule — no Yahoo-sourced facts used below. Deep-dive
capped at top 5 per routine; RKLB (rank 6) got quick-scan only.

Account: $100,000 equity, 0 open positions, 0/3 weekly trades used (week
of Aug 3, resets Mon 8/10) — same confirmed-live-vs-$10k-baseline mismatch
flagged 2026-07-27, still unresolved/operator pending, not re-litigating
here. No existing holding is displaced by any of today's gappers.

### Gappers (auto-scan 09:33 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | OKLO | 46.555 | +10.32% | 342,562 | DOE cleared Groves Isotope Test Reactor for startup/testing after first criticality; ~$200M Microsoft/Nvidia program; Q2 earnings due today. |
| 2 | NIO | 5.00 | +8.81% | 2,337,803 | July deliveries 35,934, +71% YoY; stock up ~8.7% on the delivery beat. |
| 3 | RDW | 12.85 | +8.62% | 798,174 | Defense-order stacking (Stalker UAS $21.5M Q2 + $20M Q1), Huntsville expansion, Q2 revenue beat +89.6% YoY. |
| 4 | SATL | 5.365 | +6.45% | 392,311 | Q2 2026 results (Aug 5): revenue +259% YoY, first positive operating income/adjusted EBITDA. |
| 5 | RGTI | 15.525 | -6.25% | 716,980 | Q2 earnings reaction (~Aug 6); prior run-up was on CHIPS Act LOI/analyst coverage/hardware progress — today's move is a gap DOWN, opposite that cluster. |
| 6 | RKLB | 80.00 | +5.68% | 498,337 | Selected for $397M USSF SB-AMTI contract (Flatellite constellation via Neutron rocket); prior $266M USSF suborbital-launch award. Q2 earnings due Aug 10. |

#### Deep dive: OKLO $46.555 +10.32%
- Catalyst: DOE granted startup authorization for Oklo's privately financed
  Groves Isotope Test Reactor, and the reactor separately reached first
  criticality (a self-sustaining nuclear chain reaction) — both real
  regulatory/technical milestones. Layered on top, Oklo has a ~$200M
  Microsoft/Nvidia-backed program de-risking its commercial SMR pathway,
  and reports Q2 earnings today (Aug 7), which the pre-open move may
  partly anticipate.
- Why: Regulatory clearance plus a technical milestone removes near-term
  execution risk right before today's earnings print — momentum/short-
  covering buyers piling in ahead of a binary catalyst, amplified by
  OKLO's high short interest (~16.45%, highest in utilities).
- Impact: Can't confirm sustainability from volume data (the "volume"
  field here is prior full-day volume, not premarket). Stock is down
  ~45% YTD / ~52% over 6mo and oversold (RSI 32.3), so this reads as a
  genuine bounce off oversold plus a real milestone — but stacked
  directly on same-day earnings makes it event-risk, not a clean trend
  continuation. No confirmed sector-wide read-through.
- Horizon: SHORT_TERM — genuine catalysts exist but the move is compounded
  by same-day earnings (binary/event risk); strategy's no-earnings-binary
  rule argues against treating this as a fresh entry until the print is
  digested.
- Opportunity cost: 0 open positions, nothing existing displaced. Would
  use 1 of the 0/3 weekly slots. Already logged Aug-6 as "borderline-
  chase, no today-specific catalyst"; same-day earnings makes a sane 2:1
  R:R stop hard to define given post-print gap risk. Ranks below RDW/SATL
  among today's list for a non-earnings-binary setup.

#### Deep dive: NIO $5.00 +8.81%
- Catalyst: NIO reported July 2026 deliveries of 35,934 vehicles, up
  71.0% YoY, across its multi-brand lineup (NIO premium, Onvo mass-
  market, Firefly compact). Follows NIO's first-ever quarterly adjusted
  operating profit in Q4 2025 (~RMB950M), a reversal from a ~RMB5.54B
  adjusted operating loss a year earlier.
- Why: A large delivery beat plus a recent profitability inflection pulls
  in momentum buyers looking for confirmation that unit growth is finally
  translating to margin — a "proof point" catalyst, not pure speculation.
- Impact: Real operational data (delivery count), more durable than a
  headline spike; but NIO carries balance-sheet risk (current ratio 0.98,
  debt/equity 2.07) and was hit in May by a DoD Chinese-military-company
  listing (-12.4%, contested by NIO) that could resurface and cap upside.
  No confirmed EV-peer read-through today.
- Horizon: LONG_TERM — delivery growth plus an operating-profit inflection
  is structural, not a one-day headline — though Tech/Consumer-
  Discretionary sits in the "Lagging" YTD momentum bucket per today's
  brief, so a multi-week hold swims against the broader sector-rotation
  read even if the company thesis holds.
- Opportunity cost: 0 open positions, nothing displaced. Would use 1 of
  the 0/3 weekly slots. Likely cleaner room to 2:1 R:R than OKLO's
  earnings-binary setup, but the debt-heavy balance sheet and DoD-listing
  overhang are real tail risks a stop needs to price in; competes with
  RDW/SATL (also LONG_TERM candidates today) for the same weekly cap.

#### Deep dive: RDW $12.85 +8.62%
- Catalyst: Redwire posted Q2 CY2026 revenue up 89.6% YoY to $117.1M,
  beating estimates by ~$10M, backed by $21.5M in new Q2 Stalker UAS
  follow-on defense orders (on top of $20M in Q1) and a fresh $8.5M-
  incentivized 164,000 sq ft Huntsville, AL expansion targeting higher
  Stalker/space-infrastructure output by Q4 2027.
- Why: Stacked, verifiable defense contract wins plus a real revenue beat
  and a record $498.1M backlog (+71.1% YoY) with reaffirmed FY26 guidance
  pull in momentum buyers on a "the growth story is real" re-rating, not
  just a headline.
- Impact: Backed by hard numbers (revenue beat, backlog growth, contract
  dollar figures), reads more sustainable than a pure headline spike —
  though margins remain deep negative (EBIT ~-77%, profit margin ~-80%)
  and RDW recently ran a $500M ATM equity program that triggered a >15%
  selloff, a dilution risk that could resurface. Sector read-through:
  aligns with "Industrials leading" in today's brief, and RKLB (also
  gapping up today) suggests a sector-wide bid, not an isolated move.
- Horizon: LONG_TERM — backlog growth, reaffirmed FY26 guidance, and
  multi-year contract wins (NATO Penguin Mk3, Stalker follow-ons) are
  structural and align with the current "Industrials leading" sector-
  rotation phase, worth a multi-day/week hold if it later clears the
  Confluence rule.
- Opportunity cost: 0 open positions, nothing displaced. Would use 1 of
  the 0/3 weekly slots. Deep negative margins and dilution risk (recent
  $500M ATM) mean the stop needs room to survive volatility, pressuring
  the 2:1 R:R math at a sane stop distance; competes with NIO/SATL (also
  LONG_TERM) for the weekly cap, and with RKLB for space/defense sector
  concentration.

#### Deep dive: SATL $5.365 +6.45%
- Catalyst: Satellogic's Q2 2026 results (reported Aug 5) showed revenue
  up 259% YoY and the company's first-ever positive operating income and
  adjusted EBITDA, following Q1's first positive operating cash flow.
  Shortly before that: two new strategic partnerships (SpaceKnow,
  SynMax) integrating its satellite imagery with AI analytics, an $18M
  international defense imagery contract, and its funded "Merlin" AI-
  first defense constellation (anchored by a $30M customer contract).
- Why: A swing to positive operating income/EBITDA on a 259% revenue jump
  is a rare profitability inflection for a small-cap space company,
  pulling in momentum buyers on a "the model is starting to work"
  re-rating, compounded by fresh defense-contract validation.
- Impact: Genuine financial inflection (positive op income, not just
  revenue growth) backed by real contract dollars, more durable than pure
  sentiment; but SATL is thinly capitalized and volatile (previously
  moved -19.2% on a different defense-contract announcement, so it swings
  hard both ways on news). Sector read-through: same space/defense
  cluster as RDW and RKLB, all gapping up together today — a real
  sector-wide bid.
- Horizon: LONG_TERM — first positive operating income/EBITDA plus a
  funded multi-year defense constellation (Merlin) is a structural
  inflection, aligning with the "Industrials leading" sector-rotation
  phase, worth a multi-day/week hold if it clears Confluence later.
- Opportunity cost: 0 open positions, nothing displaced. Would use 1 of
  the 0/3 weekly slots — but competes directly with RDW and NIO (also
  LONG_TERM) and RKLB (same space/defense sector) for the same cap and
  for sector-concentration/correlation-gate limits if more than one of
  RDW/SATL/RKLB were taken together. At $5.37, ATR(14) sizing would need
  to be run to confirm actual share count against the 20%-of-equity cap.

#### Deep dive: RGTI $15.525 -6.25%
- Catalyst: Rigetti has a cluster of recent positive catalysts — a
  nonbinding US Commerce Dept letter of intent for up to $100M in CHIPS
  Act funding, an NSF-backed "TangleLab" partnership, new analyst
  coverage (Wedbush Outperform $40 PT, Benchmark Buy $25 PT), and
  hardware progress on its 84-qubit QPU with a 100-qubit system in
  development — but today's move is a GAP DOWN (-6.25%), opposite that
  catalyst cluster's direction.
- Why: Reads as a post-earnings-reaction pullback, not a fresh negative
  catalyst — RGTI ran up sharply into its Q2 print (+7-8% in the days
  prior on analyst/hardware anticipation) and today's red gap looks like
  "sell the news"/profit-taking after the report, or the print falling
  short of elevated pre-earnings expectations.
- Impact: Given the run-up into earnings and now a reversal, this looks
  like a one-day mean-reversion move tied to the earnings reaction, not a
  fresh negative catalyst — no distinct negative headline surfaced. No
  confirmed sector-wide down-move across quantum peers.
- Horizon: SHORT_TERM — post-earnings pullback with no distinct negative
  catalyst identified — reads as noise/profit-taking that could resolve
  either direction quickly, not a durable thesis change; the no-earnings-
  binary rule would in any case exclude a fresh trade right around this
  print.
- Opportunity cost: 0 open positions, nothing displaced. This is a gap
  DOWN and not a long setup candidate under the current stocks-only,
  long-bias strategy (200-SMA long-bias filter in TRADING-STRATEGY.md);
  only relevant if the strategy later considers a short — account has
  shorting_enabled but TRADING-STRATEGY.md has no short-side rules, so
  this stays research-only, not sizeable against the weekly cap either
  direction.

### Note
Ranks 6-10: only 6 gappers total cleared today's filter (no ranks 7-10).
RKLB (rank 6) got quick-scan only per the top-5 deep-dive cap — see table
above for its catalyst headline.

## RECOVERED from claude/eager-wozniak-af6ljq (a8aedeb5, 2026-08-07 14:28Z, "gappers scan 2026-08-07 10:25 ET")

## 2026-08-07 — Gappers (auto-scan 10:25 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **2 hits** of ~60 tracked tickers (|gap|>=5%, price>=$3;
premarket_volume field not populated by this script so that filter was
skipped, same as every prior cloud run). Apify RAG web browser again
returned "Monthly usage hard limit exceeded" on both catalyst queries
(11th+ consecutive session, unresolved since 7/29). Benzinga WebFetch
fallback also 403'd on both quote pages. Substituted WebSearch +
stocktitan.net headline checks (not in the routine's documented fallback
chain) as a last-resort source so the scan wasn't skipped; flagged here per
the same pattern as the 2026-08-06 11:32 ET entry. Only 2 hits, both within
the top-5 deep-dive cap — no ranks 6-10 to note as quick-scan-only this run.

**BW data-quality flag continues:** this run shows BW +7.61% ($9.90, prev
close $9.20). The 2026-08-06 log shows BW at +7.20% (10:22 ET) then -7.04%
(11:32 ET) with no catalyst attached to either print — this is now a third
distinct gap reading this week with no same-day news behind any of them.
Treat BW gap prints as unreliable pending a live-quote confirmation, per the
"fake gaps + stale snapshots" failure mode logged 2026-07-31.

### Gappers (auto-scan 10:25 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BW | 9.90 | +7.61% | 12,138 | No same-day news; latest item (Aug 3) only scheduled the Q2 2026 earnings call for Aug 10 — recurring data-quality-flagged ticker. |
| 2 | BKSY | 30.365 | +7.26% | 6,636 | BlackSky reported Q2 2026 results Aug 6: revenue +50% YoY to $33.3M, record $24.5M space-based intelligence & AI services revenue. |

Deep dive (both hits, no cap needed — only 2 this run):

#### Deep dive: BW $9.90 +7.61%
- Catalyst: No news dated today (Aug 7). Only recent items are Aug 3 (Q2
  2026 earnings call scheduled for Aug 10) and Jul 13 (full redemption of
  $61.4M 6.50% senior notes due Aug 13, plus a new $50M share repurchase
  authorization), both 3+ weeks old and already priced in. No same-day 8-K,
  contract, or analyst-rating action found via WebSearch or StockTitan's
  headline feed.
- Why: No confirmed same-day catalyst. BW has flipped gap sign repeatedly
  this week on Alpaca snapshots (+7.20% then -7.04% within roughly an hour
  on Aug 6) with no news attached either time — consistent with a
  stale-baseline/wide-spread pricing issue on a thin, low-priced name
  rather than a genuine move.
- Impact: 12,138 shares is thin for this name; combined with the
  documented data-quality flag (3 conflicting gap prints across the last
  two sessions), this reads as noise/stale-snapshot rather than real
  participation. Not sustainable until confirmed by a live quote at the
  open.
- Horizon: SHORT_TERM — no catalyst to anchor any thesis to, and even the
  pending Aug 10 earnings would trip the no-earnings-binary rule going in.
- Opportunity cost: Zero open positions (0/6) and 0/3 weekly trade slots
  used, so nothing to displace — but no catalyst fails the Confluence
  rule's catalyst leg outright regardless of open capacity. Skip; revisit
  only if a genuine same-day catalyst appears, or after the Aug 10 print
  (which itself would trip the no-earnings-binary rule on entry).

#### Deep dive: BKSY $30.365 +7.26%
- Catalyst: BlackSky reported Q2 2026 results before the open on Aug 6:
  total revenue $33.3M (+50% YoY), a record $24.5M in space-based
  intelligence & AI services revenue, international revenue +200% YoY, and
  roughly $150M of cash added during the quarter. Management cited Gen-3
  satellite momentum expanding the customer base, pipeline, and backlog;
  the year also includes a $99M sole-source IDIQ with the Air Force
  Research Lab and a $25M multi-year international MoD subscription deal.
- Why: Beat-and-raise-style momentum — a 50% YoY revenue beat with a
  record high-margin services line and a strengthened balance sheet pulls
  in momentum buyers. Today's +7.3% move, a day after the Aug 6 print,
  looks like follow-through/analyst reaction rather than the initial
  earnings pop.
- Impact: Volume in this snapshot (6,636 shares) is thin relative to what
  real post-earnings follow-through would need — can't confirm
  sustainability off this print alone; check full-session volume vs BKSY's
  average before treating as durable. Worth checking other
  space/geospatial-intel peers for a sector-wide read-through.
- Horizon: LONG_TERM — the catalyst is structural (real revenue growth,
  expanding defense/intel contract backlog, strengthened cash position),
  consistent with a name that could hold a multi-day/week swing if it
  clears Confluence later, not just a one-day headline spike.
- Opportunity cost: Zero open positions (0/6) and 0/3 weekly trade slots
  used this week (week of Aug 3), so nothing to displace. Of today's 2
  gappers this is the stronger candidate — the only one with a confirmed,
  fundamentals-backed catalyst (BW has none). Still needs a live confluence
  check (tradingview-data MCP down 22+ straight sessions per this morning's
  pre-market log) and a stop-distance check via scripts/size.mjs before
  using one of the 3 weekly trade slots; size against the 20%-of-equity cap
  at ~$30/share.

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.
No trades placed; research only.

## RECOVERED from claude/clever-goodall-hgn4uz (88b73680, 2026-08-10 11:10Z, "pre-market research 2026-08-10")

## 2026-08-10 — Pre-Market Research (cloud routine)

Apify RAG web browser back online this session (no hard-limit error on any
of the 8 queries — first clean run since the outage began 2026-07-29,
ending an 11-session streak). Several queries still hit JS-rendered
calendar/tracker pages (tradingeconomics.com/calendar, marketwatch
calendar, Nasdaq earnings calendar, SSGA sector tracker) that don't expose
data to a static scrape — noted per-item below, not treated as an outage.
`tradingview-data` MCP still absent (`ToolSearch`: no match) — confluence
rule (>=2 of VWAP/RSI/200-SMA/insider) remains unsatisfiable, same
unresolved gap as every session since 2026-07-25 (24 straight sessions
now).

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 23 straight trading days
  since the Day-0 baseline (2026-07-08 launch). Same confirmed-live-vs-
  $10k-baseline mismatch flagged 2026-07-27, still unresolved/operator
  pending — not re-litigating here.
- Weekly trade count: 0/3 (week of Aug 10, fresh week).

### Market Context (Apify RAG web browser, Mon 8/10 premarket ET)
- **Oil**: Brent $84.75/bbl, +1.44% ($1.20) per Markets Insider (07:02 AM
  ET indication; prior close $83.55, day range $83.33-$84.99). No clean
  same-source WTI print surfaced — oil-price.net didn't render numeric
  data via static scrape. Treat Brent print as directional only until
  WTI confirms.
- **VIX — up off a calm base**: 15.47, +3.83% (+0.57) per Cboe.com
  (official, as of Aug 10 2026; prev close 14.90, open 15.40, day range
  15.39-15.49). Still deep in the lower third of its 52-week range
  (13.38-35.30) — an uptick, not stress. Context: CNBC (8/8) headlined "a
  record-breaking week for options powers S&P 500 surge," consistent with
  the risk-on tape flagged in recent sessions (S&P/Dow record closes
  8/4-8/8).
- **S&P 500 futures** — no clean today-dated premarket print surfaced;
  search results returned stale Aug 4/7 recaps instead of live futures
  data. Gap not filled this session — treat as unknown, not flat.
- **Earnings — today, before open**: none confirmed. Nasdaq's earnings
  calendar widget returned "Data is currently not available" (JS-rendered,
  not scrapable) rather than a real empty-result signal — informational
  gap, not a clean "no earnings today" read.
- **Econ calendar**: no CPI/PPI/jobs release dated today found. Confirmed
  via BLS.gov's official PPI release schedule — July 2026 PPI prints Aug
  13 (Wed), not today. Friday 8/7's nonfarm payrolls already happened last
  session. No major scheduled catalyst identified for today.
- **Sector YTD/momentum**: could not refresh — State Street's sector
  tracker (ssga.com) is JS-rendered and returned template placeholders,
  not live values. Falling back to the 8/7 read (Energy/Industrials/
  Materials/Staples "Leading," Tech/Comm/Discretionary/Financials
  "Lagging") as stale context only, not sized off.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None cleared to Tier-1 (documented-catalyst + confluence bar not met):
1. **No dated catalyst surfaced for today.** Recent tape (through 8/8) was
   risk-on with S&P/Dow at record closes and VIX near 52-week lows: not a
   reason on its own to chase into a fresh week with no company-specific
   trigger and no confluence tooling live.
2. **Energy/Industrials/Materials sector momentum — watch only, stale
   data.** Last confirmed read is 8/7's leading-quadrant call; couldn't
   refresh sector tracker this session (JS-rendered page). No single-name
   catalyst dated today regardless.
3. **VIX uptick (+3.83%) — monitor, not act.** Still historically low in
   absolute terms; worth a midday recheck before treating as a regime
   shift.

### Risk Factors
- **`tradingview-data` MCP still absent** — confluence rule unsatisfiable
  since 7/25, now 24 straight sessions. Same operator flag, escalating.
- **S&P futures and today's earnings calendar both gapped** — JS-rendered
  source pages didn't yield live data via static scrape; don't treat
  either as confirmed-flat/confirmed-empty, re-check via a different
  source (e.g. direct WebSearch snippet) before size decisions later today.
- **Oil source coverage thin** — Brent confirmed live, WTI unconfirmed
  this session; don't size any energy-sector trade off Brent alone.
- **Sector-momentum data stale** (last refreshed 8/7) — don't size sector
  bets off it without a same-session confirmation.
- **Confirmed-live-vs-$10k-baseline mismatch** (flagged 7/27) — still
  unresolved, operator review pending, not re-litigating further here.

### Decision
**HOLD — no trades.** No dated catalyst surfaced for today across 8
research queries; two of the eight sources (S&P futures, today's earnings
calendar) returned gaps rather than confirmed data due to JS-rendered
pages, and sector-momentum context is stale from 8/7. `tradingview-data`
MCP still down (24 straight sessions) — confluence rule unsatisfiable
regardless of what the market-context queries turn up. Zero positions,
zero orders, 23 straight flat trading days — patience over activity. Fresh
week, trade count reset to 0/3 (week of Aug 10).

## RECOVERED from claude/eager-wozniak-g02kuz (42d75597, 2026-08-10 12:29Z, "gappers scan 2026-08-10 08:28 ET (0 hits)")

## 2026-08-10 — Gappers (auto-scan 08:28 ET, cloud)

Full watchlist scan (69 tickers from `memory/WATCHLIST.md`, via
`scripts/gappers-alpaca.sh watchlist` against Alpaca premarket snapshot
data). **0 hits at the 5.0% gap threshold.** Largest premarket mover was
ONDS at +3.6% (below threshold) — sanity-checked with `GAP_THRESHOLD=0.0` to
confirm live premarket data was flowing, not a scan failure. No catalyst
research run (nothing cleared the gate). No Telegram/ClickUp notify sent per
routine rule (0 hits, no error). No `data/premarket_gappers_2026-08-10.json`
written — nothing to save.

## RECOVERED from claude/eager-wozniak-iyvyd7 (86e0a13c, 2026-08-10 14:35Z, "gappers scan 2026-08-10 10:33 ET")

## 2026-08-10 — Gappers (auto-scan 10:33 ET, cloud)

Watchlist scan (memory/WATCHLIST.md, ~60 tickers via `scripts/gappers-alpaca.sh
watchlist` against Alpaca), rerun ~1h after the 09:29 scan (cadence gate
clears at 1h). 4 raw gaps >=5%: LPG -7.1%, AGMH +6.57%, BW -6.47%, BKSY
+6.18%. AGMH excluded ($1.11 fails the $3.00 price floor). **3 qualifying
gappers after filters.** Note: BW's gap flipped sign across three Alpaca
snapshots taken minutes apart (-6.55% -> +6.63% -> -6.47%) on thin volume —
flagged as noise in its deep dive, not a directional catalyst. Deep-dive cap
is 5; all 3 qualifiers got the full deep dive (none held back to quick-scan
only). Full detail: `data/premarket_gappers_2026-08-10_1033et.json`.

### Gappers (auto-scan 10:33 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | LPG | $41.925 | -7.1% | 3,487 | Record Q1 FY27 results Aug 5 (TCE $75,926/day, +91% YoY), Mideast freight-rate spike; $1.00/sh dividend paid Aug 12 |
| 2 | BW | $8.67 | -6.47% | 19,453 | No confirmed catalyst; reports Q2 2026 earnings after today's close (5pm ET call) |
| 3 | BKSY | $32.495 | +6.18% | 4,190 | Q2 2026 earnings (~Aug 7): revenue +50% YoY, first-ever positive adjusted EBITDA, loss narrowed 49% |

#### Deep dive: LPG $41.925 -7.1%
- Catalyst: Dorian LPG announced Q1 FY2027 (quarter ended June 30, 2026) results on Aug 5: revenue $187.9M (+123% YoY), net income $138.3M ($3.24 diluted EPS) vs $10.1M ($0.24 EPS) YoY, adjusted EBITDA $165.4M. TCE rate hit $75,926/day, up 91% YoY, driven by the Middle East conflict/Strait of Hormuz disruption pushing VLGC freight rates to records (Baltic Index ~$190/mt vs ~$95/mt in Q1). Declared a $1.00/share ($42.8M) irregular dividend, its 19th consecutive quarterly special dividend, paid Aug 12. Also sold three older VLGCs for ~$248M combined proceeds and prepaid debt.
- Why: The blowout quarter is now five sessions old; today's -7.1% reads as the market fading the freight-rate spike, since management's own language flagged the driver ("dislocations and uncertainty... high volatility and extraordinary freight rates") as geopolitically contingent, not structural — any Strait of Hormuz de-escalation reprices VLGC day-rates lower fast.
- Impact: Volume today (3,487 sh) is thin for a name that normally trades heavier around earnings/dividend events — reads as a low-liquidity pullback on an already-priced catalyst, not a fresh single-day shock. Sector read-through: check other Hormuz-risk-premium shipping/tanker names for a similar fade.
- Horizon: SHORT_TERM, the print is 5 days stale and freight rates here are explicitly geopolitically contingent per management — not a durable re-rating to carry as a swing.
- Opportunity cost: 0 open positions and 0/3 weekly trade slots used, so nothing existing is displaced — but it competes for one of the 3 weekly slots against BW and BKSY below. At $41.925 with a 7-10% stop and no confirmed 2:1 R:R on a catalyst that's already 5 days old and could reverse either direction on Hormuz headlines, it is a low-quality use of that slot.

#### Deep dive: BW $8.67 -6.47%
- Catalyst: No same-day news catalyst confirmed — the two most relevant search hits were stale (a May equity-dilution offering, a March short-seller/forensic-risk report). What is confirmed and current: Benzinga's live quote page shows BW reports Q2 2026 earnings after today's market close with a conference call at 5:00pm ET. Alpaca snapshots taken minutes apart showed the "gap" flip from -6.55% to +6.63% back to -6.47% on ~19,453 sh volume — a sign of thin-liquidity noise around a pre-earnings name (12.96% short interest, RSI 39) rather than a clean directional catalyst.
- Why: No mechanism confirmed; best explanation is pre-earnings positioning/short-covering chop ahead of tonight's print, amplified by BW's elevated short interest and thin volume relative to its 3.84M average.
- Impact: Move direction flipped between two Alpaca snapshots minutes apart — that instability is itself the signal: this reads as noise, not a sustained move. Any real move comes from tonight's earnings reaction, not today's chop.
- Horizon: SHORT_TERM, nothing durable identified; today's action is likely overwritten by tonight's earnings reaction.
- Opportunity cost: 0 open positions to displace; competes for one of the 3 weekly trade slots. Since BW reports earnings after today's close, any same-day entry here is a same-day earnings-binary bet — the desk's no-earnings-binary convention (already applied today to exclude SPG) argues this should not consume a trade slot regardless of gap direction.

#### Deep dive: BKSY $32.495 +6.18%
- Catalyst: BlackSky reported Q2 2026 results around Aug 7: revenue $33.3M vs $22.2M YoY (+50%), net loss narrowed to $20.8M ($0.54/sh) from $41.2M ($1.27/sh), and adjusted EBITDA flipped positive to $4.7M (14.2% margin) for the first time. Management flagged ~$200M YTD bookings with >80% of funded backlog now multi-year international contracts (international subscription revenue +150% YoY), tied to the Gen-3 satellite platform ramp.
- Why: First-ever positive-EBITDA quarter plus accelerating international/multi-year bookings is a legitimate structural narrative (durable margin inflection, not a one-off headline) — momentum buyers are extending the initial Aug 7 pop into today.
- Impact: Stock is +6.18% today on top of the initial Aug 7 jump — multi-day follow-through, not a single-day spike — though it sits against a -26% 90-day drawdown (recovering from a larger prior selloff, not making new highs). Volume in this snapshot (4,190 sh) is light for a real breakout; size any confirmation carefully. Sector read-through: watch peers PL and SPIR for a shared move.
- Horizon: LONG_TERM, the Gen-3 margin inflection plus backlog mix shift is structural, not headline-driven; worth a multi-day/week swing IF it clears the Confluence rule (>=2 of VWAP/RSI/200-SMA/insider) on a later /trade check — that check has not been run here.
- Opportunity cost: 0 open positions to displace. Of today's three gappers this is the only one with a legitimate multi-day structural catalyst (vs. LPG's stale/fading print and BW's earnings-binary noise) — the strongest opportunity-cost case for one of the 3 weekly slots, though up 6%+ on top of an already-extended move risks tripping the chase-rule check /trade would need to run explicitly, and a sub-2:1 R:R is plausible at a tight stop this extended.

## RECOVERED from claude/eager-wozniak-k7n6v3 (16c89eb1, 2026-08-11 13:45Z, "gappers scan 2026-08-11 09:43 ET (7 hits, cloud)")

## 2026-08-11 — Gappers (auto-scan 09:43 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **7 hits** of ~69 tracked tickers (all already |gap|>=5%, price>=$3
per script filtering; `premarket_volume` field not populated by this script
so that sub-filter was skipped). Note: this run landed at 09:43 ET, after
the 9:30 open — later than a strict premarket window, still executed as
scheduled. Deep-dive capped at top 5 by |gap%|; ranks 6-7 (DPRO, BW) got
quick-scan only. CMBT's catalyst fetch failed both ways (Apify RAG empty,
Benzinga WebFetch 403) — logged as a gap, not fabricated.

Several catalyst headlines returned by Apify were stale (dated Jun-Jul) or
otherwise didn't explain today's specific move — flagged per-ticker below
rather than treated as confirmed drivers. Two names (SYNA, CMBT) printed
only 200-400 shares premarket — thin/illiquid prints, flagged as
low-confidence gaps, not confirmed tradeable moves.

### Gappers (auto-scan 09:43 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | LUNR | 14.645 | -7.89% | 2,025 | MarketWatch/TipRanks cite an Aug 4 spacecraft-contract-win jump; no fresh headline for today's move (Q2 earnings due Aug 13). |
| 2 | SYNA | 114.095 | +7.44% | 200 | Stocktitan pegs SYNA at $103.64 (Jul 29) with a ~8% price-target cut to $133; no dated catalyst found for today's print. |
| 3 | ZIM | 23.38 | -7.20% | 108,791 | Coverage centers on ZIM's pending buyout-arbitrage vs. a reported ~$35/share Hapag-Lloyd offer; no same-day headline for today's drop. |
| 4 | BWLP | 23.12 | +7.19% | 10,191 | Marketchameleon earnings-dates page is the top hit; no same-day catalyst found. |
| 5 | CMBT | 17.685 | +6.99% | 400 | Catalyst fetch failed (Apify empty, Benzinga 403) — no headline identified. |
| 6 | DPRO | 3.86 | -6.54% | 4,945 | Trustwave recap notes Draganfly consolidating near $4.10 (Jul 31); no fresh today-dated catalyst. |
| 7 | BW | 11.81 | +5.92% | 15,124 | Trustwave notes energy-transition headwinds (Jul 19); Stocktwits flags an earlier Q1 revenue beat ($214.4M vs $149.7M est.) driving a premarket surge — no confirmed same-day driver. |

#### Deep dive: LUNR $14.645 -7.89%
- Catalyst: No same-day catalyst identified. Freshest relevant coverage is
  ~1-week-old (Aug 4, spacecraft contract win); LUNR is already down ~28%
  from its May 28 52-week high ($46.75) ahead of Q2 earnings due Aug 13
  (est. -$0.07 EPS, $219.3M revenue).
- Why: With no fresh headline surfaced, the drop most likely reflects
  pre-earnings positioning or continuation of the post-high pullback, not a
  single new catalyst.
- Impact: Premarket volume of only 2,025 shares vs. LUNR's normal
  multi-million-share turnover reads as a thin/low-liquidity print, not
  confirmed institutional selling — high mean-reversion risk once regular
  volume arrives.
- Horizon: SHORT_TERM — no structural catalyst identified; Aug 13 earnings
  is the real event risk and this gap likely reprices into that print.
- Opportunity cost: At 2,025 shares of premarket liquidity a clean fill at
  20%-of-equity sizing is doubtful; unlikely to clear 2:1 R:R at a sane stop
  given the illiquidity — ranks below ZIM/BWLP/BW today. 0/6 positions
  open, 0/3 weekly trades used (week of Aug 10) — nothing displaced either
  way.

#### Deep dive: SYNA $114.095 +7.44%
- Catalyst: No same-day headline found. Freshest dated point (Jul 29) has
  SYNA at $103.64, with a 9-analyst average price-target cut to $133 the
  most recent fundamental note. Today's print at $114.095 is well above
  that level with nothing surfaced to explain the gap.
- Why: Mechanism can't be established from available sources — possibly
  options/index-flow driven, or an unconfirmed same-day headline the
  research didn't surface.
- Impact: Only 200 shares printed premarket — does not read as a real,
  liquid gap; treat as a stale/thin quote pending confirmation against
  actual regular-session volume at the open.
- Horizon: SHORT_TERM pending data-quality confirmation — insufficient
  evidence for any thesis until verified with live volume.
- Opportunity cost: A 200-share print carries no real signal; sizing
  anything here would just be trading noise. 0/6 positions open, 0/3
  weekly trades used (week of Aug 10).

#### Deep dive: ZIM $23.38 -7.20%
- Catalyst: ZIM's dominant known thesis is merger-arbitrage — a reported
  ~$35/share Hapag-Lloyd acquisition interest (Mar 2026 piece), with ZIM
  trading well below that implied deal price. Q1 2026 results (reported
  May 20) were weak. No today-dated report found confirming a specific
  deal update behind today's drop.
- Why: If merger-arb is still the operative thesis, a sharp drop like this
  typically signals deal-risk repricing (terms cut, timeline slip,
  regulatory doubt) — but no confirming same-day source was found.
- Impact: Premarket volume of 108,791 shares is the largest of today's
  batch — reads as a real, liquid move, not noise. Worth checking
  container-shipping peers for a sector-wide freight-rate read-through vs.
  a ZIM-specific deal update.
- Horizon: SHORT_TERM pending confirmation — if this is deal-arb repricing
  it's event-driven and needs a same-day sourced headline before treating
  it as more than a fade risk; would only become LONG_TERM if the buyout is
  confirmed intact at a materially higher implied price.
- Opportunity cost: Real volume plus a real (if unconfirmed) M&A angle
  makes this the most credible name on today's down-list, but needs the
  actual deal-status headline before it could be sized against the 2:1 R:R
  minimum. 0/6 positions open, 0/3 weekly trades used (week of Aug 10).

#### Deep dive: BWLP $23.12 +7.19%
- Catalyst: No same-day headline found. Most relevant fundamentals: BW LPG
  reported a Q3 2025 profit (Dec 2025 release) with a historical pattern of
  drifting up modestly post-earnings (+2.3% day-after, +3.9% over the
  following days). A Q4 2025 EPS beat (+45.8% vs. estimate, per a late-May
  recap) was actually followed by a 3.37% share decline — the market has
  recently been fading BWLP's earnings beats, not rewarding them.
- Why: No same-day mechanism established; given that historical pattern,
  today's up-move is unlikely to be earnings-related unless a new report
  just dropped.
- Impact: 10,191 shares premarket is modest but not negligible; absent a
  confirmed catalyst this reads more like normal volatility in a
  shipping/LPG name than a durable move — check VLGC freight rates and peer
  tanker names for sector read-through.
- Horizon: SHORT_TERM — no structural catalyst found; default to fade-risk
  absent same-day confirmation.
- Opportunity cost: Without a real catalyst, BWLP would need to displace a
  stronger, catalyst-confirmed name (e.g. ZIM) to be worth taking — hard to
  justify given the unexplained gap. 0/6 positions open, 0/3 weekly trades
  used (week of Aug 10).

#### Deep dive: CMBT $17.685 +6.99%
- Catalyst: Fetch failed — Apify RAG returned no usable results and the
  Benzinga WebFetch fallback was blocked (HTTP 403). No same-day news
  identified. Separate fundamentals research surfaced CMB.TECH NV (NYSE:
  CMBT), a Belgian shipping/tanker company, with a reported $3.05B contract
  backlog as of an April 2026 piece.
- Why: Unknown — no catalyst source available for today's move.
- Impact: Only 400 shares printed premarket — thin/illiquid print, likely
  not a real tradeable gap.
- Horizon: SHORT_TERM pending data gap — cannot classify without a
  confirmed catalyst; re-check next run.
- Opportunity cost: No catalyst plus a 400-share print means this doesn't
  clear the bar for any position sizing — lowest-quality signal in today's
  top 5. 0/6 positions open, 0/3 weekly trades used (week of Aug 10).

## RECOVERED from claude/eager-wozniak-9hgxu4 (c9b1563b, 2026-08-11 15:25Z, "gappers scan 2026-08-11 11:21 ET (0 hits, cloud, third run)")

## 2026-08-11 — Gappers (auto-scan 11:21 ET, cloud, third run)

Third scheduled fire today; market open ~1h51m. Re-scanned watchlist via
`scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0) — this time the
script returned one raw candidate: **ZIM**, prev_close $24.83, current
$26.68, gap_pct +7.45%, volume 26,888.

Before running catalyst research, cross-checked against a live quote and
today's 15Min bars (`scripts/alpaca.sh quote ZIM` / `bars ZIM 15Min`):
ZIM's live quote printed ap $24.81 / bp $21.61 at 15:23:29Z, and every 15Min
bar from 13:30Z (session open) through 15:15Z sat inside a $24.62-$25.00
range — no trade anywhere near $26.68. The scan's "current" value is a
stale/bad snapshot artifact (bad latestTrade or latestQuote echo), not a
real price. ZIM is effectively flat on the session, not gapping. This is
the same root-cause class flagged in the 10:23 ET entry above (dailyBar/
snapshot math degrades post-open) plus a second, distinct failure mode: a
stale current-price echo on top of it.

**Discarded as a false positive** — not treated as a real hit, no deep-dive
research spent on it, no Telegram/ClickUp notification sent (zero genuine
hits, scan did not error). Data file
`data/premarket_gappers_2026-08-11_1121et.json` written with the discarded
candidate logged under `discarded_false_positives` and an empty `gappers`
array.

**Process note:** `scripts/gappers-alpaca.sh` has now produced unreliable
output on 2 of 3 runs today, both post-open (10:23 ET zero-hits-by-design,
11:21 ET a stale-data false positive). Recommend the operator restrict this
cloud routine's cron schedule to pre-market hours only (before 9:30 ET), or
have the script hard-fail/warn when invoked after the open rather than
silently emitting degraded or spurious rows — not fixed here, flagged for
the operator per read-only/research-only scope of this routine.

## RECOVERED from claude/eager-wozniak-xtcmvb (a9acb3c4, 2026-08-12 12:32Z, "gappers scan 2026-08-12 08:28 ET")

### Gappers (auto-scan 08:28 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | CRWV | $106.78 | +18.25% | 888,269 | CoreWeave up sharply after strong Q2 2026 results after Monday's close — $2.575B revenue, $1.510B adj. EBITDA, record $104B AI cloud backlog. |

Only 1 of ~60 watchlist tickers cleared the ±5% gap threshold this run —
ranks 2-10 don't exist today, deep-dive cap (5) not needed beyond CRWV.
Apify RAG web browser returned 0 pages on the first two catalyst-query
attempts (transient), succeeded on retry — Benzinga fallback wasn't needed.

#### Deep dive: CRWV $106.78 +18.25%
- Catalyst: CoreWeave reported Q2 FY2026 results after the close on Aug 11:
  $2.575B revenue, $1.510B adjusted EBITDA, and a record $104B AI cloud
  contracted backlog, disclosed via 8-K. The print followed a $2.6B loan-
  facility close two days earlier (financing flexibility for AI
  infrastructure). Stock jumped from a $90.32 prior close to an after-hours
  print of $104.52 (+18.52%) by 19:59 ET Aug 11, and Alpaca's pre-market
  snapshot this morning shows it holding near $106.78 (+18.25% gap). A
  same-day CEO interview headline frames the print as an earnings
  "blowout" alongside a "stock retreat" — signaling some intraday give-back
  even amid the beat.
- Why: Revenue/EBITDA beat plus a record contracted backlog print
  (visibility into forward AI-cloud demand) pulls in momentum and growth
  buyers on a pure-play GPU/AI-infrastructure name, and reduces the
  demand-durability overhang that had left the stock down ~35% over the
  trailing 12 months into the print.
- Impact: The move originated after Monday's close and has carried through
  into pre-market Tuesday — a fresh earnings reaction, not a stale
  multi-day drift. Normal daily volume is heavy (~29.6M shares in the Aug
  11 session per StockTitan), so today's 888K pre-market volume is just the
  early tape; expect much larger confirming (or fading) volume at the open.
  Fundamentals are mixed under the headline beat: -25.4% net margin,
  -$22.6B net balance-sheet position, and net EPS-estimate cuts (4 cuts vs.
  2 raises in the last 30 days) — plus a COO Form 4 sale (13,608 shares,
  Aug 10) and two pending Form 144 insider-sale filings. No other name in
  today's scan gapped alongside it, so no confirmed sector-wide
  read-through from peers (NBIS/IREN) yet.
- Horizon: SHORT_TERM — the pop is real and catalyst-driven, but heavy debt
  load, a negative net-margin/EPS-cut backdrop, insider selling into the
  print, and today's own scan showing no confirmed sector-rotation
  alignment (per this morning's pre-market entry) argue for treating this
  as a reactive earnings-gap setup, not a confirmed structural re-rate — do
  not carry past the week without a later Confluence-rule pass.
- Opportunity cost: No open positions exist to displace (0/6 held) and the
  weekly trade count is 0/3, so CRWV wouldn't bump another holding — but it
  would consume the week's only live candidate from today's scan. A ~18%
  overnight gap on an earnings reaction typically needs a wide stop to
  survive normal post-earnings chop (the CEO-interview "stock retreat"
  framing hints at exactly that), which widens risk-per-share and makes
  clearing the 2:1 reward:risk minimum at a sane stop distance uncertain —
  research flag only, no order size or entry recommended here.

## RECOVERED from claude/eager-wozniak-0iogbu (8cd842d8, 2026-08-12 13:33Z, "gappers scan 2026-08-12 09:31 ET")

## 2026-08-12 — Gappers (auto-scan 09:31 ET, cloud)

Watchlist scan (Alpaca, GAP_THRESHOLD=5.0) returned 5 qualifying names, all
price >=$3 and |gap%| >=5 — fewer than the 10-cap so all 5 got full deep-dive
(no ranks 6-10 to note as quick-scan-only). CPI print today (flagged in this
morning's Pre-Market Research HOLD) is a live macro overhang across all five.

### Part A — Quick scan

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | CRWV | 108.04 | +19.64% | 888,269 | Q2 2026 earnings beat: rev $2,575M vs $1,212M YoY, EPS -$1.03 vs -$1.49 est |
| 2 | NBIS | 226.35 | +17.34% | 566,000 | Q2 2026 earnings released before today's open; likely beat on ~$535-578M consensus |
| 3 | BE | 233.67 | +10.49% | 277,571 | Record Q2 2026 results (Aug 6) + expanded MiTAC AI-onsite-power partnership |
| 4 | ZIM | 26.21 | +6.81% | 65,123 | Hapag-Lloyd $35.00/sh cash-merger arb; antitrust notification filed ~1wk ago |
| 5 | AMKR | 57.16 | +5.27% | 140,701 | $1.5B Nvidia chip-packaging deal (Jul 23) re-rating, ahead of Aug earnings |

### Part B — Deep dive

#### Deep dive: CRWV $108.04 +19.64%
- Catalyst: Reported Q2 2026 earnings after Tuesday's close (Aug 11): revenue
  $2,575M vs $1,212M a year ago (~112% YoY growth), EPS -$1.03 vs -$1.49
  consensus (beat, narrower loss than feared). Backlog referenced at ~$104B.
- Why: Earnings beat + explosive YoY growth in AI/GPU-cloud demand pulls in
  momentum buyers already primed on the AI-infra trade; narrower-than-feared
  loss removes a near-term bear overhang.
- Impact: 888K premarket volume + 19.6% gap reads as a classic post-earnings
  pop. NBIS gapping similarly today on its own print suggests a sector-wide
  AI-datacenter read-through, not CRWV-only — a move this size after already
  elevated 2026 AI-infra multiples carries real fade/mean-revert risk.
- Horizon: SHORT_TERM — earnings-day reaction, no confluence check run yet.
  Treat as a headline pop until price settles and technicals confirm at /trade.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used (week of
  Aug 10) — nothing existing to displace. Rank 1 by gap size, but at $108 a
  7-10% stop is ~$7.50-10.80 risk, needing ~$15-22 further upside to clear
  2:1 R:R after an already-19.6% pop — a stretch. Today is also the CPI
  print flagged in this morning's HOLD call, arguing against new risk before
  confluence is confirmed.

#### Deep dive: NBIS $226.35 +17.34%
- Catalyst: Released Q2 2026 results before today's open; pre-print
  consensus called for revenue near $535-578M. Stock already up >100% YTD
  in 2026 heading into the print, pre-print mean price target ~$252 (~35%
  implied upside). Premarket action points to a beat/raise reaction.
- Why: Earnings beat stacked on an already-strong AI-cloud growth narrative
  pulls in the same momentum-buyer cohort as CRWV; a disclosed large
  institutional stake reinforces the AI-infra thesis.
- Impact: 566K premarket volume on a stock that has already multiplied in
  value this year — reads as earnings confirmation of an existing bull
  thesis, not a fresh one-off spike. Strongly correlated with CRWV's move
  today — best treated as one basket-level bet, not two independent signals.
- Horizon: SHORT_TERM tag for the immediate pop (earnings reaction, no
  confluence run yet); the AI-infra buildout thesis is structural and could
  support a LONG_TERM swing only after the pop settles and confluence confirms.
- Opportunity cost: Directly correlated with CRWV (same AI-datacenter/GPU-
  cloud trade) — taking both would concentrate risk in one theme and would
  likely fail scripts/corr-gate.mjs if both cleared confluence. Realistically
  only one of {CRWV, NBIS} should get a trade slot this week, not both.

#### Deep dive: BE $233.67 +10.49%
- Catalyst: IR page headlines record Q2 2026 results (Aug 6) and an
  expanded MiTAC partnership for AI-onsite power — positioning Bloom's
  fuel-cell systems as backup/primary power for AI data centers.
- Why: Continuation of the AI-datacenter power-demand theme; an expanded
  partnership with an established server/AI-hardware player signals
  recurring revenue growth in a fast-growing behind-the-meter power niche.
- Impact: 277K premarket volume on a stock that has already re-rated
  sharply higher over recent sessions (up mid-single-digits % the prior
  session per CNBC) — reads as trend continuation, though a run this steep
  raises near-term mean-reversion risk.
- Horizon: LONG_TERM lean — contract/partnership-based power-demand thesis
  is structural and aligns with the current AI-infra rotation; still needs
  a confluence check before sizing a swing position.
- Opportunity cost: A third name correlated with the AI-infra/power theme
  alongside CRWV and NBIS. Catalyst arguably more durable than CRWV/NBIS's
  single-print pop, but BE has already run further and sits further from a
  fresh breakout, raising chase risk at $233.67.

#### Deep dive: ZIM $26.21 +6.81%
- Catalyst: Under a signed cash-merger agreement to be acquired by
  Hapag-Lloyd for $35.00/share (~$4.2B deal, announced Feb 16, 2026); a
  competition-authority notification filing surfaced ~1 week ago, signaling
  progress through antitrust review.
- Why: Merger-arb dynamics — as regulatory-clearance odds firm up, the
  market compresses the spread between $26.21 and the $35.00 deal price,
  drawing in arb-focused buyers.
- Impact: Only 65K premarket volume, lowest of the five — a slow-grinding
  arb re-rating on a regulatory milestone, not a fresh operational spike.
  ~25% of spread remains to the $35 deal price; further re-rating depends on
  the regulatory timeline, not organic business momentum.
- Horizon: LONG_TERM by mechanics (deal-close arb runs weeks-to-months), but
  this is a special-situation merger-arb trade, not a momentum swing —
  VWAP/RSI/200-SMA are largely irrelevant to a fixed-price cash deal, a poor
  structural fit for the strategy's technical Confluence rule even though
  the catalyst itself is real and durable.
- Opportunity cost: Lowest-conviction setup of the five for this playbook
  (lowest volume, arb mechanics don't map onto the Confluence rule) — would
  rank last for a discretionary slot this week; capital better allocated to
  CRWV/NBIS/BE/AMKR if only 1-2 of the week's 3 slots go to today's gappers.

#### Deep dive: AMKR $57.16 +5.27%
- Catalyst: Signed a $1.5B multi-year strategic partnership with Nvidia
  (Jul 23, 2026) to expand US advanced chip-packaging/test capacity,
  including an Nvidia prepayment to fund the buildout; today's move comes
  just ahead of Amkor's own August earnings report.
- Why: Direct commercial tie-in to Nvidia's AI-chip supply chain
  (packaging/test capacity) re-rates AMKR as an AI-infra beneficiary;
  today's pop looks like anticipatory buying into the first print that will
  discuss the deal's ramp.
- Impact: 140K premarket volume on a stock that had dropped sharply earlier
  this year — reads partly as a bounce off depressed levels plus AI-supply-
  chain re-rating. Earnings are still pending and the exact date wasn't
  confirmed in this scan — a binary earnings event sits directly ahead of
  any entry, a live concern under the no-earnings-binary rule.
- Horizon: SHORT_TERM lean — the imminent, unconfirmed earnings date
  overrides the otherwise-structural Nvidia-deal thesis until the print
  clears; re-evaluate LONG_TERM only after earnings.
- Opportunity cost: Same AI-supply-chain basket as CRWV/NBIS/BE, plus an
  unconfirmed near-term earnings date that would likely disqualify a fresh
  pre-earnings entry under the no-earnings-binary rule regardless of rank.

## RECOVERED from claude/eager-wozniak-4uzu3s (868016d3, 2026-08-12 14:27Z, "gappers scan 2026-08-12 10:25 ET (0 hits, cloud, post-open artifact...")

## 2026-08-12 — Gappers (auto-scan 10:25 ET, cloud)

Scanned 69 watchlist tickers via `scripts/gappers-alpaca.sh watchlist`
(GAP_THRESHOLD=5.0). Raw output: 1 row (LPG, gap_pct=7.09%, "current"
$47.805 vs. `dailyBar` close $44.64). Both fail on inspection — 0 genuine
hits:

- **Post-open artifact.** Market was already open (10:25 ET) when this ran,
  same failure mode documented in the 2026-08-11 10:23 ET entry: past the
  open, Alpaca's `dailyBar` tracks today's own in-progress session instead
  of the prior completed session, so the script's gap math compares a
  same-day quote to a same-day trade instead of a real overnight gap.
  Checked the actual prior close (`prevDailyBar.c` = $43.08 from 08/11):
  real gap vs. the latest trade ($44.64) is 3.62%, under the 5% threshold.
  The 7.09% figure came from `latestQuote` midpoint ($47.805), which is
  unreliable here — bid/ask was $44.53/$51.08, a ~14.7% spread on a
  low-price stock, and dailyBar volume was only 855 shares/33 trades by
  10:25am (vs. 29,221 shares the full prior session) — thin liquidity, not
  a real move.
- **Watchlist-parser false positive.** LPG isn't an intentional watchlist
  entry — `memory/WATCHLIST.md`'s ticker-soup regex picked it up from the
  parenthetical "(BW LPG)" next to the real entry BWLP. (Also emits other
  noise tokens from that line: BW, CMB, OL.) Separately fails the
  `premarket_volume >= 50000` gate (855 << 50000) regardless.

No quick-scan table, no deep dive, no Telegram/ClickUp send (per routine:
only notify if hits > 0 or the scan errored; this run didn't error). Data
file `data/premarket_gappers_2026-08-12.json` written with an empty
`gappers` array and the reasoning above. Watchlist-parser false-positive
issue not fixed here (out of scope for this read-only routine) — flagged
for the operator.

## RECOVERED from claude/clever-goodall-6zuz0l (e45f2742, 2026-08-13 11:06Z, "pre-market research 2026-08-13")
## 2026-08-13 — Pre-Market Research (Day 26, Thursday)

**Account snapshot (live via `alpaca.sh`):** Equity $100,000.00 | Cash
$100,000.00 (100%) | Buying power $400,000 | Positions: 0 | Open orders: 0.
Equity still flat at $100,000 vs. the $10,000 baseline in CLAUDE.md —
mismatch flagged Jul 27, unresolved 27th straight session, operator review
pending.

**Market context (Apify RAG web browser + WebSearch fallback — Apify's oil-
price and "top catalysts" queries returned unrelated page content this run,
noted as a gap below; TradingEconomics/Bloomberg/CNBC/Cboe/BLS confirm the
rest):**
- **PPI day — the dominant catalyst, follow-through from yesterday's tame
  CPI.** July PPI prints today 8:30am ET alongside initial jobless claims.
  Consensus: headline PPI +0.2% MoM / 4.9% YoY (prior -0.3% MoM), core PPI
  +0.3% MoM / 4.1% YoY. Initial claims forecast 202K vs. 199K prior;
  continuing claims forecast 1,800K vs. 1,801K prior. Yesterday's CPI came
  in tame (headline +0.1% MoM, core +0.2%) and "added to early stock gains
  on AI earnings" per Schwab — tape entered today constructive, not
  defensive, but PPI is still a binary macro print.
- **Oil pulling back, no longer the dominant risk narrative.** WTI $82.11
  (-1.39% day), Brent $87.92 (-1.19% day) per TradingEconomics — both down
  from Aug 12 levels (WTI $83.34, Brent ~$88.9), a continuation of the
  bearish-inventory-build pressure flagged yesterday overtaking the
  Hormuz geopolitical premium. No fresh Hormuz escalation headline found
  this run — the CVX/XLE Hormuz-expression thesis from Aug 11-12 is stale
  and not being refreshed by today's news flow.
- **Equities modestly green pre-PPI:** S&P futures +0.08%, SPY +0.19%, DIA
  +0.26%, QQQ +0.09%, IWM +0.18% premarket (CNBC/Benzinga). Sentiment
  "cautiously optimistic," supported by a retreat in Treasury yields.
- **VIX $14.60, +0.34%** (Cboe, TradingView) — nine-month low territory,
  well off the 52-week high of 35.30 and just above the 52-week low of
  13.38. Calm/complacent regime, no fear signal into PPI.
- **Earnings before today's open:** Brookfield (BN, ~$0.88 est.), NetEase
  (NTES), JD.com (JD), Tapestry (TPR), Nu Holdings (NU). Applied Materials
  (AMAT) reports after today's close (~$3.40 EPS est.). **None of these
  are on `memory/WATCHLIST.md`** — confirmed via grep, zero overlap — so
  no earnings-binary exclusion needed and no idiosyncratic catalyst for a
  tracked name either.
- **Sector momentum:** July saw a sharp reversal — Energy +12% (Select
  Sector Energy) on the oil rally, while Technology faced AI-valuation
  headwinds. Industrials/Materials flagged as supported by AI-infra capex
  and defense/energy buildout; Health Care flagged for biotech efficiency
  gains. Today's oil pullback (see above) cuts against chasing the Energy
  momentum trade near-term.
- **Gaps this run:** Apify RAG queries for "WTI/Brent oil price" and "top
  stock market catalysts today" both resolved to unrelated/garbage page
  content (an ASX wrap, a dictionary page) rather than the requested
  topic — fell back to WebSearch per the routine's fallback clause, noted
  here per instructions. No held-ticker news check needed (0 positions).

**Trade ideas (all HOLD/watch-only — no entry):**
1. **PPI-day macro sit-out.** Same discipline as yesterday's CPI call: no
   idiosyncratic, confluence-confirmed single-name catalyst today, and the
   8:30am print is a binary macro event. Stay flat through the release;
   reassess post-print only if a name clears confluence off a fresh,
   idiosyncratic catalyst.
2. **Energy/oil — no longer actionable, reversed from Aug 11-12.** Oil is
   now pulling back (WTI -1.39%, Brent -1.19%) rather than spiking, so the
   CVX/XLE Hormuz-expression idea from earlier this week is stale; no new
   sector thesis to replace it today.
3. **No new sector or single-name idea clears the entry checklist today** —
   default HOLD stands.

**Risk factors:**
- PPI print + jobless claims 8:30am ET — a hot PPI surprise could reverse
  yesterday's tame-CPI relief rally and pressure richly-valued growth
  names; argues for staying flat into a binary release, per strategy rule.
- AMAT reports after today's close — a large semiconductor-capex bellwether
  that could move broader Tech/AI sentiment tomorrow regardless of today's
  positioning; nothing actionable pre-print, just a heads-up for tomorrow's
  research.
- Oil's reversal (bearish inventory build now outweighing Hormuz premium)
  could still whipsaw either direction if a fresh Middle East headline
  breaks intraday.
- Persistent $100k live equity vs. $10k CLAUDE.md baseline mismatch —
  unresolved 27 sessions running, operator review still pending.

**Decision: HOLD.** PPI print today is the defining catalyst; no
watchlist-name earnings or idiosyncratic setup clears the confluence bar,
and the Aug 11-12 energy/Hormuz thesis has reversed rather than confirmed.
26 trading days since launch (Jul 9) with zero entries. Weekly trade count:
0/3 (week of Aug 10).


## RECOVERED from claude/eager-wozniak-gbcjfx (48a7732b, 2026-08-13 14:38Z, "gappers scan 2026-08-13 10:32 ET (0 qualifying — APT/BWLP dropped o...")

## 2026-08-13 — Gappers (auto-scan 10:32 ET, cloud, third run)

Watchlist re-scan (60 tickers, `scripts/gappers-alpaca.sh watchlist`,
GAP_THRESHOLD=5.0). 3 raw gaps >=5%: AGMH +9.41% ($1.0436), APT -7.43%
($4.98), BWLP +7.29% ($24.13). AGMH dropped on the $3.00 price floor.
APT and BWLP hit gap% and price but were dropped on the volume filter
(APT vol 1,457; BWLP vol 5,200 — both far under the 50,000 threshold),
same treatment the 09:22 ET run gave APT/ZIM/LAKE today. **0 qualifying
gappers this run** — no table, no deep dive. LUNR and OPEN (this
morning's earlier hits) have both fallen back under the 5% threshold on
this snapshot and did not reappear.

Catalyst-research note: before applying the volume filter, ran Apify RAG
web browser + a Benzinga WebFetch fallback for APT and BWLP anyway (in
case the volume read was a script artifact worth double-checking) —
Benzinga returned HTTP 403 for both tickers, and Apify results were
low-quality (empty scrapes, content-farm mirror sites, a paywalled
AAII "why is BWLP up 5.17%" page blocked by Incapsula). No confirmed
single-day catalyst surfaced for either name; BWLP's context is
generic sector/momentum (LPG shipping, near 52-wk high, Danelfin AI
Buy 8/10, next earnings not until Aug 28 — no earnings-driven trigger
today). Not logged as trade research since neither cleared the
volume filter.

No Telegram/ClickUp notification sent (0 qualifying hits, no scan
error) per routine STEP 6.

## RECOVERED from claude/eager-wozniak-o7yj7f (7be885eb, 2026-08-13 15:40Z, "gappers scan 2026-08-13 11:39 ET")

### Gappers (auto-scan 11:39 ET, cloud, third run)

Watchlist re-scan (60 tickers via `scripts/gappers-alpaca.sh watchlist`,
GAP_THRESHOLD=5.0). Fired mid-morning (11:39 ET, market open ~2hrs) rather
than premarket — scan and filters run unchanged regardless, consistent with
the 08/12 11:23 ET entry's precedent. Only 2 raw gaps >=5%: BW -7.69%, AGMH
+8.37%. AGMH fails the $3.00 price floor ($1.0336, same as yesterday).
**1 qualifying gapper.** "Vol" field is the script's session-volume figure,
not true premarket volume (informational only, consistent with prior
entries). Deep dive on the 1 hit (well under the 5-name cap).

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BW | 8.88 | -7.69% | 82,088 | Extending its multi-day fade from the Aug 11 post-earnings AH spike — third straight down session. |

#### Deep dive: BW $8.88 -7.69%
- Catalyst: BW reported Q2 2026 results Aug 11 after the close — revenue
  $319.7m vs $138.9m a year ago, EPS $0.07 vs a prior-year loss, net
  income $10.5m from ongoing operations — and shares spiked as much as
  42% after hours. Aug 12 already pulled back 7.04% intraday to $8.715;
  today extends the fade further to $8.88. No fresh same-day headline
  found beyond the ongoing unwind of the earnings pop.
- Why: Classic multi-day post-earnings-pop fade — momentum/AH buyers
  from the Aug 11 spike are still unwinding, compounded by a standing
  credibility overhang (a March 2026 Wolfpack Research short report
  challenged the legitimacy of BW's $2.4B flagship contract counterparty
  — old news, not today's trigger, but a live discount on the name).
- Impact: Reads as continued mean-reversion, not a fresh one-day shock —
  this is now day 3 of the round-trip (Aug 11 AH +42%, Aug 12 -7.04%,
  Aug 13 further down). No peer/sector read-through identified.
- Horizon: SHORT_TERM, earnings-pop-then-fade pattern spanning three
  sessions now, no structural catalyst beyond the one print.
- Opportunity cost: 0/6 open positions, 0/3 weekly trades used — nothing
  to displace. Gap DOWN and a low-quality setup on its third down session
  either way (strategy is long-only, no shorts) — not a candidate under
  the Confluence rule as-is.

## RECOVERED from claude/clever-goodall-xss13x (e9edf15c, 2026-08-17 11:08Z, "pre-market research 2026-08-17")

## 2026-08-17 — Pre-Market Research (Day 28, Monday)

**Account snapshot (live via `alpaca.sh`):** Equity $100,000.00 | Cash
$100,000.00 (100%) | Buying power $400,000 | Positions: 0 | Open orders: 0.
Equity still flat at $100,000 vs. the $10,000 baseline in CLAUDE.md —
mismatch flagged Jul 27, unresolved 33rd straight session, operator review
pending.

**Market context (Apify RAG web browser; TradingEconomics + Cboe + CNBC +
TradingView + Kiplinger + Schwab):**
- **Quiet week overall, per The Patel Investor's weekly plan** — no single
  dominant catalyst today. Market stepping away from tech earnings into big
  retail earnings this week (Home Depot, Target, Lowe's, TJX, Walmart —
  spread across the week, not confirmed today specifically). Fed (July FOMC)
  meeting minutes drop Wednesday 8/19 — the week's headline macro event per
  Kiplinger's economic calendar, alongside a run of housing-market data.
  Oil and long-end yields flagged by multiple sources as the two biggest
  standing macro risks until the Iran conflict fully resolves.
- **VIX 14.91 (+4.63%, +0.66), prev close 14.25** (Cboe, as of ~11:02 ET).
  Still deep in the lower half of its 52-week range (13.38 low / 35.30
  high) despite today's bounce — complacent-tape backdrop persists even
  with the uptick.
- **Oil — elevated, Iran/Strait of Hormuz-driven.** Brent $89.26 (+0.83%,
  TradingEconomics) — "rose above $89.0 on Monday, as investors assessed
  the uncertain outlook for the US-Iran conflict." Renewed fighting in
  Lebanon and attacks on vessels in the Strait of Hormuz cited as ongoing
  risk; Hormuz shipping traffic collapsed to 5 commodity vessels Saturday
  and 0 Sunday vs. 31 the prior weekend. No major supply outage confirmed
  yet, which is capping further upside. WTI $82.85 (+0.54%). Both up
  materially on a 12-month view (Brent +34%, WTI +32%).
- **S&P 500 futures:** search results this run failed to resolve to a clean
  premarket futures read (query kept mis-parsing on the "S&P" string) — a
  data gap, noted rather than guessed. No confirmed pre-open index-level
  number to report.
- **Sector momentum (Schwab Sector Views, monthly, as of 7/31 — same
  snapshot as last cited, no fresher edition found):** More Favored —
  Financials, Health Care, Industrials, Materials. Neutral — Communication
  Services, Consumer Staples, Energy, Information Technology. Less
  Favored — Utilities. Least Favored — Consumer Discretionary, Real
  Estate. Trailing-6mo: Energy +21.3% (top, oil/Iran-driven, but Schwab
  flags valuation/earnings-expectation risk if the conflict resolves),
  Information Technology +14.7%, Real Estate +14.3%, Industrials +11.3%,
  vs. Consumer Discretionary -10.4% (worst) and Communication Services
  -6.5% (weak retail-adjacent backdrop worth watching into this week's
  retail earnings).
- **Earnings today (Mon BMO):** H World Group ($HTHT), BitFuFu ($FUFU),
  InspireMD ($NSPR) — small-caps, none on the watchlist, none material.
  Bigger retail names (HD/TGT/LOW/TJX/WMT) report later this week, not
  confirmed as today's prints.
- **Econ calendar:** No CPI/PPI/jobs print today; housing data spread
  through the week, July FOMC minutes Wednesday 8/19 is the standout.
- Held tickers: none (0 open positions) — no held-ticker news to check.

**Trade ideas (all HOLD/watch-only — no entry):**
1. **Energy — pass, not chase.** Best trailing-6mo sector (+21.3%) on
   Iran/oil strength, but the catalyst is macro/geopolitical, not
   idiosyncratic to any single watchlist name, and Schwab itself flags the
   sector's valuation as vulnerable to a conflict de-escalation surprise.
   No confluence check run on a specific ticker this session.
2. **Financials / Health Care / Industrials (Schwab "More Favored") —
   watch only.** Fits the broader favorability read, but no company-specific
   catalyst or technical confluence (RSI/VWAP/200-SMA/insider) was checked
   this run. Flag for a future session with a real trigger.
3. **Retail earnings week — wait for prints.** HD/TGT/LOW/TJX/WMT results
   this week are the cleanest read on consumer health given Consumer
   Discretionary's -10.4% 6mo underperformance; no actionable entry until
   an actual print + reaction is in hand.

**Risk factors:**
- Iran/Strait of Hormuz conflict unresolved — Hormuz shipping traffic
  collapsed over the weekend (0 vessels Sunday vs. 31 the prior weekend);
  a real escalation or de-escalation headline could move oil and Energy
  sharply either way, intraday.
- July FOMC minutes Wednesday could reprice rate-cut/hike odds under new
  Fed chair Kevin Warsh — a background risk into a "quiet" week.
- VIX still near its 52-week low despite today's bounce — thin cushion for
  a negative surprise.
- Consumer Discretionary is the worst-performing sector 6mo YTD (-10.4%)
  heading into a week of major retail earnings — binary-event risk for
  that group.
- Data gap: S&P 500 futures read failed to resolve cleanly this run
  (search mis-parse); no confirmed premarket index-level number.
- Persistent $100k live equity vs. $10k CLAUDE.md baseline mismatch —
  unresolved 33 sessions running, operator review still pending.

**Decision: HOLD.** No idiosyncratic single-name catalyst identified; the
week's real events (Fed minutes, retail earnings) haven't happened yet, oil/
Iran risk is a macro overhang rather than an entry signal, and low VIX
argues for discipline over chasing sector-level momentum. 28 trading days
since launch (Jul 9) with zero entries. Weekly trade count: 0/3 (week of
Aug 17).

## RECOVERED from claude/eager-wozniak-2bxlhm (a7d4bc0e, 2026-08-17 13:25Z, "gappers scan 2026-08-17 09:24 ET")
### Gappers (auto-scan 09:24 ET, cloud)

Watchlist scan via `scripts/gappers-alpaca.sh watchlist`, `GAP_THRESHOLD=5.0`,
7 minutes before the open — quotes fresher than the 08:36 ET pass. One
symbol cleared the gap filter, AGMH at +8.87% (0.9106 -> 0.9913, vol 540),
but fails the routine's price >= $3.00 floor, so it's excluded. **0
qualifying hits.** No catalyst research or deep-dive run. No Telegram sent
per routine rule (hits = 0, no scan error).

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| — | — | — | — | — | No symbols cleared gap + price + volume filters |

0 errors. Full deep-dive skipped (no candidates).


## RECOVERED from claude/eager-wozniak-ywpgph (eb6bdd0a, 2026-08-17 14:22Z, "gappers scan 2026-08-17 10:17 ET")
### Gappers (auto-scan 10:17 ET, cloud)

Watchlist scan via `scripts/gappers-alpaca.sh watchlist`, `GAP_THRESHOLD=5.0`.
**3 hits ≥5.0% gap** (up from 0 at the 08:36 ET run — moves developed after
the open). All 3 fall within the top-5 deep-dive cap, so every row below got
the full deep-dive treatment (no quick-scan-only rows today).

**Data quality flag:** none of the 3 catalyst searches turned up a same-day
(Aug 17) news item. APT and LPG results were entirely stale (May-Aug 2026
technical-level commentary, much of it from non-primary content-farm domains)
with thin session volume (985 and 5,138 shares respectively) — both moves
read as likely thin-print/stale-quote artifacts rather than real repricings.
BW's most relevant hit was a real, named catalyst ($2.4B AI-power-deal notice
to proceed) but dated Mar 4, 2026 (~5.5 months stale), with the highest
volume of the three (45,776) — the most plausible of the three but still
unconfirmed for today specifically. No trade recommended on any of the 3;
Entry Checklist's "specific catalyst" box is unmet for all three as of this
scan.

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | APT | $5.93 | +8.42% | 985 | No confirmed same-day catalyst (stale technical-level commentary only) |
| 2 | LPG | $52.09 | +6.83% | 5,138 | No confirmed same-day catalyst (stale May dividend/earnings news only) |
| 3 | BW | $10.93 | +6.22% | 45,776 | No same-day catalyst; stale Mar 2026 $2.4B AI-power-deal notice-to-proceed |

#### Deep dive: APT $5.93 +8.42%
- Catalyst: RAG search surfaced only generic technical-level commentary from
  non-primary aggregator/content-farm domains, dated May-Aug 2026, none
  matching today. No earnings, M&A, guidance, filing, or contract news found.
- Why: No identifiable news mechanism. Session volume of 985 shares is far
  below normal liquidity — a handful of prints could swing the last-trade
  price without reflecting genuine buying pressure.
- Impact: Not sustainable-looking — no volume confirmation, no catalyst.
  Reads as a data/liquidity artifact, high odds of reverting once more
  volume prints.
- Horizon: SHORT_TERM, no structural catalyst identified — if the move is
  real at all, treat as noise, not a multi-day thesis.
- Opportunity cost: Fails the Entry Checklist's catalyst box and no
  Confluence check was run. Displaces nothing against the empty 0/6 position
  book, but no stop distance can be justified for a 2:1 R:R plan without a
  real catalyst — not investable as-is.

#### Deep dive: LPG $52.09 +6.83%
- Catalyst: All results stale — a May 2026 dividend/analyst-upgrade
  writeup, a separate May 2026 sector-headwind decline piece, and a generic
  overview page. No same-day article surfaced. LPG shipping is rate-
  sensitive (VLGC freight); no confirmation of a fresh freight-rate headline
  today.
- Why: No same-day mechanism found. A sector-wide LPG/VLGC freight-rate move
  is plausible but nothing in the research surfaced a dated trigger for
  today specifically.
- Impact: Volume (5,138) is thin relative to this name's normal turnover —
  same stale-quote-artifact concern as APT. Cannot confirm sustainability
  without a real, dated catalyst.
- Horizon: SHORT_TERM, no durable thesis identified from available research
  — do not carry.
- Opportunity cost: Fails Entry Checklist (no catalyst, no confluence check
  run). Displaces nothing against the empty position book; not investable
  as-is pending same-day catalyst confirmation.

#### Deep dive: BW $10.93 +6.22%
- Catalyst: Most relevant hit is a March 4, 2026 article on BW receiving a
  "full notice to proceed" on a $2.4B AI-power-related project — real,
  named, but ~5.5 months stale. Fundamentals show declining revenue (-29%
  YoY most recent quarter) alongside a simplywall.st call that shares are
  ~23% undervalued vs analyst targets — a mixed signal.
- Why: If today's move continues the AI-power-buildout thesis (BW does
  energy/environmental tech relevant to data-center power demand), it could
  be sector read-through from AI-power headlines elsewhere rather than fresh
  company-specific news. Not confirmed from available research.
- Impact: Volume (45,776) is the highest of the three and the most
  believable move, but still unconfirmed against BW's normal daily volume
  and no same-day headline explains the specific timing — may be residual
  momentum on the AI-power theme rather than new information.
- Horizon: SHORT_TERM pending confirmation — a LONG_TERM read is possible
  only if the AI-power-buildout thesis is verified as still-active (would
  align with an Industrials/Utilities-adjacent sector-rotation read), but
  nothing here confirms that as of today.
- Opportunity cost: Best of the three today (real named catalyst on record,
  highest volume) but still fails the Confluence rule as-run (no VWAP/RSI/
  200-SMA/insider check performed) and the catalyst box is only
  conditionally checked (stale, not same-day). Displaces nothing against the
  empty position book, but per the max-3-new-trades/week cap this is the one
  that would consume a weekly slot ahead of APT/LPG if the operator chooses
  to act — contingent on same-day confirmation and a 2:1 R:R stop plan not
  built here.

3 catalyst fetches + 3 fundamentals fetches, 0 errors (Apify RAG web browser
succeeded on all 6 queries; content quality was the issue, not fetch
failures).


## RECOVERED from claude/eager-wozniak-kvb6tn (5cf68b9c, 2026-08-18 14:24Z, "gappers scan 2026-08-18 10:16 ET")

### Gappers (auto-scan 10:16 ET, cloud)

Watchlist scan via `scripts/gappers-alpaca.sh watchlist`, `GAP_THRESHOLD=5.0`,
full watchlist (~60 tickers synced with `config/rules.json`
watchlist_tiers.immediate). **2 hits >=5.0% gap** after filtering for
price >= $3.00 (both symbols cleared; `premarket_volume` field not
populated by the wrapper — filter skipped per routine rule, "volume" values
below are prior-completed-session volume, not live premarket volume). Both
of the 2 hits received the deep-dive treatment (cap of 5 stated, not
needed today).

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BWLP | $24.62 | +7.89% | 1,918 | No dated-today headline found; nearest news is Aug 14 Q2-earnings-date notice (Aug 28 release) |
| 2 | UMAC | $33.18 | +6.30% | 64,472 | At Needham drone/robotics investor conference today (Aug 17-18); riding Aug 6 Q2 revenue +687% YoY print + Aug 13 $30M Powerus investment |

#### Deep dive: BWLP $24.62 +7.89%
- Catalyst: No same-day (Aug 18) news identified for BW LPG (NYSE: BWLP)
  across StockTitan/Morningstar/ChartMill/MarketChameleon. Most recent
  dated item is Aug 14's notice that Q2 2026 results release Aug 28
  (itself only a +1.62% mover); vessel-sale and dividend news is from
  June/July and already priced in.
- Why: No identified mechanism — no earnings, M&A, guidance, or insider
  filing dated today. Reported volume is only 1,918 shares (prior
  session), thin enough that a few prints could move the last trade
  without reflecting real demand.
- Impact: Does not look sustainable — no volume confirmation, no dated
  catalyst, no LPG-shipping peer read-through (Avance Gas, Dorian LPG not
  flagged). Reads as thin-print noise, high mean-reversion odds.
- Horizon: SHORT_TERM, no structural catalyst identified; earnings not
  until Aug 28, nothing to hold toward.
- Opportunity cost: 0 open positions, 0/3 weekly trades used, so nothing
  to displace — but BWLP fails the Confluence rule outright (no
  documented catalyst), so it can't clear the Entry Checklist regardless
  of size; a sub-8% gap with a 7-10% stop also would not clear 2:1 R:R at
  a sane stop distance.

#### Deep dive: UMAC $33.18 +6.30%
- Catalyst: No single same-day press release, but a stack of dated
  developments: Aug 6 Q2 2026 shareholder letter (revenue ~$16.7M, +687%
  YoY, +106% QoQ, 34.7% gross margin, $229.6M cash); Aug 13 news of a $30M
  strategic investment into Powerus (counter-UAS maker) plus a >$5M
  Powerus purchase order to UMAC; company is presenting at the Needham
  Virtual Industrial Tech, Robotics & Power conference through today
  (Aug 17-18).
- Why: Sector momentum (US drone/defense-tech names on DoD Drone
  Dominance Program tailwinds, per the Aug 14 RCAT/ONDS/AMPX entry above)
  plus investor-conference visibility and hard fundamental proof points
  (687% revenue growth, Powerus tie-up) pulling in momentum buyers.
- Impact: 64,472 prior-session volume is reasonable liquidity for a
  ~$1.5B market cap name. Stock is near its 52-week high ($34.93 vs
  current $33.18, 52-wk range $7.25-$34.93) and up ~245% over the
  trailing year — reads as continuation of an established uptrend, not a
  one-day spike. Consistent with the broader drone/defense group (RCAT,
  ONDS, AMPX) moving together repeatedly this month.
- Horizon: LONG_TERM — catalyst stack (687% revenue growth, DoD Drone
  Dominance Program tailwind, Powerus investment, Russell 2000 inclusion)
  is structural and aligns with Technology/Industrials being favored in
  an early/mid-cycle sector-rotation phase per TRADING-STRATEGY.md; a
  plausible swing candidate if it later clears Confluence.
- Opportunity cost: 0 open positions, 0/3 weekly trades used — nothing to
  displace. UMAC is the stronger of today's two candidates (BWLP fails
  Confluence outright). At ~$33 with a 10% trailing stop (~$29.70, ~$3.30
  risk), a 2:1 R:R target (~$36.30) sits just under the 52-week high as
  resistance — workable on paper but still needs an actual
  VWAP/RSI/200-SMA/insider-signal check via `/trade` before any order.
  Research only, not a trade recommendation.

0 errors.

## RECOVERED from claude/eager-wozniak-omx0c0 (4e844df1, 2026-08-19 14:23Z, "gappers scan 2026-08-19 10:22 ET: 4 hits (KLIC, LAKE, ZIM, BW)")

### Gappers (auto-scan 10:22 ET, cloud)
Full watchlist (~60 tickers) rescanned via `scripts/gappers-alpaca.sh watchlist`
(GAP_THRESHOLD=5.0, price>=$3). 4 symbols cleared the 5% gap threshold — a
big shift from the two zero/one-hit scans earlier today. Deep-dive cap: 5
(all 4 got the deep dive; none dropped to quick-scan-only).

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | KLIC | $92.45 | +7.86% | 5,457 | Continued rally off Q3 FY2026 earnings (rev $330.4M vs $148.4M YoY) and return to profitability |
| 2 | LAKE | $12.97 | +7.77% | 632 | No same-day catalyst confirmed; next earnings call not until Sept 9 |
| 3 | ZIM | $29.02 | +7.32% | 58,121 | Q2 2026 earnings released today; reversed from -5.6% (09:20 ET scan) to +7.3% intraday on the Hapag-Lloyd arb spread |
| 4 | BW | $9.25 | +7.00% | 14,998 | No same-day catalyst confirmed; nearest real news is Aug 14 senior-notes redemption |

Note: "Vol" above is last-completed-session full-day volume (Alpaca snapshot
has no distinct premarket-volume field, per `scripts/gappers-alpaca.sh`'s own
comment) — not intraday premarket volume. No filter applied on it.

#### Deep dive: KLIC $92.45 +7.86%
- Catalyst: Continued follow-through off KLIC's Q3 FY2026 print (reported
  within the last ~1-2 weeks): net revenue $330.4M vs $148.4M YoY and
  $242.6M in Q2 FY2026, a swing back to GAAP profitability. No news item
  dated today was found — today's gap looks like momentum continuation,
  not a fresh headline.
- Why: Semis-equipment names are repricing on AI/advanced-packaging capex
  tailwinds; the sharp revenue reacceleration plus a profitability
  inflection is pulling in momentum buyers re-rating off a low base.
- Impact: Volume data (5,457, last-session full-day figure, not true
  premarket) is too thin a base to judge conviction. Sector read-through
  worth checking against other watchlist semis/AI-infra names (AMKR,
  SYNA, STM, CRWV, NBIS) before treating as KLIC-idiosyncratic — not
  checked this run.
- Horizon: LONG_TERM — earnings-driven profitability inflection is a
  structural catalyst, not a one-day headline; worth a swing look if it
  clears confluence on a later /trade check.
- Opportunity cost: Zero open positions, displaces nothing. Strongest
  fundamental story of today's 4 gappers — highest-priority candidate for
  a confluence check against the week's 0/3 new-trade cap. Stop
  distance/R:R not evaluated; research only.

#### Deep dive: LAKE $12.97 +7.77%
- Catalyst: No same-day catalyst found. Research surfaced only stale
  support/resistance commentary (early-to-mid July) and confirmation that
  the next earnings call is Sept 9 — three weeks out.
- Why: Cannot confirm a news-driven mechanism. Likeliest explanation is
  thin-float technical volatility — volume (632, last-session full-day
  figure) is the thinnest of today's 4 names, so a small order can move
  the print disproportionately.
- Impact: Reads as a one-day (or intraday) headline-free spike, a strong
  mean-revert candidate rather than a durable move. No sector-wide
  read-through found.
- Horizon: SHORT_TERM — no durable thesis identified; should not be
  carried past the session absent a same-day news item surfacing later.
- Opportunity cost: Zero open positions, displaces nothing. Weakest of
  the 4 — no documented catalyst means it cannot clear the strategy's
  catalyst-plus-confluence bar as-is.

#### Deep dive: ZIM $29.02 +7.32%
- Catalyst: Q2 2026 earnings released this morning as scheduled. Per this
  morning's 09:20 ET scan (already logged today), ZIM was DOWN -5.63% as
  the merger-arb spread on the pending $35.00/share all-cash Hapag-Lloyd
  buyout widened despite an EBITDA/revenue beat. By this 10:22 ET scan
  ZIM has reversed to +7.32% vs yesterday's close — a large same-day
  round-trip, not a second fresh catalyst.
- Why: Same mechanism as this morning — ZIM trades on deal-completion
  probability/timing, not fundamentals, while the merger is pending. The
  intraday reversal suggests the market re-priced the arb spread twice in
  one session (likely profit-taking on the morning overreaction plus
  dip-buying into the fixed $35 cash floor) — inference, not confirmed by
  a second news item.
- Impact: Volume (58,121, last-session full-day figure) is the highest of
  today's 4 names but still not a true premarket figure. A same-day
  double-digit-point swing argues for elevated event-day volatility, not
  a clean momentum signal; the $35 cash floor caps upside to ~20% from
  here regardless of direction.
- Horizon: SHORT_TERM — unchanged from this morning's read: deal-timing
  risk, not a momentum/sector-rotation thesis. No clean technical stop
  exists since the thesis is deal completion, not chart structure.
- Opportunity cost: Zero open positions, displaces nothing. Already
  logged once today as research-only/no-size-recommended at 09:20 ET on
  the same reasoning — this scan doesn't change that call.

#### Deep dive: BW $9.25 +7.00%
- Catalyst: No same-day catalyst confirmed. Research repeatedly surfaced
  the unrelated UK company Babcock International Group plc instead of
  NYSE:BW (Babcock & Wilcox Enterprises) — a name-collision risk worth
  flagging. The only relevant dated news found was the Aug 14 redemption
  of $61.4M in 6.50% Senior Notes and an Aug 11-dated note on a Q1
  earnings/bookings beat — neither dated today.
- Why: Cannot confirm a same-day mechanism. If the move continues last
  week's deleveraging/earnings-beat story, it would read as reduced
  balance-sheet risk plus operational momentum pulling in buyers.
- Impact: Volume (14,998, last-session full-day figure) is moderate.
  Data-quality flag: BW is not explicitly listed in memory/WATCHLIST.md —
  it was almost certainly picked up by `scripts/gappers-alpaca.sh`'s
  prose-parsing regex from the "(BW LPG)" parenthetical annotating BWLP
  on the watchlist's shipping-sector line, not intentionally added. BW is
  a real, valid NYSE ticker so the data itself is legitimate, but its
  inclusion in the scan universe looks accidental and should be reviewed
  (add explicitly to the watchlist or exclude from parsing).
- Horizon: SHORT_TERM — no fresh structural catalyst confirmed today.
- Opportunity cost: Zero open positions, displaces nothing. Given the
  unconfirmed catalyst and the watchlist-inclusion data-quality flag,
  this is not actionable research as-is — would need same-day news
  confirmation before it's even eligible for a /trade check.

## RECOVERED from claude/eager-wozniak-v0y53y (2cadf49e, 2026-08-20 13:19Z, "gappers scan 2026-08-20 09:17 ET: 0 hits, no trades")

### Gappers (auto-scan 09:17 ET, cloud, second run)
Full watchlist (~60 tickers) rescanned via `scripts/gappers-alpaca.sh
watchlist` (GAP_THRESHOLD=5.0, price>=$3). Zero symbols cleared the 5% gap
threshold as of 09:17 ET, unchanged from the 08:17 run. Largest movers
below threshold: RDW -2.10%, RKLB -1.87%, ONDS -1.68%, OPEN -1.67%, AMPX
-0.47% (informational only, all under the 5% cap). No quick-scan table, no
deep-dive, no Telegram alert per routine rule (hits=0, no error).

## RECOVERED from claude/eager-wozniak-4dnsfq (afce73f4, 2026-08-21 15:18Z, "gappers scan 2026-08-21 11:15 ET: 4 raw hits, all invalidated (scri...")

### Gappers (auto-scan 11:15 ET, cloud) — DATA BUG recurs, false positives

Raw scan flagged 4 "hits" at the 5.0% threshold:

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | TRMD | $29.84 | -7.44% | 3,803 | INVALIDATED — see below |
| 2 | LPG | $47.86 | -7.23% | 6,034 | INVALIDATED — see below |
| 3 | BWLP | $26.51 | +7.15% | 9,189 | INVALIDATED — see below |
| 4 | UMAC | $25.58 | -6.88% | 29,236 | INVALIDATED — see below |

**All 4 are false positives — same script bug flagged at 10:16 ET today,
now with new tickers.** This run fired at 11:15 ET, 1h45m post-open, well
past the window where `scripts/gappers-alpaca.sh`'s `dailyBar`-as-baseline
logic is valid.

Cross-checked all 4 against actual 5-min trade bars (`scripts/alpaca.sh
bars SYM 5Min ...`), not just quotes:
- TRMD: traded $31.88-$32.47 the entire session, last print ~$32.24. Not
  $29.84 — that "current" came from a one-sided/stale quote (bid $27.35,
  ask $32.33 — a $5 spread on a $30 name).
- LPG: traded $51.58-$51.97 all session, last print ~$51.63. Not $47.86.
- BWLP: traded $24.56-$24.82 all session — essentially flat. Not $26.51.
  This is the same ticker invalidated at 10:16 ET, now showing the
  opposite-signed fake move.
- UMAC: traded $26.30-$27.95 all session, last print ~$27.49. Not $25.58.

None of the scan's "current" prices match any real trade today. Verified
gap count for this run: **0**. No deep-dive research performed. Raw
(invalidated) scan output saved to
`data/premarket_gappers_2026-08-21_1115ET.json` for the record.

**Flag for operator — confirmed recurring, not a one-off:** this is the
2nd false-positive event from `scripts/gappers-alpaca.sh` today (10:16 ET
and 11:15 ET), both post-open, both on thin-volume names (BWLP/LPG repeat
across both runs; TRMD/UMAC newly this run). The stale-`dailyBar` baseline
issue previously flagged is confirmed still unpatched. Recommend disabling
or gating this routine's post-open trigger window until the script is
fixed (prefer `prevDailyBar` once `now > 9:30 ET`, or validate `dailyBar`'s
own timestamp against today's session start) — as-is it will keep
generating fabricated gap signals on illiquid names whenever it fires
after the open.

## RECOVERED from claude/eager-wozniak-6nh2kz (4c07e02d, 2026-08-24 12:24Z, "gappers scan 2026-08-24 08:23 ET: 0 hits, no trades")

### Gappers (auto-scan 08:23 ET, cloud)
`GAP_THRESHOLD=5.0 scripts/gappers-alpaca.sh watchlist` scanned all 69
watchlist tickers — **0 hits**. Sanity-checked with `GAP_THRESHOLD=0.0`:
only 5 of 69 symbols even had a fresh today-timestamped premarket
quote/trade this early (08:23 ET) — NBIS -3.4%, ONDS -1.9%, NIO -1.4%,
RCAT -0.9%, OPEN -0.9% — none cleared the 5% gap bar, so no false-negative
from stale data. No catalyst research run (nothing to research), no
Telegram alert sent per routine gating (hits=0, no error). Saved
`data/premarket_gappers_2026-08-24.json` with an empty `gappers` array for
the record.

## RECOVERED from claude/eager-wozniak-jr66zm (b3912ef1, 2026-08-24 15:19Z, "gappers scan 2026-08-24 11:15 ET (cloud, 1 hit: APT +7.95%, no cata...")

### Gappers (auto-scan 11:15 ET, cloud)
Watchlist scan (~60 tickers, GAP_THRESHOLD=5.0) returned 1 raw candidate. 1
hit cleared the filter (price/gap floors), under the 10-cap, and got the
full deep-dive (5-cap not binding). Same ticker (APT) as the 09:20 ET scan
— gap widened from 5.46% to 7.95% on unchanged premarket volume.

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | APT | $5.635 | +7.95% | 749 | No same-day catalyst found — repeat scan, no fresh news since 09:20 ET |

#### Deep dive: APT $5.635 +7.95%
- Catalyst: No confirmed same-day catalyst. Two Apify RAG queries ("APT
  stock news today catalyst", "Alpha Pro Tech APT NYSE stock business
  fundamentals recent developments") returned an Aptos (crypto, ticker
  collision) result cluster, a SimplyWall.st snippet quoting a stale
  $16.47 price from an unrelated prior period (doesn't match today's
  $5.635 print), and generic Nasdaq/CNN quote pages with no dated news.
  Benzinga fallback 403'd again.
- Why: Unconfirmed — no mechanism identified connecting any located
  research to today's move.
- Impact: Premarket volume is unchanged at 749 shares since the 09:20 ET
  scan even as the gap widened from 5.46% to 7.95% — volume not
  confirming the move, consistent with a thin-liquidity quote artifact
  (wide spread ticking against a small share count) rather than a real
  breakout. No sector read-through identified.
- Horizon: SHORT_TERM — no catalyst, volume not confirming; nothing to
  hold past confirmation.
- Opportunity cost: 0 open positions and 0/3 weekly trades used, so this
  displaces nothing. Not actionable regardless: no documented catalyst to
  clear the Confluence rule, and a stop wide enough to survive the spread
  on ~749-share premarket volume would blow past a sane 2:1 R:R. Third
  consecutive no-catalyst read on APT today — flag as noise, not a setup.

## RECOVERED from claude/eager-wozniak-z7o7ol (095c6716, 2026-08-26 15:22Z, "gappers scan 2026-08-26 11:20 ET: add scan data file")

**FIXED this session** (11:20 ET run below) — `scripts/gappers-alpaca.sh`
now detects the dailyBar/prevDailyBar rollover from the bar's own date
field instead of assuming dailyBar is always the prior close. This is the
2nd confirmed recurrence (2026-08-21, 2026-08-26 10:15 ET) of the same
bug; fix applied in commit `6838b32`.

### Gappers (auto-scan 11:20 ET, cloud) — post-fix run

Raw watchlist scan at `GAP_THRESHOLD=5.0` returned 8 rows; after the
`price >= 3.0` and `premarket_volume >= 50000` gates, **2 verified hits**
(both real moves, cross-checked against the fixed baseline — no repeat of
the stale-dailyBar bug):

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | QBTS | $17.83 | -7.93% | 415,171 | CFO resignation (Markovich) atop a multi-week quantum-sector selloff |
| 2 | RR | $1.855 | -6.31% | 108,251 | Pre-earnings de-risking ahead of today's Q2 print, high (26.1%) short interest |

6 rows failed the volume gate (thin/illiquid — BWLP, APT, WLDS, UMAC,
PEPG, LPG, all <20K shares) and were excluded, not deep-dived; kept in
`data/premarket_gappers_2026-08-26_1120ET.json` under
`excluded_by_volume_gate` for the record.

#### Deep dive: QBTS $17.83 -7.93%
- Catalyst: CFO John Markovich resigned (announced Mon Aug 24 evening/Tue
  Aug 25), Greg Golkov named acting CFO — on top of a sector-wide quantum
  selloff running since ~Aug 18 (IONQ/RGTI/QUBT/QBTS moving together),
  tied to rising Treasury yields (~4.7%) pressuring high-multiple growth
  names.
- Why: leadership-transition uncertainty plus rate pressure on an
  unprofitable, >600x-trailing-sales name compounds into a sharper
  single-day drop than peers; stock now near 52-week low, below 200-day
  SMA.
- Impact: reads as continuation/acceleration of an existing multi-week
  downtrend (-21% over 3 months, -54% off 52-week high as of Aug 24), not
  a fresh one-day shock. Fundamentals mixed-to-positive (backlog +8x YoY
  to $40.7M, 2 system deliveries expected Q4) but cash burn heavy (H1 adj.
  EBITDA -$69.9M) — vulnerable to any negative headline. Sector-wide
  read-through confirmed (quantum names moving as a bloc all week).
- Horizon: SHORT_TERM — the specific trigger (CFO resignation headline)
  isn't a structural catalyst; the broader downtrend is rate-driven
  sentiment, not a documented guidance/regime change, so treat as
  headline-adjacent for any trade decision even though the trend predates
  today.
- Opportunity cost: 0 open positions, 0/3 weekly trades used — would not
  displace an existing holding. Strategy is long-biased (200-SMA filter
  requires price > 200-SMA for new longs); this is a downside gap with a
  negative catalyst, so it doesn't fit as a long candidate under current
  rules. Research only, no trade recommendation.

#### Deep dive: RR $1.855 -6.31%
- Catalyst: Richtech Robotics reports Q2 FY2026 earnings today (Wed Aug
  26); analysts model a loss of ~$0.05/share on ~$1.55M revenue. Short
  interest unusually high (26.1% of float, +182% YoY, 8.3 days to cover).
  Follows a rocky stretch: delayed 10-Q, Q1 restatement, Nasdaq
  late-filing notice, ongoing Nasdaq compliance/delisting deadline (Nov
  24, 2026).
- Why: traders de-risking/unwinding call-option positioning ahead of an
  earnings print from a small-cap, high-short, thinly-profitable name;
  live quotes matched the reported move closely as of ~11:16 ET.
- Impact: likely earnings-day volatility, not a durable trend break — RR
  swung +21.6% on a buyback headline two sessions ago. With the print
  still pending, today's move reads as positioning/anticipation and could
  reverse hard once numbers are out. No sector-wide read-through —
  company-specific (earnings timing + high short float + delisting
  overhang).
- Horizon: SHORT_TERM — explicitly event-driven (same-day earnings),
  high odds of a sharp reversal either direction intraday.
- Opportunity cost: 0 open positions, 0/3 weekly trades used — would not
  displace an existing holding or the QBTS candidate above. Both are
  downside gaps and don't fit the strategy's long-bias entry rules; RR
  additionally carries earnings-day binary risk and a delisting overhang,
  making a sane 2:1 R:R stop distance hard to justify same-day. Research
  only, no trade recommendation.

Sources used (all non-Yahoo, per the search-side enforcement rule):
cnn.com/markets/stocks/QBTS, trefis.com, marketbeat.com,
stocktitan.net, moomoo.com. Saved to
`data/premarket_gappers_2026-08-26_1120ET.json`.

## RECOVERED from claude/eager-wozniak-sgim65 (83d205d5, 2026-08-27 12:26Z, "gappers scan 2026-08-27 08:25 ET")

### Gappers (auto-scan 08:25 ET, cloud)

60-ticker watchlist scanned via `scripts/gappers-alpaca.sh watchlist`
(GAP_THRESHOLD=5.0), 0 errors. **0 hits at 5% threshold** — max move seen
was ORCL +1.65% (diagnostic re-run at GAP_THRESHOLD=0.0 to confirm data
was flowing, not silently broken). Only 6 of 60 watchlist symbols carried
a fresh today-session quote/trade this early in premarket (ORCL, ONDS,
RCAT, GOOG, NIO, OPEN) — normal for thin premarket liquidity at 08:25 ET,
not the stale-`dailyBar` bug flagged 2026-08-21/2026-08-26 (that bug fires
post-9:30-open; this run is premarket and `gappers-alpaca.sh` now guards
on `dailyBar` timestamp + requires a same-day quote/trade before computing
a gap). No deep-dive research run — no candidates to research. No
Telegram/ClickUp notification sent (0 hits, no scan error — matches the
routine's quiet rule). Raw output saved to
`data/premarket_gappers_2026-08-27.json`.

## RECOVERED from claude/eager-wozniak-4faccb (c8953c60, 2026-08-27 13:21Z, "gappers scan 2026-08-27 09:17 ET")

### Gappers (auto-scan 09:17 ET, cloud)

Apify RAG web browser returned "Scraped 0 pages" on every query today,
including a bare test query with no site exclusions — confirmed tool-side
outage, not a query-syntax issue. Fell back to native WebSearch for all
catalyst/deep-dive research per the routine's fallback rule; Yahoo domains
blocked via `blocked_domains` on every call, no Yahoo-sourced figures used
below. Benzinga WebFetch fallback also failed (403 on both tickers).

2 of 60 watchlist tickers cleared threshold (gap% >= 5.0, price >= $3).
Deep-dive cap is 5; both hits get the full deep dive below.

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | NBIS | $226.75 | +5.98% | 223,884 | Goldman Sachs raised its price target on Nebius to $328 from $286 (Buy) after Q2 revenue rose 454% YoY and turned adjusted EBITDA positive. |
| 2 | BE | $229.68 | +5.19% | 349,339 | Bloom Energy extends its rally after disclosure that Nancy Pelosi's household bought a multimillion-dollar stake, layered on top of blowout Q2 earnings and raised FY26 guidance. |

#### Deep dive: NBIS $226.75 +5.98%

- Catalyst: Nebius Group (NBIS) gapped up ~6% pre-market after a
  six-session slide, driven by Goldman Sachs raising its price target to
  $328 from $286 (Buy). Q2 revenue hit $582.3M, up 454% YoY, with adjusted
  EBITDA turning positive at $236.2M for the first time. The company also
  priced an upsized $5B convertible note to fund accelerated AI/data-center
  buildout, and shareholders approved all AGM proposals (2025 accounts,
  board reappointments, auditor, governance authorizations) on Aug 25.
- Why: An analyst price-target hike plus a blowout growth print (454% YoY
  revenue, first positive adjusted EBITDA) pulled in momentum buyers after
  a multi-day pullback; the convertible-note financing also removes a
  near-term funding overhang that had been weighing on the stock.
- Impact: Premarket volume (223.9K) clears the 50K screen and the move
  follows a real earnings beat plus analyst upgrade rather than a single
  headline spike, so it reads as more durable than a one-day pop — though
  the prior six-day slide and fresh dilution risk from the convertible
  offering are worth tracking. AI-infrastructure peers have shown similar
  demand-driven strength, suggesting some sector read-through rather than a
  name-specific spike alone.
- Horizon: LONG_TERM — structural growth story (454% YoY revenue, AI-infra
  capacity expansion) plus fresh capital from the convertible raise fits a
  still-intact AI-infrastructure momentum theme, worth a multi-day swing
  look if it clears Confluence on a later `/trade` check.
- Opportunity cost: Only 2 gappers cleared the 5% watchlist screen today
  (NBIS, BE), both AI-infra-adjacent. With 0 open positions, taking NBIS
  wouldn't displace an existing holding, but entering both today would use
  2 of the week's 3 new-trade slots. At a stop below the pre-market low
  (roughly 5-7% below $226.75), the move would need to continue several
  percent further to clear a 2:1 reward:risk minimum — plausible given the
  size of the recent range but unconfirmed without an ATR-based stop run
  (`scripts/size.mjs`). Research only, no trade recommendation.

#### Deep dive: BE $229.68 +5.19%

- Catalyst: Bloom Energy (BE) extended a rally (+5.2% pre-market today)
  after congressional disclosure filings dated Aug 21 revealed Nancy
  Pelosi's household bought 15,000 Class A shares plus 200 call options
  ($100 strike, June 2027 expiry) in late July, worth an estimated
  $4.25M-$14.5M. This built on an already-strong move from Q2 earnings
  (adjusted EPS $0.78 vs $0.41 est., revenue $1.07B vs $827M est.) and a
  raised FY26 guide to $2.55-$2.85 adjusted EPS / $3.9B-$4.2B revenue, plus
  an expanded MiTAC AI-data-center microgrid deal (~250MW contracted
  capacity).
- Why: A high-profile insider-style disclosure (Pelosi stake) acted as a
  retail/momentum sentiment trigger layered on top of a genuine fundamental
  catalyst — an earnings beat with a large guidance raise and expanding
  AI-power-demand contracts.
- Impact: Premarket volume (349K) is solid and the move stacks a real
  guidance raise plus expanding AI-power contracts on top of the disclosure
  headline, so it looks like more than a pure headline spike, though the
  political-disclosure layer specifically could fade once attention moves
  on. There is plausible sector-wide read-through to other AI-power/
  on-site-generation names given the broader AI-power-demand narrative.
- Horizon: LONG_TERM — the guidance raise and expanding AI-data-center
  power contracts are structural, aligning with an AI-infrastructure/power-
  demand rotation theme, worth a multi-day swing look pending Confluence
  check; the Pelosi-disclosure layer itself is a SHORT_TERM sentiment
  kicker on top of that base.
- Opportunity cost: Same 2-gapper day as NBIS — taking BE would use
  another of the week's 3 new-trade slots (2 of 3 if paired with NBIS).
  With 0 open positions and a 6-position/20%-per-position cap, sizing isn't
  constrained by existing holdings today, but stacking two same-week
  entries limits room for later setups. At a stop below the pre-market low
  (roughly 5-7% below $229.68), the setup needs a comparable percentage
  upside to clear a 2:1 reward:risk minimum — check against
  TRADING-STRATEGY.md's Entry Checklist before any `/trade` call.

## RECOVERED from claude/eager-wozniak-vc6ptv (a230c5bb, 2026-08-28 12:24Z, "gappers scan 2026-08-28 data: 0 hits")

### Gappers (auto-scan 08:23 ET, cloud)
No watchlist symbol gapped ≥5.0% pre-market (scanned full memory/WATCHLIST.md
universe via `scripts/gappers-alpaca.sh watchlist`, today's session trade
timestamps confirmed present on spot-checked tickers, e.g. AAPL/TSLA/NVDA all
within ±1% of prior close). 0 hits — no quick-scan table, no deep-dive, no
notification sent (per routine's hits>0-only rule). Saved empty result to
`data/premarket_gappers_2026-08-28.json`.

## RECOVERED from claude/eager-wozniak-bv3fgh (21e2c3b8, 2026-08-28 13:21Z, "gappers scan 2026-08-28 09:19 ET (cloud, 0 hits)")

### Gappers (auto-scan 09:19 ET, cloud)

No gappers cleared threshold — 0 of 69 watchlist tickers had |gap%| >= 5.0
(min price $3, min premarket vol 50k where populated). Largest move was
BWLP at -4.51%, below the cutoff. No quick-scan table, no deep dive.
`data/premarket_gappers_2026-08-28.json` written with empty `gappers: []`
array for the record. No Telegram/ClickUp notification sent (0 hits).

## RECOVERED from claude/eager-wozniak-f7hsqd (b8d53031, 2026-08-31 15:25Z, "gappers scan 2026-08-31 11:17 ET: fix post-open dailyBar bug (4th r...")

### Gappers (auto-scan 11:17 ET, cloud) — BUG FIXED, verified gaps

This run also fired post-open (11:17 ET), the same off-schedule pattern
that produced the 10:18 ET false positives above. Rather than invalidate
a 5th time, fixed the root cause in `scripts/gappers-alpaca.sh`: it now
compares `dailyBar`'s own bar date to today's date and falls back to
`prevDailyBar` as the baseline whenever `dailyBar` is today's in-progress
session, instead of always trusting `dailyBar.c`. Re-ran the scan after
the fix — the corrected baselines exactly match the "true prior close"
values the 10:18 ET run had to hand-verify against `alpaca.sh bars` (ZIM
$27.45, KLIC $81.09, UMAC $23.945, LPG $49.78), confirming the fix.
**Caveat:** it's still 11:17 ET, i.e. not premarket — gap_pct below is
today's move vs. yesterday's actual close as of scan time, not an
overnight premarket gap.

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | DPRO | $5.215 | +16.93% | 49,025 | Drone-sector momentum name; no single dated same-day catalyst confirmed (Aug 10 earnings call, growth-strategy PR in recent flow) |
| 2 | UMAC | $21.795 | -8.98% | 130,482 | No dated catalyst found; history of sharp drops on insider-selling headlines, today's move unconfirmed |
| 3 | ZIM | $25.55 | -6.92% | 37,181 | M&A-arb repricing — Hapag-Lloyd/FIMI $4.2B deal, shares continuing to gap down vs. deal value |
| 4 | KLIC | $85.87 | +5.89% | 16,555 | Post-earnings drift — Q3 non-GAAP EPS beat (+20% surprise), revenue +122.6% YoY, reported ~1 week ago |
| 5 | LPG | $52.535 | +5.53% | 11,047 | No dated catalyst found; mgmt publicly dismissing VLGC freight-rate downturn, thin volume |
| 6 | HXL | $89.945 | -5.31% | 51,998 | Continuation of CFO-transition-driven decline (new CFO effective May 1, 2026) |

AGMH also crossed the 5% threshold (-14.02%) but was filtered out — price
$0.8942 is below the $3.00 floor.

#### Deep dive: DPRO $5.215 +16.93%
- Catalyst: No single dated catalyst confirmed for today. Recent flow: an
  Aug 10 2026 shareholder update/earnings call, ongoing "2026 growth
  strategy" scaling PR, and a May 2026 bear note flagging 49.4% YoY Q1
  revenue growth against a $5.63M net loss and heavy dilution.
- Why: Thin-float, sub-$6 speculative drone name — retail momentum/
  short-covering flow on light volume can produce double-digit swings
  without fresh news.
- Impact: Volume (49K) unremarkable for a >16% move on a microcap — reads
  as thin-liquidity momentum, not confirmed institutional re-rating. No
  sector read-through: UMAC (the other drone gapper today) is down, not up.
- Horizon: SHORT_TERM — no dated structural catalyst found; chronic
  dilution/net-loss profile argues against a durable thesis.
- Opportunity cost: No existing positions (0 open). Would use 1 of 3
  weekly slots against better-documented setups on this same list (KLIC);
  DPRO's own volatility and thin volume make a sane stop clearing 2:1 R:R
  questionable.

#### Deep dive: UMAC $21.795 -8.98%
- Catalyst: No confirmed dated catalyst. Otherwise-constructive recent
  news (Jun 25 domestic-manufacturing expansion tied to the Upgrade
  Energy acquisition, an Aug 7 +7.76% session) sits alongside a documented
  history of sharp single-day drops on insider-selling headlines (Jun 5,
  -17.34%) — today's move could not be tied to a specific event.
- Why: Unconfirmed — reads as a volatility pullback in a high-beta
  small-cap rather than an identified negative catalyst.
- Impact: Volume (130K) is the highest of the six — a real repricing, not
  noise. No positive sector read-through (DPRO, the other drone name on
  today's list, is up not down — not a sector-wide move).
- Horizon: SHORT_TERM — no structural catalyst identified; direction is
  down, so not a long-entry candidate regardless.
- Opportunity cost: Gap is negative — not a candidate for a new long entry
  under current strategy. No existing position to protect (0 open).

#### Deep dive: ZIM $25.55 -6.92%
- Catalyst: M&A-arb repricing. ZIM agreed earlier in 2026 to be acquired
  by Hapag-Lloyd and Israeli PE fund FIMI for $4.2B; shares have been
  trading ~19% below the implied buyout price with headlines framing it
  as "Shares Gap Down - What's Next?"
- Why: Deal-arbitrage spread widening — market pricing in increased
  uncertainty around the deal's timeline/terms, not a new operating
  catalyst.
- Impact: Volume (37K) modest, consistent with an arb-spread grind rather
  than a sharp news reaction. Same ticker appeared in the Aug 27 gappers
  scan with no clean setup found then either.
- Horizon: LONG_TERM in nature (M&A event, structural) but capped-upside/
  defined-risk by design (bounded near deal price) with closing risk —
  doesn't fit a standard trend/momentum entry.
- Opportunity cost: No existing position (0 open). M&A-arb payoff doesn't
  cleanly map to the strategy's 2:1 R:R framework (upside capped near deal
  price); would compete for one of 3 weekly slots against KLIC.

#### Deep dive: KLIC $85.87 +5.89%
- Catalyst: Post-earnings drift. Kulicke & Soffa (semiconductor packaging/
  assembly equipment) beat Q3 non-GAAP EPS ($1.20 vs $1.00 est, +20%
  surprise) on revenue +122.6% YoY, reported roughly a week ago.
- Why: Classic PEAD (post-earnings-announcement drift) — an outsized beat
  plus a semiconductor-equipment/AI-capex tailwind pulling in momentum
  buyers days after the print.
- Impact: Volume (16.5K) light for a >5% move — suggests thin-liquidity
  continuation rather than a fresh institutional re-rating today
  specifically. Sector read-through: broader semi-equipment/AI-capex theme.
- Horizon: LONG_TERM lean — durable EPS growth trend and semiconductor
  upcycle context could support a multi-day/week swing if it clears the
  Confluence rule on a later /trade check; light volume today argues for
  confirmation before sizing.
- Opportunity cost: No existing position (0 open). Best-documented,
  most fundamentally-supported setup of the five — top candidate for one
  of the 3 weekly slots if a later /trade check confirms 2:1 R:R at a
  sane stop.

#### Deep dive: LPG $52.535 +5.53%
- Catalyst: No confirmed dated catalyst for today. Most relevant recent
  items: CEO John Hadjipateras publicly stated Dorian is "not concerned by
  VLGC rate downturn," and the company posted EPS growth of +158% YoY
  (prior quarter +274%) in recent filings. All sourced articles found were
  several months old (Apr 2026, Nov 2025).
- Why: Unconfirmed for today — could be continuation of the freight-rate-
  cycle growth story and management's bullish framing, or unrelated
  thin-liquidity noise.
- Impact: Volume (11K) is the lightest of the six for a >5% move — high
  risk this is thin-liquidity noise rather than a durable re-rating; no
  same-day catalyst located despite two research passes.
- Horizon: SHORT_TERM lean — absent a confirmed dated catalyst and given
  the thin volume, treat as likely to mean-revert until confirmed.
- Opportunity cost: No existing position (0 open). Weakest-documented
  catalyst of the top 5 — would need further confirmation before it could
  outrank KLIC for one of the 3 weekly slots.

**Bug-fix note for operator:** the post-open `dailyBar` baseline bug
flagged 4x above (2026-08-21/24/26/31) is now fixed in
`scripts/gappers-alpaca.sh` — see commit for this run. Recommend also
adding a proper 9:30 ET pre-market/intraday distinction to this routine's
scheduling so "premarket gappers" triggers don't keep firing at 08:2x,
09:xx, 10:xx, and 11:xx ET on the same trading day (5 fires today alone
counting this one); the data bug is fixed but the scheduling drift that
kept triggering it post-open is a separate, still-open issue.

## RECOVERED from claude/clever-goodall-dlz44o (61c0350b, 2026-09-01 11:11Z, "pre-market research 2026-09-01")

## 2026-09-01 — Pre-Market Research (cloud)

**Account:** Equity $100,000.00 | Cash $100,000.00 (100%) | Buying power $400,000 |
0 open positions | 0 open orders | 0 daytrades. Confirmed live via `alpaca.sh
account`/`positions`/`orders`. Still the confirmed-live-vs-$10k-baseline
mismatch flagged 2026-07-27 — unresolved, operator review pending. 39
trading days since launch (Jul 9) with zero entries. Week of Aug 31 still
0/3 trades. **Market is open today** — Labor Day is Sep 7, 2026, not Sep 1
(confirmed via TSX/NYSE/Nasdaq official holiday calendars).

**Market context:**
- **Oil:** Brent $92.10 (+1.78), WTI $87.75 (+2.32), ~6:50-7:00 AM ET
  (Markets Insider/Businessinsider) — a continuation of Aug 31's Iran/
  Hormuz-driven spike (Brent was $91.14 that morning), now roughly
  +1-2% further on top of that move.
- **VIX:** 15.85 (+0.93, +6.23%), 7:03 AM EDT; prev close 14.92, open
  14.95, day high 15.96, day low 14.95 (CNBC) — cross-checked against
  TradingView (15.84, +4.82% trailing 24h). Second consecutive morning
  VIX pop (Aug 31 was 15.20/+5.34%) tracking the oil move; CNBC also
  flagged "risk-reward outlook for stocks is getting worse" (Citadel
  Securities, Aug 31 headline) as the backdrop.
- **S&P/Dow/Nasdaq futures:** Not obtained this run — every Apify RAG
  query for S&P futures resolved to unrelated pages (a Wikipedia "S"
  letter article, a YouTube channel, a Schwab article with no scraped
  body) despite 3 attempts with different phrasing. Flagging as a gap
  rather than guessing; matches the same S&P/Nasdaq-futures misfire
  pattern logged 2026-08-31 (fell back to WebSearch that day — WebSearch
  not invoked this run to conserve budget given oil/VIX/econ-calendar
  data was already sufficient for a HOLD call).
- **Econ calendar (TradingEconomics, Tue Sep 1 - Mon Sep 8 window):**
  No CPI/PPI today — BLS schedule confirms next PPI release is Aug data
  on Sep 10, 2026. Today's US releases: **ISM Manufacturing PMI (Aug)
  55.6 actual vs. 55.2 forecast / 55.0 prior** — a beat, solidly
  expansionary; S&P Global Manufacturing PMI Final (Aug) 53.9 vs. 53.2
  forecast/prior — also a beat; ISM Manufacturing Employment (Aug) 52.8
  vs. 52.5 prior; ISM Manufacturing New Orders (Aug) 56.7; JOLTs Job
  Openings (Jul) 7.359M vs. 7.3M forecast / 7.4M prior — roughly flat.
  Rest of the week: Fed Barr speech, Fed Beige Book, Fed Waller speech,
  Fed Hammack speech, Fed Balance Sheet update (Sep 2), and **Non Farm
  Payrolls (Aug)** due Friday Sep 4 — TradingEconomics lists 58K/42.0K
  as the two comparison figures (order ambiguous in the scrape; Aug 31's
  entry logged consensus ~42K, prior 58K — treat that as the more
  reliable read, cross-check Friday).
- **Sector momentum YTD:** Not researched this run (query list
  prioritized oil/VIX/econ-calendar given the two prior sessions logged
  a persistent leader/laggard sourcing conflict with no reliable
  rotation signal either time — not worth a third query on unreliable
  data).
- No open positions — no held-ticker news check needed.
- **Sourcing note:** Apify RAG web browser used for all queries, with
  `-site:finance.yahoo.com -site:uk.finance.yahoo.com
  -site:sg.finance.yahoo.com` appended to every query per the
  search-side-enforcement rule. Zero Yahoo hits surfaced or used. The
  S&P-futures queries repeatedly matched irrelevant pages (see above) —
  no Yahoo involved, just bad search-result targeting; no fallback to
  WebSearch invoked this run. `tradingview-data` MCP not loaded this
  cloud run — no confluence/technical check possible.

**Risk factors:** VIX popping +6% for a second straight morning while
oil extends its Iran/Hormuz-driven rally is a real, building risk-off
signal — but it's now crosscurrent against a clean ISM Manufacturing PMI
beat (55.6, expansionary) and a JOLTs print roughly in line. No clean
directional read from the data itself. This week is macro-heavy: four
Fed speakers, a Beige Book, and Nonfarm Payrolls Friday — any of which
could move the tape sharply. S&P/Nasdaq futures level unconfirmed this
run (see gap above) — entering blind on index direction is not an
option today regardless.

**Trade ideas:** None identified this run. No single-name research was
performed (this session's queries were macro-only: oil, VIX, econ
calendar) and no `tradingview-data` confluence check was available —
per the strategy's entry checklist, a specific catalyst plus ≥2
confluence indicators is a hard requirement before any idea reaches the
log, and neither was assembled today. Watch-only: manufacturing/
industrials complex (XLI, XLB) on the ISM beat if it's corroborated by
tomorrow's data holding up; energy (XLE, oil majors) on whether the
Iran/Hormuz oil rally extends into a third day or fades.

**Decision: HOLD.** No open positions, no planned trades. First trading
day of a macro-heavy week (Fed speakers, Beige Book, NFP Friday) with
conflicting signals (VIX/oil risk-off pop vs. a strong ISM manufacturing
beat) and no confluence tooling available — a clear day to let data and
Fed commentary accumulate rather than chase either signal. Patience
over activity.

## RECOVERED from claude/eager-wozniak-kx2z8f (83b9238c, 2026-09-01 13:26Z, "gappers scan 2026-09-01 09:25 ET")

### Gappers (auto-scan 09:25 ET, cloud)

Re-scan of the full watchlist (GAP_THRESHOLD=5.0) via
`scripts/gappers-alpaca.sh watchlist`. 2 raw candidates: AGMH (-11.39%,
$0.9215 — excluded, below $3 price floor) and CRWV (-5.22%, $80.45, vol
359,268 — passes). 1 of 2 cleared the filter after price screen. Deep-dive
cap: 5 (only 1 hit, so it gets the full deep dive).

`data/premarket_gappers_2026-09-01_0925ET.json` written with the 1-row
result (second same-day file, per the same-day-rerun naming convention
used 2026-08-31).

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | CRWV | $80.45 | -5.22% | 359,268 | CEO Michael Intrator sold 300k+ shares (~$27.3M); AI-infra names under renewed selling pressure amid Burry-short headlines |

#### Deep dive: CRWV $80.45 -5.22%

- Catalyst: Two insider Form 4 sales hit the tape — CEO Michael Intrator
  sold 300,000+ shares (~$27.3M) and GC Kristen McVeety sold 2,100 shares.
  No new earnings/guidance event today (last report Aug 11 was strong: Q2
  revenue $1.21B, adj. EBITDA margin 62%, $30.1B backlog, $4B OpenAI
  expansion deal on top of the existing $11.9B deal). AI-infrastructure/
  cloud names broadly under pressure amid recirculated Michael
  Burry-shorting-AI-favorites headlines.
- Why: Insider selling from the CEO reads as a negative signal on its own,
  compounding a broader risk-off rotation out of high-multiple AI/cloud
  infra names. No documented positive catalyst behind the move — sentiment/
  overhang-driven, not a fundamental deterioration.
- Impact: Premarket volume (359K) is a small fraction of CRWV's 27.29M
  average daily volume — thin tape, not volume-confirmed. Sector
  read-through is real: CRWV's second sub-6% single-day drop in ~7 weeks
  (also -5.7% on Jul 15), consistent with an ongoing multi-week AI-infra
  derating rather than a one-off spike.
- Horizon: SHORT_TERM — CEO sale + Burry-short headlines are sentiment
  overhangs, not structural change; backlog and OpenAI contracts unchanged.
  Likely fades absent a new fundamental catalyst.
- Opportunity cost: N/A for a long — this is a gap DOWN with no documented
  positive catalyst, failing the strategy's "Bottom-fish" guardrail (no
  long entry without a documented catalyst; drawdown alone is not a
  catalyst) and the Confluence rule. 0/6 open positions, 0/3 trades used
  this week — no displacement question, the setup simply doesn't clear the
  entry bar as a long. Not a short candidate; strategy is long-only stocks.

Notification sent via Telegram (1 hit clears the "hits > 0" gate).

## RECOVERED from claude/eager-wozniak-19qmnl (c9652641, 2026-09-01 14:19Z, "gappers scan 2026-09-01 10:16 ET (cloud, 1 hit: NBIS)")

### Gappers (auto-scan 10:16 ET, cloud)

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | NBIS | 210.14 | +7.02% | 96,708 | Nvidia disclosed a $3.8B stake increase in Nebius (~9.3% stake) on top of Nebius's multi-billion-dollar Microsoft AI-infrastructure deal |

1 of 60 watchlist tickers cleared the 5% gap / $3 price / 50K-volume filter.
Deep-dive cap is 5; only 1 candidate exists so all get the full deep dive
(no ranks 6-10 this scan). Note: the `volume` field from
`scripts/gappers-alpaca.sh` is the current/most-recent daily bar's volume,
not a true premarket-only figure (per the script's own code comment) — flagged
for consistency with prior data-caveat notes in this log.

#### Deep dive: NBIS $210.14 +7.02%
- Catalyst: Nvidia added more than $3.8B to its Nebius position (per a recent
  SEC filing), pushing its stake to ~9.3% and making Nebius ~12% of Nvidia's
  investment portfolio. This follows Nebius's separately announced multi-year,
  multi-billion-dollar deal to deliver dedicated AI capacity to Microsoft from
  its new Vineland, NJ data center. Nebius reported 684% YoY revenue growth in
  Q1 as a fast-scaling neocloud/GPU-infrastructure operator.
- Why: A large strategic investor (Nvidia) increasing its equity stake signals
  conviction in Nebius's GPU-infrastructure buildout and de-risks the neocloud
  thesis for other investors; combined with the confirmed Microsoft capacity
  deal, this reads as fundamental demand validation (not just a rumor),
  pulling in momentum and AI-theme buyers.
- Impact: Volume so far this session (~97K shares by 10:16 ET) reads light
  versus NBIS's typical multi-million-share daily turnover, so today's move
  isn't yet volume-confirmed as a durable breakout — could be early-session
  thinness rather than weak conviction. Sector-wide read-through: positive for
  other neocloud/AI-infrastructure peers and the broader AI capex trade.
- Horizon: LONG_TERM, structural catalyst (strategic stake increase + a
  confirmed hyperscaler capacity contract) that fits ongoing AI-infrastructure
  buildout — worth a multi-day/week swing hold if it later clears the
  Confluence rule on a /trade check, not a fade-by-Friday headline trade.
- Opportunity cost: Zero open positions and 0/3 trades used this week (week of
  Aug 31), so this displaces nothing. Only gapper on today's list (1 of 60
  cleared the filter), so no cross-list ranking tradeoff. Whether it clears
  the 2:1 reward:risk minimum depends on stop placement vs. the post-gap high
  — not assessed here; that belongs to /trade.

## RECOVERED from claude/eager-wozniak-5588yp (bbc88b8d, 2026-09-03 13:18Z, "gappers scan 2026-09-03 09:16 ET: 0 hits")

### Gappers (auto-scan 09:16 ET, cloud)

Watchlist scan (GAP_THRESHOLD=5.0). Premarket data coverage improved vs the
08:19 run — 10 of 64 symbols now carry a today-timestamped quote/trade (OPEN,
BMNR, META, BE, NIO, ORCL, ONDS, GOOG, MSFT, NBIS), up from 3. Largest move
is OPEN at +3.39%, still well under the 5% threshold; no symbol cleared the
filter. 0 of 64 cleared. No quick-scan table, no deep dive.
`data/premarket_gappers_2026-09-03.json` updated with a fresh `scanned_at`,
`gappers: []` still empty (verified via a diagnostic GAP_THRESHOLD=0.0 pass,
not a volume-gate artifact this time).

No Telegram/ClickUp notification sent (0 hits, no scan error — matches the
"only send if hits > 0 OR errored" gate).

## RECOVERED from claude/eager-wozniak-ohuerj (fbea4367, 2026-09-04 13:19Z, "gappers scan 2026-09-04 09:17 ET: add scan data file")

### Gappers (auto-scan 09:17 ET, cloud)

Full-watchlist scan (GAP_THRESHOLD=5.0) via `scripts/gappers-alpaca.sh
watchlist`. Raw scan returned 0 rows at threshold — 0 of ~60 watchlist
symbols cleared the 5% gap filter. Sanity check at GAP_THRESHOLD=0.0
confirms the data pipeline is live and thickening as the open approaches
(12 of ~60 symbols now carry a fresh premarket quote, up from 5 at 08:19
ET): BMNR -4.86%, ORCL +3.21%, NIO -2.21%, BE +1.63%, NBIS +1.59%, MSFT
-0.49%, CRWV +0.49%, LUNR +0.37%, ONDS -0.26%, OPEN +0.16%, GOOG +0.14%,
RGTI +0.10%. BMNR closest to the gate but still under 5% — a real "no
gappers" reading, not a script/data fault. No quick-scan table, no deep
dive (nothing to rank). `data/premarket_gappers_2026-09-04_0917ET.json`
written with `gappers: []` (suffixed — `_2026-09-04.json` already holds
the 08:19 ET run).

No Telegram/ClickUp notification sent (0 hits, no scan error — matches the
"only send if hits > 0 OR errored" gate).

## RECOVERED from claude/eager-wozniak-xkb8u4 (7c06ef87, 2026-09-04 14:15Z, "gappers scan 2026-09-04 10:14 ET: 0 hits")

### Gappers (auto-scan 10:14 ET, cloud)

Full-watchlist scan (GAP_THRESHOLD=5.0) via `scripts/gappers-alpaca.sh
watchlist`. Raw scan returned 0 rows at threshold — 0 of 60 watchlist
symbols cleared the 5% gap filter. Sanity check at GAP_THRESHOLD=0.0
confirms the pipeline is live: all 60 symbols returned fresh quotes, top
mover AMKR at only +3.09% (LMT +3.05%, OKLO +2.66%, GFS +2.4%, MA +1.65%)
— a real "no gappers" reading post-open, not a script/data fault. No
quick-scan table, no deep dive (nothing to rank).
`data/premarket_gappers_2026-09-04.json` written with `gappers: []`.

No Telegram/ClickUp notification sent (0 hits, no scan error — matches the
"only send if hits > 0 OR errored" gate).

## RECOVERED from claude/clever-goodall-w67xdc (4fcd0444, 2026-09-07 11:09Z, "pre-market research 2026-09-07")

## 2026-09-07 — Pre-Market Research (cloud)

**Account:** Equity $100,000.00 | Cash $100,000.00 (100%) | Buying power
$400,000 | 0 open positions | 0 open orders. Confirmed live via
`alpaca.sh account`/`positions`/`orders`. Still the confirmed-live-vs-$10k-
baseline mismatch flagged 2026-07-27 — unresolved, operator review
pending, 54th straight session. 43 trading days since launch (Jul 9) with
zero entries. New week — 0/3 trades (week of Sep 7).

**Market context:**
- **Oil:** WTI $92.16 (+0.68, +0.74%), Brent $97.38 (+1.10, +1.14%), both
  per Markets Insider premarket futures table as of 06:56-07:06 AM ET.
  Both sides up modestly premarket — consistent with the ongoing
  Iran/Middle East conflict thread flagged repeatedly since late Aug.
- **Futures:** Mixed/flat — Dow -0.48% (53,182), S&P 500 -0.12% (7,712.75),
  Nasdaq 100 +0.05% (29,579.50) per Markets Insider (06:56 AM ET);
  Bloomberg's ES1/NQ1/DM1 mini-futures print small gains instead (+0.11%,
  +0.07%, +0.46% respectively) at essentially the same timestamp — sources
  disagree on sign for Dow/S&P, so treat premarket tape as genuinely flat
  rather than directional. Gold $4,392.37 (-0.83%), Silver $65.64 (-0.79%).
- **VIX:** 15.16 (+0.63, +4.34%) at 7:03 AM EDT per CNBC, prev close 14.53
  (Fri Sep 4, Cboe). Day range 14.99-15.16, open 15.02, 52-wk range
  13.38-35.30. Modest premarket uptick, still well inside a calm range —
  no panic signal.
- **Sector momentum (Schwab Sector Views, as of Sep 4):** More Favored —
  Financials, Health Care, Industrials, Materials. Neutral — Communication
  Services, Consumer Staples, Energy, Information Technology. Less
  Favored — Utilities. Least Favored — Consumer Discretionary, Real
  Estate. Trailing 6-month performance: Energy +21.3% (best), Info Tech
  +14.7%, Real Estate +14.3%, Industrials +11.3%, Utilities +8.1%,
  Financials +7.2%, Health Care +5.5%, Consumer Staples +1.8%, Materials
  +1.5%, Communication Services -6.5%, Consumer Discretionary -10.4%
  (worst). S&P 500 index +6.8% (6mo) / +17.4% (12mo). Energy's strength is
  explicitly tied to the Iran conflict — Schwab flags the sector's
  near-term outlook as "heavily dependent on the trajectory of U.S.-Iran
  hostilities" (two-sided risk). September rate-hike odds ~50/50 per
  Bloomberg WIRP as of Sep 3.
- **Earnings today (Mon Sep 7):** No noteworthy announcements (ii.co.uk
  earnings calendar). Tomorrow (Tue Sep 8): GameStop Corp (NYSE:GME) AMC —
  not a current watchlist ticker.
- **Econ calendar today:** Search degraded — TradingEconomics page
  returned only nav/filter chrome, no actual event rows this run. Logged
  as a gap, consistent with recurring econ-calendar sourcing issues in
  prior sessions.
- No open positions — no held-ticker news check needed.
- **Sourcing note:** Yahoo ban held (zero finance.yahoo.com hits across
  all queries). The literal "S&P 500 futures" and "S&P 500 sector
  momentum" queries misfired again (recurring issue — third+ session in a
  row, see Sep 3 log) — garbled hits (Thai/Indian exchange pages,
  Wikipedia's "S" letter article, Pinterest). Rewording without the
  literal "S&P" phrasing ("SPX futures", "stock market sector
  performance") fixed it cleanly both times. "Top stock market catalysts"
  query also degraded (irrelevant Indian-market pages) — logged as a gap
  rather than guessed. `tradingview-data` MCP not loaded this cloud run —
  no confluence/technical check possible.

**Risk factors:** Iran/Middle East conflict remains the dominant driver
behind Energy-sector strength and elevated oil (WTI ~$92, Brent ~$97) —
genuinely two-sided (Schwab's own framing: outlook hinges entirely on the
hostilities trajectory, could reverse sharply on de-escalation). VIX
ticked up modestly premarket (+4.34% to 15.16) but stays well within a
calm historical range — not a stress signal yet. ~50/50 September
rate-decision odds (Bloomberg WIRP) is a live crosscurrent for
Financials/Utilities/Real Estate. No `tradingview-data` MCP this run — no
confluence/technical check possible.

**Trade ideas:** None cleared the documented-catalyst-plus-confluence bar
— no confluence tooling available, and premarket tape itself is flat/
directionless. Watch-only, no entry/stop/target: (1) Energy complex (XLE,
integrated majors) — best 6-month sector performer (+21.3%) with a live
catalyst, but Schwab rates it only Neutral given the outlook is a coin
flip on Iran hostilities; wait for confluence tooling and a
pullback/consolidation entry rather than chasing the oil bid. (2)
Financials (XLF) — Schwab's "More Favored" pick on a steeper yield curve
and improved capital-markets activity; watch for a confluence-confirmed
entry once tooling is available. (3) Consumer Discretionary — worst
6-month performer (-10.4%), Least Favored — reinforces staying away per
the strategy's sector-momentum rule; no action needed, zero exposure
already.

**Decision: HOLD.** No open positions, no planned trades. Flat/mixed
premarket tape, a genuinely two-sided Iran/oil catalyst, no confluence
tooling this run, and 43 trading days of zero entries all argue for
patience over activity.

## RECOVERED from claude/clever-goodall-d95t5v (afa46eb0, 2026-09-08 11:07Z, "pre-market research 2026-09-08")
## 2026-09-08 — Pre-Market Research (cloud)

**Account:** Equity $100,000.00 | Cash $100,000.00 (100%) | Buying power
$400,000 | 0 open positions | 0 open orders. Confirmed live via
`alpaca.sh account`/`positions`/`orders` (`balance_asof: 2026-09-04` —
stale field, last real activity Friday's close; market reopens today after
Monday's Labor Day holiday). Day-trade count not returned by the account
wrapper. Still the confirmed-live-vs-$10k-baseline mismatch flagged
2026-07-27 — unresolved, operator review pending. 43rd trading day since
launch (Jul 9) with zero entries (Sep 7 was a market holiday, not counted).
Week of Sep 7 stands at 0/3 trades.

**Market context:**
- **Oil:** Brent $98.65 (+1.70%), highest since Jul 23, briefly testing
  $99/bbl — Saudi Arabia reported attacks halting operations at several
  energy facilities in the south of the kingdom; Iran-backed Houthi
  militants claimed responsibility for hitting the 400k-bbl/day Jazan
  refinery. WTI $93.93 (+2.68%, "war premium returns," back above $91 per
  Oilprice.com's technical note). Adds to the still-live Iran/Hormuz
  overhang; Chinese crude imports strengthened in August (more Persian
  Gulf purchases).
- **S&P 500 futures:** ES +0.49% premarket (7,714 vs. 7,712.25 open,
  Investing.com/Barchart) — risk-on tape shrugging off the oil spike so
  far.
- **VIX:** 15.79 (+0.49, +3.20%), 07:03 ET premarket print (Moomoo) — still
  a low absolute level, but the intraday pop tracks the oil-driven
  headline risk rather than a broad risk-off move.
- **Today's catalysts:** No CPI/PPI/jobs/FOMC print today. Next major
  release is PPI (Aug) Thu Sep 10, 8:30am ET, then CPI (Aug) Fri Sep 11 —
  both ahead of the Sep 15-16 FOMC. Last Friday's August NFP beat sharply
  (+162k vs. +53k consensus), re-pricing hawkish and pressuring yields —
  still the dominant overhang into this week's inflation prints. Fed Gov.
  Waller has signaled a preference to hold rates steady but said the call
  is data-dependent.
- **Earnings today (Tue Sep 8):** 41 reports total, mostly time-TBD. Before
  open: ABM Industries (ABM), United Natural Foods (UNFI), Canaan (CAN) —
  none on the watchlist. After close: Casey's General Stores (CASY),
  ServiceTitan (TTAN), + others not on the watchlist per the excerpt
  retrieved.
- **Sector momentum YTD:** Industrials (XLI) leading, Communications (XLC)
  and Technology (XLK) close behind/near-surpassing. Energy (XLE) negative
  YTD despite today's oil spike; Healthcare (XLV) and Consumer
  Discretionary (XLY) also lagging. Directionally consistent with the
  cycle-momentum playbook (tech/comms leadership) but not independently
  confirmed against `combined_analysis` — `tradingview-data` MCP not
  loaded this cloud run, no confluence/technical check possible.
- No open positions — no held-ticker news check needed.
- **Sourcing note:** Apify RAG handled oil, VIX, earnings-calendar cleanly.
  "S&P 500 futures premarket" and "top stock market catalysts" both
  misfired again (matched unrelated Vietnamese-language/Wikipedia/Spotify
  pages — same recurring ampersand/short-query mismatch flagged in prior
  entries); "S&P 500 sector momentum YTD" also misfired the same way.
  Fell back to native WebSearch (with the same `-site:finance.yahoo.com`
  exclusion) for all three and recovered clean Investing.com/Barchart,
  TheStreet/CNBC/Schwab, and CSIMarket/Novel Investor/Benzinga hits
  respectively. Zero finance.yahoo.com citations used in this entry —
  Yahoo ban held (search results surfaced yahoo.com links in two of the
  WebSearch result sets; none were cited or used for any figure above).

**Risk factors:** Oil-driven geopolitical headline risk (Saudi refinery
strikes, Houthi/Iran) could still broaden into a risk-off move even though
futures are green pre-open — energy-security shocks have a habit of
reversing risk sentiment fast. CPI (Fri) and PPI (Thu) both land this week
ahead of the Sep 15-16 FOMC, with last Friday's hot NFP already having
re-priced hawkish — elevated event risk into Thursday/Friday argues against
adding exposure early in the week. 31 of today's 41 earnings reports have
no confirmed time — watch for pre/post-market gaps in any name that
overlaps the watchlist. No `tradingview-data` MCP this run — no
confluence/technical check possible, so no name-level idea can clear the
strategy's 2-indicator confluence bar today regardless of catalyst quality.

**Trade ideas:** None cleared the documented-catalyst-plus-confluence bar —
no confluence tooling available this run. Watch-only, no entry/stop/target:
(1) Industrials/Communications/Technology sector momentum leaders (XLI,
XLC, XLK) — YTD leadership intact per today's read; needs confluence
tooling plus a specific single-name pullback setup before any entry. (2)
Energy complex — today's Saudi-refinery-driven price spike is a fresh
catalyst on a YTD-negative sector; worth a dedicated `/research` or
`/sentiment` pass on integrated majors/E&Ps if the spike holds through the
session, but not actionable pre-open without a specific name and stop
level. (3) Broad market — CPI/PPI week ahead is the real test of whether
last week's NFP-driven hawkish repricing holds; staying flat into the data
avoids chasing either direction.

**Decision: HOLD.** No open positions, no planned trades. Oil-driven
headline risk plus a CPI/PPI-heavy week ahead of FOMC argues for staying
flat; no confluence tooling this run to validate any single-name idea.
Patience over activity.


## RECOVERED from claude/eager-wozniak-ydsi6x (a8cc31fc, 2026-09-08 13:27Z, "gappers scan 2026-09-08 09:24 ET (2nd firing, cloud): 6 hits incl n...")

### Gappers (auto-scan 09:24 ET, cloud, 2nd firing)

Cap note: deep-dive cap is top 5 by |gap_pct| (BE, NBIS, CRWV, ORCL, BMNR).
RGTI (rank 6) gets quick-scan catalyst only, no deep-dive fields — capped
per routines/gappers-cloud.md STEP 3, not silently dropped.

| Rank | Sym  | $Price | Gap%   | Vol       | Catalyst |
| ---- | ---- | ------ | ------ | --------- | -------- |
| 1    | BE   | 272.94 | +16.07 | 658,747   | New Seeking Alpha rating-upgrade piece ("AI-Memory-Style Frenzy"), 2nd AI-power catalyst today |
| 2    | NBIS | 231.47 | +9.87  | 541,800   | Palantir/Nebius partnership on AI-model ownership — new dated catalyst not seen in 08:15 scan |
| 3    | CRWV | 91.75  | +8.47  | 524,722   | Sympathy move with Oracle's pre-earnings rally; SA piece questions backlog/bond credit quality |
| 4    | ORCL | 166.68 | +8.2   | 1,002,286 | Pre-earnings analyst target raises (Morgan Stanley, Mizuho) ahead of Thu Sep 10 FQ1 earnings |
| 5    | BMNR | 24.8   | -6.2   | 1,734,327 | Gapping DOWN with crypto-equity basket (MSTR/COIN/CRCL) after BTC rejection at $82K |
| 6    | RGTI | 16.13  | +6.19  | 487,231   | Quantum-sector rally continues — Stocktwits: QBTS/RGTI/QNT rally on $100M US govt stakes |

#### Deep dive: BE $272.94 +16.07%

- Catalyst: New Seeking Alpha rating-upgrade article today ("Bloom Energy
  Could See An AI-Memory-Style Frenzy"), building directly on last week's
  "Bloom Energy Just Won Another Catalyst" double-upgrade piece — part of a
  steady stream of 10+ bullish SA notes over the past month. This is BE's
  SECOND consecutive pre-market gap on the same AI-power-demand thesis
  today (the 08:15 ET scan already flagged +14.14%); the stock has
  extended further from Thu Sep 4's close of $252.87 (+7.35%) to ~$270-273
  pre-market.
- Why: AI data centers face a power-delivery bottleneck (grid interconnect
  queues run 3-5+ years); Bloom's fuel cells deploy in months without grid
  dependency, making it a direct AI-power-shortage beneficiary. A fresh
  bullish note comparing BE to the AI-memory (HBM) re-rating frenzy adds a
  new narrative hook pulling in momentum/theme buyers on top of an already
  extended move.
- Impact: Increasingly extended, multi-session move (not a single-day
  spike) — today builds on this morning's own +14.14% print, both on
  rating-upgrade narrative rather than new fundamental data. More likely a
  genuine multi-day momentum run given persistence across two scans today,
  but more vulnerable to a sharp mean-reversion given an already rich
  valuation (285x+ trailing PE). Sector read-through: still part of the
  same AI-infra/power risk-on cluster as NBIS/CRWV/RGTI.
- Horizon: SHORT_TERM, lean short-term — still no hard fundamental trigger
  (no earnings, no new contract, just another rating-upgrade note), even
  though the underlying AI-power-demand thesis is structurally LONG_TERM.
- Opportunity cost: At ~$273 a 10% trailing stop is ~$27/share; clearing
  2:1 R:R needs a stretch target near $327, tougher now than this
  morning's $268 print. Chasing a name already flagged and extended once
  today conflicts with the no-chase rule (no entry within 3% of a print
  already up >5% on the day). Would eat into the 3-trades/week cap and
  20%-per-position ceiling; RGTI's confirmed, discrete government
  quantum-stake news remains a cleaner setup among today's gappers.

#### Deep dive: NBIS $231.47 +9.87%

- Catalyst: Unlike the 08:15 scan (no dated company-specific driver
  found), this run surfaced a fresh same-day item: Stocktwits reported
  Palantir and Nebius announced a partnership letting companies own (not
  rent) their AI models, published roughly 30-50 min before this scan.
  Layers on Nebius's existing hyperscaler narrative ($17.4B Microsoft
  compute contract, Nvidia's 9.3% stake) and the dilution overhang from
  its mid-August $4.5B convertible-note raise.
- Why: NBIS is one of the highest-beta neocloud plays on AI compute
  demand; a named strategic partner (Palantir) and a differentiated
  "own not rent" AI-model positioning gives it a discrete, company-specific
  news hook today rather than pure sector beta, amplified by its smaller
  float and rich valuation (~122x sales) in a risk-on AI-infra tape.
- Impact: More sustainable read than this morning's assessment given a
  same-day, dated, company-specific announcement rather than unconfirmed
  momentum alone. Still carries dilution overhang from the August
  convertible offering; valuation remains stretched. Sector-wide
  participation continues (ORCL/CRWV/RGTI also gapping) — a real risk-on
  rotation day for the theme, not a single-name flash.
- Horizon: LONG_TERM lean, upgraded from this morning's SHORT_TERM call —
  a named strategic partnership, if it holds up under further reporting,
  is more structural than yesterday's unconfirmed momentum and aligns with
  the early-cycle Technology favor in TRADING-STRATEGY.md's sector-rotation
  table; still needs Confluence-rule confirmation (2+ of VWAP/RSI/200-SMA/
  insider) on a later /trade check before treating as more than a headline
  pop.
- Opportunity cost: Run scripts/corr-gate.mjs before any entry — NBIS is
  highly correlated with CRWV (same theme, same-day movers); Confluence
  rule argues for at most one of the two. At $231 a 10% stop is ~$23/share,
  needing ~$277 to clear 2:1 R:R, plausible only if the Palantir tie-up
  proves durable beyond today's pop. Competes with BE/CRWV/RGTI for the
  6-position cap and 3-trades/week limit.

#### Deep dive: CRWV $91.75 +8.47%

- Catalyst: No CRWV-specific news dated today, but two same-day threads:
  (1) 24/7 Wall St — "Oracle Rallies 5% as Morgan Stanley Lifts Its Price
  Target, CoreWeave Advances 3%," i.e. CRWV moving with ORCL's pre-earnings
  rally and the broader AI tape; (2) a fresh Seeking Alpha piece today,
  "CoreWeave: A Hundred Billion In Backlog And A Bond Market That Doesn't
  Believe It," flagging that CRWV's bond market isn't pricing its
  contracted backlog as safely as the equity narrative implies. Adds to
  last week's on-file context: CEO ($27.3M) and GC insider sales, interest
  expense ~4x operating income.
- Why: Same sector mechanism as this morning — CoreWeave is a pure-play AI
  GPU neocloud, moving with outsized amplitude on AI-infra sentiment.
  Today's driver is more diffuse than a CRWV-only announcement — tracking
  Oracle's earnings-anticipation rally and the broader AI trade rather
  than new CRWV-specific news.
- Impact: Mixed-to-cautious — today's move looks like sector beta (moving
  WITH Oracle, not on its own news) layered on already-known bearish
  undercurrents (insider selling) now reinforced by a same-day
  credit-skepticism piece on the touted $100B backlog. Raises
  mean-reversion risk if ORCL's rally fades post-target-raise-euphoria or
  after Thursday's actual print.
- Horizon: SHORT_TERM, same lean as this morning — no discrete CRWV
  catalyst today, riding sector/Oracle sympathy; the fresh credit
  skepticism is an additional caution flag, not a reason to upgrade
  horizon.
- Opportunity cost: Insider selling plus a new same-day credit-skepticism
  article make CRWV the weakest-conviction name in today's AI-infra
  cluster. Confluence rule argues against taking both NBIS and CRWV given
  high same-sector, same-day correlation — NBIS's fresh, discrete Palantir
  catalyst is the cleaner setup between the two; run scripts/corr-gate.mjs
  before any real entry.

#### Deep dive: ORCL $166.68 +8.2%

- Catalyst: Verified — Oracle's fiscal Q1 FY27 earnings are scheduled
  AFTER MARKET CLOSE this Thursday, September 10 (confirmed via Oracle's
  own Sep 2 press release and multiple outlets). Today's +8.2% gap is NOT
  earnings-driven — it is pre-earnings positioning. Morgan Stanley raised
  its price target to $210 (from $207) while staying "cautious," and
  Mizuho published a note arguing "100% upside" heading into the print;
  the stock had already closed Thu Sep 4 up 3.08% and kept climbing into
  results day. 24/7 Wall St flagged CoreWeave advancing 3% in the same
  story — Oracle's rally is a proximate driver for part of CRWV's move too.
- Why: Anticipatory momentum ahead of a binary, scheduled earnings event —
  analyst target raises and bullish pre-earnings notes pull in momentum
  buyers positioning for an AI-cloud-driven beat, not confirmation of one.
  Oracle's forward P/E (~19.7x) is far cheaper than the neoclouds
  (NBIS/CRWV run >100x sales), a fundamentally different valuation and
  catalyst mechanism from the rest of today's AI-infra cluster despite
  sharing the AI theme.
- Impact: Different sustainability question than BE/NBIS/CRWV — a $457B
  mega-cap with real, profitable financials (26.75% net margin, ~$17B TTM
  net income, 27x trailing P/E) gapping into a KNOWN, dated catalyst
  rather than a headline-driven neocloud pop. Today's move can fully
  reverse Thursday/Friday on the actual print in either direction —
  elevated event risk, not a stable momentum read-through. Sector
  read-through: pulls CRWV up in sympathy today but is mechanistically
  distinct (scheduled earnings event vs. neocloud backlog/momentum
  narrative).
- Horizon: SHORT_TERM, tightly bound to the Sep 10 earnings date — any
  position today faces a binary reprice within 48 hours regardless of
  direction; not a swing-hold setup until the print is known.
- Opportunity cost: Entering ORCL now means holding through a scheduled
  earnings gap-risk event within the week — conflicts with the no-chase
  guardrail (no entry within 3% of a print already up >5% on the day) and
  the documented-catalyst requirement (today's move is analyst-target-raise
  speculation, not a confirmed fundamental print). A 10% trailing stop
  (~$17/share) could be blown through cleanly by an earnings-day gap in
  either direction. Competes with the AI-infra cluster for the 6-position
  cap; cleaner alternative is to wait for Thursday's print and react to
  confirmed results rather than pre-position into known binary risk.

#### Deep dive: BMNR $24.8 -6.2%

- Catalyst: Correction to the working assumption — BMNR (BitMine Immersion
  Technologies) is an ETHEREUM-treasury company, not a bitcoin-treasury
  company. Confirmed via BMNR's own press release today: ETH holdings
  reached 5.93 million tokens (up from 5.74M in prior reporting), total
  crypto + cash of $15.7B. Today's -6.2% gap tracks a broader, same-day
  crypto-equity pullback — Stocktwits: "MSTR, COIN, CRCL Stocks Dip:
  Crypto Equities Pull Back After Bitcoin's $82K Rejection." BMNR was up
  46.5% in August (Nasdaq) and had been recovering toward $17.50-18
  resistance in prior TradingView coverage, so this also reads partly as
  profit-taking after a large recent run.
- Why: BMNR's price is driven by (1) its NAV-per-share tied to ETH
  holdings and (2) broad crypto-market risk sentiment; Bitcoin's rejection
  at a key level ($82K) triggers basket-wide de-risking across
  crypto-treasury/crypto-exposed equities (MSTR, COIN, CRCL, BMNR)
  regardless of each company's specific underlying asset (BTC vs ETH) —
  correlated sector selling, not a BMNR-specific negative.
- Impact: Reads as sector-wide risk-off in crypto-linked equities rather
  than a BMNR-specific problem — the underlying ETH-accumulation story is
  intact and arguably strengthening (5.93M tokens, up from 5.74M).
  Pre-market volume of 1.73M shares is the HIGHEST of today's 6 gappers,
  consistent with a broad, high-participation de-risking move rather than
  a thin/noisy print. Sector read-through: correlates with the MSTR/COIN/
  CRCL crypto-equity basket, a wholly different cluster from the AI-infra
  names (BE/NBIS/CRWV/RGTI) gapping UP today.
- Horizon: SHORT_TERM — tied to Bitcoin's intraday level around $82K; a
  BTC bounce would likely reverse this move quickly given BMNR's
  high-beta NAV-tracking behavior, but continued BTC weakness could
  extend the pullback. No structural BMNR-specific negative found.
- Opportunity cost: This is a DOWN gap, not a long-entry candidate —
  TRADING-STRATEGY.md's no-bottom-fish rule ("no long entry without a
  documented catalyst; drawdown alone is not a catalyst") and the
  stocks-only/long-bias framing both argue against treating this as a
  new-trade setup today. Relevant only if BMNR is an existing open
  position, in which case check this pullback against the -7% manual-cut
  and 10% trailing-stop rules rather than adding; not a new-trade
  candidate either way given the down-gap.

Quick scan only (rank 6, deep-dive cap reached): RGTI $16.13 +6.19% —
Stocktwits: "QBTS, RGTI, QNT Stocks Rally After $100M Quantum Deals: US
Government Takes Stakes In All Three," extending the definitive DoC
contract this morning's 08:15 scan already confirmed.

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## RECOVERED from claude/eager-wozniak-355ofq (b0e932ab, 2026-09-08 14:22Z, "gappers scan 2026-09-08 10:12 ET (10 hits: BE, QBTS, RGTI, CRWV, OK...")

## 2026-09-08 — Gappers (auto-scan 10:12 ET, cloud, dup firing)

Watchlist scan via `scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0),
~2h after this morning's 08:15 ET run (market now open). **10 hits** (up from
4 this morning — BE/NBIS/CRWV/RGTI carry over, plus QBTS, OKLO, SATL, ASTS,
HAFN, UMAC newly clearing threshold). No `premarket_volume` field populated
by Alpaca's snapshot endpoint (just `volume`), so that filter was skipped per
routine rule, consistent with this morning's entry. Deep-dive capped at top 5
by |gap%|: BE, QBTS, RGTI, CRWV, OKLO. Ranks 6-10 (SATL, ASTS, NBIS, HAFN,
UMAC) get quick-scan only. 0 scan errors; several catalyst searches (OKLO,
SATL, ASTS, HAFN, UMAC) returned no usable result from either the Apify RAG
browser or the Benzinga WebFetch fallback (Benzinga 403'd on every ticker
this run) — catalyst logged as null per routine rule rather than fabricated.

### Gappers (auto-scan 10:12 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BE | 275.00 | +8.75% | 233,817 | Continuation of this morning's Seeking Alpha "AI-Memory-Style Frenzy" rating upgrade |
| 2 | QBTS | 18.01 | +8.69% | 340,677 | Quantum-sector-wide rally (QBTS/RGTI/IONQ/QUBT trending together); no dated headline |
| 3 | RGTI | 16.31 | +7.30% | 355,556 | Same $100M DoC contract flagged this morning, plus sector rally |
| 4 | CRWV | 95.62 | +7.04% | 420,158 | AI-infra/neocloud sector rally; no dated headline confirmed |
| 5 | OKLO | 44.10 | +6.82% | 68,702 | No catalyst found (Apify + Benzinga fallback both failed) |
| 6 | SATL | 4.925 | +6.14% | 33,700 | No catalyst found |
| 7 | ASTS | 65.745 | +5.55% | 53,479 | No catalyst found |
| 8 | NBIS | 238.835 | +5.47% | 175,578 | Palantir/Nebius partnership announced today (AI model ownership) |
| 9 | HAFN | 8.73 | -5.31% | 20,219 | No catalyst found |
| 10 | UMAC | 25.03 | +5.23% | 11,403 | No catalyst found |

#### Deep dive: BE $275.00 +8.75%

- Catalyst: Same catalyst as the 08:15 ET scan (Seeking Alpha bullish
  rating-upgrade piece framing Bloom Energy's fuel cells for an
  AI-memory-style re-rating), extending intraday from $268.40 at 08:15 ET to
  $275.00 by 10:12 ET. No new dated headline found this pass.
- Why: AI data centers face multi-year grid-interconnect bottlenecks;
  Bloom's fuel cells sidestep that, so the rating upgrade plus continued
  momentum keeps pulling in trend/theme buyers on top of genuinely strong
  fundamentals (revenue +91% YoY, EPS +788% YoY per this morning's log).
- Impact: Move has now run across multiple sessions, pushing further toward
  the 52-week high ($351.28); today's volume (233,817) is moderate, not a
  fresh spike — reads as continuation, not a new trigger. Sector
  read-through: QBTS/RGTI gapping the same morning on an unrelated quantum
  theme, not BE's AI-power theme; OKLO (nuclear-for-AI) is the closer
  sector cousin, also up today.
- Horizon: SHORT_TERM — no new dated catalyst since this morning; extended
  technical picture near highs raises mean-revert risk within days even
  though the underlying AI-power-demand thesis is structurally longer-term.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used, so no
  existing holding displaced. BE failed this morning's Confluence check
  (not a setup-scan hit, no VWAP/RSI/200-SMA confirmation) while now more
  extended than the 08:15 ET print; RGTI's discrete, dated $100M contract
  is a cleaner catalyst among today's names if only one trade goes out
  this week.

#### Deep dive: QBTS $18.01 +8.69%

- Catalyst: No fresh dated headline for today found despite multiple
  targeted searches. A live trending-tickers rail captured mid-scan showed
  QBTS +8.99%, RGTI +7.63%, IONQ +8.27%, QUBT +5.62% moving together same
  session, confirming a sector-wide quantum rally rather than a
  QBTS-specific event. Underlying multi-month thesis is a proposed U.S.
  government quantum-funding push (Motley Fool, Jul 2026 — stale, not
  today's trigger).
- Why: Small-cap quantum names tend to move as a basket; any positive
  sector read-through lifts the whole group rather than one name
  specifically.
- Impact: Basket move, not company-specific — higher one-day-spike/
  mean-revert risk since no QBTS-specific news justifies the size of the
  move on its own; volume (340,677) is elevated, consistent with
  speculative sector-wide flow.
- Horizon: SHORT_TERM — sector-momentum trade with no company-specific
  catalyst identified today; classic flow-driven gapper, fade risk high
  once the group's momentum cools.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — no
  existing holding displaced. Against RGTI (same sector, same-session
  move, but a dated company-specific $100M contract), QBTS is the
  weaker-documented of the two quantum names if only one gets taken this
  week; neither clears the Confluence rule without live VWAP/RSI/200-SMA
  data (unavailable this cloud run).

#### Deep dive: RGTI $16.31 +7.30%

- Catalyst: Same definitive ~$100M Dept. of Commerce quantum-computing R&D
  contract flagged this morning, plus the same-session quantum-sector
  rally noted above (RGTI +7.63% on the live trending rail at time of
  search).
- Why: A real government contract validates commercial/R&D demand for
  RGTI's technology; sector-wide momentum amplifies the market's reaction
  beyond what the contract size alone would justify.
- Impact: Genuine dated catalyst plus a sector tailwind is more durable
  than a pure sympathy move, but a >7% single-name pop in a still-early-
  stage quantum company retains mean-revert risk once initial momentum
  fades. No negative peer read-through noted.
- Horizon: LONG_TERM lean on the contract itself (a new government R&D
  relationship is structural), but near-term price action is SHORT_TERM/
  sector-momentum amplified — would need to hold above pre-gap levels
  after the initial pop to treat as a genuine multi-day swing candidate.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — no
  existing holding displaced. Best-documented catalyst among today's top 5
  (dated, company-specific, vs BE/QBTS/CRWV/OKLO's narrative-or-sector-only
  reads); still needs the Confluence rule (≥2 of VWAP/RSI/200-SMA/insider)
  confirmed live before counting as an actionable entry — unavailable in
  this cloud run, so this remains research only.

#### Deep dive: CRWV $95.62 +7.04%

- Catalyst: Search results resolved to a stale (April 2026) article on
  analyst price-target hikes (DA Davidson, BofA, Roth Capital) tied to
  CoreWeave's Anthropic and Meta mega-deals — the AI-infra thesis behind
  those upgrades is still structurally in place, but nothing dated to
  today confirms a fresh trigger. The same search surfaced a same-day item
  for peer NBIS (Palantir/Nebius partnership), suggesting today's move is
  a neocloud-group rally rather than CRWV-specific news.
- Why: If this is a continuation of the multi-week AI-infra/neocloud
  re-rating, it is the secular AI-buildout thesis moving the whole group
  rather than one new CRWV event.
- Impact: Without a same-day trigger, a >7% move reads as sector-wide
  risk-on flow rather than a CRWV-specific catalyst — higher chance of
  giving back gains if the sector rotation fades. NBIS's confirmed
  same-day Palantir-partnership news is the closest documented driver of
  today's neocloud-group strength.
- Horizon: SHORT_TERM — no company-specific dated catalyst confirmed
  today; treat as a sector-momentum gap until CRWV-specific news surfaces.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — no
  existing holding displaced. NBIS is the better-documented name in the
  same neocloud group today (confirmed same-day partnership news) if only
  one AI-infra name is taken this week.

#### Deep dive: OKLO $44.10 +6.82%

- Catalyst: No catalyst headline surfaced — both the Apify RAG search and
  the Benzinga WebFetch fallback failed or returned only generic
  quote/analysis pages, no dated news item. Logged as a research gap per
  routine rule rather than fabricated.
- Why: Unconfirmed. Plausible inference only: OKLO moved the same session
  as BE (both AI-power/nuclear-for-AI theme), but that is not a sourced
  catalyst.
- Impact: Cannot assess sustainability without a documented trigger.
- Horizon: SHORT_TERM by default in the absence of any documented
  catalyst — do not treat an unconfirmed move as a durable thesis.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — no
  existing holding displaced. Weakest-documented name in today's
  deep-dive set; would be the first cut if forced to rank by catalyst
  quality.

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

