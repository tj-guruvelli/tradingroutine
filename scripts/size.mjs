#!/usr/bin/env node
// size.mjs — volatility-normalized position sizing from live Alpaca data.
// Wilder ATR(14) on daily bars: a 1-ATR adverse move costs at most risk_pct of equity.
// Read-only analysis. No npm deps (Node 18+ global fetch). Run: node scripts/size.mjs SYMBOL [--risk-pct 1.0]
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
  process.stderr.write(`size.mjs error: ${msg}\n`);
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

function parseArgs(argv) {
  const symbol = argv[0];
  let riskPct = 1.0;
  for (let i = 1; i < argv.length; i++) {
    if (argv[i] === '--risk-pct' && argv[i + 1]) { riskPct = Number(argv[i + 1]); i++; }
  }
  return { symbol, riskPct };
}

// Wilder ATR(14): first ATR = simple mean of first 14 TRs, then smoothed.
function wilderAtr(bars, period = 14) {
  const trs = [];
  for (let i = 1; i < bars.length; i++) {
    const h = bars[i].h, l = bars[i].l, pc = bars[i - 1].c;
    const tr = Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc));
    trs.push(tr);
  }
  if (trs.length < period) throw new Error(`only ${trs.length} true-range values — need >= ${period}`);
  let atr = trs.slice(0, period).reduce((a, b) => a + b, 0) / period;
  for (let i = period; i < trs.length; i++) {
    atr = (atr * (period - 1) + trs[i]) / period;
  }
  return atr;
}

const r2 = (x) => Math.round(x * 100) / 100;
const r4 = (x) => Math.round(x * 10000) / 10000;

async function main() {
  loadEnv();
  const { symbol, riskPct } = parseArgs(process.argv.slice(2));
  if (!symbol) fail('usage: node scripts/size.mjs SYMBOL [--risk-pct 1.0]');
  const sym = symbol.toUpperCase();

  const key = process.env.ALPACA_API_KEY || process.env.APCA_API_KEY_ID;
  const secret = process.env.ALPACA_SECRET_KEY || process.env.APCA_API_SECRET_KEY;
  if (!key || !secret) fail('ALPACA_API_KEY / ALPACA_SECRET_KEY not set (checked process.env and .env)');
  const headers = { 'APCA-API-KEY-ID': key, 'APCA-API-SECRET-KEY': secret };
  const base = process.env.ALPACA_ENDPOINT || 'https://paper-api.alpaca.markets/v2';
  const dataBase = process.env.ALPACA_DATA_ENDPOINT || 'https://data.alpaca.markets/v2';

  const end = new Date(Date.now() - 24 * 3600 * 1000).toISOString(); // yesterday
  const start = new Date(Date.now() - 40 * 24 * 3600 * 1000).toISOString(); // ~40 cal days -> ~20 bars
  const barsUrl = `${dataBase}/stocks/${sym}/bars?timeframe=1Day&start=${start}&end=${end}&limit=20&feed=iex&adjustment=raw`;

  const [barsData, account] = await Promise.all([
    alpacaJson(barsUrl, headers),
    alpacaJson(`${base}/account`, headers),
  ]);

  const bars = barsData.bars || [];
  if (bars.length < 15) fail(`only ${bars.length} daily bars for ${sym} — not enough history for ATR(14)`);

  const atr14 = wilderAtr(bars, 14);
  const price = bars[bars.length - 1].c;
  const equity = Number(account.equity);

  const riskDollars = equity * (riskPct / 100);
  const atrShares = Math.floor(riskDollars / atr14);
  const capShares = Math.floor((equity * 0.20) / price);
  const suggestedShares = Math.min(atrShares, capShares);
  const capApplied = capShares < atrShares;

  console.log(JSON.stringify({
    symbol: sym,
    price: r2(price),
    atr14: r4(atr14),
    equity: r2(equity),
    risk_dollars: r2(riskDollars),
    atr_shares: atrShares,
    cap_shares: capShares,
    suggested_shares: suggestedShares,
    cap_applied: capApplied,
  }, null, 2));
}

main().catch((e) => fail(e.message || String(e), e));
