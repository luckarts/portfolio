"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidUserExist = ValidUserExist;
exports.CreateNewUser = CreateNewUser;
exports.userSearch = userSearch;
exports.generateJWT = generateJWT;
exports.isSamePassword = isSamePassword;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User_DB = require("./User_DB");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

process.env.JWT_SECRET;
/*
Function checks if Email user already exists in database.
Returns user if this user already exist.
 */

function ValidUserExist(_x, _x2) {
  return _ValidUserExist.apply(this, arguments);
}

function _ValidUserExist() {
  _ValidUserExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, email) {
    var taken_username, taken_email;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (username) {
              _context.next = 2;
              break;
            }

            throw new Error("username is empty");

          case 2:
            if (email) {
              _context.next = 4;
              break;
            }

            throw new Error("email is empty");

          case 4:
            taken_username = null;
            taken_email = null;

            if (!username) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return (0, _User_DB.UsernameExist)(username);

          case 9:
            taken_username = _context.sent;

          case 10:
            if (!email) {
              _context.next = 14;
              break;
            }

            _context.next = 13;
            return (0, _User_DB.EmailExist)(email);

          case 13:
            taken_email = _context.sent;

          case 14:
            if (!taken_username) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", taken_username);

          case 16:
            if (!taken_email) {
              _context.next = 18;
              break;
            }

            return _context.abrupt("return", taken_email);

          case 18:
            return _context.abrupt("return", null);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ValidUserExist.apply(this, arguments);
}

function CreateNewUser(_x3) {
  return _CreateNewUser.apply(this, arguments);
}

function _CreateNewUser() {
  _CreateNewUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(args) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _User_DB.CreateUser)(args);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _CreateNewUser.apply(this, arguments);
}

function userSearch(_x4) {
  return _userSearch.apply(this, arguments);
}
/*
Function create token .
 */


function _userSearch() {
  _userSearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(params) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _User_DB.findUserIdOrFirstname)(params);

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _userSearch.apply(this, arguments);
}

function generateJWT(user) {
  return _jsonwebtoken["default"].sign({
    user: user
  }, process.env.JWT_SECRET);
}

function isSamePassword(requestPassword, password) {
  return _bcrypt["default"].compareSync(requestPassword, password);
}