# Research Log

Daily pre-market research entries will be appended here.

Format each entry:

## YYYY-MM-DD — Pre-market Research
### Account
- Equity: $X
- Cash: $X
- Buying power: $X
- Daytrade count: N
### Market Context
- WTI / Brent:
- S&P 500 futures:
- VIX:
- Today's catalysts:
- Earnings before open:
- Economic calendar:
- Sector momentum:
### Trade Ideas
1. TICKER — catalyst, entry $X, stop $X, target $X, R:R X:1
2. ...
### Risk Factors
- ...
### Decision
TRADE or HOLD (default HOLD if no edge)

---

## 2026-07-07 — Pre-market Snapshot (MCP-fed, no Alpaca account state)

### Account
_Alpaca keys not set in this session — account snapshot skipped._
Assumed baseline: $10,000 paper, 100% cash, 0 positions, 0 trades this week.

### Market Context (Yahoo via tradingview-data MCP)
- SPY:  $751.28 (+0.87% vs prev close $744.78) — near 52w high $760.40
- Prior close date: 2026-07-06. Data pulled 2026-07-07 05:48 UTC (pre-open).
- Backtest MCP tool is down — see BACKTEST-LOG.md. Setups below rely on
  price/momentum only, not indicator-strategy backtests.

### Watchlist snapshot (previous-day close → live)
| Sym | Prev | Now | % | 52w Low | 52w High | vs High |
|-----|------|-----|---|---------|----------|---------|
| BE  | 270.89 | 295.05 | +8.92% | 23.75 | 351.28 | -16% |
| CRWV | 81.75 | 86.46 | +5.77% | 63.80 | 163.66 | -47% |
| NIO ⚠ | 4.79 | 5.02 | +4.80% | 3.38 | 8.02 | -37% |
| META | 582.90 | 600.29 | +2.98% | 520.26 | 796.25 | -25% |
| ORCL | 140.27 | 143.76 | +2.49% | 134.57 | 345.72 | -58% |
| GOOG | 356.18 | 364.90 | +2.45% | 173.88 | 404.47 | -10% |
| HAFN | 7.02 | 7.11 | +1.28% | 5.12 | 9.54 | -26% |
| RTX  | 199.25 | 201.37 | +1.06% | 142.98 | 214.50 | -6% |
| QBTS | 22.53 | 22.56 | +0.13% | 12.75 | 46.75 | -52% |
| RGTI | 17.94 | 17.96 | +0.11% | 12.08 | 58.15 | -69% |
| NOC  | 549.01 | 547.75 | -0.23% | 493.84 | 774.00 | -29% |
| MSFT | 390.49 | 386.74 | -0.96% | 349.20 | 555.45 | -30% |
| OKLO | 52.36 | 51.84 | -0.99% | 44.88 | 193.84 | -73% |
| NBIS | 215.62 | 213.02 | -1.21% | 43.89 | 299.86 | -29% |
| GFS  | 69.84 | 68.91 | -1.33% | 31.51 | 92.55 | -25% |
| LMT  | 545.91 | 538.00 | -1.45% | 410.11 | 692.00 | -22% |
| ASTS | 85.13 | 80.64 | -5.27% | 36.08 | 133.86 | -40% |
| ZIM  | 25.57 | 23.71 | -7.27% | 12.33 | 29.97 | -21% |
| RKLB | 100.46 | 93.09 | -7.34% | 35.28 | 151.00 | -38% |

### Sector momentum read
- **AI infra strong:** CRWV +5.77%, META +2.98%, GOOG +2.45%, ORCL +2.49%
- **Alternative energy strong:** BE +8.92% (nuclear/hydrogen theme continues)
- **Space wrecked today:** RKLB -7.34%, ASTS -5.27% — theme broken short-term
- **Shipping broken:** ZIM -7.27% (single-day gap; watch for catalyst)
- **Defense mixed:** RTX +1.06%, NOC -0.23%, LMT -1.45% — no clear signal
- **Quantum flat:** RGTI, QBTS both essentially unchanged — no momentum

### Trade Ideas (paper-mode setups for 2026-07-07 session)

_Rules enforced: max 3 new trades/week (0 done, room for 3), max 20% per
position, 10% trailing stop, catalyst required, no chasing (never enter
within 3% of current price without a defined confirmation)._

1. **CRWV (CoreWeave) — BUY** — sector-momentum entry
   - Catalyst: AI-compute buildout theme; +5.77% today with SPY +0.87%
     (relative strength). Still down 47% from 52w high — plenty of room.
   - Entry: market on open OR limit $85.00 (small pullback tolerated)
   - Stop: 10% trailing GTC → initial stop $77.80
   - Target: $100 (interim), R:R ~1.6:1 at $86 entry
   - Size: $2,000 (~20% of $10k) = 23 shares @ $86
   - **Gate:** confirm CRWV isn't gapping down 3%+ at open. If yes, skip.

2. **BE (Bloom Energy) — WATCH, NOT BUY today**
   - Catalyst: alt-energy theme (+8.92%). But +9% single-day = chasing.
   - Plan: wait for pullback to $283-285 (SMA20 approx), then buy $2,000
     with stop at $256 (10% trail).
   - Add to WATCHLIST notes for tomorrow's pre-market re-check.

3. **OKLO — WATCH, mean-reversion setup**
   - Catalyst: nuclear/AI theme; battered from $193.84 high to $51.84 (73%
     drawdown). 52w low $44.88 = 15% away.
   - Plan: bracket entry with buy-stop at $54.00 (breakout of 3-day range)
     AND buy-limit at $47.00 (test of 52w low). Whichever fills first.
   - Stop: 10% trail from fill.
   - **Gate:** requires a fresh nuclear-sector catalyst; do NOT enter as pure
     bottom-fishing without news.

### Risk Factors
- SPY within 1.2% of 52w high → late-cycle, whiplash risk.
- AI names have big drawdowns YoY (CRWV -47%, NBIS -29%, OKLO -73%) despite
  the "theme is intact" narrative. Positioning risk on any bad print.
- Backtest validation is UNAVAILABLE this session (MCP tool broken). Every
  entry above is momentum + rulebook, NOT walk-forward-validated.

### Decision
**TRADE 1 (CRWV) if it opens within $1.50 of $86.46.** Otherwise HOLD.
BE and OKLO stay on the watch list for tomorrow's session.

### Gappers (auto-scan 2026-07-07)
| Rank | Sym | Gap% | Vol | Source | Catalyst |
|------|-----|------|-----|--------|----------|
| 1    | BE   | +8.92 | tbd | Yahoo | Alt-energy theme continuing |
| 2    | CRWV | +5.77 | tbd | Yahoo | AI compute buildout |
| 3    | NIO ⚠ | +4.80 | tbd | Yahoo | China EV (direction ⚠) |
| 4    | RKLB | -7.34 | tbd | Yahoo | Space sector selloff |
| 5    | ZIM  | -7.27 | tbd | Yahoo | Shipping — verify catalyst |
| 6    | ASTS | -5.27 | tbd | Yahoo | Space sector selloff |
| 7    | META | +2.98 | tbd | Yahoo | AI/ad rev — no fresh catalyst noted |
| 8    | ORCL | +2.49 | tbd | Yahoo | AI infra spend |

_Full auto-scan requires ALPACA keys set (gappers-alpaca.sh). This is the
Yahoo-only shortlist derived from watchlist snapshot above._

### Gappers (auto-scan 14:53 ET, 2026-07-10) — ad-hoc mid-day run
Note: run mid-session, not premarket — "gap_pct" is today's session change.

| Rank | Symbol | Price | Change% | Grade | Catalyst |
|---|---|---|---|---|---|
| 1 | PLBL | $8.47 | +31.93% | Avoid | No catalyst found (Benzinga: no news) |
| 2 | EQPT | $18.59 | +16.19% | Avoid | $500M buyback + raised guidance |
| 3 | VOD | $14.73 | +12.65% | Avoid | e& selling 16.21% stake for $5.95B |
| 4 | ALM | $16.44 | +11.84% | n/a (no chart data) | DA Davidson price target raise |
| 5 | WDFC | $266.86 | +11.46% | Watchlist | Beat Q3 earnings, raised FY guidance |
| 6 | CCC | $5.89 | +9.48% | n/a (no chart data) | Exploring potential sale |
| 7 | BBAR | $21.21 | +9.33% | Avoid | Argentina/Brazil market strength |
| 8 | GGAL | $53.58 | +8.48% | Avoid | Form 4 insider filing |
| 9 | CBRS | $213.71 | +7.65% | Avoid | 200MW European AI data center expansion |
| 10 | WHR | $40.71 | +7.51% | Avoid | Guidance cut + dividend suspended (bearish) |

Sentiment: Reddit posts_analyzed=0 across all 10 (known upstream degradation). Fed to Scanner B universe (data/scanner_b_universe.txt).

**CORRECTION (flagged retroactively, 2026-07-10 later same day):** this scan's
universe (PLBL/EQPT/VOD/ALM/WDFC/CCC/BBAR/GGAL/CBRS/WHR) came from WebFetching
finance.yahoo.com/markets/stocks/gainers/ — Yahoo Finance is not an approved
data source. `.claude/commands/gappers.md` now defaults to Alpaca most-actives
instead. The pipeline run below inherited this same tainted universe. Not
re-run with fabricated numbers — treat both this scan and the pipeline run
below as informational/superseded, not a clean data source. Re-run `/gappers`
(now Alpaca-sourced) for a compliant scan.

### Pipeline run (14:01 ET, 2026-07-10)
Account: ACTIVE, equity $100,000, cash $100,000, 0 open positions, 0 trades this week.
Candidates considered: 11 (10 Scanner-A gappers + CRWV from Tier-1 watchlist via bullish-pullback rule; OKLO excluded — bearish trend, RSI 37, stock_score 0).

Risk-gate results (all failed — zero survivors):
- PLBL: no catalyst found (Benzinga: no news)
- EQPT, VOD, GGAL, CBRS: catalyst present but grade "Avoid" (stock_score 3/50/43/30) — not strong enough to override per TRADING-STRATEGY
- ALM, CCC: no chart data available (backtest MCP no-data error) — cannot confirm technicals
- BBAR: catalyst is sector-macro ("South American stocks up"), not company-specific
- WHR: catalyst is BEARISH (guidance cut, dividend suspended) — wrong direction for long-only strategy
- CRWV: bullish pullback zone (RSI 43, bias Bullish) but no catalyst fetched — insufficient per "documented catalyst required" rule
- **WDFC: closest candidate** — genuine catalyst (Q3 beat + raised guidance), only non-Avoid grade (Watchlist, score 56) — but RSI 73.4 is overbought; tool's own advice: "avoid new longs." Strategy rule is buy pullbacks, not chase extremes. FAILED on entry timing, not setup quality. Watch for a pullback into the 40-60 RSI zone.

VERDICT: No qualifying setups this pass. Correct behavior — a disciplined system should reject more days than it accepts.

### Full watchlist live check (58/59 tickers, Alpaca snapshots — CORRECTED)
**Superseded the same-day entry above that used `yahoo_price` — Yahoo is not
an approved data source (see CLAUDE.md Data Sources). Re-pulled via
`scripts/alpaca.sh`-equivalent snapshot endpoint (approved: Broker/market
data) instead.** combined_analysis's technical-analysis backend was down
during this run (confirmed: even AAPL/V control tickers 500'd with an
empty-response parse error) — no stock_score/grade/trend_state this pass,
real Alpaca prices instead.

| Symbol | Price | Chg% | Symbol | Price | Chg% |
|---|---|---|---|---|---|
| AGMH | $1.12 | -4.27% | NBIS | $221.65 | +2.54% |
| AMKR | $70.80 | -1.86% | NIO | $4.79 | +0.21% |
| AMPX | $11.58 | -2.53% | NOC | $538.85 | +1.29% |
| ASTS | $73.09 | -1.08% | OKLO | $48.86 | -0.88% |
| AVAV | $145.22 | -2.16% | ONDS | $7.26 | -5.22% |
| BA | $222.74 | -0.17% | OPEN | $4.83 | **-8.43%** |
| BCI | $22.98 | -0.13% | ORCL | $140.97 | -2.25% |
| BE | $245.30 | **-4.56%** | PEPG | $2.36 | +1.94% |
| BKSY | $24.64 | -3.45% | PL | $25.98 | -4.40% |
| BLSH | $24.35 | -1.81% | PTNM | $10.21 | **-16.04%** |
| BMNR | $15.02 | +2.21% | QBTS | $20.07 | -5.26% |
| BWLP | $19.54 | +2.38% | QCOM | $188.82 | -1.15% |
| CMBT | $15.50 | +3.75% | QMMM | $116.46 | **+17.64%** |
| CMCSA | $23.64 | +1.24% | QTUM | $154.54 | -0.71% |
| CRWV | $88.91 | -0.81% | RCAT | $8.88 | -3.32% |
| DPRO | $4.75 | -0.73% | RDW | $10.21 | -2.48% |
| GFS | $69.20 | -0.75% | RGTI | $16.52 | -2.71% |
| GOOG | $354.46 | -0.49% | RKLB | $81.26 | -1.55% |
| HAFN | $7.20 | +2.35% | RR | $1.73 | -2.54% |
| HXL | $99.87 | +0.09% | RTX | $195.96 | +0.38% |
| IRDM | $49.97 | -1.27% | SATL | $4.48 | -2.71% |
| KLIC | $112.80 | +1.27% | STM | $71.50 | +0.17% |
| KTOS | $48.19 | -1.34% | SYNA | $127.15 | -1.82% |
| LMT | $522.25 | +0.79% | T | $21.21 | +0.90% |
| LUNR | $16.02 | -5.35% | TRMD | $29.27 | +4.33% |
| MA | $524.91 | +0.35% | UFO | $47.00 | -0.76% |
| META | $665.59 | +5.40% | UMAC | $18.81 | **-9.17%** |
| MSFT | $385.06 | +0.21% | V | $348.63 | +0.16% |
| | | | WLDS | $1.61 | +4.55% |
| | | | ZIM | $23.94 | -0.83% |

58/58 resolvable-via-Alpaca tickers resolved, 0 failed. KOG.OL (Kongsberg,
Oslo-listed) excluded — not on a US exchange, no Alpaca coverage. Excluded
(unresolved symbols, need clarification): BREA, APT, LAKE.

**Yahoo-vs-Alpaca discrepancy caught in the correction**: QMMM showed 0.00%
via Yahoo (stale/zero feed) vs **+17.64%** via Alpaca IEX. PTNM showed 0.00%
via Yahoo vs **-16.04%** via Alpaca. Not just a policy violation — Yahoo was
giving materially wrong data for illiquid names.

Notable movers (Alpaca): QMMM +17.64%, PTNM -16.04%, UMAC -9.17%,
OPEN -8.43%, META +5.40%, BE -4.56%.

## 2026-07-20 — Gappers (auto-scan 10:43 ET, cloud)

### Gappers (auto-scan 10:43 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BE | $194.31 | -9.43% | 86,858 | Shares falling on short-seller allegations, supply chain concerns, profit-taking despite $1.7B AI infra investment |
| 2 | SYNA | $123.45 | +7.98% | 3,220 | ON Semi to acquire Synaptics in all-stock deal; analysts downgrading post-announcement |
| 3 | BREA | $26.28 | +6.66% | 18,327 | catalyst fetch failed (not found on Benzinga) |
| 4 | SATL | $3.59 | -6.03% | 61,701 | Named among big stocks moving higher Monday alongside Iridium, FuelCell Energy, Rocket Lab |

Note: scan ran mid-session (10:43 ET, not premarket) — gap_pct is vs. prior close using latest quote, not a true premarket gap. AGMH (-14.59%) and WLDS (-10.26%) excluded, price < $3.00 floor. Fixed a stdin-redirection bug in `scripts/gappers-alpaca.sh` (heredoc silently overridden by here-string) that was making the script emit empty output; also had to override `ALPACA_DATA_ENDPOINT` inline for this run since the exported env var points at the trading API root, not `data.alpaca.markets/v2`.

Research-only. No orders placed.

## 2026-07-21 — Pre-market Research

Note: Apify RAG web browser tool (`mcp__Apify__apify--rag-web-browser`) was
unavailable this run — all 7 topic queries stayed stuck in "READY" (queued,
0 compute units) for 2+ minutes with no run start. Fell back to native
WebSearch for all market-context queries per routine fallback rule.

### Account
- Equity: $100,000
- Cash: $100,000
- Buying power: $400,000
- Daytrade count: 0 (0 positions, 0 open orders)

### Market Context
- WTI / Brent: Brent $91.10 (+2.11%), WTI >$83 — both up on US-Iran conflict
  escalation (10th consecutive night of US strikes; tanker reportedly struck
  near Strait of Hormuz; Houthi threats to Saudi Red Sea traffic). Reports of
  mediators pushing a 10-day ceasefire were also circulating — headline risk
  cuts both ways today.
- S&P 500 futures: +0.2% to +0.49% premarket (sources varied); Nasdaq 100
  futures leading on a chip-stock rally (+5% in semis). 10Y yield ~4.52%,
  easing on cooler inflation data.
- VIX: ~18.6 (July 20 close) — mid-band (12-20), normal/moderate volatility.
- Today's catalysts: GM beat Q2 estimates; Nvidia disclosed an equity stake
  in Nebius (NBIS) — semis rallying broadly on this; Utz Brands going private
  ($2.9B, Intersnack Group); crypto-infra stocks (COIN +11.8%, CRCL +8.1%,
  MSTR +3.7%) up on the CLARITY Act. Iran conflict remains the dominant
  overhang/tailwind for oil and risk sentiment.
- Earnings before open: MMM, DHR, GM, HAL, NOC, NVS, SCHW (implied moves
  4.6%-9.2% per options). After close: ALK, NLY, COF.
- Economic calendar: Next FOMC meeting July 25-26 — no rate decision today.
  CPI/PPI prints already behind us this cycle; markets watching Fed
  commentary into the meeting.
- Sector momentum (YTD, as of 7/17): Energy +4.8% (leader), Real Estate
  +2.8%, Consumer Staples +1.3%, Financials +1.1%, Health Care +0.1%,
  Utilities -0.4%, Consumer Discretionary -1.1%, Industrials -1.3%,
  Materials -1.3%, Communications -2.3%, Technology -3.8% (laggard, despite
  today's one-day chip bounce). S&P 500 YTD +9.6%.
- Held tickers: none (0 open positions) — no ticker-specific news to check.

### Trade Ideas
1. NBIS — catalyst: Nvidia disclosed equity stake, semis rallying (+5%
   sector-wide). Quote ~$213 (bid $208.22/ask $218). Entry ~$213, stop ~$196
   (-8%), target ~$246 (2:1 R:R). Confluence unconfirmed — no
   TradingView/technical MCP available this session (RSI/VWAP/200-SMA not
   checked); catalyst is real but sector is YTD laggard (-3.8%), so today's
   move may be a one-day bounce, not a trend change.
2. XLE / energy majors — catalyst: Brent +2.1%, WTI >$83 on Iran conflict
   escalation; sector already YTD leader (+4.8%). Quote XLE ~$58.28. Flagged
   as AVOID for new longs: catalyst is a fear-driven geopolitical spike with
   active ceasefire-mediation headlines circulating — high reversal risk on
   any de-escalation news, not a clean setup.
3. GM — catalyst: Q2 earnings beat, reporting before today's open (implied
   move ±6.68%). No entry yet — print just released, pre-market reaction not
   yet confirmed; watch for post-print price/volume confirmation before
   considering a momentum entry.

### Risk Factors
- Iran/Israel-US conflict — active oil-shock and ceasefire-headline
  volatility; can gap either direction intraday.
- FOMC meeting July 25-26 this week — positioning risk into the decision.
- Heavy earnings day (7 reports before open alone, implied moves up to 9%)
  — elevated single-stock gap risk.
- Technology sector still YTD laggard (-3.8%) — today's chip bounce is
  unconfirmed as a trend reversal.
- No TradingView/technical MCP access this session — cannot verify the
  ≥2-indicator confluence rule before any entry; a genuine gap in this
  routine's data coverage today.

### Decision
HOLD — no trade meets the confluence + catalyst bar today. NBIS is the
closest candidate but lacks technical confirmation (no MCP access) and
sits in a YTD-laggard sector; energy is chasing a reversible geopolitical
spike; GM's reaction is unconfirmed. Patience > activity. Revisit NBIS and
energy majors next session once technical confirmation is available.

## 2026-07-23 — Gappers (auto-scan 08:09 ET, cloud)

Watchlist scan via `scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0).
5 raw candidates; filters (|gap| >= 5%, price >= $3, premarket vol >= 50K)
cut it to 2. PEPG ($1.94) and WLDS ($1.455) excluded on price floor; BREA
(vol 18,327) excluded on volume floor. Deep-dive cap is 5 — both survivors
got the full deep-dive, no ranks 6-10 to note.

### Gappers (auto-scan 08:09 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | RCAT | $7.94 | -7.46% | 435,434 | Shares fall after CRO terminated for cause, ensuing legal dispute |
| 2 | AMPX | $10.33 | -5.06% | 264,926 | No fresh news today; last catalyst was a stale Jul 9-10 Cramer buy call |

#### Deep dive: RCAT $7.94 -7.46%
- Catalyst: Red Cat terminated its CRO for cause around 2026-07-22, which has
  escalated into a legal dispute; Benzinga flagged this as the proximate
  cause of the slide. No fresh news beyond continued reaction to the
  departure. Q2 2026 earnings due August 6 after close.
- Why: Leadership/governance shock (contested for-cause termination +
  litigation risk) undermines confidence independent of fundamentals,
  prompting risk-off selling and de-risking ahead of earnings.
- Impact: Premarket volume (435K) is well above the 50K floor — real
  participation, not a thin print. But the move is driven by a single
  governance headline, not a change in demand for Red Cat's Arachnid drone
  line — reads as event-driven de-risking, likely to stabilize once
  litigation details clarify or fade into the Aug 6 print. Peer
  AeroVironment's recent strong earnings shows sector demand intact, so
  this looks RCAT-specific, not a drone-sector rotation exit.
- Horizon: SHORT_TERM — governance/legal-dispute headlines aren't structural
  to the business; no durable thesis until litigation resolves or Q2
  earnings reset the narrative.
- Opportunity cost: Portfolio is Day 0 baseline, 100% cash, zero open
  positions — no existing holding displaced. But this is a gap DOWN on a
  negative catalyst and the strategy is long-only (no short mechanic in
  TRADING-STRATEGY.md) — no long entry here today, at best a
  watch-for-stabilization candidate, not a trade against the 3/week cap.
  Versus AMPX, RCAT at least clears the Confluence rule's "documented
  catalyst" bar even though the catalyst is negative.

#### Deep dive: AMPX $10.33 -5.06%
- Catalyst: No fresh company-specific news found today; most recent notable
  coverage is a Jim Cramer "good spec" buy call ($33 PT) and a Jones Trading
  coverage initiation, both from Jul 9-10 and stale relative to today's
  premarket decline.
- Why: Absent a fresh headline, the gap looks like thin premarket
  mean-reversion after the recent Cramer-driven bounce, or lingering
  overhang from the unresolved May short-seller allegations (Manatee
  Research) rather than a new mechanism.
- Impact: Premarket volume (265K) clears the liquidity floor, but with no
  new news the move reads as a one-session pullback/profit-taking after the
  Cramer pop, not the start of a durable leg down. 18.9% short interest
  keeps volatility structurally elevated regardless of catalyst quality.
- Horizon: SHORT_TERM — no structural catalyst identified; treat as noise
  until a real news item surfaces or Aug 4 earnings.
- Opportunity cost: Same zero-position baseline as RCAT — no existing
  holding displaced. Also a gap DOWN with no confirmed catalyst, so it
  fails the Confluence rule's "at least 1 documented catalyst" requirement
  outright — not investable as a long today. Ranked against RCAT for the
  3-trades/week cap, RCAT at least has a documented (if negative) catalyst;
  AMPX has none.

Research-only. No orders placed.

## 2026-07-23 — Pre-market Research

Note: Apify RAG web browser tool (`mcp__Apify__apify--rag-web-browser`) worked
for oil, S&P futures, catalysts, and earnings queries, but the underlying MCP
connection dropped mid-run (VIX and sector-momentum queries returned empty/
malformed content, one query errored outright with "MCP server connection
lost"). Filled those two gaps with native WebSearch per the routine's
fallback rule. Session also ran later than intended (a worker restart
mid-run pushed queries past the open — quotes below are ~90 min into the
session, not true premarket).

### Account
- Equity: $100,000
- Cash: $100,000
- Buying power: $100,000
- Daytrade count: 0 (0 positions, 0 open orders)

### Market Context
- WTI / Brent: **Brent $98.6 (+4.8-4.9%), WTI $90.6-90.7 (+4.3-4.8%)** —
  sharp spike on direct Houthi missile/drone strikes on two Saudi oil
  tankers in the Red Sea (first direct tanker strikes in that waterway) plus
  a 12th consecutive day of US strikes on Iranian targets. Trump warned the
  US will strike Iranian infrastructure for every future tanker attack in
  the Strait of Hormuz; Iran threatened retaliation against US-linked
  regional energy assets. Both the Red Sea and Strait of Hormuz are now
  live risk fronts simultaneously — a meaningful escalation from the
  single-front conflict noted in the 7/21 entry.
- S&P 500 futures: **-0.93% to -0.97%**, Dow futures ~-1.0%, Nasdaq futures
  **-1.3% to -1.36%** — broad risk-off, tech/growth underperforming.
- VIX: **19.03, +14.3%** on the day (from prior-day close) — a sharp
  volatility spike, moving from mid-band toward the elevated end of the
  12-20 "normal" range.
- Today's catalysts: Oil-tanker attacks + Iran-conflict escalation is the
  dominant tape driver, overriding company-specific news. LMT beat Q2 and
  the stock "soared" post-print. Nestlé selling half its water business to
  Platinum Equity. Broad AI/semis commentary continues (Broadcom, Qualcomm,
  Vertiv pieces) but is secondary to the macro/oil story today.
- Earnings before open (BMO): RTX, TMUS, TMO, UNP, HON, LMT (beat, already
  reacting), STM, NOK, ARGX, NDAQ, AMP, TTE. After close (AMC): INTC, SAP,
  NEM, DLR, FIX. 183 total earnings prints today (Yahoo calendar) — one of
  the heaviest days of the cycle.
- Economic calendar: Light day — weekly initial jobless claims (187k vs
  ~208k prior, a solid beat/lower) is the only notable US print. **FOMC
  decision is July 29** (not July 25-26 as prior-session notes had it —
  correcting that date), CPI not due until Aug 12. No Fed decision risk
  today, but positioning into next week's meeting is likely amplified by
  the oil/VIX spike.
- Sector momentum (YTD, mixed/stale sourcing — flag for next session):
  Energy sources conflict (one shows XLE +25% YTD as clear leader on the
  oil rally; another shows XLK +26% YTD Q2-led by AI capex, with a separate
  source claiming XLK -2.4% YTD). Directionally: Energy, Industrials, and
  Materials are the sectors benefiting from today's oil/geopolitical spike;
  Technology is the source of today's futures weakness (Nasdaq futures
  underperforming S&P/Dow). Do not trade off the conflicting absolute
  numbers — re-verify via combined_analysis/screener next session.
- Held tickers: none (0 open positions) — no ticker-specific news to check.

### Trade Ideas
1. **LMT** (watchlist, Defense theme) — catalyst: Q2 beat, stock "soared."
   Quote ap $575.90 (bid $556). That's already ~+10% from the 7/21 snapshot
   ($522.25) — a post-earnings gap well beyond the "no entry within 3% of a
   print >5% up on the day" chase rule. **AVOID new long today**; watch for
   a pullback / basing pattern before considering entry.
2. **NOC** (watchlist, Defense theme) — catalyst: Iran-conflict escalation +
   sector tailwind (defense benefits from geopolitical risk generically,
   no NOC-specific news). Quote ap $560.28 (bid $505.30 — very wide spread,
   treat as illiquid/stale). Up modestly (~+4% from 7/21's $538.85), less
   extended than LMT. No documented company-specific catalyst though —
   sector-momentum-only setups fail the "≥1 catalyst required" rule.
   **AVOID** — flagged for Tier 2 watch, not an entry.
3. **RTX** (watchlist, Defense theme) — reports Q2 BMO today; quote ap $212
   (bid $198.58, wide/stale-looking spread) shows no clear reaction posted
   yet. **No entry — wait for confirmed post-print price/volume reaction**
   before considering, same as GM in the 7/21 entry.

### Risk Factors
- Iran conflict has expanded to a second front (direct Red Sea tanker
  strikes) — active, fast-moving headline risk; oil up ~5% in a session is
  itself a volatility/gap-risk signal for tomorrow.
- VIX +14% in a single session — elevated whipsaw risk on any new entry
  today regardless of setup quality.
- Heaviest earnings day of the cycle (183 prints) — single-stock gap risk
  across the board, and RTX (on our watchlist) hasn't confirmed its
  reaction yet.
- FOMC meeting July 29 (corrected from earlier "July 25-26" note) — six
  days out, positioning risk building.
- Sector-momentum YTD source data was contradictory this run (Energy/Tech
  disagreement across sources) — don't rely on it for entries until
  re-verified via combined_analysis next session.
- Session ran ~90 min later than intended due to a mid-run worker restart;
  quotes reflect a post-open, not premarket, snapshot.

### Decision
HOLD — no trade clears the bar today. LMT is extended >5% post-earnings
(chase-rule violation), NOC has sector tailwind but no documented
company-specific catalyst, RTX's earnings reaction is unconfirmed. A
14%-in-a-day VIX spike plus an escalating two-front oil-supply shock is
exactly the kind of session where patience beats activity — elevated
whipsaw risk on any new position regardless of setup quality. Revisit LMT
(post-pullback), NOC (if a distinct catalyst emerges), and RTX (post-print
reaction) next session.

## 2026-07-23 — Gappers (auto-scan 10:09 ET, cloud)

### Gappers (auto-scan 10:09 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | STM | $57.76 | -12.23% | 688,631 | STMicroelectronics shares fell after Q3 sales guidance overshadowed strong Q2 earnings and expanded AI data-center targets |
| 2 | GOOG | $317.90 | -7.03% | 407,474 | Alphabet shares declined after Q2 earnings as capex guidance jumped to $205B for AI investments |
| 3 | OPEN | $4.12 | -5.72% | 287,938 | Opendoor shares fell as part of a broader selloff hitting high-beta names, with housing and margin concerns weighing ahead of its Aug 4 earnings |
| 4 | RTX | $205.16 | +5.35% | 93,213 | RTX shares surged after beat-and-raise Q2 earnings and a record $289B backlog, alongside peer Lockheed Martin's outsized move |

Note: run started ~10:09 ET, already past premarket into the first trading
hour, so gap_pct is vs. prior close using the live snapshot, not a strict
premarket gap; volume is same-session daily-bar volume, not premarket-only
volume. Only 4 of 12 raw scan hits cleared all three filters (|gap|≥5%,
price≥$3, volume≥50k) — WLDS/AGMH excluded on price floor; BWLP/LMT/LUNR/
BREA/AVAV/KTOS excluded on the 50k volume floor. Deep-dive cap is 5; all 4
qualifying tickers got the full deep dive below (no quick-scan-only rows
today). Apify RAG web browser tool was unavailable this run (session
expired / worker restarts) — fell back to WebSearch + Benzinga WebFetch per
the routine's documented fallback path.

#### Deep dive: STM $57.76 -12.23%
- Catalyst: STMicroelectronics beat Q2 2026 estimates with $3.49B revenue (+26% YoY) and gross margin up to 34.8%, and raised its data-center AI revenue target to over $1B in 2026 and $2B+ in 2027 on 800G/1.6T optical demand. Despite the beat, Q3 guidance of $3.7B revenue / 37% gross margin and Q4 guidance above $4B came in below what the market had priced after the stock's recent run, triggering a sharp selloff.
- Why: Guidance-miss-on-a-beat dynamic — investors had priced in a stronger Q3/Q4 AI ramp, so even solid absolute numbers and raised long-term data-center targets read as "not enough" and triggered profit-taking.
- Impact: Volume (688k) well above typical for STM with a clean gap-down on the print — reads as a real repricing of near-term growth expectations, not a one-day headline spike, though the raised multi-year AI data-center target argues the longer thesis is intact. No clear semiconductor-peer read-through today.
- Horizon: SHORT_TERM — single-print reaction; without a second data point confirming a durable de-rating, expect the guidance-vs-beat tug-of-war to resolve within days.
- Opportunity cost: Account is 100% cash, no existing position to displace. A long entry against the gap fights the trend and doesn't offer a clean 2:1 R:R without a defined support level; would consume 1 of 3 weekly trade slots and up to 20% of equity for a lower-conviction counter-trend idea versus RTX's confirmed beat-and-raise setup below.

#### Deep dive: GOOG $317.90 -7.03%
- Catalyst: Alphabet beat Q2 2026 estimates with $119.8B revenue (+24% YoY) and EPS of $9.11, and Google Cloud revenue surged 82% to $24.8B with backlog at $514B. The selloff is driven by capex: management raised full-year 2026 AI infrastructure spending guidance to $195-205B (from $180-190B), citing capacity shortages from stronger-than-expected demand.
- Why: Market is discounting near-term free-cash-flow and margin compression from the capex raise even though the underlying demand signal (cloud backlog, revenue beat) is strong — a "too much of a good thing" reaction common across mega-cap AI capex prints this season.
- Impact: Volume (407k) elevated with a clean earnings-day gap, not a slow drift — likely to stay volatile through the week as analysts digest, though several sell-side desks are framing the selloff as a buying opportunity given the demand-driven nature of the raise. Read-through to other hyperscalers' capex trajectories likely.
- Horizon: SHORT_TERM by default (headline-driven capex reaction), with a LONG_TERM upgrade path if the stock stabilizes and cloud backlog growth is confirmed next quarter; not yet aligned with a clean sector-rotation thesis without more confirmation.
- Opportunity cost: No existing position to displace, cash fully available. A long entry against a 7% earnings gap-down has no defined technical support/stop yet for a clean 2:1 R:R; would use 1 of 3 weekly trade slots on a catch-the-falling-knife idea versus a confirmed-uptrend setup like RTX.

#### Deep dive: OPEN $4.12 -5.72%
- Catalyst: Opendoor continues to slide on housing-market weakness and thin (8.2%) gross margins ahead of its August 4 earnings report, with KBW cutting its price target to $2.65 (Underperform) on regulatory scrutiny and housing headwinds. Today's move reads as part of a broader selloff hitting high-beta/high-short-interest names rather than a single new company headline.
- Why: No fresh company-specific catalyst identified today; this looks like beta/momentum unwind in a heavily-shorted, low-priced name during a broad risk-off tape, compounded by pre-earnings positioning nerves.
- Impact: Volume (288k) elevated but this is a continuation of a multi-week downtrend (stock already broke below $4 pre-earnings), not an isolated spike — reads as trend continuation, not a mean-reversion setup. Sector read-through is a broad high-beta pullback theme, not proptech-specific.
- Horizon: SHORT_TERM — no structural catalyst, pure momentum/beta unwind into an earnings event; do not hold through the Aug 4 print without a specific thesis.
- Opportunity cost: No existing position to displace. A long entry here is catching a falling knife into earnings risk and fails the Confluence/catalyst-documented rule (no real catalyst, just broad-market beta); would not clear the strategy's entry checklist at all, let alone the 2:1 R:R minimum.

#### Deep dive: RTX $205.16 +5.35%
- Catalyst: RTX beat Q2 2026 estimates (adjusted EPS $1.89 vs $1.66 consensus) and raised full-year adjusted EPS guidance to $7.10-7.25 (from $6.70-6.90) and sales guidance to $95-96B, with organic growth guidance raised to 8-9%. Backlog hit a record $289B (+22%), including $43B in new Q2 orders led by Raytheon's Patriot, Standard Missile, and AMRAAM programs.
- Why: Classic beat-and-raise — record backlog plus an EPS/sales guidance raise gives momentum buyers a durable reason to bid the stock, not just a one-time earnings pop.
- Impact: Volume (93k) supports the move and it's confirmed by sector-wide read-through — Lockheed Martin jumped roughly 10% on its own beat-and-raise print the same day, and LMT/AVAV/KTOS were also gapping up today in this scan (below the volume/price filter cutoffs), signaling genuine defense-sector strength, not an isolated single-stock move.
- Horizon: LONG_TERM — record backlog and raised full-year guidance are structural, and defense/industrials fits a late-cycle sector-rotation tilt; worth evaluating for a multi-week swing hold if it clears the Confluence rule on a later /trade check.
- Opportunity cost: No existing position to displace (100% cash). Strongest setup of today's 4 gappers — sector-confirmed beat-and-raise vs. the other three's guidance-miss/beta-unwind stories. Would use 1 of 3 weekly trade slots and up to 20% of equity ($2,000 max); needs a defined stop (7-10% below entry) to confirm it clears the 2:1 min R:R before sizing in /trade.

Research-only. No orders placed.

## 2026-07-24 — Gappers (auto-scan 18:39 ET, cloud)

Watchlist scan via `scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0),
run mid/late session (Apify RAG connector was unavailable this run —
disconnected for the full scan — so catalyst research fell back to
WebFetch/Benzinga per the routine's documented fallback, with WebSearch used
for the two deep-dive fundamentals queries and one WebFetch 404). 21 raw
candidates; filters (|gap| >= 5%, price >= $3) cut WLDS ($2.69, price floor)
from an otherwise-qualifying 21. Premarket-volume field wasn't populated
(scan ran outside premarket hours), so that floor was skipped per the
routine's conditional. Ranked by |gap%|, capped at top 10. Deep-dive cap is
5 — ranks 6-10 (OKLO, ZIM, GFS, ASTS, BREA) got quick-scan only.

Notable cross-cutting theme: 5 of the top 10 (RKLB, BE, NBIS, ASTS, OKLO)
are AI-infrastructure/space names all gapping down the same session —
reads as a basket-wide AI-infra rotation, not five independent
company-specific breaks. BREA's ticker has reportedly since changed to
SLMT (Solana infra pivot); Alpaca's feed may be lagging the rename.

### Gappers (auto-scan 18:39 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BW | $9.27 | -15.84% | 36,856 | Buyback + $61.4M note redemption "failed to offset weak momentum" |
| 2 | RKLB | $63.44 | -9.39% | 142,869 | $266M Space Force contract; gap likely Iridium-deal dilution overhang |
| 3 | BE | $198.39 | -8.79% | 147,732 | JPM raised PT ~30%, but stock down on post-parabolic profit-taking |
| 4 | NBIS | $202.50 | -8.39% | 306,825 | Rotation out of AI-infra names, reversing Google-CFO-driven gains |
| 5 | PL | $20.555 | -8.07% | 117,714 | No PL-specific headline found; unclear vs. broader market rally |
| 6 | OKLO | $40.49 | -7.97% | 65,107 | Joining govt program to accelerate AI data-center power plants |
| 7 | ZIM | $23.615 | -7.75% | 5,797 | Regulatory review update on proposed Hapag-Lloyd merger |
| 8 | GFS | $53.005 | -6.88% | 24,569 | Strategic partnership with SEALSQ on post-quantum crypto/quantum computing |
| 9 | ASTS | $55.26 | -6.69% | 56,090 | Down after $1.15B capital raise, analyst updates, high short interest pre-earnings |
| 10 | BREA | $26.28 | +6.66% | 18,327 | $300M PIPE tied to Solana crypto-infra pivot; ticker since renamed SLMT |

#### Deep dive: BW $9.27 -15.84%
- Catalyst: BW is executing a $61.4M note redemption plus a share buyback.
  Q1 2026 results were actually strong (revenue $214.4M, +44% YoY; adjusted
  EBITDA $16.1M, +296%; bookings surged to $2.5B, backlog $2.7B) on AI
  data-center/hyperscaler demand, but shares fell anyway per Benzinga on
  weak momentum outweighing the capital-structure moves.
- Why: Capital-structure actions (buyback + note redemption) are usually
  bullish, but a stock already up huge on the AI-power-demand narrative can
  gap down on profit-taking or de-risking around balance-sheet flags
  (stockholders' deficit -$172.1M, warrants liability $142.8M).
- Impact: Volume (36,856) is thin relative to a -15.8% move — reads as a
  single-name reversal/profit-take, not institutional distribution.
  Balance-sheet deficit is a real overhang; could extend if AI-power
  enthusiasm cools sector-wide.
- Horizon: SHORT_TERM, no new negative catalyst — looks like a momentum
  flush after an extended run, not a structural change to the backlog
  story.
- Opportunity cost: Account is pre-launch (100% cash, no positions to
  displace). BW's -15.84% is the largest gap today, but at $9.27 a
  compliant stop (10% trail, never within 3%) is wide relative to the
  price — likely hard to clear 2:1 R:R cleanly. Watch, not a top candidate
  today.

#### Deep dive: RKLB $63.44 -9.39%
- Catalyst: Rocket Lab disclosed an ~$8B stock-and-cash acquisition of
  Iridium ($54/share) and won a $266M USAF suborbital contract (12 launches
  through 2028, $112M upfront) in the past week. Today's gap down likely
  reflects deal-related dilution/financing overhang plus a broader pullback
  across space/AI-infrastructure names.
- Why: Large stock-and-cash M&A raises dilution/integration concerns even
  when strategically sound, prompting sellers to de-risk into strength;
  compounds with a same-day rotation out of high-multiple space/AI names
  (mirrors NBIS's -8.4% move today).
- Impact: Volume (142,869) is well above the list's thin-volume gappers,
  suggesting real institutional repositioning rather than noise.
  Fundamentals intact (backlog $1.1-2.2B, FY26 revenue guide raised to
  $850-900M) — reads as a sentiment/positioning air-pocket, not a broken
  thesis.
- Horizon: SHORT_TERM for the gap itself (deal-related profit-taking), but
  the Iridium acquisition is a LONG_TERM structural catalyst (vertical
  integration into satellite services/recurring revenue) worth tracking for
  a swing entry once terms settle.
- Opportunity cost: No existing positions to bump. RKLB's fundamentals/
  backlog are the strongest of the group, but buying into a fresh
  M&A-driven selloff before dilution is fully priced risks a wide stop that
  may miss 2:1 R:R — better to wait for a base to form.

#### Deep dive: BE $198.39 -8.79%
- Catalyst: JPMorgan turned more bullish on Bloom Energy, but the stock
  still gapped down -8.79% after a monster run (+194% YTD, +1,100% over 12
  months). Q1 revenue was +130% YoY, backlog $20-24B on Oracle (2.8GW) and
  Brookfield ($25B financing) AI-power deals.
- Why: Even bullish analyst notes can't stop "sell the strength" after a
  parabolic run built on backlog/guidance beats — classic distribution
  after an extended move, amplified by today's sector-wide AI-infra
  de-risking (also hit NBIS, RKLB, ASTS, OKLO).
- Impact: Volume (147,732) is meaningfully elevated — real profit-taking/
  rotation, not a thin-volume fluke. Fundamentals remain excellent (raised
  FY26 guidance, positive FCF), so this looks like a valuation correction
  rather than a broken story, though further mean reversion is plausible
  given the size of the prior run.
- Horizon: SHORT_TERM, no negative fundamental catalyst — classic
  post-parabolic profit-taking. Could become a LONG_TERM re-entry if it
  stabilizes and the AI-power-demand thesis keeps playing out.
- Opportunity cost: No existing positions to bump. BE is the most expensive
  top-5 name at $198.39 — a 20%-of-equity ($2,000) position on a $10K
  account buys ~10 shares, and single-day -8.8% swings make a compliant
  stop expensive in R terms; likely fails 2:1 R:R at a sane stop distance
  on this account size.

#### Deep dive: NBIS $202.50 -8.39%
- Catalyst: Nebius fell as part of a broad rotation out of AI-
  infrastructure/neocloud names, reversing gains from Google's CFO
  signaling expanded third-party capacity buying. Underlying business
  remains strong: Q1 revenue +684% YoY, ARR $1.92B, multi-year Microsoft
  ($17-19B) and Meta (~$27B) contracts, $9.3B cash, FY26 capex guide raised
  to $20-25B.
- Why: Same mechanism as RKLB/BE — a sector-wide AI-infra rotation on
  valuation/rate jitters, not company-specific bad news.
- Impact: Volume (306,825) is the highest of the top 5 by far, signaling a
  real institutional rotation rather than noise. Fundamental story intact
  ($44B+ contract book, industry-leading growth) — reads as basket-wide
  profit-taking (RKLB, BE, NBIS, ASTS, OKLO all red today), not a
  Nebius-specific problem.
- Horizon: SHORT_TERM for the gap (sector rotation, not fundamentals),
  though the AI-cloud infrastructure buildout is a LONG_TERM structural
  theme that could support a swing re-entry once the rotation stabilizes.
- Opportunity cost: No existing positions to bump. NBIS at $202.50 is the
  most expensive name on the list; a 20%-of-equity position buys ~10
  shares. Five AI-infra names moved together today — taking NBIS would
  concentrate the week's one new-trade slot into a single macro theme
  rather than diversifying, and a sane stop likely won't clear 2:1 R:R at
  this price/volatility.

#### Deep dive: PL $20.555 -8.07%
- Catalyst: No confirmed PL-specific negative catalyst. Underlying
  fundamentals are strong: FY26 revenue outlook raised to $425-441M,
  backlog above $900M, added to Russell 1000/Midcap/Growth indices in late
  June, launching new Pelican Gen 2 satellites.
- Why: Unclear standalone catalyst — most likely index-related mechanical
  flow (recent Russell reclassification can cause temporary rebalancing
  dislocations) or a pullback after the index-inclusion pop, rather than a
  new negative fundamental print.
- Impact: Volume (117,714) is moderate-to-high. Absent a clear negative
  catalyst, this looks more like index-rebalancing/technical mean reversion
  than a fundamentals-driven move — needs catalyst confirmation before
  treating as tradeable.
- Horizon: SHORT_TERM by default (no confirmed catalyst) — unexplained
  moves without a clear driver should not be assumed structural.
- Opportunity cost: No existing positions to bump. PL is the cheapest
  top-5 name ($20.555), which makes fitting 2:1 R:R within the 20%-per-
  position cap easier, but with the catalyst unconfirmed it would compete
  with RKLB/NBIS's more clearly fundamentals-backed setups for the
  account's max-3-new-trades-per-week budget.

Research-only. No orders placed.

## 2026-07-24 — Pre-market Research

Note: `mcp__Apify__apify--rag-web-browser` was queried first (oil query
returned only run metadata, no scraped text, before the MCP connection
dropped mid-run for VIX/futures/catalysts/earnings/econ-calendar/sector
queries — same failure mode as 2026-07-23). Fell back to native WebSearch
for all seven queries per the routine's fallback rule. WebSearch results
for a same-day query returned same-day intraday/close-level coverage
(e.g. "as of the close," Friday wrap pieces) rather than strictly
premarket snapshots — flagging so today's levels aren't read as a true
premarket-only print.

### Account
- Equity: $100,000
- Cash: $100,000
- Buying power: $400,000 (4x margin buying power on paper; RegT $200,000)
- Daytrade count: 0 (0 positions, 0 open orders)

### Market Context
- WTI / Brent: **Brent ~$97-98.4 (-2.3%), WTI ~$87.9-90 (-4.7%)** — sharp
  pullback from 7/23's spike on reports the stalled US-Iran peace talks may
  be moving toward a path forward (Reuters/Pakistan mediation angle);
  Brent's ~4% one-day drop is its biggest since late June. De-escalation,
  not resolution — Iran conflict remains a live headline-risk front.
- S&P 500 futures: **+0.1% to +0.2%** premarket, attempting to stabilize
  after Thursday 7/23's S&P 500 worst single-day drop in a month (tech
  capex anxiety + oil spike). Tentative, not a confirmed reversal.
- VIX: **~18.6-18.8**, roughly flat to down slightly on the day — moderate,
  mid-band; no acute fear signal despite the prior day's selloff.
- Today's catalysts: Post-selloff stabilization attempt. Semiconductor
  index -4.3% Thursday; **INTC -6.5%** despite an EPS beat (market
  discounting guidance/outlook); **SNDK (Sandisk) -11%** dragging memory
  names. **GOOG** capex raise to $195-205B (from $180-190B) continues to
  overhang mega-cap tech sentiment even after a Q2 beat + 82% cloud growth
  — same "good quarter, scary capex" pattern flagged 7/23. Oil retreat is
  the session's positive offset, giving the Dow relief.
- Earnings before open: CHTR, AXP, VZ, CNI, SXT, SLB, BAH, GRC, CPF, FLG —
  none on our watchlist.
- Economic calendar: No CPI/PPI/jobs prints confirmed for today via search
  (PPI next due Aug 13). Light data day — consistent with 7/23's note that
  FOMC (July 29) is the next real catalyst, five days out.
- Sector momentum (YTD 2026): **Materials (XLB) leading, +22% YTD**,
  breaking out of a long consolidation. Consumer Staples, Industrials,
  Energy also in the leading/improving group. **Technology (XLK) +26% YTD
  but now flagged Lagging/downgraded for 2H** alongside Communications,
  Consumer Discretionary, Financials — momentum rotating away from mega-cap
  tech after its Q2 run, consistent with today's INTC/SNDK/GOOG weakness.
  Healthcare weakening; Real Estate and Utilities improving (defensive
  bid). Directionally confirms the Materials/Energy/Industrials
  late-cycle tilt flagged 7/23, now with corroborating source agreement
  (last session's Energy-vs-Tech conflict is resolved: Energy/Materials
  lead, Tech lags).
- Held tickers: none (0 open positions) — no ticker-specific news to check.

### Trade Ideas
1. **RTX** (watchlist, Defense) — quote ap $225.49 today vs $205.16 logged
   7/23 (already +5.35% that day on its beat-and-raise print) — now
   **~+9.9% cumulative over two sessions**. Further extended, not less.
   Fails the "no entry within 3% of a print >5% up" chase rule even harder
   than yesterday. **AVOID** — needs a real pullback/base, not a
   continuation entry.
2. **LMT** (watchlist, Defense) — quote ap $612.26 vs $575.90 on 7/23
   (already extended then) — **another ~+6.3% since**. Same chase-rule
   violation, worse. **AVOID**.
3. **NOC** (watchlist, Defense) — bid $506.83, **no ask posted (ap $0)** —
   illiquid/stale quote, unchanged from 7/23's flagged wide-spread read.
   Still no company-specific catalyst, sector-momentum-only. **AVOID**.
4. **GOOG** (watchlist, mega-cap core) — down sharply post-earnings on the
   capex raise despite a beat; no confluence check run this session
   (no combined_analysis pull for RSI/VWAP/200-SMA). Flag for Tier 2 —
   worth a full technical read next session before treating the dip as
   a value entry vs. a falling-knife.

### Risk Factors
- Iran conflict de-escalating on headlines but unresolved — a single
  contradicting report could reverse today's oil relief and futures
  stabilization intraday.
- Defense-theme watchlist (RTX/LMT) now two sessions extended off its
  beat-and-raise catalyst — momentum chasers get squeezed on any pullback;
  do not enter without a confirmed base.
- Tech/semis sentiment fragile — INTC selling off despite a beat, GOOG
  capex overhang — mega-cap tech named as "Lagging" in fresh sector-rotation
  data; avoid adding tech exposure into this rotation.
- FOMC five days out (July 29) — positioning risk building into the
  meeting.
- WebSearch fallback this session returned intraday/close-level coverage
  rather than a clean premarket snapshot (Apify dropped again, same as
  7/23) — re-verify opening-print levels via `/gappers` or `/pipeline`
  once the market opens rather than trusting these levels as premarket-final.

### Decision
HOLD — no trade clears the bar. Defense names (RTX/LMT) are more extended
today than yesterday, not less — the chase rule is even more clearly
violated. NOC remains illiquid with no distinct catalyst. GOOG is an
interesting dip but wasn't run through the confluence checklist this
session. Two straight sessions of Apify dropping mid-run plus a volatile,
still-unresolved geopolitical/capex backdrop argues for patience over
forcing a trade. Revisit RTX/LMT only on a confirmed pullback/base; run
GOOG through full confluence (combined_analysis) before considering it a
dip-buy candidate.

## 2026-07-24 — Gappers (auto-scan 19:36 ET, cloud)

Note: run was delayed well past premarket into after the regular session close
(Apify RAG web browser tool errored on 6 of 7 catalyst queries this run --
degraded/unavailable mid-session; fell back to WebSearch + Benzinga WebFetch
per the routine's documented fallback path, and cross-checked headline
accuracy against WebSearch where the quick-scan snippet looked off-target,
e.g. UMAC/BMNR/MSFT/QCOM/GOOG). Gap% and volume are the live Alpaca snapshot
vs prior close, not a strict premarket gap. 9 of 60 watchlist tickers cleared
the |gap|>=5% threshold; WLDS excluded on the $3 price floor, BREA excluded
on the 50k volume floor, leaving 7 qualifying gappers (fewer than the top-10
cap). Deep-dive cap is 5 -- MSFT and QCOM (ranks 6-7) got quick-scan only.
This is a second same-day gappers run (see 18:39 ET entry above), same
watchlist source and threshold, but this snapshot pulled a smaller/different
top-10 roster (only 7 names cleared filters here vs. 21 raw candidates at
18:39) -- consistent with intraday price action shifting which names cross
the +/-5% gap threshold as the session progressed, not a scan-methodology
change. Only GOOG and RTX recur across both snapshots. Saved to
data/premarket_gappers_2026-07-24_1936et.json (time-suffixed) rather than
the standard filename, since the 18:39 ET run already claimed
data/premarket_gappers_2026-07-24.json.

### Gappers (auto-scan 19:36 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | OPEN | $3.94 | -9.95% | 2,623,820 | Opendoor shares slumped ~12% on a technical breakdown, extending a multi-week downtrend ahead of Aug 4 Q2 earnings |
| 2 | UMAC | $21.63 | +9.77% | 104,194 | Unusual Machines extended a strong run on bullish analyst coverage (7 Strong Buy) tied to domestic drone-component demand |
| 3 | GOOG | $316.75 | -7.37% | 1,650,436 | Alphabet fell despite a Q2 beat after raising 2026 AI capex guidance to $195-205B, breaking below its 200-day MA |
| 4 | RTX | $209.09 | +7.37% | 487,454 | RTX jumped on a Q2 beat-and-raise, record $289B backlog, and first domestic Patriot order in 30 years |
| 5 | BMNR | $16.50 | -6.97% | 1,832,841 | BitMine Immersion fell with the crypto selloff as ETH weakness hit its ~5.75M-ETH treasury, plus an $83.6M quarterly net loss |
| 6 | MSFT | $364.13 | -6.70% | 1,350,874 | Microsoft fell on continued AI-datacenter capex scrutiny ahead of July 29 earnings |
| 7 | QCOM | $165.63 | -5.67% | 286,032 | Qualcomm extended a multi-week decline (>30% since May) as investors de-risk ahead of July 29 fiscal Q3 earnings |

#### Deep dive: OPEN $3.94 -9.95%
- Catalyst: Opendoor shares fell sharply (toward ~$3.88-3.94) as a technical breakdown exposed lower support levels, continuing a multi-week downtrend ahead of Q2 earnings on Aug 4. KBW recently cut its price target to $2.65 (Underperform) citing regulatory scrutiny and housing-market headwinds, and consensus expects a wider per-share loss than a year ago on revenue down sharply from $1.57B to ~$900M.
- Why: No fresh single-day company catalyst identified — this is beta/momentum unwind in a heavily-shorted, low-priced high-beta name compounded by a broken technical support level and pre-earnings positioning nerves.
- Impact: Volume elevated (2.6M) and this extends a multi-week downtrend rather than an isolated spike — reads as trend continuation into a binary earnings event, not mean-reversion. No distinct sector read-through (proptech-specific, not a broad real-estate move).
- Horizon: SHORT_TERM — no structural catalyst, pure technical/beta unwind heading into an Aug 4 earnings binary event; do not hold through the print without a specific thesis.
- Opportunity cost: 100% cash, nothing to displace, but a long here fights the trend and fails the catalyst-documented half of the Confluence rule — there is no clean support level for a 7-10% stop, so it can't be sized to clear the 2:1 R:R minimum. Would burn 1 of 3 weekly trade slots on the weakest-conviction setup on today's list versus RTX's confirmed beat-and-raise. Third straight session OPEN has appeared as a gapper (7/22, 7/23, 7/24) — persistent weakness, not a one-off.

#### Deep dive: UMAC $21.63 +9.77%
- Catalyst: Unusual Machines (FPV/drone components) continued a strong run on fresh bullish analyst coverage tied to demand for domestically-manufactured unmanned-aircraft parts — 7 of 7 covering analysts rate it Strong Buy with an average 12-month target near $34.9 versus ~$21.6 today. Broader drone/defense-tech sentiment was also lifted by unrelated headlines about a Trump-linked robotics startup securing AMD chips for military-humanoid development, reviving interest in the domestic-hardware/defense-tech theme UMAC sits in.
- Why: Analyst target hikes plus a re-energized reshoring/domestic-defense-hardware narrative are pulling in momentum buyers on a stock already in a strong uptrend.
- Impact: Volume (104k) is only moderately above the 50k floor, and the stock screens as expensive on valuation checks after a strong 1-year run — reads as continuation of an existing momentum trade rather than a fresh one-day spike, with stretched valuation raising mean-reversion risk. Sector read-through aligns with today's broader defense/hardware strength also seen in RTX.
- Horizon: SHORT_TERM — headline/analyst-driven pop on an already-extended stock; would need actual contract wins (not just sentiment/target hikes) to clear the LONG_TERM bar in TRADING-STRATEGY.md.
- Opportunity cost: 100% cash, nothing to displace. Small-cap, thin liquidity, already extended after a big run — chasing here risks buying the top of a stretched move, and a same-day 2:1 R:R would need a tight stop on a volatile name. Would consume 1 of 3 weekly trade slots on a chase-risk setup versus RTX's cleaner beat-and-raise or waiting for a pullback entry.

#### Deep dive: GOOG $316.75 -7.37%
- Catalyst: Alphabet reported Q2 2026 revenue of $119.8B (+24% YoY) and EPS of $9.11, both above consensus, but shares fell roughly 7% — breaking below the 200-day moving average for the first time in over a year — after management raised full-year 2026 AI infrastructure capex guidance to $195-205B, up from a prior $180-190B range, citing capacity shortages from stronger-than-expected cloud demand.
- Why: A "too much of a good thing" reaction — the market is discounting near-term free-cash-flow and margin compression from the capex raise even though the underlying demand signal (cloud backlog, revenue beat) is strong, a pattern repeating across mega-cap AI-capex prints this season.
- Impact: Volume (1.65M) elevated on a clean earnings-day gap, not a slow drift. Direct read-through to MSFT and QCOM also gapping down in today's scan, confirming a broader mega-cap AI-capex de-rating theme rather than a GOOG-specific issue.
- Horizon: SHORT_TERM by default (headline-driven capex reaction), with a LONG_TERM upgrade path if the stock stabilizes and cloud-backlog growth is confirmed next quarter — unchanged from yesterday's (2026-07-23) read on the same stock.
- Opportunity cost: 100% cash, nothing to displace. A long against a 7% earnings gap-down has no defined technical support/stop yet for a clean 2:1 R:R; would use 1 of 3 weekly trade slots on a catch-the-falling-knife idea versus RTX's confirmed uptrend setup. Second consecutive session GOOG has shown up as a gapper on the same capex story — repeat appearance without a new catalyst argues for continued patience, not chasing.

#### Deep dive: RTX $209.09 +7.37%
- Catalyst: RTX (Raytheon) beat Q2 2026 estimates (adjusted EPS $1.89, +21% YoY) on sales of $24.7B (+16% organically) and raised full-year adjusted EPS guidance to $7.10-7.25 (from $6.70-6.90) and sales guidance to $95-96B. Raytheon booked its first domestic GEM-T Patriot production order in over 30 years plus $5B in international Patriot orders, pushing backlog to a record $289B (+22% YoY, book-to-bill 2.42).
- Why: Classic beat-and-raise — record backlog plus a guidance raise gives momentum buyers a durable reason to bid the stock, not just a one-time earnings pop; the first-Patriot-order-in-30-years headline reinforces a structural, not one-off, demand story.
- Impact: Volume (487k) supports the move. Second straight session RTX has appeared as a gapper on the same beat-and-raise print, with peer defense names also strong — signals genuine sector strength, not an isolated single-stock move.
- Horizon: LONG_TERM — record backlog and raised full-year guidance are structural, and defense/industrials fits a late-cycle sector-rotation tilt per TRADING-STRATEGY.md's rotation table; worth evaluating for a multi-day/week swing hold if it clears the Confluence rule (>=2 of VWAP/RSI/200-SMA/insider signal) on a later /trade check.
- Opportunity cost: 100% cash, nothing to displace. Strongest setup on today's list — sector-confirmed beat-and-raise vs. the mega-cap capex-selloff and beta-unwind stories elsewhere on the list. Would use 1 of 3 weekly trade slots and up to 20% of equity; needs a defined stop (7-10% below entry, never within 3% of current price) to confirm a 2:1 R:R before /trade sizing. Same name flagged as the top idea in yesterday's (2026-07-23) research log — two-session confirmation strengthens the case and it is the strongest LONG_TERM candidate of the two sessions combined.

#### Deep dive: BMNR $16.50 -6.97%
- Catalyst: BitMine Immersion Technologies (a large Ethereum treasury company holding ~5.74-5.77M ETH, roughly 4.8% of ETH supply, plus cash/securities totaling ~$11.1-11.3B) pulled back from a July high above $17 into the mid-$16s as the broader crypto market sold off; the company also disclosed an $83.6M net loss on $46.5M revenue in its latest quarter.
- Why: BMNR's stock is a leveraged proxy for Ethereum price — the crypto-wide downturn is compressing the market value of its treasury holdings, and the reported net loss adds a fundamental headwind on top of the crypto-driven move.
- Impact: Volume (1.83M) elevated; this reads as continuation of a volatile pullback (stock ran roughly $13 to $17+ then back to mid-$16s this month) tied directly to ETH's price action, not an isolated single-stock headline — high beta to crypto means it will keep moving with BTC/ETH regardless of company-specific news.
- Horizon: SHORT_TERM — the move is a crypto-market proxy trade, not a company-specific structural catalyst; do not carry past a crypto-market view without a distinct BMNR thesis.
- Opportunity cost: 100% cash, nothing to displace. Extremely high-beta/volatile name (deep losses, negative margins) — a position here is effectively a leveraged crypto bet, not a stock-specific setup, and fails the specific-catalyst prong of the Entry Checklist beyond generic crypto-market direction. Would consume 1 of 3 weekly trade slots and carries outsized single-name risk relative to RTX's cleaner, less volatile beat-and-raise setup.

Research-only. No orders placed.
