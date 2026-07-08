# Stop conditions & brakes

Adapted from the Loop Engineering canon. Every automated routine in this repo
must exit for one of the four honest reasons; the runner enforces the six
brakes on top of them.

## The four honest stops (routine decides)

| Stop reason | When it fires | What to do |
|-------------|---------------|------------|
| **goal_met** | The routine's deterministic check confirmed done (e.g. `bash scripts/tax.sh summary` returned zero, TRADE-LOG updated, git pushed). | Log and exit 0. |
| **budget_spent** | The runner's `--max-turns` or `--max-budget-usd` tripped. | Log the routine's partial progress, mark items as `TODO: continue next run`, exit 0. |
| **stalled** | Same failure repeated twice without new evidence, OR safety-check blocked the same trade 3× for the same ticker/day. | Escalate to Telegram; exit 2. |
| **needs_human** | Any of: wash-sale flag, sector 2× consecutive losses, daily P&L < -3%, ambiguous catalyst, safety-check block on rulebook change. | Escalate to Telegram; refuse to trade until user reviews. |

Every routine ends by writing its stop reason to `memory/RESEARCH-LOG.md` (or
`WEEKLY-REVIEW.md` on Fridays). A routine that never escalates is suspicious.

## The six brakes (runner enforces)

Wired in [scripts/loop-runner.ps1](../scripts/loop-runner.ps1):

| # | Brake | Where enforced |
|---|-------|----------------|
| 1 | **Turn cap** — max steps per run | `claude --max-turns 50` (configurable via `-MaxTurns`) |
| 2 | **Dollar ceiling** — max $ per run | `claude --max-budget-usd 2.00` (configurable via `-MaxBudgetUsd`) |
| 3 | **Scope** — least-privilege tools | `--allowedTools` whitelist per routine (see loop-runner.ps1) |
| 4 | **Write-branches** — where can it commit | Routines only write to `main`; the runner does not create branches. Blast radius = your local repo + Alpaca paper account. Enforce via git branch protection when you add a remote. |
| 5 | **Circuit breaker** — same call 3× → halt | The runner parses `stream-json` events; if three consecutive `tool_use_delta` events have byte-identical (name, input), it kills the process. |
| 6 | **Watchdog** — no output for N seconds → halt | Default 180s (`-WatchdogSeconds`); silence = alarm, not silence. |

## Autonomy levels (graduate one step at a time)

Start every new routine at Level 1. Do not skip levels.

- **Level 1 — report only.** The routine reads state and writes markdown. No
  Alpaca orders, no git commits, no notifications. Run for a week; verify the
  output matches your judgment.
- **Level 2 — propose only.** The routine can print candidate trades and update
  memory files, but every order goes through `/trade` (which is human-gated).
- **Level 3 — capped auto-fix.** The routine can place trades via Alpaca **paper**
  with the safety-check contract in `config/rules.json`. `MAX_TRADES_PER_DAY` and
  `MAX_POSITION_USD` in `.env` are hard caps on top of the strategy rules.

Going live (real money) is a Level-4 promotion that the user must approve
per-account. Never flip `ALPACA_ENDPOINT` in the runner. Do it manually in
`.env`, and only after a month of paper Level-3 pass.

## The two red lines

- **Never weaken or delete a rule to make a check pass.** The maker (routine)
  never grades itself; the safety check + eval log are the checker.
- **Never widen scope to make the loop go green.** Any routine that expands
  `--allowedTools` at runtime is off-contract. Change it here, in review.
