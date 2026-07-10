#!/usr/bin/env node
// risk.mjs — portfolio VaR/CVaR + beta-scaled scenario stress from live Alpaca data.
// Read-only analysis. No npm deps (Node 18+ global fetch). Run: node scripts/risk.mjs
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
  process.stderr.write(`risk.mjs error: ${msg}\n`);
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

async function fetchDailyLogReturns(sym, headers) {
  const end = new Date(Date.now() - 24 * 3600 * 1000).toISOString(); // yesterday
  const start = new Date(Date.now() - 366 * 24 * 3600 * 1000).toISOString(); // ~1y ago
  const url = `https://data.alpaca.markets/v2/stocks/${sym}/bars` +
    `?timeframe=1Day&start=${start}&end=${end}&limit=400&feed=iex&adjustment=raw`;
  const data = await alpacaJson(url, headers);
  const bars = data.bars || [];
  if (bars.length < 60) throw new Error(`only ${bars.length} daily bars for ${sym} — not enough history`);
  const rets = new Map(); // date (YYYY-MM-DD) -> daily log return
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

function betaVs(ri, rm) {
  const mi = mean(ri), mm = mean(rm);
  let cov = 0, varm = 0;
  for (let k = 0; k < ri.length; k++) {
    cov += (ri[k] - mi) * (rm[k] - mm);
    varm += (rm[k] - mm) ** 2;
  }
  return varm === 0 ? 0 : cov / varm;
}

function varCvar95(rets) {
  const sorted = [...rets].sort((a, b) => a - b);
  const idx = Math.floor(0.05 * sorted.length);
  return { var95: sorted[idx], cvar95: mean(sorted.slice(0, idx + 1)) };
}

const pct = (x) => Math.round(x * 10000) / 100;   // fraction -> percent, 2dp
const r2 = (x) => Math.round(x * 100) / 100;
const r4 = (x) => Math.round(x * 10000) / 10000;

async function main() {
  loadEnv();
  const key = process.env.ALPACA_API_KEY || process.env.APCA_API_KEY_ID;
  const secret = process.env.ALPACA_SECRET_KEY || process.env.APCA_API_SECRET_KEY;
  if (!key || !secret) fail('ALPACA_API_KEY / ALPACA_SECRET_KEY not set (checked process.env and .env)');
  const headers = { 'APCA-API-KEY-ID': key, 'APCA-API-SECRET-KEY': secret };
  const base = process.env.ALPACA_ENDPOINT || 'https://paper-api.alpaca.markets/v2';

  const [account, positions] = await Promise.all([
    alpacaJson(`${base}/account`, headers),
    alpacaJson(`${base}/positions`, headers),
  ]);

  if (!Array.isArray(positions) || positions.length === 0) {
    console.log(JSON.stringify({ positions: 0, note: 'empty book — nothing to stress' }, null, 2));
    return;
  }

  const equity = Number(account.equity);
  const allSyms = [...new Set([...positions.map((p) => p.symbol), 'SPY'])];
  const retsBySym = {};
  const excluded = [];
  await Promise.all(allSyms.map(async (s) => {
    try { retsBySym[s] = await fetchDailyLogReturns(s, headers); }
    catch (e) {
      if (s === 'SPY') throw e; // benchmark is non-negotiable
      excluded.push(`EXCLUDED from VaR/beta: ${s} — ${e.message}`);
    }
  }));
  const usable = positions.filter((p) => retsBySym[p.symbol]);
  if (usable.length === 0) fail('no position has enough bar history — VaR not computable');

  const dates = alignDates([...usable.map((p) => retsBySym[p.symbol]), retsBySym.SPY]);
  if (dates.length < 60) fail(`only ${dates.length} overlapping trading days across book — too little history`);

  const weights = {}; // position market value as fraction of account equity
  for (const p of positions) weights[p.symbol] = Number(p.market_value) / equity;

  const spy = dates.map((d) => retsBySym.SPY.get(d));
  const perPos = usable.map((p) => {
    const rets = dates.map((d) => retsBySym[p.symbol].get(d));
    return { sym: p.symbol, weight: r4(weights[p.symbol]), beta: r2(betaVs(rets, spy)), rets };
  });

  const portRets = dates.map((_, k) =>
    perPos.reduce((acc, p) => acc + weights[p.sym] * p.rets[k], 0));
  const { var95, cvar95 } = varCvar95(portRets);

  const shocks = { gfc_pct: -40, covid_pct: -30, rate_shock_pct: -10 }; // market shock in %
  const stress = {};
  for (const [name, shock] of Object.entries(shocks)) {
    stress[name] = r2(perPos.reduce((acc, p) => acc + weights[p.sym] * p.beta * shock, 0));
  }
  stress.note = 'beta-scaled approximation, not a historical replay';

  const flags = [...excluded];
  for (const p of positions) { // all positions, incl. history-excluded — weights are known regardless
    const w = weights[p.symbol];
    if (Math.abs(w) > 0.20) {
      flags.push(`CONCENTRATION: ${p.symbol} is ${pct(Math.abs(w))}% of equity (>20% cap in config/rules.json)`);
    }
  }

  console.log(JSON.stringify({
    as_of: new Date().toISOString(),
    equity,
    positions: perPos.map(({ sym, weight, beta }) => ({ sym, weight, beta })),
    var95_1d_pct: pct(var95),
    cvar95_1d_pct: pct(cvar95),
    var95_10d_pct: pct(var95 * Math.sqrt(10)),
    var95_10d_note: 'sqrt(10) time-scaling — approximation',
    stress,
    flags,
  }, null, 2));
}

main().catch((e) => fail(e.message || String(e), e));
