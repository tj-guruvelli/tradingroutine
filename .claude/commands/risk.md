---
description: Portfolio risk report — historical VaR/CVaR + beta-scaled scenario stress on live Alpaca positions (read-only, never trades)
---

Measures the book you already hold. Read-only analysis — this command NEVER
places an order. Resolve date: DATE=$(date +%Y-%m-%d).

## STEP 1 — Run the risk engine

From the repo root:

    node scripts/risk.mjs

Emits one JSON object: `{as_of, equity, positions:[{sym, weight, beta}],
var95_1d_pct, cvar95_1d_pct, var95_10d_pct, stress:{gfc_pct, covid_pct,
rate_shock_pct}, flags:[]}`.

Fallbacks:
- `{"positions": 0, ...}` — empty book. Report "nothing to stress", still log
  per STEP 4, skip telegram, stop.
- Non-zero exit — read stderr. A cert error means this machine's TLS
  interception: re-run with NODE_EXTRA_CA_CERTS pointed at the local CA
  bundle. Do NOT fall back to curling the Alpaca API directly.

## STEP 2 — Interpret in plain English

One paragraph, no jargon dump:
- "A 1-in-20 bad day loses about |var95_1d_pct|% (~$ equity x var95_1d_pct/100);
  when that threshold breaks, the average loss is |cvar95_1d_pct|%."
- Name the worst `stress` scenario (usually gfc_pct) and repeat the JSON's own
  caveat: beta-scaled approximation, not a historical replay.
- The 10-day figure is sqrt(10)-scaled — label it an approximation.
- Call out every entry in `flags` (concentration >20% mirrors config/rules.json).

## STEP 3 — Hedge suggestions (HONESTY RULE)

This account is stocks-only — no options. The ONLY hedges you may suggest:
1. Trim the largest-beta or largest-weight position.
2. Raise cash % (toward the 75% deployed floor, per TRADING-STRATEGY.md).
3. Tighten trailing stops (never move a stop down).

Puts, inverse ETFs, or any derivative may be MENTIONED only as "not available
under house rules" — NEVER as a suggested action.

## STEP 4 — Memory + notify

Append (never overwrite) to memory/RESEARCH-LOG.md under today's date:

    ### Risk report
    - VaR95 1d: X% | CVaR95 1d: Y% | VaR95 10d (approx): Z%
    - Stress (beta-scaled): GFC A% / COVID B% / rate-shock C%
    - Betas: SYM b.bb, SYM b.bb, ...
    - Flags: <each flag, or "none">
    - Read-only suggestion: <one line from STEP 3, or "book within limits">

Telegram ONLY if `var95_1d_pct` is worse than -3 (i.e. < -3) OR `flags` is
non-empty — otherwise stay silent:

    bash scripts/telegram.sh "$MSG"

Format:

    ⚠️ *Risk Report* — ${DATE}
    1-in-20 day: X% | worst stress: <scenario> Y%
    Flags: <flags or none>
    No trade executed.

## Rules
- Read-only, stocks only, no options. Never instructs or places an order.
- Results go to memory + optional telegram. To act, run
  `/trade SYM QTY buy|sell` (full safety-check applies).
