# Calibration Report: Setup A/B/C Entry Bar (Jul 9 - Sep 4, 2026)

One-off calibration backtest. Question: setup-scan-cloud.mjs's 61 production
runs all fired after 15:30 ET, outside Setup A's 10:00-15:30 ET gate, so
Setup A never evaluated and grade A (2+ setups) never occurred. This replays
the scanner's exact math at the new in-session fire times (11:30 ET, 14:30 ET)
to answer: is the entry bar too strict, or just broken?

## Method

- Script: `scripts/calibrate-entry-bar.mjs` (new, read-only, no orders placed).
- Indicator math (SMA, EMA, Wilder RSI14, Wilder ADX14) and Setup A/B/C
  definitions, plus the volume gate that runs before them, are copied
  verbatim from `scripts/setup-scan-cloud.mjs`.
- Universe: `config/rules.json` `watchlist_tiers.immediate`, 60 symbols.
  `KOG.OL` is not present in that list, so no exclusion was needed for it.
  All 60 symbols returned daily bars from Alpaca (none excluded as
  unresolvable).
- Window: every NYSE trading day 2026-07-09 through 2026-09-04 per Alpaca's
  `/v2/calendar`, 42 trading days, run in a single pass (not staged in 30-day
  chunks; batched multi-symbol requests made the full window fast enough).
- Two in-session samples per day: 11:30 ET and 14:30 ET, the new production
  fire times.
- For each symbol/day/sample: daily bars used for indicators are only those
  strictly before day D (so SMA200/RSI14/ADX14/EMA9/EMA21/prev_daily_high/
  prev_daily_close reflect what was known at the open of D, matching
  production's own "exclude today's incomplete bar" logic). Minute bars from
  04:00 ET through the sample time give `pmh` (max high, 04:00-09:29 ET),
  `today_hod` (max high, 09:30 ET to the sample, excluding the final bar
  before the sample, mirroring production's exclusion of a potentially
  in-progress bar), `curr_px` (last minute close at or before the sample),
  and VWAP (cumulative typical-price*volume from the open through the sample,
  all bars included).
- Raw Alpaca responses are cached under `data/calibration/raw/` (calendar,
  one wide multi-symbol daily-bars fetch, one multi-symbol minute-bars fetch
  per day), so reruns after this one cost no API calls.
- Machine-readable results: `data/calibration/summary.json`.

## Exclusions and caveats

- **IEX premarket coverage is sparse.** `pmh` and premarket volume are a
  lower bound, not exact, per the free-tier feed's known limitation (same
  caveat `scripts/alpaca.sh` documents for its `bars` subcommand).
- **Insider leg not computable.** The confluence proxy (below) only checks
  the three computable legs (SMA200, RSI, VWAP); Openinsider cluster-buy data
  isn't in this replay.
- **The volume gate matters a lot and was not explicit in the task's Setup
  A/B/C description, but is load-bearing in the source file** (it runs
  immediately before Setup A/B/C in `setup-scan-cloud.mjs` and excludes a
  symbol from all three checks if it fails). Without it, this replay's Setup
  B/C counts ran 3-5x too high and disagreed with every production file in
  the cross-check (see below). With it, cross-check agreement is exact. Only
  460 of 5,040 possible symbol-day-sample slots (60 symbols x 42 days x 2
  samples = 9.1%) passed the gate at all; the other 4,580 were excluded
  before any setup was even checked, because neither sample time (11:30,
  14:30) is in the premarket window, so the gate reduces to "yesterday's
  volume >= 1.5x its own 30-day average."
- Setup B (`adx14 > 20 AND ema9 > ema21`) uses only prior-day daily bars, no
  intraday price at all, so its result is identical at 11:30 and 14:30 for a
  given symbol/day, confirmed in the data (every day's 11:30 and 14:30 Setup
  B counts below are equal). Only Setup A varies within a day.

## Aggregate: setup hit counts and overlaps (default thresholds: ADX>20, RSI<30)

| Metric | Count | % of 460 gated slots |
|---|---|---|
| Symbol-day-samples evaluated (passed volume gate) | 460 | 100% |
| Setup A hits | 0 | 0% |
| Setup B hits | 126 | 27.4% |
| Setup C hits | 0 | 0% |
| A+B overlap | 0 | 0% |
| A+C overlap | 0 | 0% |
| B+C overlap | 0 | 0% |
| **Grade A (2+ setups)** | **0** | **0%** |
| Grade B (exactly 1 setup) | 126 | 27.4% |
| Days with >=1 grade-A (of 42) | 0 | 0% |

**Diagnostic: why Setup A is 0, not just rare.** Setup A requires a daily
leg (`curr_px > prev_daily_high AND prev_daily_close > sma200`) AND an
intraday leg (`curr_px > pmh AND curr_px > today_hod`) simultaneously. Over
the 460 gated slots: the daily leg alone was true 62 times (13.5%), the
intraday leg alone was true 1 time (0.2%), and both together: 0 times. The
daily breakout condition is perfectly plausible on this universe; the double
intraday-high confirmation is what kills it, it essentially never coincides
with the daily leg being true.

**Grade-A symbol list: none.** Zero grade-A setups occurred across all 42
days and both sample times, so there is nothing to list. This is the direct
answer to "how many grade-A setups did the bot never see": zero existed to
see, under the current Setup A/B/C definitions, even sampled correctly
in-session.

### Per-day Setup B hit counts (Setup A and C were 0 on every single day; omitted from the table)

| Day | Setup B hits (11:30 = 14:30) | Vol-gate excluded |
|---|---|---|
| 2026-07-09 | 1 | 55 |
| 2026-07-10 | 1 | 56 |
| 2026-07-13 | 1 | 58 |
| 2026-07-14 | 1 | 58 |
| 2026-07-15 | 1 | 57 |
| 2026-07-16 | 1 | 56 |
| 2026-07-17 | 0 | 52 |
| 2026-07-20 | 1 | 56 |
| 2026-07-21 | 1 | 56 |
| 2026-07-22 | 0 | 56 |
| 2026-07-23 | 1 | 57 |
| 2026-07-24 | 2 | 55 |
| 2026-07-27 | 1 | 54 |
| 2026-07-28 | 2 | 51 |
| 2026-07-29 | 2 | 52 |
| 2026-07-30 | 1 | 54 |
| 2026-07-31 | 2 | 51 |
| 2026-08-03 | 2 | 54 |
| 2026-08-04 | 0 | 55 |
| 2026-08-05 | 0 | 55 |
| 2026-08-06 | 0 | 52 |
| 2026-08-07 | 2 | 52 |
| 2026-08-10 | 2 | 54 |
| 2026-08-11 | 0 | 56 |
| 2026-08-12 | 1 | 55 |
| 2026-08-13 | 1 | 53 |
| 2026-08-14 | 3 | 49 |
| 2026-08-17 | 4 | 52 |
| 2026-08-18 | 2 | 56 |
| 2026-08-19 | 1 | 56 |
| 2026-08-20 | 4 | 52 |
| 2026-08-21 | 1 | 56 |
| 2026-08-24 | 2 | 56 |
| 2026-08-25 | 1 | 56 |
| 2026-08-26 | 3 | 55 |
| 2026-08-27 | 1 | 56 |
| 2026-08-28 | 3 | 54 |
| 2026-08-31 | 0 | 58 |
| 2026-09-01 | 0 | 58 |
| 2026-09-02 | 3 | 54 |
| 2026-09-03 | 3 | 53 |
| 2026-09-04 | 5 | 49 |

## Calibration sensitivity

| Alternative | Grade-A count (42 days) | Per week |
|---|---|---|
| (a) ADX threshold 15 (Setup B only, grade rule unchanged: 2-of-3) | 0 | 0.0 |
| (a) ADX threshold 20 (baseline) | 0 | 0.0 |
| (a) ADX threshold 25 | 0 | 0.0 |
| (b) Grade A = Setup A alone | 0 | 0.0 |
| (c) Grade A = Setup B tightened (ADX>25 AND px>SMA200) alone | 60 | 7.1 |
| (d) RSI threshold 30 (Setup C only, grade rule unchanged: 2-of-3) | 0 | 0.0 |
| (d) RSI threshold 35 | 0 | 0.0 |
| (d) RSI threshold 40 | 0 | 0.0 |

**(a) and (d) never move the count**, because the 2-of-3 grade rule still
needs Setup A or Setup C to co-occur with Setup B, and both stay at 0 hits
regardless of the ADX/RSI cutoff tested (Setup A never fires at all per the
diagnostic above; Setup C requires `RSI < threshold AND px > SMA200`
simultaneously with Setup B's `ADX > 20 AND ema9 > ema21`, i.e. an oversold
reading during a confirmed uptrend, which never happened once in 460 gated
slots at any RSI cutoff up to 40. Trend-following and mean-reversion
conditions are close to mutually exclusive on this universe by
construction). **(b) also does nothing**, because Setup A alone is 0
regardless of whether it needs to pair with anything. **(c) is the only
alternative tested that moves the count from 0 to a workable number**: 60
hits over 42 days, about 7.1/week, roughly 1.4/day. Against the strategy's
cap of 3 new trades/week and 6 open positions, that is a usable
pre-execution candidate pool (still needs the catalyst/confluence overlay to
cut down further before any trade), not a flood. **None of the six tested
alternatives flood the scanner**; the entire problem here is in the too-strict
direction.

## Confluence rule proxy (memory/TRADING-STRATEGY.md, "at least 2 of {VWAP, RSI, 200-SMA, insider} align")

Computed over the 441 of 460 gated slots where VWAP was available (19 slots
had no regular-session minute bars before the sample and were skipped).
`leg_sma = curr_px > sma200`, `leg_vwap = curr_px < vwap`,
`leg_rsi_literal = rsi14 < 30` (canon's literal oversold buy condition),
`leg_rsi_lenient = 30 <= rsi14 <= 70` (not overbought, an alternate reading).

| Reading | 2-of-3 satisfied | % of 441 evaluable |
|---|---|---|
| Literal (`leg_rsi_literal`) | 115 | 26.1% |
| Lenient (`leg_rsi_lenient`) | 270 | 61.2% |

**The literal 2-of-3 confluence rule is satisfiable** on this universe,
contrary to what its near-0% RSI-oversold hit rate alone would suggest: it
is easily met by the SMA + VWAP legs combining without RSI ever needing to
be below 30. The confluence rule is not the bottleneck; the setup-scan grade
computation is.

## Cross-check against production

Compared this replay's 14:30 ET Setup B hit set (closest sample to
production's actual fire times) against every saved
`data/setup-scan_cloud_*.json` file in the window (56 files, both the ~16:3x
and ~18:3x ET runs on each production day). **All 56 files agree exactly**
(same symbol set, same count) once the volume gate above is applied; before
adding that gate, every single file disagreed (this replay was over-counting
by 3-5x). This is strong evidence the replay's math matches production's
math bar-for-bar.

## Verdict: too strict, or broken?

Both, in different setups. Setup A is too strict: its daily breakout leg is
perfectly achievable (62 hits, 13.5% of gated slots) but its intraday leg
demands the current price simultaneously clear both the premarket high and
the running intraday high, a bar that coincided with the daily leg zero
times in 42 days regardless of what time of day it was checked, so moving
the scan in-session did not rescue it: the constraint itself, not the
15:30 clock gate, is what makes Setup A unreachable. Setup C is closer to
broken for this universe: it requires an oversold RSI reading during a
price still above its 200-day average, and on a 60-name universe skewed
toward small-cap momentum and defense/space/AI names, that combination
essentially never coexists with Setup B's trend-confirmation condition
(0 of 460 slots at any tested RSI cutoff up to 40), because trend-following
and mean-reversion setups are close to structurally disjoint by definition
here. The practical result is that grade A (2+ setups) is not "rare", it is
unreachable under the current definitions independent of scan timing, while
Setup B alone already fires at a workable cadence (126 raw hits, about
63 distinct symbol-days, roughly 7.5/week) that the bot has been silently
generating as grade-B all along without ever promoting it.

## Recommended default

Redefine "grade A" as **Setup B tightened**: `ADX14 > 25 AND EMA9 > EMA21
AND curr_px > SMA200` (alternative (c) above), evaluated at the new
in-session fire times (11:30 ET, 14:30 ET) so it is checked while still
actionable rather than after the close. This produced 60 hits over 42
trading days, about **7.1 candidates/week**, comfortably above the
strategy's 3-new-trades/week cap so there is a real pool to pick the best
from, and nowhere near a flood. Keep Setup A and Setup C as secondary,
non-blocking signals (still logged, still worth a size or conviction bump
when either happens to align) rather than as required co-confirmations,
since requiring either one to also fire is what makes the grade
unreachable. Layer the strategy's existing confluence rule and documented
catalyst requirement on top as the final filter before sizing, per
`memory/TRADING-STRATEGY.md`; the confluence proxy above shows that filter
is not itself the bottleneck (26-61% satisfiable depending on the RSI
reading), so it will not choke off this larger candidate pool.
