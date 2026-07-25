---
description: Change-gated analyst brief — sentiment + filings + earnings-call summary + fear/greed composite, only alerts when something material moved (read-only)
---

`/analyst SYM [--force]` — the "only tell me when something changes" layer on
top of `/sentiment` and `/filings`: gathers the same social/news/filings read
those commands already produce, adds the one real gap they don't cover
(earnings-call summary) and a fear/greed composite, then diffs the result
against the last run via `scripts/analyst-state.mjs`. If nothing material
changed since last time, it prints one line and stops instead of re-alerting.
`--force` bypasses the gate and always prints the full brief. Read-only
analysis: this command NEVER places, modifies, or cancels an order.
Resolve date: DATE=$(date +%Y-%m-%d).

## STEP 1 — Gather (parallel)

Run all four in parallel; never let one slow source block the others.

**Sentiment** (same source + fallback chain as `/sentiment`):
```
mcp__tradingview-data__market_sentiment { symbol: SYM, category: "stocks", limit: 20 }
```
Known-degraded-upstream issue: `posts_analyzed` currently returns 0 for every
symbol. If `posts_analyzed == 0`:
```
bash scripts/perplexity.sh "What is current Reddit/social sentiment and recent news on SYM? One paragraph, end with a one-word verdict: bullish, bearish, or neutral."
```
If Perplexity is unset (exit 3), fall back to native WebSearch. Classify
`sentiment_bucket` = bullish | bearish | neutral from whichever source
answered (numeric sentiment score > +0.2 -> bullish, < -0.2 -> bearish,
else neutral; for the qualitative fallback, use its stated verdict word).

**Filings** (identical flagging logic to `/filings` STEP 1-2 — reuse it, do
not reinvent it):
```
bash scripts/edgar.sh filings SYM 8
```
Flag: 8-K within the last 7 days (highest priority), Form-4 cluster (3+
within 14 days — activity only, direction not inferred), 10-Q/10-K
freshness (stale if older than ~1 quarter). Exit 4 = symbol not in SEC's
ticker map — report that and skip the filings portion of the brief, do not
guess a CIK.

**Technical zone**:
```
mcp__tradingview-data__combined_analysis { symbol: SYM, exchange: "NASDAQ", timeframe: "1D" }
```
(retry with exchange "NYSE" if not found). Keep support/resistance,
trend_state, stock_score/grade for a support/resistance zone read.

**Earnings call** (NEW — this is the actual gap `/sentiment` and `/filings`
don't cover; EDGAR's XBRL company-facts API has numbers only, no transcript
text, so this goes through the approved News/Perplexity channel, same
reasoning `/research` STEP 3b uses for comps):
```
bash scripts/perplexity.sh "When is SYM's next earnings date? Also summarize the key points from its most recent earnings call — guidance change, management tone, biggest surprise. Cite what you can."
```
If Perplexity is unset (exit 3), fall back to native WebSearch. State
plainly in the printed brief that this is a **summarized secondary source,
not a primary transcript** — never imply this is a from-the-filing read.

**Social feed note** — print this line verbatim in STEP 5's output, not
just as an internal note: "X/social" here means **Reddit only** — the only
wired social source in this repo. X/Twitter is NOT available (needs a paid
API tier); Discord is NOT available (needs a dedicated bot + server access).
Never imply X coverage that doesn't exist — see `CLAUDE.md` Data Sources and
`market-journal/RESEARCH-fable-five-ai-hedge-fund-reel.md` for why.

## STEP 2 — Fear/greed composite (NEW)

An approximation, explicitly NOT the proprietary CNN Fear & Greed Index.
Two inputs, weighted 50/50, min-max normalized to -1.0..+1.0:

1. **SPY RSI** (market-breadth proxy) — reuse the technical block from a
   fresh call: `mcp__tradingview-data__combined_analysis { symbol: "SPY", exchange: "NASDAQ", timeframe: "1D" }`.
   `rsi_score = clamp((RSI - 50) / 30, -1, 1)` — RSI 50 is neutral, RSI 80
   -> +1 (greed), RSI 20 -> -1 (fear).
2. **VIX level** — before calling Perplexity, check whether today's tape is
   already logged: read `memory/RESEARCH-LOG.md`, look for a
   `### Macro brief` entry under today's `## ${DATE}` section and reuse its
   VIX print if present (don't waste an API call). Otherwise:
   ```
   bash scripts/perplexity.sh "What is the current VIX level and % change today? One line, cite source."
   ```
   (exit 3 -> native WebSearch, same pattern as `/macro-brief` STEP 1).
   `vix_score = -clamp((VIX - 20) / 20, -1, 1)` — VIX 20 is the long-run
   neutral average, VIX 40 -> -1 (extreme fear), VIX 0 -> +1 (extreme
   complacency/greed). Negated because high VIX means MORE fear.

`composite = clamp(0.5 * rsi_score + 0.5 * vix_score, -1, 1)`.

Bucket the composite: `|composite| >= 0.6` -> extreme_fear/extreme_greed;
`0.2 <= |composite| < 0.6` -> fear/greed; `|composite| < 0.2` -> neutral
(sign of `composite` picks fear vs greed side). This mirrors the
"-0.78 · EXTREME FEAR" shape: negative = fear side, positive = greed side.

## STEP 3 — Build signature

Assemble one JSON object (values are illustrative shape, fill from STEPs 1-2):
```json
{
  "sentiment_bucket": "bullish",
  "catalyst_text": "<most recent/most material headline found in STEP 1 — prefer a flagged 8-K summary, else top sentiment/news headline, else \"no catalyst found\"> | <its date>",
  "filings_text": "<most recent flagged filing's form + date, e.g. \"8-K 2026-07-09\"; if nothing was flagged use \"none flagged | ${DATE}\" so the fingerprint still changes if a filing appears next run>",
  "fear_greed_bucket": "fear",
  "fear_greed_score": -0.31
}
```
`scripts/analyst-state.mjs` sha1-hashes `catalyst_text`/`filings_text`
internally (via `node:crypto`) into `catalyst_fingerprint`/
`filings_fingerprint` — pass raw text here, not pre-hashed values; this
keeps the hashing in one place so diff and update can never disagree on it.
(The script also accepts pre-computed `catalyst_fingerprint`/
`filings_fingerprint` directly, or a standalone `hash "<text>"` subcommand,
if a caller ever needs to build a fingerprint outside this flow.)

## STEP 4 — Diff

```
node scripts/analyst-state.mjs diff SYM '<signature json from STEP 3>'
```
Exit 0 = material change (sentiment bucket changed, OR catalyst changed, OR
filings changed, OR fear/greed bucket moved more than one step, OR no prior
state exists for SYM). Exit 1 = nothing material changed.

If exit 1 AND `--force` was not given: print exactly one line —
```
No material change since <last_run from the diff output> — staying quiet.
```
and STOP. Do not print the rest of the brief, do not log, do not notify.

Otherwise (exit 0, or exit 1 with `--force`) continue to STEP 5.

## STEP 5 — Alert

Print the full brief. Every claim needs a named SOURCE — no bare assertions:

```
=== Analyst: SYM — ${DATE} ===
Sentiment: <bullish/bearish/neutral> — SOURCE: market_sentiment (N posts) | Perplexity fallback | WebSearch fallback
Filings: <flags or "none flagged"> — SOURCE: SEC EDGAR (scripts/edgar.sh)
Technical zone: <support/resistance + trend_state + grade> — SOURCE: tradingview-data combined_analysis
Earnings: next date <date>, last call summary: <2-3 sentences> — SOURCE: Perplexity/WebSearch (summarized secondary source, NOT a primary transcript)
Social feed: Reddit only (the only wired social source). X/Twitter and Discord are NOT available — see CLAUDE.md.
Fear/Greed: <score> · <BUCKET> (approximation, NOT the CNN Fear & Greed Index) — SOURCE: SPY RSI (tradingview-data) + VIX (Perplexity/WebSearch/today's macro-brief)
Material change since last run: <what changed, from STEP 4's diff output>
```

Append to `memory/RESEARCH-LOG.md` under today's date as `### Analyst: SYM`
— read the file's existing date-heading convention first (recent entries
append `###` sections without always adding a fresh `## ${DATE}` heading;
add one only if today doesn't already have one). NEVER overwrite existing
content.

Persist state:
```
node scripts/analyst-state.mjs update SYM '<same signature json from STEP 3>'
```

Optional Telegram (only if the operator asks, or a routine invokes this),
matching `/filings`' compact style:
```
🧭 *Analyst: SYM* — ${DATE}
Sentiment: <bucket> | Filings: <flag or none> | Fear/Greed: <score> <bucket>
Earnings: <next date> — <1-line takeaway>
No trade executed.
```
`bash scripts/telegram.sh "$MSG"` (falls back to ClickUp if Telegram fails).

## Rules
- Read-only. This command never places, modifies, or cancels an order.
- Sentiment or filings alone are never a standalone entry signal — per
  `TRADING-STRATEGY.md`'s documented-catalyst rule, confluence across
  multiple signals is required. To act on anything in this brief, run
  `/trade SYM QTY buy|sell` or `/committee SYM` — the full safety-check
  gate applies there.
- Bare symbols only for every MCP call (`AAPL`, never `NASDAQ:AAPL`).
- "X/social" means Reddit only in this repo's output — never imply X/Twitter
  coverage; it is a real access gap (paid API tier), not wired.
- `--force` is for the operator explicitly asking for a full re-read; don't
  default to it, the whole point of this command is to stay quiet otherwise.
