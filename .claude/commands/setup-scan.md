---
description: Full-universe setup scanner — grades every tracked ticker (61) for real trade setups, ranked by confidence, with timeframe and trigger levels
---

Scans the entire tracked universe (`config/rules.json` `watchlist_tiers.immediate`,
61 tickers) and grades each one against three concrete setup types. Answers
"which tickers have a real setup right now, what kind, what timeframe, and
what triggered it" — not a vague momentum feel.

## Universe + exchange map

Read tickers from `config/rules.json` `watchlist_tiers.immediate`. Exchange
per ticker (`mcp__tradingview-data__combined_analysis` needs bare `symbol` +
explicit `exchange` — prefixing the symbol itself 404s):

- NASDAQ: META, CMCSA, GOOG, MSFT, OPEN, RGTI, GFS, QTUM, RKLB, IRDM, ASTS, LUNR,
  QCOM, SATL, UFO, KTOS, ONDS, DPRO, RCAT, AVAV, LAKE, CRWV, NBIS, RR, AMKR,
  KLIC, SYNA, QMMM, WLDS, AGMH, PTNM, PEPG, TRMD
- NYSE: V, MA, T, ORCL, NOC, BA, LMT, RTX, QBTS, PL, HXL, STM, RDW, BKSY,
  AMPX, OKLO, HAFN, BWLP, ZIM, CMBT, BE
- AMEX: APT, UMAC
- OSL: KOG (Oslo — combined_analysis may not cover this exchange; on failure
  skip and note it, do not block the run)
- BCI, BMNR, BLSH, NIO: NASDAQ (verify via `symbol_search` if the call 404s)

If any single ticker's exchange guess 404s, retry once with the other US
exchange (NASDAQ<->NYSE), then skip with a noted reason. Never abort the run
for one bad ticker.

## Setup grading (three types, per `config/rules.json` + `TRADING-STRATEGY.md`)

For each ticker, call `mcp__tradingview-data__combined_analysis { symbol,
exchange, timeframe: "1D" }` (add a second call with `timeframe: "1H"` only
for tickers that pass the volume gate below — don't waste calls on illiquid
names).

**Gate (must pass to be graded at all):**
- `premarket_volume >= 50000` OR (if outside premarket hours) latest daily
  volume `>= 1.5x` the 30-day average volume from the technical block.

**Setup A — TJL breakout** (matches `tjl.md` gates exactly):
`curr_px > prev_daily_high AND prev_daily_close > sma_200` (daily) AND
`curr_px > premarket_high AND curr_px > today_hod` (intraday, only checkable
during 10:00-15:30 ET — otherwise mark "not checkable outside session").
Timeframe: intraday (5m-15m entries off a daily/1D bias).

**Setup B — GainzAlgo confluence**: proxy via the technical block until the
live Pine indicator's `data_get_study_values` is wired in — use `ADX > 20`
(trend strength) AND `EMA(short) > EMA(long)` (multi-EMA bias, matches
GainzAlgo's directional-bias layer) AND `stock_score >= 6`. Timeframe: 5m-15m.

**Setup C — mean reversion**: `RSI_14 < 30 AND price > SMA_200` (oversold in
an uptrend — matches `entry_rules.indicators` in rules.json exactly).
Timeframe: daily swing (multi-day hold).

**Confidence score** = count of A/B/C that hit.
- 3/3 or 2/3 → **grade A** (alert-worthy)
- 1/3 → **grade B** (watch only)
- 0/3 → excluded from output entirely (no setup, don't clutter the list)

## Output

Print a ranked table, grade A first, then B:

```
TICKER  GRADE  SETUP(S)        TIMEFRAME     TRIGGER
RKLB    A      TJL + Momentum  intraday 15m  px>$82.10 (prev high), RSI 58, ADX 24
QMMM    B      Mean-reversion  daily swing   RSI 27, px $119 > SMA200 $95
```

Then save to `data/setup-scan_YYYY-MM-DD_HHMMET.json` (full detail: all
three gate values per ticker, not just hits) and append the grade-A/B table
to `memory/RESEARCH-LOG.md` under `### Setup Scan (HH:MM ET)`.

## Telegram

Only send if at least one grade-A hit exists:
```
🎯 *Setup Scan* — HH:MM ET
• TICKER (grade A) — SETUP, TIMEFRAME — trigger
```

## Rules
- Never auto-trade a hit. Feed it to `/trade` (full safety-check).
- Expected runtime: 2-4 min (61 tickers, mostly 1 API call each).
- Do not re-run within 20 min unless asked — cache by (ticker, date, hour) key.
