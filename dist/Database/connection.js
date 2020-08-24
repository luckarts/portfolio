"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv.default.config();

var connection = new _sequelize.default(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  "host": process.env.DATABASE_HOST,
  "dialect": "mysql",
  "define": {
    "timestamps": false
  }
});
var _default = connection;
exports.default = _default;