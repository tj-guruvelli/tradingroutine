---
description: Opt-in closed loop — /pipeline STEPS 1-7 (unchanged) + a heavily-gated auto-execute STEP 8 + an automatic post-fill review STEP 9. No flags = safe no-op upgrade from /pipeline.
---

Extends `/pipeline` with two things `/pipeline` deliberately does not do: gated
auto-execution of the top signal, and automatic post-trade review after an
auto-filled position closes. `/pipeline` itself is untouched — this command
calls the same STEP 1-7 logic (it does not fork or duplicate it) and adds two
new steps on top.

Usage: `/desk-loop [--auto-execute] [--once]`. `--auto-execute` opts THIS
invocation into the gated execute path in STEP 8 below — it is one of five
required conditions, not a bypass of any of them. `--once` is an explicit
single-pass marker for parity with `scripts/scheduler.ps1` invocations; it is
a no-op beyond documentation since, like `/pipeline`, this command is always a
single pass — looping is the caller's job (`/loop 60s /desk-loop`, or Task
Scheduler).

Ultra-concise output. Stocks only, never options. Paper by default
(`ALPACA_ENDPOINT`). Resolve date: DATE=$(date +%Y-%m-%d). Resolve NY time:
NYHM=$(TZ=America/New_York date '+%H:%M').

## STEPS 1-7 — Identical to /pipeline

Identical to `/pipeline` STEPS 1-7 (Market Opens gate, Reads Charts, Reads
News, Looks For Setups, Risk Analysis, Generates Signal) — see
`.claude/commands/pipeline.md` for the full step-by-step spec, not duplicated
here. That includes pipeline's own STEP 7 (Alert Sent via
`bash scripts/telegram.sh`) — run it exactly as pipeline does.

**One addition to STEP 6's output**: alongside the ranked candidate list,
record the top candidate's `stock_score` and whether it carries a
**high-confidence catalyst** — a catalyst with a named, dated, specific source
(e.g. "Q2 earnings beat, reported 2026-07-09, EPS $1.42 vs $1.20 est." or
"Analyst upgrade, Morgan Stanley, 2026-07-08, PT raised to $95"), not a vague
"technicals look good" or "momentum building" description. STEP 8 below needs
a stricter bar than the alert-only pipeline, and this is the field it checks.

## STEP 8 — Execute (heavily gated — the only new order-placing logic)

Fires ONLY if ALL of the following hold:

(a) `--auto-execute` was passed on THIS invocation.
(b) `config/rules.json`'s `autonomy.auto_execute == true`.
(c) The top candidate from STEP 6 has `stock_score >= 7` AND a
    high-confidence catalyst (per the definition above).
(d) Today's auto-trade count is below `autonomy.max_auto_trades_per_day`.
    Count entries in `memory/TRADE-LOG.md` tagged `[auto-desk-loop]` whose
    date matches `$DATE`.
(e) `bash scripts/safety-check.sh SYMBOL SHARES buy "THESIS"` passes (exit 0).
    This is the exact same gate `/trade` uses against live account state —
    it can still BLOCK even if (a)-(d) all pass. Never bypass it, never
    catch/suppress a nonzero exit.

If ALL five hold:

1. `bash scripts/alpaca.sh order '{"symbol":"SYM","qty":"N","side":"buy","type":"market","time_in_force":"day"}'`
   — exactly like `/trade` STEP 5. Wait for fill.
2. Immediately place the trailing stop GTC per `memory/TRADING-STRATEGY.md`:
   `bash scripts/alpaca.sh order '{"symbol":"SYM","qty":"N","side":"sell","type":"trailing_stop","trail_percent":"10","time_in_force":"gtc"}'`
3. Log to `memory/TRADE-LOG.md`, matching existing entry style, with an
   explicit `[auto-desk-loop]` tag in the thesis field (this is what STEP 9
   and the STEP 8(d) daily-count check both search for):
   ```
   ### SYM — BUY <DATE> <NYHM> ET [auto-desk-loop]
   **Entry:** $X | **Shares:** N | **Stop:** $Y (10% trailing GTC, order <ID>) | **Target:** $Z | **R:R:** N:1
   **Stock score:** N/10 | **Catalyst:** <named, dated source from STEP 6>
   **Thesis:** [auto-desk-loop] AUTO-EXECUTED — no human confirmation. <thesis text>
   **Order ID:** <buy order id>
   ```
4. `bash scripts/telegram.sh "$MSG"` (falls back to ClickUp if Telegram
   fails), message MUST clearly state this was unattended:
   ```
   🤖 *AUTO-EXECUTED — no human confirmation* — SYM ${DATE} ${NYHM} ET
   Entry $X -> stop $Y (10% trail) / target $Z (R:R N:1)
   Catalyst: <one line>
   Stock score: N/10 | Auto-trades today: M/<max_auto_trades_per_day>
   ```

If ANY of (a)-(e) fails: behave EXACTLY like `/pipeline` STEP 8 — print the
ranked signal list and say "No trade executed. Run /trade to act." — then
stop. This must be word-for-word equivalent to today's `/pipeline` STEP 8
when `--auto-execute` is absent or the config is false, so running
`/desk-loop` with no flags is a safe no-op upgrade from `/pipeline`. If (e)
specifically is the failure, name which safety-check rule blocked.

## STEP 9 — Post-trade review (new)

- If STEP 8 fired a trade THIS run: nothing to review yet — the position just
  opened. Note "opened, will review after close or next run." and stop.
- If any `[auto-desk-loop]`-tagged position from a PRIOR run has since
  closed — check `bash scripts/alpaca.sh positions` (symbol no longer
  present) and cross-reference `memory/TRADE-LOG.md` for that entry — write a
  review covering:
  - Entry thesis, entry price, entry date (from the TRADE-LOG entry)
  - Exit price, exit date, exit reason if determinable (stop hit, manual
    close, etc. — check `bash scripts/alpaca.sh orders closed` / activities)
  - Whether the original catalyst played out
  - Whether stop discipline was followed (never moved down, never inside 3%)
  - ONE concrete, specific lesson for next time
  Append (never overwrite) to `memory/POST-TRADE-REVIEW.md` as:
  `### SYM — auto-trade review (<date>)`.
- If `memory/POST-TRADE-REVIEW.md` does not exist yet, create it now with
  just a header (mirrors `memory/WEEKLY-REVIEW.md`'s header style):
  ```
  # Post-Trade Review Log

  Append-only. One entry per closed auto-desk-loop trade.
  ```
- Do NOT touch entries for manually-placed (`/trade`) fills — this file is
  scoped to `[auto-desk-loop]` trades only, since those are the ones executed
  without a human in the loop and therefore the ones that most need a
  after-the-fact check.

## Loop-engineering notes

- **Stop condition**: single pass, same as `/pipeline` — looping is the
  caller's job. Meant to be invoked via `/loop 60s /desk-loop --auto-execute`
  (see the `/loop` skill) or registered on `scripts/scheduler.ps1` for a
  fixed cadence — see `docs/LOOP-HELP.md`. Do not build a new daemon; reuse
  the existing loop mechanisms already documented there.
- **Brake**: auto-execution is capped by BOTH `max_new_trades_per_week`
  (existing, 3, enforced in STEP 5's risk analysis) AND the new
  `max_auto_trades_per_day` (1, enforced in STEP 8(d)). Even looped
  continuously all day, auto-execution cannot spiral — at most 1 auto trade
  per day, at most 3 new trades (auto + manual combined) per week.
- **Idempotent alerts**: STEP 7's existing gating (first pipeline run of the
  day / new top-3 candidate / error) still applies — this command does not
  add alert spam.

## Rules

- Stocks only, never options — same as `/pipeline` and `/trade`.
- Bare symbols only (`META`, not `NASDAQ:META`) for any `tradingview-data` MCP
  call, per repo convention.
- `bash scripts/safety-check.sh` always runs before any order in STEP 8 —
  same gate `/trade` uses, can still BLOCK, never bypassed.
- **NEW**: auto-execute requires BOTH the `--auto-execute` flag on this
  invocation AND `autonomy.auto_execute=true` in `config/rules.json` —
  flipping only one has no effect. Default is off (`auto_execute: false`).
- Going live (`ALPACA_ENDPOINT` pointed at `api.alpaca.markets`) requires
  separate, explicit user sign-off per `Coding/CLAUDE.md`'s "no standing
  authorization" rule — this command never changes that endpoint, and
  auto-execution is exactly as gated on live as it is on paper (the gate is
  config + flag + score + count + safety-check, not endpoint-dependent).
