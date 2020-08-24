"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _resize = _interopRequireDefault(require("../helpers/resize"));

var _routes = _interopRequireDefault(require("./User/routes"));

var _routes2 = _interopRequireDefault(require("./Gallery/routes"));

var _routes3 = _interopRequireDefault(require("./Experiences/routes"));

var _routes4 = _interopRequireDefault(require("./Projects/routes"));

var app = (0, _express.default)();
app.use('/api/users', _routes.default);
app.use('/api/gallery', _routes2.default);
app.use('/api/experiences', _routes3.default);
app.use('/api/projects', _routes4.default);
app.use('/img/:img', _resize.default);
var _default = app;
exports.default = _default;