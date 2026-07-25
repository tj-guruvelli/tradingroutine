---
description: Describe a strategy in English, tune its params against real bars via scripts/strategy-lab.mjs, cross-check with the MCP, optionally paper-trade (gated)
---

/strategy-lab <plain-English strategy description> [--paper-trade]

Turns a free-text strategy description into a tuned, backtested spec and
(only on explicit confirmation) a single paper order. The tradingview-data
MCP's backtest tools accept NO tunable indicator parameters (no RSI length,
no thresholds, no stop/target %) — only 6 fixed presets. `scripts/strategy-lab.mjs`
closes that gap: it fetches real Alpaca daily bars and simulates the chosen
family with grid-searched, walk-forward-validated params. Stocks only, never
options. Resolve date: DATE=$(date +%Y-%m-%d).

## STEP 1 — Translate

Read the user's English description and translate it into a structured spec:
- **Family** — nearest match among the only 6 supported: `rsi`, `bollinger`,
  `macd`, `ema_cross`, `supertrend`, `donchian`. If the description doesn't
  map cleanly, pick the closest one and say so explicitly out loud — never
  silently guess something wild ("that's not one of the 6 supported families;
  closest match is X because Y").
- **Symbol(s)** — bare symbol only (`META`, never `NASDAQ:META`).
- **Period** — one of `1mo`, `3mo`, `6mo`, `1y`, `2y`. Default `1y` if unstated.
- **Stop / target / trailing %** — use what the user stated; if unstated,
  leave unset and let `scripts/strategy-lab.mjs` fall back to its own
  `config/rules.json`-derived defaults (`manual_cut_loser_at_pct` for stop,
  `trailing_stop_pct_default` for trail, stop × `min_rr_ratio` for target —
  the script prints `defaults_source` so you know which applied).

PRINT the translated spec before running anything, e.g.:
"Reading your strategy as: EMA(20/50) cross, symbol SPY, 1y lookback, stop/target/trail
defaulted from config/rules.json — running now."

## STEP 2 — Baseline

Independent sanity baseline against all 6 presets (bare symbol only, per the
symbol-format gotcha in `.claude/commands/backtest.md`):
```
mcp__tradingview-data__compare_strategies { symbol, period }
```
Note where the chosen family ranks among the 6 — context for STEP 5, not a gate.

## STEP 3 — Tune

```
node scripts/strategy-lab.mjs SYMBOL FAMILY PERIOD --tune [--stop=N] [--target=N] [--trail=N]
```
Pass `--stop`/`--target`/`--trail` only if the user specified them in STEP 1.
Report the winning params and ALL FOUR required metrics from `out_of_sample`
(Sharpe, max drawdown, win rate, num trades) plus `total_return_pct` — this
closes the exact gap `/backtest` has (it never reports drawdown). Also show
`in_sample` for comparison. Never fabricate a metric; if the script errors
(see its stderr — cert-interception hint included), stop and report the
error, do not invent numbers.

## STEP 4 — Cross-check

Independent robustness check on the closest preset family (approximation
only — the MCP cannot accept the tuned custom params):
```
mcp__tradingview-data__walk_forward_backtest_strategy { symbol, strategy: FAMILY, period: "2y" }
```
State plainly: "This cross-checks the FAMILY preset shape, not your exact
tuned parameters — the MCP has no way to accept custom params."

## STEP 5 — Verdict

Use `scripts/strategy-lab.mjs`'s own `verdict`/`verdict_reason` fields from
STEP 3 as the primary call — same discipline as `.claude/commands/backtest.md`:
**0 out-of-sample trades is WEAK regardless of how good the Sharpe looks.**
Cross-reference STEP 4's MCP `verdict` field as a secondary sanity check (it
may disagree since it's testing a different, untuned parameter set — note
the disagreement if any, don't silently pick whichever is more flattering).
Compare `out_of_sample.total_return_pct` and `buy_and_hold_pct` — many
"winning" mechanical strategies still lose to just holding the stock
(`memory/BACKTEST-LOG.md` history bears this out repeatedly).

## STEP 6 — Persist

Read `memory/BACKTEST-LOG.md` FIRST to match its existing table format
exactly. Append (NEVER overwrite existing content) under a new dated heading:
```
## YYYY-MM-DD — strategy-lab — <FAMILY> — <SYMBOL> — <PERIOD>
| Sym | In-sample Sharpe | OOS Sharpe | OOS Ret% | OOS MaxDD% | Win% | Trades | vs B&H | Verdict |
```
One row per symbol tested this run. Follow with 1-2 lines: winning params,
verdict reason, and the STEP 4 MCP cross-check verdict for comparison.

## STEP 7 — Paper-trade (gated, opt-in only)

Check `scripts/strategy-lab.mjs`'s single-run mode (no `--tune`, winning
params from STEP 3) against the LATEST bar to see if the tuned strategy
currently signals an entry (last trade in `trades[]` with no matching exit,
or re-run with the current date included and check the final bar's signal).
If NOT currently signaling entry: report that plainly and STOP — no order,
no prompt.

If it IS currently signaling entry, this is NEVER automatic:
- Proceed ONLY if `--paper-trade` was passed on the command, OR the user
  explicitly answers "y" to: "Tuned strategy currently signals BUY on SYMBOL.
  Paper-trade it now? (y/n)"
- If proceeding: `bash scripts/safety-check.sh SYMBOL SHARES buy "<thesis>"`
  first — same gate `/trade` uses. Thesis = the STEP 1 spec + STEP 5 verdict
  in one line. If safety-check exits non-zero (BLOCK), STOP and print the
  failed rule(s) — do not place the order.
- If safety-check PASSes: `bash scripts/alpaca.sh order '{"symbol":"SYM","qty":"N","side":"buy","type":"market","time_in_force":"day"}'`,
  wait for fill, then immediately place the trailing stop GTC at the STEP 1
  trail % (same flow as `/trade` and `market-open.md`):
  `bash scripts/alpaca.sh order '{"symbol":"SYM","qty":"N","side":"sell","type":"trailing_stop","trail_percent":"N","time_in_force":"gtc"}'`
- On fill, log to `memory/TRADE-LOG.md` matching its existing format exactly
  (entry, stop, target, R:R, thesis) — same as `/trade` STEP 7.

## Rules

- Stocks only, never options — ever.
- Bare symbols only for every MCP call and for the script.
- Never fabricate a metric, a signal, or a fill. If `scripts/strategy-lab.mjs`
  errors, surface the real stderr message — don't paper over it with a guess.
- This command reads and writes memory files every run (STEP 6). It places
  an order ONLY with explicit confirmation per STEP 7 — never silent, never
  automatic by default, and never more than the one position implied by the
  user's request.
- All 6 families and their param names come straight from
  `scripts/strategy-lab.mjs` — do not invent a 7th family or a param name the
  script doesn't accept (`node scripts/strategy-lab.mjs` with no args prints
  usage if unsure).
