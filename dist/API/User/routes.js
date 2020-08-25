"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _asyncHandler = require("../../helpers/asyncHandler");

var _signup = require("./auth_controller/signup");

var _path = _interopRequireDefault(require("path"));

var _update = require("./auth_controller/update");

var _passport = _interopRequireDefault(require("passport"));

var _authenticate = _interopRequireDefault(require("./authenticate"));

var _User_Services = require("../../Services/User/User_Services");

var _jwtDecode = require("../../helpers/jwtDecode");

var _upload = require("../../helpers/multer/upload");

var router = _express.default.Router();

router.post('/signup', (0, _asyncHandler.asyncHandler)(_signup.signup));
router.post('/signin', _passport.default.authenticate('local', {
  failWithError: true,
  failureFlash: true,
  session: false
}), function (req, res, err) {
  if (req.user.err) {
    return res.status(401).send({
      error: req.user.err
    });
  }

  var token = (0, _User_Services.generateJWT)(req.user);
  res.status(200).json({
    user: req.user,
    token: token
  });
}, function (err, req, res, next) {
  return res.status(401).send({
    error: err
  });
});
router.get('/user', (0, _asyncHandler.asyncHandler)(_update.getUser));
router.use(_jwtDecode.jwtDecode);
router.put('/update', _upload.uploadPDF, (0, _asyncHandler.asyncHandler)(_update.update));
router.get('/me', _authenticate.default, function (req, res) {
  try {
    res.json(req.user);
  } catch (e) {
    localStorage.clear();
    res.status(500).json({
      error: 'signUp failed'
    });
  }
});
var _default = router;
exports.default = _default;