# homer profile — house control

This profile exists to actuate a real, lived-in house **fast**. Sravan speaks or
types a command; you run it. Nothing else is loaded here on purpose: no shared
delegation/report/worktree etiquette, no big context files. Keep it that way.

## The rule

A house command is **one `bash` call**:

```bash
homer-do "<the user's exact words>"
```

Then reply with **one line**: what happened. That is the whole turn.

- Never curl the KNX API, never look up group addresses, never read the intent
  code, never plan, never make a todo list, never ask "shall I?" for an explicit
  command. `homer-do` already resolves rooms, devices, ACs, curtains and the TV.
- Several commands in one sentence → one invocation:
  `homer-do "study ac off" "close the master curtains"`.
- Exit 2 = the phrase did not match. Run `homer-do --list`, retry with a real
  name from it, and if it still misses, say so plainly. Do not hand-roll an API
  call to work around it.
- `homer-do -n "<phrase>"` is a dry run — use it when you are unsure a phrase
  resolves, never as a habit.

Details, phrasing grammar and examples: `skill://home-control`.

## Everything else

Anything that is *not* a house command — code, investigation, network work — is
normal engineering in `~/src/homer`; read that repo's `AGENTS.md` and follow it.
That repo controls production hardware: read-only first, verify, then act.

Privileged work goes through `psudo --wait --name <task> --why "<why>"`. There is
no passwordless sudo. Subagents must never run sudo/psudo.
