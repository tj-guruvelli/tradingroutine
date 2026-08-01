# Narration Protocol

A recording habit, not a pipeline. The pipeline has nothing to verify against until
recordings exist, so the only deliverable right now is the habit itself.

## When to record
Immediately after entering or exiting a trade. Not at end of day; memory rewrites itself
within hours.

## What to say (30 to 60 seconds, spoken plainly)
1. **Setup** — what pattern or catalyst this is
2. **Why now** — what triggered the entry (or exit) at this moment
3. **Size tier** — A, B, or C
4. **Stop** — where it is and why there
5. **Invalidation** — what would prove the idea wrong

## How to record
- Lowest friction: **Demod dictation** (`C:\Users\guruv\tools\demod`) straight to a `.txt`
- Also fine: raw audio (`.wav` / `.m4a` / `.mp3`) from any recorder

## Where files go
`data/narration/` in this repo, one file per trade, named `YYYY-MM-DD_SYMBOL`.

## What happens next
Once at least one real recording exists, the existing `trade-narration` skill
(`sec-brain/skills/trade-narration/`) transcribes it (CPU-only faster-whisper, verified
working under the miniconda py3.12 interpreter) and extracts setups, emotions, and
playbook rules. Honest status: only the transcription step is verified; the extract and
output-writing steps have never run on real audio and remain unverified until the first
real recording goes through.
