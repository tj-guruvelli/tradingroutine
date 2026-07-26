---
description: On-screen desk card — today's daily stop (circuit-breaker floor) + A/B/C position size reminders. Read-only, never trades.
---

Desk card that SURFACES existing risk logic — it does not reinvent it. The
daily-stop math is the same circuit-breaker check `scripts/safety-check.sh`
runs before every order; the A/B/C sizing is the same Wilder ATR(14) math as
`scripts/size.mjs`, run at three conviction tiers. This command never places
or cancels an order.

Usage: `/risk-widget [SYMBOL]`. SYMBOL is optional — omit it to see only the
daily-stop card; pass a bare symbol (`META`, not `NASDAQ:META`) to also get
A/B/C size tiers for that ticker.

## STEP 1 — Run the widget

    node scripts/risk-widget.mjs [SYMBOL]

Emits one JSON object: `{as_of, market_open, daily_stop:{max_drawdown_from_peak_pct,
peak_equity, current_equity, drawdown_pct, equity_floor_before_circuit_breaker,
circuit_breaker_tripped}, position_size_tiers:{symbol, price, atr14, A, B, C}}`
where A/B/C each carry `{risk_pct, risk_dollars, shares, cap_applied}` (A = full
`risk_pct_per_trade` from `config/rules.json`, B = half, C = quarter — all
capped at 20% of equity, matching `scripts/size.mjs`'s cap).

If the market is closed (`market_open: false`), the JSON still returns
last-known account/equity values with `market_closed_note` set — that is
correct behavior, not a failure; report the card as-is and note it's stale
until the next open.

Fallbacks:
- Non-zero exit / cert error — same TLS-interception note as `/risk`:
  re-run with `NODE_EXTRA_CA_CERTS` set, never curl Alpaca directly.
- `position_size_tiers.error` present — not enough daily bars for ATR(14)
  on that symbol; report the daily-stop card anyway and name the gap.

## STEP 2 — Render as a desk card (ultra-concise, no fluff)

```
RISK WIDGET — <DATE> <NYHM> ET (<market open|CLOSED>)
Daily stop: equity floor $<equity_floor_before_circuit_breaker> (<max_drawdown_from_peak_pct>% off peak $<peak_equity>)
Now: $<current_equity> (<drawdown_pct>% off peak)<< " — CIRCUIT BREAKER TRIPPED" if circuit_breaker_tripped>>
Size <SYMBOL> @ $<price> (ATR14 <atr14>):
  A (full, <A.risk_pct>%): <A.shares> sh / $<A.risk_dollars> risk<< " (cap)" if cap_applied>>
  B (half, <B.risk_pct>%): <B.shares> sh / $<B.risk_dollars> risk<< " (cap)" if cap_applied>>
  C (qtr,  <C.risk_pct>%): <C.shares> sh / $<C.risk_dollars> risk<< " (cap)" if cap_applied>>
```

If no SYMBOL was passed, drop the "Size" block and print only the daily-stop
lines, plus `Run /risk-widget SYMBOL for A/B/C sizing.`

## Rules

- Read-only. Never place, cancel, or modify an order from this command.
- Never call the Alpaca API directly — always through `scripts/risk-widget.mjs`
  (which itself only reads `.env`/`process.env` for keys and never prints them).
- Do not duplicate the circuit-breaker or ATR(14) math elsewhere — this
  command only formats output already computed by `scripts/risk-widget.mjs`,
  which mirrors (not forks) `scripts/safety-check.sh` and `scripts/size.mjs`.
