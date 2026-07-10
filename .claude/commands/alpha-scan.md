---
description: Nightly anomaly hunt — parallel volume/breakout sweep across NASDAQ+NYSE, edge-scored shortlist (read-only)
---

"Scan the market while you sleep." Sweeps both exchanges for volume and price
anomalies, merges, scores, ranks, and reports. Pure analysis — this command
NEVER places an order.

## Args
- optional `--exchange NASDAQ|NYSE` — narrow to one exchange (default: both)
- optional `--top N` — shortlist size (default 10)

Resolve date: DATE=$(date +%Y-%m-%d). Resolve NY time: NYHM=$(TZ=America/New_York date '+%H:%M').

## STEP 1 — Sweep

Fire ALL scanner calls in ONE parallel message (4 per target exchange; both
exchanges unless `--exchange` narrows — 8 calls max, that is the brake):

    mcp__tradingview-data__volume_breakout_scanner { exchange, timeframe: "1D", volume_multiplier: 2.5, price_change_min: 4, limit: 25 }
    mcp__tradingview-data__smart_volume_scanner { exchange, min_volume_ratio: 2.5, min_price_change: 3, rsi_range: "any", limit: 20 }
    mcp__tradingview-data__top_gainers { exchange, ... }   # check the tool schema at call time for exact params
    mcp__tradingview-data__bollinger_scan { exchange, ... } # attempt; if it errors or doesn't support the exchange, drop it and continue

All four are attempt-and-drop: if any single scanner call errors, proceed with
the others — never abort the sweep for one dead source. (volume_breakout_scanner
verified working with exchange:"NASDAQ" on 2026-07-10; schemas only document
crypto exchanges, so treat stock-exchange support as fragile.) If BOTH volume
scanners return 0 rows on BOTH exchanges, treat it as source failure, not a
quiet market — say so in the telegram message, since top_gainers alone has no
volume fields and most edge-score components collapse to 0. If ALL four fail,
alert via `bash scripts/telegram.sh` and STOP.

## STEP 2 — Merge + dedupe

- Strip `NASDAQ:` / `NYSE:` prefixes from every symbol BEFORE any further use
  (other tools 404 on prefixed symbols).
- De-duplicate by bare symbol; keep the row with the highest volume_ratio.
- Drop: price < $3.
- Drop: `breakout_type: bearish` — UNLESS RSI < 25, in which case keep and
  tag `"bounce"` (oversold-bounce candidate, higher risk).

## STEP 3 — Edge score + rank

Score each survivor (min-max normalize each component to 0-1 across the
survivor set; rsi_distance = |RSI - 50| / 50; missing component = 0; if
max == min for a component across survivors — e.g. a single survivor — set
that component to 1.0 for all rows so the score stays defined and reproducible):

    edge = 0.4*volume_ratio_norm + 0.3*|price_change|_norm + 0.2*rsi_distance_norm + 0.1*(bullish ? 1 : 0)

Rank descending. Keep top N (default 10). SHOW the formula line above in the
final output so scores are reproducible.

## STEP 4 — One-line "why" per name

Single batched call (NOT one per ticker):

    bash scripts/perplexity.sh "For each ticker, one line: the news catalyst driving it today, or 'no news'. Tickers: <SYM1, SYM2, ...>"

If Perplexity is unset (exit 3), fall back to native WebSearch with the same
batch query. Any ticker with no findable catalyst gets:
`"no news = pure flow anomaly, higher risk"`. Never block the shortlist on
missing news — sentiment/news sources are known-degraded upstream.

## STEP 5 — Persist + notify

1. Save `data/alpha_scan_${DATE}.json` (same shape discipline as the gappers JSON):
```json
{
  "scanned_at": "",
  "exchanges": ["NASDAQ", "NYSE"],
  "candidates": [
    {"rank": 1, "symbol": "ALNY", "exchange": "NASDAQ", "price": 231.10,
     "price_change_pct": 6.2, "volume_ratio": 4.1, "rsi": 68,
     "breakout_type": "bullish", "tag": null, "edge_score": 0.87,
     "why": "Phase 3 readout beat expectations"}
  ]
}
```
2. Append the top-5 table to `memory/RESEARCH-LOG.md` under today's date as
   `### Alpha scan (auto HH:MM ET)`. Do NOT overwrite existing content.
3. Telegram, compact:
```
🌙 *Alpha Scan* — ${DATE} ${NYHM} ET
1. SYM +x.x% vol 4.1x edge 0.87 — why
...
No trade executed. Run /trade SYM QTY buy|sell to act (full safety-check applies).
```
`bash scripts/telegram.sh "$MSG"` (falls back to ClickUp).

**Cross-feed:** if NY time < 09:30 and `data/premarket_gappers_${DATE}.json`
exists, note overlapping symbols in the telegram message and JSON (`"gapper_overlap": true`)
— a name hit by both scanners is the strongest signal of the night.

## Rules
- Read-only. NEVER auto-trade a result. To act: `/trade SYM QTY buy|sell`
  (full safety-check applies at order time).
- Results live in memory/RESEARCH-LOG.md + data JSON; telegram is optional
  notification, not the record.
- Expected runtime ~90 sec. Do not re-run within 30 min unless asked.
- Stocks only, no options — per TRADING-STRATEGY.md.
