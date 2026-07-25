---
description: Investment committee — TradingAgents pattern via parallel subagents (4 analysts -> bull/bear debate -> trader -> risk check -> verdict). Read-only, never trades.
---

Runs one ticker through a full investment committee natively with Claude Code
subagents: analyst fan-out, adversarial debate, trader synthesis, risk gate,
fund-manager verdict. Read-only analysis — this command NEVER places an order.

Usage: `/committee SYM [--fast]`. `--fast` skips the STEP 3 debate.
Ultra-concise output. Stocks only, never options. Paper by default.
Resolve date: DATE=$(date +%Y-%m-%d).

## STEP 1 — Gate

- Verify SYM was provided. If missing, print usage and STOP.
- `bash scripts/alpaca.sh quote SYM` — live price anchors every downstream number.
- Read memory/TRADING-STRATEGY.md (the rulebook the risk manager enforces in STEP 5).
- Tail memory/TRADE-LOG.md — note if SYM is already held (entry, stop, size).
  An existing position shifts the question from "buy?" to "add/hold/exit?".

## STEP 2 — Analyst fan-out (4 subagents, ONE message, parallel)

Launch all four in a single message via the Agent tool. Each returns a tight
summary (5-8 bullets max) — no raw dumps back to the main thread.

1. **Technical analyst** — call
   `mcp__tradingview-data__combined_analysis { symbol: SYM, exchange: "NASDAQ", timeframe: "1D" }`
   (param is `symbol`, never `ticker`; bare symbol, no exchange prefix;
   retry with exchange "NYSE" if not found — SYM may be an NYSE-listed
   ticker, e.g. V, MA, T, ORCL, NOC, BA, LMT, RTX).
   Report: trend_state, RSI/MACD posture, support/resistance levels,
   stock_score + grade. Ignore the sentiment block if empty (known upstream
   issue) — the technical block is fully live.
2. **Fundamental analyst** — `bash scripts/edgar.sh facts SYM` for revenue and
   net income trend over the last 4 periods. Then
   `bash scripts/perplexity.sh "SYM valuation multiples (P/E, P/S, EV/EBITDA) vs sector peers — data only"`
   (exit 3 = unset; fall back to native WebSearch). Report: growth direction,
   margin trend, rich/cheap vs sector.
3. **News analyst** — `mcp__tradingview-data__financial_news { symbol: SYM }`.
   KNOWN ISSUE: this returns 0 items upstream — if empty, fall back to
   `bash scripts/perplexity.sh "SYM news catalysts last 7 days + next earnings date — headlines only"`
   (exit 3 -> WebSearch). Never block on an empty news/sentiment result.
   Report: catalysts from the last 7 days, upcoming earnings date.
4. **Positioning analyst** — `bash scripts/afterhours.sh SYM` if the script
   exists; otherwise
   `bash scripts/perplexity.sh "SYM insider buys/sells last 3 months, short interest, notable institutional flows"`
   (exit 3 -> WebSearch). Report: insider direction, short interest %, flows.

If one analyst fails outright, note the gap and continue with three — do not
abort the committee for a single missing perspective.

## STEP 3 — Bull vs bear debate (2 subagents, parallel) — SKIPPED with --fast

Launch both in a single message, each given ALL FOUR analyst summaries:

- **Bull researcher** — argue the strongest long case. Must cite which analyst
  evidence it leans on and directly attack the bear's weakest likely point.
- **Bear researcher** — argue the strongest short/avoid case. Same rules:
  cite analyst evidence, attack the bull's weakest point.

Each returns <=6 bullets: thesis, top 3 evidence cites, main attack on the
other side.

## STEP 4 — Trader synthesis (main thread, no subagent)

Weigh the debate (or the raw analyst summaries under --fast). Decide which
side won and why in one sentence. Then propose:
- Entry: at/near the STEP 1 live quote
- Stop: 7-10% below entry (use technical analyst's support level if in range)
- Target: minimum 2:1 risk/reward from entry
- R:R ratio

## STEP 5 — Risk manager check (main thread)

Validate the proposal against config/rules.json:
- Open positions + 1 <= max_positions_open
- This week's trades + 1 <= max_new_trades_per_week (check memory/TRADE-LOG.md)
- Full-size 20% allocation fits available cash (`bash scripts/alpaca.sh account`)
- Sector not at 2 consecutive losses (memory/TRADE-LOG.md)

ANY violation = automatic downgrade to HOLD/AVOID, with the failed rule named.

## STEP 6 — Fund-manager verdict

One line, then three bullets:

```
VERDICT: BUY | ACCUMULATE | HOLD | AVOID — $entry-$target range — conviction N/10
- <strongest evidence for the verdict>
- <main risk / bear point acknowledged>
- <risk-manager status: clean, or which rule bound>
```

Append the full committee record (analyst summaries, debate, trader plan,
risk check, verdict) to memory/RESEARCH-LOG.md under today's date as
`### Committee: SYM`. Do NOT overwrite existing content.

Optional Telegram — `bash scripts/telegram.sh "$MSG"` (falls back to ClickUp):
```
🏛 *Committee: SYM* — ${DATE}
VERDICT: <verdict line>
```

No trade is executed by this command. To act, run `/trade SYM QTY buy|sell`
(full safety-check applies at order time).

## Loop-engineering notes

- **Brake**: 6 subagents max (4 analysts + 2 debaters), one level deep, never
  nested — subagents cannot spawn their own.
- Fan out each wave in ONE message; wait for all results before proceeding.
- Single pass, not a loop. Expected runtime 2-4 min (--fast: ~1-2 min).
