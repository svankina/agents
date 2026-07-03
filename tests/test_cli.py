from pathlib import Path

import agents_sync as a
from test_compose import make_cfg
from test_links import add_skill


def run(cfg, *argv):
    return a.main([*argv, "--repo", str(cfg.repo), "--home", str(cfg.home)])


def test_sync_creates_all_targets_and_links(tmp_path):
    cfg = make_cfg(tmp_path)
    add_skill(cfg, "serving-reports")
    (cfg.repo / "home" / "AGENTS.md").parent.mkdir(exist_ok=True)
    (cfg.repo / "home" / "AGENTS.md").write_text("# home\n")
    assert run(cfg, "sync") == 0
    for t in cfg.targets():
        assert t.path.read_text().startswith(a.BANNER_PREFIX)
    assert (cfg.home / ".claude" / "skills" / "serving-reports").is_symlink()
    assert (cfg.home / "CLAUDE.md").is_symlink()
    assert (cfg.home / "AGENTS.md").resolve() == (cfg.repo / "home" / "AGENTS.md").resolve()


def test_sync_idempotent(tmp_path):
    cfg = make_cfg(tmp_path)
    add_skill(cfg, "s")
    (cfg.repo / "home").mkdir(exist_ok=True)
    (cfg.repo / "home" / "AGENTS.md").write_text("# home\n")
    assert run(cfg, "sync") == 0
    snapshot = {t.path: t.path.read_text() for t in cfg.targets()}
    assert run(cfg, "sync") == 0
    assert {t.path: t.path.read_text() for t in cfg.targets()} == snapshot
    assert run(cfg, "check") == 0


def test_check_flags_drift_and_sync_blocks_without_force(tmp_path):
    cfg = make_cfg(tmp_path)
    (cfg.repo / "home").mkdir(exist_ok=True)
    (cfg.repo / "home" / "AGENTS.md").write_text("# home\n")
    run(cfg, "sync")
    t = cfg.targets()[0]
    t.path.write_text(t.path.read_text() + "hand edit\n")
    assert run(cfg, "check") == 1
    assert run(cfg, "sync") == 2          # blocked
    assert "hand edit" in t.path.read_text()  # untouched
    assert run(cfg, "sync", "--force") == 0
    assert "hand edit" not in t.path.read_text()
    assert run(cfg, "check") == 0


def test_sync_preserves_foreign_block_through_regeneration(tmp_path):
    cfg = make_cfg(tmp_path)
    (cfg.repo / "home").mkdir(exist_ok=True)
    (cfg.repo / "home" / "AGENTS.md").write_text("# home\n")
    t = [x for x in cfg.targets() if x.agent == "codex"][0]
    t.path.parent.mkdir(parents=True)
    t.path.write_text("legacy\n<!-- fetcher:begin -->\nF\n<!-- fetcher:end -->\n")
    assert run(cfg, "sync") == 2   # foreign file, blocked
    assert run(cfg, "sync", "--force") == 0
    assert "fetcher:begin" in t.path.read_text()
    assert "legacy" not in t.path.read_text()
    assert run(cfg, "sync") == 0   # now clean, idempotent, block kept
    assert "fetcher:begin" in t.path.read_text()


def test_real_dir_skill_conflict_never_deleted(tmp_path):
    cfg = make_cfg(tmp_path)
    (cfg.repo / "home").mkdir(exist_ok=True)
    (cfg.repo / "home" / "AGENTS.md").write_text("# home\n")
    src = add_skill(cfg, "serving-reports")
    real = cfg.home / ".claude" / "skills" / "serving-reports"
    real.mkdir(parents=True)
    (real / "SKILL.md").write_text("old copy\n")
    assert run(cfg, "sync", "--force") == 2  # conflict reported even with force
    assert (real / "SKILL.md").read_text() == "old copy\n"


def test_diff_reports_pending_changes(tmp_path, capsys):
    cfg = make_cfg(tmp_path)
    (cfg.repo / "home").mkdir(exist_ok=True)
    (cfg.repo / "home" / "AGENTS.md").write_text("# home\n")
    run(cfg, "sync")
    (cfg.repo / "shared" / "AGENTS.md").write_text("# Shared core v2\n")
    assert run(cfg, "check") == 1
    run(cfg, "diff")
    out = capsys.readouterr().out
    assert "Shared core v2" in out
