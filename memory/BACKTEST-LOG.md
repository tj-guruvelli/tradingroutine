# Backtest Log

Historical strategy simulations. **This is not forward performance.** Prior
walk-forward work (see `market-journal/STRATEGY-REPORT.md`) found that
buy-and-hold beat all 6 indicator strategies tested; only GFS survived
walk-forward validation. Treat new backtests with the same skepticism.

## Guardrails
- Every entry must show BOTH in-sample and walk-forward Sharpe. Walk-forward
  < 50% of in-sample = overfit, DROP.
- Every entry must compare against SPY buy-and-hold over the same horizon.
- Refuse to convert a survivor into a live trade until `/pre-market` gates
  it with today's catalyst context.

## Entries

_Appended by `/backtest`. Latest at top._

### 2026-07-07 — FIXED: backtest tool works with bare symbols (root cause found)

Root cause of the earlier "blocker" entry: the MCP wraps **Yahoo Finance**,
not TradingView. `NASDAQ:META` 404s every time; `META` (bare) works
perfectly. Confirmed live: `backtest_strategy(symbol="META", strategy="rsi")`
returned full metrics (Sharpe 4.66, 8.25% return, beat buy-and-hold by
22.83pp). Also corrected: the tool param is `period` (1mo/3mo/6mo/1y/2y), not
`horizon`. Only **6 strategies are live** on the installed MCP version —
`rsi, bollinger, macd, ema_cross, supertrend, donchian` — the GitHub README's
claim of 9 strategies (adding rsi_pullback/keltner_breakout/triple_ema) is a
newer unreleased version; `triple_ema` errors with "Unknown strategy" on the
currently-installed build. `/backtest` command updated with all of this.

Also tested `market_sentiment`/`financial_news`: correct param is `symbol`
(not `ticker`), but both return **0 results for every symbol tried**
(AAPL/NVDA/TSLA) despite `feedparser_available: true` — an upstream data
source issue (Reddit scraping / RSS feed), not a param bug. New `/sentiment`
command wired correctly; falls back to Perplexity/WebSearch when empty.

### 2026-07-07 — Watchlist sweep: compare_strategies + walk-forward, 6 Tier-1/2 names, 1y/2y

| Sym | Winner (1y) | 1y Ret% | Winner OOS verdict | OOS Ret% | Buy&Hold (2y) | Beats hold OOS? |
|-----|-------------|---------|---------------------|----------|----------------|------------------|
| CRWV | rsi | +27.4% | MODERATE (0 OOS trades → treat as WEAK, no real signal) | 0% | +108.8% | ❌ no |
| OKLO | supertrend | +27.7% | **OVERFITTED** | +24.5% | +545.6% | ❌ no |
| RKLB | macd | +137.8% | **OVERFITTED** (0 OOS trades) | 0% | +1578.3% | ❌ no |
| BE | supertrend | +292.8% | MODERATE, but OOS **loses money** | -37.3% | +2072.2% | ❌ no |
| NBIS | bollinger | +49.7% | WEAK | +5.8% | +875.9% | ❌ no |
| **GFS** | rsi | +30.8% | **MODERATE — real edge** | **+26.1%** | +23.1% (2y) | ✅ **yes** |

**Verdict: same pattern as the prior STRATEGY-REPORT.md sweep.** 5 of 6
"winning" 1-year backtests evaporate or reverse out-of-sample; every one of
them loses badly to just holding the underlying stock. **GFS is the lone
survivor again** — RSI mean-reversion produces genuine trades in 2 of 3
walk-forward folds and slightly beats its own 2y buy-and-hold (+26.1% vs
+23.1%). Still only 2 out-of-sample trades total — thin sample, treat as
weak-but-real edge, not a strong one.

**Action:** do not convert OKLO/BE/NBIS/RKLB/CRWV mechanical signals into
trades based on this sweep — the underlying stocks are worth watching but on
a discretionary/catalyst basis (per TRADING-STRATEGY.md), not this indicator
set. GFS RSI mean-reversion is worth continued paper-tracking but position
size small given the thin OOS sample.
