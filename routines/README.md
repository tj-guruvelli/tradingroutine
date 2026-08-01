# Cloud Routines

These five prompts are the **production path**. Each is pasted verbatim into a
Claude Code cloud routine (see Part 7 of the setup guide). Do not paraphrase —
the env-var check block and the commit-and-push step are load-bearing.

| Routine | Cron (America/Chicago) | Writes | Notifies |
|---|---|---|---|
| `pre-market.md` | `0 6 * * 1-5` | RESEARCH-LOG.md | silent unless urgent |
| `gappers-cloud.md` | `0 7,8,9,10 * * 1-5` | `data/premarket_gappers_*.json`, RESEARCH-LOG.md | only if hits > 0 |
| `market-open.md` | `30 8 * * 1-5` | TRADE-LOG.md | only if a trade fired |
| `midday.md` | `0 12 * * 1-5` | TRADE-LOG.md, RESEARCH-LOG.md | only if action taken |
| `daily-summary.md` | `0 15 * * 1-5` | TRADE-LOG.md | always (1 message) |
| `setup-scan-cloud.md` | `30 15,17 * * 1-5` | `data/setup-scan_cloud_*.json`, `RESEARCH-LOG.md` | only if grade-A hit |
| `weekly-review.md` | `0 16 * * 5` | WEEKLY-REVIEW.md, TRADING-STRATEGY.md | always (1 message) |
| `reflect.md` | `30 16 * * 1-5` (proposed, NOT yet scheduled on claude.ai) | hypotheses.jsonl, TRADING-STRATEGY.md (max ONE variable/cycle), strategy-versions/ | only if a change applied |
| `tjr-cloud.md` | `0 * 13-21 * * 1-5` (hourly, ~NY 08:00-16:00) | `data/tjr_state_*.json` | only on new entry/exit |

Spacing rule: routines stay >= 30 minutes apart so two never run simultaneously
and race a commit. setup-scan moved off `0 15` (collided with daily-summary) to
`30 15,17`; the old 19:00 pass was dropped (crosses UTC midnight in the cloud
cron, low value).

**LIVE as cloud routines 2026-07-25** — all seven trading routines above exist
on claude.ai (environment `trading-bot`, repo `tj-guruvelli/tradingroutine`,
model `claude-sonnet-5`, Apify RAG browser replaces Perplexity for research).
Cloud crons are stored in UTC (CDT = UTC-5): `0 11`, `0 12,13,14,15`, `30 13`,
`0 17`, `0 20`, `30 20,22`, `0 21 Fri`. DST caveat: when CST (UTC-6) returns in
November, every fire time drifts 1 hour later in local terms — re-shift the UTC
crons then. `tjl-cloud.md` is deliberately NOT scheduled: it is a day-trading
strategy, and the account goal is beating the S&P via swing holds, not day
trading. `tjr-cloud.md` (added 2026-07-26) is alert-only (never places an
order) and its hourly cloud cadence is best-effort backup coverage for the
15-min QQQ/SPY legs — BTC (1Hour) is the one it tracks properly. Not yet
LIVE as a cloud routine as of this writing; needs the same per-routine setup
below plus `ALPACA_DATA_ENDPOINT` for crypto-bars. Manage routines at
https://claude.ai/code/routines.

## Per-routine setup (do for each)
1. Routines → New Routine; name it (e.g. "Trading bot pre-market").
2. Select this repo + branch `main` (requires the Claude GitHub App installed on the repo).
3. Add env vars **on the routine** (never a committed `.env`): `ALPACA_API_KEY`,
   `ALPACA_SECRET_KEY`, `ALPACA_ENDPOINT` (paper URL to start),
   `ALPACA_DATA_ENDPOINT`, `PERPLEXITY_API_KEY`, `PERPLEXITY_MODEL`,
   `CLICKUP_API_KEY`, `CLICKUP_WORKSPACE_ID`, `CLICKUP_CHANNEL_ID`.
4. Toggle ON **"Allow unrestricted branch pushes"** (else `git push` silently fails).
5. Set the cron + timezone from the table above.
6. Paste the routine prompt verbatim.
7. Save → **Run now** to test. Verify the expected memory file was committed to `main`.
