#!/usr/bin/env python3
"""agents-sync: generate per-agent global instruction files, skill symlinks and
shared agent commands from the single source of truth in ~/src/agents.

Each target is composed as: base + shared/USER.md + <agent>/local.md,
where base is <agent>/AGENTS.md when that file exists (a full per-agent fork)
and shared/AGENTS.md otherwise. Foreign managed blocks
(<!-- name:begin --> ... <!-- name:end -->) found in the existing target
preserved at the end. See
docs/superpowers/specs/2026-07-03-agent-unification-design.md.
"""

import argparse
import difflib
import hashlib
import json
import os
import re
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path

AGENTS = ["claude", "codex", "pi", "omp"]

# omp discovers config from other CLIs, including Claude Code's. Its
# `claude-plugins` provider loads skills/commands/hooks/tools/MCP straight out
# of ~/.claude/plugins/cache/, and its `claude` provider scans ~/.claude/skills
# and every ancestor .claude/skills. Claude Code's plugins are chosen for Claude
# Code; omp gets its skills from ~/src/agents/shared/skills. Only
# skills/plugins are switched off: the `claude` provider still supplies
# ~/.claude/commands, which command_dests() deliberately relies on.
OMP_ENFORCED_SETTINGS = {
    "disabledProviders": ["claude-plugins"],
    "skills.enableClaudeUser": False,
    "skills.enableClaudeProject": False,
}

FOREIGN_BLOCK_RE = re.compile(
    r"<!--\s*([A-Za-z0-9_-]+):begin\b[^>]*-->\n?.*?<!--\s*\1:end\s*-->\n?",
    re.DOTALL,
)


@dataclass
class Target:
    agent: str
    path: Path
    local_md: Path
    source_md: Path  # <agent>/AGENTS.md fork if present, else shared/AGENTS.md


@dataclass
class Config:
    repo: Path
    home: Path

    @property
    def shared_md(self) -> Path:
        return self.repo / "shared" / "AGENTS.md"

    @property
    def user_md(self) -> Path:
        return self.repo / "shared" / "USER.md"

    @property
    def generation_state(self) -> Path:
        return self.home / ".local" / "state" / "agents-sync" / "generated.json"

    @property
    def shared_skills(self) -> Path:
        return self.repo / "shared" / "skills"

    @property
    def shared_commands(self) -> Path:
        return self.repo / "shared" / "commands"

    @property
    def shared_agents(self) -> Path:
        return self.repo / "shared" / "agents"

    def targets(self) -> list[Target]:
        paths = {
            "claude": self.home / ".claude" / "CLAUDE.md",
            "codex": self.home / ".codex" / "AGENTS.md",
            "pi": self.home / ".pi" / "agent" / "AGENTS.md",
            "omp": self.home / ".omp" / "agent" / "AGENTS.md",
        }
        out = []
        for a in AGENTS:
            fork = self.repo / a / "AGENTS.md"
            out.append(Target(a, paths[a], self.repo / a / "local.md",
                              fork if fork.exists() else self.shared_md))
        return out

    def skill_dests(self) -> list[Path]:
        return [
            self.home / ".claude" / "skills",
            self.home / ".codex" / "skills",
            self.home / ".omp" / "agent" / "skills",
            self.repo / "pi" / "skills",
        ]

    def command_dests(self) -> list[Path]:
        """Where a slash command has to land to be found. omp's native provider
        reads its own dir and cannot be switched off; the claude dir is what
        Claude Code reads, and omp's claude provider picks it up there too."""
        return [
            self.home / ".claude" / "commands",
            self.home / ".omp" / "agent" / "commands",
        ]

    def agent_dests(self) -> list[Path]:
        """Where a subagent definition has to land to be discovered. Claude Code
        reads ~/.claude/agents; omp reads the default agent dir's agents/.
        codex/pi have no subagent surface."""
        return [
            self.home / ".claude" / "agents",
            self.omp_config().parent / "agents",
        ]

    def home_links(self) -> list[tuple[Path, Path]]:
        return [
            (self.home / "AGENTS.md", self.repo / "home" / "AGENTS.md"),
            (self.home / "CLAUDE.md", Path("AGENTS.md")),  # relative link
        ]

    def bin_links(self) -> list[tuple[Path, Path]]:
        """Executables in repo/bin -> ~/.local/bin, so a new command is a
        new file plus `agents-sync sync`, never a hand-rolled symlink."""
        src = self.repo / "bin"
        if not src.is_dir():
            return []
        dest = self.home / ".local" / "bin"
        return [
            (dest / p.name, p)
            for p in sorted(src.iterdir())
            if p.is_file() and os.access(p, os.X_OK) and p.suffix != ".py"
        ]

    def omp_config(self) -> Path:
        return self.home / ".omp" / "agent" / "config.yml"


def extract_foreign_blocks(text: str) -> list[str]:
    return [m.group(0).rstrip("\n") + "\n" for m in FOREIGN_BLOCK_RE.finditer(text)]


def compose(shared_text: str, local_text: str,
            foreign_blocks: list[str], user_text: str = "") -> str:
    parts = [shared_text.rstrip("\n") + "\n"]
    for extra in (user_text, local_text):
        if extra.strip():
            parts += ["\n", extra.rstrip("\n") + "\n"]
    for block in foreign_blocks:
        parts += ["\n", block]
    return "".join(parts)


def expected_content(cfg: Config, t: Target) -> str:
    shared = t.source_md.read_text()
    user = cfg.user_md.read_text() if cfg.user_md.exists() else ""
    local = t.local_md.read_text() if t.local_md.exists() else ""
    current = t.path.read_text() if t.path.exists() else ""
    return compose(shared, local, extract_foreign_blocks(current), user)


def target_state(t: Target, expected: str, last_hash: str | None) -> str:
    if not t.path.exists():
        return "missing"
    current = t.path.read_text()
    if current == expected:
        return "clean"
    if last_hash is not None:
        if hashlib.sha256(t.path.read_bytes()).hexdigest() == last_hash:
            return "outdated"
        return "drifted"
    return "foreign"


def read_generation_state(cfg: Config) -> dict[str, str]:
    try:
        state = json.loads(cfg.generation_state.read_text())
    except FileNotFoundError:
        return {}
    if not isinstance(state, dict) or any(
        not isinstance(path, str) or not isinstance(digest, str)
        or re.fullmatch(r"[0-9a-f]{64}", digest) is None
        for path, digest in state.items()
    ):
        raise ValueError(f"Invalid generation state: {cfg.generation_state}")
    return state


def write_generation_state(cfg: Config, state: dict[str, str]) -> None:
    cfg.generation_state.parent.mkdir(parents=True, exist_ok=True)
    temporary = cfg.generation_state.with_suffix(".tmp")
    temporary.write_text(json.dumps(state, indent=2, sort_keys=True) + "\n")
    temporary.replace(cfg.generation_state)


def desired_skill_links(cfg: Config) -> list[tuple[Path, Path]]:
    links = []
    if cfg.shared_skills.is_dir():
        for skill in sorted(p for p in cfg.shared_skills.iterdir() if p.is_dir()):
            for dest in cfg.skill_dests():
                links.append((dest / skill.name, skill))
    return links


def desired_command_links(cfg: Config) -> list[tuple[Path, Path]]:
    """shared/commands/*.md -> every agent's command dir, so a new slash command
    is a new file plus `agents-sync sync`, never a hand-rolled symlink."""
    links = []
    if cfg.shared_commands.is_dir():
        for cmd in sorted(p for p in cfg.shared_commands.iterdir() if p.suffix == ".md"):
            for dest in cfg.command_dests():
                links.append((dest / cmd.name, cmd))
    return links


def desired_agent_links(cfg: Config) -> list[tuple[Path, Path]]:
    """shared/agents/*.md -> every harness's agent-definition dir, so a new
    subagent is a new file plus `agents-sync sync`."""
    links = []
    if cfg.shared_agents.is_dir():
        for agent in sorted(p for p in cfg.shared_agents.iterdir() if p.suffix == ".md"):
            for dest in cfg.agent_dests():
                links.append((dest / agent.name, agent))
    return links


def link_state(link: Path, target: Path, repo: Path) -> str:
    if not link.is_symlink():
        if link.exists():
            return "conflict"
        return "missing"
    raw = os.readlink(link)
    try:
        resolved = link.resolve(strict=True)
    except OSError:
        resolved = None
    want = target if target.is_absolute() else (link.parent / target)
    if resolved is not None and resolved == want.resolve():
        return "clean"
    if raw.startswith(str(repo)):
        return "stale"
    return "conflict"


def apply_link(link: Path, target: Path, repo: Path) -> None:
    link.parent.mkdir(parents=True, exist_ok=True)
    if link.is_symlink():
        link.unlink()
    # In-repo links get committed to a public repo: keep them relative so they
    # neither leak absolute paths nor break on other machines.
    if str(link).startswith(str(repo) + os.sep):
        target = Path(os.path.relpath(target, link.parent))
    os.symlink(target, link)


def stale_repo_links(cfg: Config) -> list[Path]:
    """Links we made for a skill, command or agent the repo no longer has."""
    groups = (
        (cfg.skill_dests(), cfg.shared_skills, desired_skill_links(cfg)),
        (cfg.command_dests(), cfg.shared_commands, desired_command_links(cfg)),
        (cfg.agent_dests(), cfg.shared_agents, desired_agent_links(cfg)),
    )
    out = []
    for dests, source, wanted in groups:
        valid = {link for link, _ in wanted}
        for dest in dests:
            if not dest.is_dir():
                continue
            for entry in sorted(dest.iterdir()):
                if entry in valid or not entry.is_symlink():
                    continue
                raw = os.readlink(entry)
                points_to = raw if os.path.isabs(raw) else os.path.join(str(entry.parent), raw)
                if os.path.normpath(points_to).startswith(str(source)) and not entry.exists():
                    out.append(entry)
    return out


def _omp_setting(data: dict, key: str):
    """Read a dotted key the way omp writes it: nested map, or a flat key."""
    if key in data:
        return data[key]
    node = data
    for part in key.split("."):
        if not isinstance(node, dict) or part not in node:
            return None
        node = node[part]
    return node


def omp_drift(cfg: Config) -> list[tuple[str, object]]:
    """(key, current) for every enforced omp setting not yet applied."""
    try:
        import yaml
    except ImportError:  # enforcement is best-effort; never block a sync on it
        return []
    path = cfg.omp_config()
    if not path.exists():
        return []
    try:
        data = yaml.safe_load(path.read_text()) or {}
    except yaml.YAMLError:
        return []
    if not isinstance(data, dict):
        return []
    out = []
    for key, want in OMP_ENFORCED_SETTINGS.items():
        current = _omp_setting(data, key)
        if isinstance(want, list):
            ok = isinstance(current, list) and set(want) <= set(current)
        else:
            ok = current == want
        if not ok:
            out.append((key, current))
    return out


def apply_omp_setting(cfg: Config, key: str, value: object) -> bool:
    """Write through `omp config set` so omp owns its own file format."""
    import json

    cmd = ["omp", "config", "set", key, json.dumps(value)]
    # Honour --home: without this a test run would write the real ~/.omp.
    env = {**os.environ, "HOME": str(cfg.home)}
    try:
        done = subprocess.run(cmd, capture_output=True, text=True, timeout=120, env=env)
    except (OSError, subprocess.SubprocessError):
        return False
    return done.returncode == 0


def _iter_target_items(cfg: Config, state: dict[str, str] | None = None):
    if state is None:
        state = read_generation_state(cfg)
    for t in cfg.targets():
        exp = expected_content(cfg, t)
        yield t, exp, target_state(t, exp, state.get(str(t.path)))


def _iter_link_items(cfg: Config):
    for link, target in (desired_skill_links(cfg) + desired_command_links(cfg)
                         + desired_agent_links(cfg) + cfg.home_links() + cfg.bin_links()):
        yield link, target, link_state(link, target, cfg.repo)


def cmd_check(cfg: Config) -> int:
    bad = 0
    for t, _exp, state in _iter_target_items(cfg):
        if state != "clean":
            print(f"[{state}] {t.path}")
            bad += 1
    for link, target, state in _iter_link_items(cfg):
        if state != "clean":
            print(f"[{state}] {link} -> {target}")
            bad += 1
    for orphan in stale_repo_links(cfg):
        print(f"[orphan] {orphan}")
        bad += 1
    for key, current in omp_drift(cfg):
        print(f"[omp-setting] default: {key} = {current!r}, "
              f"want {OMP_ENFORCED_SETTINGS[key]!r}")
        bad += 1
    if bad == 0:
        print("clean")
    return 1 if bad else 0


def cmd_diff(cfg: Config) -> int:
    try:
        for t, exp, state in _iter_target_items(cfg):
            if state == "clean":
                continue
            current = t.path.read_text() if t.path.exists() else ""
            sys.stdout.writelines(difflib.unified_diff(
                current.splitlines(keepends=True), exp.splitlines(keepends=True),
                fromfile=str(t.path), tofile=f"generated:{t.agent}"))
    except BrokenPipeError:  # e.g. `agents-sync diff | head`
        import os as _os
        _os.dup2(_os.open(_os.devnull, _os.O_WRONLY), sys.stdout.fileno())
    return 0


def cmd_sync(cfg: Config, force: bool) -> int:
    blocked = 0
    generation_state = read_generation_state(cfg)
    for t, exp, state in _iter_target_items(cfg, generation_state):
        if state == "clean":
            generation_state[str(t.path)] = hashlib.sha256(exp.encode()).hexdigest()
            continue
        if state in ("drifted", "foreign") and not force:
            print(f"[blocked:{state}] {t.path} — re-run with --force after "
                  f"reviewing (agents-sync diff)")
            blocked += 1
            continue
        t.path.parent.mkdir(parents=True, exist_ok=True)
        t.path.write_text(exp)
        generation_state[str(t.path)] = hashlib.sha256(exp.encode()).hexdigest()
        print(f"[wrote] {t.path}")
    write_generation_state(cfg, generation_state)
    for link, target, state in _iter_link_items(cfg):
        if state == "clean":
            continue
        if state == "conflict":
            print(f"[conflict] {link} exists and is not ours — resolve "
                  f"manually (trash-put it), then re-run")
            blocked += 1
            continue
        if state == "stale" and not force:
            print(f"[blocked:stale] {link} — re-run with --force")
            blocked += 1
            continue
        apply_link(link, target, cfg.repo)
        print(f"[linked] {link} -> {target}")
    for orphan in stale_repo_links(cfg):
        orphan.unlink()
        print(f"[pruned] {orphan}")
    for key, _current in omp_drift(cfg):
        want = OMP_ENFORCED_SETTINGS[key]
        if apply_omp_setting(cfg, key, want):
            print(f"[omp-set] default: {key} = {want!r}")
        else:
            print(f"[failed] omp config set {key} — is `omp` on PATH?")
            blocked += 1
    return 2 if blocked else 0


def main(argv: list[str]) -> int:
    p = argparse.ArgumentParser(prog="agents-sync", description=__doc__)
    p.add_argument("command", choices=["sync", "check", "diff"])
    p.add_argument("--force", action="store_true")
    p.add_argument("--repo", type=Path, default=Path.home() / "src" / "agents")
    p.add_argument("--home", type=Path, default=Path.home())
    args = p.parse_args(argv)
    cfg = Config(repo=args.repo.resolve(), home=args.home.resolve())
    if args.command == "check":
        return cmd_check(cfg)
    if args.command == "diff":
        return cmd_diff(cfg)
    return cmd_sync(cfg, force=args.force)


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
