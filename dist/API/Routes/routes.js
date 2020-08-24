"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var router = _express.default.Router();

router.get("/", function (req, res) {
  res.json({
    "Get_experiences": "/api/experiences/get/experiences",
    "Post_experiences": "/api/experiences/post/allexperience",
    "Post_projects": "/api/projects/post/projects",
    "Get_projects": "/api/projects/get/projects"
  });
});
var _default = router;
exports.default = _default;