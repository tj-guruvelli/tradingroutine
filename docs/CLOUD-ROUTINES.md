# Cloud Routines — Definitive Setup Guide

Claude Code cloud routines run on Anthropic's cloud, on a schedule, without
your machine on. This doc maps every part of the pipeline to whether it can
run in the cloud, at what cadence, and what the manual web-UI steps are.

## Cloud vs. local — hard rules (from the official routines doc)

| Constraint | Value | Consequence |
|-----------|-------|-------------|
| Minimum cadence | 1 hour | Every-30-min scanners cannot be cloud routines |
| Daily run cap | Pro 5, Max 15, Team 25 | You can't run everything |
| Local file access | None | No .env, no local databases, no MCP.exe |
| Local MCP servers | Unavailable | tradingview (CDP) MCP is local-only forever |
| Managed connectors | Slack, Linear, Jira, Google Drive, GitHub | External APIs need Full network access |
| Persistence | Only via `git push` to main | If it's not in main, it didn't happen |
| Runtime resources | 4 vCPU / 16 GB RAM / 30 GB disk | Big pandas backtests need to be lean |

## Pipeline compatibility matrix

| Routine | Cloud? | Cadence (cloud) | Cadence (local) | Why |
|---------|--------|-----------------|-----------------|-----|
| `pre-market` | ✅ | Daily 6:00 CT | — | Only bash wrappers, hits Alpaca/Perplexity APIs |
| `market-open` | ✅ | Daily 8:30 CT | — | Only bash wrappers |
| `midday` | ✅ | Daily 12:00 CT | — | Only bash wrappers |
| `daily-summary` | ✅ | Daily 15:15 CT | — | Only bash wrappers |
| `weekly-review` | ✅ | Fri 16:00 CT | — | Only bash wrappers |
| `tax` | ✅ | Quarterly | — | Uses `scripts/tax.sh` → Alpaca activities API |
| `gappers-cloud` (Scanner A) | ✅ | 3-4× hourly premarket | Every 30 min | Cloud variant uses ONLY bash + WebFetch, no MCP |
| `gappers` (local variant) | ❌ | — | Every 30 min | Uses `tradingview-data` MCP for enrichment |
| `tjl-cloud` (Scanner B, cloud) | ✅ | 3× daily (10:00/12:00/14:00 ET) | — | Uses `scripts/alpaca.sh bars` (IEX feed) instead of the CDP MCP — same daily_breakout/intraday_breakout logic, no Desktop app needed. **Caveat:** IEX premarket coverage is sparser than the local variant's TradingView data; treat `pmh` as a lower bound. |
| `tjl` (local variant) | ❌ | — | Every 30 min | Requires `tradingview` CDP MCP + Desktop app; use for the highest-fidelity premarket-high data or when you're actively at the machine |
| `backtest` | ❌ | — | Ad-hoc | Uses `tradingview-data` MCP (local Python server) |
| `portfolio` | ❌ Ad-hoc only | — | Slash command | Read-only smoke test |
| `trade` | ❌ Manual only | — | Slash command | Requires human y/n confirmation |
| `notify` | ❌ Slash only | — | Slash command | Ad-hoc notification |

**One-line rule:** anything that touches the `tradingview` MCP is local-only; anything that touches only Alpaca / Perplexity / Telegram HTTPS can be cloud.

## One-time prerequisites (do these once)

### 1. Install the Claude GitHub App on the trading-bot repo

Go to <https://github.com/apps/claude> (or run `/web-setup` inside Claude Code), select **only** this repo (least privilege), grant access. This lets the cloud container clone AND push to `main`.

### 2. Push the repo to GitHub

Cloud routines require a GitHub repo — a local git repo alone won't work.

```
cd C:\Users\guruv\Documents\DeskSpace\Coding\Trading\trading-bot
gh repo create trading-bot --private --source=. --remote=origin --push
```

Or via the GitHub web UI: create an empty private repo, then:

```
git remote add origin git@github.com:<user>/trading-bot.git
git push -u origin main
```

### 3. Create a cloud Environment in claude.ai

The Environment is where env vars, network access, and setup scripts live.

- Go to <https://claude.ai/code> → **Environments** → **New Environment**.
- Name it: `trading-bot-cloud`.
- **Env vars** (paste in real values):
  - `ALPACA_API_KEY`, `ALPACA_SECRET_KEY` (paper keys ONLY unless you know what you're doing)
  - `ALPACA_ENDPOINT=https://paper-api.alpaca.markets/v2`
  - `ALPACA_DATA_ENDPOINT=https://data.alpaca.markets/v2`
  - `PERPLEXITY_API_KEY`, `PERPLEXITY_MODEL=sonar`
  - `CLICKUP_API_KEY`, `CLICKUP_WORKSPACE_ID`, `CLICKUP_CHANNEL_ID`
  - `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` (optional)
  - `GAP_THRESHOLD=5.0`, `GAP_MIN_PRICE=3.0`
- **Network access**: **Full** (needed for Alpaca, Perplexity, Yahoo, Benzinga, Telegram).
- **Setup script** (empty is fine — scripts are self-contained bash).
- **CRITICAL:** enable "Allow unrestricted branch pushes" on the routine's environment. Without this, `git push origin main` silently fails. This is the #1 first-time-setup break per Nate Herk's guide.

## Creating each routine (web UI)

Repeat this for each routine you want in the cloud. The routine sources are the `routines/*.md` files in this repo.

For each:

1. claude.ai/code → **Routines** → **New Routine**.
2. **Name**: e.g. `Trading Bot — Pre-Market`.
3. **Repository**: select your GitHub repo, branch `main`.
4. **Environment**: select `trading-bot-cloud` (from step 3 above).
5. **Trigger** — **Schedule**, timezone `America/Chicago`:
   - `pre-market`: cron `0 6 * * 1-5`
   - `market-open`: cron `30 8 * * 1-5`
   - `midday`: cron `0 12 * * 1-5`
   - `daily-summary`: cron `15 15 * * 1-5`
   - `weekly-review`: cron `0 16 * * 5`
   - `gappers-cloud` (Scanner A): cron `0 7,8,9,10 * * 1-5` (4 fires/day; Max plan needed if combined with the 5 above → 9 daily = fits under Max 15)
   - `tjl-cloud` (Scanner B): cron `0 9,11,13 * * 1-5` (9am/11am/1pm CT = 10am/12pm/2pm ET, 3 fires/day)
   - `tax`: cron `0 9 1 1,4,7,10 *` (quarterly, 9am CT on Jan/Apr/Jul/Oct 1st)
6. **Prompt** — paste the **entire contents** of the corresponding `routines/<name>.md` file. Copy verbatim. Do NOT paraphrase.
7. **Model**: any current Claude model (Opus 4.8 or Sonnet 5 recommended for reasoning routines).
8. **Save**.
9. Click **Run now** and watch the session live. Fix any issues before the schedule fires unattended.

## Which routines to actually enable

**Recommended cloud starter set (fits under Max plan's 15/day cap):**
- pre-market (1/day) — needed for context
- market-open (1/day) — needed for execution
- midday (1/day) — risk management
- daily-summary (1/day) — accountability
- weekly-review (1/week ≈ 0.2/day) — reflection
- gappers-cloud @ 4 fires (4/day) — discovery
- **Total ≈ 10 fires/day** — comfortable under Max 15.

**Stay local only (no cloud path exists):**
- `tjl` (local, CDP variant) — needs TradingView Desktop physically running; keep this for highest-fidelity premarket data, or run `tjl-cloud` instead if you want your computer able to be off
- 30-min-cadence variants of gappers/tjl — cannot work in cloud (1-hour cadence limit)
- `backtest` — needs local `tradingview-data` MCP
- `portfolio`, `trade`, `notify` — ad-hoc slash commands, not scheduled

## Why the .env file is banned in cloud

- Cloud clones don't have `.env` — the wrappers already fall back to process env vars, which is what you want.
- If Claude "helpfully" creates a `.env` and pushes it, you leak credentials on the next commit, forever, publicly if the repo ever goes public.
- **Every cloud routine prompt in this repo has an explicit "do NOT create .env" block**. Do not remove it.

## What still runs locally (Windows Task Scheduler)

The 30-min cadence scanners stay on your machine via `scripts/scheduler.ps1`:

- `TradingBot-ScannerA-Gappers` — 08:30 local, every 30 min for 5.5h
- `TradingBot-ScannerB-TJL` — 10:05 local, every 30 min for 4.92h (CDP variant — highest fidelity, needs TradingView Desktop + your machine on)

If you're on Max plan and don't want the redundancy, disable these local tasks after enabling `gappers-cloud` and `tjl-cloud` — otherwise you'll have double coverage (fine, just spends more tokens). The cloud variants give you 24/7 coverage at lower cadence and slightly lower premarket-data fidelity (IEX feed vs TradingView); the local variants give you tighter 30-min cadence and better data, but only while your machine is on. Run both if you want belt-and-suspenders.

## The 4-step verification checklist (per Nate Herk's guide)

Before trusting any cloud routine on a schedule:

1. Click **Run now** and watch the session live. Look for missing env vars, network denials, or wrapper errors.
2. Confirm the routine created / pushed to `main`. If it says success but there's no push, the "Allow unrestricted branch pushes" toggle is off.
3. Verify credentials show as `set` in the first step's env dump. If any show `MISSING`, add them to the Environment.
4. Test the failure path: temporarily unset one env var → confirm the routine fails fast with a clean ClickUp/Telegram alert, not a cryptic curl error.

## Migrating from local Windows tasks to cloud

Windows Task Scheduler and cloud routines are separate systems. Nothing auto-migrates. If you enable a cloud routine that duplicates a local task:

```powershell
# Disable the local task without deleting it (recover later if needed)
Disable-ScheduledTask -TaskName "TradingBot-PreMarket"
Disable-ScheduledTask -TaskName "TradingBot-MarketOpen"
Disable-ScheduledTask -TaskName "TradingBot-Midday"
Disable-ScheduledTask -TaskName "TradingBot-DailySummary"
Disable-ScheduledTask -TaskName "TradingBot-WeeklyReview"

# Keep the scanner tasks LOCAL — they can't go cloud
# TradingBot-ScannerA-Gappers, TradingBot-ScannerB-TJL — leave enabled
```

## Estimated cost

Each cloud routine run consumes tokens from your normal subscription. Complex routines (pre-market with 8 Perplexity calls + memory writes) burn ~$0.10-$0.30 per fire on Opus. Ten fires/day × 20 trading days ≈ $20-$60/mo in tokens plus your Max subscription. Cheaper than a dedicated VPS but not free.

---

# Cross-project cloud routines (VideoEditing)

The `Coding/VideoEditing/` tree has separate pipelines that each want their own cloud routine. Prompt sources have been scaffolded, but you still need to:

1. Push each pipeline to its OWN GitHub repo (or point cloud routines at the shared VideoEditing monorepo).
2. Create an Environment per pipeline with the required API keys (Firecrawl, Apify).
3. Set Network access to Full — external scrapers need it.

| Pipeline | Routine source | What it does | Cadence | Env vars |
|---|---|---|---|---|
| `VideoEditing/ig-clips/` | `routines/daily-discovery.md` | Daily viral AI clip discovery via Firecrawl → CSV/JSONL | Daily 08:00 (or 2×/day) | `FIRECRAWL_API_KEY`, optionally `APIFY_API_KEY` |
| `VideoEditing/instagram-research/` | `routines/daily-discovery.md` | Daily @theaibolt IG research via Apify scraper + scoring | Daily 07:30 (or 2×/day) | `APIFY_API_KEY`, optionally `DATAPRISM_API_KEY`, `SCRAPFLY_API_KEY` |
| `VideoEditing/theaibolt/` | ❌ NOT scaffolded | Reel-build pipeline needs local ffmpeg + video assets | Local only | — |
| `VideoEditing/scripted-reels/` | ❌ NOT scaffolded | Metricool scheduler runs against local video files | Local only | — |
| `VideoEditing/daily-audit/` | ❌ NOT scaffolded | Own SQLite state; delivery stub | Could be cloud after refactor | — |

**Cloud-incompatible pipelines** (theaibolt reel build, scripted-reels, video assembly) need local files, ffmpeg, and produce large media output. Keep them on `scripts/scheduler.ps1` or their own `pipeline_loop.ps1`.

## Setup order for VideoEditing cloud routines

1. Create a GitHub repo per pipeline you want cloud-scheduled: `ig-clips`, `instagram-research`.
2. Install the Claude GitHub App on each repo (least-privilege — only these repos).
3. Create an Environment `videoediting-scrapers` with:
   - `FIRECRAWL_API_KEY`, `APIFY_API_KEY`
   - Network access: **Full**
   - Setup script: `pip install -r requirements.txt` (or leave empty; the routine installs its own)
   - "Allow unrestricted branch pushes": **ON**
4. Create one cloud routine per pipeline:
   - **ig-clips daily discovery**: repo `ig-clips`, branch `main`, prompt = full contents of `routines/daily-discovery.md`, cron `0 8 * * *` in America/Chicago.
   - **instagram-research daily discovery**: repo `instagram-research`, prompt = full contents of `routines/daily-discovery.md`, cron `30 7 * * *`.
5. Click Run now on each and watch the session live before trusting the schedule.

## Daily-run cap arithmetic

Combined trading-bot + VideoEditing routine grid:

| Routine | Fires/day |
|---|---|
| pre-market | 1 |
| market-open | 1 |
| midday | 1 |
| daily-summary | 1 |
| weekly-review | 0.2 (Fri only) |
| gappers-cloud | 4 |
| tjl-cloud | 3 |
| tax | ~0 (quarterly) |
| ig-clips daily-discovery | 1-2 |
| instagram-research daily-discovery | 1-2 |
| **Total (typical weekday)** | **14-17** |

- Pro (5/day) — trading bot core only (pre-market/market-open/midday/daily-summary); skip scanners and VideoEditing.
- Max (15/day) — tight fit; drop `tjl-cloud` or reduce `gappers-cloud` to 2-3 fires if you also want VideoEditing.
- Team/Enterprise (25/day) — full grid fits with room to spare.
