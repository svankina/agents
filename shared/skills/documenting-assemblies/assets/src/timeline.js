// Pure timeline evaluation shared by the player and the manual renderer.
// The timeline comes from `assembly-docs` (timeline.json): every instance is
// introduced exactly once, either placed or moved along `path` (CAD mm offsets
// from its installed pose, ending at [0, 0, 0]). Poses are absolute functions
// of time, so scrubbing and reversal never accumulate drift.

const ZERO = Object.freeze([0, 0, 0]);
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const ease = (x) => x * x * (3 - 2 * x);

function segmentLengths(path) {
  const out = [];
  for (let i = 1; i < path.length; i++) {
    const [a, b] = [path[i - 1], path[i]];
    out.push(Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]));
  }
  return out;
}

// Point at arc-length fraction u of a polyline.
export function pathPoint(move, u) {
  const { path, lengths, total } = move;
  if (!total) return path[path.length - 1];
  let d = u * total;
  for (let i = 0; i < lengths.length; i++) {
    if (d <= lengths[i] || i === lengths.length - 1) {
      const f = lengths[i] ? Math.min(1, d / lengths[i]) : 1;
      const [a, b] = [path[i], path[i + 1]];
      return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
    }
    d -= lengths[i];
  }
  return path[path.length - 1];
}

export function prepare(tl) {
  tl.intro = new Map();
  tl.steps.forEach((step, si) => {
    if (step.place) for (const name of step.place.parts) tl.intro.set(name, { si, t0: step.place.t0, move: null });
    for (const move of step.moves) {
      move.lengths = segmentLengths(move.path);
      move.total = move.lengths.reduce((a, b) => a + b, 0);
      for (const name of move.parts) tl.intro.set(name, { si, t0: move.t0, move });
    }
  });
  return tl;
}

// Map name -> CAD offset for every instance visible at time t.
export function poseAt(tl, t) {
  const offsets = new Map();
  for (const [name, it] of tl.intro) {
    if (t < it.t0) continue;
    const m = it.move;
    if (!m) { offsets.set(name, ZERO); continue; }
    const u = m.t1 > m.tm ? clamp01((t - m.tm) / (m.t1 - m.tm)) : 1;
    offsets.set(name, pathPoint(m, ease(u)));
  }
  return offsets;
}

export function stepAt(tl, t) {
  let index = 0;
  tl.steps.forEach((s, i) => { if (t >= s.t0) index = i; });
  return index;
}

// Moves in progress (or waiting at their start pose) at time t.
export function activeMoves(tl, t) {
  const step = tl.steps[stepAt(tl, t)];
  return step.moves.filter((m) => t >= m.t0 && t < m.t1);
}

// Manual state for a step: earlier parts installed, this step's parts at their
// start poses (placed parts in place).
export function explodedStep(tl, si) {
  const offsets = new Map();
  for (const [name, it] of tl.intro) {
    if (it.si < si) offsets.set(name, ZERO);
    else if (it.si === si) offsets.set(name, it.move ? it.move.path[0] : ZERO);
  }
  return offsets;
}

export function completedThrough(tl, si) {
  const offsets = new Map();
  for (const [name, it] of tl.intro) if (it.si <= si) offsets.set(name, ZERO);
  return offsets;
}
