"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _asyncHandler = require("../../helpers/asyncHandler");

var _controller = require("./controller");

var _jwtDecode = require("../../helpers/jwtDecode");

var router = _express["default"].Router();

router.get('/get/experiences', (0, _asyncHandler.asyncHandler)(_controller.getListExperiences));
router.get('/get/experiences/:company', (0, _asyncHandler.asyncHandler)(_controller.getExperiencesByName));
router.use(_jwtDecode.jwtDecode);
router.post('/post/experienceDetail', (0, _asyncHandler.asyncHandler)(_controller.create_Experiences_Details));
router.post('/post/listexperience', (0, _asyncHandler.asyncHandler)(_controller.create_List_Experiences));
router.post('/post/experience', (0, _asyncHandler.asyncHandler)(_controller.createAll_Experiences));
router.post('/post/allexperience', (0, _asyncHandler.asyncHandler)(_controller.createAll_Experiences));
router.put('/update/:id', (0, _asyncHandler.asyncHandler)(_controller.update_Experience));
var _default = router;
exports["default"] = _default;