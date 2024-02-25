import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BdAzy33p.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Tb012mrE.mjs');
const _page1 = () => import('./chunks/index_xBA7JNFP.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.4.4_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0d12c419-f29c-46f5-95ea-da2c9a428f0a"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
