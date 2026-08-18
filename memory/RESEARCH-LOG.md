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

---

## 2026-07-19 — Pre-market Research
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

## 2026-07-24 — Gappers (auto-scan 20:38 ET, cloud)

Note: this is the THIRD same-day gappers run (see 18:39 ET and 19:36 ET
entries above), fired well after the regular session close due to a
mid-run session restart that lost the first (13:19 ET, genuinely
premarket-adjacent) attempt entirely -- that data is gone and this run
starts fresh with a live post-close Alpaca snapshot. Saved to
data/premarket_gappers_2026-07-24_2038et.json (time-suffixed), since the
bare filename is already claimed by the 18:39 ET run. Apify RAG web browser
hung for 60+ minutes on the first (lost) attempt and was not retried; used
the documented WebFetch/Benzinga fallback for all 10 catalysts and WebSearch
for top-5 fundamentals instead.

**Data-quality flag:** the roster and gap sizes diverge materially across
all three of today's runs (e.g. UMAC: +9.77% at 19:36 ET vs -10.06% here,
~20 points apart; BE: -8.79% at 18:39 ET vs -15.26% here; RTX/GOOG/MSFT/
QCOM/BMNR/OPEN/RKLB/NBIS cleared the filter at 18:39/19:36 ET but not at
all here). All three snapshots were taken after the 4pm ET close, where
Alpaca's snapshot is a thin, wide-spread after-hours quote, not a genuine
intraday move — treat gap_pct/volume from any post-close run as noisy and
do not feed it into /trade sizing without reconfirming against a
regular-session quote first. Recommend flagging this to the operator:
the CLOUD CADENCE NOTE's intended premarket windows (07:00-10:00 CT) are
not what's actually firing; three runs today all landed post-close.

10 of 60 watchlist tickers cleared the |gap|>=5% threshold at this
snapshot; WLDS, BREA, KTOS, TRMD, AVAV excluded on the 50k volume or $3
price floors, leaving exactly 10 (no further cap needed). All 10 are gap
DOWN moves — concentrated in AI-power/data-center names (BE, CRWV, OKLO),
drone/defense-adjacent names (AMPX, UMAC, RCAT), and quantum computing
(QBTS), echoing the AI-infra rotation theme flagged in both earlier runs
today. Deep-dive cap is 5; ranks 6-10 (PL, OKLO, GFS, RCAT, QBTS) got
quick-scan only.

### Gappers (auto-scan 20:38 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BE | $184.33 | -15.26% | 538,121 | No fresh same-day headline; continued pressure from a Jul 8 short-seller report, de-risking ahead of Jul 28 earnings |
| 2 | AMPX | $8.58 | -13.56% | 267,647 | Continued overhang from a Manatee Research short report; no fresh same-day negative news |
| 3 | BW | $9.73 | -11.67% | 134,853 | Fresh $200M dilutive stock offering overshadowing buyback/debt-paydown news (3rd straight scan appearance today) |
| 4 | CRWV | $72.58 | -10.52% | 972,289 | No CRWV-specific negative headline; broad AI-infrastructure sector rotation (echoes BE/NBIS/RKLB/OKLO/PL across today's scans) |
| 5 | UMAC | $19.39 | -10.06% | 104,031 | No negative headline; sign-flipped vs. the 19:36 ET run same session -- likely after-hours noise, not a real move |
| 6 | PL | $20.39 | -8.81% | 575,556 | No clear stock-specific catalyst found; declined against a rising broader market |
| 7 | OKLO | $40.35 | -8.30% | 247,943 | Pullback after recent highs on federal nuclear-AI datacenter program news; part of broader AI-power selloff |
| 8 | GFS | $53.19 | -6.55% | 199,253 | Broader semiconductor/foundry sector selling pressure despite positive SEALSQ partnership news |
| 9 | RCAT | $7.59 | -5.66% | 257,290 | Overhang from CRO termination-for-cause and resulting legal dispute (recurring) |
| 10 | QBTS | $16.23 | -5.17% | 819,008 | Broader quantum-computing sector selloff, sympathetic to IonQ/Rigetti weakness |

#### Deep dive: BE $184.33 -15.26%
- Catalyst: Shares remain pressured by a July 8, 2026 short-seller report (Hunterbrook) alleging misleading disclosures on supply chain and production capacity, which already knocked the stock down ~25% from its 52-week high. No fresh company-specific headline explains today's incremental slide, which comes 2 trading days ahead of Q2 earnings on July 28. Fundamentals remain strong: Q1 revenue +130% YoY, raised FY26 EPS guidance to $1.85-2.25, and expanded partnerships (Oracle up to 2.8GW fuel-cell deal, Brookfield financing expanded 5x to $25B).
- Why: Pre-earnings de-risking/profit-taking on a stock up 140%+ YTD, compounded by lingering short-report overhang — traders trimming binary-event exposure into the Jul 28 print rather than reacting to a new negative catalyst.
- Impact: Volume (538K) clears the liquidity floor by 10x — real distribution, not a thin print. Analyst consensus (Buy, $286 avg target) vs. $184 current implies the sell-off has outrun the fundamental picture if Q1 trends hold, but the short-seller allegations keep tail risk elevated until the Jul 28 report clears the air. Caveat: this is a thin after-hours quote — the 18:39 ET run priced BE at $198.39/-8.79% and 19:36 ET didn't surface it at all, a spread consistent with low after-hours liquidity rather than a confirmed intraday move of this size.
- Horizon: SHORT_TERM, earnings on Jul 28 is the binary catalyst; nothing to carry into that print without a fresh confluence signal after it prints.
- Opportunity cost: Portfolio is Day 0 baseline (100% cash, zero positions) — no existing holding displaced. But this is a gap DOWN and the strategy is long-only, so it is not a today entry regardless; it is a post-earnings watch candidate (Jul 28) at best, and buying into an unresolved short-seller dispute 2 days before earnings fails the documented-catalyst clarity bar even though the fundamental story is strong.

#### Deep dive: AMPX $8.58 -13.56%
- Catalyst: A short report from Manatee Research raised red flags on Amprius' operations; the acute sell-off it triggered predates today and no fresh same-day news explains the incremental drop. The durable business story is Q1 2026 revenue of $28.5M (+2.5x YoY), improving gross margin (20%, +343% YoY), a new Matternet drone-battery partnership, and raised FY26 revenue guidance to $130M+.
- Why: Continued fade of the short-report overhang, likely compounded by a high-beta pullback correlated with today's broader drone/robotics-adjacent weakness (UMAC also down this snapshot) rather than a distinct new negative print.
- Impact: Volume (268K) clears the floor. The short-seller allegations remain unresolved and keep the stock volatile, but raised guidance and a real commercial partnership (Matternet) suggest the underlying growth story is intact — reads as sentiment/overhang-driven rather than a fundamentals break. Q2 earnings due Aug 5 is the next real catalyst.
- Horizon: SHORT_TERM, no new resolving catalyst until Aug 5 earnings; expect continued chop/fade risk until then.
- Opportunity cost: Same zero-position baseline — no holding displaced. Gap DOWN, long-only strategy, so not a long entry today; the unresolved short-seller dispute also fails the clean-catalyst bar for Confluence. Versus BE, AMPX's guidance raise is more recent/concrete, but its market cap/liquidity is far smaller and the short thesis is still live.

#### Deep dive: BW $9.73 -11.67%
- Catalyst: BW's own IR/news flow this week centered on a $200M underwritten common-stock public offering (dilutive) alongside a $50M buyback authorization and $61.4M note redemption — the dilution announcement is the likely proximate driver of continued weakness, coming right after the stock had rallied ~186% over the prior 90 days on record Q1 revenue (+44% YoY) and a big AI-data-center-driven backlog. This is the third same-day appearance of BW in this scan (-15.84% at 18:39 ET) — persistent after-hours weakness, not a one-off print.
- Why: A same-week dilutive equity raise (up to $200M plus a 30-day 15% greenshoe) against a stock that had run up nearly 3x in 90 days is a classic sell-the-news/dilution overhang, outweighing the offsetting buyback/debt-paydown headlines.
- Impact: Volume (135K) clears the floor. Given the size of the prior run-up (186% in 90 days) and the fresh dilution, this reads as a sane, catalyst-explained pullback rather than a thesis break — underlying demand (AI data-center energy backlog) is intact per Q1 results, but supply of new shares is a real near-term overhang until the offering is absorbed.
- Horizon: SHORT_TERM, dilution digestion typically resolves over days-to-weeks; not a structural change to the backlog/demand story, so not a fresh LONG_TERM entry today.
- Opportunity cost: No holding displaced (zero positions). Gap DOWN + long-only means no entry today. Among today's decliners, BW has the clearest, freshest, company-specific catalyst (the offering) and has now shown up in all three same-day scans; if forced to rank for next week's 3-trade cap it would be a wait-for-offering-to-clear name, not a chase-the-dip candidate.

#### Deep dive: CRWV $72.58 -10.52%
- Catalyst: No CRWV-specific negative headline found; the top hits are sector-wide AI-infrastructure rotation (same theme cited in the NBIS "why is it falling" piece, and consistent with the 18:39/19:36 ET runs also flagging BE/NBIS/RKLB/PL/OKLO weakness) even as CRWV's own recent news is positive — Truist and Baird turned bullish (Jul 21), and the company is guiding to ~108% YoY Q2 revenue growth with a $100B backlog and a major power-capacity ramp underway.
- Why: Broad de-risking across AI-infrastructure/power names rather than a CRWV-specific negative print — reads as a sector-rotation/risk-off day for the AI power + compute buildout trade, confirmed across all three of today's scans.
- Impact: Volume (972K) is the highest of today's list — heavy participation on the way down. With backlog and growth guidance intact and analysts turning more bullish just 3 days ago, this looks like a sector-wide, sentiment-driven flush rather than a break in CoreWeave's own thesis. Still carries real risk given $35B debt load and lack of profitability.
- Horizon: SHORT_TERM, no fundamental change; treat as sector volatility, not a new structural catalyst, until it stabilizes.
- Opportunity cost: No holding displaced (zero positions). Gap DOWN, long-only, no entry today. Of the AI-power cluster flagged across today's three scans (BE, CRWV, NBIS, RKLB, OKLO, PL), CRWV has the most credible near-term analyst/growth tailwind (fresh upgrades, 108% growth guide) — if the desk only has capacity to watch one name in this cluster for a bounce, CRWV screens best, but none clear a long entry until the tape stabilizes and Confluence can be checked.

#### Deep dive: UMAC $19.39 -10.06%
- Catalyst: No fresh negative company headline found; recent news is uniformly positive — Q1 2026 revenue +296% YoY (8th straight record quarter), a swing to $10.3M net income, a $150M capital raise (with Ondas as a strategic investor), a new NDAA-compliant defense order, doubled drone-motor production capacity, and inclusion in the Russell 2000 in the 2026 reconstitution. NOTE: the 19:36 ET run this same session priced UMAC at +9.77% — a ~20-point swing between two after-hours snapshots roughly an hour apart on a thin-liquidity small cap.
- Why: Reads as profit-taking/mean-reversion after a steep recent run rather than any new negative print; some analysts have flagged the stock as significantly overvalued, which likely fed the give-back — though the sign-flip vs. the 19:36 ET run within the same session strongly suggests after-hours liquidity noise is the bigger factor.
- Impact: Volume (104K) clears the floor but is the smallest of today's top 5 in absolute share count, and the direction flip vs. the prior same-day run undercuts confidence in this specific print.
- Horizon: SHORT_TERM, no structural change; next confirmation point is Aug 6 earnings. Do not act on this specific gap print given the same-session direction flip — reconfirm with a regular-session snapshot first.
- Opportunity cost: No holding displaced (zero positions). Gap DOWN + long-only = no entry today regardless. UMAC's fundamentals are arguably the strongest of the top 5 (296% revenue growth, GAAP profitability), but after-hours noise on this print plus flagged overvaluation risk means this is a Tier 1 watchlist name, not a today trade off this specific gap.

Research-only. No orders placed.

## 2026-07-25 — Gappers (auto-scan 02:05 ET, cloud) — DUPLICATE, no new data

This is the 4th gappers-cloud run in this rolling window (after 18:39,
19:36, and 20:38 ET on 2026-07-24, all above). `scripts/gappers-alpaca.sh
watchlist` at 02:05 ET returned a top-10 roster **byte-for-byte identical**
to the 20:38 ET run — same symbols, same rank order, same price/gap_pct/
volume to the last decimal for all 10 rows. This confirms the Alpaca
snapshot feed is fully frozen post-close (no new quotes since ~20:38 ET)
and this run added zero incremental information; no separate data file or
deep-dive was written to avoid duplicating already-logged content
verbatim. Apify RAG web browser tool crashed the session worker twice on
this run before falling back to WebFetch/Benzinga (whose pinned "top
headline" repeatedly proved stale/mismatched vs. the actual move direction
for BE/CRWV/OKLO/GFS — a weaker source than the WebSearch-driven research
in the 20:38 ET entry above; defer to that entry's catalyst detail).

**Scheduling flag for the operator:** this is now 4 gappers-cloud
invocations landing between 18:39 ET and 02:05 ET (all post-close,
overnight), none in the intended premarket window (07:00-10:00 CT per the
CLOUD CADENCE NOTE). Recommend checking the cron/trigger config for this
routine — repeated post-close firings burn Alpaca/Apify/WebFetch calls and
a Telegram alert per run for data that hasn't changed, and could mislead a
later session into treating a frozen after-hours quote as a live gap.

Research-only. No orders placed.

## 2026-07-25 — Gappers (auto-scan, cloud) — SKIPPED, weekend + frozen feed, 5th duplicate run

This session's clock started at Fri 2026-07-24 08:10 ET (genuinely
premarket) when `scripts/gappers-alpaca.sh watchlist` was first run, but
the session worker restarted multiple times mid-run (Apify RAG web browser
tool errored/timed out repeatedly across restarts, matching the pattern in
the 02:05 ET entry above), and by the time catalyst research finished and
this log entry was being written, real wall-clock time had jumped to
**Sat 2026-07-25 14:33 ET — a weekend, market closed, no trading session
today at all.**

The captured Alpaca snapshot is a duplicate of already-frozen post-close
data, not fresh premarket data: volume figures match the 19:36 ET run above
byte-for-byte on 6 of 7 names (OPEN 2,623,820 / UMAC 104,194 / RTX 487,454 /
MSFT 1,350,874 / QCOM 286,032 / BMNR 1,832,841), and price/gap_pct are
identical or near-identical on 5 of 7 (UMAC, RTX, MSFT, QCOM exact; OPEN and
BMNR drift slightly, GOOG diverges more — consistent with stale bid/ask
noise on a frozen feed, not a real move). Same 7-name roster, same $3
price floor / 50k volume floor exclusions (WLDS, BREA) as the 19:36 ET run.
Catalyst headlines fetched via WebFetch/Benzinga fallback (Apify unusable
this run) confirm the same story already logged in the 19:36 ET deep dive
(OPEN technical breakdown, UMAC drone/defense analyst coverage, GOOG Q2
capex-guidance selloff, RTX beat-and-raise, MSFT AI-capex scrutiny, QCOM
pre-earnings de-risking, BMNR crypto selloff) — nothing new to add.

Per the same reasoning as the 02:05 ET entry: no new data file written, no
duplicate deep-dive table, no Telegram alert (would misrepresent a Friday
close/weekend as a live premarket gap). This is now the 5th gappers-cloud
invocation across ~24h wall-clock (18:39, 19:36, 20:38 ET on 7/24, 02:05 ET
and this one on 7/25), the first two "in-window" and the rest firing
progressively later including now on a weekend — the CLOUD CADENCE NOTE's
intended weekday 07:00-10:00 CT window (`0 7,8,9,10 * * 1-5`) is clearly
not what's actually configured for this trigger. Flagging to the operator
via notification; recommend checking the platform-level cron/trigger config
for this routine (not visible from CronList in-session — likely a
schedule/day-of-week mismatch on whatever triggers it externally).

Research-only. No orders placed. No scan run, no trade action.
- Daytrade count: 0
- Open positions: 0
- Open orders: 0

### Market Context
- WTI / Brent: WTI ~$82.49 (Barchart CLN26, last session), Brent nearing $85 —
  both spiking on US-Iran ceasefire breakdown (US strikes on Iran, Iranian
  retaliation on US bases in Kuwait/Jordan) driving Red Sea supply fears.
- S&P 500 futures: last quoted ~7,497-7,575 range (Friday close level; no
  Sunday session).
- VIX: 18.77 as of Fri 2026-07-17 close, up +12.19% that session — elevated
  vs. recent summer lows, tracking the Iran-conflict escalation above.
- Today's catalysts: none — today is Sunday, no session. Monday 2026-07-20
  calendar is light: WebSearch found "no major earnings or data expected."
- Earnings before open (Mon 7/20): none from our watchlist; general-market
  names reporting are DPZ, WRB, STLD (not tracked). Bigger week ahead
  (7/21+): NOC, GM, MMM, DHR, MRSH, MSCI, and **GOOG earnings Wed 7/22** —
  flagged as an AI-capex-guidance catalyst for the whole AI trade.
- Economic calendar: light week for macro data, heavy for earnings
  (+23% YoY estimated per FactSet).
- Sector momentum: AI/semiconductor rally still running (PHLX chip index
  +60% YTD; Micron +240%, Intel +216%, AMD +186% in Q2 2026 per WebSearch),
  but a rotation OUT of large-cap tech into financials/healthcare/small-caps
  is also underway — consistent with the across-the-board weak grades below.

**Data-source note**: `scripts/perplexity.sh` failed with a 401 (exit 3) —
all of the above came from native WebSearch fallback, not Perplexity, per
the command's documented fallback path. `mcp__alpaca__get_clock` failed twice
with a local SSL cert-verify error (known cert-interception issue on this
machine); market-closed status confirmed instead via system date/time
(Sunday 2026-07-19, no `clock` subcommand exists in `scripts/alpaca.sh`).

### Chart reads — Tier-1 30-day watchlist (config/rules.json, 0 held positions so nothing else to check)
| Ticker | Price | Chg% | RSI | Trend | stock_score | Grade |
|---|---|---|---|---|---|---|
| META | $646.01 | -0.26% | 56.8 | Weak Uptrend (Death Cross EMA50<200) | 43 | Avoid |
| GOOG | $346.12 | +0.10% | 43.3 | Weak Uptrend (Golden Cross, pullback zone) | 9 | Avoid |
| MSFT | $393.82 | -0.26% | 51.9 | Transitioning (mixed signals, BUY sub-signal) | 17 | Avoid |
| ORCL | $126.41 | +3.87% | 29.3 (oversold) | Strong Downtrend | 3 | Avoid |
| NBIS | $177.71 | +7.65% | 37.6 | Weak Uptrend (Golden Cross, but well below SMA20) | 8 | Avoid |
| NIO | n/a | n/a | n/a | data unavailable | n/a | n/a |
| BE | n/a | n/a | n/a | data unavailable | n/a | n/a |
| RKLB | n/a | n/a | n/a | data unavailable | n/a | n/a |
| ASTS | n/a | n/a | n/a | data unavailable | n/a | n/a |

NIO/BE/RKLB/ASTS: `combined_analysis` technical block returned the same
parse error ("Expecting value: line 1 column 1") on both the initial call
and one retry each (NYSE for NIO/BE, NASDAQ for RKLB/ASTS) — genuine upstream
outage for this batch, not a symbol/exchange issue (other exchanges resolved
fine). Reddit sentiment (`posts_analyzed`) was 0 across all 9 tickers —
known upstream degradation since 2026-07-07, skipped per command instructions;
the technical block above is unaffected where it returned data.

### Trade Ideas
No BUY-grade setup exists this pass — every ticker with usable data graded
**Avoid** (stock_score 3-43). Documenting as WATCH per the rulebook's
catalyst+confluence bar, not as live entries:

1. **GOOG — WATCH, not BUY** — catalyst: earnings Wed 2026-07-22, AI-capex
   guidance is the read-through for the whole AI trade. RSI 43.3 sits in the
   tool's own "good pullback entry" zone (40-60) and Golden Cross (EMA50>EMA200)
   is intact, but stock_score 9 / grade Avoid and stochastic is oversold-bearish
   (K 8.19). Plan: no pre-earnings entry: stock_score is too low to satisfy
   confluence. If post-earnings price reclaims $350-355 (SMA20/30 zone) with
   RSI back above 50, re-evaluate for entry — hypothetical stop 10% trail,
   target R1 $374.06 (~8% from current, R:R depends on entry).
2. **NBIS — WATCH, not BUY** — catalyst: +7.65% single-day pop riding the
   AI/semis sector rally; Golden Cross (SMA50 224.8 > SMA200 137.9) still
   intact structurally. But RSI 37.6 (bearish direction), stock_score 8 /
   grade Avoid, and price ($177.71) is still ~23% below its own SMA20
   ($229.92) — a bounce inside a bigger downtrend, not a clean setup. Plan:
   needs to reclaim ~$229 (SMA20) with RSI > 50 before any entry consideration.
3. **MSFT — WATCH, not BUY** — mixed read: MACD bullish crossover, RSI 51.9
   neutral pullback zone, and the tool's own `market_sentiment.buy_sell_signal`
   flags BUY — but overall grade is Avoid (score 17), trend_state
   "Transitioning," and price sits below SMA200 (death cross intact). No
   documented near-term catalyst found beyond the general AI-capex theme.
   Plan: too mixed to act; needs either a genuine golden-cross confirmation
   or a specific catalyst before reconsidering.

### Risk Factors
- Sector rotation OUT of large-cap tech (WebSearch-sourced) lines up with
  every successfully-read Tier-1 tech name grading Avoid today — treat as a
  real signal, not noise, going into next week.
- US-Iran ceasefire breakdown is the dominant macro risk: oil + VIX both
  spiking; elevated whipsaw risk for any new entries this week.
- 4 of 9 Tier-1 tickers (NIO, BE, RKLB, ASTS) have no technical read at all
  this pass (upstream MCP outage) — blind spot on those names until the
  data source recovers.
- Perplexity wrapper is down (401/exit 3) — research this run leaned on
  WebSearch only; re-check `scripts/perplexity.sh` auth before next session.
- `mcp__alpaca__get_clock` is broken (SSL cert-verify failure) — no
  programmatic market-open check available; relied on system date instead.
- Reddit sentiment feed still down fleet-wide (known since 2026-07-07) — no
  social-sentiment confirmation available for any ticker this pass.

### Decision
**HOLD.** 0 open positions, 0 qualifying setups (all graded Avoid or no
data). Nothing to trade or manage. Re-check GOOG post-earnings (Wed 7/22)
and retry NIO/BE/RKLB/ASTS chart reads next session.

---

### Setup Scan (10:53 ET)

Full-universe run of `/setup-scan` against all 61 `watchlist_tiers.immediate`
tickers (60 from config/rules.json + KOG per the command's exchange map).
Sunday, market closed — no premarket session, so Setup A (TJL breakout,
requires an intraday leg only checkable 10:00-15:30 ET) was **not checkable
for any ticker** this pass and contributed 0 to every score. Gate used a
disclosed liquidity substitute (all `volume_analysis.average_20` fields
returned null — see Risk Factors) rather than the literal 1.5x-30-day-avg
ratio; no ticker was gated out on liquidity.

A sustained upstream outage on `combined_analysis`'s technical block hit
~2 minutes into the run (same "Expecting value: line 1 column 1" parse
error documented in the 2026-07-07 entry above) and stayed down for most
of the run, with one ~2-min recovery window. **14 of 61 tickers** got a
real technical read; **44** were blocked by the outage; **3** (APT, UMAC,
KOG) hit an unsupported-exchange fallback (AMEX/OSL aren't valid exchange
values for this MCP — they silently fall through to a KUCOIN/crypto
backend). Every one of the 61 was attempted at least once; nothing below
is fabricated for an unscanned ticker.

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| GFS | B | GainzAlgo confluence | 5m-15m | ADX 25.5 (Strong), EMA50 70.94 > EMA200 56.17, stock_score 14 |
| QTUM | B | GainzAlgo confluence | 5m-15m | ADX 22.4 (Moderate), EMA50 150.50 > EMA200 127.29, stock_score 11 |
| V | B | GainzAlgo confluence | 5m-15m | ADX 32.9 (Strong), EMA50 336.50 > EMA200 329.55, stock_score 59 |

0 grade-A hits. 11 of the 14 scanned tickers (META, CMCSA, GOOG, MSFT,
OPEN, RGTI, RKLB, IRDM, MA, ASTS, LUNR) scored 0/3 and were excluded per
spec. Full per-ticker gate/setup detail (all three gate values, not just
hits) saved to `data/setup-scan_2026-07-19_1053ET.json`, including the
blocked-ticker list with reasons.

### Risk Factors
- `combined_analysis` technical block outage blocked 44/61 tickers — this
  is a recurring failure mode (also seen 2026-07-07), worth flagging as a
  persistent upstream reliability issue, not a one-off.
- `volume_analysis.average_20`/`.ratio` are null fleet-wide for stocks on
  this MCP — the literal volume gate can't be computed; flagged as a data
  gap, not silently worked around.
- `mcp__alpaca__get_clock`/`get_stock_bars` still SSL-broken (same as
  2026-07-07) — no Alpaca fallback for market timing or volume history.
- AMEX (APT, UMAC) is not a supported exchange for this MCP tool, not
  previously documented — falls through to a KUCOIN backend and returns
  no data. Needs a fix or an alternate data source if AMEX names stay on
  the watchlist.

### Decision
**HOLD / WATCH ONLY.** No grade-A setups. GFS/QTUM/V are grade-B
(single-signal GainzAlgo confluence, watch not trade) — not enough for
entry under the confluence_min_signals rule. No action taken; scan is
read-only per command spec.

## 2026-07-25 — Risk Upgrades Batch (build + live verification)
Built additive risk-management batch: ATR-based position sizing, correlation
gate, portfolio-drawdown circuit breaker. All read-only / paper-only, no
orders placed.

- `scripts/size.mjs SYMBOL [--risk-pct 1.0]` — Wilder ATR(14) sizing.
  Live check `node scripts/size.mjs AAPL`: price 327.58, atr14 8.6838,
  equity 100000, risk_dollars 1000, atr_shares 115, cap_shares 61,
  suggested_shares 61 (20%-of-equity cap applied).
- `scripts/corr-gate.mjs SYMBOL` — Pearson correlation of daily log returns
  vs open positions; blocks (exit 2) if >0.75 corr with >=2 positions.
  Live check `node scripts/corr-gate.mjs AAPL`: pass=true, "fewer than 2
  open positions" (book was empty/near-empty at test time).
- `config/rules.json` — added `sizing`, `correlation_gate`,
  `circuit_breaker` blocks (additive, no existing keys touched).
- `scripts/safety-check.sh` — added circuit-breaker gate (drawdown from
  1M portfolio-history peak >= 10% blocks new orders + Telegram alert) and
  correlation gate (delegates to corr-gate.mjs, blocks on exit 2). Both
  fail CLOSED (block) if risk data is unavailable.
  **Deviation from source template**: circuit breaker BLOCKS + alerts, it
  does NOT auto-flatten positions — execution stays human-gated per this
  repo's doctrine.
  Live check: PASS, drawdown_pct 0.0 vs peak/current equity 100000.
- `scripts/loop-runner.ps1` — appends `elapsed_seconds=<N>` to the routine
  log at run completion.
- Docs: CLAUDE.md hard-rules bullets + `.claude/commands/trade.md` step 0
  (run size.mjs before sizing an order).
- `.gitignore` — added `graphify-out/` (untracked output another agent
  writes in this repo).
- Bug found + fixed during verification: `corr-gate.mjs`'s early
  "pass:true, fewer than 2 open positions" branch called `process.exit(0)`
  explicitly, which crashed on Windows/Node 24 with a libuv assertion
  (`UV_HANDLE_CLOSING`, src/win/async.c:94) during fetch-socket teardown,
  masking a real exit 0 as exit 127. Fixed by letting `main()` return
  naturally (matches risk.mjs's pattern) instead of calling process.exit(0).

## 2026-07-27 — Market-Open (no prior research entry, ran inline)

No 7/27 or 7/26 pre-market entry existed (last entry was the 7/25 risk-batch
build note); ran pre-market STEPS 1-3 inline per the market-open routine's
"never trade without documented research" rule.

**Blocker**: `mcp__tradingview-data__*` is NOT connected in this cloud
session (`ListConnectors` returns no tradingview entry at all — different
from the known upstream-outage failure mode documented on 7/07, 7/19, 7/23,
where the tool connected but the technical block returned parse errors).
No `combined_analysis` technical block available this run -> no RSI/MACD/
SMA/EMA/ADX/support-resistance/stock_score/grade for any candidate. Fell
back to Apify RAG web browser for market context only (Perplexity exit 3,
`401` — key not configured for this wrapper, expected fallback path per
CLAUDE.md).

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 | Daytrade count: 0
- TRADE-LOG shows zero trades since the Day-0 baseline (2026-07-08) — every
  session to date has been HOLD/WATCH per prior entries (0 grade-A setups,
  repeated technical-feed outages). Consistent with strategy doctrine
  ("patience > activity"), not a bug.

### Market Context (Apify RAG web browser, Sun 7/26 evening -> Mon 7/27 premarket sourcing)
- **Futures**: Dow +0.5%, S&P 500 +0.6%, Nasdaq-100 +1.2% (as of late
  Sunday) — risk-on reopen.
- **Oil**: WTI fell >5% Sunday to below $85/bbl (from Friday's $89.31,
  which was itself +~10% on the week) on a weekend pause in US-Iran
  tit-for-tat strikes — first pause in ~2 weeks, mediation hopes building.
  Not a confirmed ceasefire; still an active conflict that flared repeatedly
  this month (per 7/23 entry's two-front escalation note).
- **Rates**: Fed meets Tue-Wed (7/28-7/29), decision + Warsh presser
  Wednesday. CME FedWatch ~35-38% odds of a hike *this* meeting, most still
  expect September. 10-year yield near a decade high on Iran-driven
  inflation worries.
- **Earnings**: Heaviest week of the season — 177 S&P 500 companies,
  including META/MSFT/AMZN/AAPL/QCOM, plus SBUX, CMG, UPS, V, BA. Today
  (Mon): Durable Orders (preliminary, June); earnings from Cincinnati
  Financial, Nucor, UDR, Universal Health Services, Welltower, Cadence
  Design Systems — none are current watchlist/holding names.
- **Prior week close**: Dow fell for a 3rd straight week, S&P 500 and
  Nasdaq both declined for a 2nd straight week (per Fri 7/24 wrap) — tape
  was net risk-off into the weekend; today's futures bounce is a reaction
  to the Iran pause, not a trend reversal yet.
- VIX: not sourced this run (no dedicated query executed; deprioritized
  once the technical-block blocker made any entry moot regardless of vol
  level) — flag for next session.
- Held tickers: none (0 open positions).

### Trade Ideas
None generated. Without `combined_analysis` there is no way to satisfy the
strategy's confluence rule (≥2 of VWAP/RSI/200-SMA/insider signal) for any
watchlist candidate (CRWV, OKLO, NIO, defense names, etc.) — a documented
catalyst alone (even the Iran-pause macro tailwind) is explicitly
insufficient per TRADING-STRATEGY.md. No Tier-1 setup was carried over from
a prior confirmed-technical session either.

### Risk Factors
- **Tooling gap**: tradingview-data MCP absent from this cloud session's
  connector list — needs operator attention; if this persists across
  scheduled cloud runs it silently degrades every routine that depends on
  Price Action (pre-market, gappers, pipeline, setup-scan, alpha-scan, the
  `/committee` technical analyst, etc.), not just market-open.
- Iran conflict pause is fresh (hours old) and unconfirmed as a ceasefire —
  headline-reversal risk into the open.
- FOMC Wed 7/29 is 2 days out; heaviest earnings week of the season starts
  now — elevated single-stock and macro gap risk across the board.

### Decision
**HOLD — no trades.** Root cause: missing technical-data tool blocks the
confluence check for every candidate, not a lack of catalysts (Iran pause +
Fed week + megacap earnings would normally be enough to justify a full
research pass). No buys placed, no orders touched, nothing to commit/push
per STEP 8's "skip if no trades fired." Flagging the MCP gap to the
operator; retry with `combined_analysis` live next session before
attempting any new entry.

## 2026-07-27 — Pre-Market Research (cloud routine)

Ran the scheduled pre-market workflow via Apify RAG web browser (Perplexity
retired from this routine). Same `tradingview-data` MCP outage already
logged in today's earlier market-open entry — `ListConnectors`/`ToolSearch`
show no tradingview-data tools this session, so `combined_analysis` is still
unavailable and the confluence rule (≥2 of VWAP/RSI/200-SMA/insider) cannot
be satisfied for any candidate. Also hit and enforced the Yahoo Finance ban
mid-run: several Apify search results auto-scraped `finance.yahoo.com` pages
(S&P/Nasdaq/sector-ETF snapshot data) — excluded that content per CLAUDE.md
and sourced the same facts from Cboe/TradingEconomics/CNBC instead where
possible; sector-level quantified performance (XLK/XLF/XLE/XLU today) had no
clean non-Yahoo source this run and is flagged as a gap below.

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged from every prior session since
  the Day-0 baseline.

### Market Context (Apify RAG web browser, Mon 7/27 mid-morning ET)
- **Oil — sharp reversal of Friday's spike**: WTI ~$83.25-83.4 (down ~7-8%
  intraday, tradingeconomics.com), Brent ~$89.6-90.0 (down ~8.5-8.9%
  intraday, tradingeconomics.com). Friday's close had oil back above $100/bbl
  on a resumption of US-Iran hostilities (CNBC); over the weekend the US
  paused its strikes, Iran said it halted retaliation and opened talks with
  Oman over the Strait of Hormuz, and Caspian Pipeline Consortium loadings
  resumed on Russia's Black Sea coast after Ukrainian drone disruption
  (tradingeconomics.com). Net: a ~2-day round-trip from <$85 (Fri close per
  yesterday's log) to >$100 (Fri intraday per CNBC) back to ~$83-90 today —
  still an active, reversible conflict, not a durable ceasefire.
- **VIX**: 18.93-19.20, +1.89% to +3.34% on the day (Cboe direct). Elevated
  vs. recent calm but well inside the 52-week range (13.38-35.30) — a
  "climbing a wall of worry" tape (Citi's Dirk Willer, via CNBC), not panic.
- **FOMC**: decision Wed 7/29, 2:00pm ET. CME FedWatch prices ~35% odds of a
  hike *at this meeting* (unusual — most of the Street still expects
  September), per CNBC — a genuinely hawkish repricing tied to oil-driven
  inflation-expectation risk, not the routine cut-odds debate.
- **Earnings — heaviest week of the season** (S&P 500 Q2 EPS growth guided
  +38% YoY per FactSet, via CNBC): Mon 7/27 (today) — Durable Orders prelim
  (June) 8:30am; earners include Cincinnati Financial, Nucor, UDR,
  Universal Health Services, Welltower, Cadence Design Systems (none on
  watchlist/held). Tue 7/28 — Visa, Boeing, Ford, NXP, PayPal, UPS, Coca-Cola
  and dozens more. Wed 7/29 (FOMC day) — Meta Platforms, Microsoft,
  Qualcomm, Starbucks, Robinhood, Chipotle. Thu 7/30 — Amazon, Mastercard,
  Coinbase, plus GDP/Core PCE/Initial Claims. Fri 7/31 — Apple, Chevron,
  AbbVie, Moderna, Colgate-Palmolive.
- **Megacap/AI divergence** (CNBC, Fri 7/24 close): Roundhill Magnificent
  Seven ETF (MAGS) fell >5% week-to-date after Alphabet's solid headline
  results but negative-FCF/heavy-capex commentary spooked investors, while
  semiconductor ETFs rose on the week — the chip trade still depends on
  hyperscaler AI capex continuing even as the spenders themselves get
  punished. META/MSFT/AMZN/AAPL results this week are the read-through.
- **Sector momentum (XLK/XLF/XLE/XLU today)**: no quantified same-day read —
  only source found was a Yahoo Finance page, excluded per policy. Gap,
  not fabricated.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None generated — same root cause as this morning's market-open entry: no
`combined_analysis` technical block this session means the confluence rule
(≥2 of VWAP/RSI/200-SMA/insider signal) can't be satisfied for any
watchlist name, and a macro catalyst alone (Fed-week volatility, oil
reversal, megacap earnings) is explicitly insufficient per
TRADING-STRATEGY.md. No Tier-1 setup carried over from a prior
confirmed-technical session.

### Risk Factors
- **Tooling gap persists**: `tradingview-data` MCP absent again this cloud
  session (2nd session today) — now a repeated, not one-off, degradation of
  Price Action across pre-market, market-open, and any other routine that
  depends on it. Needs operator attention.
- **Yahoo Finance leakage via search**: Apify's Google-search-then-scrape
  behavior surfaced `finance.yahoo.com` pages unprompted for at least 3 of
  7 queries this run (VIX, sector-ETF, earnings-calendar searches). Content
  was discarded per CLAUDE.md, but if this routine's query set keeps
  surfacing Yahoo as a top organic result, worth tightening queries (e.g.
  `-site:finance.yahoo.com`) to avoid re-litigating the exclusion every run.
- Oil's 2-day round trip (>$100 Fri intraday -> <$85 weekend -> ~$83-90
  today) means the Iran de-escalation is fresh and reversible — a snapback
  on any breakdown in the Iran-Oman talks is a live gap risk, not a settled
  input.
- FOMC pricing ~35% hike odds this week is a hawkish tail risk most of the
  Street isn't positioned for.
- Heaviest earnings week of the year lands on top of FOMC — elevated
  single-stock and index gap risk through Friday.

### Decision
**HOLD — no trades.** Missing technical-data tool blocks confluence for
every candidate; the macro backdrop (Fed week + oil reversal + megacap
earnings) is real but not a substitute for a documented technical setup.
No orders touched. Nothing else to commit/push beyond this log entry per
STEP 6.

### Setup Scan (11:56 ET, cloud)
60 candidates checked, 0 errors, 1 hit (grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| WLDS | B | Momentum confluence | daily | ADX14 33.63, EMA9 1.98 > EMA21 1.70, RSI14 86.46 |

No grade-A hits -> no Telegram alert per STEP 4 rule. Candidate only, not
an order — feed to `/trade` if pursued (full safety-check gate applies).

### Gappers (auto-scan 12:05 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | QBTS | $18.825 | +16.06% | 741,649 | Quantum sector rally on US govt funding interest |
| 2 | KLIC | $87.615 | -13.48% | 25,406 | No same-day catalyst found — flag as data-quality/unconfirmed |
| 3 | BMNR | $17.375 | +9.86% | 1,379,727 | ETH-treasury proxy recovering off $13-14 support |
| 4 | ZIM | $22.955 | -7.77% | 14,005 | Away from Hapag-Lloyd $35 arb price — unconfirmed |
| 5 | RGTI | $15.205 | +7.38% | 775,551 | Quantum sector rally + UK 1,000-qubit deployment |
| 6 | AMKR | $60.65 | -6.67% | 175,385 | Pullback after AI-supply-chain deal news |
| 7 | BREA | $26.28 | +6.66% | 18,327 | Halted 3x today, no clear catalyst — ⚠ unresolved symbol |
| 8 | TRMD | $32.03 | +5.8% | 9,086 | No fresh catalyst; consensus PT $34.50 |
| 9 | WLDS | $3.325 | -5.27% | 5,515 | Thin microcap, no 2026-dated catalyst |
| 10 | RR | $1.485 | -5.11% | 249,016 | Reversing yesterday's rally — ⚠ watchlist-flagged ticker |

#### Deep dive: QBTS $18.825 +16.06%
- Catalyst: Move rides a broader quantum-computing sector re-rating tied to proposed U.S. government funding/investment support (Fool.com, Jul 6). D-Wave also announced annealing/gate-model tech advancements Jan 27, 2026, but that's dated, not same-day.
- Why: Government-funding-interest headlines pull momentum/retail buyers into the whole quantum basket (QBTS, RGTI, IonQ); low float amplifies the move.
- Impact: 741K volume is moderate vs QBTS's historical 12M-share days on bigger news — a smaller flare-up. RGTI moving +7.38% same session confirms sector-wide read-through, not QBTS-specific news.
- Horizon: SHORT_TERM — no confirmed company-specific news dated today; reads as continuation of the running quantum-funding narrative, prone to fade without a fresh headline.
- Opportunity cost: Day 0, zero open positions, nothing displaced. QBTS + RGTI gapped on the same theme same day — taking both concentrates 2 of 3 weekly slots in one correlated bet (run corr-gate.mjs first). Stop -10% ≈ $16.94 (~$1.90 risk); 2:1 target ≈ $22.6, plausible only if the sector theme extends.

#### Deep dive: KLIC $87.615 -13.48%
- Catalyst: No dated catalyst explains today's move. Sourced coverage is stale (Jun 16 close $117.27, Mar 12 momentum piece, 2022 catalyst article). Low volume (25K) also flags a possible data-quality issue with the gap read itself.
- Why: Unconfirmed — possibly a stale prev_close in the gap calc (prev_close $101.26 vs today $87.615 is a large overnight gap for this name with no news hit), or a real reaction not yet indexed by search.
- Impact: Can't assess sustainability without a confirmed catalyst; low volume (25K) suggests a thin/illiquid print, not a broad move.
- Horizon: SHORT_TERM by default, but UNCONFIRMED — do not act until a same-day catalyst is verified (check KLIC IR / earnings calendar).
- Opportunity cost: Not assessable — data-quality gap. Re-verify via scripts/alpaca.sh quote plus KLIC IR before any consideration.

#### Deep dive: BMNR $17.375 +9.86%
- Catalyst: Peter Thiel-backed Ethereum-treasury company (per WATCHLIST.md). Coverage notes recovery off $13-14 support, testing resistance on the ETH-bet thesis.
- Why: BMNR trades as a levered ETH proxy; today's pop lines up with crypto-sentiment-driven buying of ETH-treasury vehicles, not a company-specific operational catalyst.
- Impact: 1.38M volume is a real, elevated print — genuine risk-on flow into ETH proxies, not noise. Read-through: watch other crypto-treasury names (e.g. BLSH, also on today's list) for confirmation.
- Horizon: SHORT_TERM — direct ETH-beta trade; without a durable company catalyst (M&A, contract) this is a crypto-sentiment swing, not a structural re-rating.
- Opportunity cost: Day 0, nothing displaced. Strongest confirmed volume of the deep-dive set vs KLIC's unconfirmed drop and TRMD's stale-news case. Stop -10% ≈ $15.64; 2:1 target ≈ $20.9, plausible only if ETH extends the rally.

#### Deep dive: ZIM $22.955 -7.77%
- Catalyst: Standing catalyst is the pending Hapag-Lloyd acquisition (~$4.2B, ~$35/share arb target). Today's move is away from, not toward, that price — inconsistent with fresh deal-progress news.
- Why: If the buyout-arb thesis held, ZIM should trade tightly toward ~$35 with low volatility; a -7.77% drop on only 14K volume instead suggests deal-risk repricing or a stale prev_close reference rather than genuine deal news today.
- Impact: Extremely low volume (14K) for a name with an active M&A arb — reads as a thin/illiquid print, not institutional repricing. Low confidence this reflects real information flow.
- Horizon: SHORT_TERM/UNCONFIRMED pending re-verification; a genuine deal re-price down would be LONG_TERM-relevant to the M&A thesis, but today's volume doesn't support that read.
- Opportunity cost: Not assessable pending confirmation — same data-quality caveat as KLIC. Don't count against the 3-trades/week cap until verified against a live Alpaca quote.

#### Deep dive: RGTI $15.205 +7.38%
- Catalyst: Same quantum-computing sector tailwind as QBTS. Street-high $50 price target from Benchmark (dated Oct 2025, part of the ongoing bull case) plus a UK 1,000+-qubit deployment contract via Rigetti's own IR. 90-day return +38.5% per SimplyWall.st.
- Why: Analyst price-target momentum plus a genuine multi-year contract announcement gives RGTI a firmer company-specific catalyst than QBTS's more diffuse government-funding narrative, though still trading in the same speculative quantum basket.
- Impact: 775K volume, moving same direction/session as QBTS (+16.06%) — strong sector read-through; this is a basket trade on quantum sentiment, not RGTI-isolated news.
- Horizon: LONG_TERM lean if the UK deployment contract is real and multi-year (structural), but trading SHORT_TERM today since price action rides the sector-wide QBTS-driven pop rather than a fresh RGTI-specific headline dated today.
- Opportunity cost: Directly competes with QBTS for the same quantum-computing trade — corr-gate.mjs would likely flag them as correlated if both opened; only one should be sized to avoid doubling up on one sector bet within the 3-trades/week cap.

### Setup Scan (16:39 ET, cloud)
60 candidates checked, 0 errors, 1 hit (grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| WLDS | B | Momentum confluence | daily | ADX14 33.63, EMA9 1.98 > EMA21 1.70, RSI14 86.46 |

No grade-A hits -> no Telegram alert per STEP 4 rule. Same hit as the 11:56 ET
run today, curr_px drifted 3.33 -> 3.11. Candidate only, not an order — feed
to `/trade` if pursued (full safety-check gate applies).

### Setup Scan (18:38 ET, cloud)
60 candidates checked, 3 errors, 1 hit (grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| WLDS | B | Momentum confluence | daily | ADX14 33.63, EMA9 1.98 > EMA21 1.70, RSI14 86.46 |

Errors: META, CMCSA, MA all failed with "DNS resolution failure" on the
Alpaca bars endpoint (transient network issue, not a data-quality flag on
those tickers). No grade-A hits -> no Telegram alert per STEP 4 rule. Same
hit as the two earlier runs today, curr_px unchanged at 3.11 vs 16:39 ET.
Candidate only, not an order — feed to `/trade` if pursued (full
safety-check gate applies).

## 2026-07-27 — Market-Open re-check (local session, technicals RESTORED)

Operator-authorized re-run of market-open + midday at 12:36 CT. The earlier
cloud market-open entry today decided HOLD because `mcp__tradingview-data__*`
was absent from that session and the confluence rule was uncheckable. That
blocker does NOT apply locally — the MCP is connected here, so this run redoes
the check the cloud run could not perform.

Timing caveat: market-open is a 08:30 CT routine and this ran at 12:36 CT.
Every quote was pulled live; no morning price was reused.

### Account (live, paper-api.alpaca.markets)
- Equity $100,000 | Cash $100,000 | Buying power $400,000 | 0 positions | 0 open orders

### Confluence check — `combined_analysis`, 1D, real-time
Rule: no entry unless >=2 of {VWAP, RSI, 200-SMA, insider} agree AND a catalyst
is documented.

| Ticker | Price | Chg% | RSI(14) | vs SMA200 | MACD | ADX / DI | Grade | Bullish signals |
|--------|-------|------|---------|-----------|------|----------|-------|-----------------|
| CRWV | 70.25 | -4.81 | 34.35 bearish, falling | below (96.27) | bearish | 23.1, -DI | Avoid (0) | 0 of 4 |
| NBIS | 185.47 | -5.72 | 41.92 neutral, falling | above (140.29) | bearish | 13.7, -DI | Avoid (0) | 1 of 4 |
| OPEN | 3.80 | -1.30 | 34.42 bearish, falling | below (5.66) | bearish | 17.9, -DI | Avoid (0) | 0 of 4 |
| OKLO | 40.72 | -0.20 | 33.00 bearish, rising | below (77.87) | bearish | 23.0, -DI | Avoid (0) | 0 of 4 |
| META | 596.87 | -1.71 | 44.31 neutral, rising | below (637.49) | bearish | 15.6, -DI | Avoid (0) | 0 of 4 |

Every name: stock_score 0, grade "Avoid", MACD bearish crossover, -DI > +DI.
Best case (NBIS) reaches 1 of 4 and still fails the >=2 gate. OPEN is below its
lower Bollinger band with stochastic 2.7 — oversold, not a confluence buy.
Sentiment blocks returned 0 posts and news count 0 for all five (the known
upstream degradation, unchanged).

### Decision
**HOLD — no trades.** Not a tooling failure this time: technicals were live and
every candidate genuinely failed the confluence rule on a broadly bearish tape.
No orders placed, no stops touched. STEP 8 commit-and-push skipped per "skip if
no trades fired" (this research entry committed locally, not pushed).

### Midday scan — NO-OP (verified, not assumed)
`positions` returned 0 and `orders` returned 0. Nothing to cut at -7%, no
trailing stops to cancel or tighten, no thesis to invalidate. Steps 3-5 had an
empty input set.

### Risk Factors / operator flags
- **PDT rule is currently uncheckable.** market-open STEP 3 requires
  "daytrade_count leaves room (PDT 3/5)", but Alpaca's `/account` response
  contains no `daytrade_count` and no `pattern_day_trader` key. Verified the
  wrapper does not trim the payload (`scripts/alpaca.sh account` is a bare
  passthrough); the full key list has only `intraday_adjustments`. Today this
  was moot (no trades), but the hard-rule gate silently cannot enforce PDT.
  Today's earlier cloud entry asserts "Daytrade count: 0" — that number is not
  obtainable from this endpoint and should be treated as unverified.
- **Account/memory mismatch.** Live paper equity is $100,000, but the TRADE-LOG
  Day-0 baseline and CLAUDE.md both describe a ~$10,000 account. Percentage
  rules (20% max position, 1% ATR risk) scale, but a 20% position is now
  $20,000, not $2,000. Needs an operator decision before the next entry.
- FOMC Wed 7/29, heaviest earnings week of the season, Iran-pause headline
  reversal risk — all unchanged from this morning's entries.

## 2026-07-28 — Pre-Market Research (cloud routine)

Ran the scheduled pre-market workflow via Apify RAG web browser. `tradingview-data`
MCP tools are absent again this session (`ToolSearch` returns no matches) —
same outage flagged in every recent session; `combined_analysis` is still
unavailable so the confluence rule (≥2 of VWAP/RSI/200-SMA/insider) cannot be
satisfied for any candidate. Separately, Apify's search choked on every query
containing "S&P" — the literal `&` broke the query and returned junk results
(Wikipedia's "S" page, a Spotify artist) instead of an error, for the S&P
futures and sector-momentum queries. Not a Yahoo-ban issue; fell back to
native WebSearch (with the standard Yahoo domain block) for those two plus
VIX/catalysts/earnings/econ-calendar, per the routine's fallback rule.

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 14 straight trading days
  since the Day-0 baseline (2026-07-08 launch).

### Market Context (Apify + WebSearch fallback, Tue 7/28 premarket ET)
- **Oil — continued reversal**: WTI $81.05 (-1.89%), Brent $86.40 (-2.22%)
  (oilprice.com, live delayed feed). Extends the weekend de-escalation move
  logged yesterday (was ~$83-90); no fresh Iran-Oman headline found today,
  reads as continuation, not a new catalyst.
- **S&P 500 futures**: +~0.9% premarket (CNBC/Schwab via WebSearch) — helped
  by the oil pullback easing yield pressure (10Y ~4.64%, off overnight highs)
  and firm PMI prints (~53-54, services + manufacturing both expanding).
- **VIX**: 18.67 at Mon 7/27 close (CNBC/FRED via WebSearch) — down from
  yesterday's 18.93-19.20 read, "sleepy" per search summary. Low vs. the
  FOMC + megacap-earnings pileup this week — a complacency flag, not a
  bullish all-clear.
- **FOMC**: meeting runs today-tomorrow (7/28-29); decision + Chair Kevin
  Warsh press conference Wed 7/29 2:00pm ET. Consensus now: hold at
  3.50-3.75%, with the debate being whether a September hike stays on the
  table given oil-driven inflation risk — a softer framing than yesterday's
  "~35% hike-this-meeting" CME print; take as the newer, not necessarily
  more reliable, read.
- **Earnings — today (7/28)**: Coca-Cola, Boeing, Ford, Visa, Tilray Brands
  (none held/watchlist). Wed 7/29 (FOMC day): SoFi, P&G, Meta, Microsoft.
  Thu 7/30: Sirius XM, Roblox, Apple, Amazon. Same heaviest-week-of-the-
  season setup as yesterday's log — FOMC + Mag-7 earnings compressed into
  48 hours.
- **Econ calendar today**: Consumer Confidence, Richmond Fed mfg survey,
  Dallas Fed retail outlook, Advance Intl Trade in Goods, Advance
  Retail/Wholesale Inventories, FHFA HPI, S&P Case-Shiller (10am-ish ET
  cluster). No CPI/PPI today — next CPI print is Aug 12.
- **Sector YTD (XLK/XLF/XLE/XLU)**: XLK (Technology) +~32-33%, XLE (Energy)
  +~26-27%, XLU (Utilities) +~5%, XLF (Financials) ~-5% (Seeking
  Alpha/Morningstar/ETF trackers via WebSearch — first clean quantified read
  after two straight sessions flagging this as a Yahoo-only gap). Rotation
  narrative: capital into Energy/Industrials/Materials "real economy" names,
  Financials the clear laggard.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None generated. Same root cause as every recent session: no
`combined_analysis` technical block means the confluence rule (≥2 of
VWAP/RSI/200-SMA/insider signal) can't be satisfied for any watchlist name.
Sector momentum (XLK/XLE strength) and today's macro setup (oil relief +
premarket futures green) are real but explicitly insufficient substitutes
for a documented technical setup per TRADING-STRATEGY.md.

### Risk Factors
- **Tooling gap persists (3rd+ consecutive session)**: `tradingview-data`
  MCP still absent — Price Action confluence blocked across pre-market,
  market-open, and setup-scan alike. Needs operator attention; this is no
  longer transient.
- **Apify query-encoding bug**: literal `&` in "S&P 500" queries breaks the
  RAG web browser's search (returns dictionary/Wikipedia junk for "S"
  instead of an error or empty result) — a silent-failure mode distinct
  from the Yahoo-leakage issue already documented in CLAUDE.md. Worth
  URL-encoding or rephrasing S&P queries (e.g. "SPX", "S and P 500") in the
  routine going forward to avoid relying on WebSearch fallback every run.
- FOMC decision + Chair press conference Wed 2pm ET, stacked directly against
  Meta/Microsoft earnings the same day — elevated single-session gap risk.
- VIX at 18.67 (sleepy) heading into that stack reads as underpriced
  volatility risk, not confirmed calm.
- Oil's de-escalation is 2 days old and reversible; a snapback would hit
  the same yield/futures channel that's currently helping the tape.

### Decision
**HOLD — no trades.** Missing technical-data tool blocks confluence for
every candidate; premarket is constructively green (oil relief, firm PMI)
but that's not a substitute for a documented technical setup, and FOMC +
Mag-7 earnings this week argue for patience over new risk anyway. No orders
touched.

## 2026-07-28 — Gappers (auto-scan 08:10 ET, cloud)

**Data bug found and fixed before this run's results were trusted.**
`scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0) initially returned
4 candidates (WLDS -11.54%, RR -9.9%, BMNR +8.31%, BREA +6.66%). Cross-checking
BMNR against `scripts/alpaca.sh bars`/`quote` before writing it up showed the
script's "prev_close" was Alpaca's `prevDailyBar` (Fri 7/24 close, $15.815)
instead of the actually-most-recent completed session (Mon 7/27 close,
$17.90) — Alpaca's snapshot endpoint carries `dailyBar` forward as "last
completed session" pre-market, and `prevDailyBar` is one session further
back. Using the wrong field manufactured an 8.3% "gap" out of a stock that
was actually down ~4.5% from Monday's close. All 4 raw candidates had the
same defect. Separately, KLIC/RR/AGMH (which the fix then surfaced) turned
out to be citing a **stale Monday-close quote** (bid/ask spread noise from
`latestQuote` at Mon 20:00 UTC, no trades since) as "current price" against
today's dailyBar — another false-gap source, not a real premarket move.

Fixed both bugs in `scripts/gappers-alpaca.sh`: (1) prev_close now prefers
`dailyBar.c` over `prevDailyBar.c`; (2) current price now requires a
quote/trade timestamped *today*, picking whichever of quote/trade is freshest
and skipping the symbol entirely if neither is fresh (no fabricated price
from stale data). Also fixed a latent bug where a zero/stale quote could
mask a valid same-timestamp trade price.

**Retroactive flag**: this same prevDailyBar bug was already visible but
unresolved in the 2026-07-27 pre-market entry — that day's KLIC row
(-13.48%, prev_close $101.26) was flagged "possibly a stale prev_close
reference" but not root-caused. BMNR's 2026-07-27 entry (+9.86%,
"volume 1.38M") likely has the same defect. Treat gap%/prev_close values in
gapper entries dated 2026-07-24 through 2026-07-27 as unverified; re-check
before acting on any of them.

**Post-fix result: 0 qualifying gappers today.** Corrected scan surfaced only
WLDS (+29.07% vs Monday's $2.89 close, on ONE 125-share trade at 08:02 ET —
not a reliable print). Applied full filter (|gap| >= 5%, price >= $3,
premarket_volume >= 50,000 where populated): WLDS's populated volume field
(39,125 — Monday's full-day volume, not true premarket volume; Alpaca's
snapshot has no distinct premarket-volume field) is below the 50K floor →
excluded. No candidates cleared all three gates. No deep-dive run (nothing
to dive into). Saved `data/premarket_gappers_2026-07-28.json` with an empty
`gappers` array and a note explaining why. Telegram/ClickUp notify skipped
per the routine's own rule (hits == 0, no scan error).

### Decision
**HOLD — no trades, no alert.** Root-caused and fixed a real data-quality
bug in the shared gappers scanner rather than logging false signals; today's
corrected scan has zero real premarket gappers on the watchlist.

## 2026-07-28 — Gappers (auto-scan 10:09 ET, cloud)

Second same-day run (market open, first hour). Full watchlist scan via
`scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0), fixed-script
version (see 08:10 ET entry above for the prevDailyBar bug fix).

**Deep-dive cap: 5** (ranks 6-10 would get quick-scan only — not applicable
this run, only 1 candidate cleared the filters, see below).

Part A, quick-scan table for all qualifying rows:

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | NBIS | $175.19 | +5.43% | 221,862 | AI-infra momentum continuation vs. a fresh Seeking Alpha Sell note |

8 raw candidates cleared |gap| >= 5% (AGMH -15.94%, BKSY -7.91%, SYNA -7.45%,
ZIM +7.17%, UMAC -7.15%, BWLP -6.93%, LPG +6.72%, NBIS +5.43%). After the
full filter (price >= $3, premarket_volume >= 50,000 where populated): AGMH
excluded on price ($0.9163 < $3); BKSY/SYNA/ZIM/UMAC/BWLP/LPG all excluded
on the volume floor (1,809-12,732, all well under 50K). Only NBIS cleared
all three gates. Note: the "volume" field here is the prior completed
session's full-day volume, not true premarket volume (known
`gappers-alpaca.sh` limitation, documented in the script and CLAUDE.md) —
applied as-is per the routine's own filter definition.

#### Deep dive: NBIS $175.19 +5.43%

- Catalyst: NBIS is up 5.43% intraday to $175.19 vs. Monday's $166.17
  close. No single fresh company-specific news event today; reads as
  continuation of the "neocloud" AI-infrastructure trade — reinforced by
  recent coverage of Nvidia's $2B anchor equity stake, Nebius' GB300
  Blackwell "Exemplar Cloud" status, and large standing contracts with Meta
  (~$27B) and Microsoft. Its Nasdaq-100 inclusion (cited in older coverage)
  dates to a prior quarter and is not today's driver. One day after a fresh
  Seeking Alpha Sell initiation (Jul 27, $95 target, ~49% downside) arguing
  GPU capacity constraints are easing and eroding NBIS's pricing power.
- Why: Momentum/rotation buying in AI-capex-beneficiary names ahead of its
  Aug earnings print (source conflict on date — Public.com says Aug 10,
  Seeking Alpha's Jul 27 piece says Aug 6, flagging as a gap) is pulling
  NBIS higher despite, not because of, the newly published bear thesis.
- Impact: The `premarket_volume` figure (221,862) is actually the prior
  session's full-day volume (Alpaca snapshot limitation), not true intraday
  volume, and is far below NBIS's own ~18.33M average daily volume — can't
  confirm real conviction behind the move. High beta (~3.19x) plus an
  actively contested bull/bear split in sell-side research reads as
  volatile repositioning, not a confirmed sustainable breakout.
- Horizon: SHORT_TERM — no durable new catalyst today (index-inclusion news
  is stale); looks like earnings-anticipation positioning colliding with a
  freshly published bear note. High-beta AI names like this tend to give
  back gap moves fast without a fresh confirming print.
- Opportunity cost: Account is flat (0 open positions), so no existing
  holding is displaced. NBIS is already a WATCHLIST.md "watch" item tagged
  "Microsoft invested." It's the only gapper clearing all filters today, so
  there's no competing candidate to rank it against. Whether it clears 2:1
  reward:risk is unclear — the bear ($95 target) and implied bull cases
  point in very different directions, and a stop respecting the "never
  within 3% of current price" rule needs a firmer near-term target than
  either single source gives. Research only, no size recommended.

### Decision
**HOLD — no trades.** 1 qualifying gapper (NBIS), deep-dived per the
routine. Contested bull/bear setup with no fresh single-source catalyst
and earnings ~1-2 weeks out — does not clear the documented-catalyst bar
for a same-day entry. Notify sent (hits > 0). No orders touched; execution
only happens via market-open or /trade with full safety-check gate.

## 2026-07-28 — Gappers (auto-scan 11:16 ET, cloud)

Third same-day run (mid-morning). Full watchlist scan via
`scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0).

**Deep-dive cap: 5** (not applicable this run — only 2 candidates cleared
all filters, see below; both deep-dived).

Part A, quick-scan table for all qualifying rows:

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | NBIS | $179.065 | +7.63% | 447,201 | AI-infra momentum reflex bounce, no fresh dated catalyst found |
| 2 | BW | $9.22 | +6.96% | 51,253 | No dated catalyst for today's bounce; legal/dilution overhang still live per 2d-old coverage |

8 raw candidates cleared |gap| >= 5% (AGMH -16.78%, NBIS +7.63%, BKSY
+7.63%, ZIM +7.43%, APT -6.96%, BW +6.96%, UMAC -6.9%, LPG -6.71%, SYNA
+5.9% — 9 counting AGMH). After the full filter (price >= $3,
premarket_volume >= 50,000 where populated): AGMH excluded on price
($0.9071 < $3); BKSY (23,620), ZIM (5,719), APT (916), UMAC (27,044), LPG
(10,313), SYNA (14,951) all excluded on the volume floor. Only NBIS and BW
cleared all three gates. Note: the "volume" field is the prior completed
session's full-day volume, not true premarket volume (known
`gappers-alpaca.sh` limitation) — applied as-is per the routine's own
filter definition, consistent with the 10:09 ET run.

Notable exclusion worth flagging as research-only (does not change the
Decision below, since it fails the volume gate): ZIM's search results
surfaced a reported Hapag-Lloyd acquisition of ZIM for $4.2B (stocktwits),
which if confirmed via a primary source (SEC 8-K/press release) would be
a materially different, LONG_TERM-shaped catalyst vs a headline spike —
worth a follow-up check outside this routine's volume-gated scope.

#### Deep dive: NBIS $179.065 +7.63%

- Catalyst: NBIS up 7.63% intraday to $179.065 vs Monday's $166.37 close
  (already above the 10:09 ET print of $175.19 earlier today). No fresh
  company-specific news dated today found — most recent coverage is a ~9%
  drop "Friday" (~Jul 24) amid AI-stock risk-off rotation, with NBIS still
  up ~135% YTD per one source. Reads as continuation/reflex-bounce in the
  same neocloud AI-infra trade flagged in the 10:09 ET deep dive (Nvidia
  stake, GB300 Blackwell cloud status, Meta/Microsoft contracts), not a
  new event.
- Why: No new dated catalyst confirmed; likely mechanism is momentum/dip-
  buying reflex within the AI-infrastructure trade after last week's
  risk-off pullback — same dynamic as the 10:09 ET entry (earnings-
  anticipation positioning), still contested by the Jul 27 Seeking Alpha
  Sell note ($95 target).
- Impact: `premarket_volume` (447,201) is Alpaca's prior-completed-session
  full-day volume, not true intraday volume (documented gappers-alpaca.sh
  limitation) — still far below NBIS's ~18.33M average daily volume, so
  can't confirm conviction. Stock has now printed a higher gap on the
  third same-day scan (175.19 at 10:09 ET -> 179.065 now), trending
  further from Monday's close rather than fading — but still no
  confirming news.
- Horizon: SHORT_TERM — unchanged from the 10:09 ET call: no durable new
  catalyst, high-beta AI name, contested bull/bear split in sell-side
  research.
- Opportunity cost: Account flat (0 positions per today's market-open
  log); NBIS is a WATCHLIST.md "watch" item, not currently held. This is
  the second same-day scan to flag NBIS as a qualifying gapper —
  persistence across scans is a mild positive signal, but the unresolved
  2:1 R:R question from the 10:09 ET entry stands: stop sizing needs a
  firmer target than the conflicting bull/bear notes provide.

#### Deep dive: BW $9.22 +6.96%

- Catalyst: BW up 6.96% to $9.22 vs Monday's $8.62 close. Most recent
  dated coverage (Jul 26) reports BW down ~33% over the prior 30 days
  ($14.45 Jun 26 -> $9.62 Jul 24) on "legal and dilution pressures" — a
  headwind, not an explanation for today's up-move. An older item (May
  11) cites a separate +17% premarket pop on an earnings/bookings beat —
  stale and unrelated to today. No fresh same-day catalyst identified.
- Why: Unconfirmed for today. Current $9.22 is still below the Jul 24
  close of $9.62 cited in the legal/dilution writeup, so this reads more
  like continued volatility around a depressed level than a confirmed
  relief rally — could be short-covering or dip-buying with no news
  trigger.
- Impact: `premarket_volume` (51,253) barely clears the 50,000 floor — of
  8 gap-qualifying symbols tonight, only NBIS and BW cleared the volume
  gate at all. Thin volume plus an unresolved legal/dilution overhang and
  no confirming news reads as a noise-level move at a depressed price,
  not a durable reversal.
- Horizon: SHORT_TERM — legal/dilution overhang from the Jul 26 writeup
  is still the dominant unresolved thesis; nothing found here flips it to
  structural.
- Opportunity cost: Not a current holding. Account flat (0 positions).
  Given the unconfirmed catalyst and still-live legal/dilution overhang,
  this ranks behind NBIS on today's 2-name list — would need a confirmed
  catalyst before it clears the Confluence rule for a same-day entry;
  recommend passing.

### Decision
**HOLD — no trades.** 2 qualifying gappers (NBIS, BW), both deep-dived
per the routine. Neither clears the documented-catalyst bar for a
same-day entry — NBIS is a contested-thesis momentum continuation, BW has
an unresolved legal/dilution overhang with no confirming bounce catalyst.
ZIM's reported M&A (Hapag-Lloyd, $4.2B) is flagged for follow-up outside
this routine since it fails the volume gate here. Notify sent (hits > 0).
No orders touched; execution only happens via market-open or /trade with
full safety-check gate.

## 2026-07-28 — Setup Scan (auto-scan 16:38 ET, cloud)

### Setup Scan (16:38 ET, cloud)
60 candidates checked, 6 errors, 2 hits (grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| RTX | B | Momentum confluence | daily | ADX14 33.53, EMA9 204.05 > EMA21 197.84, RSI14 77.51 |
| WLDS | B | Momentum confluence | daily | ADX14 37.53, EMA9 2.16 > EMA21 1.80, RSI14 69.78 |

Errors: TRMD, BKSY, UFO, UMAC, RCAT, LAKE all failed with "DNS resolution
failure" on the Alpaca bars endpoint (transient network issue, not a
data-quality flag on those tickers). No grade-A hits -> no Telegram alert
per STEP 4 rule. WLDS is a repeat hit from the 11:56/16:39/18:38 ET cloud
scans on 2026-07-27 — curr_px now 3.83 (up from 3.11 at last check), still
grade B only (stock_score gate unavailable in cloud variant). RTX is a new
hit this run, overbought on RSI14 77.51. Candidates only, not orders — feed
to `/trade` if pursued (full safety-check gate applies).

## 2026-07-28 — Setup Scan (auto-scan 18:38 ET, cloud)

### Setup Scan (18:38 ET, cloud)
60 candidates checked, 0 errors, 2 hits (grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| RTX | B | Momentum confluence | daily | ADX14 33.53, EMA9 204.05 > EMA21 197.84, RSI14 77.51 |
| WLDS | B | Momentum confluence | daily | ADX14 37.53, EMA9 2.16 > EMA21 1.80, RSI14 69.78 |

Unchanged from the 16:38 ET run two hours earlier — same two grade-B hits,
same values (post-close, no new bars since last scan). No grade-A hits ->
no Telegram alert per STEP 4 rule. Candidates only, not orders — feed to
`/trade` if pursued (full safety-check gate applies).

## 2026-07-29 — Pre-Market Research (cloud routine)

Apify RAG web browser returned "Monthly usage hard limit exceeded" on every
query (all 6 topics) — full outage, not a per-query fluke. Fell back to
native WebSearch (Yahoo domains blocked) per the routine's fallback rule for
the entire session. `tradingview-data` MCP is still absent (`ToolSearch`: no
match) — 4th+ consecutive session; confluence rule (>=2 of VWAP/RSI/200-
SMA/insider) remains unsatisfiable for any candidate.

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 15 straight trading days
  since the Day-0 baseline (2026-07-08 launch).

### Market Context (WebSearch fallback, Wed 7/29 premarket ET)
- **Oil — sharp reversal from yesterday's relief move**: Brent $89.53
  (+4%+ overnight) on renewed Middle East hostilities; WTI last printed
  $79.28 (-4.03%) at Tue close, pre-open figures conflict slightly by
  source (oilprice.com vs Forbes) — direction is consistent (up, geopolitical
  risk-on) even if the exact print differs. Reverses the 2-day de-escalation
  trend flagged in yesterday's log; confirms that call's own risk-factor
  ("oil relief is reversible") the very next session.
- **S&P 500 futures**: +0.18-0.24% premarket (CNBC/Benzinga) — muted given
  today's stack of catalysts; SPY +0.24% at $742.65 premarket. Polymarket
  implying ~70% odds of a green open.
- **VIX**: 18.62 (range 18.22-19.52 intraday) — essentially flat vs.
  yesterday's 18.67 close, still "sleepy" heading into FOMC day itself.
- **FOMC**: today, not tomorrow — decision + Chair Kevin Warsh press
  conference at 2:00pm ET. Consensus: hold at 3.50-3.75%; ~30% priced odds
  of a hike per one source (higher than yesterday's ~35%-at-this-meeting
  read from CME, so estimates are still noisy across sources — treat as a
  live, unresolved binary, not a settled hold).
- **Earnings — today, FOMC day**: Procter & Gamble, Vertiv, General
  Dynamics, Aon, Microsoft, Meta Platforms, Lam Research, Arm Holdings,
  Qualcomm, Starbucks. None held/watchlist, but MSFT/META/QCOM/ARM/LRCX
  landing same-day as the rate decision makes this the single heaviest
  catalyst-density session of the challenge so far.
- **Econ calendar today**: No CPI/PPI (next CPI Aug 12). Consumer
  Confidence at 10am ET is the other scheduled print; FOMC dominates.
- **Semiconductor breakdown (new since yesterday's log)**: Nasdaq 100 -1.8%
  Tue, nearing correction (-10% from highs) on a report a Chinese
  state-backed firm began mass-producing immersion DUV lithography
  machines — a direct competitive threat to ASML's moat. NVDA and ASML each
  -4%+, SK Hynix -13% (Korea), Philadelphia Semiconductor Index down a
  4th straight session. Sector momentum in tech/semis is actively negative,
  not a "buy the dip" signal under the momentum-following rule.
- **Sector YTD**: search returned Energy +3.6%, Utilities +2.2%,
  Industrials +1.6%, Technology +0.4%, Financials 0.0%, Consumer
  Discretionary -6.1% (source: stated "as of 7/24" read) — this conflicts
  sharply with yesterday's logged XLK +32-33%/XLE +26-27% read from a
  different source set. Flagging the discrepancy rather than reconciling
  it; don't trust either figure alone for sizing until `tradingview-data`
  is back and gives a clean technical/price-based sector read.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None generated (documented-catalyst + confluence bar not cleared):
1. **Energy watch-only** (XLE / integrated majors) — catalyst is Brent's
   4%+ geopolitical spike, but that's a macro/geopolitical driver, not a
   company-specific catalyst, and confluence can't be checked without
   `tradingview-data`. No entry; revisit only if oil holds the move and a
   specific name shows a real technical setup once the tool is back.
2. **Avoid new semiconductor/AI-capex longs** — sector momentum is
   actively negative (Nasdaq 100 near correction, NVDA/ASML/SK Hynix all
   down hard on the China DUV story). Per the sector-momentum rule this is
   a "stay out," not a dip-buy, until the selloff shows a documented
   stabilization catalyst.
3. **No pre-FOMC positioning** — with Fed decision + Warsh presser +
   MSFT/META/QCOM/ARM/LRCX earnings all landing today, any new entry ahead
   of 2pm ET is a binary bet on macro/earnings outcomes, not a
   strategy-compliant technical setup. Wait for the dust to settle.

### Risk Factors
- **FOMC decision day itself** (2pm ET) stacked directly against 5 major
  earnings reports (MSFT, META, QCOM, ARM, LRCX) — the single highest
  single-session gap-risk day of the challenge to date.
- **Semiconductor/AI-capex correction**: Nasdaq 100 near -10% correction
  territory; a China chipmaking-competition story (DUV lithography) is a
  structural threat narrative, not a one-day headline — could keep
  bleeding into tech-heavy names regardless of Fed outcome.
- **Oil re-spiking on Middle East escalation** — reverses the 2-day relief
  move, re-introduces inflation-via-energy-prices risk right into an
  already-live FOMC decision.
- **Apify fully down (monthly cap hit)** — no fallback within Apify itself;
  entirely dependent on native WebSearch until the quota resets or is
  raised. Operator: check Apify billing/plan if this routine needs it
  reliably again before next reset.
- **`tradingview-data` MCP still absent** — 4th+ consecutive session;
  confluence rule has now been unsatisfiable for this entire stretch. Same
  operator flag as yesterday, escalating in duration.
- **Sector-YTD source conflict** (see Market Context) — don't size or rank
  sector bets off either figure until resolved.

### Decision
**HOLD — no trades.** FOMC decision + 5-name mega-cap earnings pile land
same-day, semiconductors are in an active technical breakdown, and the
confluence rule remains unsatisfiable with `tradingview-data` still down.
Zero positions, zero orders — patience over activity. Notify sent (Apify
outage is worth a heads-up; no trade signal to alert on otherwise).

## 2026-07-29 — Gappers (auto-scan 09:11 ET, cloud)

Full watchlist scan via `scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0).
Apify RAG web browser hit its monthly usage hard limit on the first query —
fell back to WebFetch against Benzinga/StockTitan per the routine's documented
fallback path.

**Deep-dive cap: 5** (not applicable this run — only 1 candidate cleared all
filters, deep-dived below).

Part A, quick-scan table for all qualifying rows:

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BE | $183.88 | +10.08% | 1,007,762 | Q2 2026 earnings beat + raised FY guidance |

Only 1 raw candidate cleared |gap| >= 5% on the full watchlist scan (BE
+10.08%). Price >= $3 and volume >= 50,000 (prior-session full-day volume,
per the routine's own filter definition) both clear easily.

#### Deep dive: BE $183.88 +10.08%

- Catalyst: Record Q2 2026 revenue of $1.065B (first quarter above $1B,
  +165.5% YoY, $935.4M product revenue), FY2026 guidance raised to
  $3.9-4.2B revenue with ~34% non-GAAP gross margin and $800-900M operating
  income. Also announced an expanded $25B Brookfield financing partnership
  (up from $5B), a strategic Oracle agreement for up to 2.8GW of fuel cell
  deployment for AI infrastructure, and a $1.7B project investment from
  Industrial Development Funding/Oaktree tied to Nebius AI infra.
- Why: Earnings beat plus raised guidance pulls in momentum buyers, layered
  on a structural AI-datacenter power-demand narrative (Oracle, Nebius
  deals) rather than a single-metric beat — broadens the buyer base beyond
  quant/momentum flow.
- Impact: `premarket_volume` (1,007,762) is Alpaca's prior-completed-session
  full-day volume, not true intraday volume (documented gappers-alpaca.sh
  limitation) — clears the routine's 50k floor easily. Multiple concurrent,
  dollar-quantified catalysts (guidance raise + Brookfield + Oracle +
  Nebius/Oaktree) argue against a single-headline spike; no other watchlist
  name moved in sympathy today, so this reads BE-specific, not sector-wide.
- Horizon: LONG_TERM — structural growth drivers (raised guidance,
  multi-billion financing/hyperscaler commitments for AI power) align with
  Bloom Energy's Energy-sector fuel-cell thesis already flagged on
  WATCHLIST.md, not a one-day headline fade.
- Opportunity cost: Account flat (0 open positions, weekly trade count 0/3
  per Jul 28 EOD log) — this displaces nothing directly. Taking it would use
  1 of 3 weekly trade slots and up to 20% of equity; BE is highly volatile
  post-gap so entry stop distance needs sizing (`scripts/size.mjs`) before a
  2:1 R:R can be confirmed — not assessed here, research only.

### Decision
**HOLD — no trades placed by this routine.** 1 qualifying gapper (BE,
+10.08% on a real earnings + guidance + multi-billion partnership catalyst
bundle) — the strongest documented catalyst seen across recent gappers runs,
worth flagging to the operator, but this routine is research-only per STEP 8.
A same-day entry still needs the Confluence rule check (>= 2 of
VWAP/RSI/200-SMA/insider signal) and a sized stop via `/trade` or
`market-open` before anything gets ordered. Notify sent (hit > 0).

## 2026-07-29 — Gappers (auto-scan 11:10 ET, cloud)

Full watchlist scan via `scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0).
Apify RAG web browser again returned "Monthly usage hard limit exceeded" on
every query (same cap flagged in the 09:11 ET run this morning) — fell back
to WebFetch (Benzinga) for catalyst headlines and WebSearch (Yahoo Finance
blocked via `blocked_domains`) for the deep-dive fundamentals queries.
JSON saved to `data/premarket_gappers_2026-07-29_1110.json` (time-suffixed,
not the bare `${DATE}.json`, to avoid clobbering the 09:11 run's BE entry
already committed under that filename).

**Deep-dive cap: 5.** 8 raw candidates cleared |gap| >= 5% on the full
watchlist scan; `premarket_volume` is Alpaca's prior-completed-session
full-day volume (documented `gappers-alpaca.sh` limitation, not true
intraday premarket volume) so that filter leg was not applied per the
routine's own "if that field is populated" carve-out — all 8 clear price
>= $3 and are kept. Ranks 6-8 got quick-scan only.

Part A, quick-scan table for all 8:

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BW | $7.57 | -7.34% | 30,573 | Buybacks + $61.4M note redemption failed to reverse declining momentum |
| 2 | LPG | $42.11 | -7.08% | 5,173 | No negative catalyst found; added dual-fuel vessel "Areion" to fleet |
| 3 | BWLP | $23.105 | +7.02% | 2,572 | Cited in generic "Undervalued Energy Stocks" piece; no company-specific headline |
| 4 | SYNA | $114.395 | +6.95% | 4,043 | onsemi agreed to acquire Synaptics in ~$7B all-stock deal |
| 5 | APT | $4.625 | -6.94% | 106 | null — Benzinga conflated with unrelated "Aptos" crypto token |
| 6 | TRMD | $27.845 | -6.65% | 20,016 | Sector piece on product-tanker tailwinds; no TORM-specific headline |
| 7 | KLIC | $79.255 | -6.34% | 14,377 | Broad semiconductor-sector selloff extending industry-wide |
| 8 | UMAC | $17.47 | -5.05% | 18,726 | Robotics-startup AMD/military-chip headline; sector read-through only |

#### Deep dive: BW $7.57 -7.34%

- Catalyst: Babcock & Wilcox reported Q1 2026 revenue of $214.4M (+42.55% vs
  consensus, +44% YoY) and adjusted EBITDA of $16.1M (+296% YoY), net debt
  down to 0.42x TTM EBITDA. Despite this, shares are down ~33% over the past
  30 days on multiple securities class-action lawsuits alleging undisclosed
  related-party ties to largest shareholder BRC Group Holdings. Plans to
  redeem all $61.4M of its 6.50% Senior Notes on Aug 13, 2026 and authorized
  a $50M buyback starting after the Q2 10-Q filing.
- Why: Litigation overhang (undisclosed related-party allegations) is
  dominating price action despite a strong operating quarter and debt
  paydown — governance/legal risk outweighing fundamentals.
- Impact: Not a one-day spike — continuation of an existing 30-day ~33%
  decline; today's move is a fresh leg down, not an isolated headline event.
  Volume thin (30.6K, prior full-session), no sector read-through — company
  -specific legal risk.
- Horizon: SHORT_TERM-leaning — trend still actively deteriorating with no
  resolution catalyst for the litigation; no basis for a swing-hold thesis.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — no holding
  displaced. But active unresolved securities-fraud litigation plus a still
  -falling 30-day trend fails the Entry Checklist's clean-catalyst bar; reads
  as a re-test of broken support, not a fresh setup. Skip.

#### Deep dive: LPG $42.11 -7.08%

- Catalyst: No negative company-specific headline found. Recent news is
  actually positive — a $1.00/share irregular cash dividend (record date
  Jul 27, payable Aug 12, ~$42.8M total), Russell growth/small-cap index
  additions in late June, a new VLGC newbuild order with HD Hyundai, and
  agreements to sell three older VLGCs for ~$256M. TTM fundamentals strong:
  $481.5M revenue, 43.6% operating margin, $4.54 diluted EPS TTM; analyst
  consensus "Buy," $51 target (~+25% from spot).
- Why: No identified negative catalyst explains a -7% move; most likely a
  mechanical pullback (partial ex-dividend adjustment or profit-taking after
  the recent index-inclusion/dividend run). Flagging as unexplained.
- Impact: Fundamentals/analyst sentiment remain favorable; could mean-revert
  if this is technical rather than fundamental, but confidence is low
  without a confirmed driver — data-quality flag, not a validated thesis.
- Horizon: Undetermined — no catalyst to anchor a horizon call. Do not act
  until the driver is confirmed by same-day news.
- Opportunity cost: No holding displaced (0/6 open). Fails the Entry
  Checklist's catalyst requirement outright with no confirmed driver.

#### Deep dive: BWLP $23.105 +7.02%

- Catalyst: No BWLP-specific news found. Standalone fundamentals strong —
  Q1 2026 EPS $1.08 (vs $0.30 YoY, +1,113% YoY), net income $164.3M (+257%
  YoY), a $1B order for 8 new VLGCs, 9.1% dividend yield, and a Jul 10 sale
  of the BW Elm vessel (+$36M gain, +$64M cash).
- Why: Plausibly sector-wide LPG/tanker strength (Iran-tension-driven
  freight rates) layered on already-strong standalone earnings/fleet news,
  rather than one specific headline.
- Impact: Same-day divergence from LPG (down -7.08% today) undercuts a clean
  "sector tailwind" read — a genuine LPG-sector rally should move both names
  together. More likely company-specific/index flow or thin-liquidity noise
  (~2.6K premarket volume). Treat with caution.
- Horizon: LONG_TERM lean on fundamentals if the move holds, but SHORT_TERM
  data-quality risk given the unexplained divergence from LPG — needs next
  -session confirmation.
- Opportunity cost: No holding displaced. Thin volume (~2.6K) means real
  -size entry risk is dominated by illiquidity/slippage; needs same-day
  volume + catalyst confirmation before clearing the Entry Checklist.

#### Deep dive: SYNA $114.395 +6.95%

- Catalyst: onsemi agreed to acquire Synaptics in an all-stock deal, ~$7B
  enterprise value. SYNA holders receive 1.350 onsemi shares per share
  (~19% premium to 10-day VWAP), ~12% pro forma ownership of the combined
  company. ~$200M synergy target (85-90% opex/SG&A), non-GAAP EPS-accretive
  within 18 months, close expected mid-2027 pending approvals.
- Why: Classic M&A repricing — announced acquisition at a premium pulls the
  target toward deal value. All-stock consideration means SYNA now also
  trades as a partial onsemi proxy, hence some analyst downgrades (loses
  standalone upside, adds onsemi execution/integration risk).
- Impact: Durable, not a headline spike — signed, SEC-filed merger
  agreement, not a rumor; should hold barring a deal break or topping bid.
  Today's semis tape is otherwise weak (KLIC + broader semis down on sector
  pressure), so this is stock-specific M&A, not sector momentum.
- Horizon: LONG_TERM/structural (signed M&A) but on an ~11-month timeline to
  close (mid-2027) — effectively a merger-arb position now, not a momentum
  swing; the strategy's swing-hold framing doesn't cleanly apply.
- Opportunity cost: No holding displaced (0/6 open, 0/3 weekly). Entering
  the announcement pop has capped upside (bounded by the fixed 1.35x
  exchange ratio) and full downside on deal break — asymmetric, unlikely to
  clear a clean 2:1 R:R, and outside the current momentum/breakout playbook.
  Skip unless operator wants to explicitly run merger-arb.

#### Deep dive: APT $4.625 -6.94%

- Catalyst: null. Benzinga's page conflated the ticker with the unrelated
  "Aptos" crypto token (an ETF-filing headline); a broader search surfaced
  no APT-specific negative news for Jul 29. Q1 2026 results were actually
  positive — EPS $0.069 (vs $0.057 YoY), revenue +5.5% YoY to $14.6M, net
  income +14% — next earnings not until Aug 12, 2026.
- Why: No identifiable catalyst. Combined with only 106 shares of volume in
  the scan — extremely thin even for a small-cap — reads as a stale/
  illiquid quote artifact in Alpaca's snapshot-vs-prior-close math, not a
  real institutional move.
- Impact: Not sustainable / not a real signal — data-quality artifact.
- Horizon: N/A — no catalyst to anchor a horizon call.
- Opportunity cost: No holding displaced. Fails the confluence rule outright
  (no catalyst, negligible volume) — exclude from consideration.

### Decision
**HOLD — no trades placed by this routine.** 8 qualifying gappers, none
clear a clean catalyst + confluence bar: BW is a litigation-driven
continuation of an existing downtrend, LPG and BWLP both lack a confirmed
same-day driver (and diverge from each other despite being in the same
sub-sector, which argues against a shared sector tailwind), SYNA is a
signed M&A deal better suited to merger-arb than this strategy's momentum
playbook, and APT is a low-volume data artifact with a misattributed
catalyst. Ranks 6-8 (TRMD, KLIC, UMAC) got quick-scan only per the 5-ticker
deep-dive cap. Account remains flat (0/6 positions, 0/3 weekly trades).
Notify sent (hit > 0). This routine is research-only per STEP 8 — no orders
placed.

## 2026-07-29 — Setup Scan (auto-scan 16:39 ET, cloud)

### Setup Scan (16:39 ET, cloud)
60 candidates checked, 0 errors, 2 hits (grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| V | B | Momentum confluence | daily | ADX14 29.41, EMA9 358.51 > EMA21 352.79, RSI14 65.33 |
| RTX | B | Momentum confluence | daily | ADX14 35.39, EMA9 206.94 > EMA21 199.72, RSI14 77.61 |

Note on run quality: first attempt (16:38 ET) hit 37/60 "DNS resolution
failure" errors on the Alpaca bars endpoint; a second attempt one minute
later got worse (48/60 errors, 0 hits) despite DNS resolving fine via direct
lookup and sequential/parallel curl tests to the same endpoint succeeding —
points to a transient issue specific to concurrent fetch() calls from this
sandbox, not a real Alpaca outage or DNS problem. A third attempt came back
clean (0 errors) and is the run recorded here; the two earlier noisy JSON
outputs were discarded, not committed. RTX is a repeat hit from the
2026-07-28 16:38/18:38 ET scans, still overbought (RSI14 77.61, up from
77.51). V is a new grade-B hit. No grade-A hits -> no Telegram alert per
STEP 4 rule. Candidates only, not orders — feed to `/trade` if pursued (full
safety-check gate applies).

### Setup Scan (18:39 ET, cloud)
60 candidates checked, 1 error (BMNR — HTTP 503/DNS resolution failure,
transient, script continued past it), 2 hits (grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| V | B | Momentum confluence | daily | ADX14 29.41, EMA9 358.51 > EMA21 352.79, RSI14 65.33 |
| RTX | B | Momentum confluence | daily | ADX14 35.39, EMA9 206.94 > EMA21 199.72, RSI14 77.61 |

Same two grade-B hits as the 16:39 ET run today, unchanged levels — no new
setups emerged over the 2-hour window. RTX remains overbought (RSI14 77.61).
No grade-A hits -> no Telegram alert per STEP 4 rule. Candidates only, not
orders — feed to `/trade` if pursued (full safety-check gate applies).

## 2026-07-30 — Pre-Market Research (cloud routine)

Apify RAG web browser returned "Monthly usage hard limit exceeded" on every
query (all 6 topics) — same outage as 2026-07-29, cap has not reset. Fell
back to native WebSearch (Yahoo domains blocked) per the routine's fallback
rule for the entire session. `tradingview-data` MCP still absent (`ToolSearch`:
no match) — 5th+ consecutive session; confluence rule (>=2 of VWAP/RSI/200-
SMA/insider) remains unsatisfiable for any candidate.

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 16 straight trading days
  since the Day-0 baseline (2026-07-08 launch). Same confirmed-live-vs-
  $10k-baseline mismatch flagged 2026-07-27, still unresolved/operator
  pending — not re-litigating here.

### Market Context (WebSearch fallback, Thu 7/30 premarket ET)
- **Oil — sharp spike, geopolitical**: WTI $84.20/bbl (+6.20% vs prior
  close), Brent $89.43/bbl (+6.92%) — renewed Middle East hostilities
  driving a second consecutive up day after yesterday's reversal call.
  Directionally consistent with 7/29's "oil relief is reversible" flag,
  now confirmed twice.
- **S&P 500 futures**: +0.5% premarket (multiple sources), SPX cash ~7328
  (+0.17%). Muted-to-modestly-positive despite a very heavy catalyst stack.
- **VIX**: closed 20.66 yesterday (7/29), +13.45% on the day — IMF's July
  update flagged stalled global disinflation + slower 3.0% growth,
  triggering a repricing of expensive equities. Today's print not yet
  available premarket; treat 20.66 as the live reference — a meaningful
  step up from 7/29's own premarket read of 18.62, i.e. vol expanded
  intraday on FOMC day itself.
- **FOMC aftermath**: Fed held rates steady Wed but markets read it as
  insufficiently hawkish on inflation — 30-year Treasury yield surged above
  5.2%, highest since 2007. Dow fell ~800 points Wed. This is the dominant
  overnight story: a hawkish-inflation, high-yield risk-off reaction to a
  hold decision.
- **Earnings — today**: Reported/reporting premarket-adjacent: Mastercard,
  Shell, AB InBev, Bristol-Myers Squibb, Altria, Southern, Sanofi. After
  the close today: Apple, Amazon, Coinbase. Yesterday's after-close prints
  (MSFT beat on Azure, +8.3% premarket; META miss — soft rev guide +91%
  drop in Q2 FCF, -9% premarket) are still digesting into today's tape.
  None held/watchlist.
- **Econ calendar today (8:30am ET)**: Q2 GDP first estimate (consensus
  ~2.3% vs prior 2.1%), June core PCE (Fed's preferred inflation gauge,
  MoM +0.1% / YoY consensus ~3.1% per one source), personal income/spending,
  initial jobless claims (~201K consensus vs 187K prior). Heavy print
  cluster same morning as digesting FOMC/Big Tech earnings reaction.
- **Sector YTD** (as of ~7/24 read): Energy +3.6%, Utilities +2.2%,
  Industrials +1.6%, Materials +1.4%, Real Estate +1.0%, Health Care +0.9%,
  Technology +0.4%, Financials 0.0%, Consumer Staples -1.3%, Consumer
  Discretionary -5.6%, Communications -6.1%. Q2-specific note: Technology
  led large-cap gains (+43% large-cap surge cited) while Energy lagged
  (-13% large-cap). Same source-conflict caveat as 7/29 — don't size sector
  bets off this without a `tradingview-data`-based technical confirmation.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None cleared to Tier-1 (documented-catalyst + confluence bar not met):
1. **MSFT — watch only, not a chase.** Catalyst: Q2 beat, Azure growth,
   +8.3% premarket. Strategy rule bars entry within 3% of a print >5% up
   on the day — this is a "wait for pullback to a reclaimed level" watch,
   not an entry today. No confluence data available to set a level.
2. **Energy — watch only, macro-driven.** Catalyst: WTI/Brent both +6%+ on
   Middle East escalation, second up day in a row. Geopolitical, not
   company-specific, and confluence unsatisfiable without
   `tradingview-data`. Revisit only if the move holds and a specific name
   (XLE, integrated majors) shows a real technical setup once the tool is
   back.
3. **No pre-GDP/PCE positioning.** GDP + core PCE + jobless claims all
   land at 8:30am ET on top of an already-volatile FOMC-aftermath tape
   (VIX +13%, 30Y yield highest since 2007, Dow -800 Wed) — any new entry
   ahead of that data is a binary macro bet, not a strategy-compliant
   technical setup.

### Risk Factors
- **Post-FOMC risk-off**: 30Y yield >5.2% (highest since 2007), Dow -800
  Wed, VIX +13.45% to 20.66 — market reading the Fed's hold as
  inflation-complacent, not dovish-friendly. Elevated whipsaw risk into
  today's GDP/PCE prints.
- **Oil re-spiking on Middle East escalation** — second consecutive day,
  reintroduces inflation-via-energy risk directly into a market already
  repricing on inflation fears.
- **Mixed mega-cap earnings reaction**: MSFT +8.3% (Azure strength) vs.
  META -9% (soft guide, FCF collapse) premarket — no clean single
  narrative; AAPL/AMZN/COIN report after close today, adding another
  binary catalyst stack into the same session.
- **Apify still fully down** (monthly cap not reset) — 2nd consecutive
  session on WebSearch fallback only. Operator: check Apify billing/plan.
- **`tradingview-data` MCP still absent** — 5th+ consecutive session;
  confluence rule unsatisfiable for this entire stretch. Same operator
  flag as prior days, escalating in duration.
- **Sector-YTD source conflict** (see Market Context) — don't size or rank
  sector bets off either figure until resolved.

### Decision
**HOLD — no trades.** Post-FOMC risk-off tape (VIX +13%, 30Y yield highest
since 2007, Dow -800 Wed) stacked directly against GDP/PCE/jobless-claims
prints at 8:30am ET and AAPL/AMZN/COIN earnings after close — a
binary-catalyst-dense session in both directions. Confluence rule remains
unsatisfiable with `tradingview-data` still down. Zero positions, zero
orders, 16 straight flat trading days — patience over activity. Notify
sent (Apify outage + elevated vol backdrop worth a heads-up).

## 2026-07-31 — Pre-Market Research (cloud routine)

Apify RAG web browser hit "Monthly usage hard limit exceeded" on all 7
topic queries — same outage, now 3rd consecutive session, cap has not
reset. Fell back to native WebSearch (Yahoo domains blocked via
`blocked_domains`) for the entire session per the routine's fallback rule.
`tradingview-data` MCP still absent (`ToolSearch`: no match) — 6th+
consecutive session; confluence rule (>=2 of VWAP/RSI/200-SMA/insider)
remains unsatisfiable for any candidate.

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 17 straight trading days
  since the Day-0 baseline (2026-07-08 launch). Same confirmed-live-vs-
  $10k-baseline mismatch flagged 2026-07-27, still unresolved/operator
  pending — not re-litigating here.

### Market Context (WebSearch fallback, Fri 7/31 premarket ET)
- **Oil — elevated, holding gains**: WTI ~$84.59/bbl, Brent ~$90.46/bbl
  (intraday touched $92.65 per one source). Still near the multi-day highs
  flagged 7/29-7/30; no fresh escalation headline found this morning, reads
  as consolidation at the elevated level rather than a new spike.
- **S&P 500 futures — sharp risk-on reversal**: ES +0.3-0.57%, Nasdaq 100
  futures +0.5-1.32% premarket. Polymarket implied 94% probability of a
  higher open. Driven by blowout Big Tech earnings: MSFT +16% (~$450B
  added, largest single-day value gain ever for any stock), AMZN +12.31%
  on cloud/AI-demand beat. AAPL slipped despite a revenue beat (iPhone
  units +22%) — Services line missed and overshadowed the beat.
- **VIX — sharp drop**: 17.09, down ~17% from Wednesday's post-FOMC spike
  (20.66, flagged 7/30). One source frames this level as bordering on
  complacency — a "priced for a perfect soft landing" read with little
  downside insurance. Vol round-tripped from FOMC-day fear back near
  pre-FOMC levels in two sessions.
- **Earnings — today, before open**: XOM, ABBV, CVX, ETN, ENB among ~41
  companies reporting before the bell (108 total today). None held/
  watchlist. Last night's after-close prints (MSFT, AMZN beats; AAPL mixed)
  are the dominant overnight story digesting into today's tape.
- **Econ calendar today**: Employment Cost Index (8:30am ET), Michigan
  Consumer Sentiment Final + Multivariate Core Trend Inflation (10:00am
  ET), NY Fed Staff Nowcast (12:45pm ET). Lighter print cluster than
  7/30's GDP/PCE/jobless-claims stack, but month-end positioning flagged
  as an active flow driver alongside a new tariff regime (10-12.5% levies
  on ~60 economies, effective July 24) still working through the tape.
- **Sector YTD**: Energy dominant momentum leader (+22% YTD per one read),
  with Consumer Staples/Industrials/Materials also in the "leading"
  quadrant; Healthcare weakening; Technology/Communications/Consumer
  Discretionary/Financials in the lagging quadrant; Real Estate/Utilities
  improving. S&P 500 Momentum Index +14.22% YTD (as of 7/29). One source
  conflicts, citing Technology leading Q2 gains (+43% large-cap surge) —
  same source-conflict caveat as 7/29-7/30; not sizing sector bets off
  either read without `tradingview-data` technical confirmation.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None cleared to Tier-1 (documented-catalyst + confluence bar not met):
1. **MSFT/AMZN — watch only, not a chase.** Catalyst: blowout Q2 prints,
   MSFT +16% / AMZN +12.31% premarket. Strategy rule bars entry within 3%
   of a print >5% up on the day — both are "wait for pullback to a
   reclaimed level" watches, not entries today. No confluence data
   available to set a level.
2. **Energy majors (XOM/CVX) — watch only, earnings-day binary.** Catalyst:
   sector is the dominant YTD momentum leader (+22%) and both report
   before today's open — but reporting on the print itself is a binary
   catalyst, not a technical setup, and neither is on the current
   watchlist. Confluence unsatisfiable without `tradingview-data`. Revisit
   post-print only if a name shows a real technical setup once the tool is
   back.
3. **No fresh entries into the VIX-complacency reversal.** VIX round-
   tripping from 20.66 to 17.09 in two sessions while futures rip on
   earnings is a fast, thin-insurance tape — chasing the reversal itself
   isn't a documented-catalyst, confluence-backed setup under this
   strategy.

### Risk Factors
- **VIX complacency read**: 17.09 after a 17% one-session plunge — cited
  by one source as underpricing tail risk just two sessions after a
  FOMC-driven spike to 20.66. Elevated whipsaw risk if any negative
  catalyst lands into thin insurance.
- **Oil still elevated** (WTI ~$84.59, Brent ~$90-93) — inflation-via-
  energy risk unresolved even without a fresh spike headline.
- **Tariff regime (10-12.5% on ~60 economies, effective July 24)** still
  digesting into corporate guidance/margin commentary — a slower-burn
  risk than the day's earnings prints.
- **Apify still fully down** (monthly cap not reset) — 3rd consecutive
  session on WebSearch fallback only. Operator: check Apify billing/plan;
  this has now spanned three separate routine runs.
- **`tradingview-data` MCP still absent** — 6th+ consecutive session;
  confluence rule unsatisfiable for this entire stretch. Same operator
  flag as prior days, escalating in duration.
- **Sector-YTD source conflict** (see Market Context) — don't size or rank
  sector bets off either figure until resolved.

### Decision
**HOLD — no trades.** Tape is risk-on (VIX -17% to 17.09, futures up on
blowout MSFT/AMZN earnings) but every actionable idea either fails the
"no chase within 3% of a >5% print" rule (MSFT, AMZN) or is an earnings-
day binary bet with no technical confirmation available (XOM, CVX) —
`tradingview-data` still down for a 6th+ consecutive session, confluence
rule unsatisfiable. Zero positions, zero orders, 17 straight flat trading
days — patience over activity. Notify sent via Telegram (primary channel
delivered ok); ClickUp fallback call returned a server-side HTTP 500
(keys all confirmed present — not a missing-credential issue) — flagging
for operator awareness, not blocking on it since Telegram succeeded.

## 2026-07-30 — Gappers (auto-scan 08:12 ET, cloud)

Apify RAG web browser hit "Monthly usage hard limit exceeded" on both
catalyst queries (same outage as pre-market run above) — fell back to
Benzinga WebFetch per routine rule, then WebSearch (Yahoo domains blocked)
when the CRWV Benzinga quote page returned a stale (Jul 22-vintage) article
that contradicted today's direction. Watchlist scan returned only 2
qualifying gappers (out of ~60 scanned) — both get quick-scan and deep-dive
since the pool is below the top-5 cap.

### Gappers (auto-scan 08:12 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BE | 177.00 | +8.22% | 1,601,851 | Extends Q2-earnings rally on record revenue, raised guidance, new $1.7B Nebius AI-power deal |
| 2 | CRWV | 65.56 | +7.74% | 1,147,817 | Bounces after Fed-driven selloff; better $2.6B loan terms + new Flow Traders AI-training deal |

#### Deep dive: BE $177.00 +8.22%
- Catalyst: Bloom Energy reported record Q2 2026 revenue of $1.065B (+166%
  YoY), adjusted EPS $0.78 vs $0.42 est., and raised FY26 guidance to
  $3.9-4.2B revenue / $2.55-2.85 EPS. Follow-on news of a $1.7B Nebius
  AI-power deal (backed by IDF and Oaktree) and a JPMorgan price-target
  hike to $346 (Overweight) are extending the move into a second session.
- Why: Earnings beat + raised guidance removed near-term risk, and the new
  multi-year AI-power supply deal gives momentum buyers a durable growth
  narrative (fuel cells as a bottleneck-relief for AI datacenter power)
  rather than a one-off headline.
- Impact: Second consecutive up day after the Jul 28 earnings release
  (Jul 29 gappers scan flagged BE +10.08%) — move has held/extended rather
  than faded, reinforced by a fresh contract and an analyst PT hike.
  Sector read-through: bullish for AI-power-infrastructure names broadly.
- Horizon: LONG_TERM — structural catalyst (guidance raise + new multi-year
  AI power-supply contract), aligned with Technology-adjacent sector
  momentum in TRADING-STRATEGY.md.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week — displaces
  nothing. At $177 a 10% trailing stop is ~$17.70 away; needs a ~+20% target
  ($212) to clear 2:1 R:R, plausible given the guidance raise but not yet
  confirmed by a same-day confluence check. Research only, no size given.

#### Deep dive: CRWV $65.56 +7.74%
- Catalyst: CRWV whipsawed $58.90-$68.25 on Jul 29 after Fed Governor Kevin
  Warsh's hawkish remarks sparked a broad AI-stock selloff (CRWV named a
  top loser). Premarket news is more constructive: better terms on a $2.6B
  loan (eases capital-cost concern) and a new Flow Traders deal to power
  AI quant-trading model training; BofA separately reiterated Buy ($140 PT)
  and raised CRWV's FY26 capex estimate to $34B.
- Why: Bargain-hunting bounce off a macro-driven (not company-specific)
  selloff, reinforced by incremental good news (cheaper financing, new
  logo) partially offsetting Wednesday's valuation/leverage concerns.
- Impact: Reads as reversion off an oversold, Fed-driven down day rather
  than a fresh breakout — shares remain below the 52-week high and key
  moving averages per recent coverage. Sector read-through: likely a
  sector-wide AI/neocloud relief bounce, not CRWV-specific; watch for a
  fade back toward Wednesday's lows if it doesn't hold.
- Horizon: SHORT_TERM — no new structural catalyst, just a bounce off a
  rate-driven selloff; do not carry past this week without a confluence
  recheck.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week — no
  existing holding displaced, but BE (rank 1) is the stronger setup today.
  A 10% trailing stop from $65.56 is ~$6.56 away, needing a ~+20% target to
  clear 2:1 R:R — harder to justify given the SHORT_TERM/bounce framing.
  Research only, no size given.

### Gappers (auto-scan 10:09 ET, cloud)

Apify RAG web browser hit its monthly hard usage cap on all 4 catalyst
queries — fell back to Benzinga quote pages (per routine), then WebSearch
(Yahoo-blocked) for the fundamentals deep-dive leg since Apify was
unavailable for that query too. All 4 hits got the full deep-dive (cap is 5,
only 4 qualified).

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | APT | $5.245 | +7.04% | 498 (thin) | None found — Benzinga's top hit is Aptos crypto (ticker collision) |
| 2 | WLDS | $3.48 | +6.42% | n/a | No same-day news — post-reverse-split micro-cap momentum volatility |
| 3 | KLIC | $95.45 | +6.24% | n/a | Extending Q2 FY26 earnings beat + raised guidance (AI/memory demand) |
| 4 | UMAC | $17.95 | -5.35% | n/a | No negative news — pullback/profit-taking after a large prior run-up |

#### Deep dive: APT $5.245 +7.04%
- Catalyst: No stock-specific catalyst found. Alpha Pro Tech (NYSE American:
  APT, protective apparel/building-supply maker) last reported Q1 2026 EPS
  of $0.069 (+21% YoY) on $14.6M revenue (+5.5% YoY) — a routine, dated
  print, not a same-day event. Benzinga's top APT headline is about the
  Aptos cryptocurrency, a ticker collision, not this company. Last
  completed-session volume was just 498 shares.
- Why: With no identifiable catalyst and volume this thin, the gap most
  likely reflects a stale/wide bid-ask print on a low-liquidity name rather
  than real supply/demand.
- Impact: Not sustainable as a genuine move — reads as thin-volume noise.
  No sector read-through (no other building-products/PPE peer moving).
- Horizon: SHORT_TERM and low-conviction even as that — no durable thesis,
  no confirmed catalyst.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing, but this fails the Entry Checklist's "specific
  catalyst" requirement outright regardless of R:R math. Research only,
  no size given.

#### Deep dive: WLDS $3.48 +6.42%
- Catalyst: Wearable Devices (neural-input wristband maker, Mudra/Mudra
  Pro) continues elevated volatility following its Jun 22 1-for-3 reverse
  split (done to regain Nasdaq's $1.00 min-bid compliance). FY2025 revenue
  was just $647K against an $8.1M net loss. No same-day news found; a Jul
  26 momentum-trader writeup flagged the stock for "sharp momentum spikes"
  on thin float, consistent with today's move.
- Why: Post-reverse-split micro-caps with tiny float commonly see outsized
  swings on retail/momentum flow rather than fundamentals; no earnings,
  contract, or filing dated today was found.
- Impact: Reads as continued speculative momentum-trading volatility, not a
  fresh sustainable catalyst. No meaningful sector read-through.
- Horizon: SHORT_TERM — no structural catalyst dated today; company remains
  unprofitable with negligible revenue and no analyst coverage.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing, but fails the Entry Checklist's catalyst requirement
  and carries binary reverse-split risk; would not clear Confluence.
  Research only, no size given.

#### Deep dive: KLIC $95.45 +6.24%
- Catalyst: Kulicke & Soffa's fiscal Q2 2026 (ended Apr 4) non-GAAP EPS of
  $0.79 beat the $0.67 consensus by ~18% on revenue up 49.8% YoY to
  $242.6M — a swing from a prior-year loss, driven by general semi/memory/
  automotive/industrial demand. Fiscal Q3 2026 guidance called for ~$310M
  revenue and ~$1.00 non-GAAP EPS, with the memory segment up 93%
  sequentially on NAND/data-center demand; FY26 capex was raised from ~$12M
  to ~$22M to expand Thermo-Compression Bonding (TCB) capacity for AI-chip
  packaging. Next earnings: Aug 5 after close.
- Why: Earnings beat plus raised guidance and a structural capex build-out
  for AI-driven advanced packaging (TCB for HBM/AI chip assembly) is
  pulling in momentum and fundamental buyers alike — a genuine mechanism,
  not a headline spike.
- Impact: Move looks sustainable relative to a real multi-quarter
  fundamental improvement (30-day return +24.8%, 1-yr +263%), though the
  stock has already re-rated a long way (P/E 80x trailing, 19x forward) and
  sits ahead of its own Aug 5 print — a binary risk. Sector read-through:
  bullish for AI/advanced-packaging-exposed semi-equipment peers (e.g.
  AMKR, also on the watchlist).
- Horizon: LONG_TERM — structural driver (AI/memory capex supercycle, TCB
  capacity build-out) aligns with an early/mid-cycle Technology tilt in
  TRADING-STRATEGY.md's sector-rotation table, worth a multi-week swing
  thesis if it also clears Confluence on a later /trade check.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing existing, and is the strongest-catalyst name of
  today's 4. At $95.45, a 10% trailing stop is ~$9.55 away; needs roughly a
  +20% target to clear 2:1 R:R — plausible given the guidance raise, but
  the Aug 5 earnings date sits inside most reasonable hold windows and adds
  binary risk. Research only, no size given.

#### Deep dive: UMAC $17.95 -5.35%
- Catalyst: Unusual Machines (NDAA-compliant drone-component maker) pulled
  back after an extended run-up; no same-day negative news found. Q1 2026
  revenue of ~$8.1M beat estimates of $5.54M (+296% YoY, 8th consecutive
  record quarter); the company raised ~$150M in a March 2026 offering
  (cash now $222.9M), signed a ~$52M deal to acquire battery maker Upgrade
  Energy, is doubling Orlando motor-production capacity, and was added to
  the Russell 2000 on Jun 29. A late-May WSJ report on potential U.S.
  government investment in domestic drone suppliers (naming UMAC) drove a
  58% single-day spike earlier.
- Why: Valuation is rich (32x EV/sales) after a large multi-month run-up on
  the WSJ/government-interest catalyst and Russell 2000 inclusion; today's
  move reads as profit-taking/give-back, not fundamental deterioration.
- Impact: Likely a one-day pullback within a still-intact bullish
  structural story rather than a trend reversal, given the absence of any
  negative news. Sector read-through: watch domestic-drone/defense-supply
  peers (KTOS, ONDS, RCAT, AVAV, all on the watchlist) for a similar
  give-back.
- Horizon: SHORT_TERM for this specific move (a pullback, not a new
  catalyst); the underlying growth/defense-onshoring thesis remains
  LONG_TERM if it re-sets up on a later confluence check after the
  pullback stabilizes.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing. A down gap isn't a long-entry signal on its own; would
  need stabilization and a fresh confluence read (VWAP reclaim, RSI
  oversold bounce) before this clears the Entry Checklist. Research only,
  no size given.

### Gappers (auto-scan 11:10 ET, cloud)

Apify RAG web browser still hitting its monthly hard usage cap (same outage
as the 08:12 and 10:09 ET scans) — fell back to Benzinga WebFetch per
routine rule, then WebSearch (Yahoo domains blocked) for LAKE/LPG (Benzinga
returned no usable headline) and for the SYNA/KLIC fundamentals legs. 6
qualifying gappers out of ~60 scanned; top 5 got the full deep dive, UMAC
(rank 6) quick-scan only per the cap.

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | WLDS | $3.605 | +10.24% | 315 (thin) | Continued post-reverse-split momentum after a white paper release; no new same-day filing |
| 2 | LAKE | $11.705 | +7.58% | 365 (thin) | No same-day catalyst found; closest data point is a Q1 FY27 EPS beat |
| 3 | LPG | $42.35 | -7.09% | 3,987 (thin) | No same-day negative catalyst; recent fleet-expansion news is positive, doesn't fit the drop |
| 4 | KLIC | $97.965 | +6.74% | n/a | Extending the earnings-beat/guidance-raise rally already flagged at 08:12 and 10:09 ET |
| 5 | SYNA | $117.395 | +6.68% | n/a | ON Semi's $7B all-stock buyout (Jun 25) + SYNA reports earnings today, Jul 30 |
| 6 | UMAC | $18.41 | -6.45% | n/a | Sector-wide Pentagon drone-production concerns weighing on drone names |

#### Deep dive: WLDS $3.605 +10.24%
- Catalyst: Wearable Devices (Mudra neural-input wristband maker) completed
  a 1-for-3 reverse split in June for Nasdaq compliance and released a white
  paper that coincided with a prior Friday surge. No new same-day filing or
  news found; reference-session volume was just 315 shares.
- Why: Post-reverse-split micro-caps with tiny float commonly see outsized
  momentum swings on retail flow rather than fundamentals — same name, same
  read as this morning's 10:09 ET scan.
- Impact: Continued speculative momentum volatility, not a fresh catalyst;
  thin volume argues against durability. No sector read-through.
- Horizon: SHORT_TERM, no structural catalyst — unchanged from the 10:09 ET
  deep dive on this same ticker earlier today.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing, but fails the Entry Checklist's catalyst requirement
  outright; flagged as non-actionable twice today already. Research only,
  no size given.

#### Deep dive: LAKE $11.705 +7.58%
- Catalyst: No dated headline found via Benzinga or web search. Lakeland
  Industries' most recent reported quarter (Q1 FY2027) beat EPS estimates
  (+$0.04 vs -$0.14 expected) after a weak Q4 FY2026 (net loss $0.61/share
  vs expected $0.30 profit, revenue miss of 17.6%). References to
  securities class-action law-firm ads relate to past losses, not new
  litigation. Reference-session volume was just 365 shares.
- Why: With no identifiable same-day catalyst and volume this thin, the gap
  likely reflects a stale/wide bid-ask print rather than real supply/demand
  — the same pattern flagged on APT and WLDS in earlier scans this week.
- Impact: Not sustainable as a genuine move; reads as thin-volume noise. No
  sector read-through identified.
- Horizon: SHORT_TERM and low-conviction — no confirmed catalyst.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing, but fails the Entry Checklist's catalyst requirement
  outright. Research only, no size given.

#### Deep dive: LPG $42.35 -7.09%
- Catalyst: No same-day negative headline found. Dorian LPG's most recent
  company news is fleet expansion (new dual-fuel carrier "Areion"), a
  positive item that doesn't explain today's decline. Other coverage
  describes the stock as trading near the top of its 52-week range and
  above its 200-day SMA, consistent with a pullback after a run-up rather
  than news-driven selling. Reference-session volume (3,987 shares) is thin
  for this name.
- Why: Absent a same-day negative catalyst, this likely reflects sector-wide
  LPG shipping-rate softness or profit-taking after an extended run, not
  company-specific bad news.
- Impact: Sustainability uncertain with no catalyst to anchor a thesis
  either way. Sector read-through: watch other LPG/product-tanker shipping
  names (on watchlist) for a similar pullback.
- Horizon: SHORT_TERM by default — no catalyst identified to support a
  structural read.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing, but fails the Entry Checklist's catalyst requirement.
  Research only, no size given.

#### Deep dive: KLIC $97.965 +6.74%
- Catalyst: Continuation of the same earnings-driven move logged twice
  already today (record revenue growth, raised FY26 guidance, capex
  increase for AI-chip/TCB packaging capacity). Price has extended intraday
  from $95.45 (10:09 ET read) to $97.965 — no new incremental news found
  this hour; this is the existing thesis still running.
- Why: Same mechanism as this morning's deep dive — earnings beat + raised
  guidance + structural AI/advanced-packaging capex build-out pulling in
  momentum and fundamental buyers.
- Impact: Move continues to look sustainable relative to the fundamental
  improvement already documented today; stock is increasingly extended
  (already +24.8% over 30 days per this morning's read) and sits ahead of
  its Aug 5 print, a binary risk that hasn't changed. Sector read-through
  unchanged: bullish for AI/advanced-packaging-exposed semi-equipment peers
  (e.g. AMKR).
- Horizon: LONG_TERM — same structural driver (AI/memory capex supercycle)
  as logged this morning; no new information to revise that call.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  unchanged from this morning's read. Research only, no size given; see
  10:09 ET entry for full R:R math (unchanged at this price).

#### Deep dive: SYNA $117.395 +6.68%
- Catalyst: ON Semiconductor agreed on Jun 25, 2026 to acquire Synaptics in
  an all-stock deal valued at ~$7B (its largest deal ever) — Synaptics
  holders get 1.350 ON shares per share, a 19% premium to the 10-day VWAP,
  for ~12% pro-forma ownership of the combined company; deal expected to
  close mid-2027 pending regulatory/shareholder approval ($235M/$320M
  termination fees). ON fell ~9% after-hours on the announcement while SYNA
  rose. The fresh same-day driver: Synaptics reports earnings today (Jul
  30) — the print interacts with the fixed exchange ratio, so today's move
  reflects repositioning into the print rather than new deal news.
- Why: An all-stock acquisition at a fixed exchange ratio anchors SYNA's
  value to ON's stock plus deal-completion odds; today's earnings print is
  the incremental same-day catalyst on top of that arb dynamic, pulling in
  both merger-arb and event-driven buyers.
- Impact: Deal-driven, not organic — sustainability is a function of the
  earnings print's read-through for deal certainty plus arb-spread
  narrowing, not SYNA's standalone growth. Analysts already downgraded SYNA
  post-announcement in June, capping upside near the exchange-ratio-implied
  value absent a topping bid. Sector read-through: constructive for
  semiconductor M&A/consolidation broadly.
- Horizon: SHORT_TERM — the deal itself is over a month old (Jun 25);
  today's move is earnings-print-driven repositioning within an existing
  arb trade, not a new structural catalyst for a fresh directional entry.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing, but a merger-arb-plus-earnings setup with a fixed
  1.35x exchange ratio is a poor fit for this strategy's directional-swing
  rules (no clean stop-distance/R:R framing against a stock-for-stock deal
  price). Research only, no size given.

## 2026-07-30 — Setup Scan (auto-scan 16:38 ET, cloud)

### Setup Scan (16:38 ET, cloud)
60 candidates checked, 0 errors, 1 hit (grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| V | B | Momentum confluence | daily | ADX14 29.31, EMA9 360.63 > EMA21 354.28, RSI14 66.77 |

V is a repeat hit from the 2026-07-29 16:39/18:39 ET scans, still trending
(ADX14 29.31, up from 29.41 two days ago; RSI14 66.77, up from 65.33) —
same momentum-confluence setup persisting, no new tickers qualified this
run. No grade-A hits -> no Telegram alert per STEP 4 rule. Candidate only,
not an order — feed to `/trade` if pursued (full safety-check gate applies).

### Setup Scan (18:41 ET, cloud)
60 candidates checked, 0 errors, 1 hit (grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| V | B | Momentum confluence | daily | ADX14 29.31, EMA9 360.63 > EMA21 354.28, RSI14 66.77 |

Same V momentum-confluence hit as the 16:38 ET scan this session, unchanged
(ADX14/RSI14/EMA levels identical to 2 decimal places — no new bar since).
Note: the first two run attempts this session (18:38/18:39 ET) hit Alpaca
DNS/rate-limit errors (25-27 of 60 tickers) from rapid successive scans;
those partial results were discarded and are not the source of this entry.
No grade-A hits -> no Telegram alert per STEP 4 rule. Candidate only, not
an order — feed to `/trade` if pursued (full safety-check gate applies).

## 2026-07-31 — Gappers (auto-scan 08:10 ET, cloud)

Apify RAG web browser hit "Monthly usage hard limit exceeded" on both the
catalyst and fundamentals queries (same ongoing outage as prior sessions) —
fell back to Benzinga WebFetch per routine rule for the catalyst headline,
then WebFetch (Benzinga news feed + stockanalysis.com; Yahoo domains
excluded) for the deep-dive fundamentals leg. Watchlist scan (~60 tickers,
GAP_THRESHOLD=5.0) returned only 1 qualifying gapper — gets both quick-scan
and deep-dive since the pool is below the top-5 cap.

### Gappers (auto-scan 08:10 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | CRWV | 78.25 | +5.94% | 1,591,106 | Trending after partnering with Leidos to bring AI cloud to national security |

#### Deep dive: CRWV $78.25 +5.94%
- Catalyst: CoreWeave announced a strategic partnership with Leidos to
  deliver secure, AI-native cloud infrastructure for the U.S. Intelligence
  Community and Department of Defense. Lands on top of an already-strong
  Jul 30 session (+21.5% to $73.90) driven by Truist upgrading to Buy (58%
  upside, citing power access/AI demand) and Baird initiating Outperform,
  plus new client wins (Flow Traders, Anam). Q2 2026 earnings due Aug 11
  after close.
- Why: A defense/intelligence-community contract expands CoreWeave's
  addressable market beyond hyperscaler AI-compute rental into higher-
  margin, more durable federal cloud revenue — gives momentum buyers a
  fresh structural narrative on top of this week's analyst-upgrade cycle
  and Wednesday's 21.5% pop.
- Impact: 1.59M volume on the gap. Move follows an extreme whipsaw: -30%
  over the trailing month into a Jul 29 52-week low (broad AI-sector
  selloff on Fed commentary), then +21.5% Jul 30, now +5.9% more Jul 31 —
  three catalysts (analyst upgrades, Leidos deal, oversold bounce) stacked
  in under a week. Reads as a genuine re-rating attempt but with real
  mean-reversion risk given the stock's volatility and continued
  unprofitability (-$1.59B TTM net income). Sector read-through: broader
  AI-cloud/neocloud names were hit in the same Fed-driven Jul 29 selloff,
  so this is partly a name-specific catalyst riding a sector bounce.
- Horizon: LONG_TERM — structural catalyst (federal/defense contract win +
  analyst upgrades citing durable AI-power demand), though Q2 earnings on
  Aug 11 is a near-term binary event that could truncate any swing hold.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week (week of
  Jul 27) — displaces nothing. At $78.25 a 10% trailing stop is ~$7.83
  away, needing roughly a +20% move ($94) to clear the 2:1 R:R minimum —
  plausible on the Leidos/upgrade thesis but not yet confirmed by same-day
  confluence (VWAP/RSI/200-SMA/insider). CRWV has now printed as a gapper
  on 2 straight sessions (Jul 30 +7.74%, Jul 31 +5.94%) without ever
  clearing confluence — argues for a fresh confluence check before
  treating this as more than research. Research only, no size given.

## 2026-07-31 — Gappers (auto-scan 09:10 ET, cloud)

Apify RAG web browser hit "Monthly usage hard limit exceeded" again on both
the catalyst and fundamentals queries (same ongoing outage) — fell back to
Benzinga WebFetch for catalysts and stockanalysis.com WebFetch for
fundamentals. Watchlist scan (~60 tickers, GAP_THRESHOLD=5.0) returned 3
qualifying gappers, all get deep-dive since the pool is below the top-5 cap.
CRWV's premarket price/volume are unchanged from the 08:10 ET scan (last
trade printed 08:08 ET, thin premarket liquidity) — noted rather than
re-researched.

### Gappers (auto-scan 09:10 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | NBIS | 202.18 | +7.33% | 1,300,668 | Surges as Microsoft's cloud beat lifts neocloud sentiment |
| 2 | BE | 222.00 | +7.24% | 1,215,490 | Shares shrug off Hunterbrook short report after record Q2 |
| 3 | CRWV | 78.25 | +5.94% | 1,591,106 | Trending after partnering with Leidos to bring AI cloud to national security |

#### Deep dive: NBIS $202.18 +7.33%
- Catalyst: Nebius shares are extending Wednesday's +27.1% surge (to
  $188.43) after Microsoft's cloud-segment earnings beat lifted sentiment
  across neocloud/AI-infrastructure names broadly. Company-specific drivers
  stacking on top: Nvidia disclosed a 9.3% equity stake, its Vera Rubin
  compute rack went live at the Finland data center, and it published its
  2025 Sustainability Report. Q2 earnings set for Aug 12.
- Why: A read-through catalyst — a hyperscaler peer (Microsoft) beating on
  cloud growth signals durable AI-compute demand, lifting every neocloud
  name — layered on a company-specific Nvidia stake disclosure that reads
  as a vote of confidence in Nebius's GPU-cluster capacity.
- Impact: 1.3M volume on the prior session's gap. Two consecutive up days
  (+27.1% Wed, +7.3% today) after revenue grew 575% YoY to $877.9M ttm — a
  real fundamental growth story, not a pure headline spike. Sector-wide
  sympathy rally (Microsoft beat lifting the whole neocloud group) plus a
  stock already up big raises one-day-extension risk; 17 analysts rate it
  Buy with a $258 target (37% upside).
- Horizon: LONG_TERM — Nvidia stake + hyperscaler read-through + real
  revenue growth is structural, not headline-only.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week (week of
  Jul 27) — displaces nothing. At $202.18 a 10% trailing stop is ~$20.22
  away, needing roughly a +20% move (~$243) to clear 2:1 R:R — steep but
  not implausible against a $258 consensus target. No same-day confluence
  check run (tradingview-data MCP unavailable in cloud routines). Research
  only, no size given.

#### Deep dive: BE $222.00 +7.24%
- Catalyst: Record Q2 revenue of $1.065B (+166% YoY) with strong margins
  and raised full-year guidance to $3.9-4.2B revenue / $800-900M operating
  income, driven by accelerating AI-data-center power demand. Mizuho
  upgraded to Buy/Outperform ($242 target). A Hunterbrook short-seller
  report alleging accounting/business-quality issues landed around the
  same time but the stock kept climbing through it.
- Why: A blowout earnings beat plus raised guidance is pulling in momentum
  buyers on a structural AI-power-demand thesis; price rising through a
  same-day short report is itself a bullish signal fundamentals are
  winning the narrative for now.
- Impact: 1.2M volume on the prior session's gap, extending Thursday's
  +8.22% (Nebius AI-power deal read-through) into today's earnings-driven
  +7.24% — third straight gap session. 233x PE and still unprofitable
  (2025 net loss -$88M despite huge revenue growth) — a story stock riding
  an AI-power narrative; the short report disputing the numbers adds real
  headline/volatility risk even though price has absorbed it so far.
- Horizon: SHORT_TERM — earnings-pop momentum on an already-extended
  3-day move; no durable re-rating catalyst beyond the guidance raise
  itself.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week (week of
  Jul 27) — displaces nothing, but BE is now a 3rd consecutive gap day
  without a confluence check ever clearing (per Jul 29/30 RESEARCH-LOG
  entries) — argues against chasing an extended move. At $222 a 10%
  trailing stop is ~$22.20 away, needing roughly a +20% move (~$266) for
  2:1 R:R. Research only, no size given.

#### Deep dive: CRWV $78.25 +5.94%
- Catalyst: Unchanged since the 08:10 ET scan — no new premarket trade
  printed for CRWV between then and this 09:10 ET run (last trade
  timestamp 08:08 ET, thin premarket liquidity). Leidos defense/
  intelligence-community AI cloud partnership remains the catalyst,
  layered on Wednesday's Truist/Baird upgrades and Thursday's +21.5%
  oversold bounce.
- Why: Same mechanism as the 08:10 write-up — federal/defense contract win
  expands addressable market into higher-margin government cloud revenue,
  compounding this week's sell-side upgrade cycle.
- Impact: No new information since the 08:10 scan. CRWV's premarket
  price/volume have not moved in an hour, consistent with thin premarket
  liquidity rather than a fading catalyst.
- Horizon: LONG_TERM, unchanged from the 08:10 ET entry.
- Opportunity cost: Unchanged from the 08:10 ET entry — 0/6 positions,
  0/3 trades this week, no confluence check run. Research only, no size
  given.

## 2026-07-31 — Gappers (auto-scan 10:14 ET, cloud) — DATA QUALITY BUG FOUND

**This run surfaced a real bug in `scripts/gappers-alpaca.sh`, not a market
event.** Run fired at 10:14 ET — 44 min after the 9:30 open, not premarket.
The script's `prev_close = dailyBar.c or prevDailyBar.c` logic assumes
`dailyBar` still reflects yesterday's completed session ("premarket, today's
session hasn't started" — its own comment). That assumption breaks once
today's session starts printing: `dailyBar` becomes TODAY's in-progress bar,
so `dailyBar.c` is just a recent same-day trade, not yesterday's close.
Combined with wide/stale NBBO quotes on thin names, this produced 5-8%
"gaps" that are fabricated:

| Sym | Script said | Recomputed (prevDailyBar.c vs latestTrade.p) |
| --- | --- | --- |
| SYNA | -7.96% | +0.14% |
| ZIM | -7.58% | -0.04% |
| BWLP | -7.54% | +0.36% |
| BW | -7.10% | -3.64% (real move, just under threshold) |
| WLDS | -8.40% | n/a (also below $3 floor) |

Recomputing the full ~69-ticker watchlist correctly (true prior-session
close vs. latest real trade) surfaced two more candidates, **QMMM (+17.64%)
and PTNM (-16.04%), that are ALSO fake** — their Alpaca snapshot timestamps
are ~10 months stale (Sep/Oct 2025), meaning no current trading data exists;
the "gap" is comparing two ancient bars, not anything from today. Both are
already flagged unverified (`⚠`) in WATCHLIST.md, and Benzinga returns a
404 for PTNM (symbol not found) — consistent with these being bad/dead
tickers that should probably be pulled from the watchlist rather than
rescanned. Neither bug (stale in-progress dailyBar, unfiltered stale
snapshots) is specific to this run — both will recur on every cloud gappers
run that fires after the open, and the stale-snapshot bug can hit any
`⚠`-flagged ticker at any time of day.

After excluding both bad-data classes, **3 real gappers** remain (verified
fresh `dailyBar.t` timestamp = today, cross-checked against Benzinga/finviz):

### Gappers (auto-scan 10:14 ET, cloud) — verified real only
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BLSH | 20.70 | -8.57% | 3,349 | Ark Invest disclosed trimming BLSH (sector reallocation into COIN/CRCL) |
| 2 | BMNR | 16.58 | -8.30% | 439,675 | Same Ark Invest disclosed sale, high-beta ETH-treasury name |
| 3 | ONDS | 7.14 | -5.80% | 309,056 | FPF Defense counter-drone investment — but headline reads bullish while price is down; likely fade of an earlier spike |

#### Deep dive: BLSH $20.70 -8.57%
- Catalyst: Ark Invest disclosed trimming Bullish today alongside BitMine
  and Robinhood, while adding to Coinbase and Circle — a within-crypto
  reallocation, not broad risk-off.
- Why: Ark's daily disclosed trades are widely followed/front-run by
  momentum and quant strategies; a sell from a high-profile fund in a thin
  recent-IPO float triggers mechanical selling independent of BLSH
  fundamentals.
- Impact: Only 3,349 shares traded by 10:14 ET — thin for a name this size,
  consistent with basket/flow-driven noise rather than heavy conviction
  selling. BMNR (same Ark sell list) also down hard today; COIN/CRCL (Ark
  buys) are the sector read-through longs, not BLSH.
- Horizon: SHORT_TERM — mechanical fund-flow event, no new fundamental
  catalyst on the business itself.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing. Decliner with a bearish flow catalyst, no bullish
  confluence — fails the Entry Checklist outright. Research only, no size
  given.

#### Deep dive: BMNR $16.58 -8.30%
- Catalyst: Same Ark Invest disclosed rebalance as BLSH — BitMine (ETH
  treasury) cut same day as BLSH/HOOD, COIN/CRCL added.
- Why: BMNR is high-beta to ETH and had a huge prior 12-month run; a
  disclosed sale from a marquee momentum fund hits richly-run, high-beta
  names hardest as followers de-risk in sympathy.
- Impact: Real, liquid move — 439,675 shares by 10:14 ET, not noise. Reads
  as a within-crypto rotation (Ark bought COIN/CRCL same day) rather than
  crypto-wide risk-off; didn't independently confirm spot ETH price.
- Horizon: SHORT_TERM — flow-driven, no change disclosed to BMNR's
  ETH-holdings thesis.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing. Fails Entry Checklist (bearish catalyst, no
  confluence run). Research only, no size given.

#### Deep dive: ONDS $7.14 -5.80%
- Catalyst: Ondas co-led a strategic investment in counter-drone startup
  FPF Defense to scale AI-enabled SmartFlak interceptors, on top of ~$70M
  in recent autonomous-systems order backlog — structurally positive
  defense-tech news.
- Why: DIRECTION MISMATCH — the sourced headline frames this as bullish
  ("surge"), but today's data shows ONDS down -5.80% on real volume. Most
  likely explanation: headline covers an earlier pop and today is a
  give-back, not a fresh negative catalyst.
- Impact: 309,056 shares traded, close to typical daily turnover — a real
  move. Checked sector read-through: drone/defense peers AVAV (-1.17%),
  KTOS (-2.61%), RCAT (-1.22%) are all mildly red too, but nowhere near
  ONDS's -5.80% — company-specific amplification on a soft sector tape,
  consistent with fading its own prior spike rather than sector contagion.
- Horizon: SHORT_TERM leaning, unresolved — underlying catalyst is
  structurally aligned with the AI-defense rotation phase and could
  support a LONG_TERM thesis, but today's tape contradicts the bullish
  headline. Needs a fresh confluence check (VWAP/RSI/200-SMA/insider, 2 of
  4 required) before calling it either way; tradingview-data MCP
  unavailable in this cloud routine.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing either way. Not actionable as a long today (currently a
  decliner); would need to reverse and clear Confluence on a later /trade
  or pre-market check. Research only, no size given.

**Recommended follow-up (not actioned here, needs operator sign-off):** fix
`scripts/gappers-alpaca.sh`'s baseline to always use `prevDailyBar.c` (not
`dailyBar.c`) regardless of time of day, and add a staleness guard that
discards any symbol whose `dailyBar`/`prevDailyBar` timestamp isn't from the
last 1-2 trading days. Also consider dropping QMMM/PTNM from
`memory/WATCHLIST.md` given no current Alpaca data and Benzinga 404 on PTNM.

## 2026-07-31 — Gappers (auto-scan 11:11 ET, cloud)

**Note:** Apify RAG web browser hit its monthly usage hard limit on all 4
catalyst queries (`Error: Monthly usage hard limit exceeded`) — fell back to
WebFetch on `benzinga.com/quote/<TICKER>` per routine fallback rule for
catalyst headlines, and `stockanalysis.com/stocks/<TICKER>` for fundamentals
(non-Yahoo, consistent with approved-sources policy). `premarket_volume` is
not a field the current `gappers-alpaca.sh` output populates — its `volume`
field is the prior completed session's daily bar volume (per the script's own
comment), not live premarket volume, so it's logged as null here rather than
faked. Two of the four volume prints (ZIM ~2.4k, LAKE ~871) look implausibly
low for those names' normal turnover — treat as a data-quality caveat, not a
liquidity signal, consistent with the stale/thin-data issue already flagged
in the 10:14 ET run today.

### Gappers (auto-scan 11:11 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | ZIM | 22.885 | -7.37% | n/a (data-quality caveat) | ZIM falls as Hapag-Lloyd's $35/sh buyout hits fresh regulatory obstacles |
| 2 | LPG | 43.415 | -7.35% | n/a (data-quality caveat) | Fleet upgrade (new VLGC 'Areion') found; no catalyst matching the down move |
| 3 | KLIC | 97.63 | +6.71% | n/a (data-quality caveat) | Semis broadly higher; KLIC also beat on Q2 earnings |
| 4 | LAKE | 10.505 | -6.41% | n/a (data-quality caveat) | No LAKE-specific headline found; fundamentals research skews positive |

AGMH (+5.06%) scanned but excluded — price $0.7701 fails the $3.00 minimum.
Only 4 names cleared both filters (|gap%| ≥ 5.0, price ≥ $3.00); deep-dive cap
of 5 not binding, all 4 get full writeups below.

#### Deep dive: ZIM $22.885 -7.37%
- Catalyst: Hapag-Lloyd agreed in Feb 2026 to acquire ZIM for $35/share
  (~$4.2B). The deal has since hit repeated regulatory setbacks (one flagged
  in early July persists), alongside a CEO transition (Dr. Chen Lichtenstein
  replacing Eli Glickman since June). Q2 earnings land Aug 19.
- Why: Deal-arbitrage unwind — each fresh sign the merger is stalling in
  regulatory review compresses the acquisition spread, so risk-arb holders
  sell toward standalone fair value. Reads as another leg of that unwind,
  not a new operating issue.
- Impact: Alpaca's volume field is the prior session's bar, not live
  premarket volume (~2.4k shares, implausibly low for a $3B-cap name) — a
  known data-quality gap, not a real liquidity read. Directionally
  consistent with an ongoing, real story (M&A regulatory risk) rather than
  a one-day headline spike. Watch other shipping/container names if
  Hapag-Lloyd disclosures continue.
- Horizon: LONG_TERM — deal-arb overhang is a durable mechanism (regulatory
  risk), not a single-day headline, but it's a downside/avoid catalyst, not
  a buy signal.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing. Ranks #1 by gap size but is short-direction with
  unreliable volume data; doesn't fit the long/momentum playbook. If only
  one slot is used this week, KLIC is the stronger use of it.

#### Deep dive: LPG $43.415 -7.35%
- Catalyst: Research surfaced only a fleet-expansion release (added
  dual-fuel VLGC "Areion", sold two older vessels for ~$169M combined,
  ordered a new 2029-delivery VLGC for $115M) plus strong fundamentals —
  FY2026 revenue +35.8% YoY, net income +114.8%, 5-analyst consensus Buy,
  $51 PT (~8.5% upside). Nothing found explains a same-day -7.35% move.
- Why: No mechanism connects the located news (fleet upgrade, strong
  fundamentals) to a decline this size — the catalyst found is
  positive-sounding, the opposite of the gap direction. Likely a VLGC
  freight/charter-rate pullback (sector-wide, volatile) or profit-taking
  after a big recent run (market cap cited +58.7%), not a name-specific
  negative event.
- Impact: Low confidence this is a durable, catalyst-driven move — reads
  more like sector-rate noise or a thin/stale print (volume field ~2.3k,
  same caveat as ZIM). Check peer VLGC/product-tanker names for a
  sector-wide read-through before acting.
- Horizon: SHORT_TERM — no durable, name-specific catalyst found; default
  to treating this as noise likely to fade absent a confirmed negative
  story.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing. Weakest of today's 4 for a real trade — catalyst
  unverified, wouldn't clear Confluence without a confirmed reason for the
  move. Shouldn't take priority over KLIC or ZIM for any of this week's 3
  trade slots.

#### Deep dive: KLIC $97.63 +6.71%
- Catalyst: KLIC traded up alongside other semiconductor-equipment names
  (Aehr, Lam Research, Applied Materials) in a broad Nasdaq rally.
  Company-specific tailwind: Q2 2026 results beat, "revenue and gross
  margin exceeded expectations" on strong TCB/automotive demand; TTM
  revenue +11.2% YoY, net income +155.9%, EPS +161%. Next earnings call
  Aug 6.
- Why: Sector-wide semiconductor-equipment strength (broad Nasdaq rally)
  combined with KLIC's own recent earnings beat — momentum buyers rotating
  into a group already showing fundamental improvement.
- Impact: Looks more sustainable than the shipping names — sector-wide
  (peers also up) and backed by a real earnings beat, not just headline
  noise. Volume field (~17.9k) is again the prior-session bar per the known
  caveat, not confirmation of today's flow. Cross-check against the
  sector-rotation table in TRADING-STRATEGY.md.
- Horizon: LONG_TERM — aligns with a sector-rotation thesis (semis
  strength, improving fundamentals) rather than a single headline; worth
  tracking with Q3 earnings (Aug 6) as a near-term catalyst, pending a
  later Confluence check.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing. Best opportunity-cost case of today's 4 — up-gap,
  sector tailwind, real earnings support — but still needs to
  independently clear Confluence and a sane 2:1 R:R stop before using one
  of this week's 3 trade slots.

#### Deep dive: LAKE $10.505 -6.41%
- Catalyst: No LAKE-specific headline found — top Benzinga result was an
  unrelated Amazon/analyst-forecast roundup. Fundamentals research
  (stockanalysis.com) shows a positive recent story instead — Q1 FY2027
  sales +1.4% with a return to profitability, fire-services segment +11%,
  DA Davidson raised PT to $18, 4 analysts "Strong Buy" with $16.50 avg
  target (~47% upside from $11.23).
- Why: Mechanism unclear — available research points to positive
  fundamentals/analyst sentiment, the opposite direction of today's gap.
  Combined with extremely thin prior-session volume (~871 shares,
  implausibly low even for a $110M microcap), reads as a
  low-liquidity/stale-quote artifact rather than a real move.
- Impact: Low confidence this is real or sustainable — thin liquidity plus
  no located catalyst is the profile of noise, not signal. Do not treat as
  a genuine gapper without a confirmed name-specific reason.
- Horizon: SHORT_TERM (if anything) — no durable catalyst found; default
  assumption is this reverts once real volume shows up.
- Opportunity cost: 0/6 positions open, 0/3 trades used this week —
  displaces nothing. Weakest name on today's list — no verified catalyst
  plus thin-liquidity data means it shouldn't compete for any of the
  week's 3 trade slots ahead of KLIC or even ZIM.

## 2026-07-31 — Setup Scan (auto-scan 16:38 ET, cloud)

### Setup Scan (16:38 ET, cloud)
60 candidates checked, 1 error (CMCSA — Alpaca DNS resolution failure,
non-fatal, script continued), 2 hits (both grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| MA | B | Momentum confluence | daily swing | ADX14 32.24, EMA9 553.85 > EMA21 539.76, RSI14 72.23 |
| HXL | B | Momentum confluence | daily swing | ADX14 29.26, EMA9 106.32 > EMA21 103.99, RSI14 50.04 |

Both new names vs. the 2026-07-30 scans (V was the sole hit those runs;
V did not qualify here). No grade-A hits -> no Telegram alert per STEP 4
rule. Candidates only, not orders — feed to `/trade` if pursued (full
safety-check gate applies).

### Setup Scan (18:38 ET, cloud)
60 candidates checked, 0 errors, 2 hits (both grade B, no grade-A hits) —
unchanged from the 16:38 ET run this session (same 2 names, no new hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| MA | B | Momentum confluence | daily swing | ADX14 32.24, EMA9 553.85 > EMA21 539.76, RSI14 72.23 |
| HXL | B | Momentum confluence | daily swing | ADX14 29.26, EMA9 106.32 > EMA21 103.99, RSI14 50.04 |

No grade-A hits -> no Telegram alert per STEP 4 rule. Candidates only, not
orders — feed to `/trade` if pursued (full safety-check gate applies).

## 2026-08-03 — Pre-Market Research (cloud routine)

Apify RAG web browser hit "Monthly usage hard limit exceeded" on all 7 topic
queries — same outage flagged 2026-07-31, cap has not reset over the
weekend. Fell back to native WebSearch (Yahoo domains blocked via
`blocked_domains`) for the entire session per the routine's fallback rule.
`tradingview-data` MCP still absent (`ToolSearch`: no match) — confluence
rule (>=2 of VWAP/RSI/200-SMA/insider) remains unsatisfiable for any
candidate, same unresolved gap as every session since 2026-07-25.

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 18 straight trading days
  since the Day-0 baseline (2026-07-08 launch). Same confirmed-live-vs-
  $10k-baseline mismatch flagged 2026-07-27, still unresolved/operator
  pending — not re-litigating here.
- New week: weekly trade count resets to 0/3 (week of Aug 3).

### Market Context (WebSearch fallback, Mon 8/3 premarket ET)
- **Oil — elevated, near multi-day highs**: Brent ~$87.93/bbl (last print
  Jul 31), WTI ~$84.67/bbl (Jul 31 close), Aug 3 forecast range
  $78.42-$85.09. Driven by renewed US-Iran tension, Houthi Red Sea attacks,
  Saudi strikes on Iran-backed groups over the weekend — but see risk
  factors: this conflicts with the same-morning "de-escalation" headline
  below, unresolved by WebSearch alone.
- **S&P 500 futures — risk-on**: ES +0.6% premarket, described as climbing
  on a "major de-escalation in the Middle East" (Trump reported to have
  halted a "massive attack" on Iran) plus earnings optimism outweighing
  rate jitters. Prediction-market odds ~86% for an "Up" open. 10Y yield
  ~4.7-4.8%, keeping borrowing costs elevated.
- **VIX — calm**: ~16.0-16.03, down from ~18.0 Jul 30 intraday. Low-vol,
  risk-on tape.
- **Earnings — today, before open**: ON Semiconductor (ON, est. EPS $0.71),
  Tyson Foods (TSN, est. EPS $1.04). After close: Vertex Pharmaceuticals
  (VRTX), Axon Enterprise (AXON), Williams Companies (WMB), Clorox (CLX).
  None held/watchlist.
- **Econ calendar this week**: July nonfarm payrolls (jobs report) and ISM
  manufacturing/services PMI land this week — exact day not confirmed by
  WebSearch. No CPI this week (next CPI print is Aug 12). No FOMC this
  week.
- **Sector YTD**: Energy leads (+3.6%), then Utilities (+2.2%), Industrials
  (+1.6%), Materials (+1.4%). Communications worst (-6.1%), Consumer
  Discretionary next-worst (-5.6%). S&P 500 overall +9.0% YTD. Same
  source-conflict caveat as prior sessions (a Q2 large-cap read had
  Technology leading with +43%) — not sizing sector bets off either figure
  without `tradingview-data` technical confirmation.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None cleared to Tier-1 (documented-catalyst + confluence bar not met):
1. **Energy sector (XLE-style exposure) — watch only.** Catalyst: YTD
   momentum leader (+3.6%) and oil holding $84-88/bbl on Middle East
   tension. Conflicting same-morning de-escalation headline (see Risk
   Factors) makes the oil-support thesis unstable intraday. No confluence
   data available to set entry/stop/target.
2. **ON Semiconductor (ON) — earnings-day binary, not a setup.** Reports
   before today's open (EPS est. $0.71). Strategy explicitly excludes
   earnings-day binary bets without technical confirmation (same rule
   applied to XOM/CVX on 7/31) — watch only, no entry today regardless of
   print direction.
3. **Utilities (XLU-style exposure) — watch only.** Catalyst: #2 YTD sector
   (+2.2%), defensive tilt that would pair well if the jobs report this
   week surprises risk-off. No confluence data to confirm entry level;
   purely a sector-rotation watch.

### Risk Factors
- **Oil catalyst conflict**: one thread (weekend Iran/Houthi/Saudi
  escalation) argues oil stays elevated; another (Trump halting a "massive
  attack" on Iran) argues de-escalation is driving today's equity rally.
  Both can't be the dominant story — treat oil direction as unresolved
  until a same-day, non-Yahoo source confirms one thread.
- **VIX at 16 after a heavy earnings/geopolitical week** — thin insurance
  again, same complacency pattern flagged 7/31 (17.09) now even lower.
- **Apify still fully down** — cap has not reset since at least 7/31 (spans
  the weekend). Operator: check Apify billing/plan; blocking the primary
  research path for multiple consecutive sessions now.
- **`tradingview-data` MCP still absent** — confluence rule unsatisfiable
  for the entire stretch since 7/25. Same operator flag, escalating in
  duration.
- **Sector-YTD source conflict** (Energy-led vs. Tech-led reads) — don't
  size or rank sector bets off either figure until resolved.

### Decision
**HOLD — no trades.** Tape is risk-on (VIX ~16, S&P futures +0.6% on
reported Middle East de-escalation) but the oil/geopolitical catalyst
itself is internally conflicting between sources, ON's earnings-day print
is a binary bet excluded by strategy rule, and Energy/Utilities sector
ideas have no technical confirmation available — `tradingview-data` still
down, confluence rule unsatisfiable. Zero positions, zero orders, 18
straight flat trading days — patience over activity. New week: 0/3 trade
slots used. Notify sent via Telegram (primary channel delivered ok);
ClickUp fallback call returned a server-side HTTP 500 again (keys all
confirmed present — not a missing-credential issue, same failure as
7/31) — flagging for operator awareness, not blocking since Telegram
succeeded.

## 2026-08-03 — Gappers (auto-scan 08:10 ET, cloud)

Watchlist scan (69 tickers currently in memory/WATCHLIST.md,
GAP_THRESHOLD=5.0) returned **zero qualifying gappers** — max |gap_pct| seen
was META +1.98% (sanity-checked at GAP_THRESHOLD=1.0, not logged as a hit).
No catalyst/deep-dive research needed since there were no candidates; Apify
RAG web browser status not re-tested this run (last known state:
"Monthly usage hard limit exceeded" per this morning's 07:xx pre-market
research entry above — moot here since no queries were needed). Per routine
rule, no Telegram/ClickUp notify sent (only fires on hits > 0 or scan error;
neither applies).

### Gappers (auto-scan 08:10 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| — | — | — | — | — | No tickers cleared the 5.0% gap threshold |

## 2026-08-03 — Gappers (auto-scan 09:10 ET, cloud)

Second scheduled fire of the day (cloud cadence runs 3-4x pre-market/early
session). Re-scanned the full watchlist via `scripts/gappers-alpaca.sh
watchlist` (GAP_THRESHOLD=5.0) — again **zero qualifying gappers**, no
change from the 08:10 run. No catalyst/deep-dive research needed. Per
routine rule, no Telegram/ClickUp notify sent (only fires on hits > 0 or
scan error; neither applies).

### Gappers (auto-scan 09:10 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| — | — | — | — | — | No tickers cleared the 5.0% gap threshold |

## 2026-08-03 — Gappers (auto-scan 10:11 ET, cloud)

Third scheduled fire of the day. Watchlist scan (`scripts/gappers-alpaca.sh
watchlist`, GAP_THRESHOLD=5.0) returned **3 qualifying gappers** — first hits
of the day, all downside gaps, all under the 10-ticker cap so all 3 get
deep-dive treatment (well under the 5-ticker deep-dive cap too — none
dropped to quick-scan only). Apify RAG web browser returned "Monthly usage
hard limit exceeded" on all 3 catalyst queries (same outage flagged in
today's 07:xx pre-market entry, still not reset) — fell back to WebFetch
against `benzinga.com/quote/<TICKER>` for both the catalyst headline and the
fundamentals/recent-developments research, per routine fallback rule.

None of the 3 clear a trade: BKSY and UMAC both carry earnings on Aug 6
(3 days out) — excluded by the strategy's no-earnings-binary-bet rule; BW's
consensus analyst price target ($5.75) sits below its current price, so it
can't clear a sane 2:1 R:R as a long, and the account is long-only in scope.
`tradingview-data` MCP remains unavailable in this cloud routine regardless,
so the confluence rule (≥2 indicators + catalyst) is unsatisfiable either
way. 0 open positions, 0/3 weekly trade slots used — nothing displaced by
skipping these.

### Gappers (auto-scan 10:11 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BKSY | $21.68 | -7.39% | 2,770 | Jefferies downgraded Buy→Hold (PT $50) ahead of Aug 6 earnings |
| 2 | BW | $8.63 | -7.16% | 12,276 | Buyback + $61.4M note redemption failed to offset weak momentum |
| 3 | UMAC | $20.02 | -6.49% | 4,767 | No negative catalyst found; sector (drone) news is bullish — likely thin-volume premarket artifact |

#### Deep dive: BKSY $21.68 -7.39%
- Catalyst: Jefferies cut BlackSky from Buy to Hold while keeping its $50 price target, shifting sentiment lower right before Q2 2026 earnings (Aug 6, BMO). Space stocks broadly under pressure as attention rotates to SpaceX-adjacent names and the UFO space ETF crosses $1B AUM.
- Why: A rating cut this close to earnings removes a bullish analyst voice and triggers de-risking from momentum holders; sector-wide rotation away from smaller space plays compounds the outflow.
- Impact: Headline/analyst-driven on an already unprofitable name (TTM operating cash flow -$57.9M, ROE -33.8%, P/S 8.2x). Snapshot volume thin (2,770 sh) — needs confirmation, not a confirmed repricing. Consensus PT ($28.38) still implies upside from $21.68; could fade or extend depending on the Aug 6 print.
- Horizon: SHORT_TERM — single-analyst downgrade pre-earnings, no structural catalyst; the real event is the Aug 6 report, not this dip.
- Opportunity cost: 0 open positions, 0/3 weekly trades used — nothing to displace. Entering 3 days ahead of an earnings binary on a cash-burning name fails the no-earnings-binary rule (same rule applied to ON 8/3, MSFT/AMZN 7/31); a stop tight enough for 2:1 R:R can't realistically hold through the print.

#### Deep dive: BW $8.63 -7.16%
- Catalyst: Babcock & Wilcox announced share buybacks and a $61.4M note redemption — normally bullish capital-return moves — but shares declined anyway as weak momentum dominated the session's reaction.
- Why: With negative free cash flow (-$62.2M TTM) and negative book value per share (-$1.16) against $275.9M debt vs $106.6M cash, using cash for buybacks/redemption reads as a liquidity/dilution risk flag rather than a confidence signal.
- Impact: Fundamentals stressed (EPS -$0.60, underperforming industry); consensus analyst PT is $5.75 — well below even the post-gap price — implying further downside risk rather than mean-reversion. Aug 10 earnings adds more binary risk.
- Horizon: SHORT_TERM, and arguably not a long setup at all — consensus PT sits under spot, no structural bull catalyst.
- Opportunity cost: 0 open positions, 0/3 weekly trades used — nothing to displace. Not viable as a long regardless: PT below current price means no sane 2:1 R:R long thesis. Strategy is long-only in scope — pass, not a short candidate.

#### Deep dive: UMAC $20.02 -6.49%
- Catalyst: No negative company-specific catalyst found. Same-day coverage centers on AeroVironment's strong Q4 lifting drone stocks broadly, plus an unrelated Eric Trump-backed robotics startup's AMD chip deal appearing in UMAC's news feed. A separate source showed UMAC actually +1.75% at a different timestamp than the Alpaca premarket snapshot used for this gap_pct.
- Why: Catalyst/price-direction mismatch — no bearish driver corroborates the -6.49% print, and premarket volume was thin (4,767 sh), consistent with a thin-liquidity/stale-quote artifact rather than a real repricing event.
- Impact: Likely a data artifact given thin volume and absence of any negative catalyst — needs re-verification against a live quote at/near market open before treating as real.
- Horizon: SHORT_TERM — if genuine, no structural catalyst supports holding; if an artifact (more likely), there's nothing to hold. Q2 earnings land Aug 6 (3 days out), adding pre-earnings binary risk either way.
- Opportunity cost: 0 open positions, 0/3 weekly trades used — nothing to displace. Earnings 3 days out makes this an earnings-binary setup regardless of direction; catalyst/price mismatch also means confluence's documented-catalyst leg isn't cleanly satisfied. Pass.


## 2026-08-03 — Setup Scan (16:38 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 2 grade-B hits**:
MA and BCI both clear Setup B (ADX14 > 20 AND EMA9 > EMA21; note the local
`/setup-scan` stock_score>=6 gate is dropped here, MCP-only). Setup A
(TJL breakout) not checkable for any ticker this run — `setup_a_checkable:
false` across both hits, consistent with this being a post-close scan
(16:38 ET, after the 16:00 close) rather than an intraday/premarket window.
No grade-A hit, so no Telegram/ClickUp notify sent per routine rule.

### Setup Scan (16:38 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| MA | B | Momentum confluence | daily swing | ADX 33.3, EMA9 557.76 > EMA21 542.82, RSI 69.2, px $575.81 vs SMA200 $527.94 |
| BCI | B | Momentum confluence | daily swing | ADX 22.7, EMA9 23.96 > EMA21 23.75, RSI 54.0, px $23.57 vs SMA200 $22.92 |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-03 — Setup Scan (18:38 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 2 grade-B hits**:
same two names as the 16:38 ET run — MA and BCI, both still clearing Setup B
(ADX14 > 20 AND EMA9 > EMA21; local `/setup-scan` stock_score>=6 gate
dropped here, MCP-only). Setup A (TJL breakout) not checkable for any
ticker this run — `setup_a_checkable: false` across both hits, consistent
with a post-close scan window. No grade-A hit, so no Telegram/ClickUp
notify sent per routine rule.

### Setup Scan (18:38 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| MA | B | Momentum confluence | daily swing | ADX 33.3, EMA9 557.76 > EMA21 542.82, RSI 69.2, px $575.81 vs SMA200 $527.94 |
| BCI | B | Momentum confluence | daily swing | ADX 22.7, EMA9 23.96 > EMA21 23.75, RSI 54.0, px $23.57 vs SMA200 $22.92 |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-04 — Gappers (auto-scan 08:21 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **2 qualifying gappers**, both upside — under the 10-ticker cap so
both get deep-dive treatment (well under the 5-ticker deep-dive cap too).
Apify RAG web browser returned "Monthly usage hard limit exceeded" on both
catalyst queries (same outage flagged repeatedly in recent sessions, still
not reset) — fell back to WebFetch against `benzinga.com/quote/<TICKER>`
for the catalyst headline, then WebSearch (Yahoo Finance domains blocked
per routine rule) for the fundamentals/recent-developments research.

Neither clears a trade today: SATL reports Q2 2026 earnings tomorrow (Aug 5
AMC) — excluded by the strategy's no-earnings-binary-bet rule; ASTS has a
structural, dated catalyst (BlueBird 11-13 launch) and no near-term earnings
conflict, making it the stronger of the two, but still needs a `/trade`
confluence check (`tradingview-data` MCP unavailable in this cloud routine,
so that gate can't be run here). 0/6 open positions, 0/3 weekly trade slots
used — nothing displaced by holding off.

### Gappers (auto-scan 08:21 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | SATL | $4.26 | +7.45% | 282,680 | Reports Q2 2026 earnings Aug 5 AMC; recent $18M+ defense-imagery contract + Merlin constellation news |
| 2 | ASTS | $67.90 | +6.88% | 235,697 | Premarket pop ahead of BlueBird 11-13 satellite launch (~Aug 5) and Aug 10 H1 business update |

#### Deep dive: SATL $4.26 +7.45%
- Catalyst: Satellogic (SATL) reports Q2 2026 results Wed Aug 5 after market close, conference call 4:30pm ET; pre-earnings gap likely reflects positioning ahead of the print. Q1 2026 revenue was $6.11M (+80% YoY) but net loss widened to $118.3M (+263% YoY), with management calling it an inflection point (first positive net operating cash contribution). Also landed an $18M+ one-year defense-imagery contract and unveiled the Merlin constellation (first satellite launching Oct 2026).
- Why: Momentum/positioning buying ahead of the Aug 5 earnings call, amplified by recent contract wins and constellation roadmap news building anticipation for a strong print.
- Impact: Pre-earnings gaps on thin-volume small caps (282K sh) are prone to violent reversal on the actual print either direction — speculative positioning, not a confirmed trend. No sector-wide read-through; single-name earnings-anticipation move.
- Horizon: SHORT_TERM — earnings-binary event tomorrow (Aug 5 AMC), no durable thesis until the print clears; expect a volatile resolution within 1-2 sessions.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing to displace. Entering pre-earnings breaches the no-earnings-binary practice (same exclusion applied to BKSY/UMAC on 8/3); a 7-10% stop below a $4.26 entry (~$0.30-0.43 risk) needs a $0.85+ target for 2:1 R:R, only plausible on a clean beat that can't be known pre-report. Pass pending post-earnings confirmation.

#### Deep dive: ASTS $67.90 +6.88%
- Catalyst: AST SpaceMobile (ASTS) preparing to launch BlueBird satellites 11, 12, and 13 via SpaceX Falcon 9 (targeting ~Aug 5), its second next-gen batch after BlueBird 8-10 launched in June. New satellites carry the proprietary AST5000 ASIC, targeting 150+ Mbps per coverage cell (vs 98.9 Mbps demonstrated on Block-1). Manufacturing has advanced through satellite 42; H1 business update/trading statement due Aug 10.
- Why: Anticipation buying ahead of a hard, dated launch catalyst plus accelerating constellation-deployment cadence, read by the market as de-risking the path to commercial space-based cellular broadband.
- Impact: Volume (236K sh) elevated but not extreme for ASTS's typical liquidity; tied to a concrete, dated catalyst rather than pure rumor, giving more durability than a typical headline spike — still vulnerable to a "sell the news" fade post-launch. Read-through to satellite/space peers plausible if the launch executes cleanly.
- Horizon: LONG_TERM — the BlueBird buildout is a structural, multi-quarter thesis (accelerating cadence, beta commercial service later this year) rather than a single headline; a multi-day/week swing hold is defensible IF it also clears the Confluence rule on a later `/trade` check.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing to displace. As the higher-conviction of today's two gappers (structural catalyst vs SATL's earnings-binary risk), ASTS is the one worth validating via `/trade`; a 7-10% stop below a $67.90 entry (~$4.75-6.79 risk) needs a $9.50-13.60+ target for 2:1 R:R, plausible on a clean launch with no material pullback. Research only, not a sized recommendation.

## 2026-08-04 — Pre-Market Research (inline, local market-open run)

No standalone Pre-Market Research entry existed for today before this run —
only the 08:21 ET gappers scan above. Ran inline per market-open Step 1
("never trade without documented research"). Apify RAG web browser hit
"Monthly usage hard limit exceeded" again (same outage flagged every session
since 7/29, still not reset) — fell back to native WebSearch. `tradingview-data`
MCP still absent (`ToolSearch`: no match) — confluence rule (>=2 of
VWAP/RSI/200-SMA/insider) remains unsatisfiable via that path; computed SMA20
manually from Alpaca bars for ASTS instead (see below).

### Account
- Equity: $100,000 | Cash: $100,000 (100%) | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 19 straight trading days
  since Day-0 (2026-07-08 launch). Same confirmed-live-vs-$10k-baseline
  mismatch flagged 2026-07-27, still unresolved/operator pending.
- Weekly trade count: 0/3 (week of Aug 3).

### Market Context (WebSearch fallback, Tue 8/4 premarket ET)
- **S&P 500 futures — modestly risk-on**: ES +0.21%. Palantir (PLTR, not
  held/watchlist) +17% premarket on blowout earnings + raised guidance.
  SpaceX reports its first quarterly results as a newly public company
  today; AMD earnings after close.
- **VIX — calm-ish**: ~18.0, in line with recent range, no acute stress
  signal.

### Trade Ideas — re-evaluated from today's gappers scan
1. **ASTS ($67.90 premarket per 08:21 scan; live quote now bid $67.54 /
   ask $71.90, ~13% above yesterday's $63.53 close) — FAILS the no-chase
   rule.** Pulled 21 sessions of daily bars: stock fell $86.29 (7/6) to
   $53.05 (7/29), then ripped +19.7% into $63.53 (8/3) and is gapping again
   today. Manual SMA20 (Jul 6 - Aug 3 closes) = **$63.78** — current ask is
   already ~13% above that average, not a fresh mean-revert entry.
   Strategy explicitly bans "entry within 3% of a print > 5% up on the
   day" — today's move alone is already >5% (and stacks on Monday's +19.7%
   3-day run). Structural launch catalyst (BlueBird 11-13, ~Aug 5) is real
   and documented, but the entry itself is a chase. **No trade.**
2. **SATL — still excluded**, reports Q2 earnings tomorrow (Aug 5 AMC),
   same no-earnings-binary-bet exclusion as the 08:21 scan.
3. No other watchlist ticker carries a same-day documented catalyst.

### Risk Factors
- Apify still fully capped — 6th+ consecutive session, cap has not reset
  since 7/29. Operator: check Apify billing/plan.
- `tradingview-data` MCP still absent — confluence unsatisfiable via that
  path for the entire stretch since 7/25; manual SMA calc used as a partial
  substitute today but RSI/VWAP/200-SMA still unavailable.

### Decision
**HOLD — no trades.** Only actionable idea (ASTS) fails the no-chase rule
outright (already ~13% above yesterday's close, ~6% above its own 20-day
average); SATL is earnings-binary-excluded; nothing else has a same-day
catalyst. Zero positions, zero orders, 19 straight flat trading days —
patience over activity. Weekly trade count unaffected: 0/3.

## 2026-08-04 — Gappers (auto-scan 10:15 ET, cloud)

Fourth scheduled fire of the day. Watchlist scan (`scripts/gappers-alpaca.sh
watchlist`, GAP_THRESHOLD=5.0) returned 6 raw prints; one (AGMH, $0.90) was
dropped for failing the $3.00 minimum price filter, leaving **5 qualifying
gappers** — 3 upside, 2 downside — all under the 10-ticker cap so all 5 get
deep-dive treatment (exactly at the 5-ticker deep-dive cap, none dropped to
quick-scan only). Apify RAG web browser returned "Monthly usage hard limit
exceeded" on every query (same outage flagged repeatedly since 7/29, still
not reset) — fell back to WebFetch against `benzinga.com/quote/<TICKER>` for
catalyst headlines and `stockanalysis.com/stocks/<TICKER>` for
fundamentals/recent-developments research.

None clear a trade today: APT's move is on 436 shares volume with no
corroborating catalyst (likely a thin-liquidity artifact) and sits 3 days
ahead of its own Aug 7 earnings; BKSY repeats the same Aug-earnings
exclusion already applied on 8/3, now even closer to the print; BW's
analyst-target data conflicts with the 8/3 entry ($24.67 today vs $5.75
then) and can't be trusted without reconciliation; WLDS traded on just 100
shares (not a real repricing); BWLP has the strongest fundamentals (record
profit, 8.6% yield) but the catalyst is a sector-wide geopolitical
(Iran-tensions/oil) read, not company-specific, and `tradingview-data` MCP
remains unavailable in this cloud routine so the Confluence indicator leg
can't be checked here regardless. 0/6 open positions, 0/3 weekly trade
slots used — nothing displaced by holding off.

### Gappers (auto-scan 10:15 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | APT | $5.35 | +8.42% | 436 | No catalyst found (Benzinga returned unrelated crypto coverage); earnings Aug 7 |
| 2 | BWLP | $23.16 | +7.22% | 3,913 | Iran-tensions oil-price spike lifting energy/shipping names sector-wide |
| 3 | BKSY | $23.48 | -6.62% | 2,453 | Pre-earnings jitters into Q2 print (days out); bullish govt-contract/analyst backdrop otherwise unchanged |
| 4 | BW | $10.78 | +6.31% | 33,329 | AI-datacenter/utility demand narrative; catalyst source stale/contradictory |
| 5 | WLDS | $3.17 | -5.93% | 100 | Trading through Jul 31 private-placement price ($3.285); dilution overhang, not a new catalyst |

#### Deep dive: APT $5.35 +8.42%
- Catalyst: No company-specific catalyst found — Benzinga's APT page returned crypto (Aptos, ticker collision) coverage instead of Alpha Pro Tech. Fundamentals: Q1 2026 net sales +5.5% to $14.6M, FY2025 revenue +2.25% to $59.14M though earnings fell 10.13%; management flagged persistent housing-market weakness. $2M buyback expansion (Jun 2025). Earnings due Aug 7 (3 days out).
- Why: No identified driver — 436-share volume on an 8.4% print reads as a thin-liquidity quote artifact, not a real repricing.
- Impact: Almost certainly not sustainable — lowest volume of today's 5 gappers by a wide margin, no catalyst corroborates it, and Aug 7 earnings adds pre-earnings binary risk on top.
- Horizon: SHORT_TERM — no structural catalyst identified; if the print is real at all, it reads as noise likely to fade.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing displaced. Fails the Confluence rule's catalyst leg outright (no catalyst to document) and earnings 3 days out triggers the no-earnings-binary exclusion. Pass.

#### Deep dive: BWLP $23.16 +7.22%
- Catalyst: Opinion coverage ties renewed Iran tensions and a resulting oil-price spike to undervalued energy/shipping names including BW LPG (54-vessel LPG fleet, 28 VLGCs). Q1 2026 record profit $164M on elevated freight rates; FY2025 revenue $3.58B (+0.52%) though earnings fell 31.61%. 8-vessel Hyundai newbuild order; divested BW Elm ($36M gain) and BW Levant ($38M proceeds); exited Confidence Petroleum India stake. 8.61% dividend yield, P/E 9.33.
- Why: Geopolitical risk premium (Iran tensions) lifting LPG freight-rate expectations pulls in momentum buyers on an already fundamentally strong, high-yield name.
- Impact: Sector-wide read-through is real — framed as a shipping/energy reaction to a macro event, so peers likely moved too. Volume (3,913 sh) is modest for the size of the gap; durability depends on whether Iran-tension headlines keep escalating.
- Horizon: SHORT_TERM — geopolitical-headline-driven, durable only if tensions keep escalating, otherwise a fade candidate within days. Structural buyback/fleet-modernization story exists but wasn't today's driver.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing displaced. Strongest fundamentals of today's 5, but the catalyst is a macro sector read rather than company-specific; `tradingview-data` MCP unavailable in this cloud routine so the Confluence indicator leg can't be checked here — would need a `/trade` confluence pass before sizing.

#### Deep dive: BKSY $23.48 -6.62%
- Catalyst: BlackSky reports Q2 2026 earnings within days (conference call 8:30am ET per Benzinga). Provides AI-enabled satellite imagery/intelligence to govt/commercial customers. FY2025 revenue $106.58M (+4.39%) but net loss widened 22.8% to -$70.26M. Multiple new govt R&D/NRO contracts and seven-figure subscription renewals; Jefferies/Oppenheimer/Canaccord PT increases post-Q1; consensus Strong Buy, $40.50 target.
- Why: Downside gap (-6.62%) despite a bullish fundamental/analyst backdrop reads as pre-earnings de-risking/profit-taking, not a negative catalyst. RESEARCH-LOG 8/3 already flagged BKSY's Aug 6 earnings as a no-earnings-binary exclusion at $21.68 — now $23.48, even closer to the print.
- Impact: Volume (2,453 sh) thin — consistent with pre-earnings positioning noise, not a confirmed repricing. Government-contract backdrop and analyst-target upside look unaffected; short-term jitters into the print, not a thesis change.
- Horizon: SHORT_TERM — earnings-binary event within days, no durable read until the print clears.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing displaced. Same exclusion already applied to BKSY on 8/3 (no-earnings-binary rule); still applies, now even closer to the print. Pass regardless of direction.

#### Deep dive: BW $10.78 +6.31%
- Catalyst: Benzinga's headline is stale (references a prior down day: "buyback plans and $61.4M note redemption failed to offset weak momentum as shares slipped Monday") — today's print is +6.31%, opposite direction, so treat the specific driver as unconfirmed. Babcock & Wilcox: FY2025 revenue $587.68M (+1.14%), -$51.02M net loss; Q1 2026 record revenue/adjusted EBITDA on utility/AI-datacenter demand; $200M stock offering (May, 12.4M sh at $18.50), $50M buyback authorized (Jul), $61.4M note redemption; Q2 earnings Aug 10; pending securities litigation; a board governance proposal failed shareholder approval.
- Why: Likely momentum buying tied to the AI-datacenter/utility demand narrative and record-backlog messaging, though the catalyst source itself is stale/contradictory — treat the driver as unconfirmed.
- Impact: Mixed fundamentals — real backlog/demand tailwinds vs. a net loss, pending litigation, and 12.4M shares of May dilution. RESEARCH-LOG 8/3 noted a $5.75 consensus PT (below spot then); today's source shows $24.67 — the two conflict and neither is independently verified here.
- Horizon: SHORT_TERM — catalyst source unreliable/contradictory; Aug 10 earnings (6 days out) adds event risk before any thesis could mature.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing displaced. Analyst-target data conflicts between sessions ($24.67 today vs $5.75 on 8/3) — can't confirm a sane 2:1 R:R long without resolving that discrepancy; pending litigation is an added tail risk. Pass pending cleaner data.

#### Deep dive: WLDS $3.17 -5.93%
- Catalyst: Wearable Devices (Mudra neural-interface wearables) — recent coverage centers on a white-paper release and a Jun 2026 1-for-3 reverse split, but today's print is a downside move opposite that framing. FY2025 revenue $647K (+23.95%) against an $8.11M net loss; raised $24.4M in 2025, holds $18.4M cash. Jul 31 private placement priced 1M shares at $3.285; unveiled "Mudra Pro" and a Meta-Bounds AR partnership; exhibited at AWE 2026.
- Why: The Jul 31 placement price ($3.285) sits just above today's $3.17 print — the -5.93% gap likely reflects dilution overhang/technical pressure from that raise trading through its placement price, not a new negative catalyst.
- Impact: Volume is negligible (100 sh) — not a confirmed repricing on an illiquid $6.94M market-cap name. Recent dilution and pre-revenue-scale losses are real overhangs regardless of today's specific print.
- Horizon: SHORT_TERM — no structural negative catalyst, but no durable long thesis either given revenue scale and dilution.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing displaced. Volume this thin (100 sh) fails the practical liquidity bar for a sized position before R:R is even considered. Pass.

## 2026-08-04 — Gappers (auto-scan 11:22 ET, cloud)

Fifth scheduled fire of the day. Watchlist scan (`scripts/gappers-alpaca.sh
watchlist`, GAP_THRESHOLD=5.0) returned 5 raw prints; one (AGMH, $0.87) was
dropped for failing the $3.00 minimum price filter, leaving **4 qualifying
gappers** — 1 upside, 3 downside — all under the 10-ticker cap so all 4 get
deep-dive treatment. Apify RAG web browser again returned "Monthly usage
hard limit exceeded" on every query (same outage flagged since 7/29, still
not reset) — fell back to WebFetch against `benzinga.com/quote/<TICKER>`
for catalyst headlines and `stockanalysis.com/stocks/<TICKER>` for
fundamentals/recent-developments research.

Notable: BWLP is a repeat name from this morning's 10:15 ET scan but has
flipped direction (+7.22% then, -7.29% now) — same-session reversal, no
new catalyst found, reads as unwind/noise rather than a fresh signal. None
clear a trade today: BWLP fails on the direction-flip/no-fresh-catalyst
basis above; TRMD's move has no confirmed same-day driver (plausible
continuation of its own record-Q1 freight-rate story, but unconfirmed) and
`tradingview-data` MCP remains unavailable for the Confluence check; SYNA
is excluded outright by the no-earnings-binary rule (Aug 6 print, 2 days
out) plus the all-stock ON Semi deal complicates any standalone reading;
WLDS traded on just 100 shares (not a real repricing), same liquidity
problem as its 10:15 ET appearance. 0/6 open positions, 0/3 weekly trade
slots used (week of Aug 3) — nothing displaced by holding off.

### Gappers (auto-scan 11:22 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BWLP | $20.10 | -7.29% | 8,063 | Direction flip from +7.22% this morning; no fresh catalyst, reads as unwind |
| 2 | TRMD | $31.64 | +7.04% | 3,415 | Likely continued freight-rate momentum off record Q1 earnings; no fresh same-day headline confirmed |
| 3 | SYNA | $99.47 | -6.92% | 9,466 | Tracking ON Semi all-stock deal value and/or pre-earnings (Aug 6) de-risking |
| 4 | WLDS | $3.17 | -5.93% | 100 | No dated catalyst found; 100-share volume, likely thin-liquidity noise |

#### Deep dive: BWLP $20.10 -7.29%
- Catalyst: Benzinga's cached top story still ties BWLP to renewed Iran-tension energy plays (same headline surfaced at 10:15 ET, when BWLP printed +7.22%) — no fresh news found to explain today's flip to -7.29%.
- Why: A same-session reversal from +7.22% to -7.29% with no new bearish news reads as profit-taking/mean-reversion off the earlier spike, not a new negative catalyst.
- Impact: Volume (8,063 sh) is thin relative to the size of the swing; consistent with an intraday unwind, not a confirmed new trend.
- Horizon: SHORT_TERM — no structural catalyst behind today's reversal; not a thesis worth holding.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing displaced. Same-session direction flip fails the Confluence rule's stability bar outright; `tradingview-data` MCP still unavailable regardless. Pass.

#### Deep dive: TRMD $31.64 +7.04%
- Catalyst: TORM plc (product-tanker shipper) — Benzinga's cached top story is dated Jan 26, 2026 (stale); no fresher same-day headline found. Recently reported record Q1 2026 earnings on strong freight rates, raising FY revenue guidance to $800M-$1.1B. NASDAQ-listed, ~8.18% dividend yield, analyst consensus "Buy" with a $36 PT (~14% above spot). 2025 net income fell 53.42% YoY despite the strong Q1; PE 8.65.
- Why: No fresh same-day news found — most plausible read is continued momentum in tanker freight-rate strength (the same driver behind the record Q1 print), but this is unconfirmed, flagged as a data gap.
- Impact: Volume (3,415 sh) is thin for a 7% move. If freight rates are genuinely still climbing, sector peers likely show read-through — not confirmed this scan (Apify down).
- Horizon: LONG_TERM candidate IF the freight-rate strength is structural (Energy is a late-cycle favored sector per TRADING-STRATEGY.md) — but SHORT_TERM by default since today's specific driver is unconfirmed.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing displaced. Best 2:1 R:R math of today's 4 (7-10% stop ≈ $2.21-$3.16 risk vs a $35.86-$38.06 target, close to the $36 analyst PT) — but still needs a confirmed today-specific catalyst plus the Confluence check (`tradingview-data` unavailable) before it clears the entry checklist.

#### Deep dive: SYNA $99.47 -6.92%
- Catalyst: ON Semiconductor's ~$7B all-stock acquisition of Synaptics (announced Jun 26, 2026, "physical AI"/edge-compute rationale) already prompted analyst downgrades on valuation. Synaptics reports fiscal 2026 full-year results Aug 6, 2026 (2 days out). Consensus rating "Hold", $143.67 12-month target (reflects deal-implied value, well above today's $99.47 print).
- Why: In an all-stock deal, SYNA's price tracks the implied exchange-ratio value of ON Semi's own stock — if ON Semi shares fell, SYNA's deal-implied value falls too. Pre-earnings positioning ahead of Aug 6 is a plausible secondary driver. Apify was down, so the specific trigger isn't confirmed.
- Impact: Volume (9,466 sh) is the highest of today's 4 but still thin in absolute terms. A move this size just before a scheduled print, on a name mid-acquisition, reads as event-driven positioning, not a durable repricing.
- Horizon: SHORT_TERM — earnings print in 2 days makes this a binary event window regardless of direction; no durable read until the print clears and deal terms firm up.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing displaced. Excluded outright by the no-earnings-binary practice (same rule applied to BKSY/SATL/UMAC this week) given the Aug 6 print 2 days out. Pass regardless of R:R math.

#### Deep dive: WLDS $3.17 -5.93%
- Catalyst: No dated same-day catalyst found — Benzinga's cached top story is a stale Jul 2024 "stock surging on reverse split" headline, unrelated to today's move. Wearable Devices (Mudra neural-interface wristbands) reported 2025 revenue of $647K (+24% YoY) against an $8.11M net loss; recently partnered with Meta-Bounds for AR integration and completed a 1-for-3 reverse split; holds $18.4M cash.
- Why: The prior day's volume feeding this gap calc was only 100 shares — at that size a ~6% "gap" most likely reflects thin-liquidity quote noise on a micro-float name, not a real repricing. Matches the same liquidity read from this ticker's 10:15 ET appearance.
- Impact: Not likely sustainable — lowest volume of today's 4, no catalyst corroborates it, sub-$5 microcap with a history of a reverse split for Nasdaq-compliance reasons.
- Horizon: SHORT_TERM — no structural catalyst identified; reads as noise likely to fade if the print is even real.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing displaced. Fails the Confluence rule's catalyst leg outright (no catalyst to document) and the practical liquidity bar (100 sh volume). Pass.

## 2026-08-04 — Setup Scan (16:38 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 0 grade-B hits.**
0 errors. No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

### Setup Scan (16:38 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| — | — | no hits this run | — | — |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-05 — Pre-Market Research (cloud routine)

Apify RAG web browser hit "Monthly usage hard limit exceeded" on all 4
topic queries — same outage flagged continuously since 2026-07-29, 8th+
consecutive session, still not reset. Fell back to native WebSearch
(Yahoo domains blocked via `blocked_domains`) per routine rule.
`tradingview-data` MCP still absent (`ToolSearch`: no match) — confluence
rule (>=2 of VWAP/RSI/200-SMA/insider) remains unsatisfiable for any
candidate, same unresolved gap as every session since 2026-07-25.

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 20 straight trading days
  since the Day-0 baseline (2026-07-08 launch). Same confirmed-live-vs-
  $10k-baseline mismatch flagged 2026-07-27, still unresolved/operator
  pending — not re-litigating here.
- Weekly trade count: 0/3 (week of Aug 3, unchanged).

### Market Context (WebSearch fallback, Wed 8/5 premarket ET)
- **Oil — falling on de-escalation**: Brent ~$83.72/bbl (down ~$6.09 from
  yesterday morning per one source), WTI forecast range $78.42-$80.53.
  Driven by Bessent saying a US-Iran deal to reopen the Strait of Hormuz
  could land "today or tomorrow" — a 60-day temporary arrangement lifting
  tolls/removing naval mines reportedly close.
- **S&P 500 futures — risk-on, extending a record close**: ES +0.39-0.4%
  premarket, following the S&P 500's +1.79% close at 7,736.52 (fresh
  record) on Aug 4. Polymarket implied ~87% odds of an "Up" open today.
  Gains attributed to strong earnings + falling oil + Iran-deal optimism.
- **VIX — subdued, ticking up slightly**: ~16.5, up ~4% from prior session
  but still historically low — thin insurance into an earnings-heavy day.
- **Earnings — today, before open**: Eli Lilly (LLY), Disney (DIS), Novo
  Nordisk (NVO), Shopify (SHOP), CVS, Uber (UBER), AppLovin (APP); Sandisk
  (SNDK)/Western Digital (WDC) reporting AMC. None held/watchlist-tagged.
- **Econ calendar**: June JOLTS at 10am ET (est. ~7.45M openings, down from
  7.59M in May). No CPI (next print Aug 12), no FOMC this week.
- **Sector YTD — source conflict persists**: one read has Energy/Consumer
  Staples/Industrials/Materials leading, Technology/Communications/Consumer
  Discretionary/Financials lagging, Healthcare weakening, Real
  Estate/Utilities improving — but the same read flags Q2 alone flipped to
  Tech leading (+43% large-cap) while Energy large-caps fell -13%. Same
  unresolved conflict as 8/3 — not sizing sector bets off either figure.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Watchlist spot-checks (live Alpaca bars, since MCP/Apify both down)
- **CRWV (CoreWeave)** — closed $91.89 on 8/4, up from $60.85 on 7/29:
  +51% in 4 sessions. Grossly extended — fails the "no entry within 3% of
  a >5% up print" chase rule outright, regardless of catalyst quality.
- **OKLO (Oklo)** — closed $43.34 on 8/4, +5.1% day-over-day from $41.22.
  Right at the chase-rule threshold; no dated, company-specific catalyst
  confirmed for today specifically (broad AI-buildout theme only). Note:
  WATCHLIST.md's stale plan ("Buy $135 x10sh") is ~3x off current price —
  data-quality flag, not usable as a reference entry.
- **NOC (defense)** — closed $551.49 on 8/4, +0.53% day-over-day, trading
  in a stable $520-555 range over 30 days. No fresh catalyst dated today.

### Trade Ideas
None cleared to Tier-1 (documented-catalyst + confluence bar not met):
1. **OKLO — watch only, not actionable today.** Catalyst: AI/nuclear-power
   buildout theme, Sam Altman-linked. Already +5.1% on 8/4 (borderline
   chase), no today-specific catalyst confirmed, and confluence
   unsatisfiable (`tradingview-data` MCP down). If it holds/consolidates
   near $43 with a fresh catalyst next session: illustrative entry ~$43,
   stop ~$38.70 (-10%), target ~$52 (2:1 R:R) — not a plan for today.
2. **Iran/Hormuz de-escalation trade (energy-linked shorts/tanker names) —
   not actionable.** Falling oil on a reported US-Iran deal cuts against
   the tanker/shipping thesis (BWLP/TRMD) rather than supporting it — same
   names flagged as noise/direction-flip repeatedly this week (8/3, 8/4).
   No fresh long setup here.
3. **Mega-cap earnings today (LLY/DIS/NVO/SHOP/UBER/APP) — excluded.**
   All report before today's open; strategy's no-earnings-binary-bet rule
   excludes trading the print regardless of direction (same rule applied
   to ON 8/3, MSFT/AMZN 7/31). None are watchlist-tagged tickers anyway.

### Risk Factors
- **Apify still fully down** — 8th+ consecutive session (since 7/29),
  spans two full weeks. Operator: check Apify billing/plan — blocking the
  primary research path indefinitely.
- **`tradingview-data` MCP still absent** — confluence rule unsatisfiable
  since 7/25, now 20 straight sessions. Same operator flag, escalating.
- **VIX complacency** — ~16.5 into a dense earnings day (7 mega-caps
  reporting) plus an unresolved geopolitical (Iran/Hormuz) headline that
  could reverse either direction intraday.
- **Sector-YTD source conflict** (broad-YTD leaders vs. Q2-only leaders)
  unresolved — don't size sector bets off either figure.
- **CRWV extension** — +51% in 4 sessions is a reminder to sanity-check
  any watchlist "idea" tier price against live bars before treating it as
  an entry reference; WATCHLIST.md plan prices are going stale (OKLO's
  noted above).

### Decision
**HOLD — no trades.** Tape is risk-on (S&P at a fresh record, futures
+0.4%, VIX still subdued) on falling oil/Iran-deal optimism and strong
earnings, but nothing on the watchlist clears the entry checklist: CRWV is
badly overextended (+51%/4 sessions), OKLO is borderline-chase with no
today-specific catalyst, tanker names are undercut by the same
de-escalation driving the rally, and today's mega-cap earnings are
excluded by the no-earnings-binary rule. `tradingview-data` MCP still
down (20 straight sessions) and Apify still hard-capped (8th+ consecutive
session) — confluence rule unsatisfiable regardless. Zero positions, zero
orders, 20 straight flat trading days — patience over activity. New week
unchanged: 0/3 trade slots used. ClickUp notify call returned HTTP 500
(same recurring failure as 7/31, 8/3 — keys confirmed present, not a
credential issue) — non-blocking since this was a silent/non-urgent call.

## 2026-08-06 — Pre-Market Research (cloud routine)

Apify RAG web browser hit "Monthly usage hard limit exceeded" on all 6
topic queries — same outage flagged continuously since 2026-07-29, 9th+
consecutive session, still not reset. Fell back to native WebSearch
(Yahoo domains blocked via `blocked_domains`) per routine rule.
`tradingview-data` MCP still absent (`ToolSearch`: no match) — confluence
rule (>=2 of VWAP/RSI/200-SMA/insider) remains unsatisfiable for any
candidate, same unresolved gap as every session since 2026-07-25 (21
straight sessions now).

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 21 straight trading days
  since the Day-0 baseline (2026-07-08 launch). Same confirmed-live-vs-
  $10k-baseline mismatch flagged 2026-07-27, still unresolved/operator
  pending — not re-litigating here.
- Weekly trade count: 0/3 (week of Aug 3, unchanged).

### Market Context (WebSearch fallback, Thu 8/6 premarket ET)
- **Oil**: WTI ~$78.42-80.53/bbl, Brent ~$83.45/bbl (per Aug 4 opens —
  no clean same-day print found). Still swinging on every Middle East
  headline per Bloomberg's Thu wrap.
- **S&P 500 futures — mixed/divergent**: Dow +0.33%, SPY +0.22%, Nasdaq
  (QQQ) -0.3% lagging. Follows Wed's close: S&P 500 -0.17% to 7,723.55,
  snapping a 4-session win streak (profit-taking in tech) even as the Dow
  hit a fresh record. Polymarket implied ~69% odds of an "Up" open today.
- **VIX — subdued, ticking down**: ~15.77 (-4.4%), opened ~16.15. Calm
  into a dense earnings day.
- **Earnings — today, before open**: ConocoPhillips (COP), Cloudflare
  (NET), Airbnb (ABNB) headline the print; ~56 companies reporting
  today across sectors (Tech 11, Comm Services 8, Healthcare 7, Financials
  6, others fewer). None held/watchlist-tagged.
- **Econ calendar**: Q2 preliminary productivity data today. Tomorrow
  (Fri 8/7) brings June nonfarm payrolls, hourly earnings, unemployment
  rate — a real catalyst risk for anything opened today and held overnight.
  No CPI/FOMC this week.
- **Sector YTD**: Semiconductors the "runaway leader" (Micron/SanDisk
  +248%/+736% YTD per one source); July flipped to Energy/Industrials/
  Materials/Consumer-Staples leading (Energy sector ETF +12% in July on
  the oil rebound) while Tech lagged (-8% in July on AI-spend jitters).
  Same broad-YTD-vs-recent-month conflict flagged 8/3 and 8/5 — still not
  sizing sector bets off either figure.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Watchlist spot-checks (live Alpaca quotes, since MCP/Apify both down)
- **CRWV (CoreWeave)** — bid $85.48, down from $91.89 close on 8/4 (~-7%
  pullback off the +51%/4-session extension). Cooling, not a fresh entry;
  still no dated catalyst for today specifically.
- **OKLO (Oklo)** — bid $40.85, down from $43.34 close on 8/4 (~-5.7%).
  Also cooling off the chase-rule threshold flagged yesterday. No fresh
  today-specific catalyst.

### Trade Ideas
None cleared to Tier-1 (documented-catalyst + confluence bar not met):
1. **CRWV/OKLO — watch only, not actionable.** Both AI-buildout names
   pulled back overnight after prior-week extensions; no fresh catalyst
   today, confluence unsatisfiable (`tradingview-data` MCP down). Would
   need a fresh, dated catalyst plus a stabilized base before re-evaluating.
2. **Semiconductor momentum theme (AMKR/KLIC on watchlist)** — sector is
   the strongest YTD momentum leader per research, but no company-specific
   catalyst dated today for either name, and no confluence check possible.
   Flagged for closer look on a future session with a real catalyst, not
   actionable today.
3. **COP/NET/ABNB earnings today — excluded.** All report before today's
   open; strategy's no-earnings-binary-bet rule excludes trading the print
   regardless of direction. None are watchlist-tagged tickers anyway.

### Risk Factors
- **Apify still fully down** — 9th+ consecutive session (since 7/29), over
  two full weeks. Operator: check Apify billing/plan — blocking the
  primary research path indefinitely.
- **`tradingview-data` MCP still absent** — confluence rule unsatisfiable
  since 7/25, now 21 straight sessions. Same operator flag, escalating.
- **Tomorrow's jobs report (Fri 8/7)** — nonfarm payrolls/unemployment is
  a real overnight-hold risk for anything opened today; factor into any
  stop/size decision if a setup does clear later today.
- **Nasdaq lagging in premarket** (-0.3%) while Dow/S&P lead — a rotation
  signal worth watching, not yet actionable without confluence.
- **Sector-YTD source conflict** (broad-YTD leaders vs. July-only leaders)
  unresolved — don't size sector bets off either figure.

### Decision
**HOLD — no trades.** Futures are mixed (Dow/SPY up, Nasdaq down) after
Wednesday's profit-taking snapped the S&P's win streak; VIX stays calm.
No watchlist name clears the entry checklist: CRWV/OKLO are cooling off
prior extensions with no fresh catalyst, semiconductor sector momentum has
no company-specific trigger dated today, and today's earnings names
(COP/NET/ABNB) are excluded by the no-earnings-binary rule and aren't
watchlist tickers anyway. `tradingview-data` MCP still down (21 straight
sessions) and Apify still hard-capped (9th+ consecutive session) —
confluence rule unsatisfiable regardless. Zero positions, zero orders, 21
straight flat trading days — patience over activity. Tomorrow's jobs
report is a reason for extra caution on any new overnight hold. Weekly
trade count unchanged: 0/3 (week of Aug 3).

## 2026-08-04 — Setup Scan (18:39 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 0 grade-B hits.**
0 errors. No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

### Setup Scan (18:39 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| — | — | no hits this run | — | — |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-05 — Gappers (auto-scan 08:22 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **1 hit** of 60 tracked tickers, all filters applied (|gap|>=5%,
price>=$3, premarket_volume field not populated by this script so that
filter was skipped). Apify RAG web browser still "Monthly usage hard limit
exceeded" on both queries (9th+ consecutive session) — fell back to
WebFetch (Benzinga + stockanalysis.com) per routine rule.

### Gappers (auto-scan 08:22 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | OPEN | 3.86 | -6.65% | 1,814,255 | Q2 2026 earnings released Aug 4 ("Everything is Up, Except Costs") — stock popped intraday Aug 4, now fading premarket Aug 5. |

#### Deep dive: OPEN $3.86 -6.65%
- Catalyst: Opendoor reported Q2 2026 results on Aug 4: revenue up 23%
  QoQ, contribution profit up 59% QoQ, management guiding to annual
  adjusted EBITDA profitability by year-end 2026. Stock closed Aug 4 up
  4.57% at $4.12 on the print, then gapped down -6.65% premarket Aug 5.
  Company also shut down India operations in June (250 layoffs), shifting
  toward AI. TTM revenue $3.25B (-37.2% YoY), TTM net loss -$1.52B, 964.74M
  shares outstanding, analyst consensus Hold with a $5.61 PT (+20% from
  premarket price).
- Why: Classic "sell the news" reversal — Q2 beat drove a same-day pop,
  but with the company still deeply unprofitable (-$1.52B TTM) and a very
  large share count, the premarket fade reads as profit-taking / guidance
  skepticism (EBITDA-profitability-by-YE26 target still unconfirmed,
  revenue still down YoY) rather than a fresh negative catalyst.
- Impact: Volume (1.81M sh) is large in absolute terms and the move
  reverses ~all of Aug 4's gain, which argues this is a real two-day
  round-trip on the earnings print, not noise. No sector peer read-through
  identified (real-estate iBuyer is a thin comp set); this looks
  idiosyncratic to OPEN's own guidance credibility, not a group move.
- Horizon: SHORT_TERM — this is a headline/earnings-reaction move with no
  new structural catalyst; the durable question (can OPEN actually hit
  EBITDA profitability by YE26) won't resolve for months, so no basis for
  a multi-week hold off today's print alone.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used (week of
  Aug 3) — nothing displaced. Deeply unprofitable microcap with a >6% gap
  down on an earnings overhang fails the Entry Checklist's catalyst
  leg for a long (the catalyst just fired negative, not positive) and
  `tradingview-data` MCP is still unavailable in this cloud routine so the
  Confluence rule (>=2 of VWAP/RSI/200-SMA/insider) can't be checked
  either way. A 7-10% stop below $3.86 (~$0.27-$0.39 risk) would need a
  $4.40-$4.64 target for 2:1 R:R — inside the pre-gap $4.12 level, i.e. a
  bet on the gap filling, not a fresh breakout; not a qualifying setup as
  scanned. Research only, no order placed.

## 2026-08-05 — Gappers (auto-scan 09:22 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **6 hits** of 60 tracked tickers; 1 (LAKE, -5.64%) dropped on the
premarket_volume>=50000 filter (3,526 sh), leaving **5** after all filters
(|gap|>=5%, price>=$3, volume>=50k). Apify RAG web browser still "Monthly
usage hard limit exceeded" on all 10 queries (9th+ consecutive session) —
fell back to WebFetch (Benzinga + stockanalysis.com) per routine rule for
both the catalyst headline and fundamentals research legs. All 5 gappers
qualified for the deep-dive tier (cap is 5; today's filtered list has only
5 total, so none were quick-scan-only by rank).

### Gappers (auto-scan 09:22 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | KTOS | 59.81 | +15.30% | 251,587 | Q2 2026 double beat (revenue + EPS), guidance raised — business momentum expected to accelerate. |
| 2 | NYT | 67.69 | -10.53% | 217,446 | Q2 revenue/EPS in line but digital subscriber growth slowed; circulating Buffett-stake headline is unrelated/stale. |
| 3 | AMPX | 11.85 | +9.52% | 451,333 | Q2 beat, FY guidance raised to $130M+; Cramer issued a same-day buy call. |
| 4 | GFS | 47.82 | -8.43% | 249,874 | Q2 revenue beat, but Morgan Stanley cut PT $65->$57 same day — downgrade overriding the beat. |
| 5 | OPEN | 3.91 | -5.44% | 1,814,255 | Continuation of the Aug 4 earnings sell-the-news fade, easing from -6.65% at 08:22 ET to -5.44% now. |

#### Deep dive: KTOS $59.81 +15.30%
- Catalyst: Kratos reported Q2 2026 revenue of $458.8M (+19.1% organic),
  net income up 113.1% to $30.9M, and raised FY organic revenue growth
  guidance to 19%-23%. Recent wins: ~$400M Department of War contract plus
  counter-drone/space domain awareness awards, a new 167,000 sq ft
  Pennsylvania plant, and a $50M Indiana hypersonic facility completed
  ahead of schedule.
- Why: Beat-and-raise (double beat plus a guidance hike) is the textbook
  mechanism for pulling in momentum buyers; the beat's magnitude plus
  concrete contract wins gives the move a fundamental anchor, not just
  headline reaction.
- Impact: Premarket volume (251,587 sh) is moderate but not extreme
  relative to the beat size; the raised full-year guide argues this is a
  real repricing, not a one-day spike. Possible thematic read-through with
  AMPX, also gapping today on a related aviation/defense theme.
- Horizon: LONG_TERM — guidance raise and contract backlog are structural;
  defense/industrials sit in the early-cycle favored-sector bucket per
  TRADING-STRATEGY.md's sector rotation table. Worth a confluence check on
  a later /trade pass, not a same-day fade play.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used (week of
  Aug 3) — nothing displaced. Top-ranked gapper today (15.3%).
  tradingview-data MCP still unavailable in this cloud routine so the
  Confluence rule can't be checked either way; a 7-10% stop below $59.81
  (~$4.19-$5.98 risk) needs a ~$68.20-$71.77 target for 2:1 R:R — plausible
  given the guidance raise but unconfirmed without technicals. Research
  only, no order placed.

#### Deep dive: NYT $67.69 -10.53%
- Catalyst: NYT reported Q2 2026 revenue of $762.5M and adjusted EPS of 69
  cents, but digital subscriber growth slowed versus prior quarters even
  as digital subscription revenue grew 16.4% YoY. Also faces ongoing DOJ
  subpoenas tied to Air Force One security reporting (DOJ has agreed to
  withdraw some). The circulating Buffett/Berkshire-stake-at-ATH headline
  is stale positive coverage, not a fresh catalyst for today's gap down.
- Why: Reads as a Q2 earnings reaction — decelerating digital subscriber
  growth overshadowing an in-line revenue/EPS print, a "growth
  deceleration disappoints despite a beat" mechanism, not the Buffett
  headline circulating today.
- Impact: Premarket volume (217,446 sh) is moderate. No clear sector-wide
  read-through — media/publishing peer set is thin and no other watchlist
  name is moving in sympathy, so this looks idiosyncratic to NYT's own
  subscriber numbers rather than a group move.
- Horizon: SHORT_TERM — earnings-reaction gap with no structural catalyst
  beyond a subscriber-growth deceleration; absent confirming details this
  should stabilize within days, not a multi-week thesis.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing
  displaced. Second-ranked by |gap%| but a decliner: fails the Entry
  Checklist's catalyst leg for a long (catalyst just fired negative) and
  the strategy is long-stocks-only, so not actionable today regardless of
  size.

#### Deep dive: AMPX $11.85 +9.52%
- Catalyst: Amprius (silicon-anode Li-ion batteries for aviation/drone
  use) released Q2 2026 earnings today and raised FY revenue guidance to
  at least $130M, building on FY2025 revenue of $73.01M (+202% YoY, still
  unprofitable, -$44.02M loss). Existing Matternet drone-delivery
  partnership; consensus rates it Strong Buy.
- Why: Earnings beat plus raised FY guidance, amplified by a same-day
  Cramer buy call, is a beat-and-raise-plus-publicity mechanism pulling in
  both fundamental and retail momentum buyers together.
- Impact: Premarket volume (451,333 sh) is the largest of today's
  up-movers, supporting a real repricing rather than noise. Possible
  thematic read-through with KTOS — both serve aviation/defense end
  markets.
- Horizon: LONG_TERM — guidance raise is structural and the drone-battery
  demand story is durable, but the company remains unprofitable; treat as
  a confluence-confirmation candidate, not a same-day chase.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing
  displaced yet, but AMPX and KTOS are both defense/aviation-adjacent
  gappers today; taking both would need to clear the correlation gate
  (scripts/corr-gate.mjs, blocks >0.75 correlation with 2+ open positions)
  and the max-3-new-trades/week cap — a rank/size choice if both later
  clear confluence, not a guaranteed double-entry.

#### Deep dive: GFS $47.82 -8.43%
- Catalyst: GFS beat Q2 2026 revenue estimates ($1.79B vs $1.76B
  consensus) but Morgan Stanley cut its price target from $65 to $57 same
  day. Also disclosed a $300M LOI for a U.S. government silicon-photonics
  R&D award, completed the Synopsys Processor IP Solutions acquisition,
  and expanded its Infosys AI-managed-services collaboration.
- Why: A same-day sell-side downgrade/PT cut overriding an earnings beat
  and positive strategic news is a "beat but re-rated down" mechanism —
  the market pricing the analyst's forward view over the trailing print.
- Impact: Premarket volume (249,874 sh) is moderate. Possible
  semiconductor-sector read-through worth checking against peer foundry
  names to confirm whether this is GFS-specific downgrade risk or a
  broader semis re-rating.
- Horizon: SHORT_TERM — a single-analyst downgrade against a revenue beat
  and a government-award positive reads as a near-term overreaction, not
  enough alone to call a structural regime change.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing
  displaced. Fourth-ranked decliner: fails the Entry Checklist's catalyst
  leg for a long (fresh negative catalyst dominates) and the strategy is
  long-stocks-only, so not actionable as scanned even before R:R.

#### Deep dive: OPEN $3.91 -5.44%
- Catalyst: Same catalyst as the 08:22 ET deep dive above — Q2 2026
  results (revenue +23% QoQ, contribution profit +59% QoQ, EBITDA
  profitability guide within 12 months from Q2 2026). Stock popped
  intraday Aug 4 then gapped down premarket Aug 5; still deeply
  unprofitable (FY2025 revenue -15.18% YoY to $4.37B, loss expanded to
  $1.30B). Fade has eased from -6.65% (08:22 ET) to -5.44% now.
- Why: Same sell-the-news reversal mechanism as the earlier scan, now
  showing signs of decelerating rather than deepening.
- Impact: Premarket volume (1,814,255 sh) remains the largest of today's
  list, consistent with a real repricing; the fade easing over 55 minutes
  suggests the move may be stabilizing intraday rather than accelerating.
- Horizon: SHORT_TERM — unchanged from the 08:22 ET assessment.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing
  displaced. Already deep-dived at 08:22 ET; no new information changes
  that verdict — still fails the Entry Checklist's catalyst leg for a
  long, and tradingview-data MCP remains unavailable so the Confluence
  rule can't be checked.

## 2026-08-05 — Gappers (auto-scan 10:21 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **4 hits** of 60 tracked tickers. 1 (APT, -7.80%) dropped before
ranking — unresolved ticker per this file's own header note (line 10,
"Unresolved symbols (BREA, APT, LAKE) are excluded from scanning until
their actual company/ticker is confirmed"; line 55 flags APT as "verify —
'Apt': Alpha Pro Tech? AppTech? clarify"). The scanner's watchlist-parsing
regex doesn't yet enforce that exclusion (picked APT up anyway from ticker
soup) — flagging as a known scanner gap, not fixed here (out of scope for
a research-only routine). Leaves **3** qualifying gappers, all price>=$3;
premarket_volume field isn't populated by this scanner (it returns prior
full-day volume, not premarket flow — noted per-ticker below), so that
filter leg was not applicable. Apify RAG web browser: "Monthly usage hard
limit exceeded" on all 3 queries — fell back to WebFetch against
Benzinga quote pages per routine rule for both catalyst and fundamentals
legs. All 3 qualified for the deep-dive tier (cap is 5; only 3 total
today, so none were quick-scan-only by rank).

### Gappers (auto-scan 10:21 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BW | 10.88 | +7.46% | 8,806 (stale, prior session) | Investors weigh buybacks, $61.4M note redemption vs weakening momentum. |
| 2 | SYNA | 96.38 | -7.15% | 7,397 (stale, prior session) | ON Semiconductor to acquire Synaptics in an all-stock deal; analysts downgraded post-announcement. |
| 3 | KLIC | 103.11 | +6.92% | 6,883 (stale, prior session) | Shares spiked as much as +19% premarket on a Q3 2026 earnings beat, now faded to +6.92%. |

#### Deep dive: BW $10.88 +7.46%
- Catalyst: Babcock & Wilcox highlighted share buybacks and a $61.4M note
  redemption; shares had wobbled Monday on weakening momentum despite a
  better-than-expected Q1 2026 print. Q2 2026 earnings are scheduled for
  Aug 10 after market close (5 sessions out).
- Why: Buyback/debt-paydown headlines plus residual momentum from the Q1
  beat are pulling in short-term dip buyers after Monday's pullback — a
  bounce mechanism, not a fresh catalyst.
- Impact: Alpaca's volume field is the prior session's full-day total
  (8,806 sh), not today's premarket volume, so the move can't be
  volume-confirmed. This is the same name flagged in the Aug 3 gappers
  scan (see TRADE-LOG), where consensus PT ($5.75) was already noted
  sitting well below spot — a repeat appearance on a stock analysts rate
  well overvalued reads as noise, not a strengthening thesis.
- Horizon: SHORT_TERM — buyback/momentum headline with no new catalyst
  since Aug 3, upcoming Aug 10 earnings adds binary risk, consensus PT
  ($5.75) implies ~47% below spot; no durable long thesis.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used (week of
  Aug 3) — nothing displaced by slot count. But consensus PT sitting far
  below spot means a 7-10% stop can't be paired with a 2:1 upside target
  any analyst supports — fails the R:R leg of the Entry Checklist on
  fundamentals alone, same conclusion as Aug 3.

#### Deep dive: SYNA $96.38 -7.15%
- Catalyst: ON Semiconductor announced an all-stock acquisition of
  Synaptics aimed at expanding AI/edge-device capabilities. Analysts
  downgraded SYNA following the announcement, and shares are trading down
  from the deal-announcement level rather than up on a typical
  acquisition premium.
- Why: In an all-stock deal, the target's price tracks the acquirer's
  stock times the exchange ratio; SYNA trading down (not up on a premium)
  signals the market reads the offered exchange ratio as light, or is
  discounting ON Semi's own shares — either way a deal-terms repricing,
  not organic weakness.
- Impact: Reads as a structural M&A repricing rather than a one-day
  headline spike — price should track near the implied deal value until
  terms firm up or the deal closes, not mean-revert on its own. Volume
  field is stale prior-session volume (7,397 sh), doesn't confirm today's
  flow.
- Horizon: LONG_TERM catalyst (M&A is structural, not headline noise) but
  NOT a viable fresh long either horizon — upside is capped near the
  announced deal/exchange-ratio value and the move is a decline, not a
  breakout; no long entry catalyst here regardless of holding period.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing
  displaced. Excluded on catalyst-direction grounds before R:R math
  applies: the Entry Checklist requires a catalyst supporting the trade
  direction, and this is a down move with capped upside, not a long
  setup.

#### Deep dive: KLIC $103.11 +6.92%
- Catalyst: Kulicke & Soffa (semiconductor assembly/test equipment) beat
  Q3 2026 earnings expectations, spiking as much as +19% premarket before
  fading to +6.92% by this scan (10:21 ET). Conference call scheduled
  tomorrow 8:00am.
- Why: Earnings beat pulling in momentum buyers and short covering —
  amplified because the stock already carries an elevated P/E (~90.8x),
  so a beat against a demanding valuation tends to produce an outsized
  initial reaction.
- Impact: Meaningful intraday fade already visible (premarket +19% ->
  +6.92% now), consistent with a one-day headline spike partially
  mean-reverting rather than holding its gains cleanly. Volume field is
  stale prior-session total (6,883 sh), not today's flow. Sector
  read-through worth checking against other watchlist semi-equipment
  names (AMKR).
- Horizon: SHORT_TERM — single earnings print with an already-visible
  intraday fade, consensus PT ($59.80) sits far below spot ($103.11)
  implying the stock is priced well past analyst targets, and tomorrow's
  earnings call adds fresh binary risk; no structural catalyst beyond the
  print.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing
  displaced by slot count. Best-formed catalyst of the three (real beat,
  not just headline), but consensus PT ($59.80) is far below spot, so a
  7-10% stop below $103.11 entry has no analyst-supported target that
  clears 2:1 R:R — fails the R:R leg of the Entry Checklist on current
  numbers.

## 2026-08-05 — Gappers (auto-scan 11:20 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **4 hits** of 60 tracked tickers. 1 (APT, -7.80%) dropped before
ranking — unresolved ticker per this file's own header note (line 10,
"Unresolved symbols (BREA, APT, LAKE) are excluded from scanning until
their actual company/ticker is confirmed"; line 55 flags APT as "verify —
'Apt': Alpha Pro Tech? AppTech? clarify"), and its Benzinga news feed is
dominated by the unrelated Aptos crypto token — no dated catalyst found for
today's move, same treatment as the 10:21 ET scan. Leaves **3** qualifying
gappers, all price>=$3; premarket_volume field isn't populated by this
scanner (returns prior full-day volume, not premarket flow — noted
per-ticker below), so that filter leg was not applicable. Apify RAG web
browser: "Monthly usage hard limit exceeded" on all queries (persists from
the 10:21 ET scan) — fell back to WebFetch against Benzinga for the
catalyst leg and WebSearch (Yahoo Finance domains blocked) for the
fundamentals leg per routine rule. All 3 qualified for the deep-dive tier
(cap is 5; only 3 total today, so none were quick-scan-only by rank).

### Gappers (auto-scan 11:20 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | TRMD | 31.02 | +7.24% | 10,527 (stale, prior session) | Product-tanker sector strength (crude production + seasonal tailwinds) plus TORM's own raised FY26 guidance and new fleet order. |
| 2 | BWLP | 22.53 | +6.73% | 3,812 (stale, prior session) | Riding an "undervalued energy stocks on Iran tensions" theme, alongside a strong Q1 print and $940M fleet order. |
| 3 | ZIM | 25.01 | -6.73% | 35,418 (stale, prior session) | Shares fell as the Hapag-Lloyd $35/share cash-acquisition moves through regulatory review stages. |

#### Deep dive: TRMD $31.02 +7.24%
- Catalyst: TORM plc reported strong Q1 2026 results (TCE earnings $286M,
  EBITDA $201M, net profit $122M, EPS $1.21, fleet-wide TCE $34,937/day) and
  upgraded FY2026 guidance to TCE $1,150-1,450M / EBITDA $800-1,100M. It
  also broke an 8-year newbuild drought with a $370M order for up to 8
  product tankers via a Chinese yard. Today's headlines cite broader
  crude-production and seasonal tailwinds for the product-tanker sector.
  Next earnings Aug 26.
- Why: Genuine sector rate strength (LR2/LR1/MR day rates all elevated)
  plus company-specific reinforcement (raised guidance, fleet expansion,
  ~8% TTM dividend yield) is pulling in momentum and income buyers
  together.
- Impact: Today's Pre-Market Research (this file, 2026-08-05) already
  flagged that tanker names are being undercut by the same Iran/Hormuz
  de-escalation optimism driving the broader market rally — a genuine
  tension against tanker-rate bulls even on an up day. Volume field is
  stale prior-session total (10,527 sh), not today's flow.
- Horizon: LONG_TERM — raised FY26 guidance, a fleet-expansion order, and a
  strong dividend policy are structural, not headline noise; but the
  Iran-de-escalation tension above needs resolving before treating this as
  a clean multi-week hold.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used (week of Aug
  3) — nothing displaced by slot count. Best-formed setup of the three: a
  7-10% stop below $31.015 (~$28.80-$28.84) pairs with a plausible 2:1
  target given TORM's own guidance upgrade. Still needs the de-escalation
  tension resolved and a tradingview-data confluence check (MCP still
  down) before it clears the Entry Checklist.

#### Deep dive: BWLP $22.53 +6.73%
- Catalyst: BW LPG's Q1 2026 NPAT was $187M, EPS $1.08 (up from $0.30 YoY,
  +257%), annualized ROE 38%, and it signed a $940M order for 8 new
  Panamax VLGCs (2029-2030 delivery). Today's headline groups BWLP among
  energy names catching a bid on renewed Iran tensions pushing oil/LPG
  economics higher.
- Why: A geopolitical-risk premium (Iran tensions) lifting energy/shipping
  names broadly, layered on a genuinely strong (but weeks-old) Q1 print
  and fleet-expansion news.
- Impact: Directly conflicts with the TRMD read above: today's Pre-Market
  Research log frames Iran/Hormuz de-escalation as a headwind for tanker
  names, while BWLP's catalyst here frames Iran tensions as a positive
  driver — an internal contradiction in the day's macro narrative, not
  resolved in this research-only pass. Volume field is stale prior-session
  (3,812 sh). BWLP is also down roughly 30% over a longer window on
  volatile freight rates per fundamentals research, so today's pop reads
  as a bounce, not trend confirmation.
- Horizon: SHORT_TERM — today's move reads as geopolitical-headline-driven;
  the strong Q1 print is already old news and isn't what's moving the
  stock today.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing
  displaced. The Iran-tension narrative conflicts with the same day's
  TRMD/tanker de-escalation read — resolve which macro read is correct
  before sizing either; as-is this fails Confluence's requirement for a
  clean, undisputed catalyst.

#### Deep dive: ZIM $25.01 -6.73%
- Catalyst: ZIM is under a signed, shareholder-approved (97.36%) all-cash
  acquisition by Hapag-Lloyd at $35.00/share (~$4.2B equity value, 58%
  premium to the Feb 13 2026 unaffected price). The deal is moving through
  regulatory review, targeting a late-2026 close, with a carve-out Israeli
  entity ("New ZIM") retaining a domestic container-liner business under
  FIMI ownership. Today's decline coincides with a regulatory-review-stage
  update.
- Why: In a signed cash merger, price should track close to the $35 deal
  value discounted for time-to-close and deal risk; today's decline
  signals the market pricing in either a longer regulatory timeline or
  incremental closing risk from the review-stage update, not organic
  business weakness.
- Impact: This is a merger-arb name, not a momentum setup — the roughly
  $10/share (40%) gap to the $35 cash offer is unusually wide for a
  shareholder-approved deal, implying real regulatory risk (Israeli state
  / antitrust approvals) is priced in. Not a fadable one-day spike and not
  a normal breakout either; volume field (35,418 sh, stale prior-session)
  is the highest of the three but still not today's flow.
- Horizon: LONG_TERM catalyst by nature (structural M&A) but NOT a fresh
  long setup on a down day into a cash deal — any long here is really a
  merger-arb bet on deal completion, a different strategy than this book
  runs.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — nothing
  displaced. Excluded on mechanism grounds before R:R math applies: no
  VWAP/RSI/200-SMA/insider-signal thesis applies to a merger-arb spread,
  so it doesn't fit the Entry Checklist or Confluence rule at all — same
  category exclusion as SYNA in the 10:21 ET scan.

## 2026-08-05 — Setup Scan (16:38 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 0 grade-B hits.**
0 errors. No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

### Setup Scan (16:38 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| — | — | no hits this run | — | — |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-05 — Setup Scan (18:38 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 0 grade-B hits.**
0 errors. No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

### Setup Scan (18:38 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| — | — | no hits this run | — | — |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-06 — Gappers (auto-scan 09:21 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **6 hits** of ~60 tracked tickers, all filters applied (|gap|>=5%,
price>=$3, premarket_volume field not populated by this script so that
filter was skipped). Apify RAG web browser returned "Monthly usage hard
limit exceeded" on all catalyst and deep-dive queries (10th+ consecutive
session, unresolved since 7/29) — fell back to WebFetch (Benzinga for
quick-scan headlines, stockanalysis.com for deep-dive fundamentals) per
routine rule. Deep-dive capped at top 5 by |gap%|; rank 6 (NBIS) got
quick-scan only.

Note: several Benzinga top-of-page headlines were stale or direction-
mismatched vs. today's actual gap (QBTS, UMAC, NBIS) — stockanalysis.com's
fundamentals pull surfaced the more likely real, direction-consistent
catalyst for QBTS (Q2 earnings miss, not the Verafin partnership Benzinga
led with) and is flagged explicitly as unreliable/unconfirmed for NBIS.

### Gappers (auto-scan 09:21 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | QBTS | 18.955 | -11.30% | 782,857 | Q2 2026 earnings miss (wider losses, revenue miss) despite 1,120% bookings surge and new Nasdaq Verafin partnership. |
| 2 | RDW | 11.81 | +10.07% | 712,124 | Q2 2026 earnings beat ($117.07M rev vs $107.66M consensus), record backlog, raised FY26 guidance to $450-500M. |
| 3 | UMAC | 23.56 | -8.36% | 81,063 | Q2 2026 revenue +687% YoY to $16.7M (beat), yet stock fell — new $30M Powerus equity stake, direction unexplained. |
| 4 | BKSY | 26.825 | +7.13% | 34,910 | Q2 2026 earnings this morning reaffirmed FY26 guidance ($130-150M), new Gen-3 AI government contracts. |
| 5 | PEPG | 2.11 | +6.03% | 37,288 | DSMB recommended advancing PGN-EDODM1 to highest dose cohort on favorable Phase 2 tolerability/efficacy signals. |
| 6 | NBIS | 207.365 | -5.29% | 415,844 | Benzinga cites a ~6% technical-driven rise — contradicts today's -5.29% gap; treat as stale/unconfirmed. |

#### Deep dive: QBTS $18.955 -11.30%
- Catalyst: D-Wave reported Q2 2026 earnings with a 1,120% surge in
  bookings and a $40.7M backlog, but wider-than-expected losses and
  revenue that missed consensus drove the stock down. Separately the
  company announced a Nasdaq Verafin partnership for financial-crime
  detection and a quantum-error-correction hardware breakthrough, neither
  of which offset the earnings miss.
- Why: Classic earnings-miss mechanism — headline growth metrics (bookings,
  backlog) were overshadowed by a wider loss and revenue miss, so
  growth/momentum investors de-risked despite incrementally positive
  partnership/technology news.
- Impact: Volume (782,857, prior-session basis) is elevated for the name;
  reads as a genuine earnings-reaction repricing, not a one-day headline
  spike — but it's a DOWN move on a speculative, pre-scale quantum name,
  not a long setup as-is.
- Horizon: SHORT_TERM, and only as a bearish/avoid signal — no long thesis
  here; an earnings-miss gap-down needs several sessions to show
  stabilization before any long re-entry could even be considered.
- Opportunity cost: N/A for a long entry — fails the catalyst leg of the
  Entry Checklist for a long (the catalyst fired negative). 0/6 positions
  open, 0/3 weekly trades used (week of Aug 3) — nothing displaced
  regardless.

#### Deep dive: RDW $11.81 +10.07%
- Catalyst: Redwire (space/defense sensors-avionics-software) beat Q2 2026
  revenue consensus ($117.07M vs $107.66M) with record revenue, gross
  margins, and contracted backlog. Management raised FY26 guidance to
  $450M-$500M and cited a $21.5M defense-robotics follow-on order plus
  Indiana/Huntsville facility expansions.
- Why: Earnings beat plus raised guidance pulls in momentum buyers — a
  structural re-rating on a guidance reset, reinforced by backlog and
  margin improvement together, not just a headline pop.
- Impact: Move reads as fundamentally driven (beat-and-raise, record
  backlog) rather than a one-day spike. BKSY moved on similarly strong Q2
  space/defense results the same morning — a sector-wide read-through per
  the sector-momentum rule.
- Horizon: LONG_TERM — guidance reset and backlog growth are structural
  and align with space/defense sector momentum alongside BKSY's pop today,
  though today's +10% print itself isn't enterable (chase rule: no entry
  within 3% of a >5% up day).
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — no
  existing holding displaced. Ranks above UMAC/PEPG on catalyst clarity; a
  7-10% stop against a guidance-driven thesis could plausibly clear 2:1
  R:R on a pullback entry, but not chaseable at today's price.

#### Deep dive: UMAC $23.56 -8.36%
- Catalyst: Unusual Machines (NDAA-compliant drone components) reported Q2
  2026 revenue up 687% YoY to $16.7M on enterprise demand, beating
  estimates, and disclosed a $30M equity investment in drone maker Powerus
  plus added Orlando manufacturing capacity. Stock gapped down -8.36%
  despite the beat.
- Why: Mechanism is ambiguous, not a clean beat-and-raise pop — a strong
  revenue beat with a down gap most likely reflects profit-taking/"sell
  the news" after a prior run-up or dilution concerns from funding the
  $30M stake; no source found explains the down move directly.
- Impact: Volume (81,063, prior-session basis) is modest for the name;
  without a confirmed negative catalyst the move reads more technical/
  positioning-driven than headline-driven, which cuts against treating it
  as a reliable signal in either direction.
- Horizon: SHORT_TERM — fundamentals (revenue beat, Strong Buy consensus,
  $34.86 PT) contradict the day's price action; needs a session or two of
  confirmation before any directional read is trustworthy.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used — no
  displacement issue. The mixed signal (fundamentals up, price down)
  likely fails the Confluence rule outright today; would rank behind
  RDW/BKSY/PEPG on catalyst clarity for the week's 3-trade budget.

#### Deep dive: BKSY $26.825 +7.13%
- Catalyst: BlackSky (space-based intelligence/satellite imagery)
  released Q2 2026 earnings this morning reaffirming FY26 revenue guidance
  of $130M-$150M and disclosing new Gen-3 AI government contracts and
  satellite-development wins. TTM revenue $108.92M, TTM net loss $66.71M,
  analyst consensus Strong Buy with $40.50 average PT.
- Why: Earnings-day reaffirmation of guidance plus new contract wins is
  pulling in momentum buyers on a still net-loss-making name — the market
  is pricing contract-pipeline/guidance durability over current
  profitability.
- Impact: Same-morning move directly tied to the earnings release, not a
  stale headline; paired with RDW's earnings pop today this reads as
  sector-wide space/defense strength, reinforcing the sector-momentum read
  rather than a fade risk.
- Horizon: LONG_TERM if the space/defense sector-rotation read holds (two
  names, RDW and BKSY, both up on Q2 beats/reaffirmed guidance same
  morning) — reasoning ties to the Confluence/sector-momentum rules, not
  just today's single print.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used. Of today's
  up-movers this and RDW are the cleanest catalyst-to-move fits (both
  earnings-day, both guidance-affirming); a 7-10% stop against a
  guidance/contract thesis is the more plausible 2:1 R:R candidate, but
  still not chaseable at today's already +7% print.

#### Deep dive: PEPG $2.11 +6.03%
- Catalyst: PepGen (clinical-stage biotech, oligonucleotide therapies for
  neuromuscular/neurologic disease) had an independent DSMB recommend
  advancing lead program PGN-EDODM1 (Phase 2, myotonic dystrophy type 1)
  into the highest-dose cohort after favorable tolerability and promising
  early efficacy signals — a more current, more positive update than the
  disappointing March 2026 low-dose readout.
- Why: A favorable interim clinical-trial signal (DSMB dose-escalation
  green light) pulling in event-driven biotech buyers sidelined since the
  March low-dose data; a risk-reduction event, not a full efficacy
  readout.
- Impact: $2 clinical-stage biotech — a single trial-status update, not a
  broad volume-vs-normal comparison; sustainability is inherently capped
  by binary clinical risk ahead of full Phase 2 data, more a de-risking
  pop than a durable re-rate.
- Horizon: SHORT_TERM — interim DSMB signals are encouraging but not a
  full data readout; Phase 2 completion and any FDA interaction remain the
  real catalysts, so this doesn't clear the bar for a multi-week
  structural thesis yet.
- Opportunity cost: 0/6 positions open, 0/3 weekly trades used. As a
  sub-$3 clinical-stage biotech with binary trial risk, stop/target math
  is unreliable (event risk can gap through a stop) — the weakest 2:1 R:R
  candidate of the top 5 despite the positive catalyst.

Apify RAG web browser fully hard-capped again this run (10th+ consecutive
session since 7/29) — same unresolved operator flag as every session since.

## 2026-08-06 — Gappers (auto-scan 10:22 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **4 hits** of ~60 tracked tickers, all filters applied (|gap|>=5%,
price>=$3, premarket_volume field not populated by this script so that
filter was skipped). Apify RAG web browser again returned "Monthly usage
hard limit exceeded" on all 4 catalyst queries (11th+ consecutive session,
unresolved since 7/29) — fell back to WebFetch (Benzinga quote + news pages)
per routine rule. Only 4 hits total, so deep dive covers all 4; no ranks
6-10 to note as quick-scan-only this run.

**Data-quality flag (UMAC):** this run's Alpaca snapshot shows UMAC +6.88%
($27.41), but Benzinga's live quote at 10:07 AM ET showed UMAC -4.75%
($24.51), and this morning's 09:21 ET gappers scan (same session) had UMAC
at -8.36% ($23.56) on a similar prev_close baseline. Three data points in
three different directions inside 90 minutes — treating this as an unreliable
print, not a real move. Flagged in the deep dive below and in the JSON;
matches the "fake gaps + stale snapshots" failure mode logged 2026-07-31.

### Gappers (auto-scan 10:22 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | APT | 5.68 | +12.03% | 297 | Q2 2026 earnings beat: EPS $0.18 vs $0.12 YoY, released before open today. |
| 2 | BW | 10.345 | +7.20% | 6,076 | No same-day news found; latest coverage (buybacks/debt redemption) is 3+ weeks old. |
| 3 | UMAC | 27.41 | +6.88% | 36,412 | Q2 2026 EPS $(0.16), inline — but price data conflicts with Benzinga and this morning's scan, see flag above. |
| 4 | ZIM | 28.875 | +6.85% | 3,186 | No same-day news found; latest coverage (Hapag-Lloyd merger) is ~1 month old. |

Deep dive (all 4, no cap needed — only 4 hits this run):

#### Deep dive: APT $5.68 +12.03%
- Catalyst: Alpha Pro Tech released Q2 2026 results before today's open,
  EPS of $0.18 vs $0.12 in the year-ago quarter, a 50% YoY increase. No
  guidance or M&A element found in available coverage; reads as a standard
  earnings-beat pop for a micro-cap.
- Why: Earnings beat plus YoY EPS growth pulls in momentum/value buyers on
  a thinly-traded micro-cap, exaggerating the percentage move.
- Impact: Premarket volume is extremely thin (297 shares) — this print
  reflects almost no participation and could reverse hard once regular-
  session liquidity arrives. No sector read-through found; treat the 12%
  gap as noise-prone until volume confirms at the open.
- Horizon: SHORT_TERM — earnings pop on a low-float/low-volume name with no
  structural catalyst; expect fade risk without volume confirmation, not a
  swing-hold candidate.
- Opportunity cost: Would need to displace an existing position or another
  gapper on today's list to fit inside the 6-position/20%-per-position
  caps; at 297 shares of premarket volume this setup can't support a sane
  stop distance for 2:1 R:R — does not clear the bar.

#### Deep dive: BW $10.345 +7.20%
- Catalyst: Could not confirm a same-day catalyst. Most recent Benzinga
  coverage is 3+ weeks old (board buyback authorization, $61.4M note
  redemption) and already priced in. Next actual catalyst (Q2 earnings) is
  Aug 10 after close, 4 days out.
- Why: No confirmed news-driven mechanism; a 7.2% premarket move on 6,076
  shares of volume looks more consistent with a wide bid/ask print or a
  stale previous-close baseline than a real catalyst.
- Impact: Unconfirmed / likely noise. Flag as a possible data-quality issue
  (stale prevDailyBar) rather than a genuine gap — same failure mode as the
  stale-snapshot bug logged 2026-07-31. Do not treat as tradeable until a
  fresh catalyst surfaces or Q2 earnings (Aug 10) print.
- Horizon: SHORT_TERM — no durable catalyst identified; do not carry,
  re-check before Aug 10 earnings.
- Opportunity cost: No confirmed catalyst — doesn't clear the bar for any
  position-sizing discussion; skip and free the slot for the higher-
  conviction APT earnings beat or a cleaner setup nearer Aug 10.

#### Deep dive: UMAC $27.41 +6.88%
- Catalyst: Unusual Machines reported Q2 2026 EPS of $(0.16), in line with
  expectations, released before today's open with a conference call/
  webcast this morning. Benzinga's live quote (10:07 AM ET) showed UMAC at
  $24.51, down 4.75% on the day — directly contradicting the Alpaca
  snapshot used for this scan (current $27.41, prev_close $25.645,
  +6.88%), and inconsistent with this morning's 09:21 ET gappers scan
  (UMAC $23.56, -8.36%, similar prev_close baseline).
- Why: In-line earnings alone rarely drives a 7% premarket pop; the
  conflicting price data across two independent sources and this morning's
  own earlier scan suggests the Alpaca snapshot's current price for this
  name is a stale/bad print, not a genuine catalyst-driven move.
- Impact: DATA QUALITY FLAG — three data points disagree (this run's
  Alpaca +6.88%, this run's Benzinga -4.75%, 09:21 ET Alpaca scan -8.36%).
  Do not act on this gap without confirming the current quote directly via
  `scripts/alpaca.sh` before any trade discussion.
- Horizon: SHORT_TERM — underlying earnings are inline (non-catalytic);
  with directional data in dispute, no durable thesis either way.
- Opportunity cost: Given the data conflict, this cannot clear the bar for
  capital allocation until the price discrepancy is resolved; would not
  displace anything on today's list as-is.

#### Deep dive: ZIM $28.875 +6.85%
- Catalyst: No same-day catalyst found. The Hapag-Lloyd acquisition
  (announced Feb 17 at ~38% premarket pop, since progressing through
  regulatory review) is the only structural story, but the latest specific
  update is a month old and described ZIM falling, not rising. Q2 earnings
  aren't due until Aug 19.
- Why: No confirmed news-driven mechanism for today; on only 3,186 shares
  of premarket volume, this looks like thin-liquidity noise around
  merger-arb positioning rather than a fresh catalyst.
- Impact: Likely noise / stale baseline — extremely low volume for a name
  that normally trades in volume; a wide bid/ask can produce large %-gaps
  on tiny prints. Merger-arb spread convergence toward the Hapag-Lloyd deal
  terms is the only durable structural story, but not dated today.
- Horizon: LONG_TERM — if verified, the Hapag-Lloyd acquisition is a
  structural M&A catalyst worth tracking into the 2026 close date, but
  today's specific 6.85% print is unconfirmed and shouldn't be chased on
  this data alone.
- Opportunity cost: Today's print doesn't clear the bar on its own (no
  fresh catalyst, thin volume); the underlying merger-arb thesis is better
  tracked as a slower swing setup ahead of the Aug 19 earnings/deal-
  progress catalysts, not a same-day gapper trade.

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.
No trades placed; research only.

## 2026-08-06 — Gappers (auto-scan 11:32 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **4 hits** of ~60 tracked tickers, all filters applied (|gap|>=5%,
price>=$3, premarket_volume field not populated by this script so that
filter was skipped). Apify RAG web browser again returned "Monthly usage
hard limit exceeded" on all 4 catalyst queries (12th+ consecutive session,
unresolved since 7/29). **Benzinga WebFetch fallback also failed this run —
403 Forbidden on all 4 quote pages, and on a CNBC probe too**, while a
non-finance URL (example.com) fetched fine, so this reads as bot-blocking on
those specific sites rather than a general WebFetch/proxy outage. Substituted
stocktitan.net (not in the routine's documented fallback chain) as a
last-resort source so the scan wasn't skipped; flagged in the JSON `note`
field. Only 4 hits total, so deep dive covers all 4; no ranks 6-10 to note
as quick-scan-only this run.

**Data-quality flag (UMAC) continues:** this run's Alpaca snapshot shows
UMAC -6.53% ($24.10, prev_close $25.785); the prior 10:22 ET run this
session had UMAC at +6.88% ($27.41, prev_close $25.645) — a ~12% swing with
a shifting prev_close baseline in roughly an hour. Third consecutive run
today with inconsistent UMAC pricing (09:21 ET: -8.36%, 10:22 ET: +6.88%,
this run: -6.53%). Treat as an unreliable print, matching the "fake gaps +
stale snapshots" failure mode logged 2026-07-31.

**BW also flipped sign vs the prior run:** +7.20% at 10:22 ET, -7.04% now,
with no fresh news either time — consistent with a stale-baseline/wide-spread
issue rather than two real catalysts an hour apart.

### Gappers (auto-scan 11:32 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | TRMD | 27.215 | -7.76% | 4,592 | No same-day news found; latest coverage (Oaktree/Njord 19.86% stake disclosure) is from Jun 24, over a month old. |
| 2 | KLIC | 100.76 | +7.50% | 16,649 | Q3 2026 earnings beat reported Aug 5: revenue $330.4M vs $242.6M prior quarter, GAAP EPS $1.07 vs $(0.06) YoY, guided Q4 higher. |
| 3 | BW | 8.98 | -7.04% | 18,348 | No same-day news; latest item (Aug 3) only scheduled the Q2 earnings call for Aug 10. |
| 4 | UMAC | 24.10 | -6.53% | 90,749 | Q2 2026 shareholder letter today: revenue +687% YoY, but stock gapping down — see data-quality flag above. |

Deep dive (all 4, no cap needed — only 4 hits this run):

#### Deep dive: TRMD $27.215 -7.76%
- Catalyst: No news dated today. Most recent TRMD headlines are from June:
  a Jun 24 disclosure that Oaktree's OCM Njord Holdings holds 19.86% of
  TORM shares, a Jun 2 RSU-driven share-count increase, and a May 21 CEO
  share sale (~549,177 shares, ~DKK 112.8M). Last operational news was May
  13 Q1 2026 results (USD 122m net profit, USD 0.70/share interim dividend,
  raised 2026 guidance) — nearly 3 months old.
- Why: No confirmed same-day catalyst; a -7.76% premarket move on very thin
  volume (4,592 shares) looks more like a stale/wide-spread print or
  sector-wide tanker weakness than a company-specific news-driven move.
- Impact: Volume is too thin to confirm real participation. TRMD is a
  product-tanker name — check tanker peers (ASC, STNG, INSW) for sector-wide
  weakness before treating this as company-specific. Reads as noise-prone
  until volume confirms at the open.
- Horizon: SHORT_TERM — no structural catalyst identified; nothing here
  would clear the Confluence rule's catalyst requirement even if the price
  move is real.
- Opportunity cost: Zero open positions today, so nothing to displace, but
  no catalyst fails the Confluence rule's catalyst leg outright, and 4,592
  shares of volume can't support a sane stop distance for 2:1 R:R — doesn't
  clear the bar for one of the 3 weekly trade slots.

#### Deep dive: KLIC $100.76 +7.50%
- Catalyst: Kulicke & Soffa reported Q3 FY2026 results after the Aug 5
  close: net revenue $330.4M (up from $242.6M in Q2, nearly double the
  $148.4M a year ago), GAAP diluted EPS $1.07 vs $(0.06) in Q3 2025,
  non-GAAP EPS $1.20, gross margin expanded to 47.8%. Guided Q4 revenue to
  ~$375M ±$20M and GAAP EPS to $1.29 ±10%.
- Why: Beat-and-raise: revenue nearly doubling YoY plus a Q4 guide above
  the current run-rate pulls in momentum and semi-cap-equipment buyers, a
  textbook earnings-beat-plus-raised-guidance gap.
- Impact: Volume (16,649 shares in this snapshot) is moderate but the
  session is already ~1.5 hours old at this scan time (11:30 ET), not true
  premarket. A near-doubling of revenue plus a guidance raise is
  fundamentally driven and more likely to hold than a single-day headline
  spike. Check semi-cap peers (ASML, AMAT, LRCX) for chip-equipment sector
  read-through.
- Horizon: LONG_TERM — structural, a guidance raise off a real revenue
  inflection fits an early/mid-cycle Tech overweight per the sector-rotation
  table, worth carrying past a single session if it later passes the
  Confluence rule.
- Opportunity cost: Zero open positions today, so nothing to displace. Best
  name of today's 4 gappers — the only one with a confirmed same-day
  beat-and-raise catalyst. Still needs a live tradingview-data confluence
  check (2nd indicator) and a stop-distance check before using one of the 3
  weekly trade slots; at $100.76/share a position would eat close to the
  full 20%-of-equity cap on a ~$10k account — size via `scripts/size.mjs`
  before any order.

#### Deep dive: BW $8.98 -7.04%
- Catalyst: No news dated today. Aug 3 release only scheduled the Q2 2026
  earnings call for Aug 10; the Jul 13 items (full redemption of $61.4M
  6.50% senior notes, $50M buyback authorization) are 3+ weeks old and
  already priced in.
- Why: No confirmed same-day driver; a -7.04% premarket move on 18,348
  shares with no fresh news reads like noise or a stale-baseline print —
  same failure mode flagged in this morning's earlier scan (BW +7.20% at
  10:22 ET vs -7.04% now, opposite sign inside an hour) and the 2026-07-31
  log entry, not a genuine catalyst.
- Impact: Unconfirmed / likely a data-quality issue rather than a real
  catalyst. Do not treat as tradeable until the Aug 10 Q2 print or a fresh
  news item surfaces.
- Horizon: SHORT_TERM — no catalyst to anchor a thesis to; even the pending
  Aug 10 earnings is a binary event the no-earnings-binary rule would want
  to sit out ahead of.
- Opportunity cost: No confirmed catalyst — fails the Confluence rule's
  catalyst leg regardless of open slots; skip and revisit after the Aug 10
  earnings print (which itself would trip the no-earnings-binary rule
  going in).

#### Deep dive: UMAC $24.10 -6.53%
- Catalyst: Unusual Machines released its Q2 2026 shareholder letter today:
  revenue ~$16.7M (+687% YoY, +106% sequentially), gross margin 34.7%, GAAP
  operating loss ~$7.8M, adjusted EBITDA loss ~$0.4M. Targets positive
  operating cash flow by year-end 2026, breakeven ~early 2027. Cash $229.6M
  / working capital ~$367.5M after a $58.2M ATM raise in Q2. No Blue
  UAS/defense-contract-specific news found in the available excerpt.
- Why: A large revenue beat alongside a still-widening GAAP operating loss,
  no profitability this year, and a recent dilutive ATM raise can read as
  "growth without earnings" — consistent with the -6.53% sell-the-news
  reaction despite the top-line beat.
- Impact: Volume (90,749 shares) is the highest of today's 4 names and
  clears the routine's 50k threshold, so this looks like real participation
  rather than noise. DATA QUALITY FLAG persists (see above) — three
  different gap directions across three scans today. Confirm the live
  quote via `scripts/alpaca.sh` before acting on any of these figures.
- Horizon: SHORT_TERM — headline/earnings-reaction driven, no sector-
  rotation read-through identified yet; treat as fade-or-confirm within
  days, not a multi-week thesis.
- Opportunity cost: Zero open positions today. This is a decliner (-6.53%)
  in this run, not a long-entry candidate on gap direction alone; this
  strategy has no short-selling mechanism (all sizing/stop scripts are
  long-side only), so not actionable either way, and the price-data
  conflict alone rules it out regardless.

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.
No trades placed; research only.

## 2026-08-06 — Setup Scan (16:39 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 0 grade-B hits.**
0 errors. No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

### Setup Scan (16:39 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| — | — | no hits this run | — | — |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-06 — Setup Scan (18:39 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 0 grade-B hits.**
19 errors (mix of Alpaca 503/DNS blips and 429 rate-limit under the script's
8-parallel-fetch cap) — script logged each and continued, matching its
never-abort-on-one-bad-ticker design. No Telegram/ClickUp notify sent per
routine rule (0 grade-A hits).

### Setup Scan (18:39 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| — | — | no hits this run | — | — |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.


## 2026-08-07 — Pre-Market Research (cloud routine)

Apify RAG web browser hit "Monthly usage hard limit exceeded" on all 6
topic queries — same outage flagged continuously since 2026-07-29, 10th+
consecutive session, still not reset. Fell back to native WebSearch
(Yahoo domains blocked via `blocked_domains`) per routine rule.
`tradingview-data` MCP still absent (`ToolSearch`: no match) — confluence
rule (>=2 of VWAP/RSI/200-SMA/insider) remains unsatisfiable for any
candidate, same unresolved gap as every session since 2026-07-25 (22
straight sessions now).

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — unchanged for 22 straight trading days
  since the Day-0 baseline (2026-07-08 launch). Same confirmed-live-vs-
  $10k-baseline mismatch flagged 2026-07-27, still unresolved/operator
  pending — not re-litigating here.
- Weekly trade count: 0/3 (week of Aug 3, last session of the week — will
  reset Mon 8/10).

### Market Context (WebSearch fallback, Fri 8/7 premarket ET)
- **Oil**: WTI ~$86.04/bbl per one source, Brent $82.15/bbl (-0.41% d/d)
  per TradingEconomics — sources disagree on WTI, treat as directional
  only (Brent softer, WTI print noisy). Coverage flags a possible
  US-Iran deal near-term, which would be bearish for crude if it lands.
- **S&P 500 futures — little changed**: flat/muted into the jobs print
  after Thursday's -0.2% close (2nd straight down day). Overnight movers:
  ABNB +8% (beat), NET +16% (raised guide) — both reported yesterday
  AMC, not today's session but color for tech-earnings tape.
- **VIX — calm**: ~15.15-16.15, down ~4% d/d. No stress priced in ahead
  of the jobs number.
- **Earnings — today, before open**: no clean before-open list surfaced
  (searches returned VST/TTWO as reporting today, timing unconfirmed).
  None held/watchlist-tagged as far as verified.
- **Econ calendar — the catalyst of the day**: July nonfarm payrolls,
  unemployment rate, average hourly earnings all release today. This is
  the dominant risk event — futures flat specifically because the market
  is waiting on this print. Next CPI is Wed 8/12, not today.
- **Sector YTD**: Consumer Staples/Industrials/Materials/Energy in
  "Leading" momentum quadrant (Energy sector ETF +12% in July on the oil
  bounce; Staples up as a flight-to-safety play). Tech/Communications/
  Consumer Discretionary/Financials "Lagging" (Tech -8% in July on AI-
  capex jitters) despite semis still framed as the runaway YTD leader in
  absolute terms — same broad-YTD-vs-recent-month conflict flagged
  repeatedly since 8/3, still not sizing sector bets off either figure.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None cleared to Tier-1 (documented-catalyst + confluence bar not met):
1. **Sit out ahead of the jobs report — not a name, a timing call.** A
   nonfarm-payrolls surprise in either direction can move the whole tape
   intraday; strategy has no position to react with and no confluence
   tooling live to size a fresh one safely into that volatility window.
2. **Energy/Industrials/Materials sector momentum — watch only.** Leading
   quadrant per research, but no single-name catalyst dated today and no
   confluence check possible (`tradingview-data` MCP down). Revisit with
   a specific ticker + catalyst next session.
3. **VST/TTWO earnings — excluded if before-open confirmed.** Unconfirmed
   timing; no-earnings-binary rule excludes trading the print regardless,
   and neither is a current watchlist name.

### Risk Factors
- **Jobs report today (Fri 8/7)** — nonfarm payrolls/unemployment/hourly
  earnings all print this morning; the single biggest catalyst risk of
  the week, argues against opening anything new pre-print.
- **Apify still fully down** — 10th+ consecutive session (since 7/29),
  over two full weeks. Operator: check Apify billing/plan — blocking the
  primary research path indefinitely.
- **`tradingview-data` MCP still absent** — confluence rule unsatisfiable
  since 7/25, now 22 straight sessions. Same operator flag, escalating.
- **Oil source conflict** (WTI $86 vs implied-$78 range) — don't size any
  energy-sector trade off either figure without a clean same-source print.
- **Sector-YTD source conflict** (broad-YTD leaders vs. July-only leaders)
  unresolved — don't size sector bets off either figure.

### Decision
**HOLD — no trades.** Futures are flat into this morning's nonfarm
payrolls print, the week's dominant catalyst — no reason to open a new
position ahead of it. No watchlist name clears the entry checklist:
Energy/Industrials/Materials sector momentum has no company-specific
trigger dated today, and VST/TTWO earnings (if before-open) are excluded
by the no-earnings-binary rule and aren't watchlist tickers anyway.
`tradingview-data` MCP still down (22 straight sessions) and Apify still
hard-capped (10th+ consecutive session) — confluence rule unsatisfiable
regardless. Zero positions, zero orders, 22 straight flat trading days —
patience over activity. Weekly trade count closes the week at 0/3 (week
of Aug 3).

## 2026-08-07 — Gappers (auto-scan 11:15 ET, cloud)

Watchlist scan (`scripts/gappers-alpaca.sh watchlist`, GAP_THRESHOLD=5.0)
returned **1 hit** of ~60 tracked tickers (|gap|>=5%, price>=$3;
premarket_volume field not populated by this script so that filter was
skipped, per routine note). Apify RAG web browser again returned "Monthly
usage hard limit exceeded" on both the catalyst and fundamentals queries
(11th+ consecutive session, unresolved since 7/29). Benzinga WebFetch
fallback also 403'd. Substituted finviz.com/quote (not in the routine's
documented fallback chain) as a last-resort source so the scan wasn't
skipped — it returned a full news list with dates, so this run's catalyst
read is more complete than recent sessions despite the primary chain being
fully down.

### Gappers (auto-scan 11:15 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BWLP | 23.00 | +6.83% | 4,990 | No same-day news; most recent headline is a stale Jun 2, 2026 Q1 earnings recap — gap reads as thin-liquidity noise, not catalyst-driven. |

Deep dive (only 1 hit this run, well under the 5-name cap):

#### Deep dive: BWLP $23.00 +6.83%
- Catalyst: No company-specific news dated today or in the prior several
  weeks. BW LPG Limited (Oslo-listed VLGC/LPG shipping company, US ticker
  BWLP) last reported news is a Q1 2026 earnings-call recap from Jun 2,
  2026 — over two months stale. No 8-K-equivalent, M&A, guidance, or
  insider-trade item found closer to today.
- Why: No confirmed same-day driver. Prior-session volume in this
  snapshot was only 4,990 shares — extremely thin for a name that's
  primarily listed on the Oslo Børs (as BWLPG) with a much smaller US
  print. A handful of trades on that little volume can swing the quoted
  gap% without any real news or institutional flow behind it.
- Impact: Reads as a low-liquidity/stale-quote artifact rather than a
  sustainable move — same failure mode flagged repeatedly in this log for
  other thin names (TRMD, BW, UMAC, 2026-08-06). No sector peer
  read-through found (no other LPG/tanker names on today's list). Do not
  treat as confirmed until real volume shows at the open.
- Horizon: SHORT_TERM — no structural catalyst to anchor a thesis to;
  even if the price move is real, there's nothing here that would clear
  the Confluence rule's catalyst leg.
- Opportunity cost: Zero open positions today, so nothing to displace.
  Fails the Confluence rule's catalyst requirement outright, and 4,990
  shares of volume can't support a sane stop distance for a 2:1 R:R —
  doesn't clear the bar for one of the week's 3 trade slots (which closes
  the week at 0/3 regardless, per this morning's pre-market entry).

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.
No trades placed; research only.

## 2026-08-07 — Setup Scan (16:39 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 2 grade-B hits.**
0 errors. No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

### Setup Scan (16:39 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| WLDS | B | Momentum confluence | daily swing | RSI 67, ADX 46, px $3.53 EMA9>EMA21 ($3.09>$2.57) |
| PEPG | B | Momentum confluence | daily swing | RSI 66, ADX 24, px $2.39 EMA9>EMA21 ($2.01>$1.98) |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-07 — Setup Scan (18:39 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 2 grade-B hits.**
0 errors. Same two names as the 16:39 ET run this session — no new setups
since. No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

### Setup Scan (18:39 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| WLDS | B | Momentum confluence | daily swing | RSI 67, ADX 46, px $3.53 EMA9>EMA21 ($3.09>$2.57) |
| PEPG | B | Momentum confluence | daily swing | RSI 66, ADX 24, px $2.39 EMA9>EMA21 ($2.01>$1.98) |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-10 — Gappers (auto-scan 09:29 ET, cloud)

Watchlist scan (memory/WATCHLIST.md, ~60 tickers via `scripts/gappers-alpaca.sh
watchlist` against Alpaca). 1 raw gap >=5%: AGMH +6.36%, but price $1.11 fails
the $3.00 floor. **0 qualifying gappers after filters** (gap>=5%, price>=$3,
premarket_volume>=50k where populated). No deep-dive run (nothing to dive on).
No Telegram/ClickUp notify sent per routine rule (0 hits, no scan error).

### Gappers (auto-scan 09:29 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| — | — | — | — | — | none — 0 rows passed filters |

## 2026-08-10 — Gappers (auto-scan 11:22 ET, cloud)

Watchlist scan (memory/WATCHLIST.md, ~60 tickers via `scripts/gappers-alpaca.sh
watchlist` against Alpaca). 4 raw gaps >=5%: LPG +7.6%, AGMH +6.57%, UMAC
-6.44%, BWLP -6.2%. AGMH fails the $3.00 price floor ($1.11). **3 qualifying
gappers** (gap>=5%, price>=$3). Note: the script's "volume" field is the most
recently completed session's full-day volume, not a true premarket-volume
figure (script has no such field, per its own header comment) — treated as
informational only, filter not applied as a hard block, consistent with the
2026-08-07 precedent in this log. All 3 got the full deep-dive (well under
the 5-name cap). Apify RAG web browser worked cleanly this run (no rate-limit
errors). Telegram sent (3 hits).

### Gappers (auto-scan 11:22 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | LPG | 48.335 | +7.60% | 8,811 | No same-day news; nearest item is a stale (5 days old) 08/05 earnings release the stock actually closed down on — reads as thin-liquidity noise. |
| 2 | UMAC | 25.15 | -6.44% | 18,057 | No same-day news; nearest items are Jun/Jul writeups on prior valuation-driven selloffs and analyst upgrades — nothing dated today. |
| 3 | BWLP | 20.36 | -6.20% | 4,511 | No same-day news; nearest item is a Jul 26 "holding steady" piece — reads as thin-liquidity noise, same recurring pattern as prior BWLP entries. |

Deep dive (3 hits, well under the 5-name cap — no ranks dropped):

#### Deep dive: LPG $48.335 +7.60%
- Catalyst: Dorian LPG (NYSE: LPG, VLGC/LPG shipping) last reported news is
  its Q1 FY2027 earnings release dated 08/05/2026 06:00 AM — revenue $187.9M
  (+123.1% YoY), net income $138.3M ($3.24 diluted EPS), TCE $75,926/day
  (+91.1%), plus an already-declared $1.00/share irregular dividend payable
  ~Aug 12, 2026 to holders of record as of Jul 27, 2026 (record date already
  passed, not a live catalyst for new buyers). No item dated 08/10/2026
  found.
- Why: No confirmed same-day driver. The stock actually closed -1.08% on the
  day of its own earnings beat (08/05), so today's +7.6% gap is not a
  continuation of that reaction. Session volume in this snapshot was only
  8,811 shares — thin enough that a handful of prints can swing the quoted
  gap% without real flow behind it.
- Impact: Reads as a low-liquidity/stale-quote artifact rather than a
  sustainable move — same failure mode flagged repeatedly in this log for
  thin names. No sector peer read-through (no other shipping/tanker name on
  today's list moved the same direction — see BWLP below, which gapped the
  opposite way).
- Horizon: SHORT_TERM — nearest real catalyst is 5 days stale and was
  price-negative on the day; nothing here anchors a multi-day thesis.
- Opportunity cost: Zero open positions today, so nothing to displace. Fails
  the Confluence rule's catalyst requirement outright, and 8,811 shares of
  volume can't support a sane stop distance for a 2:1 R:R — doesn't clear
  the bar for one of the week's 3 trade slots.

#### Deep dive: UMAC $25.15 -6.44%
- Catalyst: Unusual Machines (NYSE American: UMAC, drone components/
  manufacturing) has no news dated today. Most recent relevant items: a Jul
  5 Orlando manufacturing-facility expansion announcement, a Jul 15 sell-side
  note citing 125% upside (Trump Jr.-linked drone/defense supply-chain
  thesis), and a Jun 22 writeup attributing a prior -9.65% drop to
  profit-taking on valuation concerns after a run of major catalysts. No
  fresh item found closer to today.
- Why: No confirmed same-day driver for the down move. The stock has been
  volatile all summer on defense/drone-supply-chain headlines (up 45%+ YTD
  per the Jul 15 piece); today's drop most plausibly reads as give-back/
  profit-taking in a name that has repeatedly seen sharp single-day swings
  on thin news, consistent with the Jun 22 pattern already logged for this
  ticker.
- Impact: Volume in this snapshot (18,057) is well under what would confirm
  a real distribution day for a name this volatile. No sector peer
  read-through among today's other gappers. Treat as noise/give-back until
  confirmed by real session volume and a dated catalyst.
- Horizon: SHORT_TERM — no dated catalyst to anchor a thesis to either
  direction.
- Opportunity cost: Zero open positions today, so nothing to displace. No
  dated catalyst to anchor a short or dip-buy thesis to; fails the
  Confluence rule's catalyst leg, and 18,057 shares of volume is too thin to
  size a stop for 2:1 R:R — doesn't clear the bar for one of the week's 3
  trade slots.

#### Deep dive: BWLP $20.36 -6.20%
- Catalyst: BW LPG Limited (NYSE: BWLP, VLGC/LPG shipping) has no news dated
  today. Most recent items found: a May 2025 Q1 financial-results release
  (VLGC sale MOA with BW India), a May 29, 2026 piece flagging a -4.53% drop
  to $19.60 on a pullback, and a Jul 26, 2026 note describing the stock
  holding near $21.83 on normal volume with no unusual activity. No fresh
  item found closer to today.
- Why: No confirmed same-day driver. Prior-session volume in this snapshot
  was only 4,511 shares — extremely thin, same failure mode already flagged
  repeatedly in this log for BWLP (2026-08-06, 2026-08-07). A handful of
  trades on that little volume can swing the quoted gap% without any real
  news or institutional flow behind it.
- Impact: Reads as a low-liquidity/stale-quote artifact rather than a
  sustainable move, consistent with this ticker's recurring pattern in this
  log. LPG (also LPG-shipping) gapped up the same session while BWLP gapped
  down — no coherent sector read-through, reinforces both are noise rather
  than a sector-wide move.
- Horizon: SHORT_TERM — no dated catalyst, thin volume, no durable thesis.
- Opportunity cost: Zero open positions today, so nothing to displace. Fails
  the Confluence rule's catalyst requirement outright, and 4,511 shares of
  volume can't support a sane stop distance for a 2:1 R:R — doesn't clear
  the bar for one of the week's 3 trade slots.

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.
No trades placed; research only.

### Setup Scan (16:38 ET, cloud)
60 candidates checked, 0 errors, 2 hits (both grade B, no grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| PEPG | B | Momentum confluence | daily | ADX14 26.12, EMA9 2.18 > EMA21 2.06, RSI14 74.43 |
| RDW | B | Momentum confluence | daily | ADX14 23.63, EMA9 10.71 > EMA21 10.31, RSI14 67.19 |

No grade-A hits -> no Telegram alert per STEP 4 rule. Post-close run (16:38
ET, market closed) — Setup A not checkable, matches routine expectation.
Candidates only, not orders — feed to `/trade` if pursued (full
safety-check gate applies).

### Setup Scan (18:38 ET, cloud)
60 candidates checked, 0 errors, 2 hits (both grade B, no grade-A hits) —
same two names as the 16:38 ET run, unchanged.

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
|---|---|---|---|---|
| PEPG | B | Momentum confluence | daily | ADX14 26.12, EMA9 2.18 > EMA21 2.06, RSI14 74.43 |
| RDW | B | Momentum confluence | daily | ADX14 23.63, EMA9 10.71 > EMA21 10.31, RSI14 67.19 |

No grade-A hits -> no Telegram alert per STEP 4 rule. Post-close run (18:38
ET, market closed) — Setup A not checkable, matches routine expectation.
Candidates only, not orders — feed to `/trade` if pursued (full
safety-check gate applies).

## 2026-08-11 — Pre-Market Research (Day 24, Tuesday)

**Account snapshot (live via `alpaca.sh`):** Equity $100,000.00 | Cash
$100,000.00 (100%) | Buying power $400,000 | Positions: 0 | Open orders: 0 |
Daytrade count: n/a (0 recent trades). Equity still flat at $100,000 vs. the
$10,000 baseline in CLAUDE.md — mismatch flagged Jul 27, unresolved 25th
straight session, operator review pending.

**Market context:**
- **Oil — dominant catalyst today.** WTI $83.91 (+2.2%, Investing.com) /
  other prints ~$82.13 (+5%, Schwab); Brent $89.11 (+1.58%, Business
  Insider Markets). Driver: Strait of Hormuz escalation — Iran named a
  hardline ex-IRGC commander to its top security post, a suspected Iranian
  missile reportedly struck an ADNOC-linked vessel in the strait over the
  weekend, and Foreign Minister Araghchi says Tehran isn't in direct talks
  with the U.S. despite Washington's "deal is near" framing (Trump also
  reportedly demanding compensation from Iran per Benzinga). ~20-25% of
  global seaborne crude transits the strait — genuine supply-shock tail
  risk, not noise. Partially offset by a prior +2.5M bbl US inventory
  build (wk of 7/31). US oil reserves reported at lowest level in 43 years
  (Business Insider).
- **Equities:** Futures mixed/soft — SPY -0.02%, QQQ -0.01% premarket
  (WebSearch fallback, Apify returned junk on 2 attempts for this query,
  noted per fallback rule). CVX +4.48% to $194.91 on the crude spike — real
  energy-sector beneficiary but a same-morning >4% print, and this session's
  Alpaca quote pull returned a stale prior-close timestamp, not a live
  premarket tick, so no confirmed safe entry level. 10Y yield 4.73%, 2Y
  4.03%. One WebSearch summary cited Fed funds futures pricing ~52% odds of
  a September *hike* — flagged as needing independent verification, since
  it cuts against the dovish/jobs-miss-cheered rally narrative logged Aug
  10; not used to inform today's call either way.
- **This week's data:** CPI tomorrow (Wed Aug 12, 8:30am) — headline
  forecast +0.1% MoM / 3.4% YoY, core +0.2% MoM / 2.5% YoY (MarketWatch econ
  calendar). PPI Thursday (Aug 13, 8:30am) — forecast +0.2%, core +0.3%.
  Today: NFIB optimism index (6am, forecast 97.0) and existing home sales
  (10am, forecast 4.05M) — second-tier, unlikely to move the tape much.
- **Gaps this run:** Apify RAG queries for today's BMO earnings names and
  S&P sector YTD rankings returned empty/junk (Nasdaq earnings calendar
  "data not available," Morningstar/State Street sector pages didn't
  render live figures) — no confirmed earnings-binary names to exclude
  today, but also no positive confirmation none exist. No open positions,
  so this gap doesn't block today's call.

**Trade ideas (2, both HOLD/watch-only — no entry):**
1. **CVX** — catalyst is real (Iran/Hormuz oil-supply risk, +4.48% on
   crude spike) but unconfirmed at a live premarket level (stale quote),
   and the move is macro-driven, not idiosyncratic to Chevron — doesn't
   clear the confluence rule's 2-indicator technical bar without a live
   `combined_analysis` read. Watch for open confirmation; re-check same-day
   R:R before considering (would need entry not already >5% above
   yesterday's close and a real stop level).
2. **Energy sector broadly (XLE)** — same Hormuz catalyst, cleaner way to
   express a sector view than chasing a single >4% mover if the thesis
   firms up intraday. Not sized today — no confirmed technical confluence
   yet, and one sector-momentum trade isn't worth burning a weekly slot
   (0/3 used, week of Aug 10) ahead of tomorrow's CPI print.

**Risk factors:**
- Strait of Hormuz escalation — real tail risk for a sharp oil/vol spike if
  the strait sees disruption; energy longs and short-vol positions both
  exposed.
- CPI print tomorrow 8:30am — a hot surprise (headline or core above
  forecast) could reprice rate-cut odds and hit richly-valued growth names;
  argues against sizing new risk into the print.
- Elevated yields (10Y 4.73%) sitting alongside a reported ~52%
  September-hike probability that reads inconsistent with the broader
  easing narrative — unverified, watch for confirmation or correction
  before treating it as real.
- Persistent account-baseline mismatch ($100k live equity vs. $10k
  CLAUDE.md baseline) remains open, unresolved 25 sessions running.

**Decision: HOLD.** No company-specific, confirmed-live catalyst clears the
entry checklist. CVX/XLE thesis is real but unconfirmed at open and macro-
driven; CPI print tomorrow argues for staying flat into it rather than
sizing new risk today. 24 trading days since launch (Jul 9) with zero
entries. Weekly trade count: 0/3 (week of Aug 10).

## 2026-08-11 — Gappers (auto-scan 08:31 ET, cloud)

Scanned 69 watchlist tickers via `scripts/gappers-alpaca.sh watchlist`
(GAP_THRESHOLD=5.0). Only 6 symbols had fresh today-dated premarket quotes/
trades this early (AMKR, META, GOOG, ONDS, NIO, OKLO) — thin premarket
liquidity across the rest of the watchlist at this hour. None of the 6
cleared the 5% threshold; largest mover was NIO at -3.63%. Zero hits — no
quick-scan table, no deep dive, no Telegram/ClickUp send (per routine: only
notify if hits > 0 or the scan errored; this run didn't error). Data file
`data/premarket_gappers_2026-08-11.json` written with an empty `gappers`
array.

## 2026-08-11 — Gappers (auto-scan 10:23 ET, cloud, second run)

Second scheduled fire of this routine today; market is already open (see
market-open HOLD entry, 8b0c345). Re-scanned watchlist via
`scripts/gappers-alpaca.sh watchlist` (GAP_THRESHOLD=5.0) — 0 rows returned.
Note: this script's gap math compares current price to Alpaca's `dailyBar`
close, which is only a valid pre-market baseline before the regular session
opens. Post-open, `dailyBar` tracks today's own in-progress session, so
`gap_pct` collapses toward 0 for every symbol regardless of actual overnight
gaps — the empty result here is an artifact of running the scan past the
open, not new market information. Zero hits — no quick-scan table, no deep
dive, no Telegram/ClickUp send. Data file
`data/premarket_gappers_2026-08-11_1023et.json` written with an empty
`gappers` array and a note explaining the post-open caveat.

### Setup Scan (16:41 ET, cloud)

Scanned 60 watchlist tickers via `node scripts/setup-scan-cloud.mjs`
(`config/rules.json` -> `watchlist_tiers.immediate`). Zero grade-A or
grade-B hits — no ticker cleared 2+ setups or a single setup on today's
data. No table to print (no hits).

**Reliability note:** the sandbox's outbound network was flaky under the
script's 8-way concurrency this run — first 5 attempts returned 34-60/60
tickers as DNS/503 errors (confirmed via isolated test: 20 sequential
requests succeeded 20/20, but concurrent bursts intermittently failed).
Added retry-with-backoff (3-6 attempts, longer backoff on HTTP 429) to
`alpacaJson()` in `scripts/setup-scan-cloud.mjs` to fix this — a
robustness-only change, no scan logic touched. Final clean run: 59/60
tickers scanned successfully, 1 error (GFS, HTTP 429 after max retries).
Data file `data/setup-scan_cloud_2026-08-11_1641ET.json`.

No Telegram/ClickUp send — 0 grade-A hits (per routine: notify only if
>=1 grade-A hit).

### Setup Scan (18:38 ET, cloud)

Second scheduled fire of this routine today (see 16:41 ET entry above).
Market is closed (regular session ends 16:00 ET) — this scan runs on the
day's final daily/intraday bars, not live intraday data. Scanned 60
watchlist tickers via `node scripts/setup-scan-cloud.mjs`
(`config/rules.json` -> `watchlist_tiers.immediate`), all 60 succeeded,
0 errors this run. Zero grade-A or grade-B hits — no ticker cleared 2+
setups or a single setup. No table to print. Data file
`data/setup-scan_cloud_2026-08-11_1838ET.json`.

No Telegram/ClickUp send — 0 grade-A hits (per routine: notify only if
>=1 grade-A hit).

## 2026-08-12 — Pre-Market Research (Day 25, Wednesday)

**Account snapshot (live via `alpaca.sh`):** Equity $100,000.00 | Cash
$100,000.00 (100%) | Buying power $400,000 | Positions: 0 | Open orders: 0.
Equity still flat at $100,000 vs. the $10,000 baseline in CLAUDE.md —
mismatch flagged Jul 27, unresolved 26th straight session, operator review
pending.

**Market context (Apify RAG web browser; TradingEconomics + TradingView +
WSJ/NDTV/MarketWatch headlines):**
- **CPI day — the dominant catalyst.** July CPI prints today 8:30am ET.
  Consensus per yesterday's log: headline +0.1% MoM / 3.4% YoY, core +0.2%
  MoM / 2.5% YoY. Cleveland Fed inflation nowcast (updated 08/11): August
  MoM 0.35% / YoY 3.42%, core MoM 0.20% / YoY 2.43% — nowcast running hotter
  than consensus on headline MoM, roughly in line on core. WSJ live-blog
  headline: "Dow Futures Climb Ahead of CPI Data" — tape is calm/constructive
  heading into the print, not defensive. PPI follows tomorrow (Thu Aug 13).
- **Oil — still Hormuz-driven, now with a bearish counter-signal.** WTI
  $83.34 (+0.17% day, +6.65% month, +33% YoY, TradingEconomics), Brent
  $88.90-88.96 (~flat). Trump said the US has "total control over the
  Strait of Hormuz" as talks remain deadlocked — rhetoric hardening: even
  as Pakistan's defense minister says the US/Iran are "close to some sort
  of arrangement" and Iran-Oman talks have reportedly reached an "advanced
  stage." Contradictory signals = elevated but unclear-direction risk. New
  bearish counterweight: US crude inventories rose 9.1M bbl last week, the
  biggest weekly build since February — normally bearish for price, but the
  geopolitical premium is still winning for now. Sensex closed -0.24%
  (-180pts) on Hormuz-deadlock spillover into Asia trade overnight.
- **Equities modestly green pre-CPI:** S&P proxy 7744.21 (+0.21%), Dow
  53827 (+0.07%), Nasdaq 29667 (+0.48%) — TradingEconomics cross-asset
  board. 10Y yield 4.674% (little changed).
- **VIX 15.39, -0.32%** (TradingView) — calm, no fear signal ahead of the
  print.
- **Notable side-signal:** Gold $4412.91 (+0.98%), Silver $66.26 (+2.46%) —
  a real safe-haven bid building into CPI, worth noting as a macro-caution
  tell even though it isn't a tradeable idea on this watchlist.
- **Gaps this run:** Sector-momentum-YTD query returned an unrelated,
  unusable result (bad search match); no confirmed sector-rotation read
  today. Same-day earnings-calendar queries kept resolving to CPI-related
  content instead of an earnings list — no confirmed earnings-binary names
  to exclude today, but also no positive confirmation none exist. No open
  positions, so neither gap blocks today's call.

**Trade ideas (all HOLD/watch-only — no entry):**
1. **CPI-day macro sit-out.** No idiosyncratic, confluence-confirmed
   single-name catalyst today — the tape is dominated by the 8:30am print.
   Consistent with strategy discipline (documented Aug 11: don't size new
   risk into a binary macro print), stay flat through the release; only
   reassess post-print for a same-day reactive setup if a name clears
   confluence off a fresh, idiosyncratic catalyst.
2. **CVX / XLE (Hormuz energy expression) — unchanged from Aug 11, still
   not actionable.** Oil's move is macro/geopolitical, not idiosyncratic to
   any single name, and today's signal is more contradictory than
   yesterday's (hardening rhetoric + reported advanced talks + a bearish
   inventory build, all at once). No confirmed technical confluence read
   this run. Watch only.
3. **No new sector or single-name idea clears the entry checklist today** —
   default HOLD stands.

**Risk factors:**
- CPI print 8:30am ET — a hot surprise (headline/core above forecast) could
  push yields higher and hit richly-valued growth names; a cool surprise
  could extend the current modest equity strength. Binary event — argues
  for staying flat into it, per strategy rule.
- Strait of Hormuz — genuine supply-shock tail risk with conflicting signals
  (hardening Trump rhetoric vs. reportedly advanced Iran-Oman talks); could
  gap oil/energy either direction intraday.
- Large bearish crude-inventory build (+9.1M bbl, biggest since February)
  sitting underneath the geopolitical premium — a Hormuz de-escalation could
  see oil reprice down sharply and quickly.
- Persistent $100k live equity vs. $10k CLAUDE.md baseline mismatch —
  unresolved 26 sessions running, operator review still pending.

**Decision: HOLD.** CPI print today is the defining catalyst; strategy
discipline argues against sizing new risk into a binary macro release, and
no idiosyncratic single-name setup clears the confluence bar regardless. 25
trading days since launch (Jul 9) with zero entries. Weekly trade count:
0/3 (week of Aug 10).

## 2026-08-12 — Gappers (auto-scan 11:23 ET, cloud)

Watchlist scan (memory/WATCHLIST.md, ~60 tickers via `scripts/gappers-alpaca.sh
watchlist` against Alpaca). Note: this run fired mid-morning (11:23 ET, market
already open ~2hrs) rather than premarket — scan and filters run unchanged
regardless. 5 raw gaps >=5%: ZIM -7.64%, BW -7.04%, BWLP +6.99%, LPG +6.25%,
AGMH -5.17%. AGMH fails the $3.00 price floor ($0.9957). **4 qualifying
gappers** (gap>=5%, price>=$3). "volume" field is the script's session-volume
figure, not true premarket volume (informational only, consistent with prior
entries in this log). All 4 got the full deep-dive (well under the 5-name
cap).

### Gappers (auto-scan 11:23 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | ZIM | 23.155 | -7.64% | 21,075 | No same-day headline found; follows a weak Q1 2026 report ($86M net loss), a week ahead of Aug 19 Q2 results. |
| 2 | BW | 8.715 | -7.04% | 148,249 | Fading from its Aug 11 post-earnings AH spike (Q2 EPS beat, +42% AH) as the pop unwinds intraday. |
| 3 | BWLP | 23.505 | +6.99% | 4,736 | Moving in sympathy with sector-mate Dorian LPG's dividend headline; own site cites a recent ~$17M vessel sale. |
| 4 | LPG | 47.18 | +6.25% | 1,700 | Dorian LPG declared a $1.00/share irregular cash dividend (payable ~today, Aug 12); also strong recent EPS growth (>158% YoY). |

Deep dive (4 hits, well under the 5-name cap — no ranks dropped):

#### Deep dive: ZIM $23.155 -7.64%
- Catalyst: No dated same-day headline located via search. ZIM's Q1 2026
  results (May 20) showed an $86M net loss on $1.40B revenue and a $5M
  adjusted EBIT loss vs a much stronger prior-year quarter, and shares
  already sit ~18% below their 52-week high. An unconfirmed March 2026
  piece floated a $35/share Hapag-Lloyd buyout-arbitrage thesis, but the
  current price (~$23) trades nowhere near that level — that thesis has
  either not materialized or was speculative and should not be treated as
  a live catalyst.
- Why: Absent a dated headline, the read is macro/sector — container
  freight rates softening industry-wide, traders de-risking single-name
  shipping exposure ahead of ZIM's Aug 19 earnings after a weak Q1 print.
- Impact: Looks like continued distribution/de-risking rather than a
  one-day shock — consistent with the multi-week downtrend (18% off 52-wk
  high). Contrasts with the LPG/BWLP gas-carrier subsector, which is up
  today — idiosyncratic container-shipping weakness, not a shipping-wide
  selloff.
- Horizon: SHORT_TERM — no structural catalyst identified; reads as a
  pre-earnings drift into the Aug 19 print, not a thesis to hold through.
- Opportunity cost: No existing positions to displace (0/6 open). Wrong
  direction for a long entry regardless — an avoid/short-bias read, not a
  buy candidate — and no dated catalyst clears the Confluence rule's
  "at least 1 catalyst documented" requirement either way.

#### Deep dive: BW $8.715 -7.04%
- Catalyst: BW reported Q2 2026 results Aug 11 after the close — EPS $0.07
  vs a $0.63 loss a year ago, adjusted EBITDA up 57% to $21.8M — shares
  spiked as much as 42% after hours and were reported up double digits
  premarket. Today's session shows a pullback from the $9.375 prior close
  to $8.715 (-7.04%), giving back a chunk of the post-earnings pop within
  24 hours.
- Why: Classic post-earnings-pop fade — an EPS/EBITDA beat drove an
  outsized AH/premarket spike, now unwinding intraday as momentum buyers
  take profit and the market re-prices BW's longer-running balance-sheet
  concerns (separate coverage flagged BW down ~33% over the trailing 30
  days into the print on other headwinds).
- Impact: Reads as a one-day mean-reversion of an overextended earnings
  pop, not a durable re-rating — the prior 30-day downtrend argues for a
  fade rather than a sustained breakout. Watch whether it stabilizes above
  pre-earnings levels (~$9.4) or keeps round-tripping the entire move.
- Horizon: SHORT_TERM — earnings-pop-then-fade pattern, no structural
  catalyst beyond the one print; not a multi-week hold candidate.
- Opportunity cost: No existing positions to displace. As a fading
  post-earnings gapper this is a lower-quality setup than a fresh
  breakout — a same-day entry would need a very tight stop to clear 2:1
  R:R given it's already round-tripping, and would consume one of the 3
  weekly trade slots for what is likely at best a 1-2 day mean-reversion
  play.

#### Deep dive: BWLP $23.505 +6.99%
- Catalyst: No single dated headline pinpoints today's move. BW LPG's own
  site references the recent sale of the BW Levant Singapore vessel for
  ~$17M (balance-sheet/cash event, not earnings), and an earlier research
  note had Oslo-listed shares recovering toward $19-20 off a 52-week low
  of $10.16. Today's NYSE move tracks the same direction as Dorian LPG's
  special-dividend rally (see LPG below), suggesting a sector-wide
  VLGC/LPG-carrier bid rather than a BWLP-specific event.
- Why: Read-through from Dorian LPG's dividend announcement appears to be
  lifting sentiment across the VLGC/LPG-carrier peer group, BWLP included;
  freight-rate volatility in this niche (rates have swung from
  $40-45k/day to $8k/day within a week per trade-press coverage) means
  sentiment shifts translate into outsized single-day moves.
- Impact: Thin absolute volume (4,736 shares in today's scan) makes this
  look more like a headline/sector-sympathy pop than a volume-confirmed
  breakout — the peer-group catalyst (LPG) is real but BWLP's own volume
  doesn't confirm conviction.
- Horizon: SHORT_TERM — no company-specific structural catalyst
  identified for BWLP itself; the move looks borrowed from LPG's dividend
  headline and freight-rate volatility rather than a durable
  BWLP-specific thesis.
- Opportunity cost: No existing positions to displace. Given the light
  volume and no company-specific catalyst, this would rank behind LPG
  (its own peer with an actual dated catalyst) if only one gas-shipping
  name could be taken under the 3-trades/week cap.

#### Deep dive: LPG $47.18 +6.25%
- Catalyst: Dorian LPG declared an irregular/special cash dividend of
  $1.00 per share — a real, dated capital-return catalyst (record date
  already passed per a prior scan's finding, payable ~Aug 12, i.e. today).
  This follows a run of strong quarterly results (EPS growth >158% YoY,
  prior quarter up 274% YoY per separate coverage), consistent with
  outsized free cash flow generation in the current VLGC freight-rate
  environment.
- Why: A special dividend signals management confidence in sustained cash
  generation and directly rewards holders — a mechanical, income-driven
  buy trigger separate from any pure momentum story, explaining both the
  price pop and above-average interest.
- Impact: Looks more durable than a typical headline spike — backed by
  real EPS growth and a cash-payout decision, not just sentiment.
  Read-through to sector-mate BWLP (up in sympathy) supports a genuine
  VLGC-subsector re-rating rather than isolated noise, though today's
  scanned volume (1,700 shares) is still thin for confirmation.
- Horizon: LONG_TERM — a structural capital-allocation catalyst (special
  dividend + sustained EPS growth) rather than a one-day headline; worth
  tracking for a multi-day/week swing entry if it later clears the
  Confluence rule (>=2 of VWAP/RSI/200-SMA/insider-signal) on a follow-up
  /trade check.
- Opportunity cost: No existing positions to displace (0/6 open, 0/3
  weekly trades used). Of today's four names, LPG has the cleanest, most
  dated, most fundamentally-backed catalyst — if only one new trade is
  taken this week, this is the strongest candidate to actually validate
  against /trade's confluence/R:R gate, ahead of BW (fading pop), BWLP
  (thin volume, borrowed catalyst), and ahead of shorting/avoiding ZIM
  (no catalyst, wrong direction for a long).

### Setup Scan (16:38 ET, cloud)
Full-universe scan via `scripts/setup-scan-cloud.mjs` (Alpaca bars/quotes,
`config/rules.json` watchlist_tiers.immediate, 60 candidates checked). 1
hit, grade B, 0 grade-A hits.

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| PEPG | B | Momentum confluence | daily swing | RSI 72.79, ADX 31.36, EMA9 $2.45 > EMA21 $2.21, px $2.51 |

No Telegram alert sent — 0 grade-A hits (matches local `/setup-scan` quiet
rule).

### Setup Scan (18:39 ET, cloud)
Full-universe scan via `scripts/setup-scan-cloud.mjs` (Alpaca bars/quotes,
`config/rules.json` watchlist_tiers.immediate, 60 candidates checked). 1
hit, grade B, 0 grade-A hits.

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| PEPG | B | Momentum confluence | daily swing | RSI 72.79, ADX 31.36, EMA9 $2.45 > EMA21 $2.21, px $2.51 |

No Telegram alert sent — 0 grade-A hits (matches local `/setup-scan` quiet
rule).

## 2026-08-13 — Gappers (auto-scan 08:27 ET, cloud)

Watchlist scan (memory/WATCHLIST.md, ~60 tickers via `scripts/gappers-alpaca.sh
watchlist` against Alpaca, GAP_THRESHOLD=5.0). Only 2 raw gaps >=5%: LUNR
-9.48%, OPEN -6.29%. Both clear the $3.00 price floor. **2 qualifying
gappers** (gap>=5%, price>=$3) — both down gaps, no up gaps today. "Vol"
field is the script's prior-completed-session full-day volume, not true
premarket volume (informational only, consistent with prior entries in this
log). Both got the full deep-dive (well under the 5-name cap). Note: initial
Apify catalyst query for OPEN returned unusable results (matched "Catalyst
Pharmaceuticals" ticker CPRX and generic market pages instead of Opendoor
news) — fell back to `benzinga.com/quote/OPEN` per routine STEP 2, which
worked.

### Gappers (auto-scan 08:27 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | LUNR | 15.37 | -9.48% | 481,974 | Q2 2026 earnings this morning — record $1.8B backlog, revenue up 4x YoY, but wider net loss and heavy share dilution. |
| 2 | OPEN | 3.275 | -6.29% | 440,243 | Extending Wednesday's post-Q2-earnings slide — beat on Q2 but weak Q3 revenue guidance. |

Deep dive (2 hits, well under the 5-name cap — no ranks dropped):

#### Deep dive: LUNR $15.37 -9.48%
- Catalyst: Intuitive Machines (Nasdaq: LUNR) reported Q2 2026 results
  before the open (press release 07:30 ET, call 08:30 ET). Revenue hit a
  record $206.2M (vs $50.3M a year ago, driven by the new Lanteris/Maxar
  spacecraft-production business), and backlog rose to $1.76B (+$1.55B
  YTD, including $612.8M acquired Lanteris backlog plus a new $1.34B
  multi-satellite award). Full-year guidance: $900M-$1B revenue, Adjusted
  EBITDA turning positive. But net loss widened to -$62.8M (vs -$38.2M a
  year ago), EPS -$0.29 (vs -$0.22), operating cash flow was -$59.8M for
  the quarter, and weighted-average shares outstanding grew from 117.4M
  to 162.2M YoY (heavy dilution funding the Lanteris/Goonhilly deals).
- Why: A backlog-and-revenue beat would normally be bullish, but the
  market is instead pricing the deteriorating bottom line — losses
  widened, cash burn accelerated, and share count grew ~38% YoY. "Growth
  bought with dilution and losses" caps the upside read on an otherwise
  strong top-line print — a sell-the-news reaction on a richly-valued,
  pre-profit name.
- Impact: Real, dated news (an earnings release), not rumor — extended-
  trading quotes already show LUNR down ~9.6% pre-market. No peer space
  names (Rocket Lab, SpaceX-linked movers) reported down in sympathy, so
  this reads as LUNR-specific, not a sector rotation out of space stocks.
  Sustainability is uncertain given the 8:30am ET call could reframe the
  narrative either way.
- Horizon: SHORT_TERM — a single earnings-print reaction; no structural
  change to the long-term backlog/contract-win thesis (arguably
  improving), so don't treat today's drop alone as a trend change without
  watching how it trades post-call.
- Opportunity cost: 0/6 open positions, 0/3 weekly trades used — nothing
  to displace. This is a gap DOWN, not a long setup under this strategy;
  not a same-day buy candidate. Would only become relevant as a long if
  it stabilizes and later clears the Confluence rule on a separate
  /trade check.

#### Deep dive: OPEN $3.275 -6.29%
- Catalyst: Opendoor Technologies (Nasdaq: OPEN) reported Q2 2026 results
  Tuesday after the close. Coverage (Benzinga) describes it as "everything
  is up, except costs" — revenue/volume metrics improved, but Q3 revenue
  guidance came in below Street expectations, and a JPMorgan note flagged
  the path to profitability ("ANI milestone") as improving but not yet
  delivered. Stock fell Wednesday on the guidance miss and is extending
  that decline again this (Thursday) morning, down another ~6-8%
  pre-market on top of Wednesday's drop.
- Why: A soft forward-quarter revenue guide after a headline beat is a
  classic guidance-driven selloff — traders price the outlook, not the
  trailing quarter, and a heavily-shorted (19.16% short interest per
  Benzinga), pre-profit, high-beta name amplifies that reaction across
  multiple sessions as momentum and short sellers keep pressing the move.
- Impact: Reads as a multi-day continuation of a single guidance event,
  not a fresh one-day headline spike — today's premarket volume (~440K)
  is well below OPEN's ~38-55M average daily volume, consistent with
  early pre-market positioning rather than a volume-confirmed
  capitulation. No stated sector-wide read-through; looks OPEN/real-
  estate-platform-specific (guidance/cost mix), not a broader housing
  move.
- Horizon: SHORT_TERM — headline/guidance-driven, still fading from
  Tuesday's print with no new structural catalyst since; treat as a
  multi-day fade to let play out rather than a durable thesis change.
- Opportunity cost: 0/6 open positions, 0/3 weekly trades used — nothing
  existing to displace. This is a gap DOWN and a weak-guidance name with
  a large already-realized 2-day decline — not a long setup; would need
  to reverse and clear Confluence separately before any entry. Also note
  OPEN trades at $3.275, close to the sub-$3 low-priced-stock zone this
  bot should watch for slippage/liquidity risk if it were ever
  considered.

### Gappers (auto-scan 09:22 ET, cloud, second run)

Watchlist re-scan (60 tickers). 3 of 60 cleared all filters
(|gap%|>=5, price>=3, premarket_volume>=50000); ZIM, LAKE, APT hit the
gap threshold but were dropped on the volume filter. All 3 got the
deep-dive treatment (within the 5-name cap). LUNR and OPEN also appeared
in this morning's 08:27 ET scan — see above for the prior read; both
have moved further and/or have fresh news since, so re-researched below
rather than duplicated.

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | LUNR | $14.69 | -13.49% | 481,974 | Q2 2026 earnings (before open); decline extending through the morning on wider net loss/dilution concerns. |
| 2 | OPEN | $3.225 | -7.73% | 440,243 | Priced $650M 0% convertible notes + first-ever $158M share buyback this morning; stock down ~8% on the financing news. |
| 3 | ONDS | $9.125 | -6.75% | 2,417,161 | Q2 2026 earnings: record $83.8M revenue (+67% QoQ), raised FY guidance; stock down on apparent EPS miss / profit-taking after a big run. |

#### Deep dive: LUNR $14.69 -13.49%
- Catalyst: Intuitive Machines (NASDAQ: LUNR) reported Q2 2026 results
  before today's open (analysts modeled $221.12M revenue, -$0.07 EPS).
  Decline has extended through the pre-market session (Benzinga showed
  -10.49% to $14.75 at 9:10am ET; this scan caught it lower at $14.69,
  -13.49%), continuing the same story flagged in this morning's earlier
  scan — record ~$1.8B backlog and 4x YoY revenue growth, but a wider
  net loss and heavy dilution (weighted shares up ~38% YoY).
- Why: The market is pricing the deteriorating bottom line and rising
  share count over the backlog headline. The stock has continued sliding
  intraday rather than stabilizing after this morning's conference call,
  suggesting the call reinforced rather than reversed the initial
  reaction.
- Impact: Continuation move on real, dated news, not a one-day spike —
  the decline widened from -9.5% to -13.5% over the pre-market session,
  with volume (~482K) exceeding this morning's earlier read. No stated
  sector-wide read-through; LUNR-specific (dilution/cash-burn concerns).
- Horizon: SHORT_TERM — single earnings-reaction move; no structural
  change to the backlog/contract-win thesis, but the growing dilution
  overhang argues against a dip-buy without a clear post-call reset.
- Opportunity cost: 0/6 open positions, 0/3 weekly trades used — nothing
  to displace. Gap DOWN and still actively falling intraday — not a long
  setup; would need to stabilize and clear Confluence separately.

#### Deep dive: OPEN $3.225 -7.73%
- Catalyst: Opendoor (NASDAQ: OPEN) announced this morning (6:00am ET) a
  $650M offering of 0% Convertible Senior Notes due 2030, paired with its
  first-ever share repurchase (~45.3M shares / 5% of shares out for
  $158M at $3.49) and capped-call transactions (cap $6.98, ~$52.5M
  cost). Net ~$440M new growth capital; structured for no net dilution
  below ~$10.38/share. Conversion price $4.71 (35% premium to Aug 12
  close). Settlement expected Aug 19. Follows the Aug 4 Q2 earnings
  guidance miss (-8.7% that day) and continues a string of down sessions.
- Why: Despite the shareholder-friendly framing (buyback + capped
  dilution), the market is reading $650M of new senior debt plus a
  capital raise from a cash-burning company (~$718M/quarter operating
  outflow per StockTitan) as balance-sheet defense, not offense, on top
  of an already-skeptical post-guidance-miss tape.
- Impact: Real, dated 8-K-triggering financing news with ~34.8x average
  volume per StockTitan — a volume-confirmed institutional reaction, not
  thin pre-market noise. Adds to, rather than replaces, the prior Aug
  4/5 guidance-miss selloff — reads as continuation, not a fresh
  one-day spike likely to mean-revert quickly. No sector-wide
  read-through; OPEN-specific financing event.
- Horizon: SHORT_TERM — financing-event reaction stacked on an already-
  deteriorating guidance thesis; nothing here changes the underlying
  growth/profitability debate.
- Opportunity cost: 0/6 open positions, 0/3 weekly trades used — nothing
  to displace. Gap DOWN on a financing/dilution-risk headline, not a
  long setup. OPEN trades at $3.225, in the sub-$3-adjacent low-priced
  zone to watch for slippage/liquidity risk on any future reversal.

#### Deep dive: ONDS $9.125 -6.75%
- Catalyst: Ondas Holdings (NASDAQ: ONDS) reported Q2 2026 results this
  morning (release ~8:00am ET, call 8:30am ET): record revenue of $83.8M
  (+67% sequentially, 13x YoY, +85% YoY pro forma organic). Q2 new
  orders $175M plus another $105M booked so far in Q3. Backlog $613M
  reported ($757M pro forma incl. DZYNE/Cyberhawk). Cash $1.4B.
  Management raised FY2026 revenue guidance to $525-550M and signaled an
  accelerated timeline to Adjusted EBITDA profitability. Despite the
  beat-and-raise, shares are down premarket — consistent with wire
  coverage describing an "earnings miss despite revenue beat" (EPS/
  bottom-line miss overshadowing the top-line strength).
- Why: ONDS has been one of the market's hottest momentum names into
  this print (recent top 52-week/monthly gainer rankings, helped by a
  string of defense contract wins and the Aug 3 ex-Mossad-director hire
  that alone moved the stock +11.75%). A revenue-beat/EPS-miss print into
  a name already priced for perfection is a classic sell-the-news setup.
- Impact: Real, dated earnings news with heavy premarket volume (2.4M
  shares, well above the other two gappers) — a broad, institutional
  reaction, not thin noise. Given the string of bullish contract-win
  headlines over the past two weeks, this reads as healthy profit-taking
  in an extended stock, not a thesis-breaking event; no negative
  read-through to defense/autonomous-systems peers found.
- Horizon: LONG_TERM — the underlying catalysts (record backlog, raised
  guidance, accelerating defense order flow, new leadership hire) are
  structural, not headline-only; today's dip looks like digestion of a
  big run rather than a change in trajectory.
- Opportunity cost: 0/6 open positions, 0/3 weekly trades used. Gap
  DOWN, not a long setup today; if ONDS stabilizes, it would be the
  strongest LONG_TERM candidate of today's three gappers given raised
  guidance and backlog growth, but sizing/R:R is deferred to a later
  /trade check, not decided here.

### Setup Scan (16:40 ET, cloud)
Full-universe scan via `scripts/setup-scan-cloud.mjs` (Alpaca bars/quotes,
`config/rules.json` watchlist_tiers.immediate, 60 candidates checked). 1
hit, grade B, 0 grade-A hits.

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| SATL | B | Momentum confluence | daily swing | RSI 67.05, ADX 29.06, EMA9 $5.10 > EMA21 $4.72, px $5.02 |

No Telegram alert sent — 0 grade-A hits (matches local `/setup-scan` quiet
rule).

### Setup Scan (18:43 ET, cloud)
Full-universe scan via `scripts/setup-scan-cloud.mjs` (Alpaca bars/quotes,
`config/rules.json` watchlist_tiers.immediate, 60 candidates checked). 1
hit, grade B, 0 grade-A hits.

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| SATL | B | Momentum confluence | daily swing | RSI 67.05, ADX 29.06, EMA9 $5.10 > EMA21 $4.72, px $5.02 |

No Telegram alert sent — 0 grade-A hits (matches local `/setup-scan` quiet
rule).

## 2026-08-14 — Pre-Market Research (Day 27, Friday)

**Account snapshot (live via `alpaca.sh`):** Equity $100,000.00 | Cash
$100,000.00 (100%) | Buying power $400,000 | Positions: 0 | Open orders: 0.
Equity still flat at $100,000 vs. the $10,000 baseline in CLAUDE.md —
mismatch flagged Jul 27, unresolved 30th straight session, operator review
pending.

**Market context (Apify RAG web browser; TradingEconomics + Investing.com +
Markets Insider + Cboe + FRED + Schwab):**
- **Soft PPI is today's catalyst.** Zacks premarket wrap: "Pre-Markets in
  Green on Soft PPI, Falling Oil Prices and Bond Yields" — a second
  soft/in-line inflation print this week (July CPI came in-line Wed 8/12)
  extending the post-CPI rally and pushing back rate-hike fears.
- **Equities — calm, modestly green premarket, extending Thursday's rally.**
  S&P 500 futures 7,827-7,828 (+0.06-0.07%), Nasdaq 100 futures 30,246.25
  (+0.19%), Dow futures 53,852 (-0.15%, lagging). Thursday 8/13 cash close:
  S&P 500 7,798.99 (+50.49, +0.65%) — "SP500 Today: Tops 7800 as Inflation
  Cools, Oil Slides" was the day's headline. Asian markets on track for
  their best week since June (KOSPI exited bear-market territory) on the
  same softer-US-inflation/tech-rebound theme. Applied Materials reported
  and SMIC rallied — chip-equipment news a secondary futures driver.
- **VIX 14.50 (-0.89%), prev close 14.63** (Cboe) — near the 52-week low
  (13.38) vs. high (35.30). Complacent tape while the index sits near highs;
  worth flagging as a risk factor, not a signal on its own.
- **Oil — easing this morning, still Hormuz-elevated on a multi-day view.**
  WTI $81.79-81.81 (Investing.com/Markets Insider, +0.5-0.7% day), $81.53
  per TradingEconomics (+0.35% day, +2.43% month, +31.55% YoY — crude was up
  nearly 5% earlier this week on US pressure on Iran to reopen the Strait of
  Hormuz). Brent $86.85-87.26 (roughly flat, mixed across sources). IEA
  warned of the widest global oil-supply deficit in five years for 2026;
  Iran-Oman talks on reopening Hormuz still unresolved. Today's softer print
  is a one-day easing inside that larger elevated-risk-premium backdrop, not
  a reversal of it.
- **Rates:** 10Y 4.657% (+0.34%), 30Y 5.235% (+0.46%) — long end still
  elevated despite the calm short-term tape. Market has recently shifted
  from pricing Fed cuts toward a possible H2 hike under new Fed chair Kevin
  Warsh (2 meetings held, rates unchanged so far) per Schwab's sector note —
  a background risk, not today's driver.
- **Sector momentum (Schwab Sector Views, monthly, as of 7/31 — most recent
  available, no fresher source found):** More Favored — Financials, Health
  Care, Industrials, Materials. Neutral — Communication Services, Consumer
  Staples, Energy, Information Technology. Less Favored — Utilities. Least
  Favored — Consumer Discretionary, Real Estate. Trailing-12mo performance:
  Energy +41.7% (best, but Schwab flags valuations/earnings expectations as
  now elevated), Information Technology +27.2%, Health Care +21.3%,
  Industrials +19.5%, vs. S&P 500 +17.4% (12mo).
- **Earnings today:** No clean, confirmed same-day US pre-market earnings
  list surfaced this run (queries kept resolving to generic/non-US results)
  — a recurring search gap noted in several past entries. No confirmed
  earnings-binary names to exclude, but also no positive confirmation none
  exist; doesn't block today's call since there are no open positions.
- Held tickers: none (0 open positions) — no held-ticker news to check.

**Trade ideas (all HOLD/watch-only — no entry):**
1. **Post-CPI/PPI inflation-cooling rally — macro-driven, not idiosyncratic.**
   Two soft/in-line prints this week (CPI Wed, PPI today) are lifting the
   whole tape; S&P sits near 7,800+ highs with VIX at 14.5. No single-name
   catalyst identified today — sitting out an index-level move is consistent
   with strategy discipline, not a missed setup.
2. **Financials / Industrials / Materials (Schwab "More Favored") — watch
   only.** Thematically fits today's soft-PPI/steady-rates backdrop, but no
   company-specific catalyst or confluence read (RSI/VWAP/200-SMA/insider)
   available this run. Flag for a future session with a real trigger.
3. **Energy — pass, not chase.** Best trailing-12mo sector (+41.7%), but
   Schwab itself flags stretched valuations/earnings expectations, and
   today's price action shows oil easing on the soft PPI print rather than
   extending. No idiosyncratic entry signal.

**Risk factors:**
- Complacency: VIX 14.50 near its 52-week low while the S&P sits near highs
  — thin cushion if a negative surprise hits.
- Strait of Hormuz / Iran situation remains unresolved (IEA supply-deficit
  warning, unresolved Iran-Oman talks) — genuine oil-supply tail risk that
  could reverse today's calm tape intraday.
- Fed policy uncertainty under new chair Kevin Warsh — market has shifted
  from pricing cuts toward a possible H2 hike; a hawkish surprise could hit
  richly-valued growth names.
- Elevated long-end yields (30Y 5.235%) despite the calm short-term tape.
- Persistent $100k live equity vs. $10k CLAUDE.md baseline mismatch —
  unresolved 30 sessions running, operator review still pending.
- Data gap: same-day US earnings calendar not cleanly confirmed via search
  (recurring gap, doesn't block today's HOLD call given zero positions).

**Decision: HOLD.** No idiosyncratic single-name catalyst identified; today's
tape is a continuation of the post-CPI/PPI inflation-cooling rally
(index-level, not stock-specific), and low VIX + a stretched S&P near highs
argue for discipline over chasing. 27 trading days since launch (Jul 9) with
zero entries. Weekly trade count: 0/3 (week of Aug 10).

## 2026-08-14 — Gappers (auto-scan 08:58 ET, cloud)

Watchlist scan (memory/WATCHLIST.md, ~60 tickers via `scripts/gappers-alpaca.sh
watchlist` against Alpaca, GAP_THRESHOLD=5.0). Only 3 raw gaps >=5%: RCAT
+11.2%, AMPX +8.76%, ONDS +5.73%. All 3 clear the $3.00 price floor and the
50,000-volume floor. **3 qualifying gappers** (gap>=5%, price>=$3), all up
gaps — well under the top-10 cap, so no ranks 6-10 to note. "Vol" field is
the script's prior-completed-session full-day volume, not true premarket
volume (informational only, consistent with prior entries in this log). All
3 got the full deep-dive (well under the 5-name cap). RCAT and ONDS share
the identical same-day catalyst (a Trump-administration drone-tariff
story); AMPX's catalyst is inferred sector read-through, not a confirmed
company-specific headline — flagged explicitly below.

### Gappers (auto-scan 08:58 ET, cloud)
| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | RCAT | 11.365 | +11.2% | 376,372 | New Trump drone tariffs shield US makers from foreign rivals — RCAT named directly alongside AeroVironment, Kratos, Ondas. |
| 2 | AMPX | 12.98 | +8.76% | 252,009 | No AMPX-specific headline found; likely sector read-through from the same drone-tariff story, or residual Aug 4 earnings-beat momentum. |
| 3 | ONDS | 9.415 | +5.73% | 2,233,728 | Same drone-tariff story as RCAT — Ondas named directly alongside Red Cat as a beneficiary. |

Deep dive (3 hits, well under the 5-name cap — no ranks dropped):

#### Deep dive: RCAT $11.365 +11.2%
- Catalyst: Benzinga's top same-day story reports new tariffs on
  foreign-made drones (largely aimed at low-cost Chinese suppliers)
  intended to shield US drone manufacturers from foreign competition. Red
  Cat Holdings (NASDAQ: RCAT) is named directly alongside AeroVironment,
  Kratos, and Ondas as a beneficiary. RCAT closed Monday Aug 12 at $10.23;
  Benzinga's premarket quote showed +10.51% to $11.40 as of 8:46am ET, in
  line with this scan's +11.2% read. RSI 67, short interest 23.2% (4.36
  days to cover), 52-week range $5.77-$18.78, consensus analyst price
  target $18.60.
- Why: Tariffs on foreign (largely Chinese) drone imports raise the
  relative cost of overseas competitors, read as bullish for domestic
  small-cap drone makers like Red Cat gaining market share and pricing
  power. This is a policy/regulatory catalyst, not company-specific news,
  so the whole US drone/defense-tech complex re-rated together in the same
  session.
- Impact: Real, dated, same-day catalyst (a tariff action), not rumor.
  Clear sector-wide read-through: three other tickers (AeroVironment,
  Kratos, and today's own #3 gapper Ondas) moved on the identical story,
  confirming a genuine sector rotation rather than an RCAT-specific spike.
  High existing short interest (23.2%) raises the odds some of today's pop
  is short-covering. This scan's "volume" field is RCAT's prior completed
  session's full-day volume (376,372 vs. a 12.89M average daily volume per
  Benzinga), not true premarket volume, so sustainability into the open
  can't be confirmed from this data source alone.
- Horizon: LONG_TERM, tentatively — a tariff is a structural/regulatory
  catalyst rather than a one-day headline, and it fits a defense/hardware
  sector-rotation read; but confirm the tariff isn't reversed/challenged
  before treating this as a durable multi-week thesis.
- Opportunity cost: Account is flat (0/6 open positions, 0/3 weekly trades
  used, $100,000 equity), so nothing existing to displace. RCAT is the
  #1-ranked gapper today and has the cleanest single-name catalyst of the
  three. Taking it would use 1 of 3 weekly trade slots and up to $20,000
  (20% equity cap); actual stop distance and 2:1 R:R clearance are not
  evaluated here — this is research only, not a trade recommendation.

#### Deep dive: AMPX $12.98 +8.76%
- Catalyst: No AMPX-specific news dated today (Aug 14) surfaced via Apify
  RAG search or Benzinga's quote page — the most recent Benzinga item is an
  Aug 4 Q2 2026 earnings release (revenue more than doubled YoY to $34.0M,
  net loss narrowed 20% YoY) and older items (a Jim Cramer buy call, a May
  short-seller report from Manatee Research). Benzinga's premarket quote
  shows AMPX +5.27% to $12.89 as of 8:46am ET, roughly matching this scan's
  +8.76% read off Monday's $11.94 close.
- Why: With no distinct AMPX headline today, the likely mechanism is sector
  read-through from the same drone-tariff story lifting RCAT and ONDS:
  Amprius makes high-energy-density silicon-anode batteries used in
  aviation/eVTOL/UAS applications, so a policy tailwind for domestic drone
  makers could plausibly extend demand expectations to its battery supply
  chain. This is inferred, not confirmed by any AMPX-specific article.
- Impact: Treat with more caution than RCAT/ONDS since the catalyst is
  inferred rather than a discrete, dated, company-specific event. AMPX
  carries its own elevated short interest (16.62%) and a ~7.47M average
  daily volume vs. today's thin prior-session volume reading (252,009), so
  a move without a fresh dated press release reads more like a beta/
  sympathy pop than a confirmed sustainable trend — risk of fading once the
  market opens if no AMPX-specific news emerges.
- Horizon: SHORT_TERM — no dated, company-specific catalyst confirmed;
  reads as a sympathy move off the drone-tariff headline (or residual drift
  off the Aug 4 earnings beat), not a fresh structural catalyst, so treat
  as fade risk within the session/week absent a confirming AMPX-specific
  development.
- Opportunity cost: Account is flat (0/6 open positions, 0/3 weekly trades
  used, $100,000 equity). Ranked #2 of today's 3 gappers by |gap%|, but the
  unconfirmed/inferred catalyst puts it behind RCAT for capital priority
  today. Taking it would use 1 of 3 weekly trade slots and up to $20,000
  (20% cap); stop/R:R math not evaluated here — research only, not a trade
  recommendation.

#### Deep dive: ONDS $9.415 +5.73%
- Catalyst: Same same-day Benzinga story as RCAT: new tariffs on
  foreign-made drones are described as shielding US drone/defense-tech
  makers from foreign rivals, with Ondas Holdings (NASDAQ: ONDS) named
  explicitly alongside Red Cat, AeroVironment, and Kratos as a beneficiary.
  This scan shows ONDS +5.73% to $9.415 vs. Wednesday's $8.905 close. Other
  (lower-confidence, undated-in-search) coverage found separately flags
  ONDS's history of volatile swings — a StocksToTrade note on insider-sale-
  driven pullbacks and a SimplyWallSt mention of a prior 19% single-day pop
  tied to an Israeli defense/tactical-attack drone contract win.
- Why: Identical mechanism to RCAT: tariffs on foreign drone imports raise
  costs for overseas competitors, which the market is reading as expanding
  domestic drone-tech makers' addressable market and pricing power — hence
  the coordinated same-day move across four named tickers in one article.
- Impact: Confirmed, dated, same-day policy catalyst with clear sector-wide
  read-through (RCAT and ONDS are today's #1 and #3 gappers, both cited in
  the identical article, plus AeroVironment/Kratos moving too) — this is
  not an ONDS-idiosyncratic spike. ONDS's own history of volatile reversals
  (per the referenced insider-sale note) argues for caution chasing the
  pop; today's "volume" field (2,233,728) is prior-session full-day volume,
  not confirmed premarket volume, so follow-through into the open isn't
  verifiable from this data source alone.
- Horizon: LONG_TERM, tentatively — same reasoning as RCAT: a tariff is a
  structural/regulatory catalyst rather than a one-day headline, and ONDS
  is a named direct beneficiary; confirm no legal/political reversal risk
  before treating as a durable multi-week thesis.
- Opportunity cost: Account is flat (0/6 open positions, 0/3 weekly trades
  used, $100,000 equity). Ranked #3 of today's 3 gappers. If RCAT is chosen
  as the primary way to play this tariff thesis (higher gap%, cleaner
  standalone headline), adding ONDS would use a 2nd of 3 weekly trade slots
  on the same underlying catalyst — flag correlation risk between
  RCAT/ONDS/AMPX (all reacting to the same headline) against the
  strategy's correlation gate (blocks new entry if a symbol correlates
  >0.75 with 2+ open positions) before stacking more than one. Sizing/R:R
  not evaluated here — research only, not a trade recommendation.

## 2026-08-14 — Gappers (auto-scan 09:51 ET, cloud)

Second watchlist scan of the day (memory/WATCHLIST.md, ~60 tickers via
`scripts/gappers-alpaca.sh watchlist` against Alpaca, GAP_THRESHOLD=5.0).
Only 1 raw gap >=5%: BWLP -6.66%. Clears the $3.00 price floor; the
premarket-volume floor doesn't apply — the script's "volume" field is prior
full-day volume (576 shares), not a populated premarket_volume field, and
that figure itself is unusually thin for this name. **1 qualifying gapper**
— well under the top-10 cap, so no ranks 6-10 to note. Got the full
deep-dive (well under the 5-name cap). No confirmed BWLP-specific catalyst
found: two Apify RAG searches turned up only a same-day administrative
earnings-date announcement (Q2 report on Aug 28) plus stale May/June
articles; the Benzinga fallback returned HTTP 403 (blocked, not "no
result" — noted per the routine's fallback rule). Read as likely
noise/thin-liquidity, not catalyst-driven.

### Gappers (auto-scan 09:51 ET, cloud)

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BWLP | $20.89 | -6.66% | 576 | No dated company-specific catalyst; only a same-day earnings-date scheduling notice found |

#### Deep dive: BWLP $20.89 -6.66%
- Catalyst: BW LPG's own press-release page shows exactly one same-day
  (Aug 14, 07:00 CEST) item: a non-regulatory notice that Q2 2026 results
  will be released and presented on Aug 28, 2026 — a scheduling
  announcement, not results or guidance. No earnings, M&A, downgrade,
  insider-sale, or sector (VLGC/LPG freight-rate) story dated today
  surfaced via two Apify RAG searches or a Benzinga fallback (Benzinga
  returned HTTP 403, blocked). Stock fell from a $22.38 prior close to
  $20.89.
- Why: No confirmed mechanism connects today's actual news (an
  earnings-date scheduling notice) to a -6.66% drop. The prior-session
  volume field Alpaca returns for this name is only 576 shares — far below
  what a $700M+ market-cap NYSE-listed shipping name would normally print
  — so this reads as a thin/stale snapshot rather than a liquid, broadly-
  traded move; a large percentage move on very light volume is more
  consistent with a wide bid-ask/illiquidity artifact than a
  fundamentals-driven repricing.
- Impact: Unconfirmed and low-conviction. No dated, company-specific
  negative catalyst found, no sector read-through identified (no peer
  LPG/VLGC shipping names checked moved similarly), and the volume data
  available cannot confirm real participation behind the move.
  Highest-probability read: noise/thin-liquidity gap, likely to
  mean-revert once normal volume returns, but this can't be verified from
  the data sources available to this scan.
- Horizon: SHORT_TERM, no structural catalyst identified — absent a
  confirmed news driver, default to treating an unexplained gap as
  headline/noise-driven and not a basis for a multi-day thesis.
- Opportunity cost: Account is flat (0/6 open positions, 0/3 weekly trades
  used, $100,000 equity), so nothing existing to displace. With no
  confirmed catalyst and a possible data/liquidity artifact behind the
  move, this does not clear the bar to consider for a new entry regardless
  of available trade slots — the Confluence rule requires a real
  catalyst-backed setup, and none was found here. Research only, not a
  trade recommendation.

## 2026-08-14 — Gappers (auto-scan 10:35 ET, cloud)

Third watchlist scan of the day (memory/WATCHLIST.md, ~60 tickers via
`scripts/gappers-alpaca.sh watchlist` against Alpaca, GAP_THRESHOLD=5.0).
Only 1 raw gap >=5%: NBIS -6.06%. Clears the $3.00 price floor and the
premarket-volume floor (110,861 shares). **1 qualifying gapper** — well
under the top-10 cap, so no ranks 6-10 to note. Got the full deep-dive
(well under the 5-name cap). Real, dated catalyst found: Michael Burry
publicly doubling down on an AI-overcapacity short across Oracle, Micron,
and Nebius, layered on lingering weakness from NBIS's Aug 12 Q2 report
(454% revenue growth but guidance concerns tied to the "Vineland project,"
per Benzinga's Gil Luria coverage, Neutral / $175 PT). Flagging a data
conflict: Benzinga's live quote at ~10:19 ET showed NBIS +3.67% intraday
($264.39), the opposite direction from this scan's Alpaca-sourced -6.06%
read — noted in the deep dive, not resolved.

### Gappers (auto-scan 10:35 ET, cloud)

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | NBIS | $248.685 | -6.06% | 110,861 | Michael Burry doubling down on AI-overcapacity shorts in Oracle, Micron, Nebius, on top of post-earnings guidance overhang |

#### Deep dive: NBIS $248.685 -6.06%
- Catalyst: Nebius (NBIS) reported Q2 2026 earnings before the open Wed Aug
  12 — revenue up 454% YoY, but shares fell anyway on FY guidance tied to
  the "controversial Vineland project" (Benzinga); analyst Gil Luria (D.A.
  Davidson) reiterated Neutral, $175 PT. On top of that overhang, Benzinga
  reports Michael Burry has doubled down on AI-overcapacity short bets
  across Oracle, Micron, and Nebius, warning excess AI compute capacity
  could hit the market by 2028. Data conflict: Benzinga's live quote
  (~10:19 ET) showed NBIS at $264.39, +3.67% intraday, day range
  $256.90-$271.66 — materially different from this scan's Alpaca snapshot
  ($248.685, -6.06%) at nearly the same time. Treat the Alpaca gap_pct as
  the scan trigger only, not a confirmed real-time price.
- Why: Two bearish forces stacked — (1) a post-earnings guidance overhang
  since Wed's open (strong revenue growth undercut by Vineland-linked
  guidance concerns), and (2) a prominent short-seller (Burry) publicly
  reiterating/adding to a Nebius short as part of a broader AI-overcapacity
  theme, which can pressure sentiment and invite momentum selling.
- Impact: Mixed given the price-source conflict — Alpaca implies a fresh
  leg down, Benzinga's near-simultaneous quote shows the stock up on the
  session within a $256.90-$271.66 range, i.e. possibly chopping/recovering
  rather than making a clean new low. RSI 63, short interest very elevated
  (28.17%, 2.41 days to cover). Sector read-through is direct — Burry's
  short list groups Oracle, Micron, and Nebius as one AI-overcapacity trade.
  Sustainability can't be confirmed from this scan alone given the data
  conflict.
- Horizon: SHORT_TERM — the Burry headline is fresh commentary layered on a
  2-day-old earnings reaction, no new structural catalyst (no new guidance,
  no new contract); treat as headline-driven volatility, not a durable
  multi-week thesis.
- Opportunity cost: Account is flat (0/6 open positions, 0/3 weekly trades
  used, $100,000 equity), so nothing existing to displace. This is a
  gap-down/bearish setup, not a long entry candidate under the strategy's
  long-only framework, and the Alpaca-vs-Benzinga price conflict means the
  trigger itself is unconfirmed — does not clear the bar for a trade idea
  regardless of available slots. Research only, not a trade recommendation.

## 2026-08-14 — Gappers (auto-scan 11:42 ET, cloud)

Fourth watchlist scan of the day (memory/WATCHLIST.md, ~60 tickers via
`scripts/gappers-alpaca.sh watchlist` against Alpaca, GAP_THRESHOLD=5.0).
3 raw gaps ≥5%: BKSY -7.15%, APT +6.77%, NBIS -5.49%. All 3 clear the $3.00
price floor; 3 well under the top-10 cap so all got the full deep-dive
(no ranks 6-10 to note).

**Data quality flag — read before trusting this table.** All 3 rows this
run conflict with independently-verified live prices, confirmed by pulling
direct Alpaca quotes and 1-min bars for each symbol at ~11:40 ET:
- BKSY: scan says $28.375 (-7.15%); direct 1-min bars show trades clustering
  $30.5–31, essentially flat vs. the $30.56 prior close.
- APT: scan says $5.835 (+6.77%) on 462 shares; a direct quote check shows a
  ~14.5% bid/ask spread and zero trades in the prior 20 minutes — the stock
  isn't printing right now.
- NBIS: scan says $252.48 (-5.49%); SeekingAlpha's live quote and Alpaca's
  own 1-min bars both show NBIS trading $266–271, i.e. **up** ~+4.5% on the
  session, not down. This is the 3rd straight run today (09:51, 10:35, now
  11:42) where NBIS's Alpaca-snapshot gap read has disagreed with
  independently-verified live prices, in the same direction each time.

Root cause, read from `scripts/gappers-alpaca.sh` source: the script's
prev-close baseline uses the snapshot's `dailyBar.c`. Its own code comments
say this is only a valid stand-in for "yesterday's close" **pre-market**
(before today's session has printed a bar). This run fired at 11:42 ET,
2h12m after the 09:30 ET open — by then `dailyBar.c` reflects the
still-forming intraday bar, not a stable baseline, so the computed gap is
noise. The routine's own documented cadence (`routines/gappers-cloud.md`,
CLOUD CADENCE NOTE) schedules a run at "10:00 CT / 11:00 ET, second hour" —
already outside the premarket window the gap math assumes — so this will
recur on the last scheduled run of every day until fixed. Recommend the
operator add a time-of-day guard (skip or clearly relabel gap_pct once the
regular session has opened) to `scripts/gappers-alpaca.sh`.

Given the above, none of the 3 rows below should be treated as confirmed
real moves. Table and deep-dives are logged per the routine's format, with
the conflict folded into each write-up rather than silently dropped.

### Gappers (auto-scan 11:42 ET, cloud)

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| 1 | BKSY | $28.375 | -7.15% | 18,474 | Scan read looks stale — direct bars show BKSY flat ~$30.5-31, not down 7% |
| 2 | APT | $5.835 | +6.77% | 462 | No real catalyst; near-zero volume, no trades in a 20-min bars check |
| 3 | NBIS | $252.48 | -5.49% | 173,529 | Burry AI-overcapacity short + Aug 12 guidance overhang (same as 10:35 log) — but live quotes show NBIS up ~+4.5%, not down |

#### Deep dive: BKSY $28.375 -7.15%
- Catalyst: BlackSky (satellite imagery, NYSE) rallied 26.5% five days ago
  on a reaffirmed 2026 outlook and Gen-3 satellite ramp; a 6-hour-old
  SimplyWall.St piece debates whether the post-rally price is still a
  bargain given a new contract. No fresh negative headline found today.
  Direct Alpaca 1-min bars checked ~11:40 ET show trades clustering
  $30.5-31, essentially flat vs. the $30.56 prior close the scan used — not
  the $28.375/-7.15% the snapshot endpoint reported.
- Why: No mechanism identified for a real -7% move; the scan's gap read
  does not match the directly-queried trade tape. Most likely a stale/wide
  snapshot quote (the live quote carried condition code "R" with a bid/ask
  of $30.26/$34.81, consistent with an IEX free-feed NBBO artifact, not a
  real print).
- Impact: Not sustainable because it isn't real — corroborating 1-min bars
  show BKSY trading flat around $30.5-31 all morning, not making a new low.
- Horizon: SHORT_TERM, and likely not even a real move — do not treat as a
  signal pending a clean quote confirmation.
- Opportunity cost: N/A — data quality doesn't support a trade decision
  either way. If BKSY is already held, no action indicated since the
  underlying tape shows no real deterioration.

#### Deep dive: APT $5.835 +6.77%
- Catalyst: No news-based catalyst found — search results were generic
  syndicated "technical levels" articles from content-mill domains (mostly
  404/dead pages), not real news. Alpaca's own quote at 11:40 ET shows a
  wide, likely-stale spread (bid $5.44 / ask $6.23, ~14.5%) and zero trades
  in the prior 20 minutes — APT did not print during that window. Original
  scan volume was only 462 shares.
- Why: Cannot establish a mechanism — no catalyst, and the "gap" is built
  on essentially no live trading. Reads as a thin/illiquid stock with a
  stale last-print rather than a real intraday move.
- Impact: Not sustainable / not real. 462 shares of volume and zero trades
  in a 20-min bars check confirm this ticker isn't trading enough right now
  to trust any price off it.
- Horizon: SHORT_TERM — moot, since there's no real move to fade or hold;
  treat as noise.
- Opportunity cost: Skip. Fails the basic liquidity bar for any position
  size; would not clear a sane stop distance or the 2:1 R:R minimum given
  the spread alone eats ~14% of the price.

#### Deep dive: NBIS $252.48 -5.49%
- Catalyst: Same setup as the 10:35 ET deep dive: NBIS reported Q2 2026
  earnings before the open Wed Aug 12 (revenue +454% YoY) but shares fell
  on FY guidance tied to the "Vineland project"; D.A. Davidson's Gil Luria
  reiterated Neutral/$175 PT. On top of that, Michael Burry has publicly
  doubled down on an AI-overcapacity short spanning Oracle, Micron, and
  Nebius. This run's Alpaca snapshot again disagrees with independent
  sources: SeekingAlpha's live quote (~11:37-11:38 ET) showed NBIS at
  $266-267, +4.4-4.6% intraday; a direct 1-min bars pull confirms trades in
  the $268-271 range as of 11:23 ET — NBIS is up on the session, not down
  5.49%. Third straight scan today with this conflict.
- Why: A real bearish mechanism exists (Burry short thesis + earnings
  guidance overhang), but the magnitude/direction implied by this scan's
  own gap_pct is not corroborated by live data — the stock is actually
  green on the session per two independent checks.
- Impact: Cannot assess sustainability of a move the underlying tape
  doesn't confirm happened. Treat the Alpaca snapshot's -5.49% as an
  artifact of the script's dailyBar-based prev-close logic (pre-market-only
  by its own code comments); this run fired well outside that window.
- Horizon: SHORT_TERM if treating the Burry/earnings overhang as the real
  story (headline-driven, no new structural catalyst since the 10:35 log);
  but the scan's direction is likely wrong — live data says up, not down.
- Opportunity cost: Do not act on this scan's implied direction. If
  considering NBIS at all, price any entry off a live quote/chart, not this
  routine's output, given the repeated data conflict today. Account remains
  flat (0/6 positions, 0/3 weekly trades used) — no displacement question
  either way since nothing here clears the bar for a trade idea.

## 2026-08-14 — Setup Scan (16:39 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 3 grade-B hits.**
0 errors. No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

### Setup Scan (16:39 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| CRWV | B | Momentum confluence | daily swing | RSI 63.75, ADX 20.14, EMA9 $93.25 > EMA21 $87.71, px $104.61 |
| PEPG | B | Momentum confluence | daily swing | RSI 74.16, ADX 36.17, EMA9 $2.63 > EMA21 $2.34, px $2.53 |
| LUNR | B | Momentum confluence | daily swing | RSI 57.66, ADX 25.41, EMA9 $15.77 > EMA21 $15.52, px $19.11 |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-17

### Gappers (auto-scan 08:36 ET, cloud)

Watchlist scan (69 tickers from `memory/WATCHLIST.md`, 64 returned by Alpaca
snapshot) via `scripts/gappers-alpaca.sh watchlist`, `GAP_THRESHOLD=5.0`. Only
8/64 symbols carried a fresh (today-timestamped) quote/trade this early in
premarket — the rest still showed Friday 2026-08-14 close data, correctly
excluded by the script's stale-quote guard. **0 hits ≥5.0% gap.** Largest
mover was BE at +4.24% (229.85 → 239.59), below threshold. No catalyst
research or deep-dive run (nothing cleared the gap filter). No Telegram sent
per routine rule (hits = 0, no scan error).

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| — | — | — | — | — | No symbols ≥5.0% gap this scan |

0 errors. Full deep-dive skipped (no candidates).

### Gappers (auto-scan 11:16 ET, cloud, second run)

Watchlist scan (69 tickers from `memory/WATCHLIST.md`, 60 returned a fresh
today-timestamped quote/trade) via `scripts/gappers-alpaca.sh watchlist`,
`GAP_THRESHOLD=5.0`. This run fired mid-session (11:16 ET), well outside the
premarket window the script's prev-close logic assumes. Raw output: 2 rows
crossed 5.0% — TRMD -7.46% (30.48→28.21) and BWLP -7.28% (23.14→21.46).
Both are rejected as data artifacts, not real gappers:

- Volume gate: both fail `premarket_volume >= 50000` outright (TRMD vol
  2,724; BWLP vol 3,560 — thinly traded names).
- Root cause confirmed via direct snapshot pull: at this hour `dailyBar.c`
  is today's in-progress running price (same as `latestTrade.p`, not
  yesterday's close), while the script's "current" is the mid of a very
  wide bid/ask spread (TRMD bid $25.97 / ask $30.44; BWLP bid $19.75 / ask
  $23.16) on low-print names. The resulting "gap" is spread-midpoint vs
  last-trade noise, not a price move — both symbols' actual dailyBar
  range today is tight (TRMD $30.12-30.48, BWLP $23.03-23.30). Same
  known dailyBar-based artifact flagged for NBIS in the 2026-08-14 11:42
  ET log entry; script docstring itself notes prev-close logic is
  premarket-only.

**0 real hits.** No catalyst research or deep-dive run. No Telegram sent
per routine rule (hits = 0, no scan error). 0 scan errors.

| Rank | Sym | $Price | Gap% | Vol | Catalyst |
| ---- | --- | ------ | ---- | --- | -------- |
| — | — | — | — | — | No symbols cleared the gap+volume filter this scan (2 raw hits rejected as spread/timing artifacts — see above) |

### Setup Scan (16:38 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 4 grade-B hits.**
0 errors. No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| LUNR | B | Momentum confluence | daily swing | RSI 63.01, ADX 24.63, EMA9 $16.42 > EMA21 $15.84, px $20.34 |
| UMAC | B | Momentum confluence | daily swing | RSI 72.14, ADX 23.10, EMA9 $27.18 > EMA21 $24.42, px $26.09 |
| KTOS | B | Momentum confluence | daily swing | RSI 70.33, ADX 28.19, EMA9 $60.22 > EMA21 $55.84, px $63.29 |
| RCAT | B | Momentum confluence | daily swing | RSI 65.60, ADX 21.82, EMA9 $9.85 > EMA21 $9.24, px $9.06 |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

### Setup Scan (18:38 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 4 grade-B hits.**
0 errors. Same 4 tickers as the 16:38 ET scan (post-close, daily bars
unchanged; RCAT's intraday px shifted from $9.06 to $10.42). No
Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| LUNR | B | Momentum confluence | daily swing | RSI 63.01, ADX 24.63, EMA9 $16.42 > EMA21 $15.84, px $20.34 |
| UMAC | B | Momentum confluence | daily swing | RSI 72.14, ADX 23.10, EMA9 $27.18 > EMA21 $24.42, px $26.09 |
| KTOS | B | Momentum confluence | daily swing | RSI 70.33, ADX 28.19, EMA9 $60.22 > EMA21 $55.84, px $63.29 |
| RCAT | B | Momentum confluence | daily swing | RSI 65.60, ADX 21.82, EMA9 $9.85 > EMA21 $9.24, px $10.42 |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-14 — Setup Scan (18:39 ET, cloud)

Full-universe scan (60 tickers checked from `config/rules.json`
watchlist_tiers.immediate, via `scripts/setup-scan-cloud.mjs` against Alpaca
bars/quotes — MCP unavailable in cloud). **0 grade-A hits, 3 grade-B hits.**
0 errors. Same 3 tickers/values as the 16:39 ET scan (post-close, daily bars
unchanged). No Telegram/ClickUp notify sent per routine rule (0 grade-A hits).

### Setup Scan (18:39 ET, cloud)
| TICKER | GRADE | SETUP(S) | TIMEFRAME | TRIGGER |
| ------ | ----- | -------- | --------- | ------- |
| CRWV | B | Momentum confluence | daily swing | RSI 63.75, ADX 20.14, EMA9 $93.25 > EMA21 $87.71, px $104.61 |
| PEPG | B | Momentum confluence | daily swing | RSI 74.16, ADX 36.17, EMA9 $2.63 > EMA21 $2.34, px $2.53 |
| LUNR | B | Momentum confluence | daily swing | RSI 57.66, ADX 25.41, EMA9 $15.77 > EMA21 $15.52, px $19.11 |

Candidates only — no execution here. Feed to `/trade` for the full
safety-check gate if pursued next session.

## 2026-08-18 — Pre-Market Research (cloud routine)

Apify RAG web browser worked for most topics (oil, VIX, futures/tape,
economic calendar) but returned garbled off-topic results (dictionary/
Wikipedia "letter S" pages) on three separate retries of the general
"top catalysts today" query — treated as a tool glitch, not a real
result; catalyst picture pieced together instead from the tape-wrap and
oil-news sources below. `tradingview-data` MCP not loaded this run (not
in this routine's toolset) — confluence checks (RSI/VWAP/200-SMA/insider)
not run; no trade ideas below clear Tier-1 as a result.

### Account
- Equity: $100,000 | Cash: $100,000 | Buying power: $400,000 (4x margin)
- Positions: 0 | Open orders: 0 — confirmed live via `alpaca.sh account`/
  `positions`/`orders`. Same confirmed-live-vs-$10k-baseline mismatch
  flagged 2026-07-27, unresolved 34th straight session, operator review
  pending — not re-litigating here.
- Weekly trade count: 0/3 (week of Aug 17).

### Market Context (Apify RAG web browser, Tue 8/18 ~7am ET)
- **Oil — Brent extending gains on Iran/Hormuz risk**: Brent ~$90.70-90.82
  (TradingEconomics), up a 3rd straight session, +37.9% YoY; WTI
  ~$84.90-84.91 (+0.4-0.5%). Driver: the Jun US-Iran interim memorandum
  (60-day negotiating window) expired Monday and Trump said he isn't
  interested in extending it; Iran and Oman continue negotiating a
  Hormuz shipping-traffic arrangement without US involvement — an
  unresolved, headline-sensitive overhang, same Hormuz thesis flagged
  repeatedly since Aug 11.
- **VIX — rising, 3rd straight up session**: 15.86-15.87 (+4.4-4.5% on
  the day). 5-day path: 14.55 (8/12) -> 14.63 -> 14.25 (8/14 low) -> 15.19
  (8/17) -> 15.86 (8/18) — steady climb off the recent low, though still
  under its own 20-day MA (~16.4), so not yet "elevated" by its own
  trend, just moving fast in that direction.
- **Tape — tech-specific weakness, broader market more resilient**:
  S&P 500 cash ~7,712 (-0.4%), Nasdaq -1.4%, Dow ~flat. Mega-cap tech
  led down (Microsoft -3.0%, Meta -3.5%, Oracle -2.6%) while value/
  cyclical names were green (Caterpillar +2.9%, Goldman Sachs +1.1%,
  Exxon +0.9%) — reads as rotation out of high-multiple AI/tech, not a
  broad risk-off day. Schwab's open-of-day wrap: "Stocks Flat, Yields Up
  Awaiting Retailer Results" — 10Y yield ~4.74% and rising is the
  proximate pressure on rate-sensitive tech. Monday 8/17 close: Dow -270+
  pts on oil/Iran-tension pressure (CNBC).
- **Econ/earnings calendar (week of Aug 17-23)**: Retailer earnings
  (Walmart/Home Depot, consistent with the 8/17 log) and Fed minutes
  land mid-week; Thursday brings PPI + jobless claims, Friday a jobs
  report — none of that is today's print, but it's overnight-hold risk
  for anything opened this week. Nasdaq's own earnings-calendar page
  rendered no data for today (JS-heavy page, scrape limitation) — no
  clean same-day earnings list obtained; nothing on the account's
  watchlist flagged via other sources either.
- Held tickers: none (0 open positions) — no held-ticker news to check.

### Trade Ideas
None cleared to Tier-1 (documented-catalyst + confluence bar not met —
confluence tooling unavailable this run):
1. **Energy (XLE/XOM) — watch only, not actionable.** Catalyst: Brent's
   3-session climb on the expired US-Iran MOU and unresolved Hormuz
   shipping-traffic talks; XOM +0.9% intraday per the tape snapshot
   above. No RSI/VWAP/200-SMA check run (no MCP this session) and no
   entry/stop/target set. Real opposing risk: Iran and Oman are actively
   negotiating a transit arrangement — a resolution there could unwind
   the geopolitical premium fast, same two-sided setup flagged for
   CVX/XLE since Aug 11.
2. **Value/cyclical rotation (CAT, GS, XOM industrials/financials/energy)
   — observation only, no single name/catalyst.** Today's green-vs-red
   split (CAT/GS/XOM up, MSFT/META/ORCL down) reads as a rotation signal
   tied to rising yields ahead of Fed minutes, not a dated, name-specific
   catalyst — doesn't clear the strategy's "specific catalyst" bar for
   any one ticker.
3. **No idiosyncratic single-name setup identified.** No gappers scan is
   part of this routine (separate cron); nothing else surfaced a
   dated, company-specific catalyst today.

### Risk Factors
- **Rising VIX (3rd straight day, +4.4% today) + rising 10Y yield
  (4.74%)** — the combination pressuring high-multiple tech specifically;
  a new long into that trend without confluence confirmation would be
  chasing, not confluence-based entry.
- **Unresolved Iran/Hormuz risk** — two-sided: escalation extends the
  oil rally (bullish energy names), a de-escalation/transit deal
  unwinds it fast (bearish). Not a clean one-way catalyst to size against.
- **Fed minutes + retailer earnings (Walmart/Home Depot) mid-week** —
  event risk for anything opened and held into it.
- **Confluence tooling unavailable this run** (`tradingview-data` MCP not
  loaded) — no RSI/VWAP/200-SMA/insider check possible for any candidate
  above; both trade ideas are catalyst-only sketches, not confluence-
  cleared setups.
- **Apify catalysts query glitch** (3 retries returned unrelated "letter
  S" content) — general catalyst picture pieced together from the
  oil/VIX/tape sources instead; flagging in case the same glitch recurs
  on a future run and masks a real catalyst.

### Decision
**HOLD — no trades.** Rising VIX and rising yields are pressuring
mega-cap tech while value/cyclicals stay green — a rotation, not a broad
selloff, but not a confluence-cleared entry either given no MCP access
this run. The one real catalyst (Brent's 3-session Iran/Hormuz-driven
climb) is two-sided and unresolved — Iran/Oman are actively negotiating
a transit arrangement that could reverse it. No single-name idea clears
the strategy's documented-catalyst-plus-confluence bar. Zero positions,
zero orders — patience over activity. Weekly trade count unchanged: 0/3
(week of Aug 17).
