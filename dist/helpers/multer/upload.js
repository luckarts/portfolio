"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadPDF = exports.upload = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

//upload images
var storage = _multer.default.diskStorage({
  destination: function destination(req, file, next) {
    next(null, _path.default.join("".concat(process.cwd(), "/public/img")));
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});

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
}).single('img'); //upload files

exports.upload = upload;

var storagePdf = _multer.default.diskStorage({
  destination: function destination(req, file, next) {
    next(null, _path.default.join("".concat(process.cwd(), "/public/upload")));
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname);
  }
});

var fileFilter = function fileFilter(req, file, cb) {
  if (file.mimetype == 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .pdf format allowed!'));
  }
};

var uploadPDF = (0, _multer.default)({
  storage: storagePdf,
  fileFilter: fileFilter
}).single('cv');
exports.uploadPDF = uploadPDF;