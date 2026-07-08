# Trading Bot (Opus 4.7 blueprint)

An autonomous, cloud-scheduled stock swing-trading agent built on Claude Code.
Claude *is* the bot — five cron routines fire each weekday, each a fresh cloud
container that clones this repo, reads memory, pulls live account state from
Alpaca, decides + acts, writes memory, commits back to git, and notifies you.

> **Runs in PAPER mode by default.** `ALPACA_ENDPOINT` points at
> `paper-api.alpaca.markets`. Going live is a deliberate one-line change.
> Prove the system on paper for weeks before risking a cent.

## Quickstart (local, paper)

1. `cp env.template .env` and fill in your **Alpaca PAPER** keys. Optional:
   Telegram (primary notify), Perplexity (research), ClickUp (backup notify).
   See [docs/API-CONNECTIONS.md](docs/API-CONNECTIONS.md) for what each does
   and how the pipeline degrades if you skip it.
2. `chmod +x scripts/*.sh`
3. Open this folder in Claude Code and run `/portfolio`. You should see your
   paper account + positions print cleanly. That's the smoke test.
4. Try `/pre-market`, `/gappers`, `/tax` locally to watch the workflows run.
5. For a schedule that runs while your machine is on:
   `.\scripts\scheduler.ps1 install`
6. Full help menu inside Claude Code: `/loops`.

## Going to cloud (production)

Follow Part 7 of the setup guide:
1. Install the Claude GitHub App on this repo (least privilege).
2. For each of the five `routines/*.md`, create a cloud routine: select repo +
   `main`, set the env vars **on the routine** (not a `.env`), enable
   "Allow unrestricted branch pushes", set the cron (America/Chicago), and paste
   the routine prompt verbatim. Hit "Run now" to test.

## Layout

- `CLAUDE.md` — agent rulebook (auto-loaded).
- `scripts/` — the only way the agent touches the outside world (Alpaca, Perplexity, ClickUp).
- `routines/` — cloud cron prompts (the production path).
- `.claude/commands/` — local slash commands for testing/ad-hoc use.
- `memory/` — the agent's entire state, committed to `main`. Git is the memory.

## Safety notes

- Stocks only. No options, ever.
- Secrets live in `.env` (local) or routine env (cloud) — **never committed**.
- Every trade is gated by hard rules in `memory/TRADING-STRATEGY.md` before it fires.
- This is a learning/experiment project, not financial advice. Most active
  strategies underperform a plain index fund. Size accordingly.
