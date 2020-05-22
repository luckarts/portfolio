"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = signIn;

var _validate = _interopRequireDefault(require("validate.js"));

var _User_DB = require("../../../Services/User/User_DB");

var _User_Services = require("../../../Services/User/User_Services");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function signIn(req, res, next) {
  var contraints = {
    username: {
      presence: {
        message: 'Veuillez saisir votre pseudo'
      }
    },
    password: {
      presence: {
        message: 'Ce mot de passe est trop court'
      }
    }
  };
  /* if (req.isAuthenticated()) {
  	localStorage.clear();
  } */

  var _req$body = req.body,
      password = _req$body.password,
      username = _req$body.username;
  var validation = (0, _validate["default"])({
    password: password,
    username: username
  }, contraints);
  if (validation) return res.status(400).json({
    error: validation
  });
  next();
}