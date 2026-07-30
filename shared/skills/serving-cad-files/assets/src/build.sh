#!/usr/bin/env bash
# Rebuild the committed viewer bundle (assets/viewer/app.js) from main.js.
# Requires bun. Run from anywhere; operates on this directory.
set -euo pipefail
cd "$(dirname "$(readlink -f "$0")")"
bun install --frozen-lockfile 2>/dev/null || bun install
bun build ./main.js --outfile ../viewer/app.js --minify
echo "built $(du -h ../viewer/app.js | cut -f1) -> assets/viewer/app.js"
