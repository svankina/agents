import json
import os
from pathlib import Path
import subprocess
from concurrent.futures import ThreadPoolExecutor

import pytest


BIN = Path(__file__).resolve().parents[1] / "bin"


@pytest.fixture
def cli(tmp_path):
    env = {**os.environ, "XDG_STATE_HOME": str(tmp_path / "state"),
           "XDG_CONFIG_HOME": str(tmp_path / "config"),
           "XDG_RUNTIME_DIR": str(tmp_path / "runtime")}

    def run(tool, *args, cwd=tmp_path, check=True):
        return subprocess.run([str(BIN / tool), *args], cwd=cwd, env=env,
                              capture_output=True, text=True, check=check)

    return run


def git(cwd, *args):
    subprocess.run(["git", "-C", str(cwd), *args], check=True, capture_output=True)


def test_worktrees_and_subdirectories_share_history_without_cross_project_leaks(tmp_path, cli):
    repo = tmp_path / "project with spaces"
    repo.mkdir()
    git(repo, "init")
    git(repo, "-c", "user.name=Test", "-c", "user.email=test@example.invalid",
        "commit", "--allow-empty", "-m", "initial")
    worktree = tmp_path / "feature"
    git(repo, "worktree", "add", "-b", "feature", str(worktree))
    subdir = worktree / "nested"
    subdir.mkdir()
    cli("agent-history", "add", "--source", "worker", "Fixed 100%_literal boundary", cwd=subdir)
    cli("agent-history", "add", "Different folder's work", cwd=tmp_path)
    records = json.loads(cli("agent-history", "--json", cwd=repo).stdout)
    assert [r["message"] for r in records] == ["Fixed 100%_literal boundary"]
    assert records[0]["branch"] == "feature"
    assert records[0]["cwd"] == str(subdir)
    assert json.loads(cli("agent-history", "--json", "--search", "100%_LITERAL", cwd=repo).stdout) == records
    assert json.loads(cli("agent-history", "--json", "--search", "100_anything", cwd=repo).stdout) == []
    link = tmp_path / "alias"
    link.symlink_to(repo, target_is_directory=True)
    assert json.loads(cli("agent-history", "--json", cwd=link).stdout) == records


def test_status_failure_preserves_summary_and_reports_delivery_error(cli):
    result = cli("agent-status", "--source", "offline-worker", "wrapped up: fixed offline storage", check=False)
    assert result.returncode != 0
    assert "missing webhook config" in result.stderr
    records = json.loads(cli("agent-history", "--json").stdout)
    assert [(r["source"], r["message"]) for r in records] == [
        ("offline-worker", "wrapped up: fixed offline storage")]


def test_concurrent_writers_keep_complete_records_and_newest_limit(cli):
    messages = [f"completed change {i}\nwith verification" for i in range(12)]
    with ThreadPoolExecutor(max_workers=4) as pool:
        list(pool.map(lambda msg: cli("agent-history", "add", msg), messages))
    records = json.loads(cli("agent-history", "--json").stdout)
    assert sorted(r["message"] for r in records) == sorted(messages)
    assert json.loads(cli("agent-history", "--json", "--limit", "2").stdout) == records[:2]
