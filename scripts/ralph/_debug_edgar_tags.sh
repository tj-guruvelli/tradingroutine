#!/usr/bin/env bash
set -euo pipefail
UA="tradingroutine-bot guruvelli2012@gmail.com"
ecurl() { curl -fsS --ssl-no-revoke -H "User-Agent: $UA" "$@"; }
cik="$1"
ecurl "https://data.sec.gov/api/xbrl/companyfacts/CIK${cik}.json" | node -e '
const j = JSON.parse(require("fs").readFileSync(0, "utf8"));
const g = (j.facts && j.facts["us-gaap"]) || {};
const keys = Object.keys(g).filter(k => /revenue|sales|income/i.test(k));
console.log(keys.join("\n"));
'
