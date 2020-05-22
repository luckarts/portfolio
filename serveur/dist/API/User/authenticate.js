"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User_DB = require("../../Services/User/User_DB");

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var _default = function _default(req, res, next) {
  var header = req.headers.authorization;
  var token;
  if (header) token = header.split(' ')[1];

  if (token) {
    _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        res.status(401).json({
          errors: {
            global: err
          }
        });
      } else {
        (0, _User_DB.EmailExist)(decoded.user.email).then(function (user) {
          req.user = {
            id: user.dataValues.id,
            imgProfile: user.dataValues.imgProfile,
            email: user.dataValues.email
          };
          next();
        });
      }
    });
  } else {
    res.status(401).json({
      errors: {
        global: 'No token'
      }
    });
  }
};

exports["default"] = _default;