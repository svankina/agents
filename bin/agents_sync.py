#!/usr/bin/env python3
"""agents-sync: generate per-agent global instruction files and skill symlinks
from the single source of truth in ~/src/agents.

Each target is composed as: banner + shared/AGENTS.md + <agent>/local.md,
with foreign managed blocks (<!-- name:begin --> ... <!-- name:end -->) found
in the existing target preserved at the end. See
docs/superpowers/specs/2026-07-03-agent-unification-design.md.
"""

if __name__ == "__main__":
    raise SystemExit(0)
