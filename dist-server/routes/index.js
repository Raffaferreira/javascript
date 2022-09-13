"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const fs = require('fs').promises;
var router = _express["default"].Router(); // const express = require('express')
// const router = express.Router();


router.get('/home', function (req, res) {
  console.log(req);
  console.log(res);
  res.sendFile(path.join(__dirname + '../public/views/about.html'));
});
router.get('/about', function (req, res) {
  console.log(req);
  console.log(res);
  var options = {
    root: path.join(__dirname, '/views/'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }; //res.sendFile(path.join(__dirname, '../public/views/about.html'));

  res.sendFile('about.html', {
    root: app.get('views')
  }); //fs.readFile(__dirname + "/about.html")
  // fs.readFile(__dirname + "/index.html")
  //     .then(contents => {
  //         res.setHeader("Content-Type", "text/html");
  //         res.writeHead(200);
  //         res.end(contents);
  //     })
  //res.sendFile(path.join(__dirname + '../public/views/about.html'));
  // res.sendFile('about.html', options, function (err) {
  //     if (err) {
  //         next(err)
  //     } else {
  //         console.log('Sent:', fileName)
  //     }
  // })
});
router.get('/contacts', function (req, res) {
  console.log(req);
  console.log(res);
  res.sendFile('contact.html', {
    root: app.get('views')
  });
});
var _default = router; // module.exports = router;

exports["default"] = _default;