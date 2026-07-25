#!/usr/bin/env node
// analyst-state.mjs — per-symbol state tracker backing /analyst's "only alert
// on material change" gate. Zero npm deps (Node 18+): node:fs/path/url plus
// node:crypto for a sha1 fingerprint helper only — no HTTP calls, no other deps.
// Read-only w.r.t. the market: this script never touches Alpaca/EDGAR/Perplexity,
// it only diffs/persists the JSON signature /analyst builds from those sources.
//
// State file: data/analyst_state/<SYM>.json (dir created on first write)
//   { last_run_iso, sentiment_bucket, catalyst_fingerprint, filings_fingerprint,
//     fear_greed_bucket, fear_greed_score }
//
// Bucket definitions:
//   sentiment_bucket  ∈ {bearish, neutral, bullish} — caller's own read (from
//     market_sentiment / Perplexity fallback), passed through as-is.
//   fear_greed_bucket ∈ {extreme_fear, fear, neutral, greed, extreme_greed} on a
//     -1.0..+1.0 composite score (mirrors the "-0.78 · EXTREME FEAR" screenshot
//     shape): |score| >= 0.6 -> extreme_{fear,greed}; 0.2 <= |score| < 0.6 ->
//     {fear,greed}; |score| < 0.2 -> neutral. /analyst computes the score; this
//     script only stores/compares the resulting bucket label.
//
// Fingerprint design (either style accepted, per field):
//   - Pass "catalyst_fingerprint" / "filings_fingerprint" directly — an opaque
//     string you already computed (e.g. via this script's own `hash`
//     subcommand, or inline `node -e`). Used as-is, no further hashing.
//   - OR pass "catalyst_text" / "filings_text" — raw text (e.g. "top headline
//     | 2026-07-10") — this script sha1-hashes it internally via node:crypto.
//   If both are present the explicit *_fingerprint wins. Exactly one of the
//   two must be present per field. This keeps diff/update as the single
//   source of truth for what "changed" means, while letting callers pick
//   whichever is more convenient.
//
// CLI:
//   node scripts/analyst-state.mjs diff SYM '<json signature>'
//     Exit 0 = material change: sentiment_bucket changed, OR catalyst_fingerprint
//     changed, OR filings_fingerprint changed, OR fear_greed_bucket moved more
//     than one bucket step -- OR no prior state exists (first run always
//     "changes"). Exit 1 = nothing material changed. Exit 2 = usage/validation
//     error. Prints a short JSON summary of what changed to stdout either way.
//   node scripts/analyst-state.mjs update SYM '<json signature>'
//     Persists the signature as current state. `last_run_iso` is taken from the
//     input JSON if present, else generated via new Date().toISOString() (this
//     is a live operational script, not a resumable workflow, so that's fine).
//     Exit 0 on success, 2 on error.
//   node scripts/analyst-state.mjs hash "<text>"
//     Convenience: prints the sha1 hex digest of <text> to stdout. Lets callers
//     build a *_fingerprint value without shelling to `node -e`.
//
// Input signature JSON (same shape for diff and update):
//   {
//     "sentiment_bucket": "bullish"|"neutral"|"bearish",
//     "catalyst_fingerprint": "<opaque string>",      // or "catalyst_text": "<raw text>"
//     "filings_fingerprint": "<opaque string>",       // or "filings_text": "<raw text>"
//     "fear_greed_bucket": "extreme_fear"|"fear"|"neutral"|"greed"|"extreme_greed",
//     "fear_greed_score": -1.0..1.0,
//     "last_run_iso": "2026-07-10T18:00:00.000Z"      // optional, update only
//   }

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const STATE_DIR = join(ROOT, 'data', 'analyst_state');

const SENTIMENT_BUCKETS = ['bearish', 'neutral', 'bullish'];
const FEAR_GREED_BUCKETS = ['extreme_fear', 'fear', 'neutral', 'greed', 'extreme_greed'];

function fail(msg) {
  process.stderr.write(`analyst-state.mjs error: ${msg}\n`);
  process.exit(2);
}

function usage() {
  fail(
    'usage:\n' +
    "  node scripts/analyst-state.mjs diff SYM '<json signature>'\n" +
    "  node scripts/analyst-state.mjs update SYM '<json signature>'\n" +
    '  node scripts/analyst-state.mjs hash "<text>"'
  );
}

function sha1(text) {
  return createHash('sha1').update(String(text), 'utf8').digest('hex');
}

function resolveFingerprint(raw, fingerprintKey, textKey) {
  if (typeof raw[fingerprintKey] === 'string' && raw[fingerprintKey].length > 0) {
    return raw[fingerprintKey]; // already an opaque fingerprint — use as-is
  }
  if (typeof raw[textKey] === 'string') {
    return sha1(raw[textKey]); // raw text — hash internally
  }
  fail(`signature must include either "${fingerprintKey}" (string) or "${textKey}" (string to hash)`);
}

function parseSignature(jsonArg) {
  let raw;
  try {
    raw = JSON.parse(jsonArg);
  } catch (e) {
    fail(`signature is not valid JSON: ${e.message}`);
    return; // unreachable, keeps linters happy
  }
  if (!SENTIMENT_BUCKETS.includes(raw.sentiment_bucket)) {
    fail(`sentiment_bucket must be one of ${SENTIMENT_BUCKETS.join('|')}, got ${JSON.stringify(raw.sentiment_bucket)}`);
  }
  if (!FEAR_GREED_BUCKETS.includes(raw.fear_greed_bucket)) {
    fail(`fear_greed_bucket must be one of ${FEAR_GREED_BUCKETS.join('|')}, got ${JSON.stringify(raw.fear_greed_bucket)}`);
  }
  const score = Number(raw.fear_greed_score);
  if (!Number.isFinite(score) || score < -1 || score > 1) {
    fail(`fear_greed_score must be a number in [-1.0, 1.0], got ${JSON.stringify(raw.fear_greed_score)}`);
  }
  return {
    sentiment_bucket: raw.sentiment_bucket,
    catalyst_fingerprint: resolveFingerprint(raw, 'catalyst_fingerprint', 'catalyst_text'),
    filings_fingerprint: resolveFingerprint(raw, 'filings_fingerprint', 'filings_text'),
    fear_greed_bucket: raw.fear_greed_bucket,
    fear_greed_score: score,
    last_run_iso: typeof raw.last_run_iso === 'string' ? raw.last_run_iso : new Date().toISOString(),
  };
}

function statePath(sym) {
  return join(STATE_DIR, `${sym}.json`);
}

function readState(sym) {
  const p = statePath(sym);
  if (!existsSync(p)) return null;
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch (e) {
    fail(`existing state file ${p} is corrupt: ${e.message}`);
    return null; // unreachable
  }
}

function writeState(sym, state) {
  mkdirSync(STATE_DIR, { recursive: true });
  const p = statePath(sym);
  const tmp = `${p}.tmp`;
  // temp + rename: a dropped write must not leave a truncated state file behind
  writeFileSync(tmp, JSON.stringify(state, null, 2) + '\n', 'utf8');
  renameSync(tmp, p);
}

function fearGreedStepDiff(fromBucket, toBucket) {
  return Math.abs(FEAR_GREED_BUCKETS.indexOf(toBucket) - FEAR_GREED_BUCKETS.indexOf(fromBucket));
}

function cmdDiff(sym, jsonArg) {
  const next = parseSignature(jsonArg);
  const prior = readState(sym);

  if (!prior) {
    console.log(JSON.stringify({
      symbol: sym,
      first_run: true,
      material_change: true,
      reason: 'no prior state for this symbol — first run always alerts',
    }, null, 2));
    process.exit(0);
  }

  const sentimentChanged = prior.sentiment_bucket !== next.sentiment_bucket;
  const catalystChanged = prior.catalyst_fingerprint !== next.catalyst_fingerprint;
  const filingsChanged = prior.filings_fingerprint !== next.filings_fingerprint;
  const stepDiff = fearGreedStepDiff(prior.fear_greed_bucket, next.fear_greed_bucket);
  const fearGreedChanged = stepDiff > 1;

  const materialChange = sentimentChanged || catalystChanged || filingsChanged || fearGreedChanged;

  console.log(JSON.stringify({
    symbol: sym,
    first_run: false,
    material_change: materialChange,
    last_run: prior.last_run_iso,
    changed: {
      sentiment_bucket: { changed: sentimentChanged, from: prior.sentiment_bucket, to: next.sentiment_bucket },
      catalyst: { changed: catalystChanged },
      filings: { changed: filingsChanged },
      fear_greed_bucket: { changed: fearGreedChanged, from: prior.fear_greed_bucket, to: next.fear_greed_bucket, step_diff: stepDiff },
    },
  }, null, 2));
  process.exit(materialChange ? 0 : 1);
}

function cmdUpdate(sym, jsonArg) {
  const next = parseSignature(jsonArg);
  writeState(sym, next);
  console.log(JSON.stringify({ symbol: sym, persisted: true, state: next }, null, 2));
  process.exit(0);
}

function cmdHash(text) {
  if (typeof text !== 'string' || text.length === 0) usage();
  console.log(sha1(text));
  process.exit(0);
}

function main() {
  const subcommand = process.argv[2];
  if (subcommand === 'hash') {
    cmdHash(process.argv[3]);
    return;
  }
  const [, symArg, jsonArg] = process.argv.slice(2);
  if (!subcommand || !symArg || !jsonArg) usage();
  const sym = symArg.toUpperCase();
  if (subcommand === 'diff') return cmdDiff(sym, jsonArg);
  if (subcommand === 'update') return cmdUpdate(sym, jsonArg);
  usage();
}

main();
