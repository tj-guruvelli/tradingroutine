# scheduler.ps1 — register/deregister the daily trading routines in Windows Task Scheduler.
#
# Usage (from repo root, PowerShell):
#   .\scripts\scheduler.ps1 install   # create all tasks
#   .\scripts\scheduler.ps1 remove    # remove all tasks
#   .\scripts\scheduler.ps1 status    # show status of each
#   .\scripts\scheduler.ps1 run <NAME> # trigger one on demand
#
# All times are LOCAL system time. Adjust below if you're not on Central time.
#
# Requires: `claude` CLI on PATH (bundled VS Code extension provides it; if not,
#           install via `npm i -g @anthropic-ai/claude-code`).
#
# IMPLEMENTATION NOTE: uses schtasks.exe, NOT the Register-ScheduledTask cmdlet.
# The cmdlet's -Principal/-LogonType S4U path requires "Log on as a batch job"
# rights that need an elevated (admin) session to grant. schtasks.exe registers
# the task under the current interactive user without that requirement — this
# is what actually works from a non-admin shell. Verified empirically 2026-07-07.
#
# Safety: tasks run as the current user; no elevated privileges required.
[CmdletBinding()]
param(
    [Parameter(Mandatory=$false, Position=0)]
    [ValidateSet("install","remove","status","run")]
    [string]$Action = "status",
    [Parameter(Mandatory=$false, Position=1)]
    [string]$Name
)

$ErrorActionPreference = "Stop"

# Resolve repo root as the parent of this script's directory
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$RepoRoot  = (Resolve-Path (Join-Path $ScriptDir "..")).Path

# TIME ZONE NOTE: Task Scheduler runs at LOCAL system time. Times here are
# expressed in LOCAL time. If your machine is on Central time, the Humbled
# Trader NY-market times (08:30 ET, 10:05 ET, etc.) become 07:30 CT, 09:05 CT.
# Adjust the constants below to match your machine's TZ vs NY.

$WEEKDAYS = "MON,TUE,WED,THU,FRI"

# Base swing-trading cron (Nate Herk blueprint — daily fires, weekdays only)
$Routines = @(
    @{ Name="TradingBot-PreMarket";    Routine="pre-market";    Time="08:00" },
    @{ Name="TradingBot-MarketOpen";   Routine="market-open";   Time="09:35" },
    @{ Name="TradingBot-Midday";       Routine="midday";        Time="12:00" },
    @{ Name="TradingBot-DailySummary"; Routine="daily-summary"; Time="16:15" }
)
# Weekly review runs Friday only
$WeeklyReview = @{ Name="TradingBot-WeeklyReview"; Routine="weekly-review"; Time="17:00"; DayOfWeek="FRI" }

# Humbled Trader scanners (repetition triggers — fire every N minutes across a window)
# Scanner A (gappers) — 08:30 NY, every 30 min for 5h30m (-> ~14:00 NY)
# Scanner B (TJL)     — 10:05 NY, every 30 min for 4h55m (-> ~15:00 NY)
$Scanners = @(
    @{
        Name="TradingBot-ScannerA-Gappers"
        Routine="gappers"
        StartTime="08:30"
        RepetitionMinutes=30
        Duration="05:30"
    },
    @{
        Name="TradingBot-ScannerB-TJL"
        Routine="tjl"
        StartTime="10:05"
        RepetitionMinutes=30
        Duration="04:55"
    },
    @{
        Name="TradingBot-ScannerC-SetupScan"
        Routine="setup-scan"
        StartTime="08:35"
        RepetitionMinutes=30
        Duration="05:00"
    }
)

function Get-LoopRunnerPath { Join-Path $ScriptDir "loop-runner.ps1" }

function Build-Command {
    param([string]$Routine)
    $runner = Get-LoopRunnerPath
    # schtasks /TR needs the full command as ONE quoted string.
    return "powershell.exe -NoProfile -ExecutionPolicy Bypass -File `"$runner`" -Routine $Routine -RepoRoot `"$RepoRoot`""
}

function Install-Task {
    param([hashtable]$T)
    $cmd = Build-Command $T.Routine
    $days = if ($T.ContainsKey("DayOfWeek")) { $T.DayOfWeek } else { $WEEKDAYS }
    $args = @(
        "/Create", "/TN", $T.Name, "/TR", $cmd,
        "/SC", "WEEKLY", "/D", $days, "/ST", $T.Time, "/F"
    )
    $out = & schtasks $args 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  installed  $($T.Name) @ $($T.Time) [$days]"
    } else {
        Write-Host "  FAILED     $($T.Name): $out" -ForegroundColor Red
    }
}

function Install-ScannerTask {
    param([hashtable]$T)
    $cmd = Build-Command $T.Routine
    $args = @(
        "/Create", "/TN", $T.Name, "/TR", $cmd,
        "/SC", "WEEKLY", "/D", $WEEKDAYS, "/ST", $T.StartTime,
        "/RI", $T.RepetitionMinutes, "/DU", $T.Duration, "/F"
    )
    $out = & schtasks $args 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  installed  $($T.Name) @ $($T.StartTime), every $($T.RepetitionMinutes)m for $($T.Duration)"
    } else {
        Write-Host "  FAILED     $($T.Name): $out" -ForegroundColor Red
    }
}

function Remove-Task {
    param([string]$N)
    $out = & schtasks /Delete /TN $N /F 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  removed    $N"
    } else {
        Write-Host "  (not present) $N"
    }
}

function Show-Status {
    param([hashtable]$T)
    $out = & schtasks /Query /TN $T.Name /FO LIST 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host ("  {0,-30}  not installed" -f $T.Name)
        return
    }
    $nextRun = ($out | Select-String "^Next Run Time:\s*(.+)$").Matches.Groups[1].Value
    $status  = ($out | Select-String "^Status:\s*(.+)$").Matches.Groups[1].Value
    Write-Host ("  {0,-30}  next: {1,-22} status: {2}" -f $T.Name, $nextRun, $status)
}

switch ($Action) {
    "install" {
        Write-Host "Installing scheduled tasks (via schtasks.exe, no admin required)..."
        foreach ($t in $Routines) { Install-Task $t }
        Install-Task $WeeklyReview
        foreach ($t in $Scanners) { Install-ScannerTask $t }
        Write-Host "Done. Verify: .\scripts\scheduler.ps1 status"
    }
    "remove" {
        Write-Host "Removing scheduled tasks..."
        foreach ($t in $Routines) { Remove-Task $t.Name }
        Remove-Task $WeeklyReview.Name
        foreach ($t in $Scanners) { Remove-Task $t.Name }
    }
    "status" {
        Write-Host "Task Scheduler status:"
        foreach ($t in $Routines) { Show-Status $t }
        Show-Status $WeeklyReview
        foreach ($t in $Scanners) { Show-Status $t }
    }
    "run" {
        if (-not $Name) { Write-Error "Missing routine name. e.g. .\scripts\scheduler.ps1 run pre-market"; exit 1 }
        $runner = Get-LoopRunnerPath
        & powershell.exe -NoProfile -ExecutionPolicy Bypass -File $runner -Routine $Name -RepoRoot $RepoRoot
    }
}
