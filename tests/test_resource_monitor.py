"""Read-only collector contracts against temporary proc/cgroup/SQLite fixtures."""
import importlib.util
from pathlib import Path
import shutil
import sqlite3
import tempfile
import unittest
from unittest.mock import patch


SPEC = importlib.util.spec_from_file_location("resource_monitor", Path(__file__).resolve().parents[1] / "lib" / "resource_monitor.py")
monitor = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(monitor)


class CollectorContracts(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.state = self.root / "state"
        self.state.mkdir()
        self.db_path = self.state / "leases.sqlite3"
        self.lease_id = "a" * 32
        self.unit = f"agent-resource-{self.lease_id}.service"
        with sqlite3.connect(self.db_path) as db:
            db.execute("CREATE TABLE leases (id TEXT, unit TEXT, state TEXT, ownerId TEXT, name TEXT)")
            db.execute("INSERT INTO leases VALUES (?, ?, 'active', 'peer', 'fixture')", (self.lease_id, self.unit))
            db.execute("CREATE TABLE events (seq INTEGER PRIMARY KEY, ts REAL, action TEXT, leaseId TEXT)")
            db.executemany("INSERT INTO events VALUES (?, ?, 'requested', ?)", [(n, n * 1.0, self.lease_id) for n in range(1, 51)])
        self.proc = self.root / "proc"
        self.proc.mkdir()
        (self.proc / "stat").write_text("cpu 100 0 50 800 50 0 0 0 20 0\ncpu0 0\n")
        (self.proc / "meminfo").write_text("MemTotal: 1000 kB\nMemAvailable: 400 kB\nSwapTotal: 200 kB\nSwapFree: 150 kB\n")
        (self.proc / "loadavg").write_text("1.25 1.0 0.5 1/200 50\n")
        self.base = self.root / "agent-resources.slice"
        self.cgroup = self.base / self.unit
        self.cgroup.mkdir(parents=True)
        self.counters(1000000, 1000, 2000)
        self.collector = monitor.Collector(self.state)
        self.collector.proc_root = self.proc
        self.collector._base = self.base
        self.clock = self.enterContext(patch.object(monitor.time, "monotonic", return_value=10.0))
        self.enterContext(patch.object(monitor.shutil, "which", return_value=None))

    def counters(self, cpu, read, write):
        (self.cgroup / "cpu.stat").write_text(f"usage_usec {cpu}\nuser_usec 1\nsystem_usec 1\n")
        (self.cgroup / "memory.current").write_text("4096\n")
        (self.cgroup / "pids.current").write_text("3\n")
        (self.cgroup / "io.stat").write_text(f"8:0 rbytes={read} wbytes={write} rios=1 wios=1\n")

    def sample(self, now):
        self.clock.return_value = now
        return self.collector.sample()

    def test_deltas_reset_and_recovery(self):
        initial = self.sample(10)
        self.assertIsNone(initial["totals"]["cpuPercent"])
        self.assertIsNone(initial["totals"]["readBytesPerSec"])
        self.assertEqual(initial["totals"]["memoryBytes"], 4096)
        self.counters(4000000, 1400, 3000)
        measured = self.sample(12)
        self.assertEqual(measured["totals"]["cpuPercent"], 150)
        self.assertEqual(measured["totals"]["readBytesPerSec"], 200)
        self.assertEqual(measured["totals"]["writeBytesPerSec"], 500)
        self.assertEqual(measured["totals"]["tasks"], 3)
        self.counters(100, 10, 20)
        reset = self.sample(14)
        for key in ("cpuPercent", "readBytesPerSec", "writeBytesPerSec"):
            self.assertIsNone(reset["totals"][key])
        self.counters(1000100, 210, 420)
        recovered = self.sample(16)
        self.assertEqual(measured["leases"][0]["cpuPercent"], 150)
        self.assertEqual(recovered["totals"]["cpuPercent"], 50)
        self.assertEqual(recovered["totals"]["readBytesPerSec"], 100)

    def test_gone_unit_does_not_retain_consumption(self):
        self.sample(10)
        shutil.rmtree(self.cgroup)
        gone = self.sample(12)
        self.assertTrue(all(value is None for value in gone["totals"].values()))
        self.assertTrue(any("cgroup gone" in error for error in gone["errors"]))
        self.cgroup.mkdir()
        self.counters(9000000, 10000, 20000)
        self.assertIsNone(self.sample(14)["totals"]["cpuPercent"])

    def test_unavailable_measurement_is_not_zero_or_stale(self):
        self.sample(10)
        (self.cgroup / "cpu.stat").unlink()
        missing = self.sample(12)
        self.assertIsNone(missing["totals"]["cpuPercent"])
        self.assertEqual(missing["totals"]["memoryBytes"], 4096)
        self.counters(3000000, 1200, 2200)
        self.assertIsNone(self.sample(14)["totals"]["cpuPercent"])

    def test_snapshot_is_read_only_and_history_bounded(self):
        before = self.db_path.read_bytes()
        snapshot = self.sample(10)
        self.assertTrue(snapshot["registryAvailable"])
        self.assertEqual([row["seq"] for row in snapshot["events"]], list(range(50, 10, -1)))
        self.assertEqual(self.db_path.read_bytes(), before)
        with sqlite3.connect(self.db_path) as db:
            db.execute("DROP TABLE events")
        old_broker = self.sample(12)
        self.assertEqual(old_broker["events"], [])
        self.assertTrue(any("No event history" in error for error in old_broker["errors"]))
        missing = self.root / "never-created"
        collector = monitor.Collector(missing)
        collector.proc_root = self.proc
        snapshot = collector.sample()
        self.assertFalse(missing.exists())
        self.assertFalse(snapshot["registryAvailable"])
        self.assertTrue(any("registry unavailable" in error for error in snapshot["errors"]))

    def test_host_parsing_excludes_guest_double_counting(self):
        initial = self.sample(10)
        self.assertIsNone(initial["host"]["cpuPercent"])
        host = initial["host"]
        self.assertEqual(host["memoryUsedBytes"], 600 * 1024)
        self.assertEqual(host["memoryTotalBytes"], 1000 * 1024)
        self.assertEqual(host["swapUsedBytes"], 50 * 1024)
        self.assertEqual(host["swapTotalBytes"], 200 * 1024)
        self.assertEqual(host["load1"], 1.25)
        (self.proc / "stat").write_text("cpu 120 0 60 860 60 0 0 0 40 0\n")
        self.assertEqual(self.sample(12)["host"]["cpuPercent"], 30)
        (self.proc / "stat").write_text("cpu 1 0 1 1 0 0 0 0 0 0\n")
        self.assertIsNone(self.sample(14)["host"]["cpuPercent"])

    def test_slice_discovery_recovers_without_polling_manager_each_sample(self):
        self.collector._base = None
        self.collector.cgroup_root = self.root
        result = monitor.subprocess.CompletedProcess([], 0, "\n")
        with patch.object(monitor.subprocess, "run", return_value=result) as run:
            self.assertIsNone(self.sample(10)["totals"]["memoryBytes"])
            result.stdout = "/agent-resources.slice\n"
            self.assertIsNone(self.sample(12)["totals"]["memoryBytes"])
            self.assertEqual(run.call_count, 1)
            self.assertEqual(self.sample(20)["totals"]["memoryBytes"], 4096)
            self.sample(22)
            self.assertEqual(run.call_count, 2)

    def test_gpu_cache_and_unsupported_fields(self):
        result = monitor.subprocess.CompletedProcess([], 0, '0, Fixture GPU, 42, 100, 200, N/A, 55.5\n')
        with patch.object(monitor.shutil, "which", return_value="nvidia-smi"), patch.object(monitor.subprocess, "run", return_value=result) as run:
            first = self.sample(10)
            self.sample(12)
            self.assertEqual(run.call_count, 1)
            gpu = first["host"]["gpus"][0]
            self.assertEqual(gpu["utilizationPercent"], 42)
            self.assertEqual(gpu["memoryUsedBytes"], 100 * 1048576)
            self.assertIsNone(gpu["temperatureC"])
            self.assertEqual(gpu["powerWatts"], 55.5)
            run.side_effect = monitor.subprocess.TimeoutExpired("nvidia-smi", 0.75)
            failed = self.sample(16)
            self.assertEqual(failed["host"]["gpus"], [])
            self.assertTrue(any("Host GPU unavailable" in error for error in failed["errors"]))


if __name__ == "__main__":
    unittest.main()
