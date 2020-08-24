"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User_Services = require("../../Services/User/User_Services");

var _models = _interopRequireDefault(require("../../Database/models"));

function CreateUser() {
  return _CreateUser.apply(this, arguments);
}

function _CreateUser() {
  _CreateUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models.default.User.create({
              "username": "test",
              "password": "test",
              "email": "test@test.com",
              "PermissionId": 1
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _CreateUser.apply(this, arguments);
}

function DestroyUser(_x) {
  return _DestroyUser.apply(this, arguments);
}

function _DestroyUser() {
  _DestroyUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(user) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            user.destroy({
              "where": {},
              "force": true
            });

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _DestroyUser.apply(this, arguments);
}

describe("User Test", function () {
  it("should see if user already exist with valid email", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var user;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _User_Services.ValidUserExist)("test", "test@test.com");

          case 2:
            user = _context.sent;
            expect(user).toBe(null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it("should see if user already exist and fail", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    var test, check;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return CreateUser();

          case 2:
            test = _context2.sent;
            _context2.next = 5;
            return (0, _User_Services.ValidUserExist)("test", "test@test.com");

          case 5:
            check = _context2.sent;
            _context2.next = 8;
            return DestroyUser(test);

          case 8:
            expect((0, _typeof2.default)(check) === "object").toBe(true);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  it("should throw an error because", /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    var check, test;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _User_Services.ValidUserExist)();

          case 3:
            check = _context3.sent;
            _context3.next = 6;
            return CreateUser();

          case 6:
            test = _context3.sent;
            _context3.next = 9;
            return DestroyUser(test);

          case 9:
            expect((0, _typeof2.default)(check) === "object").toBe(true);
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            expect(_context3.t0.message).toMatch("username is empty");

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  })));
});