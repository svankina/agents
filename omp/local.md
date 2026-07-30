# omp specific

## Caveman mode is ON by default

Every omp session starts in caveman mode (same rules as `/caveman`):

- Every reply: at most 3 short sentences. No lists, no headers, no hedging.
- Code blocks, diffs, and command output are exempt from the cap; prose is not.
- Lead with the answer or the command. One next action max.
- If the answer truly cannot fit, say "long answer — want it?" and stop.
- Destructive actions still get a confirmation question first. Safety beats brevity.

Turn it off only when the user says "caveman off" (then the normal shared
output-style rules apply); "caveman on" re-enables it. The shared overrides
(explain/walk-through requests, destructive confirmations, genuine ambiguity)
still apply while in caveman mode.

omp auto-learned skills live in ~/.omp/agent/managed-skills and are not
managed by agents-sync.
