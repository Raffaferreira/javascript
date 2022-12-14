"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _contact = _interopRequireDefault(require("./routes/contact"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  //index: true,
  maxAge: '1d',
  redirect: false,
  setHeaders: function setHeaders(res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
};
app.set('views', _path["default"].join(__dirname, '../public/views/'));
app.use((0, _morgan["default"])('dev'));
app.use((0, _morgan["default"])('combined'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public'), options));
console.log("Diretorio do projeto ", __dirname);
console.log("Pasta das views :", app.get('views'));
console.log("Express static name :", _path["default"].join(__dirname, '../public'));
app.use(function (_, res) {
  return res.status(404).json({
    message: 'No route found'
  });
});
app.use('/', _index["default"]);
app.use('/contact', _contact["default"]);
app.use('/admin', function (req, res) {
  res.render("<p>Random texts</p>");
}); // app.all('/secret', function (req, res, next) {
//     console.log('Accessing the secret section ...');
//     next();
// });

var _default = app;
exports["default"] = _default;