#!/usr/bin/env node
// setup-scan-cloud.mjs — full-universe setup scanner, CLOUD variant.
//
// Ports .claude/commands/setup-scan.md (61-ticker TradingView-MCP scanner) to
// a zero-dep script that reads raw Alpaca bars/quotes directly, the same way
// routines/tjl-cloud.md and routines/gappers-cloud.md do it — because cloud
// routines cannot call local MCP tools (mcp__tradingview-data__combined_analysis
// is unavailable there). Setup A's daily_breakout/intraday_breakout math is
// copied verbatim from tjl-cloud.md. sma()/ema()/rsi() bodies are copied
// verbatim from scripts/strategy-lab.mjs (same math, no npm deps, Node 18+
// global fetch). loadEnv()/fail()/alpacaJson() follow the same helper style
// as scripts/risk.mjs and scripts/strategy-lab.mjs.
//
// DEVIATION FROM THE LOCAL VARIANT: the local /setup-scan Setup B also
// requires stock_score >= 6 (a TradingView proprietary score only available
// through the MCP). That third condition is DROPPED here — the cloud variant
// grades Setup B on ADX14 > 20 AND EMA9 > EMA21 only. stock_score is MCP-only
// and unavailable in a cloud routine.
//
// Usage: node scripts/setup-scan-cloud.mjs
// Prints one JSON object to stdout AND writes the same object to
// data/setup-scan_cloud_${DATE}_${HHMM}ET.json.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const CONCURRENCY = 8; // parallel in-flight ticker scans — polite to Alpaca's rate limit

// ---------------------------------------------------------------------------
// env + error handling (same pattern as scripts/risk.mjs / scripts/strategy-lab.mjs)
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
    if (!(key in process.env)) process.env[key] = val; // process.env wins (cloud routine env, no .env there)
  }
}

function fail(msg, err) {
  process.stderr.write(`setup-scan-cloud.mjs error: ${msg}\n`);
  if (err && /certificate|CERT_|unable to verify|self.signed/i.test(String(err && err.cause ? err.cause : err))) {
    process.stderr.write('hint: this machine intercepts HTTPS — set NODE_EXTRA_CA_CERTS to the local CA bundle and re-run.\n');
  }
  process.exit(1);
}

const r2 = (x) => (x == null ? null : Math.round(x * 100) / 100);
const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;

async function alpacaJson(url, headers, attempt = 1) {
  const MAX_ATTEMPTS = 6;
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      if (res.status === 429 && attempt < MAX_ATTEMPTS) {
        await new Promise((r) => setTimeout(r, 800 * attempt)); // Alpaca rate limit — needs longer backoff than transient net errors
        return alpacaJson(url, headers, attempt + 1);
      }
      if (res.status === 503 && attempt < MAX_ATTEMPTS) {
        await new Promise((r) => setTimeout(r, 250 * attempt));
        return alpacaJson(url, headers, attempt + 1);
      }
      throw new Error(`HTTP ${res.status} for ${url}: ${(await res.text()).slice(0, 200)}`);
    }
    return res.json();
  } catch (e) {
    // transient DNS/connection errors under concurrent load — retry with backoff
    if (attempt < MAX_ATTEMPTS && /fetch failed|DNS|ECONNRESET|ETIMEDOUT|network/i.test(String(e && e.cause ? e.cause : e.message || e))) {
      await new Promise((r) => setTimeout(r, 250 * attempt));
      return alpacaJson(url, headers, attempt + 1);
    }
    throw e;
  }
}

// ---------------------------------------------------------------------------
// Indicators — sma()/ema()/rsi() bodies copied verbatim from strategy-lab.mjs
// (same math, no npm deps). ADX is new — Wilder's true ADX (TR, +DM/-DM,
// Wilder smoothing, DX, then ADX as the smoothed average of DX) since this
// script exists specifically so an agent doesn't have to hand-compute it.
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

// Wilder's ADX. bars: [{h,l,c}, ...] chronological. Returns an array aligned
// to bars indices; null where there isn't yet enough history (needs 2*n bars).
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
  if (len < 2 * n) return adxOut; // not enough history to produce a real ADX

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

  // First ADX = simple average of the first n DX values (DX[n..2n-1]).
  let sumDX = 0;
  for (let i = n; i < 2 * n; i++) sumDX += dx[i];
  adxOut[2 * n - 1] = sumDX / n;
  for (let i = 2 * n; i < len; i++) {
    adxOut[i] = (adxOut[i - 1] * (n - 1) + dx[i]) / n;
  }
  return adxOut;
}

// ---------------------------------------------------------------------------
// NY time helpers — Intl handles DST correctly (no manual -04:00/-05:00 guess)
// ---------------------------------------------------------------------------

function nyNowParts() {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', hour12: false,
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  const parts = Object.fromEntries(fmt.formatToParts(new Date()).map((p) => [p.type, p.value]));
  if (parts.hour === '24') parts.hour = '00';
  return parts;
}

function nyOffsetString() {
  const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', timeZoneName: 'shortOffset' });
  const part = fmt.formatToParts(new Date()).find((p) => p.type === 'timeZoneName').value; // "GMT-4" / "GMT-5"
  const m = part.match(/GMT([+-]\d+)/);
  const hoursOffset = m ? parseInt(m[1], 10) : -5;
  const sign = hoursOffset >= 0 ? '+' : '-';
  const abs = String(Math.abs(hoursOffset)).padStart(2, '0');
  return `${sign}${abs}:00`;
}

function nyHourMinute(isoUtc) {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York', hour12: false, hour: '2-digit', minute: '2-digit',
  });
  const parts = Object.fromEntries(fmt.formatToParts(new Date(isoUtc)).map((p) => [p.type, p.value]));
  if (parts.hour === '24') parts.hour = '00';
  return `${parts.hour}:${parts.minute}`;
}

// ---------------------------------------------------------------------------
// Alpaca data fetch — direct fetch() calls against the same endpoints
// scripts/alpaca.sh hits, matching risk.mjs/strategy-lab.mjs's style.
// ---------------------------------------------------------------------------

async function fetchDailyBars(sym, headers, dataBase) {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0); // start of today UTC — excludes today's (possibly incomplete) daily bar
  const endIso = end.toISOString();
  const start = new Date(end.getTime() - 380 * 24 * 3600 * 1000).toISOString(); // ~380 calendar days ~ 250+ trading days
  const bars = [];
  let url = `${dataBase}/stocks/${sym}/bars?timeframe=1Day&start=${start}&end=${endIso}&limit=10000&feed=iex&adjustment=raw`;
  for (;;) {
    const data = await alpacaJson(url, headers);
    for (const b of data.bars || []) bars.push({ t: b.t, o: b.o, h: b.h, l: b.l, c: b.c, v: b.v });
    if (!data.next_page_token) break;
    url = `${dataBase}/stocks/${sym}/bars?timeframe=1Day&start=${start}&end=${endIso}&limit=10000&feed=iex&adjustment=raw&page_token=${data.next_page_token}`;
  }
  return bars.slice(-250); // ~250 trading days
}

async function fetchTodayMinuteBars(sym, headers, dataBase, startIso, endIso) {
  const bars = [];
  let url = `${dataBase}/stocks/${sym}/bars?timeframe=1Min&start=${startIso}&end=${endIso}&limit=10000&feed=iex&adjustment=raw`;
  for (;;) {
    const data = await alpacaJson(url, headers);
    for (const b of data.bars || []) bars.push({ t: b.t, o: b.o, h: b.h, l: b.l, c: b.c, v: b.v });
    if (!data.next_page_token) break;
    url = `${dataBase}/stocks/${sym}/bars?timeframe=1Min&start=${startIso}&end=${endIso}&limit=10000&feed=iex&adjustment=raw&page_token=${data.next_page_token}`;
  }
  return bars;
}

async function fetchQuote(sym, headers, dataBase) {
  // No feed param — matches scripts/alpaca.sh's `quote` subcommand exactly.
  const url = `${dataBase}/stocks/${sym}/quotes/latest`;
  const data = await alpacaJson(url, headers);
  return data.quote || null;
}

function currPxFromQuote(quote, fallbackClose) {
  if (!quote) return fallbackClose;
  const ap = Number(quote.ap) || 0;
  const bp = Number(quote.bp) || 0;
  if (ap > 0 && bp > 0) return (ap + bp) / 2;
  if (ap > 0) return ap;
  if (bp > 0) return bp;
  return fallbackClose;
}

// ---------------------------------------------------------------------------
// Concurrency-capped map — 8 parallel in-flight ticker scans
// ---------------------------------------------------------------------------

async function mapWithConcurrency(items, limit, fn) {
  const results = new Array(items.length);
  let idx = 0;
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await fn(items[i], i);
    }
  }
  const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

// ---------------------------------------------------------------------------
// Per-ticker scan
// ---------------------------------------------------------------------------

async function scanTicker(sym, headers, dataBase, ctx) {
  try {
    const dailyBars = await fetchDailyBars(sym, headers, dataBase);
    if (dailyBars.length < 30) {
      return { symbol: sym, result: 'error', reason: `only ${dailyBars.length} daily bars — not enough history` };
    }

    const closes = dailyBars.map((b) => b.c);
    const volumes = dailyBars.map((b) => b.v);

    const prevDailyHigh = dailyBars[dailyBars.length - 1].h;
    const prevDailyClose = dailyBars[dailyBars.length - 1].c;

    const smaLen = Math.min(200, closes.length);
    const sma200 = mean(closes.slice(-smaLen));

    const rsiArr = rsi(closes, 14);
    const rsi14 = rsiArr[rsiArr.length - 1];

    const ema9Arr = ema(closes, 9);
    const ema21Arr = ema(closes, 21);
    const ema9 = ema9Arr[ema9Arr.length - 1];
    const ema21 = ema21Arr[ema21Arr.length - 1];

    const adxArr = adx(dailyBars, 14);
    const adx14 = adxArr[adxArr.length - 1];

    const latestDailyVolume = volumes[volumes.length - 1];
    const avgDailyVolume30 = mean(volumes.slice(-30));

    let quote = null;
    try { quote = await fetchQuote(sym, headers, dataBase); } catch { quote = null; }
    const currPx = currPxFromQuote(quote, prevDailyClose);

    const minuteBars = await fetchTodayMinuteBars(sym, headers, dataBase, ctx.premarketStartIso, ctx.nowUtcIso);
    const preBars = [], regBars = [];
    for (const b of minuteBars) {
      const hm = nyHourMinute(b.t);
      if (hm >= '04:00' && hm < '09:30') preBars.push(b);
      else if (hm >= '09:30') regBars.push(b);
    }
    const premarketVolume = preBars.reduce((a, b) => a + b.v, 0);
    const pmh = preBars.length ? Math.max(...preBars.map((b) => b.h)) : null;
    const regBarsExclLast = regBars.length ? regBars.slice(0, -1) : []; // exclude the in-progress final bar
    const todayHod = regBarsExclLast.length ? Math.max(...regBarsExclLast.map((b) => b.h)) : null;

    // Volume gate — excluded entirely if this fails.
    const inPremarketHours = ctx.nyHM >= '04:00' && ctx.nyHM < '09:30';
    const passesGate = premarketVolume >= 50000
      || (!inPremarketHours && avgDailyVolume30 > 0 && latestDailyVolume >= 1.5 * avgDailyVolume30);
    if (!passesGate) return { symbol: sym, result: 'excluded_volume_gate' };

    // Setup A — TJL breakout (formulas copied from tjl-cloud.md).
    const dailyBreakout = currPx > prevDailyHigh && prevDailyClose > sma200;
    const setupACheckable = ctx.nyHM >= '10:00' && ctx.nyHM <= '15:30';
    let setupAHit = false;
    if (setupACheckable) {
      const intradayBreakout = pmh != null && todayHod != null && currPx > pmh && currPx > todayHod;
      setupAHit = dailyBreakout && intradayBreakout;
    }

    // Setup B — GainzAlgo confluence proxy. stock_score dropped (MCP-only).
    const setupBHit = adx14 != null && ema9 != null && ema21 != null && adx14 > 20 && ema9 > ema21;

    // Setup C — mean reversion.
    const setupCHit = rsi14 != null && rsi14 < 30 && currPx > sma200;

    const setups = [];
    if (setupAHit) setups.push('A');
    if (setupBHit) setups.push('B');
    if (setupCHit) setups.push('C');

    const grade = setups.length >= 2 ? 'A' : setups.length === 1 ? 'B' : null;
    if (!grade) return { symbol: sym, result: 'no_setup' };

    return {
      symbol: sym,
      result: 'hit',
      grade,
      setups,
      curr_px: r2(currPx),
      prev_daily_high: r2(prevDailyHigh),
      prev_daily_close: r2(prevDailyClose),
      sma200: r2(sma200),
      sma200_window_days: smaLen,
      pmh: r2(pmh),
      today_hod: r2(todayHod),
      rsi14: r2(rsi14),
      adx14: r2(adx14),
      ema9: r2(ema9),
      ema21: r2(ema21),
      premarket_volume: premarketVolume,
      daily_volume: latestDailyVolume,
      avg_daily_volume_30: Math.round(avgDailyVolume30),
      setup_a_checkable: setupACheckable,
    };
  } catch (e) {
    return { symbol: sym, result: 'error', reason: e.message || String(e) };
  }
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  loadEnv();
  const key = process.env.ALPACA_API_KEY || process.env.APCA_API_KEY_ID;
  const secret = process.env.ALPACA_SECRET_KEY || process.env.APCA_API_SECRET_KEY;
  if (!key || !secret) fail('ALPACA_API_KEY / ALPACA_SECRET_KEY not set (checked process.env and .env)');
  const headers = { 'APCA-API-KEY-ID': key, 'APCA-API-SECRET-KEY': secret };
  const dataBase = process.env.ALPACA_DATA_ENDPOINT || 'https://data.alpaca.markets/v2';

  let watchlist;
  try {
    const rules = JSON.parse(readFileSync(join(ROOT, 'config', 'rules.json'), 'utf8'));
    watchlist = rules.watchlist_tiers && rules.watchlist_tiers.immediate;
    if (!Array.isArray(watchlist) || watchlist.length === 0) throw new Error('watchlist_tiers.immediate is empty or missing');
  } catch (e) {
    fail(`could not load config/rules.json watchlist_tiers.immediate: ${e.message}`);
  }

  const nyParts = nyNowParts();
  const nyHM = `${nyParts.hour}:${nyParts.minute}`;
  const nyDate = `${nyParts.year}-${nyParts.month}-${nyParts.day}`;
  const offset = nyOffsetString();
  const premarketStartIso = `${nyDate}T04:00:00${offset}`;
  const nowUtcIso = new Date().toISOString();
  const ctx = { nyHM, premarketStartIso, nowUtcIso };

  const results = await mapWithConcurrency(watchlist, CONCURRENCY, (sym) => scanTicker(sym, headers, dataBase, ctx));

  const hits = results
    .filter((r) => r.result === 'hit')
    .sort((a, b) => (a.grade === b.grade ? 0 : a.grade === 'A' ? -1 : 1));
  const errors = results
    .filter((r) => r.result === 'error')
    .map((r) => ({ symbol: r.symbol, reason: r.reason }));

  const output = {
    scanned_at: new Date().toISOString(),
    ny_time: nyHM,
    candidates_checked: watchlist.length,
    hits,
    errors,
  };

  const hhmm = nyHM.replace(':', '');
  const outPath = join(ROOT, 'data', `setup-scan_cloud_${nyDate}_${hhmm}ET.json`);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n');

  console.log(JSON.stringify(output, null, 2));
}

main().catch((e) => fail(e.message || String(e), e));
