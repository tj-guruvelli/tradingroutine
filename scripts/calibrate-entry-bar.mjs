#!/usr/bin/env node
// calibrate-entry-bar.mjs — one-off calibration backtest.
//
// Question: setup-scan-cloud.mjs's 61 production runs all fired after 15:30 ET,
// so Setup A's 10:00-15:30 ET gate never evaluated and grade A (2+ setups) never
// occurred. This replays Setup A/B/C over history at the NEW in-session fire
// times (11:30 ET, 14:30 ET) to see what the scanner WOULD have found.
//
// Indicator math (sma/ema/rsi/adx) and Setup A/B/C definitions are copied
// verbatim from scripts/setup-scan-cloud.mjs (read-only reference — that file
// is not modified by this script; it is changing concurrently on main).
//
// Read-only: fetches Alpaca market data only, places no orders.
//
// Usage: node scripts/calibrate-entry-bar.mjs [--start YYYY-MM-DD] [--end YYYY-MM-DD]
// Writes:
//   data/calibration/raw/*.json        — cached raw Alpaca responses (reruns cheap)
//   data/calibration/summary.json      — machine-readable results
// Prints per-day + aggregate stats, then the sensitivity/confluence tables.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const RAW_DIR = join(ROOT, 'data', 'calibration', 'raw');
const OUT_DIR = join(ROOT, 'data', 'calibration');
const SAMPLE_TIMES = ['11:30', '14:30']; // new in-session production fire times

// ---------------------------------------------------------------------------
// env + http (same retry/backoff pattern as scripts/setup-scan-cloud.mjs)
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
    if (!(key in process.env)) process.env[key] = val;
  }
}

function fail(msg) {
  process.stderr.write(`calibrate-entry-bar.mjs error: ${msg}\n`);
  process.exit(1);
}

const r2 = (x) => (x == null || Number.isNaN(x) ? null : Math.round(x * 100) / 100);
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);

async function alpacaJson(url, headers, attempt = 1) {
  const MAX_ATTEMPTS = 6;
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      if ((res.status === 429 || res.status === 503) && attempt < MAX_ATTEMPTS) {
        await new Promise((r) => setTimeout(r, 800 * attempt));
        return alpacaJson(url, headers, attempt + 1);
      }
      throw new Error(`HTTP ${res.status} for ${url}: ${(await res.text()).slice(0, 300)}`);
    }
    return res.json();
  } catch (e) {
    if (attempt < MAX_ATTEMPTS && /fetch failed|DNS|ECONNRESET|ETIMEDOUT|network/i.test(String(e && e.cause ? e.cause : e.message || e))) {
      await new Promise((r) => setTimeout(r, 500 * attempt));
      return alpacaJson(url, headers, attempt + 1);
    }
    throw e;
  }
}

function cacheRead(name) {
  const p = join(RAW_DIR, name);
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return null; }
}
function cacheWrite(name, obj) {
  mkdirSync(RAW_DIR, { recursive: true });
  writeFileSync(join(RAW_DIR, name), JSON.stringify(obj));
}

// ---------------------------------------------------------------------------
// Indicators — copied verbatim from scripts/setup-scan-cloud.mjs
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

function adx(bars, n) {
  const len = bars.length;
  const tr = new Array(len).fill(null);
  const plusDM = new Array(len).fill(null);
  const minusDM = new Array(len).fill(null);
  for (let i = 1; i < len; i++) {
    const upMove = bars[i].h - bars[i - 1].h;
    const downMove = bars[i - 1].l - bars[i].l;
    plusDM[i] = (upMove > downMove && upMove > 0) ? upMove : 0;
    minusDM[i] = (downMove > upMove && downMove > 0) ? downMove : 0;
    tr[i] = Math.max(
      bars[i].h - bars[i].l,
      Math.abs(bars[i].h - bars[i - 1].c),
      Math.abs(bars[i].l - bars[i - 1].c),
    );
  }
  const plusDI = new Array(len).fill(null);
  const minusDI = new Array(len).fill(null);
  const dx = new Array(len).fill(null);
  const adxOut = new Array(len).fill(null);
  if (len < 2 * n) return adxOut;

  let smoothedTR = 0, smoothedPlusDM = 0, smoothedMinusDM = 0;
  for (let i = 1; i <= n; i++) {
    smoothedTR += tr[i];
    smoothedPlusDM += plusDM[i];
    smoothedMinusDM += minusDM[i];
  }
  plusDI[n] = smoothedTR === 0 ? 0 : (100 * smoothedPlusDM) / smoothedTR;
  minusDI[n] = smoothedTR === 0 ? 0 : (100 * smoothedMinusDM) / smoothedTR;
  dx[n] = (plusDI[n] + minusDI[n]) === 0 ? 0 : (100 * Math.abs(plusDI[n] - minusDI[n])) / (plusDI[n] + minusDI[n]);

  for (let i = n + 1; i < len; i++) {
    smoothedTR = smoothedTR - smoothedTR / n + tr[i];
    smoothedPlusDM = smoothedPlusDM - smoothedPlusDM / n + plusDM[i];
    smoothedMinusDM = smoothedMinusDM - smoothedMinusDM / n + minusDM[i];
    plusDI[i] = smoothedTR === 0 ? 0 : (100 * smoothedPlusDM) / smoothedTR;
    minusDI[i] = smoothedTR === 0 ? 0 : (100 * smoothedMinusDM) / smoothedTR;
    dx[i] = (plusDI[i] + minusDI[i]) === 0 ? 0 : (100 * Math.abs(plusDI[i] - minusDI[i])) / (plusDI[i] + minusDI[i]);
  }

  let sumDX = 0;
  for (let i = n; i < 2 * n; i++) sumDX += dx[i];
  adxOut[2 * n - 1] = sumDX / n;
  for (let i = 2 * n; i < len; i++) {
    adxOut[i] = (adxOut[i - 1] * (n - 1) + dx[i]) / n;
  }
  return adxOut;
}

// ---------------------------------------------------------------------------
// NY time helpers
// ---------------------------------------------------------------------------

function nyOffsetStringFor(dateIsoDay) {
  // dateIsoDay: 'YYYY-MM-DD'. Use noon UTC on that day to get the correct DST offset.
  const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', timeZoneName: 'shortOffset' });
  const part = fmt.formatToParts(new Date(`${dateIsoDay}T12:00:00Z`)).find((p) => p.type === 'timeZoneName').value;
  const m = part.match(/GMT([+-]\d+)/);
  const hoursOffset = m ? parseInt(m[1], 10) : -5;
  const sign = hoursOffset >= 0 ? '+' : '-';
  const abs = String(Math.abs(hoursOffset)).padStart(2, '0');
  return `${sign}${abs}:00`;
}

function nyHourMinute(isoUtc) {
  const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour12: false, hour: '2-digit', minute: '2-digit' });
  const parts = Object.fromEntries(fmt.formatToParts(new Date(isoUtc)).map((p) => [p.type, p.value]));
  if (parts.hour === '24') parts.hour = '00';
  return `${parts.hour}:${parts.minute}`;
}

function nyDateString(isoUtc) {
  const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' });
  const parts = Object.fromEntries(fmt.formatToParts(new Date(isoUtc)).map((p) => [p.type, p.value]));
  return `${parts.year}-${parts.month}-${parts.day}`;
}

// ---------------------------------------------------------------------------
// Alpaca fetch helpers (batched multi-symbol where available)
// ---------------------------------------------------------------------------

async function fetchCalendar(apiBase, headers, start, end) {
  const cacheName = `calendar_${start}_${end}.json`;
  const cached = cacheRead(cacheName);
  if (cached) return cached;
  const data = await alpacaJson(`${apiBase}/calendar?start=${start}&end=${end}`, headers);
  cacheWrite(cacheName, data);
  return data;
}

// Fetches multi-symbol daily bars in one batched, paginated call.
async function fetchDailyBarsBatch(dataBase, headers, symbols, start, end) {
  const cacheName = `daily_bars_${start}_${end}.json`;
  const cached = cacheRead(cacheName);
  if (cached) return cached;
  const bars = {};
  for (const s of symbols) bars[s] = [];
  let url = `${dataBase}/stocks/bars?symbols=${symbols.join(',')}&timeframe=1Day&start=${start}&end=${end}&limit=10000&feed=iex&adjustment=raw`;
  for (;;) {
    const data = await alpacaJson(url, headers);
    for (const [sym, sbars] of Object.entries(data.bars || {})) {
      if (!bars[sym]) bars[sym] = [];
      for (const b of sbars) bars[sym].push({ t: b.t, o: b.o, h: b.h, l: b.l, c: b.c, v: b.v });
    }
    if (!data.next_page_token) break;
    url = `${dataBase}/stocks/bars?symbols=${symbols.join(',')}&timeframe=1Day&start=${start}&end=${end}&limit=10000&feed=iex&adjustment=raw&page_token=${data.next_page_token}`;
  }
  cacheWrite(cacheName, bars);
  return bars;
}

// Fetches multi-symbol minute bars for one day, batched + paginated.
async function fetchMinuteBarsBatchForDay(dataBase, headers, symbols, day, startIso, endIso) {
  const cacheName = `minute_bars_${day}.json`;
  const cached = cacheRead(cacheName);
  if (cached) return cached;
  const bars = {};
  for (const s of symbols) bars[s] = [];
  let url = `${dataBase}/stocks/bars?symbols=${symbols.join(',')}&timeframe=1Min&start=${startIso}&end=${endIso}&limit=10000&feed=iex&adjustment=raw`;
  for (;;) {
    const data = await alpacaJson(url, headers);
    for (const [sym, sbars] of Object.entries(data.bars || {})) {
      if (!bars[sym]) bars[sym] = [];
      for (const b of sbars) bars[sym].push({ t: b.t, o: b.o, h: b.h, l: b.l, c: b.c, v: b.v });
    }
    if (!data.next_page_token) break;
    url = `${dataBase}/stocks/bars?symbols=${symbols.join(',')}&timeframe=1Min&start=${startIso}&end=${endIso}&limit=10000&feed=iex&adjustment=raw&page_token=${data.next_page_token}`;
  }
  cacheWrite(cacheName, bars);
  return bars;
}

// ---------------------------------------------------------------------------
// Per symbol/day/sample computation
// ---------------------------------------------------------------------------

function computeDailyIndicators(priorBars) {
  if (priorBars.length < 30) return null;
  const closes = priorBars.map((b) => b.c);
  const volumes = priorBars.map((b) => b.v);
  const prevDailyHigh = priorBars[priorBars.length - 1].h;
  const prevDailyClose = priorBars[priorBars.length - 1].c;
  const smaLen = Math.min(200, closes.length);
  const sma200 = mean(closes.slice(-smaLen));
  const rsiArr = rsi(closes, 14);
  const rsi14 = rsiArr[rsiArr.length - 1];
  const ema9Arr = ema(closes, 9);
  const ema21Arr = ema(closes, 21);
  const ema9 = ema9Arr[ema9Arr.length - 1];
  const ema21 = ema21Arr[ema21Arr.length - 1];
  const adxArr = adx(priorBars, 14);
  const adx14 = adxArr[adxArr.length - 1];
  const avgDailyVolume30 = mean(volumes.slice(-30));
  const latestDailyVolume = volumes[volumes.length - 1];
  return { prevDailyHigh, prevDailyClose, sma200, smaLen, rsi14, ema9, ema21, adx14, avgDailyVolume30, latestDailyVolume };
}

function computeSample(dailyInd, minuteBars, sampleHM) {
  const preBars = [], regBars = [];
  for (const b of minuteBars) {
    const hm = nyHourMinute(b.t);
    if (hm >= '04:00' && hm < '09:30') preBars.push(b);
    else if (hm >= '09:30' && hm < sampleHM) regBars.push(b);
  }
  const pmh = preBars.length ? Math.max(...preBars.map((b) => b.h)) : null;
  const premarketVolume = preBars.reduce((a, b) => a + b.v, 0);
  const regBarsExclLast = regBars.length ? regBars.slice(0, -1) : [];
  const todayHod = regBarsExclLast.length ? Math.max(...regBarsExclLast.map((b) => b.h)) : null;
  const currPx = regBars.length ? regBars[regBars.length - 1].c : (dailyInd ? dailyInd.prevDailyClose : null);

  let vwap = null;
  if (regBars.length) {
    let pv = 0, vv = 0;
    for (const b of regBars) {
      const tp = (b.h + b.l + b.c) / 3;
      pv += tp * b.v;
      vv += b.v;
    }
    vwap = vv > 0 ? pv / vv : null;
  }

  return { preBars, regBars, pmh, todayHod, currPx, vwap, premarketVolume };
}

// Volume gate — copied verbatim from setup-scan-cloud.mjs. Symbols failing
// this never reach Setup A/B/C evaluation in production ('excluded_volume_gate').
function passesVolumeGate(dailyInd, sample, sampleHM) {
  const inPremarketHours = sampleHM >= '04:00' && sampleHM < '09:30';
  return sample.premarketVolume >= 50000
    || (!inPremarketHours && dailyInd.avgDailyVolume30 > 0 && dailyInd.latestDailyVolume >= 1.5 * dailyInd.avgDailyVolume30);
}

function gradeSetups(dailyInd, sample, sampleHM, adxThresh, rsiThresh) {
  const { prevDailyHigh, prevDailyClose, sma200, adx14, ema9, ema21 } = dailyInd;
  const { currPx, pmh, todayHod } = sample;

  const dailyBreakout = currPx != null && prevDailyHigh != null && prevDailyClose != null && sma200 != null
    && currPx > prevDailyHigh && prevDailyClose > sma200;
  const setupACheckable = sampleHM >= '10:00' && sampleHM <= '15:30';
  let intradayBreakout = false;
  if (setupACheckable) {
    intradayBreakout = pmh != null && todayHod != null && currPx != null && currPx > pmh && currPx > todayHod;
  }
  const setupA = setupACheckable && dailyBreakout && intradayBreakout;

  const setupB = adx14 != null && ema9 != null && ema21 != null && adx14 > adxThresh && ema9 > ema21;

  const rsi14 = dailyInd.rsi14;
  const setupC = rsi14 != null && rsi14 < rsiThresh && currPx != null && sma200 != null && currPx > sma200;

  const setups = [];
  if (setupA) setups.push('A');
  if (setupB) setups.push('B');
  if (setupC) setups.push('C');
  const grade = setups.length >= 2 ? 'A' : setups.length === 1 ? 'B' : null;

  return { dailyBreakout, setupACheckable, intradayBreakout, setupA, setupB, setupC, setups, grade };
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  loadEnv();
  const args = process.argv.slice(2);
  const argVal = (flag, def) => {
    const i = args.indexOf(flag);
    return i >= 0 && args[i + 1] ? args[i + 1] : def;
  };
  const windowStart = argVal('--start', '2026-07-09');
  const windowEnd = argVal('--end', '2026-09-04');

  const key = process.env.ALPACA_API_KEY;
  const secret = process.env.ALPACA_SECRET_KEY;
  if (!key || !secret) fail('ALPACA_API_KEY / ALPACA_SECRET_KEY not set');
  const headers = { 'APCA-API-KEY-ID': key, 'APCA-API-SECRET-KEY': secret };
  const apiBase = process.env.ALPACA_ENDPOINT || 'https://paper-api.alpaca.markets/v2';
  const dataBase = process.env.ALPACA_DATA_ENDPOINT || 'https://data.alpaca.markets/v2';

  mkdirSync(OUT_DIR, { recursive: true });
  mkdirSync(RAW_DIR, { recursive: true });

  // --- Universe ---------------------------------------------------------
  const rules = JSON.parse(readFileSync(join(ROOT, 'config', 'rules.json'), 'utf8'));
  let universe = rules.watchlist_tiers.immediate.slice();
  const exclusions = [];
  if (universe.includes('KOG.OL')) {
    universe = universe.filter((s) => s !== 'KOG.OL');
    exclusions.push({ symbol: 'KOG.OL', reason: 'excluded per task instructions' });
  } else {
    exclusions.push({ symbol: 'KOG.OL', reason: 'not present in watchlist_tiers.immediate — no exclusion needed' });
  }

  console.log(`Universe: ${universe.length} symbols (before Alpaca-resolvability check)`);

  // --- Trading calendar ---------------------------------------------------
  const calDailyStart = '2025-07-01'; // >380 calendar days before windowStart, generous for indicator warmup
  const calendar = await fetchCalendar(apiBase, headers, calDailyStart, windowEnd);
  const tradingDaysAll = calendar.map((c) => c.date);
  const tradingDaysInWindow = tradingDaysAll.filter((d) => d >= windowStart && d <= windowEnd);
  console.log(`Trading days in window ${windowStart}..${windowEnd}: ${tradingDaysInWindow.length}`);

  // --- Daily bars (batched, single wide fetch covering warmup + window) ---
  const dailyBars = await fetchDailyBarsBatch(dataBase, headers, universe, `${calDailyStart}T00:00:00Z`, `${windowEnd}T00:00:00Z`);

  // Resolve-check: any symbol with zero daily bars across the whole range is unresolved.
  const resolvedUniverse = [];
  for (const sym of universe) {
    const bars = dailyBars[sym] || [];
    if (bars.length === 0) {
      exclusions.push({ symbol: sym, reason: 'Alpaca returned zero daily bars — could not resolve' });
    } else {
      resolvedUniverse.push(sym);
    }
  }
  console.log(`Resolved universe: ${resolvedUniverse.length} symbols. Excluded: ${exclusions.filter((e) => e.symbol !== 'KOG.OL' || universe.length === 0).length}`);
  if (exclusions.length) {
    for (const e of exclusions) console.log(`  exclude ${e.symbol}: ${e.reason}`);
  }

  for (const sym of resolvedUniverse) {
    dailyBars[sym].sort((a, b) => (a.t < b.t ? -1 : 1));
  }

  // --- Per-day, per-sample computation ------------------------------------
  const records = []; // one entry per symbol/day/sample with grade === 'A' or all, for full detail
  const allRecords = []; // every symbol/day/sample, regardless of grade (needed for sensitivity + confluence)
  const perDaySummary = [];

  const DEFAULT_ADX = 20;
  const DEFAULT_RSI = 30;

  for (const day of tradingDaysInWindow) {
    const offset = nyOffsetStringFor(day);
    const dayStartIso = `${day}T04:00:00${offset}`;
    const dayEndIso = `${day}T14:31:00${offset}`; // covers both 11:30 and 14:30 samples
    let minuteBars;
    try {
      minuteBars = await fetchMinuteBarsBatchForDay(dataBase, headers, resolvedUniverse, day, dayStartIso, dayEndIso);
    } catch (e) {
      console.error(`  minute-bar fetch failed for ${day}: ${e.message}`);
      continue;
    }

    const daySummary = { day, samples: {} };

    for (const sampleHM of SAMPLE_TIMES) {
      let numA = 0, numB = 0, numC = 0, numAB = 0, numAC = 0, numBC = 0, numGradeA = 0, numGradeB = 0, numVolGateExcluded = 0;
      let numDailyBreakoutOnly = 0, numIntradayBreakoutOnly = 0;
      const gradeAList = [];

      for (const sym of resolvedUniverse) {
        const priorBars = (dailyBars[sym] || []).filter((b) => b.t.slice(0, 10) < day).slice(-250);
        const dailyInd = computeDailyIndicators(priorBars);
        if (!dailyInd) continue;

        const sample = computeSample(dailyInd, minuteBars[sym] || [], sampleHM);
        if (!passesVolumeGate(dailyInd, sample, sampleHM)) { numVolGateExcluded++; continue; }
        const g = gradeSetups(dailyInd, sample, sampleHM, DEFAULT_ADX, DEFAULT_RSI);

        if (g.setupA) numA++;
        if (g.setupB) numB++;
        if (g.setupC) numC++;
        if (g.dailyBreakout && !g.intradayBreakout) numDailyBreakoutOnly++;
        if (!g.dailyBreakout && g.intradayBreakout) numIntradayBreakoutOnly++;
        if (g.setupA && g.setupB) numAB++;
        if (g.setupA && g.setupC) numAC++;
        if (g.setupB && g.setupC) numBC++;
        if (g.grade === 'A') numGradeA++;
        if (g.grade === 'B') numGradeB++;

        const rec = {
          symbol: sym, day, sample: sampleHM,
          curr_px: r2(sample.currPx), pmh: r2(sample.pmh), today_hod: r2(sample.todayHod),
          vwap: r2(sample.vwap),
          sma200: r2(dailyInd.sma200), rsi14: r2(dailyInd.rsi14), adx14: r2(dailyInd.adx14),
          ema9: r2(dailyInd.ema9), ema21: r2(dailyInd.ema21),
          prev_daily_high: r2(dailyInd.prevDailyHigh), prev_daily_close: r2(dailyInd.prevDailyClose),
          setupA: g.setupA, setupB: g.setupB, setupC: g.setupC, grade: g.grade,
          px_vs_sma200: sample.currPx != null && dailyInd.sma200 != null ? r2(sample.currPx - dailyInd.sma200) : null,
          px_vs_vwap: sample.currPx != null && sample.vwap != null ? r2(sample.currPx - sample.vwap) : null,
          ema9_gt_ema21: dailyInd.ema9 != null && dailyInd.ema21 != null ? dailyInd.ema9 > dailyInd.ema21 : null,
        };
        allRecords.push(rec);
        if (g.grade === 'A') { records.push(rec); gradeAList.push(rec); }
      }

      daySummary.samples[sampleHM] = { numA, numB, numC, numAB, numAC, numBC, numGradeA, numGradeB, numVolGateExcluded, numDailyBreakoutOnly, numIntradayBreakoutOnly, gradeASymbols: gradeAList.map((r) => r.symbol) };
    }
    perDaySummary.push(daySummary);
    console.log(`  ${day}: 11:30 gradeA=${daySummary.samples['11:30'].numGradeA} 14:30 gradeA=${daySummary.samples['14:30'].numGradeA}`);
  }

  // --- Aggregate (default thresholds) -------------------------------------
  const totalGradeA = allRecords.filter((r) => r.grade === 'A').length;
  const daysWithGradeA = perDaySummary.filter((d) => d.samples['11:30'].numGradeA > 0 || d.samples['14:30'].numGradeA > 0).length;
  const aggOverlaps = allRecords.reduce((acc, r) => {
    if (r.setupA) acc.A++;
    if (r.setupB) acc.B++;
    if (r.setupC) acc.C++;
    if (r.setupA && r.setupB) acc.AB++;
    if (r.setupA && r.setupC) acc.AC++;
    if (r.setupB && r.setupC) acc.BC++;
    return acc;
  }, { A: 0, B: 0, C: 0, AB: 0, AC: 0, BC: 0 });
  const aggDailyBreakoutOnly = perDaySummary.reduce((a, d) => a + d.samples['11:30'].numDailyBreakoutOnly + d.samples['14:30'].numDailyBreakoutOnly, 0);
  const aggIntradayBreakoutOnly = perDaySummary.reduce((a, d) => a + d.samples['11:30'].numIntradayBreakoutOnly + d.samples['14:30'].numIntradayBreakoutOnly, 0);
  const aggVolGateExcluded = perDaySummary.reduce((a, d) => a + d.samples['11:30'].numVolGateExcluded + d.samples['14:30'].numVolGateExcluded, 0);

  // --- Sensitivity analysis (recomputed from allRecords' cached raw fields) ---
  function recomputeSetupB(rec, adxThresh) {
    return rec.adx14 != null && rec.ema9 != null && rec.ema21 != null && rec.adx14 > adxThresh && rec.ema9 > rec.ema21;
  }
  function recomputeSetupC(rec, rsiThresh) {
    return rec.rsi14 != null && rec.rsi14 < rsiThresh && rec.curr_px != null && rec.sma200 != null && rec.curr_px > rec.sma200;
  }

  const sensitivity = { adx_threshold: {}, setup_a_alone: 0, setup_b_strict: 0, rsi_threshold: {} };

  for (const thresh of [15, 20, 25]) {
    let count = 0;
    for (const r of allRecords) {
      const b = recomputeSetupB(r, thresh);
      const hits = (r.setupA ? 1 : 0) + (b ? 1 : 0) + (r.setupC ? 1 : 0);
      if (hits >= 2) count++;
    }
    sensitivity.adx_threshold[thresh] = count;
  }

  sensitivity.setup_a_alone = allRecords.filter((r) => r.setupA).length;

  sensitivity.setup_b_strict = allRecords.filter((r) => recomputeSetupB(r, 25) && r.curr_px != null && r.sma200 != null && r.curr_px > r.sma200).length;

  for (const thresh of [30, 35, 40]) {
    let count = 0;
    for (const r of allRecords) {
      const c = recomputeSetupC(r, thresh);
      const hits = (r.setupA ? 1 : 0) + (r.setupB ? 1 : 0) + (c ? 1 : 0);
      if (hits >= 2) count++;
    }
    sensitivity.rsi_threshold[thresh] = count;
  }

  const numTradingWeeks = Math.max(1, tradingDaysInWindow.length / 5);

  // --- Confluence rule proxy ------------------------------------------------
  let literalCount = 0, lenientCount = 0, vwapUnavailable = 0, evaluable = 0;
  for (const r of allRecords) {
    if (r.curr_px == null || r.sma200 == null || r.rsi14 == null) continue;
    if (r.vwap == null) { vwapUnavailable++; continue; }
    evaluable++;
    const legSma = r.curr_px > r.sma200;
    const legRsiLiteral = r.rsi14 < 30;
    const legRsiLenient = r.rsi14 >= 30 && r.rsi14 <= 70;
    const legVwap = r.curr_px < r.vwap;
    const literalHits = (legSma ? 1 : 0) + (legRsiLiteral ? 1 : 0) + (legVwap ? 1 : 0);
    const lenientHits = (legSma ? 1 : 0) + (legRsiLenient ? 1 : 0) + (legVwap ? 1 : 0);
    if (literalHits >= 2) literalCount++;
    if (lenientHits >= 2) lenientCount++;
  }

  // --- Cross-check against production runs --------------------------------
  const crossCheck = [];
  for (const day of tradingDaysInWindow) {
    const candidates = [
      `data/setup-scan_cloud_${day}_1638ET.json`, `data/setup-scan_cloud_${day}_1639ET.json`,
      `data/setup-scan_cloud_${day}_1838ET.json`, `data/setup-scan_cloud_${day}_1839ET.json`,
    ];
    for (const rel of candidates) {
      const p = join(ROOT, rel);
      if (!existsSync(p)) continue;
      let prod;
      try { prod = JSON.parse(readFileSync(p, 'utf8')); } catch { continue; }
      const prodBSet = new Set((prod.hits || []).filter((h) => (h.setups || []).includes('B')).map((h) => h.symbol));
      const ourBSet = new Set(allRecords.filter((r) => r.day === day && r.sample === '14:30' && r.setupB).map((r) => r.symbol));
      const onlyProd = [...prodBSet].filter((s) => !ourBSet.has(s));
      const onlyOurs = [...ourBSet].filter((s) => !prodBSet.has(s));
      crossCheck.push({ file: rel, ny_time: prod.ny_time, prodBCount: prodBSet.size, ourBCount: ourBSet.size, onlyProd, onlyOurs, agree: onlyProd.length === 0 && onlyOurs.length === 0 });
    }
  }

  // --- Write summary.json --------------------------------------------------
  const summary = {
    generated_at: new Date().toISOString(),
    window: { start: windowStart, end: windowEnd, trading_days: tradingDaysInWindow.length },
    universe: { requested: rules.watchlist_tiers.immediate.length, resolved: resolvedUniverse.length, exclusions },
    sample_times_et: SAMPLE_TIMES,
    default_thresholds: { adx: DEFAULT_ADX, rsi: DEFAULT_RSI },
    aggregate: { totalGradeA, daysWithGradeA, ...aggOverlaps, symbolDaySamples: allRecords.length, volGateExcluded: aggVolGateExcluded, dailyBreakoutOnly: aggDailyBreakoutOnly, intradayBreakoutOnly: aggIntradayBreakoutOnly },
    per_day: perDaySummary,
    grade_a_list: records,
    sensitivity,
    confluence_proxy: { literalCount, lenientCount, evaluable, vwapUnavailable },
    cross_check: crossCheck,
  };
  writeFileSync(join(OUT_DIR, 'summary.json'), JSON.stringify(summary, null, 2) + '\n');

  console.log('\n=== AGGREGATE (default thresholds ADX>20, RSI<30) ===');
  console.log(`symbol-day-samples evaluated: ${allRecords.length}`);
  console.log(`Setup A hits: ${aggOverlaps.A}  Setup B hits: ${aggOverlaps.B}  Setup C hits: ${aggOverlaps.C}`);
  console.log(`A+B: ${aggOverlaps.AB}  A+C: ${aggOverlaps.AC}  B+C: ${aggOverlaps.BC}`);
  console.log(`Grade-A total: ${totalGradeA}  Days with >=1 grade-A: ${daysWithGradeA} / ${tradingDaysInWindow.length}`);
  console.log('\n=== SENSITIVITY ===');
  console.log('ADX threshold -> grade-A count:', sensitivity.adx_threshold, `(~${(sensitivity.adx_threshold[20] / numTradingWeeks).toFixed(1)}/week at ADX20)`);
  console.log(`Setup A alone: ${sensitivity.setup_a_alone} (~${(sensitivity.setup_a_alone / numTradingWeeks).toFixed(1)}/week)`);
  console.log(`Setup B strict (ADX>25 + px>SMA200): ${sensitivity.setup_b_strict} (~${(sensitivity.setup_b_strict / numTradingWeeks).toFixed(1)}/week)`);
  console.log('RSI threshold -> grade-A count:', sensitivity.rsi_threshold);
  console.log('\n=== CONFLUENCE PROXY ===');
  console.log(`literal 2-of-3 (RSI<30): ${literalCount} / ${evaluable} evaluable (vwap unavailable: ${vwapUnavailable})`);
  console.log(`lenient 2-of-3 (RSI 30-70): ${lenientCount} / ${evaluable} evaluable`);
  console.log('\n=== CROSS-CHECK vs production Setup B ===');
  for (const c of crossCheck) console.log(`  ${c.file} (${c.ny_time}ET): prodB=${c.prodBCount} ourB=${c.ourBCount} agree=${c.agree}`, c.agree ? '' : { onlyProd: c.onlyProd, onlyOurs: c.onlyOurs });
}

main().catch((e) => fail(e.stack || e.message || String(e)));
