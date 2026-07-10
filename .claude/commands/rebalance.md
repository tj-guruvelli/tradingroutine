---
description: Rebalance proposal — weights, drift vs rules.json, realized vol, target sizing. Read-only; NEVER places orders.
---

Sizing and rebalancing on autopilot — EXCEPT execution, which stays human.
This command PROPOSES a rebalance and stops. It never places an order.

Optional arg: `--target-vol PCT` — annualized portfolio vol target (e.g. 15).
Resolve date: DATE=$(date +%Y-%m-%d). Ultra-concise output. Stocks only.

## STEP 1 — Book state

`bash scripts/alpaca.sh account` + `bash scripts/alpaca.sh positions`.

Compute: weight per position = market_value / equity; cash % = cash / equity;
deployed % = 100 - cash %. If zero positions: report "nothing to rebalance",
still log per STEP 5, and stop.

## STEP 2 — Drift check vs config/rules.json

Flag every violation (report all, not just the first):
- Any position weight > 20% (`max_position_pct_of_equity`)
- Deployed % outside 75-85% band
- Open positions > 6 (`max_positions_open`)
- Sector concentration — ONLY if holding > 4 positions: one quick lookup
  `bash scripts/perplexity.sh "GICS sector for: <SYM1>, <SYM2>, ... — one line each"`
  (exit 3 = unset -> fall back to native WebSearch). Flag any sector holding
  3+ positions. Skip this check entirely at <= 4 positions.

## STEP 3 — Realized vol (approximation)

START=$(date -u -d '30 days ago' +%Y-%m-%dT00:00:00Z)
END=$(date -u -d 'yesterday' +%Y-%m-%dT23:59:00Z)

Per position: `bash scripts/alpaca.sh bars SYM 1Day $START $END` (IEX feed).
From the closes: daily log returns, stdev of the last 20 returns, annualize
x sqrt(252). Report as % (e.g. 0.02 daily -> 31.7% ann).

Portfolio vol = sum(weight_i x vol_i). Label it: "weighted-average
approximation, correlation ignored — for the proper number run /risk".

If bars fail for a symbol, mark its vol `n/a`, exclude it from vol-scaling
in STEP 4, and say so — do not abort the pass.

## STEP 4 — Proposal table

Columns: SYMBOL | current wt | target wt | delta shares | reason.

Targets, in priority order:
1. **Trim overweight**: anything > 20% -> target 18%.
2. **Vol scaling** (only if `--target-vol` given): inverse-vol weights,
   arithmetic shown in the output:
   - raw_i = 1 / vol_i (skip `n/a` vols — keep those at current weight)
   - scalable budget = deployed% - sum(current wt of n/a positions)
     (normalize over the residual only — never re-distribute the full
     deployed% across the scalable names, that double-allocates capital)
   - target_wt_i = scalable_budget x raw_i / sum(raw)
   - then scale all target weights by (target_vol / portfolio_vol), capped
     so no position exceeds 20% and deployed stays inside 75-85%.
3. delta shares = round((target_wt - current_wt) x equity / last_price)
   toward zero. Drop lines where |delta| rounds to 0 shares.

**Trade budget**: tail memory/TRADE-LOG.md, count this week's new trades vs
`max_new_trades_per_week` (3) in config/rules.json. Trims/sells of existing
positions reduce risk — prioritize them first. If the proposal needs more
trades than remain this week, keep the risk-reducing lines and mark the rest
`DEFERRED (trade budget)`, listing exactly which ones.

## STEP 5 — Persist + report (read-only, always)

Append to memory/RESEARCH-LOG.md under today's date (`## ${DATE}`, create
the heading only if absent — NEVER overwrite existing content):

```
### Rebalance proposal
- Deployed X% / cash Y% / N positions / port vol ~Z% (approx)
- Drift flags: <list or "none">
| SYMBOL | current | target | delta sh | reason |
```

Print the same table to chat. Optionally notify:

```
⚖️ *Rebalance proposal* — ${DATE}
• SYM 24% -> 18% (sell N sh) — over max weight
• SYM 12% -> 15% (buy N sh) — vol scaling [DEFERRED if applicable]
Port vol ~Z% (approx). Nothing was executed.
```

`bash scripts/telegram.sh "$MSG"` (falls back to ClickUp).

End every run with the hard stop line:

**Nothing was executed. Apply line-by-line with /trade SYM QTY buy|sell
(full safety-check applies).**
