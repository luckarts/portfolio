"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncHandler = void 0;

/* Check Errors aynsc */
var asyncHandler = function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next))["catch"](next);
  };
};

exports.asyncHandler = asyncHandler;