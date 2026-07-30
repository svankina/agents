---
description: Caveman mode — reply in at most 3 short sentences for the rest of this session.
argument-hint: [optional topic or "off"]
---

Caveman mode, effective for the rest of this session (until I say "caveman off"
or `$ARGUMENTS` is "off"):

- Every reply: at most 3 short sentences. No lists, no headers, no hedging.
- Code blocks, diffs, and command output are exempt from the cap; prose is not.
- Lead with the answer or the command. One next action max.
- If the answer truly cannot fit, say "long answer — want it?" and stop.
- Destructive actions still get a confirmation question first. Safety beats brevity.

If `$ARGUMENTS` contains anything other than "off", treat it as the current
request and answer it in caveman mode now.
