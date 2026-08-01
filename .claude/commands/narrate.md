---
description: Process trade narration recordings from data/narration/ — transcribe via the trade-narration skill, append lessons to RESEARCH-LOG.md (read-only on the account, no orders)
---

Companion to `docs/NARRATION-PROTOCOL.md`. The recording habit lives with TJ;
this command only processes what the habit produced. Never fabricate a
transcript or a lesson — an empty folder means stop, not improvise.

## Steps

1. List `data/narration/`. Ignore `README.md`.

2. **If empty** (no recordings): print this reminder and STOP — do nothing else:
   > No narrations recorded yet. Protocol: record 30-60s immediately after each
   > entry/exit — setup, why now, size tier A/B/C, stop, invalidation. Demod
   > dictation to .txt or raw audio into data/narration/, named YYYY-MM-DD_SYMBOL.
   > See docs/NARRATION-PROTOCOL.md.

3. **If files exist**: for each recording, run the existing trade-narration skill
   at `../../../skills/trade-narration/` (sec-brain repo root). Read its
   `SKILL.md` and `learnings.md` FIRST — they carry the working invocation:
   - Audio files: `C:\Users\guruv\miniconda3\python.exe skills/trade-narration/transcribe.py <audio_path>`
     (must be the miniconda py3.12 interpreter; device is pinned to CPU).
   - Demod `.txt` files: already text, skip transcription and go straight to the
     skill's extraction prompt (setups, emotions, playbook rules).
   - Note: the skill's extract/output steps are unverified on real audio —
     verify each output against the actual transcript before writing anything.

4. Append extracted lessons to `memory/RESEARCH-LOG.md`, matching that file's
   existing entry format: a `## YYYY-MM-DD — <title>` heading (use
   `— Trade Narration Review`), `###` subsections, bulleted findings, and a
   closing `---` separator. One entry per run, not per file.

5. Append one line to the skill's `learnings.md` per its own protocol, and
   report which files were processed and where the log entry landed.
