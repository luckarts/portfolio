"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _User_Services = require("../../Services/User/User_Services");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function (username, password, done) {
  (0, _User_Services.userSearch)(username).then(function (user, err) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, {
        err: {
          "username": 'username incorrect'
        }
      });
    }

    _bcrypt.default.compare(password, user.password).then(function (match) {
      if (match) {
        return done(null, user);
      }

      return done((null, {
        "password": 'password incorrect'
      }));
    });
  }).catch(function (err) {
    return done(err, {
      err: {
        "username": 'username incorrect'
      }
    });
  });
}));