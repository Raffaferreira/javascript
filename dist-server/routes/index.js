"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/', function (req, res) {
  console.log(req);
  console.log(res);
  res.render('index.html');
});
router.get('/about', function (req, res) {
  console.log(req);
  console.log(res);
  console.log(app.get('views')); //res.sendFile(path.join(__dirname, '../public/views/about.html'));

  res.sendFile('about.html', {
    root: app.get('views')
  });
});
router.get('/contacts', function (req, res) {
  console.log(req);
  console.log(res);
  res.sendFile('contact.html', {
    root: app.get('views')
  });
});
var _default = router;
exports["default"] = _default;