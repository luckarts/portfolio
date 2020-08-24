"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtDecode = jwtDecode;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv.default.config();

function jwtDecode(req, res, next) {
  console.log(req.headers, 'headers');

  if (req.headers && req.headers.authorization) {
    var token = req.headers.authorization.split(' ')[1];

    var decoded = _jsonwebtoken.default.decode(token, process.env.JWT_SECRET);

    req.user = decoded._id;
    next();
  } else {
    return res.status(400).json({
      message: "you don't have acces"
    });
    req.user = null;
    next();
  }
}