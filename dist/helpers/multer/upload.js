"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileFilter = exports.upload = exports.storage = void 0;

var _multer = _interopRequireDefault(require("multer"));

var storage = _multer.default.diskStorage({
  destination: function destination(req, file, next) {
    next(null, path.join("".concat(process.cwd(), "/public/img")));
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});

exports.storage = storage;

var fileImgFilter = function fileImgFilter(req, file, cb) {
  if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
};

var upload = (0, _multer.default)({
  storage: storage,
  limits: {
    file: 1024 * 1024 * 5
  },
  fileFilter: fileImgFilter
}).single('img');
exports.upload = upload;

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype == 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .pdf format allowed!'));
  }
};

exports.fileFilter = fileFilter;