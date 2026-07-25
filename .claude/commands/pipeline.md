---
description: Full watch-think-build loop — the entire "How it thinks" pipeline in one pass (chart read -> news -> setups -> risk -> signal -> alert -> gated execution)
---

Implements the 8-step decision pipeline end-to-end in one invocation, exactly
matching the "How It Thinks" flow: Market Opens -> Reads Charts -> Reads News
-> Looks For Setups -> Risk Analysis -> Generates Signal -> Alert Sent ->
Execute Trade. Every step below orchestrates a component already built in
this repo — this command is the conductor, not new logic.

Run it once ad-hoc, or loop it: `/loop 30m /pipeline` during market hours, or
register it on `scripts/scheduler.ps1` for a fixed cadence. See
docs/LOOP-HELP.md.

Ultra-concise output. Stocks only, never options. Paper by default
(ALPACA_ENDPOINT). Resolve date: DATE=$(date +%Y-%m-%d). Resolve NY time:
NYHM=$(TZ=America/New_York date '+%H:%M').

## STEP 1 — Market Opens (gate)

Verify env: ALPACA_API_KEY, ALPACA_SECRET_KEY. If missing, alert via
`bash scripts/telegram.sh` and STOP — do not proceed with partial state.

Check `bash scripts/alpaca.sh account` for a live connection. If NY time is
outside 09:30-16:00 on a weekday, note "market closed" but continue anyway —
pre-market/after-hours setups are still worth surfacing, just flag them as
such in the final signal.

## STEP 2 — Reads Charts

For each ticker in memory/WATCHLIST.md Tier 1 + any currently-held position
(from `bash scripts/alpaca.sh positions`), call in parallel:

    mcp__tradingview-data__combined_analysis { symbol, exchange: "NASDAQ", timeframe: "1D" }
    (retry with exchange "NYSE" if not found — see memory/WATCHLIST.md /
    config/rules.json for each ticker's listing exchange; several Tier-1
    names are NYSE-listed, e.g. V, MA, T, ORCL, NOC, BA, LMT, RTX)

This is the single richest data source in the pipeline — one call returns
technical (RSI, MACD, SMA/EMA, Bollinger, ADX, support/resistance,
stock_score, grade, trend_state), sentiment (Reddit), and news in one shot.
Extract the `technical` block as the primary chart read. Note `stock_score`
and `grade` in the candidate list — anything graded "Avoid" needs a strong
documented catalyst to override, per STEP 4.

## STEP 3 — Reads News

For each ticker from STEP 2, in parallel:

    mcp__tradingview-data__financial_news { symbol, category: "stocks", limit: 5 }

KNOWN ISSUE (as of 2026-07-07): this RSS-backed tool has returned 0 items for
every symbol tested (upstream feed issue, not a param bug — the param is
`symbol`, not `ticker`). If `count == 0` for a ticker, fall back:

    bash scripts/perplexity.sh "What recent news or catalyst is driving <TICKER> today? One sentence + up to 2 headlines."

If Perplexity is unset (exit 3), fall back to native WebSearch. Never leave a
candidate with zero news context if it's a live candidate for STEP 4.

Also pull broad market context once (not per-ticker):
`bash scripts/perplexity.sh "S&P futures, VIX, sector momentum, today's major catalysts"`.

## STEP 4 — Looks For Setups

Merge three signal sources into one candidate list:
1. **Scanner A hits** — if `data/premarket_gappers_${DATE}.json` exists and is
   fresh (today), include its gappers.
2. **Scanner B hits** — if a `data/tjl_watchlist_${DATE}_*.json` file exists
   from today, include PASS results.
3. **Technical grade** — from STEP 2, any ticker with `stock_score >= 6` or
   `bias: Bullish` with RSI in the 40-60 pullback zone (per the tool's own
   `advice` field) is a candidate even without a scanner hit.

De-duplicate by symbol. Cap the candidate list at 8 — do not chase every
mediocre signal.

## STEP 5 — Risk Analysis

For each candidate, run the buy-side gate from TRADING-STRATEGY.md manually
(this is the same logic `scripts/safety-check.sh` enforces at order time —
running it here means candidates that would fail are filtered out BEFORE
you see them, saving a wasted signal):

- Total open positions + 1 <= 6 (config/rules.json `max_positions_open`)
- This week's trade count + 1 <= 3 (`max_new_trades_per_week`)
- Position cost (assume a full-size 20% allocation) <= available cash
- A specific catalyst is documented from STEP 3 (not just "technicals look
  good" — TRADING-STRATEGY.md requires a real catalyst)
- Sector is not currently at 2 consecutive losses (check memory/TRADE-LOG.md)

Drop any candidate that fails. Note the specific failed check for candidates
you drop, in case the operator wants to see why.

## STEP 6 — Generates Signal

For each surviving candidate, compute:
- Entry: current price
- Stop: 7-10% below entry (use the `support_1` level from STEP 2's technical
  block if it falls in that range, otherwise a flat 8%)
- Target: minimum 2:1 risk/reward from entry
- R:R ratio

Rank candidates by (stock_score x R:R). Keep the top 3.

## STEP 7 — Alert Sent

    bash scripts/telegram.sh "$MSG"

Format:
```
🎯 *Pipeline Signal* — ${DATE} ${NYHM} ET
1. TICKER — $entry -> stop $X / target $Y (R:R Z:1)
   Catalyst: <one line from STEP 3>
   Grade: <stock_score>/10 (<trend_state>)
...
No trade executed. Run /trade to act on any of these.
```
If zero candidates survive STEP 5: send "No qualifying setups this pass —
$N candidates found, all filtered by risk rules or missing a catalyst."
Gate notifications the same way as /gappers: only send on (a) first pipeline
run of the day, (b) a new top-3 candidate vs the last run, or (c) an error.

## STEP 8 — Execute Trade (human-gated, never automatic)

This command NEVER places an order. Print the ranked signal list and stop.
If the operator wants to act on one, they run `/trade SYM QTY buy` — which
independently runs the full safety-check gate against live account state at
order time (not the STEP 5 approximation above, which uses assumed sizing).

## Loop-engineering notes

- **Stop condition**: this command is a single pass, not a loop itself —
  looping is the caller's job (`/loop 30m /pipeline`, or Task Scheduler).
- **Brake**: cap STEP 2-3 parallel calls at 8 tickers (already enforced by
  the Tier-1 watchlist size) to bound token spend per pass.
- **Idempotent**: safe to re-run anytime; STEP 7's gating prevents alert spam
  on unchanged results.
