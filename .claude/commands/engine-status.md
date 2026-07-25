---
description: Live health check across the 5-part engine (Market Data, News/Sentiment, Price Action, Risk, Execution) — real PASS/FAIL, never fabricated. See ENGINE.md for the full mapping.
---

Real status check, not a claim. Each box below either passes a live call or
is reported as FAIL/DEGRADED with the actual reason — never marked PASS
without a real check succeeding.

## Checks

1. **Market Data** — `bash scripts/alpaca.sh account`. PASS if it returns a
   real account payload (equity, buying_power). Confirms Alpaca connectivity
   and that ALPACA_ENDPOINT is paper (per CLAUDE.md safety rule).
2. **News & Sentiment** — `bash scripts/perplexity.sh "one word test query"`.
   PASS on exit 0 with real content. Exit 3 = key unset, report DEGRADED
   (WebSearch fallback still covers it, per CLAUDE.md) — not a hard FAIL.
3. **Price Action** — `mcp__tradingview__tv_health_check` for CDP/live
   desktop (PASS if `cdp_connected: true`), AND one
   `mcp__tradingview-data__combined_analysis` call on a liquid ticker (e.g.
   SPY) for the server-side path. Report each independently — CDP can be
   down while the server-side path is fine, and vice versa.
4. **Risk Management** — run `node scripts/risk.mjs` (or its documented
   invocation) against the real paper account. PASS on a clean VaR/CVaR
   output, FAIL with the actual error otherwise.
5. **Execution Layer** — confirm `scripts/safety-check.sh` exists and
   `scripts/alpaca.sh account` shows a paper endpoint. Do NOT place a test
   order — this check is read-only, always.
6. **Committee (Trading Agents equivalent)** — confirm
   `.claude/commands/committee.md` exists and its analyst list (technical/
   fundamental/news/positioning) matches what's documented in ENGINE.md.
   Not a live run (that's `/committee TICKER` itself) — just confirms the
   command is present and undrifted from spec.

## Output

Print one line per box: `BOX: PASS | DEGRADED | FAIL — reason`. End with a
one-line summary (`N/6 clean`). If anything is FAIL (not DEGRADED), do not
soften it in the summary line.

Never mark a box PASS based on a prior session's memory or this file's own
claims — every run re-verifies live.
