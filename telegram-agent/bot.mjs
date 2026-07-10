#!/usr/bin/env node
// bot.mjs — conversational Telegram gateway to the trading-bot repo via headless Claude Code CLI.
// READ-ONLY by construction: the allowedTools whitelist below has no order/trade/close wrappers.
// No npm deps (Node 22+ built-in fetch). Run via telegram-agent/start-bot.ps1, which sets
// NODE_USE_SYSTEM_CA=1 (AVG HTTPS interception on this machine breaks default cert validation).
import { readFileSync, writeFileSync, appendFileSync, mkdirSync, existsSync } from 'node:fs';
import { spawn, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
// npm-global shim target discovered at install time (claude.cmd wraps this exe). A native exe is
// spawn-safe with shell:false + args array — never route untrusted chat text through a shell.
const FALLBACK_CLAUDE = 'C:\\nvm4w\\nodejs\\node_modules\\@anthropic-ai\\claude-code\\bin\\claude.exe';
const CLAUDE_TIMEOUT_MS = 120_000; // brake: kill any claude spawn after 120s
const HOURLY_CAP = 30;             // brake: max handled messages per rolling hour
const CHUNK = 4000;                // Telegram hard limit is 4096 chars per message
const ALLOWED_TOOLS = [
  'Read', 'Grep', 'Glob',
  'Bash(bash scripts/alpaca.sh account*)',
  'Bash(bash scripts/alpaca.sh positions*)',
  'Bash(bash scripts/alpaca.sh quote*)',
  'Bash(bash scripts/alpaca.sh orders*)',
  'Bash(bash scripts/tax.sh*)',
  'Bash(node scripts/risk.mjs*)',
  'Bash(bash scripts/edgar.sh*)',
].join(',');
const PREAMBLE = "You are the trading-bot's Telegram interface. READ-ONLY session: never place " +
  'orders, never modify files, never run /trade or /market-open. If asked to trade, reply that ' +
  'trades require the operator at the desk.';

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

function fail(msg) {
  process.stderr.write(`bot.mjs error: ${msg}\n`);
  process.exit(1);
}

loadEnv();
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = String(process.env.TELEGRAM_CHAT_ID || '');
if (!TOKEN || !CHAT_ID) fail('TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not set (checked process.env and .env)');
// Private chats have positive ids; a group id (negative) would make every group
// member an authorized operator. Refuse to start rather than widen the gate.
if (!(Number(CHAT_ID) > 0)) fail('TELEGRAM_CHAT_ID must be a positive (private-chat) id — refusing to serve a group');
const API = `https://api.telegram.org/bot${TOKEN}`;

// The claude child never needs the Telegram secrets (allowed wrappers re-source
// .env themselves); withholding them closes the "echo $TELEGRAM_BOT_TOKEN via an
// allowed Bash glob" exfil path.
const CHILD_ENV = { ...process.env };
delete CHILD_ENV.TELEGRAM_BOT_TOKEN;
delete CHILD_ENV.TELEGRAM_CHAT_ID;

const scrub = (s) => String(s).split(TOKEN).join('<token>'); // never let the token reach a log line

function log(chatId, inbound, outcome) {
  const now = new Date().toISOString();
  const head = String(inbound).replace(/\s+/g, ' ').slice(0, 80);
  const line = `${now} | ${chatId} | ${head} | ${scrub(outcome)}\n`;
  try {
    const dir = join(ROOT, 'logs');
    mkdirSync(dir, { recursive: true });
    appendFileSync(join(dir, `telegram-agent-${now.slice(0, 10)}.log`), line);
  } catch { /* logging must never kill the loop */ }
}

async function tg(method, params, timeoutMs = 30_000) {
  const res = await fetch(`${API}/${method}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(params || {}),
    signal: AbortSignal.timeout(timeoutMs),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.ok !== true) {
    throw new Error(`telegram ${method} failed: HTTP ${res.status} ${scrub(JSON.stringify(body)).slice(0, 200)}`);
  }
  return body.result;
}

async function sendReply(chatId, text) {
  const t = text && text.trim() ? text.trim() : '(empty reply)';
  let i = 0;
  while (i < t.length) {
    let end = Math.min(i + CHUNK, t.length);
    // never split a surrogate pair — Telegram 400s on a lone surrogate
    const cc = t.charCodeAt(end - 1);
    if (cc >= 0xd800 && cc <= 0xdbff && end < t.length) end += 1;
    await tg('sendMessage', { chat_id: chatId, text: t.slice(i, end) }); // plain text, no parse_mode
    i = end;
  }
}

function resolveClaude() {
  const probe = spawnSync('claude', ['--version'], { shell: false, timeout: 15_000 });
  if (!probe.error && probe.status === 0) return 'claude';
  if (existsSync(FALLBACK_CLAUDE)) return FALLBACK_CLAUDE;
  fail(`claude CLI not found on PATH nor at ${FALLBACK_CLAUDE} — npm install -g @anthropic-ai/claude-code`);
}
const CLAUDE_BIN = resolveClaude();

function askClaude(text) {
  return new Promise((resolve) => {
    // --strict-mcp-config with no MCP flags = zero MCP servers loaded. The user-scope
    // ~/.claude.json registers an alpaca MCP with order-placement tools; explicit
    // exclusion beats relying on the allowedTools deny layer alone.
    const args = ['-p', `${PREAMBLE}\n\n${text}`, '--output-format', 'text',
      '--max-turns', '15', '--allowedTools', ALLOWED_TOOLS, '--strict-mcp-config'];
    const child = spawn(CLAUDE_BIN, args, {
      cwd: ROOT, shell: false, windowsHide: true, env: CHILD_ENV,
      timeout: CLAUDE_TIMEOUT_MS, killSignal: 'SIGKILL',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let out = '';
    let err = '';
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { err += d; });
    child.on('error', (e) => resolve({ ok: false, out, err: String(e) }));
    child.on('close', (code, signal) => {
      if (signal) return resolve({ ok: false, timedOut: true, out, err });
      resolve({ ok: code === 0, out, err });
    });
  });
}

let handledAt = []; // timestamps of handled messages, rolling 1h window

function rateLimited() {
  handledAt = handledAt.filter((t) => t > Date.now() - 3600_000);
  return handledAt.length >= HOURLY_CAP;
}

async function handleUpdate(u) {
  const msg = u.message;
  if (!msg || !msg.chat || typeof msg.text !== 'string') return;
  const chatId = String(msg.chat.id);
  if (chatId !== CHAT_ID) { // security gate: owner's chat only — log id, never the text
    log(chatId, '', 'rejected: unauthorized chat id');
    return;
  }
  // Belt + suspenders: in a 1:1 chat the sender id equals the chat id. Anything
  // else (channel posts, forwarded bots) is rejected.
  if (String(msg.from && msg.from.id) !== CHAT_ID) {
    log(chatId, '', `rejected: sender ${msg.from && msg.from.id} != owner`);
    return;
  }
  if (rateLimited()) {
    log(chatId, msg.text, `rate-limited (${HOURLY_CAP}/h cap)`);
    await sendReply(chatId, 'rate limit, back in a bit');
    return;
  }
  handledAt = [...handledAt, Date.now()];
  log(chatId, msg.text, 'accepted — spawning claude');
  const res = await askClaude(msg.text);
  if (res.timedOut) {
    log(chatId, msg.text, 'claude timed out after 120s — killed');
    await sendReply(chatId, 'Sorry, that one took over two minutes and I had to stop it. Try a narrower question.');
    return;
  }
  if (!res.ok) {
    log(chatId, msg.text, `claude failed: ${String(res.err || 'exit != 0').replace(/\s+/g, ' ').slice(0, 200)}`);
    await sendReply(chatId, 'Something broke on my end answering that. The desk logs have details.');
    return;
  }
  await sendReply(chatId, res.out);
  log(chatId, msg.text, `replied ${res.out.trim().length} chars`);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const OFFSET_FILE = join(ROOT, 'logs', 'telegram-agent.offset');
function loadOffset() {
  try { return Math.max(0, parseInt(readFileSync(OFFSET_FILE, 'utf8'), 10) || 0); } catch { return 0; }
}
function saveOffset(o) {
  try { writeFileSync(OFFSET_FILE, String(o)); } catch { /* best effort */ }
}

async function main() {
  // ONLOGON task often starts before the network/AV proxy is ready — retry, don't die.
  let me = null;
  for (let attempt = 1; attempt <= 5 && !me; attempt++) {
    me = await tg('getMe').catch(async (e) => {
      if (attempt === 5) fail(`getMe failed after 5 tries — bad token or TLS interception (launcher must set NODE_USE_SYSTEM_CA=1): ${scrub((e && e.message) || e)}`);
      log('-', '', `getMe attempt ${attempt} failed — retrying in ${attempt * 15}s`);
      await sleep(attempt * 15_000);
      return null;
    });
  }
  log('-', '', `startup ok — @${me.username}, claude=${CLAUDE_BIN === 'claude' ? 'PATH' : FALLBACK_CLAUDE}, node=${process.version}`);
  let offset = loadOffset();
  let failures = 0;
  for (;;) {
    try {
      const updates = await tg('getUpdates', { timeout: 50, offset }, 65_000);
      failures = 0;
      for (const u of updates) {
        offset = Math.max(offset, u.update_id + 1);
        saveOffset(offset); // survive crash/reboot without re-answering the batch
        try { await handleUpdate(u); } // catch-all: one bad update never kills the loop
        catch (e) { log('-', '', `update handler error: ${scrub(String((e && e.message) || e)).slice(0, 200)}`); }
      }
    } catch (e) {
      failures += 1;
      const backoffMs = [5_000, 30_000, 60_000][Math.min(failures, 3) - 1];
      log('-', '', `getUpdates failure #${failures}: ${scrub(String((e && e.message) || e)).slice(0, 200)} — backing off ${backoffMs / 1000}s`);
      await sleep(backoffMs);
    }
  }
}

main().catch((e) => fail(scrub((e && e.message) || e)));
