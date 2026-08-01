# risk-widget.ps1 — always-on-top desk widget for the risk card.
#
# READ-ONLY, PAPER ACCOUNT. This window only displays what scripts/risk-widget.mjs
# computes (circuit-breaker daily stop, A/B/C ATR position tiers, SPY scoreboard).
# It never places, modifies, or cancels an order.
# v2 idea (documented, not built): hard-STOP enforcement at the daily limit,
# i.e. auto-flatten/block when the circuit breaker trips. Today it only displays.
#
# Usage:  powershell -NoProfile -ExecutionPolicy Bypass -File scripts\risk-widget.ps1 [-Symbol SPY] [-SmokeTest]
#   -Symbol    ticker passed through to risk-widget.mjs (default SPY)
#   -SmokeTest create the window, auto-close after 2 seconds, print SMOKE-PASS
#
# Built via XamlReader (NOT Add-Type C# compilation, which this machine's AV breaks).
# Refreshes every 5 minutes via DispatcherTimer; on refresh failure it keeps
# showing the last-good data plus a STALE marker and the error text.
[CmdletBinding()]
param(
    [Parameter(Mandatory=$false, Position=0)]
    [string]$Symbol = "SPY",
    [switch]$SmokeTest
)

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$MjsPath   = Join-Path $ScriptDir "risk-widget.mjs"

if (-not (Test-Path $MjsPath)) {
    Write-Host "risk-widget.ps1: cannot find $MjsPath" -ForegroundColor Red
    exit 1
}
$NodeCmd = Get-Command node -ErrorAction SilentlyContinue
if ($null -eq $NodeCmd) {
    Write-Host "risk-widget.ps1: 'node' not found on PATH. Install Node.js or fix PATH." -ForegroundColor Red
    exit 1
}

try {
    Add-Type -AssemblyName PresentationFramework, PresentationCore, WindowsBase
} catch {
    Write-Host "risk-widget.ps1: failed to load WPF assemblies: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Runs the node script and returns a parsed object, or throws with a readable message.
function Get-WidgetData {
    param([string]$Sym)
    $raw = & node $MjsPath $Sym 2>$null
    if ($LASTEXITCODE -ne 0 -or -not $raw) {
        throw "node risk-widget.mjs exited $LASTEXITCODE (no output). Check .env keys / TLS (NODE_EXTRA_CA_CERTS)."
    }
    try {
        return ($raw -join "`n") | ConvertFrom-Json
    } catch {
        throw "could not parse risk-widget.mjs JSON: $($_.Exception.Message)"
    }
}

$Xaml = @'
<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Risk Widget" Width="300" Height="360" Topmost="True"
        ResizeMode="NoResize" WindowStartupLocation="Manual"
        Background="#0d1117" WindowStyle="ToolWindow" ShowInTaskbar="True">
  <StackPanel Margin="12">
    <TextBlock x:Name="Header" Text="RISK WIDGET" FontFamily="Consolas" FontSize="14"
               FontWeight="Bold" Foreground="#58a6ff"/>
    <TextBlock x:Name="AsOf" Text="loading..." FontFamily="Consolas" FontSize="10"
               Foreground="#8b949e" Margin="0,2,0,6"/>
    <Border x:Name="TripBanner" Background="#da3633" CornerRadius="4" Padding="6"
            Margin="0,0,0,6" Visibility="Collapsed">
      <TextBlock Text="CIRCUIT BREAKER TRIPPED" FontFamily="Consolas" FontSize="13"
                 FontWeight="Bold" Foreground="White" HorizontalAlignment="Center"/>
    </Border>
    <TextBlock Text="DAILY STOP" FontFamily="Consolas" FontSize="11" FontWeight="Bold"
               Foreground="#8b949e"/>
    <TextBlock x:Name="Equity" FontFamily="Consolas" FontSize="12" Foreground="#c9d1d9"/>
    <TextBlock x:Name="Drawdown" FontFamily="Consolas" FontSize="12" Foreground="#c9d1d9"/>
    <TextBlock x:Name="Floor" FontFamily="Consolas" FontSize="12" Foreground="#c9d1d9"
               Margin="0,0,0,8"/>
    <TextBlock x:Name="TiersHeader" Text="SIZE TIERS" FontFamily="Consolas" FontSize="11"
               FontWeight="Bold" Foreground="#8b949e"/>
    <TextBlock x:Name="Tiers" FontFamily="Consolas" FontSize="12" Foreground="#c9d1d9"
               Margin="0,0,0,8"/>
    <TextBlock Text="VS SPY (1M)" FontFamily="Consolas" FontSize="11" FontWeight="Bold"
               Foreground="#8b949e"/>
    <TextBlock x:Name="Scoreboard" FontFamily="Consolas" FontSize="12" Foreground="#c9d1d9"/>
    <TextBlock x:Name="Status" FontFamily="Consolas" FontSize="10" Foreground="#f0883e"
               TextWrapping="Wrap" Margin="0,8,0,0"/>
  </StackPanel>
</Window>
'@

try {
    $reader = [System.Xml.XmlNodeReader]::new([xml]$Xaml)
    $Window = [System.Windows.Markup.XamlReader]::Load($reader)
} catch {
    Write-Host "risk-widget.ps1: window creation failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

$Ctl = @{}
foreach ($n in "Header","AsOf","TripBanner","Equity","Drawdown","Floor","TiersHeader","Tiers","Scoreboard","Status") {
    $Ctl[$n] = $Window.FindName($n)
}

$Green = [System.Windows.Media.BrushConverter]::new().ConvertFromString("#3fb950")
$Red   = [System.Windows.Media.BrushConverter]::new().ConvertFromString("#f85149")
$Gray  = [System.Windows.Media.BrushConverter]::new().ConvertFromString("#8b949e")

function Update-Ui {
    param($d)
    $ds = $d.daily_stop
    $mkt = if ($d.market_open) { "open" } else { "CLOSED" }
    $Ctl.Header.Text = "RISK WIDGET  $Symbol  ($mkt)"
    $Ctl.AsOf.Text   = "as of $(Get-Date -Format 'HH:mm:ss')  (data: $($d.as_of))"
    $Ctl.Equity.Text = ("equity  `${0:N2}  (peak `${1:N2})" -f $ds.current_equity, $ds.peak_equity)
    $Ctl.Drawdown.Text = ("drawdown  {0}%  of {1}% max" -f $ds.drawdown_pct, $ds.max_drawdown_from_peak_pct)
    $Ctl.Floor.Text  = ("floor  `${0:N2}" -f $ds.equity_floor_before_circuit_breaker)
    $Ctl.TripBanner.Visibility = if ($ds.circuit_breaker_tripped) { "Visible" } else { "Collapsed" }

    $t = $d.position_size_tiers
    if ($null -ne $t -and $null -ne $t.A) {
        $Ctl.TiersHeader.Text = "SIZE TIERS  $($t.symbol) @ `$$($t.price)"
        $Ctl.Tiers.Text = ("A {0} sh  B {1} sh  C {2} sh" -f $t.A.shares, $t.B.shares, $t.C.shares)
    } elseif ($null -ne $t -and $t.error) {
        $Ctl.Tiers.Text = "tiers: $($t.error)"
    } else {
        $Ctl.Tiers.Text = "tiers: n/a"
    }

    $s = $d.spy_scoreboard
    if ($null -ne $s -and $null -eq $s.error) {
        $Ctl.Scoreboard.Text = ("port {0}%  spy {1}%  alpha {2}%" -f $s.portfolio_pct, $s.spy_pct, $s.alpha_pct)
        $Ctl.Scoreboard.Foreground = if ($s.beating_spy) { $Green } else { $Red }
    } elseif ($null -ne $s) {
        $Ctl.Scoreboard.Text = "scoreboard: $($s.error)"
        $Ctl.Scoreboard.Foreground = $Gray
    } else {
        $Ctl.Scoreboard.Text = "scoreboard: n/a"
        $Ctl.Scoreboard.Foreground = $Gray
    }
}

$Script:LastGood = $null

function Invoke-Refresh {
    try {
        $d = Get-WidgetData -Sym $Symbol
        $Script:LastGood = $d
        Update-Ui $d
        $Ctl.Status.Text = ""
    } catch {
        # Keep last-good data on screen; mark stale, show the error. Never blank.
        if ($null -ne $Script:LastGood) { Update-Ui $Script:LastGood }
        $Ctl.Status.Text = "STALE (refresh failed $(Get-Date -Format 'HH:mm:ss')): $($_.Exception.Message)"
    }
}

# Initial load before showing the window (console still gets errors if it dies here).
Invoke-Refresh

# 5-minute refresh timer.
$Timer = [System.Windows.Threading.DispatcherTimer]::new()
$Timer.Interval = [TimeSpan]::FromMinutes(5)
$Timer.Add_Tick({ Invoke-Refresh })
$Timer.Start()

if ($SmokeTest) {
    $CloseTimer = [System.Windows.Threading.DispatcherTimer]::new()
    $CloseTimer.Interval = [TimeSpan]::FromSeconds(2)
    $CloseTimer.Add_Tick({ $CloseTimer.Stop(); $Window.Close() })
    $CloseTimer.Start()
}

try {
    $null = $Window.ShowDialog()
} catch {
    Write-Host "risk-widget.ps1: window run failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
} finally {
    $Timer.Stop()
}

if ($SmokeTest) { Write-Host "SMOKE-PASS" }
