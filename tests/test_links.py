import os
from pathlib import Path

import agents_sync as a
from test_compose import make_cfg


def add_skill(cfg, name):
    d = cfg.shared_skills / name
    d.mkdir(parents=True, exist_ok=True)
    (d / "SKILL.md").write_text(f"---\nname: {name}\n---\n")
    return d


def test_desired_skill_links_covers_all_dests(tmp_path):
    cfg = make_cfg(tmp_path)
    add_skill(cfg, "serving-reports")
    links = a.desired_skill_links(cfg)
    assert len(links) == len(cfg.skill_dests())
    assert all(src == cfg.shared_skills / "serving-reports" for _, src in links)
    assert {l.name for l, _ in links} == {"serving-reports"}


def test_link_state_transitions(tmp_path):
    cfg = make_cfg(tmp_path)
    src = add_skill(cfg, "crisp-writing")
    link = cfg.home / ".claude" / "skills" / "crisp-writing"
    assert a.link_state(link, src, cfg.repo) == "missing"
    a.apply_link(link, src)
    assert a.link_state(link, src, cfg.repo) == "clean"
    # stale: points into repo, wrong place
    link.unlink()
    os.symlink(cfg.repo / "elsewhere", link)
    assert a.link_state(link, src, cfg.repo) == "stale"
    # conflict: real dir
    link.unlink()
    link.mkdir()
    assert a.link_state(link, src, cfg.repo) == "conflict"
    # conflict: foreign symlink
    link.rmdir()
    os.symlink(tmp_path / "other", link)
    assert a.link_state(link, src, cfg.repo) == "conflict"


def test_apply_link_replaces_stale(tmp_path):
    cfg = make_cfg(tmp_path)
    src = add_skill(cfg, "s1")
    link = cfg.home / ".codex" / "skills" / "s1"
    a.apply_link(link, src)
    a.apply_link(link, src)  # idempotent
    assert link.resolve() == src.resolve()


def test_stale_repo_links_detects_orphans(tmp_path):
    cfg = make_cfg(tmp_path)
    src = add_skill(cfg, "gone")
    link = cfg.home / ".claude" / "skills" / "gone"
    a.apply_link(link, src)
    (src / "SKILL.md").unlink()
    src.rmdir()
    assert a.stale_repo_links(cfg) == [link]


def test_home_links_relative_claude_md(tmp_path):
    cfg = make_cfg(tmp_path)
    links = dict(cfg.home_links())
    assert links[cfg.home / "CLAUDE.md"] == Path("AGENTS.md")
    a.apply_link(cfg.home / "CLAUDE.md", Path("AGENTS.md"))
    assert os.readlink(cfg.home / "CLAUDE.md") == "AGENTS.md"
