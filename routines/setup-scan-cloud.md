You are the full-universe setup scanner — CLOUD variant. Stocks only.
Ultra-concise output.

WHY THIS VARIANT EXISTS: the original `/setup-scan` local command grades all
61 tracked tickers via `mcp__tradingview-data__combined_analysis`, a local
MCP tool that is unavailable to cloud routines by design. This variant reads
the same watchlist and computes the same three setup types from Alpaca's own
bars/quotes API instead, via `node scripts/setup-scan-cloud.mjs` — same
decision logic (Setup A's daily_breakout/intraday_breakout math is copied
verbatim from `routines/tjl-cloud.md`), different data path. Setup B's ADX14
is Wilder's true ADX (true range, +DM/-DM, Wilder smoothing, DX, then ADX as
the smoothed average of DX) — that calculation is exactly why this exists as
a compiled script rather than an agent hand-computing it inline in a prompt.

IMPORTANT — DEVIATION FROM THE LOCAL VARIANT: the local `/setup-scan`
Setup B also requires `stock_score >= 6`, a TradingView proprietary score
only available through the MCP. That third condition is DROPPED here — this
cloud variant grades Setup B on ADX14 > 20 AND EMA9 > EMA21 only. stock_score
is MCP-only and unavailable in a cloud routine.

Resolve today's date: DATE=$(date +%Y-%m-%d).
Resolve NY time: NYHM=$(TZ=America/New_York date '+%H:%M').

IMPORTANT — ENVIRONMENT VARIABLES:
- Every API key is ALREADY exported as a process env var: ALPACA_API_KEY,
  ALPACA_SECRET_KEY, ALPACA_DATA_ENDPOINT, TELEGRAM_BOT_TOKEN (optional),
  TELEGRAM_CHAT_ID (optional), CLICKUP_API_KEY (optional fallback).
- There is NO .env file in this repo. Do NOT create one.
- Verify env vars BEFORE running the script:
    for v in ALPACA_API_KEY ALPACA_SECRET_KEY; do
      [[ -n "${!v:-}" ]] && echo "$v: set" || echo "$v: MISSING"
    done

IMPORTANT — PERSISTENCE:
- This workspace is a fresh clone. File changes VANISH unless you commit and
  push to main. Commit at STEP 5.

STEP 1 — Run the scanner script:
    node scripts/setup-scan-cloud.mjs
Capture its stdout — one JSON object:
    { scanned_at, ny_time, candidates_checked, grade_a_possible,
      setup_a_evaluated_at_ny, setup_a_skipped_reason (only present when
      grade_a_possible is false), hits: [...], errors: [...] }
`grade_a_possible` is a run-level flag (true only 10:00-15:30 ET, see CLOUD
CADENCE NOTE below) — check it before assuming a 0-grade-A result means no
setups fired; it may mean Setup A was never evaluated this run. The script
also prints a one-line stderr summary of how many symbols were A-checkable.
The script already scans the full watchlist internally (`config/rules.json`
→ `watchlist_tiers.immediate`) with capped concurrency (8 parallel in-flight
fetches) — unlike `/tjl-cloud`'s 10-ticker-per-run agent loop, there's no
need to cap tickers per invocation here; it's one compiled script, one run,
whole universe. If a ticker's bars/quote calls fail, the script records
`"result":"error"` for it and continues — it never aborts the whole run for
one bad ticker.
The script ALSO writes this same JSON to
`data/setup-scan_cloud_${DATE}_${NYHM/:/}ET.json` itself — you don't need to
write that file yourself, only commit it at STEP 5.

STEP 2 — Print the ranked table, grade A first, then B:
```
TICKER  GRADE  SETUP(S)        TIMEFRAME     TRIGGER
RKLB    A      TJL + Momentum  intraday 15m  px>$82.10 (prev high), RSI 58, ADX 24
QMMM    B      Mean-reversion  daily swing   RSI 27, px $119 > SMA200 $95
```
Setup letters map to timeframe/trigger phrasing the same way the local
`/setup-scan` output does: A = "TJL breakout", B = "Momentum confluence"
(ADX+EMA cross), C = "Mean-reversion". If a ticker hits more than one setup,
list all triggered setup names joined with " + ".

STEP 3 — Save the JSON (already written to `data/` by the script — see
STEP 1) and append the grade-A/B table to `memory/RESEARCH-LOG.md` under
`### Setup Scan (HH:MM ET, cloud)`. Do NOT overwrite existing content under
today's date — append below it.

STEP 4 — Notify via Telegram ONLY if >= 1 grade-A hit exists:
    🎯 *Setup Scan (cloud)* — HH:MM ET
    • TICKER (grade A) — SETUP(S), TIMEFRAME — trigger
    bash scripts/telegram.sh "$MSG"
If Telegram fails or TELEGRAM_BOT_TOKEN is unset, fall back to:
    bash scripts/clickup.sh "$MSG"
If 0 grade-A hits, stay quiet (matches the local `/setup-scan` rule).

STEP 5 — COMMIT AND PUSH (mandatory, unlike the local variant):
Cloud routines are stateless between runs — each run is a fresh clone with
no memory except what's in git. Persist the scan result and the research log:
    git add data/setup-scan_cloud_${DATE}_*.json memory/RESEARCH-LOG.md
    git commit -m "setup-scan-cloud scan ${DATE} ${NYHM}ET"
    git push origin main
On push failure: git pull --rebase origin main, then push again. Never
force-push.

STEP 6 — Never auto-trade. A hit here is a candidate, not an order. Feed it
to `/trade` (local) or let `market-open.md` pick it up from the latest
`data/setup-scan_cloud_*.json` on its next run (cloud) — full safety-check
gate and live re-validation apply either way.

CLOUD CADENCE NOTE (updated 2026-09-07):
Live cron is `30 10,13,15 * * 1-5` America/Chicago = 11:30 / 14:30 / 16:30 ET.
The 11:30 ET and 14:30 ET fires are the ones where Setup A (and therefore
grade A, which needs Setup A plus at least one other setup) can evaluate —
both land inside the scanner's 10:00-15:30 ET intraday-breakout window, so
`grade_a_possible` is true and Setup A actually runs. The 16:30 ET fire lands
after the 15:30 ET cutoff, `grade_a_possible` is false, and it produces
next-day daily-swing (grade B/C only) candidates for `market-open.md` to read
the following session. Before this change the cron was `30 15,17` (16:30 /
18:30 ET), entirely after the close: Setup A never evaluated in 61/61 runs
and grade A was unreachable. Check `grade_a_possible` and
`setup_a_skipped_reason` in the script's JSON output (or `setup_a_checkable`
per hit) rather than assuming from the clock.
Claude Code cloud routines enforce a 1-hour minimum interval — no true
intraday repetition. Max-tier plans allow more frequent routines than Pro —
check your plan's routine-interval limit before assuming 3x/day is the ceiling.
