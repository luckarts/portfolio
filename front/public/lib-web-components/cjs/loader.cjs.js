'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-dd2c5092.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["wc-button.cjs",[[1,"wc-button",{"disabled":[516],"href":[513],"target":[513],"type":[1],"color":[1],"variante":[1],"shape":[1],"size":[1],"font":[1]}]]],["wc-lazyload.cjs",[[1,"wc-lazyload",{"src":[1],"dataSrc":[1,"data-src"]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
