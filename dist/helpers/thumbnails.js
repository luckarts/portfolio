"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _fs = _interopRequireDefault(require("fs"));

var _sharp = _interopRequireDefault(require("sharp"));

var _path = _interopRequireDefault(require("path"));

var ABSPATH = _path.default.dirname(process.mainModule.filename);

module.exports = function resize(path, format, width, height) {
  return new Promise(function (resolve, reject) {
    var readStream = _fs.default.createReadStream(path);

    var transform = (0, _sharp.default)();

    if (format) {
      transform = transform.toFormat(format);
    }

    if (width || height) {
      transform = transform.resize(width, height);
    }

    return resolve(readStream.pipe(transform));
  });
};