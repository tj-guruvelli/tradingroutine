---
description: Mid-week trade journal review — surfaces win/loss patterns from TRADE-LOG.md between Friday reviews
---

Fills the "Trade Journal — review, improve" gap identified in the Fable Five
reel gap-analysis (see `market-journal/RESEARCH-fable-five-ai-hedge-fund-reel.md`).
`memory/TRADE-LOG.md` already logs every trade; `weekly-review.md` already
does a Friday deep-dive. This command is the gap between those two — an
on-demand pattern check you can run any day without waiting for Friday.
Read-only. No trades, no orders.

## Steps

1. Read `memory/TRADE-LOG.md` in full (or since the last weekly review
   section if the file is long) and `memory/TRADING-STRATEGY.md`.

2. Compute, from closed trades only:
   - Win rate, average winner %, average loser %, profit factor
   - Longest winning streak / losing streak
   - Which sector(s) are producing the losses (per TRADING-STRATEGY.md's
     "exit a sector after 2 consecutive failed trades" rule — flag any
     sector currently at 2 consecutive losses NOW, don't wait for Friday)
   - Any position that was closed at exactly -7% (rule working as intended)
     vs. any that overran -7% before being cut (rule violation — flag loudly)
   - Any stop that was moved DOWN (hard rule violation per TRADING-STRATEGY.md
     — "never move a stop down") — flag as CRITICAL if found

3. Compare current open positions against the entry checklist in
   TRADING-STRATEGY.md: does each have a documented catalyst, a real GTC
   trailing-stop order (not mental), and a stop that's never been moved down?
   Cross-check against `bash scripts/alpaca.sh orders` for live GTC stops.

4. Print a compact report:
   ```
   Journal Review — <today's date>
   Trades since last review: N (W: n, L: n)
   Win rate: X% | Avg win: +X% | Avg loss: -X% | Profit factor: X
   Rule violations: [none | list with trade IDs]
   Sector watch: [sector] at N/2 consecutive losses
   Open positions missing a stop: [none | list]
   ```

5. Do NOT modify TRADE-LOG.md or TRADING-STRATEGY.md — this is read-only
   analysis. If a strategy change seems warranted, say so explicitly and
   defer the actual edit to Friday's `/weekly-review`, which is the only
   command authorized to update TRADING-STRATEGY.md.
