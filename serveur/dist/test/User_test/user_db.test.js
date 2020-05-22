"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User_DB = require("../../Services/User/User_DB");

var _models = _interopRequireDefault(require("../../Database/models"));

function Createusers() {
  return _Createusers.apply(this, arguments);
}

function _Createusers() {
  _Createusers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13() {
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _models["default"].User.create({
              "username": "test",
              "password": "test",
              "email": "test@test.com",
              "PermissionId": 1
            });

          case 2:
            return _context13.abrupt("return", _context13.sent);

          case 3:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _Createusers.apply(this, arguments);
}

function DestroyUser(_x) {
  return _DestroyUser.apply(this, arguments);
}

function _DestroyUser() {
  _DestroyUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(user) {
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            user.destroy({
              "where": {},
              "force": true
            });

          case 1:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _DestroyUser.apply(this, arguments);
}

describe("User Test", function () {
  /* Username test*/
  it("should see if username already exist in DB", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var check;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _User_DB.UsernameExist)("");

          case 2:
            check = _context.sent;
            expect(check).toBe(null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it("Throw an error because no username was passed", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var check;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _User_DB.UsernameExist)("");

          case 3:
            check = _context2.sent;
            expect(check).toBe(null);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            expect(_context2.t0.message).toMatch("no username was passed on db ");

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  })));
  it("should see if user already exist and fail", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var check, test;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _User_DB.UsernameExist)("test");

          case 2:
            check = _context3.sent;
            expect((0, _typeof2["default"])(check) === "object").toBe(true);
            _context3.next = 6;
            return Createusers();

          case 6:
            test = _context3.sent;
            _context3.next = 9;
            return DestroyUser(test);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  /* Email test*/

  it("should see if email already exist in DB", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var check;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _User_DB.EmailExist)("");

          case 2:
            check = _context4.sent;
            expect(check).toBe(null);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it("Throw an error because no email was passed", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var check;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _User_DB.EmailExist)();

          case 3:
            check = _context5.sent;
            expect(check).toBe(null);
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            expect(_context5.t0.message).toMatch("no email was passed on db ");

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  })));
  it("should see if  email already exist and fail", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var check, test;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _User_DB.EmailExist)("test@test.com");

          case 2:
            check = _context6.sent;
            _context6.next = 5;
            return Createusers();

          case 5:
            test = _context6.sent;
            _context6.next = 8;
            return DestroyUser(test);

          case 8:
            expect((0, _typeof2["default"])(check) === "object").toBe(true);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  /* User test*/

  it("should see if user already exist and fail", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
    var username, password, email, PermissionId, arg, user;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            username = "test";
            password = "test";
            email = "test@test.com";
            PermissionId = 1;
            arg = {
              username: username,
              password: password,
              email: email,
              PermissionId: PermissionId
            };
            _context7.next = 7;
            return (0, _User_DB.CreateUser)(arg);

          case 7:
            user = _context7.sent;
            _context7.next = 10;
            return DestroyUser(user);

          case 10:
            expect((0, _typeof2["default"])(user) === "object").toBe(true);
            expect(user.username).toBe(username);
            expect(user.password).toBe(password);
            expect(user.email).toBe(email);
            expect(user.PermissionId).toBe(1);

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  it("should throw an error because no username was passed", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
    var password, email, PermissionId, user;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            password = "test";
            email = "test@test.com";
            PermissionId = 1;
            _context8.next = 6;
            return (0, _User_DB.CreateUser)({
              password: password,
              email: email,
              PermissionId: PermissionId
            });

          case 6:
            user = _context8.sent;
            _context8.next = 9;
            return user.destroy({
              "force": true
            });

          case 9:
            _context8.next = 14;
            break;

          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](0);
            expect(_context8.t0.message).toMatch("invalid argument username");

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 11]]);
  })));
  /* Permission id test*/

  it("should throw an error because no permission id was passed", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
    var username, password, email, PermissionId, user;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            username = "test";
            password = "test";
            email = "test@test.com";
            PermissionId = "erff";
            _context9.next = 7;
            return (0, _User_DB.CreateUser)({
              username: username,
              password: password,
              email: email,
              PermissionId: PermissionId
            });

          case 7:
            user = _context9.sent;
            _context9.next = 10;
            return DestroyUser(user);

          case 10:
            _context9.next = 15;
            break;

          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](0);
            expect(_context9.t0.message).toMatch("permission not find");

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 12]]);
  })));
  it("should create a new permission ID", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
    var username, password, email, PermissionId, user;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            username = "test";
            password = "test";
            email = "test@test.com";
            PermissionId = 1;
            _context10.next = 6;
            return (0, _User_DB.CreateUser)({
              username: username,
              password: password,
              email: email,
              PermissionId: PermissionId
            });

          case 6:
            user = _context10.sent;
            _context10.next = 9;
            return DestroyUser(user);

          case 9:
            expect((0, _typeof2["default"])(user) === "object").toBe(true);
            expect(user.username).toBe(username);
            expect(user.password).toBe(password);
            expect(user.email).toBe(email);
            expect(user.PermissionId).toBe(PermissionId);

          case 14:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  })));
  it('should return user based on their id ', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
    var test, user;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return Createusers();

          case 2:
            test = _context11.sent;
            _context11.next = 5;
            return (0, _User_DB.findUserIdOrFirstname)(test.username);

          case 5:
            user = _context11.sent;
            _context11.next = 8;
            return DestroyUser(user);

          case 8:
            expect((0, _typeof2["default"])(user) === 'object').toBe(true);

          case 9:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  })));
  it('should throw an error because no user id was passed', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12() {
    var user;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return Createusers();

          case 2:
            user = _context12.sent;
            _context12.prev = 3;
            _context12.next = 6;
            return (0, _User_DB.findUserIdOrFirstname)();

          case 6:
            _context12.next = 13;
            break;

          case 8:
            _context12.prev = 8;
            _context12.t0 = _context12["catch"](3);
            _context12.next = 12;
            return user.destroy({
              force: true
            });

          case 12:
            expect(_context12.t0.message).toMatch('invalid argument: id');

          case 13:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12, null, [[3, 8]]);
  })));
});