---
description: Overnight macro brief — 7-print tape read + overnight events + holdings exposure -> single RISK-ON/NEUTRAL/RISK-OFF call by 8am
---

"Read the economy by 8am" — overnight macro distilled to what it means for the
book. Read-only analysis: this command NEVER places, modifies, or cancels an
order. Designed to be called by /pre-market STEP 3 or standalone. Target
runtime under 60 sec — parallelize aggressively, never block on a slow source.

Resolve date: DATE=$(date +%Y-%m-%d). NY time: NYHM=$(TZ=America/New_York date '+%H:%M').

## STEP 1 — Tape (7 prints, one parallel batch)

Call `mcp__tradingview-data__yahoo_price { symbol }` for ALL SEVEN symbols in
ONE message (parallel — sequential blows the 60s budget). Yahoo-format
symbols. Each returns price + change_pct.

| Symbol | Reads as |
|---|---|
| ^TNX | US 10Y yield (4.54 means 4.54%) |
| ^VIX | Volatility / fear |
| ES=F | S&P 500 futures |
| EURUSD=X | Dollar strength (inverse) |
| GC=F | Gold |
| BZ=F | Brent crude |
| BTC-USD | Risk-appetite proxy |

If any single print fails, mark it "n/a" and continue — never abort the tape
for one bad symbol.

## STEP 2 — Overnight events

    bash scripts/perplexity.sh "overnight macro: central bank speak, CPI/jobs prints, notable earnings, geopolitical moves in last 16 hours"

If Perplexity is unset (exit 3), fall back to native WebSearch with the same
query. Distill to AT MOST 3 bullets — only items that can move the tape. If
both sources fail, proceed with a tape-only brief and note "events unavailable".

## STEP 3 — Holdings exposure

    bash scripts/alpaca.sh positions

Classify each holding's macro sensitivity — one tag per symbol:
- **rates-sensitive growth** (long-duration tech, unprofitable growth) — hurt by ^TNX up
- **energy** — tracks BZ=F
- **dollar-exposed** (heavy international revenue) — helped by EURUSD=X up (weaker dollar)
- **defensive / low macro beta** — none of the above

If the book is flat, note "flat book — brief is informational only" and skip
the per-holding lines in STEP 4.

## STEP 4 — Brief

Compose, ultra-concise:

1. **Tape table** — 7 rows: symbol, print, change_pct, direction arrow (↑/↓/→).
2. **What changed overnight** — exactly the STEP 2 bullets (max 3).
3. **One line per holding**: `SYM — <implication from tape+events> — bias: none | tighten stop | watch`.
   Bias is a flag for the operator, NOT an instruction to touch an order.
4. **Regime call** — single line: RISK-ON / NEUTRAL / RISK-OFF + one sentence why.
   Heuristic: ES=F green + ^VIX < 20 + 10Y move < ±5bps = RISK-ON; ^VIX
   spiking or 10Y moving > ±5bps overnight with ES=F red = RISK-OFF; else NEUTRAL.

## STEP 5 — Persist + notify (read-only)

Append (NEVER overwrite) to memory/RESEARCH-LOG.md under today's date:

    ### Macro brief (${NYHM} ET)
    <full STEP 4 brief>

Telegram the compact form via `bash scripts/telegram.sh "$MSG"` (falls back to
ClickUp):

```
🌍 *Macro Brief* — ${DATE} ${NYHM} ET
10Y 4.54 ↑ | VIX 15.2 ↓ | ES +0.3% | EUR 1.08 → | GC ↑ | BRENT ↓ | BTC +1.2%
Regime: RISK-ON — <one sentence why>
```

No trade executed. To act on any holding bias, run `/trade SYM QTY buy|sell`
— the full safety-check applies there.

## Rules
- Stocks only, never options. Read-only: no orders, no stop changes — flags only.
- Do not block on empty/failed sentiment or news sources; degrade gracefully per step.
- Expected runtime < 60 sec. Do not re-run within 30 min unless asked — the
  tape doesn't change that fast pre-market.
