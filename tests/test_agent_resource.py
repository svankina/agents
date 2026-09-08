"""Opt-in integration contracts; uses the real same-user systemd manager."""
import concurrent.futures
import json
import os
from pathlib import Path
import subprocess
import runpy
import sqlite3
import sys
import tempfile
import time
import unittest
from types import SimpleNamespace
import uuid
from unittest import mock

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


class ResourceEvents(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.broker = runpy.run_path(CLI, run_name="resource_test")
        # Functions retain the execution namespace, not runpy's returned copy.
        self.scope = self.broker["acquire"].__globals__
        self.args = SimpleNamespace(action="acquire", owner="event-owner", owner_pid=123,
                                    kind="process", name="event process", cleanup_dir=None,
                                    command=["--", "sleep", "90"])
        self.patch = mock.patch.dict(self.scope, identity=lambda pid: "start",
                                     run=lambda argv: "", ensure_watchdog=lambda root: None,
                                     stopped=lambda unit: False,
                                     properties=lambda unit: {"MainPID": "456"})
        self.patch.start()
        self.addCleanup(self.patch.stop)

    def events(self, db):
        return [dict(row) for row in db.execute("SELECT * FROM events ORDER BY seq")]

    def row(self, db, lease):
        return db.execute("SELECT * FROM leases WHERE id=?", (lease["id"],)).fetchone()

    def test_acquisition_release_order_and_identity_survive_release(self):
        with self.broker["registry"](self.root) as db:
            def startup(argv):
                if argv[0] == "systemd-run":
                    with sqlite3.connect(self.root / "leases.sqlite3") as reader:
                        self.assertEqual(reader.execute("SELECT action FROM events").fetchall(), [("requested",)])
            with mock.patch.dict(self.scope, run=startup):
                lease = self.broker["acquire"](db, self.root, self.args)
            with mock.patch.dict(self.scope, stopped=lambda unit: True):
                result = self.broker["release"](db, self.row(db, lease))
            self.assertEqual(result["state"], "released")
            events = self.events(db)
            self.assertEqual([item["action"] for item in events],
                             ["requested", "acquired", "release_requested", "released"])
            for item in events:
                self.assertEqual((item["leaseId"], item["ownerId"], item["ownerPid"], item["name"], item["kind"]),
                                 (lease["id"], "event-owner", 123, "event process", "process"))

    def test_quota_and_owner_identity_denials_preserve_existing_leases(self):
        with self.broker["registry"](self.root) as db:
            leases = [self.broker["acquire"](db, self.root, self.args) for _ in range(8)]
            with self.assertRaisesRegex(RuntimeError, "quota"):
                self.broker["acquire"](db, self.root, self.args)
            self.assertEqual([item["action"] for item in self.events(db)[-2:]], ["requested", "denied"])
            self.assertIn("quota", self.events(db)[-1]["reason"])
            self.args.owner_pid = 999
            with self.assertRaisesRegex(RuntimeError, "another process"):
                self.broker["acquire"](db, self.root, self.args)
            self.assertIn("another process", self.events(db)[-1]["reason"])
            self.assertEqual({row["id"] for row in db.execute("SELECT * FROM leases WHERE state='active'")},
                             {lease["id"] for lease in leases})

    def test_startup_failure_records_safe_reason_and_cleanup(self):
        with self.broker["registry"](self.root) as db:
            def fail_start(argv):
                if argv[0] == "systemd-run":
                    raise RuntimeError("secret-token command --password=hunter2")
                return ""
            with mock.patch.dict(self.scope, run=fail_start, stopped=lambda unit: True):
                with self.assertRaisesRegex(RuntimeError, "secret-token"):
                    self.broker["acquire"](db, self.root, self.args)
            events = self.events(db)
            self.assertEqual([item["action"] for item in events], ["requested", "failed", "reclaimed"])
            self.assertIn("starting resource unit", events[1]["reason"])
            self.assertEqual(events[-1]["reason"], "resource startup failed")
            self.assertNotIn("secret-token", json.dumps(events))
            self.assertNotIn("hunter2", json.dumps(events))
            self.assertEqual(db.execute("SELECT state FROM leases").fetchone()[0], "released")

    def test_reclamation_distinguishes_owner_death_and_natural_exit(self):
        with self.broker["registry"](self.root) as db:
            lease = self.broker["acquire"](db, self.root, self.args)
            with mock.patch.dict(self.scope, identity=lambda pid: None, stopped=lambda unit: True):
                self.broker["reclaim"](db)
            self.assertEqual(self.events(db)[-1]["action"], "reclaimed")
            self.assertIn("owner process", self.events(db)[-1]["reason"])
            self.assertEqual(self.row(db, lease)["state"], "released")
            lease = self.broker["acquire"](db, self.root, self.args)
            with mock.patch.dict(self.scope, stopped=lambda unit: True):
                self.broker["reclaim"](db)
            self.assertEqual(self.events(db)[-1]["reason"], "resource unit exited")
            self.assertEqual(self.row(db, lease)["state"], "released")

    def test_repeated_cleanup_failure_is_bounded_and_recovery_is_recorded(self):
        with self.broker["registry"](self.root) as db:
            lease = self.broker["acquire"](db, self.root, self.args)
            with mock.patch.dict(self.scope, identity=lambda pid: None,
                                 run=mock.Mock(side_effect=RuntimeError("private command"))):
                for _ in range(5):
                    self.broker["reclaim"](db)
            self.assertEqual([item["action"] for item in self.events(db)], ["requested", "acquired", "failed"])
            self.assertEqual(self.row(db, lease)["state"], "cleanup-failed")
            self.assertNotIn("private command", json.dumps(self.events(db)))
            with mock.patch.dict(self.scope, identity=lambda pid: None, stopped=lambda unit: True):
                self.broker["reclaim"](db)
            self.assertEqual(self.events(db)[-1]["action"], "reclaimed")
            self.assertEqual(self.row(db, lease)["state"], "released")

    def test_cross_owner_release_denied_without_exposing_resource_identity(self):
        with self.broker["registry"](self.root) as db:
            lease = self.broker["acquire"](db, self.root, self.args)
        with mock.patch.dict(self.scope, state_dir=lambda: self.root), mock.patch("builtins.print"):
            self.assertEqual(self.broker["main"](["release", "--owner", "intruder", lease["id"]]), 1)
        with self.broker["registry"](self.root) as db:
            self.assertEqual(self.row(db, lease)["state"], "active")
            denied = self.events(db)[-1]
            self.assertEqual((denied["action"], denied["ownerId"], denied["name"], denied["kind"]),
                             ("denied", "intruder", "", ""))

    def test_old_registry_migrates_without_invented_history_and_retains_latest_2000(self):
        with sqlite3.connect(self.root / "leases.sqlite3") as db:
            db.execute("CREATE TABLE leases (id TEXT PRIMARY KEY, ownerId TEXT NOT NULL, kind TEXT NOT NULL, name TEXT NOT NULL, state TEXT NOT NULL, unit TEXT NOT NULL, pid INTEGER, ownerPid INTEGER NOT NULL, ownerStart TEXT NOT NULL, log TEXT NOT NULL, error TEXT)")
            db.execute("INSERT INTO leases VALUES ('old', 'owner', 'process', 'old process', 'released', 'old.service', NULL, 123, 'start', 'old.log', NULL)")
        with self.broker["registry"](self.root) as db:
            self.assertEqual(self.events(db), [])
            self.assertEqual(db.execute("SELECT id, cleanupDir FROM leases").fetchone()[:], ("old", None))
            self.args.command = []
            for _ in range(1001):
                with self.assertRaisesRegex(RuntimeError, "requires"):
                    self.broker["acquire"](db, self.root, self.args)
            events = self.events(db)
            self.assertEqual([item["seq"] for item in events], list(range(3, 2003)))
            self.assertEqual([item["action"] for item in events[:2]], ["requested", "denied"])
            self.assertEqual(events[-1]["action"], "denied")


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
