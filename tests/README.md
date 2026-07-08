# Tests

Dependency-free regression + security tests for the three bash API wrappers.
`curl` and `python` are mocked (`tests/mocks/`) so the suite runs offline and
needs **no API keys**.

```bash
bash tests/run_tests.sh
```

## What's covered (unit / security)
- **Alpaca defaults to PAPER** — the single most important safety property.
- LIVE endpoint used *only* when `ALPACA_ENDPOINT` is explicitly set.
- Correct HTTP verb + endpoint per subcommand (GET account/quote, POST orders, DELETE positions).
- `quote` uses the market-**data** host, not the trading host.
- Order JSON is passed through unmodified.
- Missing `ALPACA_API_KEY` → non-zero exit, names the var, makes **no** network call.
- `perplexity.sh` exits 3 (fallback signal) with no key; calls the API with a bearer token when keyed.
- `clickup.sh` falls back to a local file (exit 0, no network) when unconfigured; posts to the right channel URL when configured.

## Not covered here (needs live paper keys)
- **Integration**: real calls against Alpaca *paper* (account/positions/order round-trip).
- **E2E**: a dry-run of a full routine (`/pre-market`, `/portfolio`) in Claude Code.
Run those after you've added paper keys to `.env`.

## How the mocks work
`mocks/curl` records each request (method, URL, body, headers) to `$CURL_LOG`
and prints canned JSON chosen by URL; `mocks/python` emits `{}`. The runner puts
`tests/mocks` first on `PATH`, so the wrappers call the mocks instead of the real
binaries. No real endpoint is ever contacted.
