#!/usr/bin/env node
// corr-gate.mjs — blocks a new entry if SYMBOL is highly correlated with the
// existing book. Pearson correlation of daily log returns, ~31 calendar days.
// Read-only analysis. No npm deps (Node 18+ global fetch).
// Run: node scripts/corr-gate.mjs SYMBOL
// Exit 0 — pass. Exit 2 — BLOCK (correlated with >= max_correlated_positions
// open positions above max_corr, per config/rules.json). Exit 1 — usage/config
// error. Fails CLOSED (exit 1, block) if risk data cannot be fetched.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));

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
  process.stderr.write(`corr-gate.mjs error: ${msg}\n`);
  process.stderr.write('risk data unavailable — failing CLOSED for new entries.\n');
  if (err && /certificate|CERT_|unable to verify|self.signed/i.test(String(err && err.cause ? err.cause : err))) {
    process.stderr.write('hint: this machine intercepts HTTPS — set NODE_EXTRA_CA_CERTS to the local CA bundle and re-run.\n');
  }
  process.exit(1);
}

async function alpacaJson(url, headers) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

async function fetchDailyLogReturns(sym, headers, dataBase) {
  const end = new Date(Date.now() - 24 * 3600 * 1000).toISOString(); // yesterday
  const start = new Date(Date.now() - 45 * 24 * 3600 * 1000).toISOString(); // ~45 cal days -> ~31 bars
  const url = `${dataBase}/stocks/${sym}/bars?timeframe=1Day&start=${start}&end=${end}&limit=31&feed=iex&adjustment=raw`;
  const data = await alpacaJson(url, headers);
  const bars = data.bars || [];
  if (bars.length < 20) throw new Error(`only ${bars.length} daily bars for ${sym} — not enough history`);
  const rets = new Map();
  for (let i = 1; i < bars.length; i++) {
    rets.set(bars[i].t.slice(0, 10), Math.log(bars[i].c / bars[i - 1].c));
  }
  return rets;
}

function alignDates(seriesList) {
  let dates = [...seriesList[0].keys()];
  for (const s of seriesList.slice(1)) dates = dates.filter((d) => s.has(d));
  return dates.sort();
}

const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;

function pearson(a, b) {
  const ma = mean(a), mb = mean(b);
  let num = 0, da = 0, db = 0;
  for (let i = 0; i < a.length; i++) {
    num += (a[i] - ma) * (b[i] - mb);
    da += (a[i] - ma) ** 2;
    db += (b[i] - mb) ** 2;
  }
  const denom = Math.sqrt(da * db);
  return denom === 0 ? 0 : num / denom;
}

const r4 = (x) => Math.round(x * 10000) / 10000;

async function main() {
  loadEnv();
  const symbol = process.argv[2];
  if (!symbol) fail('usage: node scripts/corr-gate.mjs SYMBOL');
  const sym = symbol.toUpperCase();

  const key = process.env.ALPACA_API_KEY || process.env.APCA_API_KEY_ID;
  const secret = process.env.ALPACA_SECRET_KEY || process.env.APCA_API_SECRET_KEY;
  if (!key || !secret) fail('ALPACA_API_KEY / ALPACA_SECRET_KEY not set (checked process.env and .env)');
  const headers = { 'APCA-API-KEY-ID': key, 'APCA-API-SECRET-KEY': secret };
  const base = process.env.ALPACA_ENDPOINT || 'https://paper-api.alpaca.markets/v2';
  const dataBase = process.env.ALPACA_DATA_ENDPOINT || 'https://data.alpaca.markets/v2';

  let rulesRaw;
  try { rulesRaw = readFileSync(join(ROOT, 'config', 'rules.json'), 'utf8'); }
  catch (e) { fail('config/rules.json missing', e); }
  const rules = JSON.parse(rulesRaw);
  const gate = rules.correlation_gate || { max_corr: 0.75, max_correlated_positions: 1 };

  const positions = await alpacaJson(`${base}/positions`, headers);
  const openPositions = (positions || []).filter((p) => p.symbol !== sym);

  if (openPositions.length < 2) {
    console.log(JSON.stringify({ pass: true, reason: 'fewer than 2 open positions' }, null, 2));
    return;
  }

  const symRets = await fetchDailyLogReturns(sym, headers, dataBase);
  const posRets = {};
  for (const p of openPositions) {
    posRets[p.symbol] = await fetchDailyLogReturns(p.symbol, headers, dataBase);
  }

  const table = [];
  for (const p of openPositions) {
    const dates = alignDates([symRets, posRets[p.symbol]]);
    if (dates.length < 15) {
      table.push({ symbol: p.symbol, corr: null, note: `only ${dates.length} overlapping days` });
      continue;
    }
    const a = dates.map((d) => symRets.get(d));
    const b = dates.map((d) => posRets[p.symbol].get(d));
    table.push({ symbol: p.symbol, corr: r4(pearson(a, b)), overlapping_days: dates.length });
  }

  const offenders = table.filter((t) => t.corr !== null && t.corr > gate.max_corr);

  if (offenders.length >= gate.max_correlated_positions) {
    console.log(JSON.stringify({
      pass: false,
      symbol: sym,
      max_corr: gate.max_corr,
      max_correlated_positions: gate.max_correlated_positions,
      offending_pairs: offenders,
      table,
    }, null, 2));
    process.exit(2);
  }

  console.log(JSON.stringify({
    pass: true,
    symbol: sym,
    max_corr: gate.max_corr,
    table,
  }, null, 2));
}

main().catch((e) => fail(e.message || String(e), e));
