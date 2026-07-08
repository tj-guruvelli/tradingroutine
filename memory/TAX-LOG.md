# Tax Log

Running realized P&L tracking. **This is not a tax return.** Alpaca issues the
official 1099 at year-end; use that for filing. This log exists so the bot can
enforce tax-aware trade decisions (e.g., avoid crossing a wash-sale window).

## How this is calculated
- FIFO cost basis pulled from `/v2/account/activities?activity_types=FILL`.
- Short-term = held ≤ 365 days. Long-term = > 365 days.
- Wash sales = HEURISTIC (buy of same symbol within ±30 days of a loss sale).
  Real §1091 wash-sale determination requires broker adjustments and
  substantially-identical securities analysis — consult a CPA.
- Paper accounts have no tax consequence.

## Entries

_Snapshots appended by `/tax` command. Latest at top._

### YYYY — pending
No snapshots recorded yet. Run `/tax` to populate.
