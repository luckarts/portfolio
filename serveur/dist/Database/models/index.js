"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _connection = _interopRequireDefault(require("../connection"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var basename = _path["default"].basename(__filename);

var db = {};

_fs["default"].readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = _connection["default"]["import"](_path["default"].join(__dirname, file));

  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.connection = _connection["default"];
db.connection = _connection["default"];
module.exports = db;