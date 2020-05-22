"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = signup;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _validate = _interopRequireDefault(require("validate.js"));

var _User_Services = require("../../../Services/User/User_Services");

function signup(_x, _x2) {
  return _signup.apply(this, arguments);
}

function _signup() {
  _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var contraints, _req$body, username, password, email, PermissionId, validation, found_User, token, new_User;

    return _regenerator["default"].wrap(function _callee$(_context) {
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
              },
              "password": {
                "presence": {
                  "message": "Ce mot de passe est trop court"
                }
              },
              "email": {
                "presence": {
                  "message": "Veuillez saisir une adresse email"
                },
                "email": true
              }
            };
            /*
            Check data send by User .
            Return message Error if object is empty or specification are not valid
            */

            _req$body = req.body, username = _req$body.username, password = _req$body.password, email = _req$body.email, PermissionId = _req$body.PermissionId;
            validation = (0, _validate["default"])({
              username: username,
              password: password,
              email: email
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
            return (0, _User_Services.ValidUserExist)(username, email);

          case 7:
            found_User = _context.sent;

            if (!found_User) {
              _context.next = 13;
              break;
            }

            if (!(email === found_User.email)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              "error": {
                "email": ["".concat(email, "  already taken")]
              }
            }));

          case 11:
            if (!(username === found_User.username)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              "error": {
                "username": ["".concat(username, " already taken")]
              }
            }));

          case 13:
            /*
            If user did'nt exist create user
            Return user with hash password and jwt
            */
            token = (0, _User_Services.generateJWT)(req.body);
            _context.next = 16;
            return (0, _User_Services.CreateNewUser)({
              username: username,
              password: password,
              email: email,
              PermissionId: PermissionId
            });

          case 16:
            new_User = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              "message": "User has been signed up !",
              new_User: new_User,
              token: token
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _signup.apply(this, arguments);
}