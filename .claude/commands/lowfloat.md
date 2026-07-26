---
description: Low-float gap-up scanner — Alpaca snapshot universe, data-only (never trades)
---

Low-float momentum gap scan via `scripts/lowfloat-alpaca.sh`. Same Alpaca
snapshot data source as `/gappers` (see `scripts/gappers-alpaca.sh`). Read-only
market data — never places or modifies orders.

## Args
- `<watchlist|symbols SYM,...|most-active>` — same universe modes as
  `scripts/gappers-alpaca.sh`.

## Prereq
Verify env: `ALPACA_API_KEY`, `ALPACA_SECRET_KEY` (loaded from `.env` the same
way every other `scripts/*.sh` wrapper does — see `scripts/alpaca.sh`).

## Fixed filters (not configurable via flags; env override only for testing)
- Price between $0.20 and $10.00 (`LOWFLOAT_PRICE_MIN` / `LOWFLOAT_PRICE_MAX`)
- Exclude OTC-exchange listings (looked up via `GET /v2/assets`)
- Cumulative day volume >= 100,000 (`LOWFLOAT_VOL_MIN`)
- Gap up >= 2% vs prior close (`LOWFLOAT_GAP_MIN`)
- Sorted by dollar volume (price * volume) descending

## Usage
`bash scripts/lowfloat-alpaca.sh watchlist` (scans memory/WATCHLIST.md) or
`bash scripts/lowfloat-alpaca.sh most-active` (Alpaca most-actives universe).

Output: JSON array of `{symbol, prev_close, current, gap_pct, volume,
dollar_volume, exchange}`.

## Rules
- Data-only. Feed results to `/trade` (full safety-check) if acting on them —
  never auto-trade a scan result.
