# The Engine — real mapping, not marketing

Source: two IG-style ad graphics ("THE ENGINE POWERING IT" / "WHY THIS CHANGES
EVERYTHING") showing a 5-part engine (Market Data, News & Sentiment, Price
Action, Risk Management, Execution Layer) "Built With" three named products
(Tower Research, Trading Agents, Fintech Terminal). Researched 2026-07-11
before building anything — here's what's real, what's marketing, and what
this repo actually has for each box.

## The 5-part engine — mapped to what's real here

| Box (from the graphic) | What this repo actually uses | Real? |
|---|---|---|
| Market Data | `scripts/alpaca.sh` (Alpaca, paper), `mcp__tradingview-data__combined_analysis` | Yes, live |
| News & Sentiment | RSS via `financial_news`, Reddit via `market_sentiment`, `scripts/perplexity.sh`, `scripts/afterhours.sh` (finviz/openinsider/Benzinga) | Yes, live |
| Price Action | TradingView (`combined_analysis` technical block: RSI/MACD/SMA/EMA/Bollinger/ADX/support-resistance) + live desktop CDP for Pine/charting | Yes, live |
| Risk Management | `scripts/risk.mjs` (VaR/CVaR + stress, no deps) + `config/rules.json` position/stop rules, enforced every `/trade` call | Yes, live |
| Execution Layer | Alpaca paper orders via `/trade`, gated by `scripts/safety-check.sh` | Yes, but **paper only, by design** — not "fast/automated" the way the ad implies; every order needs a human `/trade` call |

## "Built With" row — researched, not assumed

**Tower Research** — this is Tower Research Capital, a real ~$10B+ private
quant/HFT firm (tower-research.com). No public API, no retail product, no
integration path exists. This is a credibility logo in the ad, not a real
dependency — nothing to build, nothing to sign up for. Flagging so you don't
go looking for a "Tower Research API key."

**Trading Agents** — this one's real and open source:
[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)
(multi-agent LLM framework: technical/fundamental/sentiment/news analysts ->
bull/bear debate -> trader -> risk manager -> verdict). Supports Claude as
the LLM backend. **You already have the equivalent, built better for this
repo**: `/committee` (`.claude/commands/committee.md`) — same analyst-fanout
-> debate -> trader -> risk-gate -> verdict pattern, live-tested 2026-07-10
on META. The real TradingAgents repo defaults its market-data adapter to
**Yahoo Finance** — pulling it in as a dependency would reintroduce the
exact data source this repo purged on 2026-07-10. `/committee` gets the same
architecture without that conflict, using Alpaca/TradingView/EDGAR/Perplexity
instead. Verdict: don't add the dependency, the pattern is already here and
cleaner.

**Fintech Terminal** — reads as generic branding for an institutional-style
terminal (live prices, fundamentals, options flow, insider data). The real
open-source project matching that description is
[OpenBB](https://github.com/OpenBB-finance/OpenBB) (70k+ stars). This repo
already covers most of that surface: live prices (Alpaca/TradingView),
fundamentals (`scripts/edgar.sh`), insider data (`afterhours.sh` ->
openinsider). **Genuine gap**: options flow — nothing in this repo touches
it (consistent with the "NO OPTIONS, ever" hard rule in CLAUDE.md, so this
gap may be intentional, not a hole). Not building OpenBB integration now —
flagging it as a real, scoped option if you ever want options-flow *data*
for context even while never trading options, rather than building it on
a guess.

## Bottom line

4 of 5 engine boxes and 2 of 3 "Built With" pieces are already real and live
in this repo. The one gap (options flow) is arguably moot given the no-options
rule. Tower Research is unbuildable by design (private firm). Nothing here
needed new code — it needed the mapping written down so it stops looking
like a claim versus what's actually running.
