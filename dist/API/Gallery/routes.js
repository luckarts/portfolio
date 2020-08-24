"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _asyncHandler = require("../../helpers/asyncHandler");

var _controllers = require("./controllers");

var _upload = require("../../helpers/multer/upload");

var _thumbnails = _interopRequireDefault(require("../../helpers/thumbnails"));

var router = _express.default.Router();

router.get('/', function (req, res) {
  res.json({
    message: 'welcome on Project api'
  });
});
router.get('/get/gallery', (0, _asyncHandler.asyncHandler)(_controllers.get_Gallery));
router.post('/post/gallery', _upload.upload, (0, _asyncHandler.asyncHandler)(_controllers.create_Gallery));
var _default = router;
exports.default = _default;