"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGallery = getGallery;
exports.createGallery = createGallery;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../../Database/models"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function getGallery() {
  return _getGallery.apply(this, arguments);
}

function _getGallery() {
  _getGallery = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var gallery;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            gallery = _models.default.Gallery.findAll();

            if (!gallery) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", gallery);

          case 3:
            return _context.abrupt("return", null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getGallery.apply(this, arguments);
}

function createGallery(_x) {
  return _createGallery.apply(this, arguments);
}

function _createGallery() {
  _createGallery = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(arg) {
    var gallery;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            gallery = _models.default.Gallery.create({
              image: arg.img
            });

            if (!gallery) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", gallery);

          case 3:
            return _context2.abrupt("return", null);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _createGallery.apply(this, arguments);
}