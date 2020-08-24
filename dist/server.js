"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("./Database/models"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _resize = _interopRequireDefault(require("./helpers/resize"));

var _routes = _interopRequireDefault(require("./API/User/routes"));

var _routes2 = _interopRequireDefault(require("./API/Gallery/routes"));

var _routes3 = _interopRequireDefault(require("./API/Experiences/routes"));

var _routes4 = _interopRequireDefault(require("./API/Routes/routes"));

var _routes5 = _interopRequireDefault(require("./API/Projects/routes"));

var _path = _interopRequireDefault(require("path"));

var _passport = _interopRequireDefault(require("passport"));

require("./API/User/passport");

_dotenv.default.config();

var app = (0, _express.default)(); // Log all requests to file, but errors to console

app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  limit: '50mb',
  extended: false,
  parameterLimit: 1000000
}));
app.use(_passport.default.initialize());
// Définition des CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

_models.default.connection.authenticate().then(function () {
  return console.log('database connected...');
}).catch(function (err) {
  return console.log("Error:".concat(err));
});

app.use(_express.default.static(_path.default.join(__dirname + '/../public'))); // Index Rout

app.use('/api/users', _routes.default);
app.use('/api/gallery', _routes2.default);
app.use('/api/experiences', _routes3.default);
app.use('/api/projects', _routes5.default);
app.use('/routes', _routes4.default);
app.use('/thumb/img/:img', _resize.default);
app.get('/*/*', function (req, res) {
  res.redirect('/notFound');
});
app.use('*', function (req, res) {
  res.sendFile(_path.default.join(__dirname + '/../public/index.html'));
}); // error handler

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
var _default = app;
exports.default = _default;