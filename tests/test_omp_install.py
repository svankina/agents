import os
from pathlib import Path
import subprocess

import pytest


CLI = Path(__file__).resolve().parents[1] / "bin" / "omp-install"


def put(path, content="resource\n"):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content)
    return path


def link(path, target):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.symlink_to(target)
    return path


def snapshot(root):
    """Capture contents and links without following links outside the tree."""
    entries = {}
    for path in root.rglob("*"):
        name = str(path.relative_to(root))
        if path.is_symlink():
            entries[name] = ("link", os.readlink(path))
        elif path.is_dir():
            entries[name] = ("dir",)
        else:
            entries[name] = ("file", path.read_bytes(), path.stat().st_mode)
    return entries


def run(repo, home, *args, expected=0):
    result = subprocess.run(
        [str(CLI), *args, "--repo", str(repo), "--home", str(home)],
        capture_output=True,
        text=True,
        timeout=15,
        env={**os.environ, "HOME": str(home)},
    )
    assert result.returncode == expected, result.stdout + result.stderr
    return result


@pytest.fixture
def workspace(tmp_path):
    repo, home = tmp_path / "repo", tmp_path / "home"
    put(repo / "omp" / "AGENTS.md", "OMP instructions\n")
    put(repo / "home" / "AGENTS.md", "Home instructions\n")
    home.mkdir()
    return repo, home


def test_dock_extensions_install_only_in_docked_agent_directories(workspace, tmp_path):
    repo, home = workspace
    source = put(repo / "omp/dock-extensions/dock-peer-scope.ts", "export default () => {};\n")
    put(repo / "omp/dock-extensions/notes.md")
    docks = home / "src/docked_agents"
    for relative in ("cad/workspace", "herdmon", "printing"):
        (docks / relative).mkdir(parents=True)
    put(docks / "migration.json", "{}\n")
    project = put(home / "src/herd/README.md").parent
    run(repo, home, "install")
    installed = {
        "cad/.omp/extensions/dock-peer-scope.ts",
        "cad/workspace/.omp/extensions/dock-peer-scope.ts",
        "herdmon/.omp/extensions/dock-peer-scope.ts",
        "printing/.omp/extensions/dock-peer-scope.ts",
    }
    for relative in installed:
        assert (docks / relative).is_symlink()
        assert (docks / relative).resolve() == source
    assert {str(path.relative_to(docks)) for path in docks.rglob("*.ts")} == installed
    assert not (docks / "cad/.omp/extensions/notes.md").exists()
    # Ordinary projects and the user extension directory stay out of it.
    assert snapshot(project) == {"README.md": ("file", b"resource\n", (project / "README.md").stat().st_mode)}
    assert not (home / ".omp/agent/extensions").exists()
    run(repo, home, "check")
    # A retired dock extension is pruned from every dock, foreign links are not.
    foreign = link(docks / "herdmon/.omp/extensions/local.ts", tmp_path / "local.ts")
    source.unlink()
    run(repo, home, "check", expected=1)
    run(repo, home, "install")
    assert not any(path.is_symlink() for path in docks.rglob("dock-peer-scope.ts"))
    assert foreign.is_symlink()
    run(repo, home, "check")


def test_instruction_edits_reach_sources_and_reinstall_keeps_links(workspace):
    repo, home = workspace
    run(repo, home)  # No subcommand means install.
    installed = {
        home / ".omp/agent/AGENTS.md": repo / "omp/AGENTS.md",
        home / "AGENTS.md": repo / "home/AGENTS.md",
    }
    for destination, source in installed.items():
        assert destination.is_symlink()
        assert destination.resolve() == source
        destination.write_text("Edited through installed instructions\n")
        assert source.read_text() == "Edited through installed instructions\n"
    identities = {path: path.lstat().st_ino for path in installed}
    run(repo, home, "install")
    run(repo, home, "check")
    assert {path: path.lstat().st_ino for path in installed} == identities


def test_new_resources_install_without_touching_other_harnesses(workspace):
    repo, home = workspace
    for relative in (
        ".claude/CLAUDE.md", ".codex/AGENTS.md", ".pi/agent/AGENTS.md",
        "CLAUDE.md", ".omp/agent/settings.json", ".omp/settings.json",
        ".omp/agent/managed-skills/private/SKILL.md",
    ):
        put(home / relative, "keep my local configuration\n")
    protected = snapshot(home)
    run(repo, home)
    for source in ("pi/skills/historical/SKILL.md", "claude/commands/old.md"):
        put(repo / source)
    resources = {
        ".omp/agent/skills/new-skill": "shared/skills/new-skill",
        ".omp/agent/commands/new-command.md": "shared/commands/new-command.md",
        ".omp/agent/agents/new-agent.md": "shared/agents/new-agent.md",
        ".local/bin/helper": "bin/helper",
    }
    put(repo / "shared/skills/new-skill/SKILL.md")
    put(repo / "shared/commands/new-command.md")
    put(repo / "shared/agents/new-agent.md")
    put(repo / "bin/helper", "#!/bin/sh\nprintf 'installed helper\\n'\n").chmod(0o755)
    put(repo / "bin/internal.py").chmod(0o755)
    put(repo / "bin/not-executable")
    put(repo / "shared/commands/notes.txt")
    put(repo / "shared/agents/notes.txt")
    put(repo / "shared/skills/not-a-directory")
    run(repo, home, "install")
    for destination, source in resources.items():
        assert (home / destination).is_symlink()
        assert (home / destination).resolve() == repo / source
    helper = subprocess.run(
        [str(home / ".local/bin/helper")], capture_output=True, text=True, timeout=5
    )
    assert helper.returncode == 0
    assert helper.stdout == "installed helper\n"
    current = snapshot(home)
    assert {path: current[path] for path in protected} == protected
    assert set(current) - set(protected) == {
        "AGENTS.md", ".omp/agent/AGENTS.md", ".omp/agent/skills",
        ".omp/agent/commands", ".omp/agent/agents", ".local", ".local/bin",
        *resources,
    }
    run(repo, home, "check")


@pytest.mark.parametrize("conflict", ["file", "directory", "foreign-link"])
def test_conflicts_block_entire_plan_without_clobbering(workspace, tmp_path, conflict):
    repo, home = workspace
    put(repo / "shared/agents/reviewer.md")
    destination = home / ".omp/agent/agents/reviewer.md"
    foreign = put(tmp_path / "private.md", "private content\n")
    if conflict == "file":
        put(destination, "local agent\n")
    elif conflict == "directory":
        put(destination / "keep.txt", "local directory\n")
    else:
        link(destination, foreign)
    before = snapshot(home)
    run(repo, home, "install", expected=2)
    assert snapshot(home) == before
    assert foreign.read_text() == "private content\n"
    assert not (home / "AGENTS.md").exists()


def test_owned_stale_links_repair_but_repo_prefix_neighbors_block(workspace, tmp_path):
    repo, home = workspace
    source = put(repo / "shared/commands/review.md")
    destination = link(home / ".omp/agent/commands/review.md", repo / "old/review.md")
    run(repo, home, "install")
    assert destination.resolve() == source
    destination.unlink()
    neighbor = put(tmp_path / "repo-neighbor/review.md", "foreign command\n")
    # Relative targets must be classified using their destination directory.
    link(destination, os.path.relpath(neighbor, destination.parent))
    (home / "AGENTS.md").unlink()
    before = snapshot(home)
    run(repo, home, "install", expected=2)
    assert snapshot(home) == before
    assert neighbor.read_text() == "foreign command\n"


def test_pruning_is_limited_to_dangling_owned_resource_subtrees(workspace, tmp_path):
    repo, home = workspace
    run(repo, home)
    pruned = []
    preserved = []
    for destination_dir, source_dir in (
        (".omp/agent/skills", "shared/skills"),
        (".omp/agent/commands", "shared/commands"),
        (".omp/agent/agents", "shared/agents"),
        (".local/bin", "bin"),
    ):
        root = home / destination_dir
        missing = repo / source_dir / "removed"
        pruned.append(link(root / "removed", os.path.relpath(missing, root)))
        preserved.append(link(root / "foreign", tmp_path / "foreign/missing"))
        preserved.append(link(root / "wrong-subtree", repo / "unrelated/missing"))
        preserved.append(link(root / "prefix-neighbor", Path(str(repo) + "-neighbor") / source_dir / "missing"))
        live = put(repo / source_dir / "retained-target.txt")
        preserved.append(link(root / "live-alias", live))
        put(root / "local-directory/keep.txt", "local directory\n")
    before = snapshot(home)
    run(repo, home, "check", expected=1)
    assert snapshot(home) == before
    run(repo, home, "install")
    assert all(not path.is_symlink() and not path.exists() for path in pruned)
    for path in preserved:
        assert path.is_symlink()
        assert os.readlink(path) == before[str(path.relative_to(home))][1]
    after = snapshot(home)
    for name, value in before.items():
        if name not in {str(path.relative_to(home)) for path in pruned}:
            assert after[name] == value
    run(repo, home, "check")


def test_check_never_installs_repairs_or_creates_directories(workspace):
    repo, home = workspace
    run(repo, home, "check", expected=1)
    assert snapshot(home) == {}
    run(repo, home)
    (home / "AGENTS.md").unlink()
    omp = home / ".omp/agent/AGENTS.md"
    omp.unlink()
    link(omp, repo / "old/AGENTS.md")
    before = snapshot(home)
    run(repo, home, "check", expected=1)
    assert snapshot(home) == before
    run(repo, home)
    run(repo, home, "check")


@pytest.mark.parametrize("missing", ["omp/AGENTS.md", "home/AGENTS.md"])
def test_missing_required_instructions_block_without_broken_links(workspace, missing):
    repo, home = workspace
    (repo / missing).unlink()
    put(repo / "shared/commands/review.md")
    run(repo, home, "install", expected=2)
    assert snapshot(home) == {}
    run(repo, home, "check", expected=1)
    assert snapshot(home) == {}
