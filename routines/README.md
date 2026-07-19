# Cloud Routines

These five prompts are the **production path**. Each is pasted verbatim into a
Claude Code cloud routine (see Part 7 of the setup guide). Do not paraphrase —
the env-var check block and the commit-and-push step are load-bearing.

| Routine | Cron (America/Chicago) | Writes | Notifies |
|---|---|---|---|
| `pre-market.md` | `0 6 * * 1-5` | RESEARCH-LOG.md | silent unless urgent |
| `market-open.md` | `30 8 * * 1-5` | TRADE-LOG.md | only if a trade fired |
| `midday.md` | `0 12 * * 1-5` | TRADE-LOG.md, RESEARCH-LOG.md | only if action taken |
| `daily-summary.md` | `0 15 * * 1-5` | TRADE-LOG.md | always (1 message) |
| `weekly-review.md` | `0 16 * * 5` | WEEKLY-REVIEW.md, TRADING-STRATEGY.md | always (1 message) |
| `setup-scan-cloud.md` | `0 15,17,19 * * 1-5` | `data/setup-scan_cloud_*.json`, `RESEARCH-LOG.md` | only if grade-A hit |

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
