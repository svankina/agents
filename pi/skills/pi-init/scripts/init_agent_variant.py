#!/usr/bin/env python3
"""Scaffold a pi agent variant as a slash prompt plus optional skill."""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
from textwrap import dedent
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


MAX_SKILL_NAME = 64
DEFAULT_MATTERMOST_ENV = Path.home() / ".config" / "mattermost_service" / "mattermost_service.env"
DEFAULT_MATTERMOST_BOT_SCRIPT = Path.home() / "mattermost-ai-bot" / "bot.py"
DEFAULT_MATTERMOST_BOT_PYTHON = Path.home() / "mattermost-ai-bot" / ".venv" / "bin" / "python"


def slugify(text: str) -> str:
    slug = text.strip().lower()
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = re.sub(r"-+", "-", slug).strip("-")
    if not slug:
        slug = "agent-variant"
    if len(slug) > MAX_SKILL_NAME:
        parts = slug.split("-")
        shortened: list[str] = []
        for part in parts:
            candidate = "-".join(shortened + [part]) if shortened else part
            if len(candidate) > MAX_SKILL_NAME:
                break
            shortened.append(part)
        slug = "-".join(shortened) or slug[:MAX_SKILL_NAME].strip("-")
    slug = re.sub(r"-+", "-", slug).strip("-") or "agent-variant"
    return slug


def titleize(slug: str) -> str:
    return " ".join(word.capitalize() for word in slug.split("-"))


def yaml_scalar(text: str) -> str:
    # Single-quote YAML scalar. Escape single quotes by doubling them.
    return "'" + text.replace("'", "''") + "'"


def concise_description(purpose: str, slug: str) -> str:
    base = (
        f"Prompt-only agent variant for {purpose}. Use when the user asks for "
        f"{purpose.lower()} work or invokes /{slug}."
    )
    if len(base) <= 1000:
        return base
    return f"Prompt-only agent variant for {purpose[:820].rstrip()}. Use when invoked as /{slug}."


def skill_description(purpose: str, slug: str) -> str:
    base = (
        f"Specialized agent variant for {purpose}. Use when the user asks for "
        f"{purpose.lower()} work or invokes /{slug}."
    )
    if len(base) <= 1000:
        return base
    return f"Specialized agent variant for {purpose[:820].rstrip()}. Use when invoked as /{slug}."


def skill_template(name: str, purpose: str) -> str:
    title = titleize(name)
    description = skill_description(purpose, name)
    now = datetime.now(timezone.utc).isoformat(timespec="seconds")
    return dedent(
        f"""\
        ---
        name: {name}
        description: {yaml_scalar(description)}
        disable-model-invocation: true
        ---

        # {title} Agent Variant

        Generated: {now}

        ## Identity

        You are the **{purpose}** agent variant. Optimize every response and action for that purpose while still following all higher-priority system, developer, project, and user instructions.

        ## When to Use

        Use this variant when:

        - the user invokes `/{name}` or `/skill:{name}`
        - the task is directly related to: **{purpose}**
        - the user asks for a specialist with this responsibility

        Do not use this variant when the task is unrelated to the purpose or when a more specific project skill applies.

        ## Operating Principles

        - Be concrete, operational, and evidence-driven.
        - Prefer repository facts over assumptions; inspect relevant files before making claims.
        - Ask at most 1-3 concise clarifying questions only when missing information blocks safe progress.
        - Keep changes narrowly scoped to the user's request.
        - State assumptions, risks, and validation steps clearly.

        ## Initial Context Checklist

        Before substantial work, inspect only the context needed for the task:

        - project instructions: `AGENTS.md`, `.pi/*`, or equivalent local guidance
        - relevant README or docs
        - files, commands, configs, or artifacts named by the user
        - nearby tests or validation commands, when applicable

        ## Workflow

        1. **Restate the mission** in one sentence, using the variant purpose.
        2. **Identify scope**: files, systems, constraints, and non-goals.
        3. **Gather minimum context** using available tools.
        4. **Execute the specialist workflow** for **{purpose}**.
        5. **Validate** results with the most relevant command, review, or checklist available.
        6. **Report** outcome, changed files, validation results, and remaining risks.

        ## Deliverables

        Default response format:

        ```markdown
        Summary: <one-paragraph result>

        Actions:
        - <what was inspected/changed/decided>

        Validation:
        - <commands/checks run, or why not run>

        Risks / Next steps:
        - <remaining concerns or follow-ups>
        ```

        ## Customization Notes for Maintainers

        Replace this section with purpose-specific instructions. Consider adding:

        - domain-specific checklists
        - preferred commands and tools
        - file ownership boundaries
        - examples of good output
        - anti-patterns this variant should catch
        - escalation rules for risky actions
        """
    )


def prompt_template(name: str, purpose: str, use_skill: bool) -> str:
    description = f"Use the {purpose} agent variant"
    if len(description) > 180:
        description = f"Use the {name} agent variant"

    if use_skill:
        return dedent(
            f"""\
            ---
            description: {yaml_scalar(description)}
            argument-hint: "[task]"
            ---
            Read `.pi/skills/{name}/SKILL.md` and follow the `{name}` skill for this task.

            Agent variant purpose:
            {purpose}

            Task:
            $ARGUMENTS
            """
        )

    return dedent(
        f"""\
        ---
        description: {yaml_scalar(description)}
        argument-hint: "[task]"
        ---
        Act as the **{purpose}** agent variant for this request.

        Task:
        $ARGUMENTS

        Operating guidance:
        - Focus on the stated purpose: **{purpose}**.
        - Follow all higher-priority system, developer, project, and user instructions.
        - Inspect only the repository context needed for the task: relevant `AGENTS.md`, README/docs, files named by the user, and nearby tests or configs.
        - Prefer concrete repo evidence over assumptions.
        - Ask 1-3 concise clarifying questions only when blocked.
        - Keep changes narrowly scoped and validate them when practical.

        Default response format:
        ```markdown
        Summary: <result>
        Validation: <checks run, or why not run>
        Files: <files changed or inspected when relevant>
        Next: <risks or follow-ups>
        ```
        """
    )


def write_file(path: Path, content: str, overwrite: bool) -> str:
    existed = path.exists()
    if existed and not overwrite:
        raise FileExistsError(f"Refusing to overwrite existing file: {path}")
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    return "updated" if existed else "created"


def ensure_skill_allowlisted(skills_dir: Path, name: str) -> str:
    """Ensure .pi/skills/.ignore keeps discovery to an explicit allowlist."""
    ignore_path = skills_dir / ".ignore"
    header = dedent(
        """\
        # Skill discovery allowlist.
        #
        # Pi respects .ignore files while scanning skill directories. Keep the blanket
        # ignore below, then add one pair of negated patterns for each skill that should
        # be registered as an explicit slash-invoked skill.
        #
        # Skills in this directory should also set `disable-model-invocation: true` in
        # SKILL.md frontmatter so they are available via /skill:name (and /name through
        # the skill-shortcuts extension) without appearing in the model system prompt.

        *
        """
    )
    entries = [f"!{name}/", f"!{name}/**"]

    if ignore_path.exists():
        lines = ignore_path.read_text(encoding="utf-8").splitlines()
        changed = False
        if "*" not in {line.strip() for line in lines}:
            lines.append("*")
            changed = True
        existing = {line.strip() for line in lines}
        for entry in entries:
            if entry not in existing:
                lines.append(entry)
                changed = True
        if changed:
            ignore_path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
            return "updated"
        return "unchanged"

    ignore_path.parent.mkdir(parents=True, exist_ok=True)
    ignore_path.write_text(header + "\n".join(entries) + "\n", encoding="utf-8")
    return "created"


def run_git_command(scope: Path, args: list[str]) -> dict[str, str | int]:
    try:
        completed = subprocess.run(
            args,
            cwd=scope,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=False,
        )
    except FileNotFoundError as exc:
        return {
            "command": " ".join(args),
            "returncode": 127,
            "stdout": "",
            "stderr": str(exc),
        }
    return {
        "command": " ".join(args),
        "returncode": completed.returncode,
        "stdout": completed.stdout.strip(),
        "stderr": completed.stderr.strip(),
    }


def initialize_git_tracking(scope: Path) -> dict[str, object]:
    """Initialize a git repository at scope and stage all tracked content."""
    init_result = run_git_command(scope, ["git", "init"])
    if init_result["returncode"] != 0:
        return {"status": "failed", "steps": [init_result]}

    add_result = run_git_command(scope, ["git", "add", "-A"])
    status = "initialized-and-staged" if add_result["returncode"] == 0 else "failed"
    return {"status": status, "steps": [init_result, add_result]}


def quote_env(value: str) -> str:
    return '"' + value.replace('\\', '\\\\').replace('"', '\\"') + '"'


def update_gitignore(path: Path, entries: list[str]) -> str:
    existed = path.exists()
    existing = path.read_text(encoding="utf-8").splitlines() if existed else []
    present = {line.strip() for line in existing}
    changed = False
    for entry in entries:
        if entry not in present:
            existing.append(entry)
            changed = True
    if changed or not existed:
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text("\n".join(existing).rstrip() + "\n", encoding="utf-8")
        return "updated" if existed else "created"
    return "unchanged"


def load_env_file(path: Path) -> dict[str, str]:
    values: dict[str, str] = {}
    if not path.exists():
        return values
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        value = value.strip().strip('"').strip("'")
        values[key.strip()] = value
    return values


def mattermost_username(name: str) -> str:
    username = re.sub(r"[^a-z0-9._-]+", "-", name.strip().lower())
    username = re.sub(r"[-.]{2,}", "-", username).strip(".-_")
    if not username or not username[0].isalpha():
        username = f"bot-{username or 'agent'}"
    if len(username) > 22:
        username = username[:22].rstrip(".-_")
    if len(username) < 3:
        username = f"{username}-bot"[:22].rstrip(".-_")
    return username


class MattermostAPI:
    def __init__(self, base_url: str, token: str) -> None:
        self.base_url = base_url.rstrip("/")
        self.token = token

    def request(self, method: str, path: str, payload: object | None = None, allow_404: bool = False) -> object | None:
        data = None if payload is None else json.dumps(payload).encode("utf-8")
        headers = {"Authorization": f"Bearer {self.token}", "Content-Type": "application/json"}
        req = Request(f"{self.base_url}{path}", data=data, headers=headers, method=method)
        try:
            with urlopen(req, timeout=30) as resp:
                body = resp.read().decode("utf-8")
        except HTTPError as exc:
            body = exc.read().decode("utf-8", errors="replace")
            if allow_404 and exc.code == 404:
                return None
            raise RuntimeError(f"Mattermost API {method} {path} failed: {exc.code} {body}") from exc
        except URLError as exc:
            raise RuntimeError(f"Mattermost API {method} {path} failed: {exc}") from exc
        return json.loads(body) if body else None


def mm_ok(step: str, **kwargs: object) -> dict[str, object]:
    return {"step": step, "status": "ok", **kwargs}


def mm_warn(step: str, message: str, **kwargs: object) -> dict[str, object]:
    return {"step": step, "status": "warning", "message": message, **kwargs}


def mm_error(step: str, exc: Exception, **kwargs: object) -> dict[str, object]:
    return {"step": step, "status": "error", "message": str(exc), **kwargs}


def create_mattermost_bot(
    *,
    name: str,
    purpose: str,
    env_path: Path,
    url: str | None,
    token: str | None,
    team_name: str | None,
    channel_names: list[str],
    dm_username: str | None,
) -> dict[str, object]:
    env_values = {**load_env_file(env_path), **os.environ}
    mm_url = url or env_values.get("MATTERMOST_URL")
    mm_token = token or env_values.get("MATTERMOST_ADMIN_TOKEN") or env_values.get("MATTERMOST_SERVICE_TOKEN") or env_values.get("MATTERMOST_TOKEN")
    dm_target = dm_username or env_values.get("MATTERMOST_DM_USERNAME") or os.getenv("USER")
    channels = channel_names or ["home", "bots"]
    username = mattermost_username(name)
    display_name = titleize(name)
    steps: list[dict[str, object]] = []

    if not mm_url or not mm_token:
        return {
            "status": "skipped",
            "reason": f"Mattermost URL/token not found. Set MATTERMOST_URL and MATTERMOST_SERVICE_TOKEN in {env_path} or the environment.",
            "username": username,
        }

    api = MattermostAPI(mm_url, mm_token)

    try:
        user = api.request("GET", f"/api/v4/users/username/{username}", allow_404=True)
        if user:
            bot_user_id = str(user["id"])
            steps.append(mm_ok("reuse-bot-user", username=username, user_id=bot_user_id))
        else:
            bot = api.request(
                "POST",
                "/api/v4/bots",
                {
                    "username": username,
                    "display_name": display_name,
                    "description": f"pi /init agent variant for {purpose}",
                },
            )
            bot_user_id = str((bot or {}).get("user_id") or (bot or {}).get("id"))
            if not bot_user_id:
                raise RuntimeError(f"Mattermost bot creation returned no user_id: {bot}")
            steps.append(mm_ok("create-bot-user", username=username, user_id=bot_user_id))
    except Exception as exc:
        return {"status": "failed", "username": username, "steps": steps + [mm_error("create-bot-user", exc)]}

    team = None
    try:
        if team_name or env_values.get("MATTERMOST_TEAM_NAME"):
            team_slug = team_name or env_values.get("MATTERMOST_TEAM_NAME") or ""
            team = api.request("GET", f"/api/v4/teams/name/{team_slug}", allow_404=True)
        else:
            teams = api.request("GET", "/api/v4/users/me/teams") or []
            team = teams[0] if teams else None
        if team:
            api.request("POST", f"/api/v4/teams/{team['id']}/members", {"team_id": team["id"], "user_id": bot_user_id})
            steps.append(mm_ok("join-team", team_name=team.get("name"), team_id=team.get("id")))
        else:
            steps.append(mm_warn("join-team", "No Mattermost team found; channel joins skipped."))
    except Exception as exc:
        if "400" in str(exc) or "403" in str(exc):
            steps.append(mm_warn("join-team", "Could not add bot to team; it may already be a member or token lacks permission.", error=str(exc)))
        else:
            steps.append(mm_error("join-team", exc))

    if team:
        for channel_name in channels:
            try:
                channel = api.request("GET", f"/api/v4/teams/{team['id']}/channels/name/{channel_name}", allow_404=True)
                if not channel:
                    steps.append(mm_warn("join-channel", f"Channel not found: {channel_name}", channel_name=channel_name))
                    continue
                api.request("POST", f"/api/v4/channels/{channel['id']}/members", {"user_id": bot_user_id})
                steps.append(mm_ok("join-channel", channel_name=channel_name, channel_id=channel.get("id")))
            except Exception as exc:
                if "400" in str(exc):
                    steps.append(mm_warn("join-channel", "Bot may already be in channel.", channel_name=channel_name, error=str(exc)))
                else:
                    steps.append(mm_error("join-channel", exc, channel_name=channel_name))

    if dm_target:
        try:
            dm_user = api.request("GET", f"/api/v4/users/username/{dm_target}", allow_404=True)
            if not dm_user:
                steps.append(mm_warn("open-direct-message", f"DM target user not found: {dm_target}", username=dm_target))
            else:
                direct = api.request("POST", "/api/v4/channels/direct", [str(dm_user["id"]), bot_user_id])
                steps.append(mm_ok("open-direct-message", username=dm_target, channel_id=(direct or {}).get("id")))
                try:
                    api.request(
                        "POST",
                        f"/api/v4/users/{dm_user['id']}/preferences",
                        [{"user_id": str(dm_user["id"]), "category": "direct_channel_show", "name": bot_user_id, "value": "true"}],
                    )
                    steps.append(mm_ok("show-direct-message", username=dm_target))
                except Exception as exc:
                    steps.append(mm_warn("show-direct-message", "Direct channel was created, but sidebar preference could not be updated.", error=str(exc)))
        except Exception as exc:
            steps.append(mm_error("open-direct-message", exc, username=dm_target))

    hard_errors = [step for step in steps if step.get("status") == "error"]
    return {"status": "partial" if hard_errors else "configured", "username": username, "user_id": bot_user_id, "steps": steps}


def setup_mattermost_runtime(
    *,
    scope: Path,
    name: str,
    purpose: str,
    mattermost: dict[str, object],
    env_path: Path,
    url: str | None,
    token: str | None,
    bot_script: Path,
    python_bin: Path,
    start_service: bool,
) -> dict[str, object]:
    """Create the token, env file, and systemd user service needed for the bot to reply."""
    if mattermost.get("status") not in {"configured", "partial"} or not mattermost.get("user_id"):
        return {"status": "skipped", "reason": "Mattermost bot user was not configured", "steps": []}

    env_values = {**load_env_file(env_path), **os.environ}
    mm_url = (url or env_values.get("MATTERMOST_URL") or "").rstrip("/")
    admin_token = token or env_values.get("MATTERMOST_ADMIN_TOKEN") or env_values.get("MATTERMOST_SERVICE_TOKEN") or env_values.get("MATTERMOST_TOKEN")
    if not mm_url or not admin_token:
        return {"status": "skipped", "reason": "Mattermost URL/admin token missing", "steps": []}

    username = str(mattermost.get("username") or mattermost_username(name))
    user_id = str(mattermost["user_id"])
    agent_dir = scope / ".mattermost-agent"
    runtime_env = agent_dir / "bot.env"
    service_name = f"mattermost-{username}-bot.service"
    service_path = Path.home() / ".config" / "systemd" / "user" / service_name
    steps: list[dict[str, object]] = []

    runtime_token = ""
    if runtime_env.exists():
        existing = load_env_file(runtime_env).get("MATTERMOST_TOKEN", "")
        if existing:
            try:
                me = MattermostAPI(mm_url, existing).request("GET", "/api/v4/users/me") or {}
                if str(me.get("id")) == user_id:
                    runtime_token = existing
                    steps.append(mm_ok("reuse-runtime-token", user_id=user_id))
            except Exception as exc:
                steps.append(mm_warn("reuse-runtime-token", "Existing runtime token is not valid; creating a new one.", error=str(exc)))

    if not runtime_token:
        try:
            created = MattermostAPI(mm_url, admin_token).request(
                "POST",
                f"/api/v4/users/{user_id}/tokens",
                {"description": f"{username} Mattermost bot runtime token"},
            ) or {}
            runtime_token = str(created.get("token") or "")
            if not runtime_token:
                raise RuntimeError(f"Mattermost token creation returned no token: {created}")
            steps.append(mm_ok("create-runtime-token", token_id=created.get("id"), user_id=user_id))
        except Exception as exc:
            return {"status": "failed", "steps": steps + [mm_error("create-runtime-token", exc)]}

    agent_dir.mkdir(parents=True, exist_ok=True)
    gitignore_status = update_gitignore(agent_dir / ".gitignore", ["bot.env", "*.env", "*.log"])
    steps.append(mm_ok("protect-runtime-env-from-git", path=str(agent_dir / ".gitignore"), result=gitignore_status))

    model = env_values.get("PI_RPC_MODEL") or env_values.get("AI_MODEL") or "gpt-5.5"
    prompt = (
        f"You are {username}, a remote coding/service agent operating on {os.uname().nodename} in {scope}. "
        f"You specialize in: {purpose}. Be concise and useful."
    )
    env_lines = {
        "MATTERMOST_TOKEN": runtime_token,
        "MATTERMOST_URL": mm_url,
        "AI_AUTH_SOURCE": "pi",
        "AI_MODEL": model,
        "REPLY_TO_THREADS": "true",
        "MAX_CONTEXT_CHARS": env_values.get("MAX_CONTEXT_CHARS", "8000"),
        "SHOW_RESPONSE_TIME": "true",
        "SHOW_MODEL": "true",
        "SYSTEM_PROMPT": prompt,
        "AUTO_JOIN_PUBLIC_CHANNELS": env_values.get("AUTO_JOIN_PUBLIC_CHANNELS", "false"),
        "AUTO_JOIN_INTERVAL_SEC": env_values.get("AUTO_JOIN_INTERVAL_SEC", "30"),
        "CODEX_CWD": str(scope),
        "CODEX_SANDBOX": env_values.get("CODEX_SANDBOX", "workspace-write"),
        "CODEX_APPROVAL_POLICY": env_values.get("CODEX_APPROVAL_POLICY", "never"),
        "CODEX_EFFORT": env_values.get("CODEX_EFFORT", "medium"),
        "AGENT_HARNESS": "pi",
        "AI_REASONING_LEVEL": env_values.get("AI_REASONING_LEVEL", env_values.get("PI_RPC_THINKING_LEVEL", "medium")),
        "PI_BINARY": env_values.get("PI_BINARY", str(Path.home() / ".hermes" / "node" / "bin" / "pi")),
        "PI_RPC_PROVIDER": env_values.get("PI_RPC_PROVIDER", "openai-codex"),
        "PI_RPC_MODEL": model,
        "PI_RPC_THINKING_LEVEL": env_values.get("PI_RPC_THINKING_LEVEL", env_values.get("AI_REASONING_LEVEL", "medium")),
        "PI_MAIN_RESPONSE_TIMEOUT_SEC": env_values.get("PI_MAIN_RESPONSE_TIMEOUT_SEC", "300"),
        "PI_COMMAND_SESSION_DIR": str(Path.home() / ".pi" / "agent" / "sessions" / f"mattermost-{username}"),
        "PI_COMMAND_WORKSPACE_ROOT": str(Path("/tmp") / "mattermost-pi-workspaces" / username),
    }
    for key in ("AI_API_KEY", "OPENAI_API_KEY", "ALWAYS_RESPOND_USER_IDS", "ALWAYS_RESPOND_CHANNEL_IDS"):
        if env_values.get(key):
            env_lines[key] = env_values[key]
    runtime_env.write_text("".join(f"{key}={quote_env(value)}\n" for key, value in env_lines.items()), encoding="utf-8")
    runtime_env.chmod(0o600)
    steps.append(mm_ok("write-runtime-env", path=str(runtime_env)))

    service_path.parent.mkdir(parents=True, exist_ok=True)
    service_path.write_text(
        dedent(
            f"""\
            [Unit]
            Description=Mattermost {username} Bot
            After=network-online.target
            Wants=network-online.target

            [Service]
            Type=simple
            WorkingDirectory={scope}
            EnvironmentFile={runtime_env}
            Environment="PATH={Path.home()}/.hermes/node/bin:{Path.home()}/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ExecStart={python_bin} -u {bot_script}
            Restart=always
            RestartSec=5
            TimeoutStopSec=5
            KillMode=mixed
            StandardOutput=journal
            StandardError=journal

            [Install]
            WantedBy=default.target
            """
        ),
        encoding="utf-8",
    )
    steps.append(mm_ok("write-systemd-user-service", path=str(service_path), service=service_name))

    if start_service:
        for command in (["systemctl", "--user", "daemon-reload"], ["systemctl", "--user", "enable", "--now", service_name]):
            completed = subprocess.run(command, text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=False)
            if completed.returncode == 0:
                steps.append(mm_ok("systemctl", command=" ".join(command), stdout=completed.stdout.strip()))
            else:
                steps.append(mm_error("systemctl", RuntimeError(completed.stderr.strip() or completed.stdout.strip()), command=" ".join(command)))

    hard_errors = [step for step in steps if step.get("status") == "error"]
    return {"status": "partial" if hard_errors else "configured", "service": service_name, "env": str(runtime_env), "steps": steps}


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--purpose", required=True, help="Purpose of the new agent variant")
    parser.add_argument("--name", help="Explicit pi prompt/skill name; defaults to a slug from purpose")
    parser.add_argument("--scope-dir", default=".", help="Project root to write into (default: cwd)")
    parser.add_argument("--skills-dir", default=".pi/skills", help="Skills directory under scope-dir")
    parser.add_argument("--prompts-dir", default=".pi/prompts", help="Prompts directory under scope-dir")
    parser.add_argument("--with-skill", action="store_true", help="Also create a backing skill file")
    parser.add_argument("--no-prompt", action="store_true", help="Do not create a slash prompt; requires --with-skill")
    parser.add_argument("--with-mattermost", action="store_true", help="Opt in to creating/configuring a Mattermost bot (off by default)")
    parser.add_argument("--skip-mattermost", action="store_true", help="Deprecated/no-op: Mattermost is off by default; still forces it off if combined with --with-mattermost")
    parser.add_argument("--mattermost-env", default=str(DEFAULT_MATTERMOST_ENV), help="Env file containing Mattermost URL/token")
    parser.add_argument("--mattermost-url", help="Mattermost base URL; overrides env file")
    parser.add_argument("--mattermost-token", help="Mattermost admin/service token; overrides env file")
    parser.add_argument("--mattermost-team", help="Mattermost team name; defaults to MATTERMOST_TEAM_NAME or the service user's first team")
    parser.add_argument("--mattermost-channels", default="home,bots", help="Comma-separated channel names for the bot to join")
    parser.add_argument("--mattermost-dm-username", help="Username whose direct messages should include the bot; defaults to MATTERMOST_DM_USERNAME or $USER")
    parser.add_argument("--skip-mattermost-runtime", action="store_true", help="Configure the Mattermost bot account, but do not create its runtime token/env/systemd service")
    parser.add_argument("--no-start-mattermost-runtime", action="store_true", help="Write the runtime env/service but do not enable/start it")
    parser.add_argument("--mattermost-bot-script", default=str(DEFAULT_MATTERMOST_BOT_SCRIPT), help="Path to the Mattermost bot.py runner")
    parser.add_argument("--mattermost-bot-python", default=str(DEFAULT_MATTERMOST_BOT_PYTHON), help="Python executable used to run the Mattermost bot")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing generated files")
    args = parser.parse_args(argv)

    purpose = " ".join(args.purpose.split()).strip()
    if not purpose:
        parser.error("--purpose must not be empty")
    if args.no_prompt and not args.with_skill:
        parser.error("--no-prompt requires --with-skill")

    name = slugify(args.name or purpose)
    scope = Path(args.scope_dir).expanduser().resolve()
    skill_path = scope / args.skills_dir / name / "SKILL.md"
    skills_dir = scope / args.skills_dir
    prompt_path = scope / args.prompts_dir / f"{name}.md"

    files: list[dict[str, str]] = []
    try:
        if args.with_skill:
            status = write_file(skill_path, skill_template(name, purpose), args.overwrite)
            files.append({"type": "skill", "status": status, "path": str(skill_path.relative_to(scope))})
            allowlist_status = ensure_skill_allowlisted(skills_dir, name)
            files.append({"type": "skill-allowlist", "status": allowlist_status, "path": str((skills_dir / ".ignore").relative_to(scope))})
        if not args.no_prompt:
            status = write_file(prompt_path, prompt_template(name, purpose, args.with_skill), args.overwrite)
            files.append({"type": "prompt", "status": status, "path": str(prompt_path.relative_to(scope))})
    except FileExistsError as exc:
        print(str(exc), file=sys.stderr)
        print("Re-run with --overwrite to replace it, or choose --name <different-slug>.", file=sys.stderr)
        return 2

    do_mattermost = args.with_mattermost and not args.skip_mattermost
    mattermost_result = {"status": "skipped", "reason": "Mattermost off by default; pass --with-mattermost to enable"}
    mattermost_runtime_result = {"status": "skipped", "reason": "Mattermost off by default; pass --with-mattermost to enable"}
    if do_mattermost:
        channels = [item.strip() for item in args.mattermost_channels.split(",") if item.strip()]
        mattermost_result = create_mattermost_bot(
            name=name,
            purpose=purpose,
            env_path=Path(args.mattermost_env).expanduser(),
            url=args.mattermost_url,
            token=args.mattermost_token,
            team_name=args.mattermost_team,
            channel_names=channels,
            dm_username=args.mattermost_dm_username,
        )
        if not args.skip_mattermost_runtime:
            mattermost_runtime_result = setup_mattermost_runtime(
                scope=scope,
                name=name,
                purpose=purpose,
                mattermost=mattermost_result,
                env_path=Path(args.mattermost_env).expanduser(),
                url=args.mattermost_url,
                token=args.mattermost_token,
                bot_script=Path(args.mattermost_bot_script).expanduser(),
                python_bin=Path(args.mattermost_bot_python).expanduser(),
                start_service=not args.no_start_mattermost_runtime,
            )

    git_result = initialize_git_tracking(scope)
    if git_result["status"] == "failed":
        print("Failed to initialize git repository or stage files.", file=sys.stderr)
        print(json.dumps(git_result, indent=2), file=sys.stderr)
        return 3

    usage = []
    if not args.no_prompt:
        usage.append(f"/{name} <task>")
    if args.with_skill:
        usage.append(f"/skill:{name} <task>")

    result = {
        "name": name,
        "purpose": purpose,
        "scope": str(scope),
        "files": files,
        "usage": usage,
        "reload_required": True,
        "prompt_only": not args.with_skill,
        "mattermost": mattermost_result,
        "mattermost_runtime": mattermost_runtime_result,
        "git": git_result,
    }
    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
