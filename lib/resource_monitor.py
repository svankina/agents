"""Read-only, bounded-cost resource lease and Linux consumption snapshots."""
import csv
import io
import os
from pathlib import Path
import re
import shutil
import sqlite3
import subprocess
import time


METRICS = ("cpuPercent", "memoryBytes", "tasks", "readBytesPerSec", "writeBytesPerSec")


def _text(path):
    with path.open() as stream:
        text = stream.read(65537)
    if len(text) > 65536:
        raise ValueError("metric exceeds read limit")
    return text


def _number(value):
    number = int(value)
    if number < 0:
        raise ValueError("negative counter")
    return number


def _rate(current, previous, elapsed, scale=1):
    if current is None or previous is None or elapsed <= 0 or current < previous:
        return None
    return (current - previous) * scale / elapsed


class Collector:
    """Sample every few seconds; CPU uses 100% per logical CPU.

    Missing metrics remain None. Totals sum available measurements only; errors
    identify partial coverage. No broker locks, writes, or process inspection.
    """

    def __init__(self, state_dir=None, *, event_limit=40, include_history=False):
        self.state_dir = Path(state_dir) if state_dir is not None else Path(
            os.environ.get("XDG_RUNTIME_DIR", f"/run/user/{os.getuid()}")) / "agent-resource"
        self.event_limit = min(2000, max(1, event_limit))
        self.include_history = include_history
        self._registry_available = False
        self.proc_root = Path("/proc")
        self.cgroup_root = Path("/sys/fs/cgroup")
        self._base = None
        self._discover_after = 0.0
        self._last = None
        self._lease_counters = {}
        self._host_counters = None
        self._gpu_after = 0.0
        self._gpus = []
        self._gpu_error = None

    def _snapshot(self, errors):
        self._registry_available = False
        db = None
        try:
            uri = (self.state_dir / "leases.sqlite3").absolute().as_uri() + "?mode=ro"
            db = sqlite3.connect(uri, uri=True, timeout=0.1)
            db.row_factory = sqlite3.Row
            db.execute("PRAGMA query_only=ON")
            db.execute("BEGIN")
            # Released leases accumulate indefinitely; history is in events.
            leases = [dict(row) for row in db.execute(
                "SELECT * FROM leases WHERE state != 'released' ORDER BY rowid DESC LIMIT 256")]
            if len(leases) == 256:
                errors.append("Lease snapshot capped at 256 rows; totals may be partial")
            exists = db.execute("SELECT 1 FROM sqlite_master WHERE type='table' AND name='events'").fetchone()
            history = []
            if exists:
                events = [dict(row) for row in db.execute(
                    "SELECT * FROM events ORDER BY seq DESC LIMIT ?", (self.event_limit,))]
                if self.include_history:
                    history = [dict(row) for row in db.execute(
                        "SELECT id, ownerId, state FROM leases WHERE id IN "
                        "(SELECT leaseId FROM events ORDER BY seq DESC LIMIT ?)", (self.event_limit,))]
            else:
                events = []
                errors.append("No event history: broker events table is unavailable")
            self._registry_available = True
            return leases, events, history
        except sqlite3.Error as exc:
            errors.append(f"Lease registry unavailable: {exc}")
            return [], [], []
        finally:
            if db is not None:
                db.close()

    def _discover(self, now, errors):
        if self._base is not None and self._base.is_dir():
            return
        self._base = None
        if now < self._discover_after:
            errors.append("Resource cgroup unavailable; discovery retry pending")
            return
        self._discover_after = now + 10
        try:
            result = subprocess.run(
                ["systemctl", "--user", "show", "agent-resources.slice", "--property=ControlGroup", "--value"],
                stdin=subprocess.DEVNULL, capture_output=True, text=True, timeout=0.75)
            value = result.stdout.strip()
            if result.returncode or not value.startswith("/") or ".." in Path(value).parts:
                raise ValueError("slice has no ControlGroup")
            base = self.cgroup_root / value.lstrip("/")
            if not base.is_dir() or base.name != "agent-resources.slice":
                raise ValueError("resource slice is not present")
            self._base = base
        except (OSError, ValueError, subprocess.TimeoutExpired) as exc:
            errors.append(f"Resource cgroup unavailable: {exc}")

    def _lease(self, row, now, errors):
        metrics = dict.fromkeys(METRICS)
        unit = row.get("unit", "")
        old = self._lease_counters.pop(row["id"], None)
        if self._base is None:
            return metrics
        if not re.fullmatch(r"agent-resource-[0-9a-f]{32}\.service", unit):
            errors.append(f"Lease {row['id']}: invalid cgroup unit")
            return metrics
        root = self._base / unit
        try:
            inode = root.stat().st_ino
        except OSError:
            errors.append(f"Lease {row['id']}: cgroup gone or unavailable")
            return metrics
        counters = {}
        for filename, key in (("memory.current", "memoryBytes"), ("pids.current", "tasks")):
            try:
                metrics[key] = _number(_text(root / filename).strip())
            except (OSError, ValueError) as exc:
                errors.append(f"Lease {row['id']} {key} unavailable: {exc}")
        try:
            cpu = dict(line.split() for line in _text(root / "cpu.stat").splitlines())
            counters["cpu"] = _number(cpu["usage_usec"])
        except (OSError, ValueError, KeyError) as exc:
            errors.append(f"Lease {row['id']} CPU unavailable: {exc}")
        try:
            devices = {}
            for line in _text(root / "io.stat").splitlines():
                fields = line.split()
                values = dict(field.split("=", 1) for field in fields[1:])
                devices[fields[0]] = (_number(values["rbytes"]), _number(values["wbytes"]))
            counters["io"] = devices
        except (OSError, ValueError, KeyError, IndexError) as exc:
            errors.append(f"Lease {row['id']} I/O unavailable: {exc}")
        if old is not None and old[1] == inode:
            elapsed = now - old[0]
            metrics["cpuPercent"] = _rate(counters.get("cpu"), old[2].get("cpu"), elapsed, 0.0001)
            current_io, old_io = counters.get("io"), old[2].get("io")
            if current_io is not None and old_io is not None:
                # A device disappearing/resetting invalidates the interval, not
                # an apparent burst from subtracting incomparable totals.
                if old_io.keys() <= current_io.keys():
                    for index, key in enumerate(("readBytesPerSec", "writeBytesPerSec")):
                        if all(values[index] >= old_io.get(dev, (0, 0))[index]
                               for dev, values in current_io.items()):
                            metrics[key] = _rate(sum(v[index] for v in current_io.values()),
                                                 sum(v[index] for v in old_io.values()), elapsed)
        self._lease_counters[row["id"]] = (now, inode, counters)
        return metrics

    def _host(self, errors):
        host = dict.fromkeys(("cpuPercent", "memoryUsedBytes", "memoryTotalBytes", "swapUsedBytes", "swapTotalBytes", "load1"))
        previous = self._host_counters
        self._host_counters = None
        try:
            # Only the aggregate line is needed, even on many-core machines.
            with (self.proc_root / "stat").open() as stream:
                fields = stream.readline(4096).split()
            if fields[0] != "cpu" or len(fields) < 5:
                raise ValueError("missing aggregate CPU counters")
            values = [_number(value) for value in fields[1:9]]
            total, idle = sum(values), values[3] + (values[4] if len(values) > 4 else 0)
            self._host_counters = (total, idle, values)
            if previous is not None and len(previous[2]) == len(values) and all(a >= b for a, b in zip(values, previous[2])):
                delta = total - previous[0]
                if delta > 0:
                    host["cpuPercent"] = 100 * (delta - (idle - previous[1])) / delta
        except (OSError, ValueError, IndexError) as exc:
            errors.append(f"Host CPU unavailable: {exc}")
        try:
            memory = {}
            for line in _text(self.proc_root / "meminfo").splitlines():
                name, value = line.split(":", 1)
                memory[name] = _number(value.split()[0]) * 1024
            host["memoryTotalBytes"] = memory["MemTotal"]
            host["memoryUsedBytes"] = max(0, memory["MemTotal"] - memory["MemAvailable"])
            host["swapTotalBytes"] = memory["SwapTotal"]
            host["swapUsedBytes"] = max(0, memory["SwapTotal"] - memory["SwapFree"])
        except (OSError, ValueError, KeyError, IndexError) as exc:
            errors.append(f"Host memory unavailable: {exc}")
        try:
            host["load1"] = float(_text(self.proc_root / "loadavg").split()[0])
        except (OSError, ValueError, IndexError) as exc:
            errors.append(f"Host load unavailable: {exc}")
        return host

    def _gpu(self, now, errors):
        if now >= self._gpu_after:
            self._gpu_after = now + 5
            self._gpus = []
            self._gpu_error = None
            executable = shutil.which("nvidia-smi")
            if executable is None:
                self._gpu_error = "Host GPU unavailable: nvidia-smi not installed (NVIDIA only)"
            else:
                try:
                    result = subprocess.run(
                        [executable, "--query-gpu=index,name,utilization.gpu,memory.used,memory.total,temperature.gpu,power.draw", "--format=csv,noheader,nounits"],
                        stdin=subprocess.DEVNULL, capture_output=True, text=True, timeout=0.75)
                    if result.returncode:
                        raise ValueError("nvidia-smi failed")
                    for row in csv.reader(io.StringIO(result.stdout)):
                        if len(row) != 7:
                            raise ValueError("unexpected nvidia-smi columns")
                        gpu = {"index": row[0].strip(), "name": row[1].strip()}
                        for value, key, scale in zip(row[2:], ("utilizationPercent", "memoryUsedBytes", "memoryTotalBytes", "temperatureC", "powerWatts"), (1, 1048576, 1048576, 1, 1)):
                            try:
                                gpu[key] = float(value.strip()) * scale
                            except ValueError:
                                gpu[key] = None
                        self._gpus.append(gpu)
                    if not self._gpus:
                        raise ValueError("no NVIDIA GPUs reported")
                except (OSError, ValueError, subprocess.TimeoutExpired) as exc:
                    self._gpus = []
                    self._gpu_error = f"Host GPU unavailable: {exc}"
        if self._gpu_error:
            errors.append(self._gpu_error)
        return self._gpus

    def sample(self):
        now = time.monotonic()
        interval = max(0.0, now - self._last) if self._last is not None else 0.0
        self._last = now
        errors = []
        leases, events, history = self._snapshot(errors)
        if leases:
            self._discover(now, errors)
        for row in leases:
            row.update(self._lease(row, now, errors))
        live_ids = {row["id"] for row in leases}
        self._lease_counters = {key: value for key, value in self._lease_counters.items() if key in live_ids}
        totals = {}
        for key in METRICS:
            values = [row[key] for row in leases if row[key] is not None]
            totals[key] = sum(values) if values else None
            if values and len(values) != len(leases):
                errors.append(f"Partial lease total for {key}: {len(values)}/{len(leases)} measured")
        host = self._host(errors)
        host["gpus"] = self._gpu(now, errors)
        return {"sampledAt": time.time(), "interval": interval, "leases": leases,
                "events": events, "historyLeases": history, "registryAvailable": self._registry_available,
                "totals": totals, "host": host, "errors": errors}
