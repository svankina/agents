---
name: pi-init
description: Creates a new project-local pi agent variant as a slash prompt from an explicit name and purpose. Use when the user says /init <name> <purpose> or asks to instantiate, scaffold, or create a specialized agent/persona/workflow prompt.
disable-model-invocation: true
---

# Pi Init Agent Variant Initializer

Use this skill to turn an explicit name and purpose like `security-reviewer Security review agent` into a reusable pi slash prompt.

The default instantiation is now **prompt-only**:

- a project-local slash prompt at `.pi/prompts/<variant-slug>.md`
- a Mattermost bot account for the variant, joined to `home` and `bots`, with a direct-message channel opened for the local user
- a complete Mattermost runtime for that bot: a bot access token, `.mattermost-agent/bot.env`, `.mattermost-agent/.gitignore`, a `mattermost-<bot>-bot.service` user systemd unit, and the service enabled/started
- a git repository initialized in the target project directory, with all safe current files staged for tracking (runtime secrets must remain ignored)

After `/reload`, the user can invoke the variant with:

- `/<variant-slug> <task>`

Do **not** create `.pi/skills/<variant-slug>/SKILL.md` by default. Create a backing skill only when the user explicitly asks for a skill too.

When creating a backing skill, keep it explicitly invoked only:

- include `disable-model-invocation: true` in `SKILL.md` frontmatter
- add the skill directory to `.pi/skills/.ignore` with `!<name>/` and `!<name>/**`

## Inputs

Accept any of these forms:

```text
/init <name> <purpose>
/skill:pi-init <name> <purpose>
Create an agent variant named <name> for <purpose>
Create a skill-backed agent variant named <name> for <purpose>
```

For `/init`, parse the first argument as the explicit prompt name and everything after it as the purpose. If the name or purpose is missing, ask for it. Otherwise do not ask follow-up questions unless the variant would be ambiguous or destructive.

## Workflow

1. **Capture the name and purpose**
   - Treat the first `/init` argument as the explicit prompt name; use the remaining arguments as the purpose.
   - Preserve the user's purpose words as the canonical purpose.
   - Normalize the explicit prompt name to a valid lowercase hyphenated slug if needed.
   - Keep names valid for pi prompts/skills: lowercase letters, numbers, hyphens, max 64 chars, no leading/trailing/consecutive hyphens.

2. **Inspect light project context**
   - Read nearby `AGENTS.md`, README, and obvious package/build files only if they exist.
   - Use this context to tailor generated instructions, but keep discovery bounded.

3. **Generate the prompt scaffold**
   - Run the helper from the skill directory while the shell working directory is the target project:

   ```bash
   python3 .pi/skills/pi-init/scripts/init_agent_variant.py --name "variant-slug" --purpose "Purpose of Agent"
   ```

   If this skill is installed somewhere other than `.pi/skills/pi-init`, resolve `scripts/init_agent_variant.py` relative to this `SKILL.md` and run that absolute path.

   Useful options:

   ```bash
   --name <variant-slug>      # explicit prompt/skill name
   --overwrite                # replace existing generated files
   --scope-dir <project-dir>  # write into another project root
   --with-skill               # also create .pi/skills/<variant-slug>/SKILL.md
   --no-prompt                # create only the skill; requires --with-skill
   --skip-mattermost          # opt out of Mattermost bot setup
   --mattermost-env <path>    # defaults to ~/.config/mattermost_service/mattermost_service.env
   --mattermost-team <team>   # defaults to MATTERMOST_TEAM_NAME or the service user's first team
   --mattermost-channels home,bots
   --mattermost-dm-username <username>
   --skip-mattermost-runtime        # create/configure the bot account only; no token/env/service
   --no-start-mattermost-runtime    # write token/env/service but do not enable/start it
   --mattermost-bot-script <path>   # defaults to ~/src/mattermost/bot.py
   --mattermost-bot-python <path>   # defaults to ~/src/mattermost/.venv/bin/python
   ```

   The helper also:

   - creates or reuses a Mattermost bot named after the variant
   - adds it to the target Mattermost team
   - joins it to the `home` and `bots` channels by default
   - opens a direct-message channel with the user from `--mattermost-dm-username`, `MATTERMOST_DM_USERNAME`, or `$USER`
   - creates/reuses a runtime access token for the bot
   - writes `.mattermost-agent/bot.env` with the token and pi-backed runtime settings for `~/src/mattermost/bot.py`
   - writes `.mattermost-agent/.gitignore` so runtime tokens/env/logs are not staged
   - writes and starts `~/.config/systemd/user/mattermost-<bot>-bot.service`
   - runs `git init` and `git add -A` in the target project directory so generated files and other safe files are staged for tracking

   Mattermost credentials are read from `--mattermost-env`, environment variables, or both. Expected variables are `MATTERMOST_URL` and one of `MATTERMOST_ADMIN_TOKEN`, `MATTERMOST_SERVICE_TOKEN`, or `MATTERMOST_TOKEN`. Do not write Mattermost tokens into generated project files except the ignored runtime env at `.mattermost-agent/bot.env`, because `/init` stages the whole project with git.

4. **Refine the generated slash prompt**
   - Read `.pi/prompts/<variant-slug>.md`.
   - Edit it so it is not a generic persona. Add concrete, purpose-specific:
     - role and non-goals
     - trigger conditions / when to use
     - inputs the variant expects
     - step-by-step operating workflow
     - context files or commands to inspect first
     - deliverables and output format
     - safety, quality, and validation checks
   - Keep it concise enough to be comfortable as an expanded slash prompt.
   - Ensure it uses `$ARGUMENTS` as the task payload.

5. **Optionally refine a backing skill**
   - Only do this if the user explicitly requested a skill-backed variant or the helper was run with `--with-skill`.
   - Read `.pi/skills/<variant-slug>/SKILL.md`.
   - Move detailed behavior into the skill and keep `.pi/prompts/<variant-slug>.md` short, calling the skill by name and passing `$ARGUMENTS`.
   - Keep frontmatter valid and description under 1024 characters.

6. **Verify Mattermost setup**
   - Review the helper's `mattermost` and `mattermost_runtime` JSON results.
   - Confirm whether the bot was created or reused, joined to `home` and `bots`, opened as a direct message, received a runtime token/env file, and has a user systemd service enabled/started.
   - Run `systemctl --user status mattermost-<bot>-bot --no-pager` or an equivalent check when practical.
   - If Mattermost setup was skipped, partial, or failed, report the exact reason/error and the env vars or options needed to retry.

7. **Refresh git tracking**
   - After all prompt/skill refinements are complete, run these commands from the target project directory:

   ```bash
   git init
   git add -A
   ```

   - This is intentionally staging-only; do not commit unless the user explicitly asks.

8. **Report completion**
   - List created/updated files.
   - List the Mattermost bot username and whether it joined `home`, joined `bots`, was opened under direct messages, and has a running runtime service.
   - Confirm that a git repository was initialized and files were staged, and that `.mattermost-agent/bot.env` is ignored; otherwise report the exact git error.
   - Tell the user to run `/reload` before using the new prompt/skill in the current session.
   - Show invocation examples.

## Generated Prompt Quality Bar

Every generated prompt-only variant should include:

- a clear identity: "Act as the `<purpose>` agent variant."
- explicit boundaries: what it should and should not do
- an initial checklist for context gathering
- a deterministic workflow with numbered phases
- a concise default output format
- validation criteria the main agent can verify
- instructions to ask concise clarifying questions only when blocked
- `$ARGUMENTS` as the task payload

Prefer useful operational instructions over personality adjectives.

## Naming Guidance

Examples:

| `/init` input | Prompt name |
|---|---|
| `security-reviewer Security Reviewer` | `security-reviewer` |
| `react-ui React UI Implementer` | `react-ui` |
| `lob-deploy Lobclaw Deployment Operator` | `lob-deploy` |

If the provided name is over 64 characters, shorten it while preserving meaning.
