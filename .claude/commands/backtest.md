---
description: Backtest a strategy across the watchlist using the tradingview-data MCP
---

Programmatic backtest. NEVER touches Alpaca — this is pure historical simulation.

## CRITICAL — symbol format (fixed 2026-07-07)

The MCP wraps **Yahoo Finance**, not TradingView symbology. Use BARE symbols
ONLY — no exchange prefix.

- ✅ `META`, `AAPL`, `SPY`, `BTC-USD`
- ❌ `NASDAQ:META`, `NYSE:SPY` — these 404 every time, silently, with a
  confusing "Both direct and proxy connections failed" error that looks like
  a network problem but is actually a symbol-format problem.

## Args
- SYMBOL_OR_LIST (optional; default = all tickers from `memory/WATCHLIST.md`,
  stripped to bare symbol)
- STRATEGY (optional; default = `rsi`). Exactly 6 are live on the installed
  MCP version (verified 2026-07-07 — do NOT trust README claims of 9; the
  MCP will error with the real list if you pass an invalid one):
  - `rsi` — RSI(14) oversold/overbought mean reversion
  - `bollinger` — Bollinger Band mean reversion
  - `macd` — MACD golden/death cross
  - `ema_cross` — EMA 20/50 golden/death cross
  - `supertrend` — ATR-based Supertrend trend following
  - `donchian` — Donchian Channel breakout (Turtle Trader style)
- PERIOD (optional; default `1y`). One of `1mo`, `3mo`, `6mo`, `1y`, `2y`.
  (Tool param is `period`, NOT `horizon`.)

## Steps

1. Load the ticker list. If no arg, parse `memory/WATCHLIST.md` (skip lines
   flagged with `⚠`), stripping any exchange prefix to bare symbol. If a file
   `memory/BACKTEST-WATCHLIST.md` exists, prefer it.

2. **Compare strategies first** to save time — one call per symbol runs all
   6 strategies and ranks them:
   ```
   mcp__tradingview-data__compare_strategies { symbol, period: "1y" }
   ```
   Run this on the top 3-5 tickers only, in parallel. This tells us which
   strategy has any edge before we scale.

3. **Full backtest** on the chosen strategy across the full watchlist:
   For each symbol, call in parallel (batch of 5-10 at a time):
   ```
   mcp__tradingview-data__backtest_strategy { symbol, strategy: STRATEGY, period: PERIOD }
   ```

4. **Walk-forward robustness** on the top 5 by Sharpe:
   ```
   mcp__tradingview-data__walk_forward_backtest_strategy {
     symbol, strategy: STRATEGY, period: "2y", n_splits: 3
   }
   ```
   Read the `verdict` field directly — the tool computes it for you:
   `ROBUST` / `MODERATE` / `WEAK` / `OVERFITTED — strategy fails out-of-sample,
   do not trade live`. Anything OVERFITTED or WEAK is DROPPED. Also check
   `oos_total_trades` — a verdict of ROBUST with 0 out-of-sample trades is
   not really robust, it just never fired; treat as WEAK.

5. **Rank surviving names** by (oos_sharpe_ratio × total_return_pct × win_rate_pct).

6. **Append to memory/BACKTEST-LOG.md**:
   ```
   ## YYYY-MM-DD — <STRATEGY> — <PERIOD>
   | Sym | In-sample Sharpe | OOS Sharpe | Ret% | Win% | vs B&H | Verdict |
   ```

7. **Print a concise summary**:
   - Top 3 survivors with entry rule and stop rule.
   - How many candidates dropped due to overfitting.
   - Compare to buy-and-hold benchmark (`buy_and_hold_return_pct` field,
     already returned by every backtest call — no separate SPY call needed
     unless you want SPY itself as the benchmark row).

8. **Refuse** to convert any backtest result into a live trade suggestion
   without ALSO running today's `/pre-market` research first. Backtests are
   historical; today's catalyst still governs entry per TRADING-STRATEGY.md.
