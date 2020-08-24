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

var _jwtDecode = require("../../helpers/jwtDecode");

var router = _express.default.Router();

router.get('/get/projects', (0, _asyncHandler.asyncHandler)(_controllers.getAllProjects));
router.get('/get/projects/tags', (0, _asyncHandler.asyncHandler)(_controllers.getTechnos));
router.get('/get/projects/:tag', (0, _asyncHandler.asyncHandler)(_controllers.getProjectsByTag));
router.get('/get/project/:ProjectName', (0, _asyncHandler.asyncHandler)(_controllers.getProjectByName));
router.post('/post/project', _upload.upload, (0, _asyncHandler.asyncHandler)(_controllers.create_Project));
router.put('/update/:id', _upload.upload, (0, _asyncHandler.asyncHandler)(_controllers.update_Project));
var _default = router;
exports.default = _default;