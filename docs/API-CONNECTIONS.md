# API Connections — What You Need

Every external service the trading-bot pipeline talks to, what to sign up for,
and how the pipeline degrades if you skip one.

## Required — must-have to run anything

### 1. Alpaca (broker + data)
- **What**: US-stock brokerage with a proper API and a free PAPER endpoint.
- **URL**: <https://app.alpaca.markets/paper/dashboard/overview>
- **You need**: `ALPACA_API_KEY`, `ALPACA_SECRET_KEY` (from Paper tab).
- **Cost**: Free.
- **Wired into**: `scripts/alpaca.sh`, `scripts/tax.sh`, `scripts/gappers-alpaca.sh`,
  every routine that reads account state or places orders.
- **Safety**: `ALPACA_ENDPOINT` defaults to `paper-api.alpaca.markets`. Going
  live requires flipping the endpoint AND generating separate live keys. Never
  paste live keys until you've watched the pipeline paper-trade for weeks.

## Strongly recommended

### 2. Perplexity (research)
- **What**: LLM-backed web research for catalysts, earnings, sector momentum.
- **URL**: <https://www.perplexity.ai/settings/api>
- **You need**: `PERPLEXITY_API_KEY`.
- **Cost**: ~$5/mo minimum (usage-based).
- **Wired into**: `scripts/perplexity.sh`, every routine that runs research.
- **Fallback**: The pre-market routine falls back to native `WebSearch` if this
  is unset — quality drops but pipeline still runs.

### 3. Telegram (notifications)
- **What**: Bot that DMs or posts to a group.
- **How**: Message [@BotFather](https://t.me/BotFather) → `/newbot` → save token.
  Then message [@userinfobot](https://t.me/userinfobot) → get your chat_id
  (or add the bot to a group and use the group's negative chat_id).
- **You need**: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.
- **Cost**: Free.
- **Wired into**: `scripts/telegram.sh`, `/notify` command, and the gappers /
  market-open / daily-summary routines.
- **Fallback**: If unset, `scripts/telegram.sh` appends to `DAILY-SUMMARY.md`.
  The routines then fall back to ClickUp.

### 4. TradingView MCPs (charts + screener + backtest)
Two MCP servers, both already registered in your `~/.claude.json`:

- `tradingview` — tradesdontlie/tradingview-mcp. Drives your Desktop app via
  Chrome DevTools Protocol. ~78 tools. Requires the TradingView Desktop app
  relaunched with `--remote-debugging-port=9222`. This is for chart control
  and Pine script backtesting.

- `tradingview-data` — atilaahmettaner/tradingview-mcp. Server-side data,
  no Desktop app needed. ~27 tools including `top_gainers`, `top_losers`,
  `backtest_strategy`, `walk_forward_backtest_strategy`, `compare_strategies`,
  `bollinger_scan`, `volume_breakout_scanner`. This is what `/backtest` and
  half of `/gappers` invoke.

Third MCP? — the user mentioned three. Not currently registered in
`~/.claude.json`. If you have a config for a third one, paste the JSON snippet
into the mcpServers block and restart Claude Code. Common candidates:
`tradingview-pine`, `tradingview-alerts`, or a private/paid MCP.

## Optional

### 5. ClickUp (secondary notifications)
- **What**: The original notification channel in the Nate Herk blueprint.
- **URL**: <https://app.clickup.com>
- **You need**: `CLICKUP_API_KEY`, `CLICKUP_WORKSPACE_ID`, `CLICKUP_CHANNEL_ID`.
- **Cost**: Free tier works.
- **Wired into**: `scripts/clickup.sh`, used as the fallback when Telegram fails.
- **Skip if**: You're happy with Telegram alone.

## Not APIs, but required to run this locally

- **`claude` CLI on PATH.** The Windows Task Scheduler path (loop-runner.ps1)
  shells out to `claude -p @routines/<name>.md`. Install via
  `npm i -g @anthropic-ai/claude-code` if you don't have it.
- **git** (for the memory-is-git pattern). Every routine commits to `main`.
- **Bash** (Git Bash, WSL, or PowerShell's `bash` — the scripts use POSIX sh).
- **Python 3** on PATH (used inside the bash wrappers for JSON parsing).

## Quick smoke test after setting keys

```
cp env.template .env       # fill in real values
bash scripts/alpaca.sh account         # should print your paper account JSON
bash scripts/perplexity.sh "hello"     # should print an LLM response
bash scripts/telegram.sh "test"        # should ping your Telegram
bash scripts/gappers-alpaca.sh watchlist   # should print any gappers > 3%
bash scripts/tax.sh summary            # should print YTD tax summary
```

Once these all work individually, run `.\scripts\scheduler.ps1 install` to
put them on a schedule, or type `/loops` inside Claude Code for the help menu.
