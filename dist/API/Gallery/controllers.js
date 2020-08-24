"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_Gallery = get_Gallery;
exports.create_Gallery = create_Gallery;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _gallery_Db = require("../../Services/Gallery/gallery_Db");

function get_Gallery(_x, _x2) {
  return _get_Gallery.apply(this, arguments);
}

function _get_Gallery() {
  _get_Gallery = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var gallery;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _gallery_Db.getGallery)();

          case 2:
            gallery = _context.sent;

            if (!gallery) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              gallery: gallery
            }));

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get_Gallery.apply(this, arguments);
}

function create_Gallery(_x3, _x4) {
  return _create_Gallery.apply(this, arguments);
}

function _create_Gallery() {
  _create_Gallery = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var img, gallery;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            img = req.file;
            console.log(req.file);
            if (req.file) img = req.file.filename;
            _context2.next = 5;
            return (0, _gallery_Db.createGallery)({
              img: img
            });

          case 5:
            gallery = _context2.sent;

            if (!gallery) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              gallery: gallery
            }));

          case 10:
            return _context2.abrupt("return", null);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _create_Gallery.apply(this, arguments);
}