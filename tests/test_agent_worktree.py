"""Real-Git safety contracts for bin/agent-worktree."""
import os
from pathlib import Path
import subprocess
import tempfile
import unittest

CLI = str(Path(__file__).resolve().parents[1] / "bin" / "agent-worktree")


class AgentWorktreeIntegration(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name) / "repo"
        self.remote = Path(self.temp.name) / "remote.git"
        self.git("init", "-b", "main", self.root, cwd=self.temp.name)
        self.git("config", "user.email", "test@example.invalid")
        self.git("config", "user.name", "Test User")
        (self.root / "base").write_text("base\n")
        self.git("add", "base")
        self.git("commit", "-m", "base")
        self.git("init", "--bare", self.remote, cwd=self.temp.name)
        self.git("remote", "add", "origin", self.remote)
        self.git("push", "-u", "origin", "main")

    def git(self, *args, cwd=None, check=True, env=None):
        return subprocess.run(["git", *map(str, args)], cwd=cwd or self.root,
                              text=True, capture_output=True, check=check, env=env)
    def cli(self, *args, check=True):
        return subprocess.run([CLI, args[0], "--repo", self.root, *map(str, args[1:])], cwd=self.root,
                              text=True, capture_output=True, check=check)

    def new(self, name="feature"):
        result = self.cli("new", name)
        return Path(result.stdout.strip())

    def commit(self, where, filename, contents, message):
        (Path(where) / filename).write_text(contents)
        self.git("add", filename, cwd=where)
        self.git("commit", "-m", message, cwd=where)

    def head(self, ref, cwd=None):
        return self.git("rev-parse", ref, cwd=cwd).stdout.strip()

    def integrate(self, feature="feature", *verification, check=True):
        return self.cli("integrate", feature, "--target", "main", "--remote", "origin",
                        "--", *verification, check=check)

    def test_integrate_rebases_then_fast_forwards_and_delete_is_safe(self):
        feature = self.new()
        self.commit(feature, "feature", "feature\n", "feature")
        self.commit(self.root, "target", "target\n", "target")
        self.git("push", "origin", "main")
        self.integrate("feature", "sh", "-c", "test -f feature && test -f target")
        self.assertEqual(self.head("main"), self.head("feature"))
        self.assertTrue(self.git("merge-base", "--is-ancestor", "feature", "main").returncode == 0)
        self.cli("rm", "feature", "--delete-branch", "--target", "main")
        self.assertFalse(feature.exists())
        self.assertNotEqual(self.git("show-ref", "--verify", "--quiet", "refs/heads/feature", check=False).returncode, 0)

    def test_integrate_allows_local_target_ahead_of_remote(self):
        feature = self.new()
        self.commit(feature, "feature", "feature\n", "feature")
        self.commit(self.root, "local-target", "local\n", "local target only")
        target_before = self.head("main")
        self.integrate("feature", "true")
        self.assertEqual(self.head("main"), self.head("feature"))
        self.assertNotEqual(self.head("main"), target_before)

    def test_delete_rejects_pseudo_ref_and_target_not_checked_out(self):
        feature = self.new()
        self.commit(feature, "feature", "ok\n", "feature")
        self.git("merge", "--ff-only", "feature")
        self.git("checkout", "-b", "elsewhere")
        pseudo = self.cli("rm", "@{-1}", "--delete-branch", "--target", "main", check=False)
        self.assertNotEqual(pseudo.returncode, 0)
        wrong_target = self.cli("rm", "feature", "--delete-branch", "--target", "main", check=False)
        self.assertNotEqual(wrong_target.returncode, 0)
        self.assertTrue(feature.exists())

    def test_cherry_pick_orphan_refuses_removal_and_retains_worktree(self):
        feature = self.new()
        self.commit(feature, "feature", "feature\n", "feature")
        self.commit(self.root, "target", "target\n", "target")
        self.git("cherry-pick", self.head("feature"))
        self.assertNotEqual(self.head("feature"), self.head("main"))
        self.assertEqual(self.git("status", "--porcelain", cwd=feature).stdout, "")
        self.assertEqual(self.git("status", "--porcelain").stdout, "")
        refused = self.cli("rm", "feature", "--delete-branch", "--target", "main", check=False)
        self.assertNotEqual(refused.returncode, 0)
        self.assertTrue(feature.is_dir())
        self.assertEqual(self.git("branch", "--show-current", cwd=feature).stdout.strip(), "feature")
        self.assertEqual(self.git("show-ref", "--verify", "--quiet", "refs/heads/feature", check=False).returncode, 0)

    def test_missing_worktree_retry_deletes_only_merged_branch(self):
        feature = self.new()
        self.commit(feature, "feature", "ok\n", "feature")
        self.git("merge", "--ff-only", "feature")
        self.git("worktree", "remove", feature)
        self.cli("rm", "feature", "--delete-branch", "--target", "main")
        self.assertNotEqual(self.git("show-ref", "--verify", "--quiet", "refs/heads/feature", check=False).returncode, 0)

    def test_delete_requires_explicit_target_and_preserves_upstream_safety(self):
        feature = self.new()
        self.commit(feature, "feature", "ok\n", "feature")
        missing_target = self.cli("rm", "feature", "--delete-branch", check=False)
        self.assertNotEqual(missing_target.returncode, 0)
        self.assertTrue(feature.exists())
        self.git("merge", "--ff-only", "feature")
        self.git("branch", "--set-upstream-to", "origin/main", "feature")
        rejected = self.cli("rm", "feature", "--delete-branch", "--target", "main", check=False)
        self.assertNotEqual(rejected.returncode, 0)
        self.assertTrue(feature.exists())

    def test_delete_does_not_accept_upstream_merge_when_explicit_target_lacks_feature(self):
        feature = self.new()
        self.commit(feature, "feature", "ok\n", "feature")
        self.git("branch", "containing", "feature")
        self.git("checkout", "-b", "release")
        self.git("branch", "--set-upstream-to", "containing", "feature")
        refused = self.cli("rm", "feature", "--delete-branch", "--target", "release", check=False)
        self.assertNotEqual(refused.returncode, 0)
        self.assertTrue(feature.exists())
        self.assertEqual(self.git("show-ref", "--verify", "--quiet", "refs/heads/feature", check=False).returncode, 0)

    def test_conflicting_rebase_preserves_feature_worktree_for_recovery(self):
        feature = self.new()
        self.commit(feature, "base", "feature\n", "feature edits base")
        self.commit(self.root, "base", "target\n", "target edits base")
        self.git("push", "origin", "main")
        result = self.integrate("feature", "true", check=False)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("rebase --continue", result.stderr)
        self.assertTrue(feature.exists())
        (feature / "base").write_text("resolved\n")
        self.git("add", "base", cwd=feature)
        self.git("rebase", "--continue", cwd=feature, env={**os.environ, "GIT_EDITOR": "true"})
        self.integrate("feature", "sh", "-c", "test -f base")
        self.assertEqual(self.head("main"), self.head("feature"))
        self.cli("rm", "feature", "--delete-branch", "--target", "main")
        self.assertFalse(feature.exists())

    def test_failed_or_dirty_verification_preserves_rebased_feature_without_merging(self):
        feature = self.new()
        self.commit(feature, "feature", "ok\n", "feature")
        before = self.head("main")
        failed = self.integrate("feature", "false", check=False)
        self.assertNotEqual(failed.returncode, 0)
        self.assertEqual(self.head("main"), before)
        self.assertTrue(feature.exists())
        dirty = self.integrate("feature", "sh", "-c", "echo dirty > generated", check=False)
        self.assertNotEqual(dirty.returncode, 0)
        self.assertEqual(self.head("main"), before)
        self.assertTrue((feature / "generated").exists())

    def test_target_advance_during_verification_does_not_merge_stale_result(self):
        feature = self.new()
        self.commit(feature, "feature", "ok\n", "feature")
        before = self.head("main")
        command = f"git -C {self.root} commit --allow-empty -m advance"
        result = self.integrate("feature", "sh", "-c", command, check=False)
        self.assertNotEqual(result.returncode, 0)
        self.assertNotEqual(self.head("main"), before)
        self.assertNotEqual(self.head("main"), self.head("feature"))
        self.assertTrue(feature.exists())

    def test_remote_target_divergence_and_published_feature_are_refused(self):
        feature = self.new()
        self.commit(feature, "feature", "ok\n", "feature")
        self.git("push", "origin", "feature")
        published = self.integrate("feature", "true", check=False)
        self.assertNotEqual(published.returncode, 0)
        self.assertIn("published/shared", published.stderr)
        self.assertTrue(feature.exists())
        # Recreate a local feature with no remote ref; make local main diverge
        # from origin/main and prove integration refuses before rebase/merge.
        self.git("worktree", "remove", "--force", feature)
        self.git("branch", "-D", "feature")
        feature = self.new("other")
        self.commit(self.root, "local", "local\n", "local")
        clone = Path(self.temp.name) / "clone"
        self.git("clone", "--branch", "main", self.remote, clone, cwd=self.temp.name)
        self.git("config", "user.email", "test@example.invalid", cwd=clone)
        self.git("config", "user.name", "Test User", cwd=clone)
        self.commit(clone, "remote", "remote\n", "remote")
        self.git("push", "origin", "main", cwd=clone)
        divergence = self.integrate("other", "true", check=False)
        self.assertNotEqual(divergence.returncode, 0)
        self.assertIn("diverged", divergence.stderr)
        self.assertTrue(feature.exists())


if __name__ == "__main__":
    unittest.main()
