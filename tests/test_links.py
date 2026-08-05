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
    src = add_skill(cfg, "example-skill")
    link = cfg.home / ".claude" / "skills" / "example-skill"
    assert a.link_state(link, src, cfg.repo) == "missing"
    a.apply_link(link, src, cfg.repo)
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
    a.apply_link(link, src, cfg.repo)
    a.apply_link(link, src, cfg.repo)  # idempotent
    assert link.resolve() == src.resolve()


def test_stale_repo_links_detects_orphans(tmp_path):
    cfg = make_cfg(tmp_path)
    src = add_skill(cfg, "gone")
    link = cfg.home / ".claude" / "skills" / "gone"
    a.apply_link(link, src, cfg.repo)
    (src / "SKILL.md").unlink()
    src.rmdir()
    assert a.stale_repo_links(cfg) == [link]


def test_home_links_relative_claude_md(tmp_path):
    cfg = make_cfg(tmp_path)
    links = dict(cfg.home_links())
    assert links[cfg.home / "CLAUDE.md"] == Path("AGENTS.md")
    a.apply_link(cfg.home / "CLAUDE.md", Path("AGENTS.md"), cfg.repo)
    assert os.readlink(cfg.home / "CLAUDE.md") == "AGENTS.md"


def add_command(cfg, name):
    cfg.shared_commands.mkdir(parents=True, exist_ok=True)
    path = cfg.shared_commands / f"{name}.md"
    path.write_text(f"---\ndescription: {name}\n---\nBody.\n")
    return path


def test_desired_command_links_covers_all_dests(tmp_path):
    cfg = make_cfg(tmp_path)
    src = add_command(cfg, "karen")
    links = a.desired_command_links(cfg)
    assert [link for link, _ in links] == [d / "karen.md" for d in cfg.command_dests()]
    assert all(target == src for _, target in links)


def test_command_links_ignore_non_markdown(tmp_path):
    cfg = make_cfg(tmp_path)
    add_command(cfg, "karen")
    (cfg.shared_commands / "notes.txt").write_text("not a command\n")
    assert {link.name for link, _ in a.desired_command_links(cfg)} == {"karen.md"}


def test_stale_repo_links_prunes_removed_command(tmp_path):
    cfg = make_cfg(tmp_path)
    src = add_command(cfg, "gone")
    link = cfg.command_dests()[0] / "gone.md"
    a.apply_link(link, src, cfg.repo)
    src.unlink()
    assert a.stale_repo_links(cfg) == [link]


def test_iter_link_items_includes_commands(tmp_path):
    cfg = make_cfg(tmp_path)
    add_command(cfg, "karen")
    seen = {link: state for link, _, state in a._iter_link_items(cfg)}
    for dest in cfg.command_dests():
        assert seen[dest / "karen.md"] == "missing"
