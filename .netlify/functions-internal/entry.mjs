import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_52c36578.mjs';

const _page0  = () => import('./chunks/generic_9397d4dd.mjs');
const _page1  = () => import('./chunks/index_a43a6ad4.mjs');
const _page2  = () => import('./chunks/galeria_8507cb82.mjs');
const _page3  = () => import('./chunks/PostsLayout_c70f46cb.mjs');
const _page4  = () => import('./chunks/post_1_d771142d.mjs');
const _page5  = () => import('./chunks/post_2_3d5e60cb.mjs');
const _page6  = () => import('./chunks/post_3_c2a6a2b7.mjs');
const _page7  = () => import('./chunks/post_4_9d73ec24.mjs');
const _page8  = () => import('./chunks/post_5_da28a2b8.mjs');
const _page9  = () => import('./chunks/post_6_d619e24f.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/galeria.astro", _page2],["src/pages/posts/PostsLayout.astro", _page3],["src/pages/posts/post_1.md", _page4],["src/pages/posts/post_2.md", _page5],["src/pages/posts/post_3.md", _page6],["src/pages/posts/post_4.md", _page7],["src/pages/posts/post_5.md", _page8],["src/pages/posts/post_6.md", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
