---
description: TJR liquidity-sweep + break-of-structure scanner (BTC/QQQ/SPY) — alert-only, no execution
---

Adapted from the "improved TJR strategy" backtest research (see
`tasks/research/` in the parent sec-brain vault if present, or the two
YouTube-transcript extractions this command was built from). This is the
version that survived independent backtesting — NOT TJR's raw publicly-taught
framework, which lost money in the same backtest. Alert-only: detects and
tracks a simulated trade lifecycle, never touches a real Alpaca position or
order.

## IMPORTANT — parameters not specified by the source strategy

The source material explicitly does not define a fixed swing-point lookback
(the backtest author tested several values and picked whichever performed
best in-sample per run — an acknowledged form of overfitting, not a rule).
This command uses a **symmetric 5-bar fractal** (a bar is a swing high/low if
it's the max/min of the 5 bars on each side) as a reasonable default. This is
an engineering choice, not a sourced fact — adjust `SWING_LOOKBACK` below if
live results look wrong, and don't present it as "TJR's rule" if this ever
gets written up.

## Per-asset config (from the backtested "improved" version, not the raw TJR framework)

| Asset | Data source | Timeframe | Session filter | Direction | Exit |
|---|---|---|---|---|---|
| BTC/USD | `scripts/alpaca.sh crypto-bars` | 1Hour | none (24/7) | long + short | trailing stop |
| QQQ | `scripts/alpaca.sh bars` | 15Min | 09:30-16:00 ET | **long only** | trailing stop |
| SPY | `scripts/alpaca.sh bars` | 15Min | 09:30-16:00 ET | **long only** | trailing stop |

Gold (XAUUSD) and GBPUSD are NOT in this command — Alpaca has no spot forex
or commodities data. They require the TradingView Desktop CDP path
(`mcp__tradingview__*`) instead; see `tjr-gold-fx.md` once that's built.

QQQ/SPY long-only reflects the backtest's random-forest finding that index
shorts underperformed structurally (fighting a decades-long uptrend) — not a
TJR rule, an empirical finding from the improved-version research.

SWING_LOOKBACK = 5

## Prereqs

None beyond Alpaca credentials (already required by the rest of this bot).
This command does NOT need TradingView Desktop — it computes everything from
`scripts/alpaca.sh` bars, same pattern as `tjl-cloud.md`.

## State

Simulated open-trade state persists per asset in
`data/tjr_state_<ASSET>.json` (ASSET = btcusd | qqq | spy):
```json
{
  "in_trade": false,
  "direction": null,
  "entry_price": null,
  "stop_price": null,
  "r_value": null,
  "highest_r_reached": 0,
  "entered_at": null
}
```
If the file doesn't exist, treat as `in_trade: false`.

## Steps (per asset, independent — safe to run in parallel, unlike the
TradingView-CDP-based /tjl which shares one chart)

For each asset A with its timeframe TF and lookback window:

1. **Pull bars.**
   - BTC/USD: `bash scripts/alpaca.sh crypto-bars BTC/USD 1Hour $START $END 200`
     → response shape: `{"bars": {"BTC/USD": [...]}}` — the array is nested
     under the symbol key.
   - QQQ / SPY: `bash scripts/alpaca.sh bars <SYM> 15Min $START $END 200`
     → response shape: `{"bars": [...], "symbol": "QQQ"}` — flat array, NOT
     nested under the symbol key. Verified live 2026-07-26: these two
     endpoints genuinely have different response schemas, don't assume
     they match.
   ($START = now minus enough bars to cover swing detection + BOS lookback,
   e.g. 200 bars back. $END = now, RFC3339.)

2. **Session filter (QQQ/SPY only).** If current NY time is outside
   09:30-16:00 ET, skip signal detection for this asset this run (state
   still loads/persists, just no new entries). BTC has no filter.

3. **Compute swing points.** Walk the bar series; bar[i] is a confirmed
   swing high if `high[i] == max(high[i-5..i+5])`, confirmed swing low if
   `low[i] == min(low[i-5..i+5])`. (Only bars with 5 confirmed bars on both
   sides qualify — the most recent ~5 bars can't produce a confirmed swing
   yet, that's expected.)

4. **If NOT in_trade — look for a new signal:**
   - **Sweep-of-low** (bullish setup): a bar's `low` < most recent confirmed
     swing low, but that bar's `close` > that swing low (wick pierced below,
     closed back above).
   - **Sweep-of-high** (bearish setup, BTC only — QQQ/SPY are long-only):
     mirror image on swing high.
   - **Break of structure**: after a sweep-of-low, the setup confirms
     bullish once a later bar's `close` > the most recent confirmed swing
     high that existed before the sweep. Mirror for sweep-of-high → bearish
     BOS = close below the prior swing low.
   - On BOS confirmation (using the most recently *closed* bar only — never
     the in-progress bar):
     - `entry_price` = BOS bar's close
     - `stop_price` = sweep bar's low (long) / sweep bar's high (short) —
       no buffer, exactly at the wick, matching the source description
     - `r_value` = |entry_price - stop_price|
     - Write state: `in_trade: true`, `direction`, `entry_price`,
       `stop_price`, `r_value`, `highest_r_reached: 0`, `entered_at: now`
     - **Alert** (see Telegram format below)

5. **If in_trade — manage the trailing stop and check for exit:**
   - `current_r = (current_price - entry_price) / r_value` (long) or
     `(entry_price - current_price) / r_value` (short)
   - If `current_r >= 1` and `highest_r_reached < 1`: move `stop_price` to
     `entry_price` (breakeven), set `highest_r_reached = 1`
   - If `current_r >= n` for integer n >= 2 and `highest_r_reached < n`:
     trail `stop_price` to `entry_price + (n-1) * r_value` (long, mirror for
     short), set `highest_r_reached = n`
   - No fixed take-profit — only exits via the trailing stop.
   - If `current_price` has crossed back through `stop_price` (long: price
     <= stop; short: price >= stop): **this is an exit.** Compute realized
     R = `highest_r_reached` (roughly — this is an alert approximation, not
     a slippage-accurate fill). Write state back to `in_trade: false` (clear
     the rest). **Alert** (see below).
   - Otherwise, silently update state (new stop level) and stay quiet — do
     NOT alert on every trail-tighten, only on entry and exit, or spam
     becomes useless.

6. Write state file for this asset regardless of branch taken.

## Telegram notification

Only send when something actually changed this run (new entry or new exit)
— same "stay quiet otherwise" gating as `/tjl`.

Entry:
```
🎯 *TJR Signal* — <ASSET> <LONG|SHORT> — HH:MM ET
Entry $<entry_price> · Stop $<stop_price> (1R = $<r_value>)
Sweep+BOS confirmed on <TF>. Simulated/alert-only — no order placed.
```

Exit:
```
🏁 *TJR Exit* — <ASSET> <LONG|SHORT> — HH:MM ET
Closed near $<current_price> · Peak ~+<highest_r_reached>R
```

If nothing changed for any asset this run: no message at all.

```
bash scripts/telegram.sh "$MSG"
```
If telegram exits nonzero: `bash scripts/clickup.sh "$MSG"`.

## Runtime + safety

- Alert-only. **Never** calls `scripts/alpaca.sh order` or any position/order
  endpoint. This tracks a simulated trade for notification purposes only.
- If the operator wants to act on a signal, that's a manual decision — this
  command does not feed `/trade` automatically the way `/tjl` hits are meant
  to be manually confirmed too.
- Expect roughly 1-3 seconds per asset (single bars pull, no chart GUI
  dependency) — cheap enough to run all 3 assets every invocation.
- Swing-point / BOS / trailing-stop parameters here are engineering defaults
  documented above, not sourced facts from the TJR backtest transcripts —
  see the parameters note at the top before trusting a specific number.
