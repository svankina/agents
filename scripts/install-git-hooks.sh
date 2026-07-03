#!/usr/bin/env bash
set -euo pipefail
root="$(git rev-parse --show-toplevel)"
ln -sf ../../scripts/git-hooks/pre-commit "$root/.git/hooks/pre-commit"
echo "installed pre-commit hook"
