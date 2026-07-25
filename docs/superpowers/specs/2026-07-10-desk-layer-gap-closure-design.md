# Desk-layer gap closure — design

**Date:** 2026-07-10
**Context:** The 2026-07-10 "hedge-fund desk layer" commit (`104435a`) plus
pre-existing commands already cover 7 of the 8 Fable Five screenshot systems
(see gap table in chat / `market-journal/RESEARCH-fable-five-ai-hedge-fund-reel.md`
for the earlier Instagram-reel pass — this is a second, different Fable Five
capture: the product's own feature cards, not the carousel ad). Three real
gaps remain, confirmed by reading actual command source (not changelog
self-grades):

1. `/backtest` — fixed 6 presets, no plain-English→params compiler, no
   parameter tuning, no auto paper-trade.
2. `/sentiment` + `/filings` — no earnings-call ingestion, no change-detection
   (every run is stateless, always alerts).
3. `/pipeline` — STEP 8 explicitly stops before execute; no closed loop, no
   post-trade review wired into the loop itself.

User-approved scope: close all three. Execution stays paper-only. Autonomy
(desk-loop auto-execute) stays off by default, opt-in via an explicit flag
**and** a config toggle — not either alone.

## 1. `/strategy-lab` — real backtester

**New files:**
- `scripts/strategy-lab.mjs` (Node 18+, zero deps — same pattern as
  `scripts/risk.mjs`): fetches daily bars directly from Alpaca's data API
  (same endpoint shape as `risk.mjs`'s `fetchDailyLogReturns`), computes
  SMA/EMA/RSI/MACD/Bollinger/ATR indicators from raw closes/highs/lows
  (no npm indicator library), simulates entries/exits bar-by-bar for one of
  6 strategy "families" (same names as the MCP presets: `rsi`, `bollinger`,
  `macd`, `ema_cross`, `supertrend`, `donchian`) with tunable numeric knobs
  (indicator length/thresholds, stop_pct, target_pct, trailing_pct),
  commission 0.1% / slippage 0.05% to match `backtest_strategy` defaults for
  comparability. `--tune` mode grid-searches 1-2 numeric knobs per family
  over a small reasonable range, using a 70/30 train/test split (matches
  `walk_forward_backtest_strategy`'s `train_ratio` default), and picks best
  out-of-sample Sharpe. A result with `oos_total_trades == 0` is WEAK, not
  ROBUST, even with a nominally good Sharpe — same rule `backtest.md` already
  applies.
- `.claude/commands/strategy-lab.md`: takes a plain-English strategy
  description, has the LLM itself translate it into a structured spec
  (nearest family + params) — this is the "codes it" step; no separate NLP
  parser needed since the command runs inside Claude Code. Prints the
  translated spec back before running (auditable, correctable — matches
  `/research`'s "print every assumption" convention). Cross-checks the tuned
  result against `mcp__tradingview-data__compare_strategies` /
  `walk_forward_backtest_strategy` on the nearest preset as an independent
  sanity baseline. Appends to `memory/BACKTEST-LOG.md` (append-only). Paper
  trade is opt-in only: `--paper-trade` flag OR an explicit y/n prompt after
  showing the tuned strategy's current signal — never silent, still gated by
  `scripts/safety-check.sh` at order time exactly like `/trade`.

## 2. `/analyst` — change-aware sentiment/filings/earnings/macro

**New files:**
- `scripts/analyst-state.mjs` (Node, zero deps, `node:crypto` sha1 for
  fingerprints only — no external hashing lib): reads/writes/diffs a
  per-symbol state file at `data/analyst_state/<SYM>.json` — sentiment
  bucket, catalyst fingerprint, filings fingerprint, fear/greed bucket.
  `diff` subcommand exits 0 (material change) or 1 (no change) so the
  command can branch on it without parsing JSON in bash.
- `.claude/commands/analyst.md`: gathers sentiment (`market_sentiment` +
  Perplexity fallback, same as `/sentiment`), filings (`scripts/edgar.sh`,
  same as `/filings`), technical zone (`combined_analysis`), and NEW:
  earnings-call color via `scripts/perplexity.sh` (EDGAR's XBRL facts have
  no transcript text, so Perplexity/WebSearch is the correct approved
  source here, same reasoning `/research` STEP 3b already uses for comps).
  Computes a lightweight fear/greed composite from approved sources only
  (VIX + SPY RSI/trend as a breadth proxy) — explicitly labeled an
  approximation, not the proprietary CNN index. Diffs the new signature
  against stored state; alerts (with per-item source) only on material
  change, `--force`, or first-ever run for that symbol — otherwise prints
  "no material change" and stops. Read-only, never trades.

## 3. `/desk-loop` — closed autonomous loop

**Additive config:** `config/rules.json` gets a new `autonomy` block:
`{"auto_execute": false, "max_auto_trades_per_day": 1}`. Default false —
existing behavior of every other command is unaffected.

**New file:** `.claude/commands/desk-loop.md`. Runs the identical STEP 1-7
candidate-generation logic already specified in `pipeline.md` (referenced,
not copy-pasted, per the repo's own "conductor, not new logic" rule) then:

- **STEP 8 (execute):** fires ONLY if the `--auto-execute` CLI flag is
  present **and** `config/rules.json.autonomy.auto_execute == true` — both
  required, so neither a stray flag nor a forgotten config flip alone can
  cause a live paper order. Top candidate only, still passes through
  `scripts/safety-check.sh` at order time (same gate `/trade` uses — can
  still BLOCK). Places the order + trailing stop via `scripts/alpaca.sh`,
  logs to `memory/TRADE-LOG.md`. Capped by both existing
  `max_new_trades_per_week` and the new `max_auto_trades_per_day`. Without
  the flag (the default invocation), STEP 8 behaves exactly like
  `/pipeline`'s — alert and stop.
- **STEP 9 (review, new):** if STEP 8 fired, or a prior desk-loop auto-trade
  closed since the last run, grades the trade against its entry thesis and
  appends one lesson to a new append-only `memory/POST-TRADE-REVIEW.md`.
- Documented as loopable via the existing `/loop` skill
  (`/loop 60s /desk-loop --auto-execute` for the screenshot's 60s cadence) —
  no new daemon, reuses the pattern `/pipeline` already established.

## Explicitly out of scope
- No live trading anywhere in this change — `ALPACA_ENDPOINT` untouched.
- No new external paid APIs (earnings-call transcripts come from
  Perplexity/WebSearch summarization, not a transcript vendor).
- `/pipeline`, `/backtest`, `/sentiment`, `/filings` are left untouched —
  `/strategy-lab`, `/analyst`, `/desk-loop` are additive, not replacements.
