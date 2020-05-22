"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;
exports.getUser = getUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User_DB = require("../../../Services/User/User_DB");

function update(_x, _x2, _x3) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var cv, id, description, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cv = req.file;
            id = req.params.id;
            description = req.body.description;
            if (cv) cv = req.file.originalname;
            _context.next = 6;
            return (0, _User_DB.updatUser)(description, cv);

          case 6:
            user = _context.sent;

            if (!user) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              message: 'User has been update'
            }));

          case 9:
            return _context.abrupt("return", null);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _update.apply(this, arguments);
}

function getUser(_x4, _x5, _x6) {
  return _getUser.apply(this, arguments);
}

function _getUser() {
  _getUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _User_DB.get_User)();

          case 2:
            user = _context2.sent;

            if (!user) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              user: user
            }));

          case 5:
            return _context2.abrupt("return", null);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUser.apply(this, arguments);
}