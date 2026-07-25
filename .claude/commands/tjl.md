---
description: Trend Join Long strategy scanner (Scanner B) — filters candidates that pass daily + intraday breakout gates
---

Adapted from the Humbled Trader "Trend Join Long" (TJL) workflow. Scanner A
(/gappers) produces the universe; Scanner B (this) filters it to entries.

## Args
- SYMBOLS (optional; default = today's Scanner A hits from `data/premarket_gappers_YYYY-MM-DD.json`,
  merged with `data/scanner_b_universe.txt` if that file exists and was written today —
  `/gappers` Step 7 produces it between 10:00-15:00 NY as a plain one-ticker-per-line list)
- TIMEFRAME_OK — always required; script checks that current NY time is between
  10:00 and 15:30. Otherwise save an error JSON and exit.

## Prereqs
- `tradingview` MCP connected (Desktop app with `--remote-debugging-port=9222`).
  First: run `mcp__tradingview__tv_health_check`. If `cdp_connected=false` OR
  `api_available=false`, STOP and tell the user to relaunch TV.

## Steps (sequential — do NOT parallelize per ticker; the MCP shares one chart)

For each ticker T in the input universe:

1. **Set the symbol on the chart**:
   `mcp__tradingview__chart_set_symbol { symbol: T }`

2. **Daily context**: `chart_set_timeframe { timeframe: "D" }` → `data_get_ohlcv { count: 210 }`
   - `prev_daily_high` = high of the last bar
   - `prev_daily_close` = close of the last bar
   - `sma200` = mean(close) over the last 200 bars

3. **Current price**: `quote_get` → `curr_px`

4. **Intraday**: `chart_set_timeframe { timeframe: "1" }` → `data_get_ohlcv { count: 400 }`
   - `pmh` (premarket high) = max(high) of bars where today's 04:00 ET ≤ bar.time < 09:30 ET
   - `today_hod` = max(high) of bars where today's 09:30 ET ≤ bar.time < now (excluding current bar)

5. **Evaluate gates**:
   - `daily_breakout = (curr_px > prev_daily_high) AND (prev_daily_close > sma200)`
   - `intraday_breakout = (curr_px > pmh) AND (curr_px > today_hod)`
   - `result = "PASS"` if both true, else `"fail_daily"` or `"fail_intraday"`

## Output

Save to `data/tjl_watchlist_YYYY-MM-DD_HHMMET.json`:
```json
{
  "scanned_at": "",
  "candidates_checked": N,
  "hits": [
    {"symbol": "AMD", "curr_price": 415.20, "prev_daily_high": 412.55,
     "sma200": 285.50, "pmh": 414.10, "today_hod": 415.50}
  ],
  "all_results": [
    {"symbol": "AMD", "result": "PASS"},
    {"symbol": "NVDA", "result": "fail_intraday"}
  ]
}
```

Print one line per ticker: `TICKER: PASS | fail_daily | fail_intraday — reason`.

## Telegram notification

If Telegram is configured, send in this exact format:

```
🎯 *TJL Watchlist* — HH:MM ET
• TICKER @ $price (PMH $X, prev_high $Y, SMA200 $Z)
```

If 0 hits: body is `"No TJL hits this run."`

Only send on: first run of day, new hit vs previous run, or error. Otherwise stay quiet.

## Runtime + safety

- Expected 3-5 minutes per ticker (chart load + data pull is the bottleneck).
- Cap the universe at 10 tickers per run to bound wall clock at ~50 min.
- NEVER auto-trade a TJL hit. Feed it to `/trade` which runs the full safety check.
