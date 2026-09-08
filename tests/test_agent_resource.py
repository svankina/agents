"""Opt-in integration contracts; uses the real same-user systemd manager."""
import concurrent.futures
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import time
import unittest
import uuid

CLI = str(Path(__file__).resolve().parents[1] / "bin" / "agent-resource")


def alive(pid):
    try:
        return Path(f"/proc/{pid}/stat").read_text().rsplit(")", 1)[1].split()[0] not in ("Z", "X")
    except FileNotFoundError:
        return False


def eventually(predicate, timeout=15):
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        if predicate():
            return
        time.sleep(0.1)
    raise AssertionError("condition did not become true before deadline")


@unittest.skipUnless(os.environ.get("AGENT_RESOURCE_SYSTEMD_TESTS") == "1", "opt in to real systemd units")
class ResourceContracts(unittest.TestCase):
    def setUp(self):
        self.owner = "resource-test-" + uuid.uuid4().hex
        self.env = dict(os.environ, AGENT_RESOURCE_OWNER=self.owner, AGENT_RESOURCE_PID=str(os.getpid()))
        self.owners = [self.owner]

    def tearDown(self):
        for owner in self.owners:
            result = subprocess.run([CLI, "cleanup", "--owner", owner, "--json"], env=self.env,
                                    capture_output=True, text=True, timeout=60)
            self.assertEqual(result.returncode, 0, result.stdout + result.stderr)

    def call(self, *args, check=True, env=None):
        result = subprocess.run([CLI, *args], env=env or self.env, capture_output=True, text=True, timeout=60)
        if check:
            self.assertEqual(result.returncode, 0, result.stdout + result.stderr)
        return json.loads(result.stdout), result.returncode

    def acquire(self, *command, env=None):
        return self.call("acquire", "--name", "test process", "--kind", "process", "--", *command, env=env)[0]

    def test_release_reaps_detached_descendant_not_unrelated_process(self):
        unrelated = subprocess.Popen(["sleep", "90"])
        try:
            with tempfile.TemporaryDirectory() as directory:
                marker = Path(directory) / "pid"
                code = "import subprocess,time,pathlib,sys; p=subprocess.Popen(['sleep','90'],start_new_session=True); pathlib.Path(sys.argv[1]).write_text(str(p.pid)); time.sleep(90)"
                lease = self.acquire(sys.executable, "-c", code, str(marker))
                eventually(marker.exists)
                child = int(marker.read_text())
                self.call("release", lease["id"], "--owner", self.owner, "--json")
                eventually(lambda: not alive(child) and not alive(lease["pid"]))
                self.assertIsNone(unrelated.poll())
                again, _ = self.call("release", lease["id"], "--json")
                self.assertEqual(again["state"], "released")
                self.assertEqual(self.call("cleanup", "--json")[0], [])
        finally:
            unrelated.terminate()
            unrelated.wait()

    def test_owner_death_reclaims_detached_child(self):
        owner_process = subprocess.Popen(["sleep", "90"])
        profile = Path(os.environ["XDG_RUNTIME_DIR"]) / "agent-resource" / ("profile-" + uuid.uuid4().hex)
        try:
            env = dict(self.env, AGENT_RESOURCE_PID=str(owner_process.pid))
            with tempfile.TemporaryDirectory() as directory:
                marker = Path(directory) / "pid"
                code = "import subprocess,time,pathlib,sys; p=subprocess.Popen(['sleep','90'],start_new_session=True); pathlib.Path(sys.argv[1]).write_text(str(p.pid)); time.sleep(90)"
                lease, _ = self.call("acquire", "--name", "profile owner", "--kind", "browser",
                                     "--cleanup-dir", str(profile), "--", sys.executable, "-c", code,
                                     str(marker), env=env)
                (profile / "browser-state").write_text("owned data")
                eventually(marker.exists)
                child = int(marker.read_text())
                owner_process.kill()
                owner_process.wait()
                eventually(lambda: not alive(child) and not alive(lease["pid"]))
                eventually(lambda: self.call("list", "--json")[0] == [])
                self.assertFalse(profile.exists())
        finally:
            if owner_process.poll() is None:
                owner_process.kill()
            owner_process.wait()

    def test_owner_check_and_failed_start(self):
        lease = self.acquire("sleep", "90")
        _, status = self.call("release", lease["id"], "--owner", self.owner + "-wrong", "--json", check=False)
        self.assertNotEqual(status, 0)
        self.assertEqual([row["id"] for row in self.call("list", "--json")[0]], [lease["id"]])
        _, status = self.call("acquire", "--name", "missing", "--kind", "process", "--", "/nonexistent-agent-resource-test", check=False)
        self.assertNotEqual(status, 0)
        self.assertEqual([row["id"] for row in self.call("list", "--json")[0]], [lease["id"]])

    def test_profile_cleanup_preserves_external_symlink_target(self):
        profile = Path(os.environ["XDG_RUNTIME_DIR"]) / "agent-resource" / ("profile-" + uuid.uuid4().hex)
        with tempfile.TemporaryDirectory() as directory:
            external = Path(directory) / "keep"
            external.write_text("unrelated")
            lease, _ = self.call("acquire", "--name", "profile", "--kind", "browser",
                                 "--cleanup-dir", str(profile), "--", "sleep", "90")
            (profile / "external").symlink_to(directory, target_is_directory=True)
            self.call("release", lease["id"], "--json")
            self.assertFalse(profile.exists())
            self.assertEqual(external.read_text(), "unrelated")
            _, status = self.call("acquire", "--name", "unsafe", "--kind", "browser",
                                  "--cleanup-dir", directory, "--", "sleep", "90", check=False)
            self.assertNotEqual(status, 0)
            self.assertEqual(external.read_text(), "unrelated")

    def test_existing_profile_is_not_adopted(self):
        root = Path(os.environ["XDG_RUNTIME_DIR"]) / "agent-resource"
        # Establish the private root through the public CLI.
        self.call("list", "--json")
        with tempfile.TemporaryDirectory(prefix="profile-", dir=root) as directory:
            # Use the valid name shape to exercise existing-path rejection.
            profile = root / ("profile-" + uuid.uuid4().hex)
            profile.symlink_to(directory, target_is_directory=True)
            try:
                _, status = self.call("acquire", "--name", "existing", "--kind", "browser",
                                      "--cleanup-dir", str(profile), "--", "sleep", "90", check=False)
                self.assertNotEqual(status, 0)
                self.assertTrue(profile.is_symlink())
                self.assertTrue(Path(directory).is_dir())
            finally:
                profile.unlink()

    def test_concurrent_owner_quota(self):
        def launch(_):
            return self.call("acquire", "--name", "quota", "--kind", "process", "--", "sleep", "90", check=False)
        with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
            results = list(pool.map(launch, range(12)))
        self.assertEqual(sum(status == 0 for _, status in results), 8)
        self.assertEqual(len(self.call("list", "--json")[0]), 8)
        self.assertTrue(all("quota" in row.get("error", "") for row, status in results if status))

    def test_exec_stdio_exit_status_and_cleanup(self):
        result = subprocess.run(
            [CLI, "exec", "--name", "stdio", "--kind", "browser", "--", sys.executable,
             "-c", "import sys; print(sys.stdin.read().upper(),end=''); print('endpoint',file=sys.stderr); sys.exit(7)"],
            input="hello\n", capture_output=True, text=True, env=self.env, timeout=60)
        self.assertEqual(result.stdout, "HELLO\n")
        self.assertIn("endpoint", result.stderr)
        self.assertEqual(result.returncode, 7)
        self.assertEqual(self.call("list", "--json")[0], [])


if __name__ == "__main__":
    unittest.main()
