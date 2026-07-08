# loop-runner.ps1 — fires a single trading routine via the `claude` CLI, with
# the six loop-engineering brakes wired in:
#   1. Turn cap        — claude --max-turns
#   2. Dollar ceiling  — claude --max-budget-usd
#   3. Scope           — claude --allowedTools whitelist
#   4. Write-branches  — routine authors handle git; scheduler runs in repo root
#   5. Circuit breaker — repeat-call detector reading the stream-json
#   6. Watchdog        — progress-file mtime timer, alarms on silence
#
# Called by:
#   - Windows Task Scheduler (via scheduler.ps1)
#   - Manual invocation (e.g. .\scripts\loop-runner.ps1 -Routine pre-market)
#   - The `/loop` skill in interactive Claude Code
[CmdletBinding()]
param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("pre-market","market-open","midday","daily-summary","weekly-review","gappers","tjl","backtest","tax","portfolio","trade")]
    [string]$Routine,
    [Parameter(Mandatory=$false)]
    [string]$RepoRoot,
    [Parameter(Mandatory=$false)]
    [int]$MaxTurns = 50,
    [Parameter(Mandatory=$false)]
    [decimal]$MaxBudgetUsd = 2.00,
    [Parameter(Mandatory=$false)]
    [int]$WatchdogSeconds = 180,
    [Parameter(Mandatory=$false)]
    [switch]$DryRun,
    [Parameter(Mandatory=$false)]
    [switch]$SkipWeekend
)

$ErrorActionPreference = "Stop"

if (-not $RepoRoot) {
    $RepoRoot = (Resolve-Path (Join-Path (Split-Path -Parent $MyInvocation.MyCommand.Definition) "..")).Path
}
Set-Location $RepoRoot

# Weekend gate — trading routines are M-F. Skip early to save tokens.
if ($SkipWeekend) {
    $dow = (Get-Date).DayOfWeek
    if ($dow -eq [DayOfWeek]::Saturday -or $dow -eq [DayOfWeek]::Sunday) {
        Write-Host "loop-runner: weekend -- skipping $Routine"; exit 0
    }
}

$RoutinePath = Join-Path $RepoRoot "routines\$Routine.md"
$CommandPath = Join-Path $RepoRoot ".claude\commands\$Routine.md"
$LogDir      = Join-Path $RepoRoot "logs"
if (-not (Test-Path $LogDir)) { New-Item -ItemType Directory -Path $LogDir | Out-Null }

# Prefer routines/ prompt (production path) over .claude/commands/ (local dev).
$PromptFile = $null
if (Test-Path $RoutinePath) { $PromptFile = $RoutinePath }
elseif (Test-Path $CommandPath) { $PromptFile = $CommandPath }
else {
    Write-Error "No prompt file found for '$Routine'. Looked in:`n  $RoutinePath`n  $CommandPath"
    exit 2
}

$Date = Get-Date -Format "yyyy-MM-dd"
$Stamp = Get-Date -Format "yyyy-MM-dd_HHmmss"
$LogFile = Join-Path $LogDir "$Routine-$Date.log"
$StreamFile = Join-Path $LogDir "$Routine-$Stamp.stream.jsonl"

# Locate claude CLI. Prefer PATH, else check common install locations.
$ClaudeExe = (Get-Command claude -ErrorAction SilentlyContinue).Source
if (-not $ClaudeExe) {
    $Candidates = @(
        "$env:APPDATA\npm\claude.cmd",
        "$env:LOCALAPPDATA\Programs\claude\claude.exe"
    )
    foreach ($c in $Candidates) { if (Test-Path $c) { $ClaudeExe = $c; break } }
}
if (-not $ClaudeExe) {
    "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] loop-runner: FATAL - claude CLI not found on PATH." | Out-File -FilePath $LogFile -Append
    exit 3
}

$Prompt = Get-Content $PromptFile -Raw

# Scope whitelist per routine — least-privilege by default.
$AllowedTools = switch ($Routine) {
    "portfolio"     { "Read,Bash(bash scripts/alpaca.sh*)" }
    "pre-market"    { "Read,Write,Edit,Bash(bash scripts/*)" }
    "market-open"   { "Read,Write,Edit,Bash(bash scripts/*),Bash(git*)" }
    "midday"        { "Read,Write,Edit,Bash(bash scripts/*)" }
    "gappers"       { "Read,Write,Bash(bash scripts/*)" }
    "tjl"           { "Read,Write,Bash(bash scripts/*)" }
    "backtest"      { "Read,Write" }  # backtest = MCP calls only, no shell
    "tax"           { "Read,Write,Bash(bash scripts/tax.sh*),Bash(bash scripts/alpaca.sh*)" }
    default         { "Read,Write,Edit,Bash" }
}

$LogHeader = @"

===============================================================================
$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')  loop-runner  routine=$Routine
    prompt      : $PromptFile
    max-turns   : $MaxTurns
    max-budget  : `$$MaxBudgetUsd
    tools       : $AllowedTools
    watchdog    : ${WatchdogSeconds}s
===============================================================================
"@
$LogHeader | Out-File -FilePath $LogFile -Append -Encoding utf8

if ($DryRun) {
    "[dry-run] would invoke: $ClaudeExe -p --max-turns $MaxTurns --max-budget-usd $MaxBudgetUsd --allowedTools '$AllowedTools'" | Out-File -FilePath $LogFile -Append
    Write-Host "Dry-run OK. Prompt file: $PromptFile"
    exit 0
}

# Fire claude in stream-json mode so we can implement circuit breaker + watchdog.
$ArgList = @(
    "-p",
    "--max-turns", $MaxTurns,
    "--max-budget-usd", $MaxBudgetUsd,
    "--allowedTools", $AllowedTools,
    "--permission-mode", "acceptEdits",
    "--output-format", "stream-json",
    "--verbose"
)

try {
    $psi = New-Object System.Diagnostics.ProcessStartInfo
    $psi.FileName = $ClaudeExe
    $psi.Arguments = ($ArgList -join " ")
    $psi.RedirectStandardInput = $true
    $psi.RedirectStandardOutput = $true
    $psi.RedirectStandardError = $true
    $psi.UseShellExecute = $false
    $psi.CreateNoWindow = $true

    $proc = [System.Diagnostics.Process]::Start($psi)
    $proc.StandardInput.Write($Prompt)
    $proc.StandardInput.Close()

    # Consume stdout with circuit-breaker + watchdog.
    $lastToolCall = ""
    $repeatCount = 0
    $lastOutputAt = Get-Date

    $sw = New-Object System.IO.StreamWriter($StreamFile, $false)
    try {
        while (-not $proc.HasExited) {
            if ($proc.StandardOutput.EndOfStream) {
                Start-Sleep -Milliseconds 500
                # Watchdog — no output for $WatchdogSeconds → kill
                if ((New-TimeSpan -Start $lastOutputAt -End (Get-Date)).TotalSeconds -gt $WatchdogSeconds) {
                    "[$(Get-Date -Format 'HH:mm:ss')] loop-runner: WATCHDOG tripped ($WatchdogSeconds s silence) -- killing" | Out-File -FilePath $LogFile -Append
                    $proc.Kill(); break
                }
                continue
            }
            $line = $proc.StandardOutput.ReadLine()
            if (-not $line) { continue }
            $lastOutputAt = Get-Date
            $sw.WriteLine($line)

            # Circuit breaker — detect three consecutive byte-identical tool_use
            try {
                $evt = $line | ConvertFrom-Json -ErrorAction SilentlyContinue
                if ($evt -and $evt.type -eq "content_block_delta" -and $evt.delta.type -eq "tool_use_delta") {
                    $sig = "$($evt.delta.name)|$($evt.delta.input | ConvertTo-Json -Compress)"
                    if ($sig -eq $lastToolCall) {
                        $repeatCount++
                        if ($repeatCount -ge 3) {
                            "[$(Get-Date -Format 'HH:mm:ss')] loop-runner: CIRCUIT BREAKER tripped ($sig repeated 3x) -- killing" | Out-File -FilePath $LogFile -Append
                            $proc.Kill(); break
                        }
                    } else {
                        $lastToolCall = $sig; $repeatCount = 1
                    }
                }
            } catch { <# non-JSON line, ignore #> }
        }
    } finally {
        $sw.Close()
    }
    $proc.WaitForExit()
    $ExitCode = $proc.ExitCode
} catch {
    "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] loop-runner: exception - $($_.Exception.Message)" | Out-File -FilePath $LogFile -Append
    exit 4
}

"[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] loop-runner: exit $ExitCode  stream=$StreamFile" | Out-File -FilePath $LogFile -Append
exit $ExitCode
