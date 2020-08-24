"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _server = _interopRequireDefault(require("../../server"));

var _supertest = _interopRequireDefault(require("supertest"));

var _models = _interopRequireDefault(require("../../Database/models"));

var request = (0, _supertest.default)(_server.default);
describe("Testing Route User", function () {
  beforeAll(function (done) {
    _models.default.User.destroy({
      "where": {},
      "truncate": {
        "cascade": true
      }
    });

    done();
  });
  it("gets the test endpoint", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(done) {
      var response;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return request.get("/api/users");

            case 2:
              response = _context.sent;
              expect(response.status).toBe(200);
              expect(response.body.message).toMatch("welcome on User api");
              done();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  it("post signup endpoint", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(done) {
      var username, password, email;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              username = "test";
              password = "test";
              email = "test@test.com";
              request.post("/api/users/signup").send({
                username: username,
                password: password,
                email: email
              }).set("Accept", "application/json").expect("Content-Type", /json/).expect(200).end(function (err, res) {
                if (err) {
                  return done(err);
                }

                expect(res.body.message).toMatch("User has been signed up !");
                done();
              });

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  it("delete User endpoint ", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(done) {
      var response;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return request.delete("/api/users/delete/test");

            case 2:
              response = _context3.sent;
              expect(response.status).toBe(200);
              expect(response.body.message).toMatch("User has been delete!");
              done();

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
  it("post signup endpoint", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(done) {
      var password, email;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              password = "test";
              email = "test@test.com";
              request.post("/api/users/signup").send({
                password: password,
                email: email
              }).set("Accept", "application/json").expect("Content-Type", /json/).expect(500).end(function (err, res) {
                console.log(res.body.error.username[0]);
                expect(res.body.error.username[0]).toMatch("Veuillez saisir votre pseudo");
                done();
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
});