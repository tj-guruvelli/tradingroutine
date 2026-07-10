---
description: Single-ticker equity research — earnings in, thesis out (fair-value range + conviction score, read-only)
---

/research SYM — deep-dive one equity: live state -> financials -> three
valuation lenses -> bull/bear thesis -> fair-value range + conviction N/10.
Analysis only — this command NEVER places an order. Stocks only, no options.
Ultra-concise output. Resolve date: DATE=$(date +%Y-%m-%d). SYM is a bare
symbol everywhere (NVDA, never NASDAQ:NVDA).

## STEP 1 — Live state

In parallel:
- `bash scripts/alpaca.sh quote SYM` — current price and spread.
- `mcp__tradingview-data__combined_analysis { symbol: SYM, exchange: "NASDAQ", timeframe: "1D" }`
  (retry with exchange "NYSE" if not found). Keep the `technical` block: RSI,
  MACD, SMA/EMA, Bollinger, ADX, support/resistance, stock_score, grade,
  trend_state. The sentiment/news blocks return empty upstream (known issue) —
  ignore them here, never block on empty sentiment.

## STEP 2 — Financials (EDGAR)

`bash scripts/edgar.sh facts SYM` — XBRL companyfacts. Extract:
- Revenues, NetIncomeLoss, diluted EPS — last 8 quarters + last 3 fiscal years.
- Derive: YoY revenue growth, net margin, TTM revenue / net income / EPS,
  shares outstanding (dei facts).

If EDGAR fails for the ticker (no CIK match, missing tags, malformed facts):
`bash scripts/perplexity.sh "SYM: revenue, net income, diluted EPS for last 8 quarters and last 3 fiscal years. Numbers only, labeled by period."`
If Perplexity is unset (exit 3), fall back to native WebSearch. Either way,
state "financials via <source>, not EDGAR" in the output — never present
fallback data as filed data.

## STEP 3 — Valuation, three lenses

These are rough, reproducible approximations — NOT investment advice. Print
every assumption and every intermediate number so the math is auditable.

### 3a — DCF-lite
- Base cash flow: trailing FCF if derivable from STEP 2, else TTM NetIncome
  as proxy — state which one was used.
- Assumptions (print them): growth Y1-5 = trailing YoY capped at 25% (or a
  stated analyst figure), terminal growth 2.5%, discount rate 10% default.
- Show the arithmetic: PV of Y1-5 flows + terminal value / (r - g) discounted
  back, sum = equity value, divide by shares outstanding = per-share value.
- Sensitivity line: per-share value at 8% / 10% / 12% discount.

### 3b — Comps
`bash scripts/perplexity.sh "3-5 closest public comps for SYM with forward P/E and EV/Sales, plus SYM's own forward EPS and revenue estimates. Name each peer."`
(exit 3 -> native WebSearch). NAME the peers in the output. Implied values:
peer-median forward P/E x SYM forward EPS, and peer-median EV/S x forward
revenue (note net debt if known) -> two per-share estimates.

### 3c — Technicals
From STEP 1's technical block: support/resistance levels, trend_state,
stock_score/grade, price vs key SMAs. Technical range = nearest strong
support to nearest strong resistance.

If any lens has no data, present the other two and flag the gap explicitly —
never fabricate a number.

## STEP 4 — Thesis

- BULL: strongest 2 drivers (specific — catalyst, growth vector, margin lever).
- BEAR: strongest 2 risks (specific — competition, multiple compression, execution).
- Fair-value range = intersection of the three lenses; if one lens is a wild
  outlier, keep it visible and say why it diverges.
- Conviction N/10 + one sentence on the single variable that would change it.

## STEP 5 — Persist + verdict

Append to memory/RESEARCH-LOG.md under today's date as `### Research: SYM` —
NEVER overwrite existing content. Include: price, DCF value + assumptions,
comps value + named peers, technical range, fair-value range, conviction,
bull/bear bullets, and the financials source note from STEP 2.

Print the verdict block to chat:
```
SYM @ $price — grade X/10 (trend_state)
DCF $A (10% disc) | Comps $B (peers: ...) | Technical $C-$D
Fair value: $LOW-$HIGH (price is N% above/below midpoint)
BULL: <driver 1> / <driver 2>
BEAR: <risk 1> / <risk 2>
Conviction: N/10 — changes if <variable>.
Financials: <EDGAR | fallback source>
```

Optional Telegram (only if the operator asks, or a routine invokes this):
```
🔬 *Research: SYM* — ${DATE}
Fair value $LOW-$HIGH vs $price — conviction N/10
BULL: <one line> | BEAR: <one line>
No trade executed.
```
`bash scripts/telegram.sh "$MSG"` (falls back to ClickUp if Telegram fails).

## Rules
- Read-only. This command never places, modifies, or cancels an order.
  To act on the thesis, run `/trade SYM QTY buy|sell` — the full
  safety-check gate applies there.
- Bare symbols only for every MCP call.
- Not investment advice: outputs are reproducible approximations for the
  operator's own review.
