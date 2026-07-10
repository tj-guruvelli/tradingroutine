#!/bin/bash
# Ralph Wiggum - Long-running AI agent loop
# Usage: ./ralph.sh [--tool amp|claude] [max_iterations]

set -e

# Parse arguments
TOOL="amp"  # Default to amp for backwards compatibility
MAX_ITERATIONS=10

while [[ $# -gt 0 ]]; do
  case $1 in
    --tool)
      TOOL="$2"
      shift 2
      ;;
    --tool=*)
      TOOL="${1#*=}"
      shift
      ;;
    *)
      # Assume it's max_iterations if it's a number
      if [[ "$1" =~ ^[0-9]+$ ]]; then
        MAX_ITERATIONS="$1"
      fi
      shift
      ;;
  esac
done

# Validate tool choice
if [[ "$TOOL" != "amp" && "$TOOL" != "claude" ]]; then
  echo "Error: Invalid tool '$TOOL'. Must be 'amp' or 'claude'."
  exit 1
fi
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
PRD_FILE="$SCRIPT_DIR/prd.json"
PROGRESS_FILE="$SCRIPT_DIR/progress.txt"
ARCHIVE_DIR="$SCRIPT_DIR/archive"
LAST_BRANCH_FILE="$SCRIPT_DIR/.last-branch"

# Brakes (per this project's loop-engineering-canon — matches loop-runner.ps1):
#   1. Turn cap per iteration (--max-turns on the claude invocation)
#   2. Scope cap (--allowedTools allowlist — NEVER --dangerously-skip-permissions,
#      this is a live financial repo; alpaca.sh order-placing subcommands excluded)
#   3. Per-iteration watchdog (timeout kills a hung iteration rather than eating
#      the whole MAX_ITERATIONS budget on one stuck call)
#   4. MAX_ITERATIONS itself is the outer turn cap
ITER_TIMEOUT_SECS=600
CLAUDE_MAX_TURNS=30
# alpaca.sh order/cancel/close subcommands are deliberately absent (default-deny
# under --allowedTools). mcp__alpaca__* (order-placing MCP tools) is likewise
# absent on purpose — same reasoning as telegram-agent/bot.mjs.
CLAUDE_ALLOWED_TOOLS="Read,Grep,Glob,Write,Edit,Agent,Bash(git*),Bash(node*),Bash(schtasks*),\
Bash(bash scripts/alpaca.sh account*),Bash(bash scripts/alpaca.sh positions*),\
Bash(bash scripts/alpaca.sh quote*),Bash(bash scripts/alpaca.sh orders*),\
Bash(bash scripts/alpaca.sh bars*),Bash(bash scripts/telegram.sh*),\
Bash(bash scripts/perplexity.sh*),Bash(bash scripts/edgar.sh*),\
Bash(bash scripts/tax.sh*),Bash(bash scripts/afterhours.sh*),\
Bash(bash scripts/gappers-alpaca.sh*),Bash(bash scripts/risk.mjs*),\
mcp__tradingview-data__*,mcp__tradingview__*"

# Archive previous run if branch changed
if [ -f "$PRD_FILE" ] && [ -f "$LAST_BRANCH_FILE" ]; then
  CURRENT_BRANCH=$(jq -r '.branchName // empty' "$PRD_FILE" 2>/dev/null || echo "")
  LAST_BRANCH=$(cat "$LAST_BRANCH_FILE" 2>/dev/null || echo "")
  
  if [ -n "$CURRENT_BRANCH" ] && [ -n "$LAST_BRANCH" ] && [ "$CURRENT_BRANCH" != "$LAST_BRANCH" ]; then
    # Archive the previous run
    DATE=$(date +%Y-%m-%d)
    # Strip "ralph/" prefix from branch name for folder
    FOLDER_NAME=$(echo "$LAST_BRANCH" | sed 's|^ralph/||')
    ARCHIVE_FOLDER="$ARCHIVE_DIR/$DATE-$FOLDER_NAME"
    
    echo "Archiving previous run: $LAST_BRANCH"
    mkdir -p "$ARCHIVE_FOLDER"
    [ -f "$PRD_FILE" ] && cp "$PRD_FILE" "$ARCHIVE_FOLDER/"
    [ -f "$PROGRESS_FILE" ] && cp "$PROGRESS_FILE" "$ARCHIVE_FOLDER/"
    echo "   Archived to: $ARCHIVE_FOLDER"
    
    # Reset progress file for new run
    echo "# Ralph Progress Log" > "$PROGRESS_FILE"
    echo "Started: $(date)" >> "$PROGRESS_FILE"
    echo "---" >> "$PROGRESS_FILE"
  fi
fi

# Track current branch
if [ -f "$PRD_FILE" ]; then
  CURRENT_BRANCH=$(jq -r '.branchName // empty' "$PRD_FILE" 2>/dev/null || echo "")
  if [ -n "$CURRENT_BRANCH" ]; then
    echo "$CURRENT_BRANCH" > "$LAST_BRANCH_FILE"
  fi
fi

# Initialize progress file if it doesn't exist
if [ ! -f "$PROGRESS_FILE" ]; then
  echo "# Ralph Progress Log" > "$PROGRESS_FILE"
  echo "Started: $(date)" >> "$PROGRESS_FILE"
  echo "---" >> "$PROGRESS_FILE"
fi

echo "Starting Ralph - Tool: $TOOL - Max iterations: $MAX_ITERATIONS"

for i in $(seq 1 $MAX_ITERATIONS); do
  echo ""
  echo "==============================================================="
  echo "  Ralph Iteration $i of $MAX_ITERATIONS ($TOOL)"
  echo "==============================================================="

  # Run the selected tool with the ralph prompt, cwd = the actual project (not scripts/ralph)
  if [[ "$TOOL" == "amp" ]]; then
    OUTPUT=$(cd "$PROJECT_ROOT" && cat "$SCRIPT_DIR/prompt.md" | timeout "$ITER_TIMEOUT_SECS" amp --dangerously-allow-all 2>&1 | tee /dev/stderr) || true
  else
    # Claude Code: scoped --allowedTools (NEVER --dangerously-skip-permissions on this repo),
    # --max-turns as a per-iteration turn cap, timeout as a watchdog against a hung iteration.
    # CLAUDE.md is piped as stdin (not read from cwd), so its "same directory as this
    # file" phrasing is meaningless without an explicit path prefix — supply one.
    OUTPUT=$( (echo "PRD file (absolute path): $PRD_FILE"; \
               echo "Progress file (absolute path): $PROGRESS_FILE"; \
               echo ""; \
               cat "$SCRIPT_DIR/CLAUDE.md") | \
      (cd "$PROJECT_ROOT" && timeout "$ITER_TIMEOUT_SECS" claude --print \
        --max-turns "$CLAUDE_MAX_TURNS" --allowedTools "$CLAUDE_ALLOWED_TOOLS") \
      2>&1 | tee /dev/stderr) || true
  fi
  
  # Check for completion signal
  if echo "$OUTPUT" | grep -q "<promise>COMPLETE</promise>"; then
    echo ""
    echo "Ralph completed all tasks!"
    echo "Completed at iteration $i of $MAX_ITERATIONS"
    exit 0
  fi
  
  echo "Iteration $i complete. Continuing..."
  sleep 2
done

echo ""
echo "Ralph reached max iterations ($MAX_ITERATIONS) without completing all tasks."
echo "Check $PROGRESS_FILE for status."
exit 1
