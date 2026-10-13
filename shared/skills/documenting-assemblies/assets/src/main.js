// Entry for the assembly-docs bundle: <body data-mode="player|render">.
import { startPlayer } from './player.js';
import { startRenderer } from './render.js';

if (document.body.dataset.mode === 'render') startRenderer();
else startPlayer();
