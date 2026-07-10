---
description: SEC EDGAR filings check — recent forms, 8-K/insider flags, notable-item summary (read-only)
---

`/filings SYM [N]` — pull the last N SEC filings for SYM (default 8), flag
anything notable, log it. Read-only analysis: this command NEVER places an
order. Resolve date: DATE=$(date +%Y-%m-%d).

## STEP 1 — Pull filings

    bash scripts/edgar.sh filings SYM N

Default N=8. Output is one line per filing: `FORM FILING_DATE PRIMARY_DOC URL`.
Exit 4 = symbol not in SEC's ticker map (common for ETFs/foreign listings) —
report that and STOP; do not guess a CIK.

## STEP 2 — Flag notables

Scan the list for:
- **8-K within the last 7 days** — material event, highest priority flag.
- **Form 4 cluster** — 3+ Form 4s within 14 days = insider activity. Note the
  cluster; direction (buy vs sell) is not knowable from the form type alone,
  so do not infer it here.
- **10-Q/10-K freshness** — note the most recent one and its date. A 10-Q
  older than ~1 quarter is itself a flag (late filer risk).

If nothing is flagged, say so in one line and skip STEP 3.

## STEP 3 — Summarize a flagged 8-K

For the most recent flagged 8-K only: WebFetch its constructed document URL
from STEP 1 and summarize the reported item in 2 sentences (Item number +
what happened). If the fetch fails, fall back to
`bash scripts/perplexity.sh "What did SYM report in its 8-K filed on <date>?"`
— if Perplexity is unset (exit 3), fall back to native WebSearch. Never block
on a failed fetch; log the flag without the summary instead.

## STEP 4 — Log + notify

Append flags to `memory/RESEARCH-LOG.md` under today's date as
`### Filings: SYM` — one bullet per flag. Do NOT overwrite existing content.

Optional Telegram (only if at least one flag fired):
```
📄 *Filings: SYM* — ${DATE}
• 8-K <date> — <2-sentence summary>
• Form 4 xN in 14d — insider activity
• Latest 10-Q/10-K: <form> <date>
```
`bash scripts/telegram.sh "$MSG"` (falls back to ClickUp if Telegram fails).

## Rules
- Read-only. Never place an order from this command.
- To act on a filing-driven idea, run `/trade SYM QTY buy|sell`
  (full safety-check applies).
