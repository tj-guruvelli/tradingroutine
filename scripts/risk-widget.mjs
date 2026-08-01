#!/usr/bin/env node
// risk-widget.mjs — desk card: on-screen daily stop + A/B/C position size reminders.
// SURFACES existing risk logic, does not reinvent it:
//   - daily stop / drawdown floor: same circuit_breaker.max_drawdown_from_peak_pct
//     config and portfolio-history math as scripts/safety-check.sh's circuit breaker.
//   - A/B/C sizing: same Wilder ATR(14) sizing math as scripts/size.mjs, run three
//     times at three conviction tiers (A=full, B=half, C=quarter of risk_pct_per_trade).
// Read-only. Never places/cancels orders. Run: node scripts/risk-widget.mjs [SYMBOL]
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
  process.stderr.write(`risk-widget.mjs error: ${msg}\n`);
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

// Wilder ATR(14) — identical math to scripts/size.mjs.
function wilderAtr(bars, period = 14) {
  const trs = [];
  for (let i = 1; i < bars.length; i++) {
    const h = bars[i].h, l = bars[i].l, pc = bars[i - 1].c;
    trs.push(Math.max(h - l, Math.abs(h - pc), Math.abs(l - pc)));
  }
  if (trs.length < period) throw new Error(`only ${trs.length} true-range values — need >= ${period}`);
  let atr = trs.slice(0, period).reduce((a, b) => a + b, 0) / period;
  for (let i = period; i < trs.length; i++) atr = (atr * (period - 1) + trs[i]) / period;
  return atr;
}

const r2 = (x) => Math.round(x * 100) / 100;
const r4 = (x) => Math.round(x * 10000) / 10000;

function sizeAtRisk(riskPct, atr14, price, equity) {
  const riskDollars = equity * (riskPct / 100);
  const atrShares = Math.floor(riskDollars / atr14);
  const capShares = Math.floor((equity * 0.20) / price);
  const shares = Math.min(atrShares, capShares);
  return { risk_pct: riskPct, risk_dollars: r2(riskDollars), shares, cap_applied: capShares < atrShares };
}

async function main() {
  loadEnv();
  const symbol = (process.argv[2] || '').toUpperCase() || null;

  const key = process.env.ALPACA_API_KEY || process.env.APCA_API_KEY_ID;
  const secret = process.env.ALPACA_SECRET_KEY || process.env.APCA_API_SECRET_KEY;
  if (!key || !secret) fail('ALPACA_API_KEY / ALPACA_SECRET_KEY not set (checked process.env and .env)');
  const headers = { 'APCA-API-KEY-ID': key, 'APCA-API-SECRET-KEY': secret };
  const base = process.env.ALPACA_ENDPOINT || 'https://paper-api.alpaca.markets/v2';
  const dataBase = process.env.ALPACA_DATA_ENDPOINT || 'https://data.alpaca.markets/v2';

  const rules = JSON.parse(readFileSync(join(ROOT, 'config', 'rules.json'), 'utf8'));
  const maxDrawdownPct = rules?.circuit_breaker?.max_drawdown_from_peak_pct ?? 10;
  const baseRiskPct = rules?.risk_rules?.risk_pct_per_trade ?? 1.0;

  const [account, clock, ph] = await Promise.all([
    alpacaJson(`${base}/account`, headers),
    alpacaJson(`${base}/clock`, headers).catch(() => null),
    alpacaJson(`${base}/account/portfolio/history?period=1M&timeframe=1D`, headers).catch(() => null),
  ]);

  const equity = Number(account.equity);
  const equitySeries = (ph?.equity || []).filter((e) => e !== null && e !== undefined);
  const peakEquity = equitySeries.length ? Math.max(...equitySeries, equity) : equity;
  const currentEquity = equity;
  const drawdownPct = peakEquity ? r2(((peakEquity - currentEquity) / peakEquity) * 100) : 0;
  const dailyStopEquityFloor = r2(peakEquity * (1 - maxDrawdownPct / 100));
  const circuitBreakerTripped = drawdownPct >= maxDrawdownPct;
  const marketOpen = clock ? Boolean(clock.is_open) : null;

  const widget = {
    as_of: new Date().toISOString(),
    market_open: marketOpen,
    market_closed_note: marketOpen === false ? 'market closed — showing last-known account/equity values' : null,
    daily_stop: {
      max_drawdown_from_peak_pct: maxDrawdownPct,
      peak_equity: r2(peakEquity),
      current_equity: r2(currentEquity),
      drawdown_pct: drawdownPct,
      equity_floor_before_circuit_breaker: dailyStopEquityFloor,
      circuit_breaker_tripped: circuitBreakerTripped,
    },
    position_size_tiers: null,
    spy_scoreboard: null,
  };

  // SPY scoreboard: portfolio % change vs SPY % change over the same 1M window.
  // Reuses the portfolio-history response (ph) already fetched above; SPY comes
  // from daily bars over the matching date range. Never fabricates numbers: any
  // missing series yields {error} instead.
  try {
    const valid = (e) => Number.isFinite(Number(e)) && Number(e) > 0;
    const ts = (ph?.timestamp || []).filter((t, i) => valid(ph.equity?.[i]));
    const eq = (ph?.equity || []).filter(valid).map(Number);
    if (eq.length < 2 || ts.length < 2) throw new Error('portfolio history unavailable or too short for a 1M comparison');
    const portfolioPct = ((eq[eq.length - 1] - eq[0]) / eq[0]) * 100;
    if (!Number.isFinite(portfolioPct)) throw new Error('portfolio % change is not finite — refusing to fabricate');
    const spyStart = new Date(ts[0] * 1000).toISOString();
    const spyEnd = new Date(Math.min(ts[ts.length - 1] * 1000 + 24 * 3600 * 1000, Date.now() - 15 * 60 * 1000)).toISOString();
    const spyUrl = `${dataBase}/stocks/SPY/bars?timeframe=1Day&start=${spyStart}&end=${spyEnd}&limit=40&feed=iex&adjustment=raw`;
    const spyData = await alpacaJson(spyUrl, headers);
    const spyBars = spyData.bars || [];
    if (spyBars.length < 2) throw new Error(`only ${spyBars.length} SPY daily bars in the window — cannot compute SPY % change`);
    const spyPct = ((spyBars[spyBars.length - 1].c - spyBars[0].c) / spyBars[0].c) * 100;
    widget.spy_scoreboard = {
      window: '1M',
      portfolio_pct: r2(portfolioPct),
      spy_pct: r2(spyPct),
      alpha_pct: r2(portfolioPct - spyPct),
      beating_spy: portfolioPct > spyPct,
    };
  } catch (e) {
    widget.spy_scoreboard = { error: e.message || String(e) };
  }

  if (symbol) {
    const end = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
    const start = new Date(Date.now() - 40 * 24 * 3600 * 1000).toISOString();
    const barsUrl = `${dataBase}/stocks/${symbol}/bars?timeframe=1Day&start=${start}&end=${end}&limit=20&feed=iex&adjustment=raw`;
    try {
      const barsData = await alpacaJson(barsUrl, headers);
      const bars = barsData.bars || [];
      if (bars.length < 15) throw new Error(`only ${bars.length} daily bars for ${symbol} — not enough history for ATR(14)`);
      const atr14 = wilderAtr(bars, 14);
      const price = bars[bars.length - 1].c;
      widget.position_size_tiers = {
        symbol,
        price: r2(price),
        atr14: r4(atr14),
        note: 'A=full conviction, B=half, C=quarter of risk_pct_per_trade; ATR(14) sizing capped at 20% equity (same math as scripts/size.mjs)',
        A: sizeAtRisk(baseRiskPct, atr14, price, equity),
        B: sizeAtRisk(baseRiskPct / 2, atr14, price, equity),
        C: sizeAtRisk(baseRiskPct / 4, atr14, price, equity),
      };
    } catch (e) {
      widget.position_size_tiers = { symbol, error: e.message || String(e) };
    }
  } else {
    widget.position_size_tiers = { note: 'pass a SYMBOL to compute A/B/C tiers, e.g. node scripts/risk-widget.mjs META' };
  }

  console.log(JSON.stringify(widget, null, 2));
}

main().catch((e) => fail(e.message || String(e), e));
