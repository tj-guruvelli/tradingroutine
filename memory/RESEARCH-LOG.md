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
