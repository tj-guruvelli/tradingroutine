import 'dotenv/config';
const need = ['ALPACA_API_KEY', 'ALPACA_SECRET_KEY'];
const opt = ['PERPLEXITY_API_KEY', 'TELEGRAM_BOT_TOKEN', 'CLICKUP_API_KEY'];
for (const k of need) console.log(k + '=' + (process.env[k] ? 'SET' : 'MISSING'));
for (const k of opt) console.log(k + '=' + (process.env[k] ? 'SET' : 'missing'));
