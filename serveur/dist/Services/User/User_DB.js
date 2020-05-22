"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsernameExist = UsernameExist;
exports.EmailExist = EmailExist;
exports.ValidePermissionId = ValidePermissionId;
exports.CreateUser = CreateUser;
exports.findUserIdOrFirstname = findUserIdOrFirstname;
exports.DeleteUserID = DeleteUserID;
exports.updatUser = updatUser;
exports.get_User = get_User;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../../Database/models"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var Op = _sequelize["default"].Op;
/*
Function checks if username already exists in database.
Returns user if username already taken.
 */

function UsernameExist(_x) {
  return _UsernameExist.apply(this, arguments);
}
/*
Function checks if Email already exists in database.
Returns user if email already taken.
 */


function _UsernameExist() {
  _UsernameExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username) {
    var user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(username === undefined || username === null)) {
              _context.next = 2;
              break;
            }

            throw new Error("no username was passed on db ");

          case 2:
            _context.next = 4;
            return _models["default"].User.findOne({
              "where": {
                username: username
              }
            });

          case 4:
            user = _context.sent;

            if (!user) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", user);

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _UsernameExist.apply(this, arguments);
}

function EmailExist(_x2) {
  return _EmailExist.apply(this, arguments);
} // Select * from email where i = 1 Limit 1
// Select * from Permission where i = 1 Limit 1


function _EmailExist() {
  _EmailExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(email) {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(email === undefined || email === null)) {
              _context2.next = 2;
              break;
            }

            throw new Error("no email was passed on db ");

          case 2:
            _context2.next = 4;
            return _models["default"].User.findOne({
              "where": {
                "email": email
              }
            });

          case 4:
            user = _context2.sent;

            if (!user) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", user);

          case 7:
            return _context2.abrupt("return", null);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _EmailExist.apply(this, arguments);
}

function ValidePermissionId(_x3) {
  return _ValidePermissionId.apply(this, arguments);
}
/*
Function checks create User in database.
Returns user .
 */


function _ValidePermissionId() {
  _ValidePermissionId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(PermissionId) {
    var permission;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            permission = _models["default"].Permission.findOne({
              "where": {
                "id": PermissionId
              }
            });

            if (!permission) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", permission);

          case 3:
            return _context3.abrupt("return", null);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _ValidePermissionId.apply(this, arguments);
}

function CreateUser(_x4) {
  return _CreateUser.apply(this, arguments);
}

function _CreateUser() {
  _CreateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(args) {
    var permission, user;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (args.username) {
              _context4.next = 2;
              break;
            }

            throw new Error("invalid argument username");

          case 2:
            if (args.email) {
              _context4.next = 4;
              break;
            }

            throw new Error("invalid argument email");

          case 4:
            if (args.password) {
              _context4.next = 6;
              break;
            }

            throw new Error("invalid argument password");

          case 6:
            if (!args.PermissionId) {
              args.PermissionId = 2;
            }

            _context4.next = 9;
            return ValidePermissionId(args.PermissionId);

          case 9:
            permission = _context4.sent;

            if (permission) {
              _context4.next = 12;
              break;
            }

            throw new Error("permission not find");

          case 12:
            _context4.next = 14;
            return _models["default"].User.create({
              "username": args.username,
              "password": args.password,
              "email": args.email,
              "PermissionId": args.PermissionId
            });

          case 14:
            user = _context4.sent;
            return _context4.abrupt("return", user);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _CreateUser.apply(this, arguments);
}

function findUserIdOrFirstname(_x5) {
  return _findUserIdOrFirstname.apply(this, arguments);
}
/*
Function delete User with username as params
 */


function _findUserIdOrFirstname() {
  _findUserIdOrFirstname = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(params) {
    var user;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (params) {
              _context5.next = 2;
              break;
            }

            throw new Error('invalid argument: id');

          case 2:
            _context5.next = 4;
            return _models["default"].User.findOne({
              where: {
                email: params
              }
            });

          case 4:
            user = _context5.sent;

            if (!user) {
              _context5.next = 7;
              break;
            }

            return _context5.abrupt("return", user.dataValues);

          case 7:
            return _context5.abrupt("return", null);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _findUserIdOrFirstname.apply(this, arguments);
}

function DeleteUserID(_x6) {
  return _DeleteUserID.apply(this, arguments);
}

function _DeleteUserID() {
  _DeleteUserID = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(username) {
    var user;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (username) {
              _context6.next = 2;
              break;
            }

            throw new Error("invalid argument: id");

          case 2:
            _context6.next = 4;
            return _models["default"].User.destroy({
              "where": {
                username: username
              }
            });

          case 4:
            user = _context6.sent;
            return _context6.abrupt("return", null);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _DeleteUserID.apply(this, arguments);
}

function updatUser(_x7, _x8) {
  return _updatUser.apply(this, arguments);
}

function _updatUser() {
  _updatUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(description, cv) {
    var user;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            user = _models["default"].User.update({
              description: description,
              cv: cv
            }, {
              "returning": true,
              "where": {
                "id": 1
              }
            });

            if (!user) {
              _context7.next = 3;
              break;
            }

            return _context7.abrupt("return", user);

          case 3:
            return _context7.abrupt("return", null);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _updatUser.apply(this, arguments);
}

function get_User() {
  return _get_User.apply(this, arguments);
}

function _get_User() {
  _get_User = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
    var user;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            user = _models["default"].User.findOne({
              attributes: ["description", "cv"]
            });

            if (!user) {
              _context8.next = 3;
              break;
            }

            return _context8.abrupt("return", user);

          case 3:
            return _context8.abrupt("return", null);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _get_User.apply(this, arguments);
}