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
