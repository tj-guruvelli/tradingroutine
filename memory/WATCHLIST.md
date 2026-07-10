# Market Watchlist & Journal

_Not financial advice. Tickers to verify are flagged `⚠`. Deep research in progress (see RESEARCH.md)._
_Created via Claude — file-based because the TradingView in-app watchlist writes were failing this session._

## Tier 1 — full tracked universe (59 tickers, drives /pipeline STEP 2)

Every ticker below is scanned by `combined_analysis` when `/pipeline` or a
full watchlist scan runs — synced 1:1 with `config/rules.json`
`watchlist_tiers.immediate`. Unresolved symbols (BREA, APT, LAKE) are
excluded from scanning until their actual company/ticker is confirmed —
never guessed.

## Active Trade Ideas (journal)

| Ticker | Name | Plan (as noted) | Thesis tag | Status |
|--------|------|-----------------|------------|--------|
| CRWV | CoreWeave | Buy $133 × 10 sh | AI GPU cloud | idea |
| OKLO | Oklo | Buy $135 × 10 sh | Altman nuclear-for-AI | idea |
| NIO  | NIO | "Buy $7 / sell $5" × 100 sh ⚠ (check direction) | China EV | idea |
| NBIS | Nebius | watch — "Microsoft invested" | AI cloud | watch |
| BMNR | BitMine Immersion | watch | Peter Thiel / ETH treasury | watch |
| BLSH | Bullish | watch | Thiel-backed crypto exchange | watch |
| BE   | Bloom Energy | watch | Advanced fuel cells | watch |
| OPEN | Opendoor | watch | Real-estate / iBuying | watch |
| RR ⚠ | Richtech Robotics | watch | Physical AI (Jensen mention) | watch |

## Watchlist by theme

### Core / mega-cap
META · CMCSA · GOOG · V · MA · MSFT · T · ORCL

### Defense ("NATO / WW3" theme)
NOC (Northrop) · BA (Boeing) · LMT (Lockheed) · RTX (Raytheon) · KOG.OL (Kongsberg, Oslo)

### AI infrastructure
CRWV (CoreWeave) · NBIS (Nebius) · OKLO (Oklo, nuclear) · RR ⚠ (Richtech, physical AI)

### Semiconductors / equipment
AMKR (Amkor) · KLIC (Kulicke & Soffa) · SYNA (Synaptics) · QMMM ⚠ · WLDS ⚠ · AGMH ⚠ · BREA ⚠ · PTNM ⚠ · PEPG ⚠ (note: PepGen is biotech, not semi)

### Shipping / tankers / industrials
HAFN (Hafnia) · BWLP (BW LPG) · TRMD (Torm) · ZIM · CMBT (CMB.TECH) · BCI ⚠

### Crypto-adjacent
BMNR (BitMine, Thiel) · BLSH (Bullish, Thiel)

### Energy
BE (Bloom Energy)

### Automotive / EV
NIO

### Real estate
OPEN (Opendoor) · APT ⚠ (verify — "Apt": Alpha Pro Tech? AppTech? clarify) · LAKE ⚠ (Lakeland Industries?)

### Quantum
RGTI (Rigetti) · QBTS (D-Wave) · GFS (GlobalFoundries) · QTUM (ETF)

### Space
RKLB (Rocket Lab) · IRDM (Iridium) · ASTS (AST SpaceMobile) · PL (Planet) · LUNR (Intuitive Machines) · SATS (EchoStar) · QCOM (Qualcomm) · SATL (Satellogic) · HXL (Hexcel) · STM (STMicro) · RDW (Redwire) · BKSY (BlackSky) · UFO (ETF)

### Drones
UMAC (Unusual Machines) · KTOS (Kratos) · ONDS (Ondas) · AMPX (Amprius) · DPRO (Draganfly) · RCAT (Red Cat) · AVAV (AeroVironment)

## News / theses captured
- **META** — NYT story on metaverse dysfunction: only 58% of employees understood the strategy; projects nicknamed "make Mark happy"; leadership exodus (Horizon head left); Zuckerberg's "get on board or get out" stance.
- **Defense** — thesis is a NATO/defense-spending buildup → primes NOC/BA/LMT/RTX + European KOG.
- **AI/nuclear** — Oklo (Sam Altman) and CoreWeave/Nebius as AI-buildout plays; Richtech tagged to Jensen Huang "physical AI."

## Notes
- The **in-app TradingView watchlist** still needs one manual step: open the **Watchlist panel** in TradingView, then I can push these in via the MCP.
- Automated **daily** morning briefs need scheduling (cloud-routine/cron), not the live desktop MCP.
