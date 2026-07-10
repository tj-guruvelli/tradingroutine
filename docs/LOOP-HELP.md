# Loop Help — Trading Bot pipeline

Every routine can be woken up three ways. Pick the one that fits your context.

## 1. Interactive Claude Code (fastest — you're already in a session)

Type the slash command:

| Slash | Purpose |
|-------|---------|
| `/portfolio` | Read-only account + positions snapshot (no state change) |
| `/pre-market` | Full research + write RESEARCH-LOG |
| `/gappers` | Scanner A — Alpaca most-actives + Benzinga catalyst, saves `data/premarket_gappers_YYYY-MM-DD.json` |
| `/tjl` | Scanner B — Trend Join Long filter over Scanner A hits (drives the chart MCP) |
| `/market-open` | Execute today's trades per RESEARCH-LOG (paper by default) |
| `/midday` | Midday risk check + stop tightening |
| `/daily-summary` | EOD update to TRADE-LOG, push to git |
| `/weekly-review` | Friday PM review + WEEKLY-REVIEW entry |
| `/tax [YEAR]` | Realized short/long-term P&L + wash-sale flags |
| `/backtest [SYM] [STRATEGY]` | tradingview-data MCP backtest against watchlist |
| `/trade SYM QTY buy\|sell` | Manual trade with rule validation (calls `safety-check.sh` + `logtrade.sh`) |
| `/sentiment TICKER` | Reddit sentiment + news for one ticker (falls back to Perplexity when upstream is empty) |
| `/journal-review` | Mid-week TRADE-LOG pattern check — win rate, rule violations, sector-loss streaks |
| `/pipeline` | **The full "How it thinks" loop in one pass**: reads charts (combined_analysis) → reads news → finds setups (merges Scanner A+B) → risk analysis → ranked signal → Telegram alert. Never auto-executes — ends with "run /trade to act." |
| `/committee SYM [--fast]` | Investment committee: 4 parallel analysts (technical/fundamental/news/positioning) → bull vs bear debate → trader synthesis → risk-manager gate → BUY/ACCUMULATE/HOLD/AVOID verdict |
| `/research SYM` | Single-ticker deep dive — DCF-lite + comps + technicals → fair-value range + bull/bear thesis + conviction score |
| `/macro-brief` | Overnight tape (10Y/VIX/ES/EUR/gold/brent/BTC) + macro news + per-holding exposure → RISK-ON/NEUTRAL/RISK-OFF call |
| `/risk` | Portfolio VaR/CVaR + beta-scaled stress (2008/2020/rate-shock) + concentration flags, via `node scripts/risk.mjs` |
| `/alpha-scan [--exchange] [--top N]` | Nightly NASDAQ+NYSE volume/breakout sweep, edge-scored ranked shortlist |
| `/rebalance [--target-vol PCT]` | Drift + vol-scaling proposal vs config/rules.json — proposes only, never executes |
| `/filings SYM [N]` | SEC EDGAR recent filings, flags fresh 8-Ks and Form-4 insider clusters |
| `/notify "<msg>"` | Send Telegram (fallback ClickUp) |
| `/loops` | This help menu, printed inside Claude Code |

## 2. Autonomous `/loop` skill (Claude Code, wakes itself)

```
# Every 30 min during market hours, re-run Scanner A
/loop 30m /gappers

# Scanner B every 30 min, offset by 5 min (Humbled Trader cadence)
/loop 30m /tjl

# Poll gappers self-paced until a symbol exceeds gap 8%
/loop /gappers watch for gap > 8

# Nightly EOD sweep with tax + weekly review
/loop 1d /daily-summary

# The full watch-think-build cycle, every 30 min during market hours —
# this is the one to run if you want the entire "How it thinks" pipeline
# looping, not just one scanner
/loop 30m /pipeline
```

Notes:
- Omit the interval to let Claude self-pace.
- Only one loop at a time per session.
- `/loop` respects the same `--allowedTools` scope as `loop-runner.ps1`.

## 3. Windows Task Scheduler (cron replacement)

```powershell
.\scripts\scheduler.ps1 install     # register the whole grid
.\scripts\scheduler.ps1 status      # show next-run times
.\scripts\scheduler.ps1 run gappers # trigger any routine on demand
.\scripts\scheduler.ps1 remove      # unregister everything
```

### The grid (default install)

Base swing-trading cron (Nate Herk):
| Routine | When | Task name |
|---------|------|-----------|
| `pre-market` | 08:00 daily | TradingBot-PreMarket |
| `market-open` | 09:35 daily | TradingBot-MarketOpen |
| `midday` | 12:00 daily | TradingBot-Midday |
| `daily-summary` | 16:15 daily | TradingBot-DailySummary |
| `weekly-review` | 17:00 Friday | TradingBot-WeeklyReview |

Humbled Trader repetition scanners:
| Routine | Start | Repeat | Duration | Task name |
|---------|-------|--------|----------|-----------|
| `gappers` (Scanner A) | 08:30 | every 30 min | 5.5 h (→14:00) | TradingBot-ScannerA-Gappers |
| `tjl` (Scanner B) | 10:05 | every 30 min | 4.92 h (→15:00) | TradingBot-ScannerB-TJL |

All times are LOCAL system time. If your machine is Central time and you want
NY-market timing, subtract one hour from the NY schedule (or move to Eastern).

## 4. Cloud routines (production — always-on)

Full setup guide: [CLOUD-ROUTINES.md](CLOUD-ROUTINES.md). Install the Claude
GitHub App on this repo, create an Environment with your env vars, then paste
each `routines/*.md` file into a new cloud routine on a cron schedule. Runs
even when your machine is off — this covers everything except Pine Script
work (`tjl` local variant) which is permanently tied to TradingView Desktop.
`tjl-cloud.md` gives you a lower-fidelity but genuinely cloud-native version
of Scanner B (Alpaca IEX bars instead of the CDP MCP).

## 5. AlphaInsider forward-testing (paper trading via webhook)

- Build a PineScript strategy in TradingView (use the `tradingview` MCP).
- TradingView alert → webhook URL → AlphaInsider → **Alpaca PAPER**.
- Fills mirror into `data/trades.csv` when you also run the sync routine.
- Legit + free for the paper tier. Broker for stocks: Alpaca only. Webull is
  ruled out (no API paper mode, AlphaInsider can't route to it).

Set `ALPHAINSIDER_WEBHOOK_URL` in `.env` after you generate the webhook.

## Which to use?

- **Just testing**: interactive slash commands.
- **Local always-on**: Task Scheduler (option 3).
- **Truly always-on**: cloud routines (option 4).
- **Forward-testing a Pine strategy**: option 5 (AlphaInsider).
- **Ad-hoc watching**: `/loop` skill (option 2).

## The six brakes (loop-runner enforces)

Every scheduled run passes through `scripts/loop-runner.ps1` which enforces:

1. **Turn cap** — `--max-turns 50` (env: `LOOP_MAX_TURNS`)
2. **Dollar ceiling** — `--max-budget-usd 2.00` (env: `LOOP_MAX_BUDGET_USD`)
3. **Scope** — per-routine `--allowedTools` whitelist
4. **Write-branches** — routines commit to `main` only; blast radius = local repo + Alpaca paper
5. **Circuit breaker** — 3× identical tool call → kill the process
6. **Watchdog** — 180s of silence → kill the process (env: `LOOP_WATCHDOG_SECONDS`)

Full detail in [STOP-CONDITIONS.md](STOP-CONDITIONS.md).

## Debug tips

- Every run appends to `logs/<routine>-YYYY-MM-DD.log`. Tail those.
- Each run also drops a `logs/<routine>-YYYY-MM-DD_HHMMSS.stream.jsonl` — the
  full `stream-json` event stream. Grep it for `type: "message_stop"` to see
  why the run ended (goal_met / budget_spent / stalled / needs_human).
- If a routine reports "KEY not set", the env vars didn't propagate. Task
  Scheduler runs your user account with a stripped env; put vars in `.env`
  instead of relying on the interactive shell env.
- `.\scripts\scheduler.ps1 run <name>` runs a routine immediately.
- `.\scripts\loop-runner.ps1 -Routine <name> -DryRun` verifies the wiring without
  spending tokens.
