#!/usr/bin/env node
// strategy-lab.mjs — bar-by-bar strategy simulator + parameter tuner.
// Fetches real Alpaca daily bars and simulates one of the 6 supported
// families (rsi, bollinger, macd, ema_cross, supertrend, donchian) with
// tunable numeric params, since the tradingview-data MCP's backtest tools
// accept no indicator parameters. No npm deps (Node 18+ global fetch).
//
// Usage:
//   node scripts/strategy-lab.mjs SYMBOL FAMILY PERIOD [--stop=N] [--target=N]
//     [--trail=N] [--tune] [--param=key:val,key2:val2]
//
// PERIOD: 1mo | 3mo | 6mo | 1y | 2y (same values as the MCP tool).
// Prints one JSON object to stdout.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const COMMISSION = 0.001; // 0.1% per fill — matches MCP backtest_strategy default
const SLIPPAGE = 0.0005;  // 0.05% per fill — matches MCP backtest_strategy default

// ---------------------------------------------------------------------------
// env + error handling (same pattern as scripts/risk.mjs)
// ---------------------------------------------------------------------------

function loadEnv() {
  let text = '';
  try { text = readFileSync(join(ROOT, '.env'), 'utf8'); } catch { return; }
  for (const line of text.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq < 1) continue;
    const key = t.slice(0, eq).trim();
    const val = t.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
    if (!(key in process.env)) process.env[key] = val; // process.env wins
  }
}

function fail(msg, err) {
  process.stderr.write(`strategy-lab.mjs error: ${msg}\n`);
  if (err && /certificate|CERT_|unable to verify|self.signed/i.test(String(err && err.cause ? err.cause : err))) {
    process.stderr.write('hint: this machine intercepts HTTPS — set NODE_EXTRA_CA_CERTS to the local CA bundle and re-run.\n');
  }
  process.exit(1);
}

const r2 = (x) => Math.round(x * 100) / 100;
const r4 = (x) => Math.round(x * 10000) / 10000;

// ---------------------------------------------------------------------------
// Alpaca data fetch
// ---------------------------------------------------------------------------

async function alpacaJson(url, headers) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

function periodToDays(period) {
  const map = { '1mo': 30, '3mo': 90, '6mo': 180, '1y': 365, '2y': 730 };
  if (!(period in map)) throw new Error(`unknown period "${period}" — use one of 1mo,3mo,6mo,1y,2y`);
  return map[period];
}

async function fetchDailyBars(sym, period, headers, dataBase) {
  const end = new Date(Date.now() - 24 * 3600 * 1000).toISOString(); // yesterday — avoid partial current-day bar
  const start = new Date(Date.now() - (periodToDays(period) + 5) * 24 * 3600 * 1000).toISOString();
  let url = `${dataBase}/stocks/${sym}/bars?timeframe=1Day&start=${start}&end=${end}&limit=10000&feed=iex&adjustment=raw`;
  const bars = [];
  for (;;) {
    const data = await alpacaJson(url, headers);
    for (const b of data.bars || []) bars.push({ t: b.t, o: b.o, h: b.h, l: b.l, c: b.c, v: b.v });
    if (!data.next_page_token) break;
    url = `${dataBase}/stocks/${sym}/bars?timeframe=1Day&start=${start}&end=${end}&limit=10000&feed=iex&adjustment=raw&page_token=${data.next_page_token}`;
  }
  if (bars.length < 30) throw new Error(`only ${bars.length} daily bars for ${sym}/${period} — not enough history to simulate`);
  return bars;
}

// ---------------------------------------------------------------------------
// Indicators — plain arithmetic, no libraries. Every array is index-aligned
// to the input closes/bars array; entries before enough history are `null`.
// ---------------------------------------------------------------------------

function sma(values, n) {
  const out = new Array(values.length).fill(null);
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
    if (i >= n) sum -= values[i - n];
    if (i >= n - 1) out[i] = sum / n;
  }
  return out;
}

function ema(values, n) {
  const out = new Array(values.length).fill(null);
  const k = 2 / (n + 1);
  let prev = null;
  for (let i = 0; i < values.length; i++) {
    if (i < n - 1) continue;
    if (i === n - 1) {
      let sum = 0;
      for (let j = 0; j < n; j++) sum += values[j];
      prev = sum / n;
    } else {
      prev = values[i] * k + prev * (1 - k);
    }
    out[i] = prev;
  }
  return out;
}

function rsi(closes, n) {
  const out = new Array(closes.length).fill(null);
  if (closes.length < n + 1) return out;
  let gainSum = 0, lossSum = 0;
  for (let i = 1; i <= n; i++) {
    const diff = closes[i] - closes[i - 1];
    if (diff >= 0) gainSum += diff; else lossSum -= diff;
  }
  let avgGain = gainSum / n, avgLoss = lossSum / n;
  out[n] = avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss);
  for (let i = n + 1; i < closes.length; i++) {
    const diff = closes[i] - closes[i - 1];
    const gain = diff > 0 ? diff : 0, loss = diff < 0 ? -diff : 0;
    avgGain = (avgGain * (n - 1) + gain) / n;
    avgLoss = (avgLoss * (n - 1) + loss) / n;
    out[i] = avgLoss === 0 ? 100 : 100 - 100 / (1 + avgGain / avgLoss);
  }
  return out;
}

function macd(closes, fast, slow, signal) {
  const emaFast = ema(closes, fast), emaSlow = ema(closes, slow);
  const macdLine = closes.map((_, i) => (emaFast[i] != null && emaSlow[i] != null) ? emaFast[i] - emaSlow[i] : null);
  const validStart = macdLine.findIndex((v) => v != null);
  const signalLine = new Array(closes.length).fill(null);
  if (validStart >= 0) {
    const sub = macdLine.slice(validStart);
    const subEma = ema(sub, signal);
    for (let i = 0; i < subEma.length; i++) if (subEma[i] != null) signalLine[validStart + i] = subEma[i];
  }
  const histogram = closes.map((_, i) => (macdLine[i] != null && signalLine[i] != null) ? macdLine[i] - signalLine[i] : null);
  return { macdLine, signalLine, histogram };
}

function bollinger(closes, n, k) {
  const mid = sma(closes, n);
  const upper = new Array(closes.length).fill(null), lower = new Array(closes.length).fill(null);
  for (let i = 0; i < closes.length; i++) {
    if (mid[i] == null) continue;
    let sumSq = 0;
    for (let j = i - n + 1; j <= i; j++) sumSq += (closes[j] - mid[i]) ** 2;
    const sd = Math.sqrt(sumSq / n);
    upper[i] = mid[i] + k * sd;
    lower[i] = mid[i] - k * sd;
  }
  return { mid, upper, lower };
}

function atr(bars, n) {
  const trs = bars.map((b, i) => i === 0 ? b.h - b.l : Math.max(b.h - b.l, Math.abs(b.h - bars[i - 1].c), Math.abs(b.l - bars[i - 1].c)));
  const out = new Array(bars.length).fill(null);
  if (bars.length < n) return out;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += trs[i];
  let prev = sum / n;
  out[n - 1] = prev;
  for (let i = n; i < bars.length; i++) {
    prev = (prev * (n - 1) + trs[i]) / n;
    out[i] = prev;
  }
  return out;
}

function rollingExtreme(values, n, i, cmp) {
  if (i - n < 0) return null;
  let m = values[i - n];
  for (let j = i - n + 1; j < i; j++) if (cmp(values[j], m)) m = values[j];
  return m;
}

function supertrend(bars, atrArr, multiplier) {
  const n = bars.length;
  const finalUpper = new Array(n).fill(null), finalLower = new Array(n).fill(null);
  const st = new Array(n).fill(null), dir = new Array(n).fill(null); // dir: 1 uptrend, -1 downtrend
  for (let i = 0; i < n; i++) {
    if (atrArr[i] == null) continue;
    const hl2 = (bars[i].h + bars[i].l) / 2;
    const basicUpper = hl2 + multiplier * atrArr[i];
    const basicLower = hl2 - multiplier * atrArr[i];
    if (finalUpper[i - 1] == null) {
      finalUpper[i] = basicUpper; finalLower[i] = basicLower;
      dir[i] = bars[i].c <= finalUpper[i] ? -1 : 1;
      st[i] = dir[i] === 1 ? finalLower[i] : finalUpper[i];
      continue;
    }
    finalUpper[i] = (basicUpper < finalUpper[i - 1] || bars[i - 1].c > finalUpper[i - 1]) ? basicUpper : finalUpper[i - 1];
    finalLower[i] = (basicLower > finalLower[i - 1] || bars[i - 1].c < finalLower[i - 1]) ? basicLower : finalLower[i - 1];
    dir[i] = (st[i - 1] === finalUpper[i - 1]) ? (bars[i].c > finalUpper[i] ? 1 : -1) : (bars[i].c < finalLower[i] ? -1 : 1);
    st[i] = dir[i] === 1 ? finalLower[i] : finalUpper[i];
  }
  return { st, dir };
}

// ---------------------------------------------------------------------------
// Family entry/exit signals — precomputed once over the FULL bar array so
// train/test slices share causal (no-lookahead) indicator warmup.
// ---------------------------------------------------------------------------

function buildSignals(bars, family, params) {
  const closes = bars.map((b) => b.c);
  const n = bars.length;
  const entry = new Array(n).fill(false), exit = new Array(n).fill(false);
  const crossUp = (prev, cur, level) => prev != null && cur != null && prev <= level && cur > level;
  const crossDown = (prev, cur, level) => prev != null && cur != null && prev >= level && cur < level;

  if (family === 'rsi') {
    const r = rsi(closes, params.length);
    for (let i = 1; i < n; i++) {
      entry[i] = crossDown(r[i - 1], r[i], params.oversold);
      exit[i] = crossUp(r[i - 1], r[i], params.overbought);
    }
  } else if (family === 'bollinger') {
    const { mid, lower } = bollinger(closes, params.length, params.stddev);
    for (let i = 1; i < n; i++) {
      entry[i] = lower[i] != null && lower[i - 1] != null && closes[i - 1] >= lower[i - 1] && closes[i] < lower[i];
      exit[i] = mid[i] != null && mid[i - 1] != null && closes[i - 1] <= mid[i - 1] && closes[i] > mid[i];
    }
  } else if (family === 'macd') {
    const { macdLine, signalLine } = macd(closes, params.fast, params.slow, params.signal);
    for (let i = 1; i < n; i++) {
      const have = macdLine[i - 1] != null && signalLine[i - 1] != null && macdLine[i] != null && signalLine[i] != null;
      entry[i] = have && macdLine[i - 1] <= signalLine[i - 1] && macdLine[i] > signalLine[i];
      exit[i] = have && macdLine[i - 1] >= signalLine[i - 1] && macdLine[i] < signalLine[i];
    }
  } else if (family === 'ema_cross') {
    const short = ema(closes, params.short), long = ema(closes, params.long);
    for (let i = 1; i < n; i++) {
      entry[i] = short[i - 1] != null && long[i - 1] != null && short[i] != null && long[i] != null &&
        short[i - 1] <= long[i - 1] && short[i] > long[i];
      exit[i] = short[i - 1] != null && long[i - 1] != null && short[i] != null && long[i] != null &&
        short[i - 1] >= long[i - 1] && short[i] < long[i];
    }
  } else if (family === 'supertrend') {
    const atrArr = atr(bars, params.atr_length);
    const { dir } = supertrend(bars, atrArr, params.multiplier);
    for (let i = 1; i < n; i++) {
      entry[i] = dir[i - 1] === -1 && dir[i] === 1;
      exit[i] = dir[i - 1] === 1 && dir[i] === -1;
    }
  } else if (family === 'donchian') {
    const highs = bars.map((b) => b.h), lows = bars.map((b) => b.l);
    for (let i = 1; i < n; i++) {
      const hh = rollingExtreme(highs, params.length, i, (a, b) => a > b);
      const ll = rollingExtreme(lows, params.length, i, (a, b) => a < b);
      entry[i] = hh != null && closes[i] > hh;
      exit[i] = ll != null && closes[i] < ll;
    }
  } else {
    throw new Error(`unknown family "${family}"`);
  }
  return { entry, exit };
}

// ---------------------------------------------------------------------------
// Simulator — long-only, one position at a time. Applies commission +
// slippage per fill (entry and exit). Priority on exit: stop > trailing >
// target > signal reversal (worst-case-first, matches conservative backtest
// convention).
// ---------------------------------------------------------------------------

function simulateRange(bars, signals, spec, startIdx, endIdx) {
  let equity = 1.0;
  let position = null;
  const trades = [];
  const equityCurve = [];

  const closeTrade = (i, exitPriceRaw, exitReason) => {
    const bar = bars[i];
    const exitPriceEff = exitPriceRaw * (1 - SLIPPAGE);
    equity = position.entryEquityBasis * (exitPriceEff / position.entryPriceEff) * (1 - COMMISSION);
    const pnlPct = (equity / position.E0 - 1) * 100;
    trades.push({
      entry_date: bars[position.entryIdx].t.slice(0, 10), entry_price: r2(position.entryPriceRaw),
      exit_date: bar.t.slice(0, 10), exit_price: r2(exitPriceRaw), exit_reason: exitReason, pnl_pct: r2(pnlPct),
    });
    position = null;
  };

  for (let i = startIdx; i <= endIdx; i++) {
    const bar = bars[i];
    if (position) {
      position.highWaterMark = Math.max(position.highWaterMark, bar.h);
      const stopPrice = spec.stop_pct != null ? position.entryPriceEff * (1 - spec.stop_pct / 100) : null;
      const targetPrice = spec.target_pct != null ? position.entryPriceEff * (1 + spec.target_pct / 100) : null;
      const trailPrice = spec.trailing_pct != null ? position.highWaterMark * (1 - spec.trailing_pct / 100) : null;

      if (stopPrice != null && bar.l <= stopPrice) closeTrade(i, stopPrice, 'stop_pct');
      else if (trailPrice != null && bar.l <= trailPrice) closeTrade(i, trailPrice, 'trailing_pct');
      else if (targetPrice != null && bar.h >= targetPrice) closeTrade(i, targetPrice, 'target_pct');
      else if (signals.exit[i]) closeTrade(i, bar.c, 'signal');

      equityCurve.push({ date: bar.t.slice(0, 10), equity: r4(position ? position.entryEquityBasis * (bar.c / position.entryPriceEff) : equity) });
    } else {
      equityCurve.push({ date: bar.t.slice(0, 10), equity: r4(equity) });
      if (signals.entry[i]) {
        const entryPriceRaw = bar.c;
        const entryPriceEff = entryPriceRaw * (1 + SLIPPAGE);
        position = { entryIdx: i, entryPriceRaw, entryPriceEff, E0: equity, entryEquityBasis: equity * (1 - COMMISSION), highWaterMark: bar.h };
      }
    }
  }
  if (position) closeTrade(endIdx, bars[endIdx].c, 'end_of_period');
  if (equityCurve.length) equityCurve[equityCurve.length - 1].equity = r4(equity);

  return { trades, equityCurve, finalEquity: equity };
}

function computeMetrics(sim, bars, startIdx, endIdx) {
  const { trades, equityCurve, finalEquity } = sim;
  const rets = [];
  let prev = 1.0;
  for (const pt of equityCurve) { rets.push(pt.equity / prev - 1); prev = pt.equity; }
  const meanRet = rets.length ? rets.reduce((a, b) => a + b, 0) / rets.length : 0;
  const variance = rets.length > 1 ? rets.reduce((a, b) => a + (b - meanRet) ** 2, 0) / (rets.length - 1) : 0;
  const sd = Math.sqrt(variance);
  const sharpe = sd > 0 ? (meanRet / sd) * Math.sqrt(252) : 0;

  let peak = 1.0, maxDd = 0;
  for (const pt of equityCurve) { peak = Math.max(peak, pt.equity); maxDd = Math.min(maxDd, (pt.equity / peak - 1) * 100); }

  const wins = trades.filter((t) => t.pnl_pct > 0).length;
  const buyHold = (bars[endIdx].c / bars[startIdx].c - 1) * 100;

  return {
    total_return_pct: r2((finalEquity - 1) * 100),
    sharpe_ratio: r2(sharpe),
    max_drawdown_pct: r2(maxDd),
    win_rate_pct: trades.length ? r2((wins / trades.length) * 100) : 0,
    num_trades: trades.length,
    buy_and_hold_pct: r2(buyHold),
    trades,
    equity_curve: equityCurve,
  };
}

// ---------------------------------------------------------------------------
// Config-derived defaults (config/rules.json) — no hardcoded magic numbers.
// ---------------------------------------------------------------------------

function loadRiskDefaults() {
  try {
    const rules = JSON.parse(readFileSync(join(ROOT, 'config', 'rules.json'), 'utf8'));
    const rr = rules.risk_rules || {};
    const er = rules.entry_rules || {};
    const stop = Math.abs(rr.manual_cut_loser_at_pct ?? 7);
    const trail = rr.trailing_stop_pct_default ?? 10;
    const target = r2(stop * (er.min_rr_ratio ?? 2.0));
    return { stop_pct: stop, target_pct: target, trailing_pct: trail, source: 'config/rules.json' };
  } catch {
    return { stop_pct: 7, target_pct: 14, trailing_pct: 10, source: 'fallback (config/rules.json unreadable)' };
  }
}

function familyDefaultParams(family) {
  const table = {
    rsi: { length: 14, oversold: 30, overbought: 70 },
    bollinger: { length: 20, stddev: 2 },
    macd: { fast: 12, slow: 26, signal: 9 },
    ema_cross: { short: 20, long: 50 },
    supertrend: { atr_length: 10, multiplier: 3 },
    donchian: { length: 20 },
  };
  if (!(family in table)) throw new Error(`unknown family "${family}" — use one of rsi,bollinger,macd,ema_cross,supertrend,donchian`);
  return { ...table[family] };
}

function tuneGrid(family) {
  const grids = {
    rsi: [10, 14, 21].flatMap((length) => [[20, 80], [30, 70]].map(([oversold, overbought]) => ({ length, oversold, overbought }))),
    bollinger: [10, 20, 30].flatMap((length) => [1.5, 2, 2.5].map((stddev) => ({ length, stddev }))),
    macd: [[8, 17], [12, 26], [19, 39]].flatMap(([fast, slow]) => [9, 12].map((signal) => ({ fast, slow, signal }))),
    ema_cross: [10, 20, 50].flatMap((short) => [50, 100, 200].filter((long) => long > short).map((long) => ({ short, long }))),
    supertrend: [7, 10, 14].flatMap((atr_length) => [2, 3, 4].map((multiplier) => ({ atr_length, multiplier }))),
    donchian: [10, 20, 55].map((length) => ({ length })),
  };
  return grids[family];
}

// ---------------------------------------------------------------------------
// Verdict — same discipline as .claude/commands/backtest.md: 0 out-of-sample
// trades is never ROBUST no matter how good the Sharpe looks.
// ---------------------------------------------------------------------------

function verdictFor(inSharpe, oosSharpe, oosTrades) {
  if (oosTrades === 0) return { verdict: 'WEAK', reason: '0 out-of-sample trades — signal never fired forward, Sharpe is not real' };
  if (oosSharpe <= 0) return { verdict: 'OVERFITTED', reason: `out-of-sample Sharpe ${r2(oosSharpe)} <= 0 — fails out-of-sample` };
  if (inSharpe <= 0) return { verdict: 'MODERATE', reason: 'in-sample Sharpe non-positive, cannot compute degradation ratio; oos alone is positive' };
  const ratio = oosSharpe / inSharpe;
  if (ratio >= 0.5 && oosSharpe >= 1) return { verdict: 'ROBUST', reason: `oos Sharpe ${r2(oosSharpe)} retains ${r2(ratio * 100)}% of in-sample ${r2(inSharpe)}, both healthy` };
  if (ratio >= 0.5) return { verdict: 'MODERATE', reason: `oos retains ${r2(ratio * 100)}% of in-sample Sharpe but oos Sharpe < 1` };
  return { verdict: 'WEAK', reason: `oos Sharpe ${r2(oosSharpe)} is only ${r2(ratio * 100)}% of in-sample ${r2(inSharpe)} — likely overfit` };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const positional = argv.filter((a) => !a.startsWith('--'));
  const [symbol, family, period] = positional;
  if (!symbol || !family || !period) {
    throw new Error('usage: node scripts/strategy-lab.mjs SYMBOL FAMILY PERIOD [--stop=N] [--target=N] [--trail=N] [--tune] [--param=key:val,...]');
  }
  const flags = {};
  for (const a of argv.filter((a) => a.startsWith('--'))) {
    const [k, v] = a.slice(2).split(/=(.*)/s);
    flags[k] = v === undefined ? true : v;
  }
  const paramOverrides = {};
  if (flags.param) {
    for (const pair of String(flags.param).split(',')) {
      const [k, v] = pair.split(':');
      if (k && v !== undefined) paramOverrides[k.trim()] = Number(v);
    }
  }
  return {
    symbol: symbol.toUpperCase(),
    family: family.toLowerCase(),
    period: period.toLowerCase(),
    stop_pct: flags.stop !== undefined ? Number(flags.stop) : null,
    target_pct: flags.target !== undefined ? Number(flags.target) : null,
    trailing_pct: flags.trail !== undefined ? Number(flags.trail) : null,
    tune: !!flags.tune,
    paramOverrides,
  };
}

async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  const key = process.env.ALPACA_API_KEY || process.env.APCA_API_KEY_ID;
  const secret = process.env.ALPACA_SECRET_KEY || process.env.APCA_API_SECRET_KEY;
  if (!key || !secret) fail('ALPACA_API_KEY / ALPACA_SECRET_KEY not set (checked process.env and .env)');
  const headers = { 'APCA-API-KEY-ID': key, 'APCA-API-SECRET-KEY': secret };
  const dataBase = process.env.ALPACA_DATA_ENDPOINT || 'https://data.alpaca.markets/v2';

  const riskDefaults = loadRiskDefaults();
  const spec = {
    stop_pct: args.stop_pct ?? riskDefaults.stop_pct,
    target_pct: args.target_pct ?? riskDefaults.target_pct,
    trailing_pct: args.trailing_pct ?? riskDefaults.trailing_pct,
  };

  const bars = await fetchDailyBars(args.symbol, args.period, headers, dataBase);

  if (!args.tune) {
    const params = { ...familyDefaultParams(args.family), ...args.paramOverrides };
    const signals = buildSignals(bars, args.family, params);
    const sim = simulateRange(bars, signals, spec, 0, bars.length - 1);
    const metrics = computeMetrics(sim, bars, 0, bars.length - 1);
    console.log(JSON.stringify({
      symbol: args.symbol, family: args.family, period: args.period, mode: 'single',
      bars_used: bars.length, params, ...spec, defaults_source: riskDefaults.source,
      ...metrics,
    }, null, 2));
    return;
  }

  // --tune: 70/30 chronological train/test split (matches walk_forward_backtest_strategy's train_ratio default)
  const trainEnd = Math.floor(bars.length * 0.7) - 1;
  const testStart = trainEnd + 1;
  if (testStart >= bars.length - 1) fail(`not enough bars (${bars.length}) for a 70/30 train/test split on ${args.period}`);

  const grid = tuneGrid(args.family);
  const candidates = grid.map((params) => {
    const signals = buildSignals(bars, args.family, params);
    const trainSim = computeMetrics(simulateRange(bars, signals, spec, 0, trainEnd), bars, 0, trainEnd);
    const testSim = computeMetrics(simulateRange(bars, signals, spec, testStart, bars.length - 1), bars, testStart, bars.length - 1);
    return { params, in_sample_sharpe: trainSim.sharpe_ratio, oos_sharpe: testSim.sharpe_ratio, oos_trades: testSim.num_trades, trainSim, testSim };
  });

  candidates.sort((a, b) => b.oos_sharpe - a.oos_sharpe);
  const winner = candidates[0];
  const { verdict, reason } = verdictFor(winner.in_sample_sharpe, winner.oos_sharpe, winner.oos_trades);

  console.log(JSON.stringify({
    symbol: args.symbol, family: args.family, period: args.period, mode: 'tune',
    bars_used: bars.length, train_bars: trainEnd + 1, test_bars: bars.length - testStart,
    grid_size: grid.length, winning_params: winner.params, ...spec, defaults_source: riskDefaults.source,
    in_sample: { ...winner.trainSim, trades: winner.trainSim.trades.length, equity_curve: undefined },
    out_of_sample: winner.testSim,
    verdict, verdict_reason: reason,
    all_candidates: candidates.map((c) => ({ params: c.params, in_sample_sharpe: c.in_sample_sharpe, oos_sharpe: c.oos_sharpe, oos_trades: c.oos_trades })),
  }, null, 2));
}

main().catch((e) => fail(e.message || String(e), e));
