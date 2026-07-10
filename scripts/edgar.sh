#!/usr/bin/env bash
# SEC EDGAR wrapper. Free, no API key. All EDGAR calls go through here.
# SEC fair-access limit is 10 req/s; this script makes at most 2 sequential
# calls per invocation (ticker-map cache fetch + one data call).
# Usage: bash scripts/edgar.sh <subcommand> [args...]
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# SEC requires contact info in the User-Agent (public-repo-safe).
UA="tradingroutine-bot guruvelli2012@gmail.com"
# --ssl-no-revoke: Windows schannel curl + AV HTTPS interception fails cert
# revocation checks (CRYPT_E_NO_REVOCATION_CHECK). No-op on non-schannel builds.
ecurl() { curl -fsS --ssl-no-revoke -H "User-Agent: $UA" "$@"; }

TICKERS="$ROOT/data/edgar_tickers.json"

fetch_tickers() {
  mkdir -p "$ROOT/data"
  # Cache the SEC ticker->CIK map; refetch if missing or older than 1 day.
  if [[ ! -f "$TICKERS" ]] || [[ -n "$(find "$TICKERS" -mtime +0 -print 2>/dev/null)" ]]; then
    # temp + mv: a dropped connection must not leave a truncated cache with a fresh mtime
    ecurl "https://www.sec.gov/files/company_tickers.json" -o "$TICKERS.tmp" && mv "$TICKERS.tmp" "$TICKERS"
  fi
}

resolve_cik() {
  # $1 = SYM (case-insensitive). Prints zero-padded 10-digit CIK. Exit 4 if not found.
  fetch_tickers
  node -e '
const fs = require("fs");
const sym = process.argv[1].toUpperCase();
const data = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
for (const k of Object.keys(data)) {
  if (String(data[k].ticker).toUpperCase() === sym) {
    console.log(String(data[k].cik_str).padStart(10, "0"));
    process.exit(0);
  }
}
process.exit(4);
' "$1" "$TICKERS"
}

cmd="${1:-}"
shift || true
case "$cmd" in
cik)
  sym="${1:?usage: cik SYM}"
  resolve_cik "$sym"
  ;;
filings)
  # usage: filings SYM [N]  (default N=8)
  # One line per filing: FORM FILING_DATE PRIMARY_DOC URL
  sym="${1:?usage: filings SYM [N]}"
  n="${2:-8}"
  cik="$(resolve_cik "$sym")"
  ecurl "https://data.sec.gov/submissions/CIK${cik}.json" | node -e '
const j = JSON.parse(require("fs").readFileSync(0, "utf8"));
const n = parseInt(process.argv[1], 10) || 8;
const r = j.filings.recent;
const cikNoPad = String(parseInt(j.cik, 10));
for (let i = 0; i < Math.min(n, r.form.length); i++) {
  const acc = r.accessionNumber[i].replace(/-/g, "");
  const doc = r.primaryDocument[i];
  console.log(`${r.form[i]} ${r.filingDate[i]} ${doc} https://www.sec.gov/Archives/edgar/data/${cikNoPad}/${acc}/${doc}`);
}
' "$n"
  ;;
facts)
  # usage: facts SYM
  # Last 8 entries each of Revenues + NetIncomeLoss as "end-date form value"
  sym="${1:?usage: facts SYM}"
  cik="$(resolve_cik "$sym")"
  ecurl "https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json" | node -e '
const j = JSON.parse(require("fs").readFileSync(0, "utf8"));
const g = (j.facts && j.facts["us-gaap"]) || {};
// Prefer whichever candidate tag has the most recent data point — companies
// migrate tags (e.g. AAPL "Revenues" froze in 2018 after the ASC 606 switch).
const lastEnd = (f) => {
  const u = f.units.USD || Object.values(f.units)[0] || [];
  return u.length ? u[u.length - 1].end : "";
};
const pick = (names) => {
  const c = names.map((x) => g[x]).filter(Boolean);
  return c.sort((a, b) => lastEnd(b).localeCompare(lastEnd(a)))[0] || null;
};
const show = (label, fact) => {
  console.log(label + ":");
  if (!fact) { console.log("  (not reported)"); return; }
  const units = fact.units.USD || Object.values(fact.units)[0] || [];
  for (const e of units.slice(-8)) console.log(`  ${e.end} ${e.form} ${e.val}`);
};
show("Revenues", pick(["Revenues", "RevenueFromContractWithCustomerExcludingAssessedTax"]));
show("NetIncomeLoss", pick(["NetIncomeLoss"]));
'
  ;;
*)
  echo "Usage: bash scripts/edgar.sh <cik SYM|filings SYM [N]|facts SYM>" >&2
  exit 1
  ;;
esac
