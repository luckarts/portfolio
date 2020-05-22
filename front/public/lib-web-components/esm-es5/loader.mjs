import { a as patchEsm, b as bootstrapLazy } from './index-af692873.js';
var defineCustomElements = function (win, options) { return patchEsm().then(function () {
    return bootstrapLazy([["wc-button", [[1, "wc-button", { "disabled": [516], "href": [513], "target": [513], "type": [1], "color": [1], "variante": [1], "shape": [1], "size": [1], "font": [1] }]]], ["wc-lazyload", [[1, "wc-lazyload", { "src": [1], "dataSrc": [1, "data-src"] }]]]], options);
}); };
export { defineCustomElements };
