#!/usr/bin/env bash
# Dependency-free regression + security tests for the three API wrappers.
# Mocks `curl` and `python` (tests/mocks/) so nothing hits the network and no
# real API keys are required. Usage:  bash tests/run_tests.sh
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
. "$HERE/lib/assert.sh"

export PATH="$HERE/mocks:$PATH"
WORK="$(mktemp -d)"
export CURL_LOG="$WORK/curl.log"
trap 'rm -rf "$WORK"; rm -f "$ROOT/DAILY-SUMMARY.md"' EXIT

[ -f "$ROOT/.env" ] && echo "WARNING: $ROOT/.env exists — tests assume none; results may skew."

ALP="$ROOT/scripts/alpaca.sh"; PPX="$ROOT/scripts/perplexity.sh"; CLK="$ROOT/scripts/clickup.sh"
STDOUT=""; STATUS=0
runw(){ : > "$CURL_LOG"; STDOUT="$("$@" 2> "$WORK/stderr.log")"; STATUS=$?; }

echo "== alpaca.sh =="
export ALPACA_API_KEY=pk_test ALPACA_SECRET_KEY=sk_test
unset ALPACA_ENDPOINT ALPACA_DATA_ENDPOINT

runw bash "$ALP" account
assert_grep     "$CURL_LOG" "paper-api\.alpaca\.markets/v2/account" "account defaults to PAPER endpoint (safety)"
assert_grep     "$CURL_LOG" "^CALL GET "                            "account uses GET"
assert_contains "$CURL_LOG" "APCA-API-KEY-ID: pk_test"             "account sends key header"
assert_eq       "$STATUS" 0                                         "account exits 0"

export ALPACA_ENDPOINT="https://api.alpaca.markets/v2"
runw bash "$ALP" account
assert_grep     "$CURL_LOG" "https://api\.alpaca\.markets/v2/account" "respects LIVE endpoint when explicitly set"
assert_not_grep "$CURL_LOG" "paper-api"                              "no PAPER endpoint once LIVE is set"
unset ALPACA_ENDPOINT

runw bash "$ALP" quote AAPL
assert_grep     "$CURL_LOG" "data\.alpaca\.markets/v2/stocks/AAPL/quotes/latest" "quote uses DATA endpoint"

runw bash "$ALP" order '{"symbol":"XOM","qty":"10","side":"buy","type":"market","time_in_force":"day"}'
assert_grep     "$CURL_LOG" "^CALL POST .*/orders"   "order uses POST /orders"
assert_contains "$CURL_LOG" '"symbol":"XOM"'         "order JSON body passed through unmodified"

runw bash "$ALP" close XOM
assert_grep     "$CURL_LOG" "^CALL DELETE .*/positions/XOM" "close uses DELETE /positions/SYM"

: > "$CURL_LOG"
ERR="$(env -u ALPACA_API_KEY -u ALPACA_SECRET_KEY bash "$ALP" account 2>&1)"; ST=$?
assert_ne "$ST" 0 "errors when ALPACA_API_KEY missing"
if echo "$ERR" | grep -q "ALPACA_API_KEY"; then pass "error names the missing var"; else fail "error names the missing var"; fi
if [ -s "$CURL_LOG" ]; then fail "no curl when key missing"; else pass "no curl when key missing"; fi

runw bash "$ALP" bogus
assert_eq "$STATUS" 1 "unknown subcommand exits 1"
if grep -q "Usage:" "$WORK/stderr.log"; then pass "unknown subcommand prints usage"; else fail "unknown subcommand prints usage"; fi

echo "== perplexity.sh =="
: > "$CURL_LOG"
env -u PERPLEXITY_API_KEY bash "$PPX" "oil price" >/dev/null 2>&1; ST=$?
assert_eq "$ST" 3 "exits 3 when PERPLEXITY_API_KEY unset (fallback signal)"
if [ -s "$CURL_LOG" ]; then fail "no curl when perplexity key missing"; else pass "no curl when perplexity key missing"; fi

export PERPLEXITY_API_KEY=ppx_test
runw bash "$PPX" "oil price today"
assert_contains "$CURL_LOG" "api.perplexity.ai/chat/completions" "calls Perplexity API when key set"
assert_contains "$CURL_LOG" "Authorization: Bearer ppx_test"    "sends bearer token"
assert_eq       "$STATUS" 0                                      "perplexity exits 0 on success"

echo "== clickup.sh =="
rm -f "$ROOT/DAILY-SUMMARY.md"
: > "$CURL_LOG"
OUT="$(env -u CLICKUP_API_KEY -u CLICKUP_WORKSPACE_ID -u CLICKUP_CHANNEL_ID bash "$CLK" "portfolio 12345 up 2pct")"; ST=$?
assert_eq "$ST" 0 "fallback exits 0 when ClickUp unconfigured"
if [ -s "$CURL_LOG" ]; then fail "no curl on fallback path"; else pass "no curl on fallback path"; fi
if [ -f "$ROOT/DAILY-SUMMARY.md" ]; then pass "fallback writes DAILY-SUMMARY.md"; else fail "fallback writes DAILY-SUMMARY.md"; fi
if grep -q "portfolio 12345" "$ROOT/DAILY-SUMMARY.md" 2>/dev/null; then pass "fallback file contains the message"; else fail "fallback file contains the message"; fi
rm -f "$ROOT/DAILY-SUMMARY.md"

export CLICKUP_API_KEY=ck_test CLICKUP_WORKSPACE_ID=900 CLICKUP_CHANNEL_ID=4-777-1
runw bash "$CLK" "hello world"
assert_contains "$CURL_LOG" "api.clickup.com/api/v3/workspaces/900/chat/channels/4-777-1/messages" "posts to correct ClickUp channel URL"
assert_grep     "$CURL_LOG" "^CALL POST"  "clickup uses POST"
assert_eq       "$STATUS" 0                "clickup exits 0 on success"

summary
