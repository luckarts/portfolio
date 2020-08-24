"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _thumbnails = _interopRequireDefault(require("./thumbnails"));

var _default = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var widthString, heightString, format, image, width, height, stream;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Extract the query-parameter
            widthString = 1;
            heightString = 1;
            format = req.query.format;
            image = 'public/img/' + req.params.img; // Parse to integer if possible

            if (widthString) {
              width = parseInt(widthString);
            }

            if (heightString) {
              height = parseInt(heightString);
            } // Set the content-type of the response


            res.type("image/".concat(format || 'png'));
            _context.prev = 7;
            _context.next = 10;
            return (0, _thumbnails.default)(image, format, width, height);

          case 10:
            stream = _context.sent;
            stream.pipe(res);
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](7);
            console.log('image thum generation error is: ', String(_context.t0));
            res.status(404).send();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 14]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;