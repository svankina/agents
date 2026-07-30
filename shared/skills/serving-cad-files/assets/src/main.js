// CAD viewer app — bundled with three.js (MIT) into ../viewer/app.js by build.sh.
// Loads ./manifest.json ({title, models:[{file,label,bytes}]}) from the staged
// dir, renders the selected model with orbit/pan/zoom controls, a mm grid,
// CAD-axis triad, dimension readout, and standard views.
//
// Conventions: units are mm; STL/OBJ are treated as Z-up (CAD), glTF as Y-up.

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const MAX_EDGE_TRIS = 300000; // skip edge overlay beyond this (perf)

const $ = (id) => document.getElementById(id);
const canvas = $('view');

// --- renderer / scene -------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.screenSpacePanning = true;

scene.add(new THREE.HemisphereLight(0xffffff, 0x39424d, 1.1));
const key = new THREE.DirectionalLight(0xffffff, 1.6);
key.position.set(1, 2, 1.5);
scene.add(key);
const fill = new THREE.DirectionalLight(0xdfe8ff, 0.5);
fill.position.set(-1.5, 0.6, -1);
scene.add(fill);

// --- state ------------------------------------------------------------------
let manifest = null;
let modelRoot = null;   // current model wrapper (already centered on grid)
let helpers = null;     // grid + axes group
let edgeLines = [];     // LineSegments overlays
let meshes = [];        // meshes of current model
let bounds = null;      // {size, radius, height}
let show = { grid: true, wire: false, edges: true };

// --- helpers ----------------------------------------------------------------
function fmt(n) {
  return n >= 100 ? n.toFixed(0) : n >= 10 ? n.toFixed(1) : n.toFixed(2);
}

function disposeObject(root) {
  root.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m) => {
        Object.values(m).forEach((v) => v && v.isTexture && v.dispose());
        m.dispose();
      });
    }
  });
}

function clearModel() {
  if (modelRoot) { scene.remove(modelRoot); disposeObject(modelRoot); modelRoot = null; }
  if (helpers) { scene.remove(helpers); disposeObject(helpers); helpers = null; }
  edgeLines = [];
  meshes = [];
}

function niceStep(footprint) {
  const steps = [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000];
  for (const s of steps) if (footprint / s <= 12) return s;
  return 2000;
}

function buildHelpers() {
  helpers = new THREE.Group();
  const { size } = bounds;
  const footprint = Math.max(size.x, size.z, 1e-6);
  const step = niceStep(footprint);
  const gridSize = step * Math.max(2, Math.ceil((footprint * 1.6) / step / 2) * 2);
  const grid = new THREE.GridHelper(gridSize, Math.round(gridSize / step), 0x55677a, 0x2c3947);
  grid.material.transparent = true;
  grid.material.opacity = 0.6;
  helpers.add(grid);

  // CAD axis triad (Z-up frame): X red, Y green, Z blue.
  const L = Math.max(size.x, size.y, size.z) * 0.55;
  const triad = new THREE.Group();
  triad.rotation.x = -Math.PI / 2;
  const axis = (dir, color) => {
    const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), dir.multiplyScalar(L)]);
    triad.add(new THREE.Line(g, new THREE.LineBasicMaterial({ color })));
  };
  axis(new THREE.Vector3(1, 0, 0), 0xe5484d);
  axis(new THREE.Vector3(0, 1, 0), 0x46a758);
  axis(new THREE.Vector3(0, 0, 1), 0x3b82f6);
  helpers.add(triad);

  const stepEl = $('gridstep');
  if (stepEl) stepEl.textContent = `grid ${step} mm`;
  helpers.visible = show.grid;
  scene.add(helpers);
}

function collectMeshes(root) {
  const out = [];
  root.traverse((o) => { if (o.isMesh && o.geometry) out.push(o); });
  return out;
}

function triangleCount() {
  let tris = 0;
  for (const m of meshes) {
    const g = m.geometry;
    tris += (g.index ? g.index.count : g.attributes.position.count) / 3;
  }
  return Math.round(tris);
}

function buildEdges() {
  if (triangleCount() > MAX_EDGE_TRIS) { $('btn-edges').classList.add('disabled'); return; }
  for (const m of meshes) {
    const e = new THREE.LineSegments(
      new THREE.EdgesGeometry(m.geometry, 30),
      new THREE.LineBasicMaterial({ color: 0x121a22, transparent: true, opacity: 0.5 }),
    );
    e.visible = show.edges;
    m.add(e);
    edgeLines.push(e);
  }
}

// --- camera -----------------------------------------------------------------
function setView(azDeg, elDeg, animateFrom) {
  const az = (azDeg * Math.PI) / 180;
  const el = (elDeg * Math.PI) / 180;
  const { radius, height } = bounds;
  const fov = (camera.fov * Math.PI) / 180;
  const halfFov = Math.min(fov / 2, Math.atan(Math.tan(fov / 2) * camera.aspect));
  const dist = (radius / Math.sin(halfFov)) * 1.15;
  const target = new THREE.Vector3(0, height / 2, 0);
  camera.position.set(
    target.x + dist * Math.sin(az) * Math.cos(el),
    target.y + dist * Math.sin(el),
    target.z + dist * Math.cos(az) * Math.cos(el),
  );
  camera.near = Math.max(dist / 1000, 0.001);
  camera.far = dist * 100;
  camera.updateProjectionMatrix();
  controls.target.copy(target);
  controls.update();
}

const fit = () => setView(45, 30);

// --- loading ----------------------------------------------------------------
async function fetchProgress(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  const total = +res.headers.get('content-length') || 0;
  if (!res.body || !total) return await res.arrayBuffer();
  const reader = res.body.getReader();
  const buf = new Uint8Array(total);
  let got = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buf.set(value, got);
    got += value.length;
    setStatus(`loading… ${Math.round((got / total) * 100)}%`);
  }
  return buf.buffer;
}

const solidMaterial = () => new THREE.MeshStandardMaterial({
  color: 0x9db4c8, metalness: 0.15, roughness: 0.55, flatShading: true,
});

async function parseModel(file, data) {
  const ext = file.split('.').pop().toLowerCase();
  if (ext === 'stl') {
    const geom = new STLLoader().parse(data);
    return { object: new THREE.Mesh(geom, solidMaterial()), zUp: true };
  }
  if (ext === 'obj') {
    const group = new OBJLoader().parse(new TextDecoder().decode(data));
    group.traverse((o) => { if (o.isMesh) o.material = solidMaterial(); });
    return { object: group, zUp: true };
  }
  if (ext === 'glb' || ext === 'gltf') {
    const gltf = await new GLTFLoader().parseAsync(data, './');
    return { object: gltf.scene, zUp: false };
  }
  throw new Error(`unsupported format: .${ext}`);
}

async function loadModel(entry) {
  setStatus('loading…');
  clearModel();
  try {
    const data = await fetchProgress(`./${entry.file}`);
    const { object, zUp } = await parseModel(entry.file, data);

    modelRoot = new THREE.Group();
    if (zUp) {
      const frame = new THREE.Group();
      frame.rotation.x = -Math.PI / 2;
      frame.add(object);
      modelRoot.add(frame);
    } else {
      modelRoot.add(object);
    }
    scene.add(modelRoot);

    // Center on the grid: XZ-centered, resting on y=0.
    const box = new THREE.Box3().setFromObject(modelRoot);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    modelRoot.position.set(-center.x, -box.min.y, -center.z);
    bounds = { size, radius: Math.max(size.length() / 2, 1e-6), height: size.y };

    meshes = collectMeshes(modelRoot);
    applyWireframe();
    buildEdges();
    buildHelpers();
    fit();

    // Dims in CAD coordinates (Z up): world x -> X, world z -> Y, world y -> Z.
    $('dims').textContent =
      `X ${fmt(size.x)} × Y ${fmt(size.z)} × Z ${fmt(size.y)} mm`;
    $('meta').textContent =
      `${triangleCount().toLocaleString()} tris · ${entry.file}` +
      (entry.bytes ? ` · ${(entry.bytes / 1048576).toFixed(1)} MB` : '');
    setStatus('');
  } catch (err) {
    setStatus(`failed to load ${entry.file}: ${err.message}`, true);
  }
}

// --- UI ---------------------------------------------------------------------
function setStatus(text, isError = false) {
  const el = $('status');
  el.textContent = text;
  el.className = isError ? 'error' : '';
  el.style.display = text ? 'block' : 'none';
}

function applyWireframe() {
  for (const m of meshes) {
    const mats = Array.isArray(m.material) ? m.material : [m.material];
    mats.forEach((mat) => { if ('wireframe' in mat) mat.wireframe = show.wire; });
  }
}

function bindToggle(id, keyName, apply) {
  const btn = $(id);
  btn.classList.toggle('on', show[keyName]);
  btn.addEventListener('click', () => {
    show[keyName] = !show[keyName];
    btn.classList.toggle('on', show[keyName]);
    apply();
  });
}

function initUI() {
  $('title').textContent = manifest.title;
  document.title = `${manifest.title} — CAD viewer`;

  const sel = $('model');
  if (manifest.models.length > 1) {
    manifest.models.forEach((m, i) => sel.add(new Option(m.label, i)));
    sel.addEventListener('change', () => loadModel(manifest.models[+sel.value]));
    sel.style.display = 'block';
  }

  $('btn-fit').addEventListener('click', fit);
  $('btn-iso').addEventListener('click', () => setView(45, 30));
  $('btn-top').addEventListener('click', () => setView(0, 88.5));
  $('btn-front').addEventListener('click', () => setView(0, 0));
  $('btn-right').addEventListener('click', () => setView(90, 0));
  bindToggle('btn-grid', 'grid', () => { if (helpers) helpers.visible = show.grid; });
  bindToggle('btn-wire', 'wire', applyWireframe);
  bindToggle('btn-edges', 'edges', () => edgeLines.forEach((e) => { e.visible = show.edges; }));
  canvas.addEventListener('dblclick', fit);
}

function resize() {
  const w = canvas.clientWidth || window.innerWidth;
  const h = canvas.clientHeight || window.innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}

// --- boot -------------------------------------------------------------------
async function boot() {
  try {
    const res = await fetch('./manifest.json');
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    manifest = await res.json();
  } catch (err) {
    setStatus(`failed to load manifest.json: ${err.message}`, true);
    return;
  }
  initUI();
  await loadModel(manifest.models[0]);
}

window.addEventListener('resize', resize);
resize();
renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); });
boot();

// Small API for automated checks (agents drive this from a browser tool).
window.cadviewer = { setView, fit, scene, camera, controls, get bounds() { return bounds; } };
