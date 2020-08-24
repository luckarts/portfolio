"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = deleteUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validate = _interopRequireDefault(require("validate.js"));

var _User_DB = require("../../../Services/User/User_DB");

function deleteUser(_x, _x2) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var contraints, username, validation;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            contraints = {
              "username": {
                "presence": {
                  "message": "Veuillez saisir votre pseudo"
                },
                "length": {
                  "maximum": 50
                }
              }
            };
            username = req.params.username;
            validation = (0, _validate.default)({
              username: username
            }, contraints);

            if (!validation) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              "error": validation
            }));

          case 5:
            _context.next = 7;
            return (0, _User_DB.DeleteUserID)(username);

          case 7:
            return _context.abrupt("return", res.status(200).json({
              "message": "User has been delete!"
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _deleteUser.apply(this, arguments);
}