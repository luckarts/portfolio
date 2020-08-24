"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _server = require("./server.js");

var _http = _interopRequireDefault(require("http"));

var _dotenv = _interopRequireDefault(require("dotenv"));

// The reason behind this is that it won’t listen to the port after testing.
_dotenv.default.config();

var port = process.env.PORT;

var server = _http.default.createServer(_server.app);

server.listen(port, function () {
  console.log("Server started on port ".concat(process.env.PORT || 8000));
});