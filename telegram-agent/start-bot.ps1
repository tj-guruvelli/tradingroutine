# start-bot.ps1 — launcher for the Telegram conversational agent (telegram-agent/bot.mjs).
# Registered as Windows Scheduled Task "TradingBot-TelegramAgent" (trigger: ONLOGON).
$ErrorActionPreference = 'Stop'
$root = 'C:\Users\guruv\Documents\DeskSpace\sec-brain\Coding\Trading\trading-bot'
Set-Location $root

# AVG HTTPS interception on this machine breaks Node's default cert validation.
# Node 22+ honors NODE_USE_SYSTEM_CA=1 to trust the Windows certificate store.
$env:NODE_USE_SYSTEM_CA = '1'

New-Item -ItemType Directory -Force -Path (Join-Path $root 'logs') | Out-Null

# Single-instance guard: bail if a bot.mjs node process is already running.
$existing = Get-CimInstance Win32_Process -Filter "Name='node.exe'" |
    Where-Object { $_.CommandLine -match 'telegram-agent[\\/]bot\.mjs' }
if ($existing) { exit 0 }

# Stray stdout/stderr (startup failures, crash traces) goes to a .launcher.log sidecar.
# It must NOT be the main telegram-agent-YYYY-MM-DD.log: cmd's >> redirect holds that file
# without FILE_SHARE_WRITE, which makes bot.mjs's own appendFileSync fail with EBUSY.
$log = Join-Path $root ("logs\telegram-agent-{0:yyyy-MM-dd}.launcher.log" -f (Get-Date))
cmd /c "node telegram-agent\bot.mjs >> `"$log`" 2>&1"
