"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = _interopRequireDefault(require("../modules/helpers.js"));

var _extensions = _interopRequireDefault(require("../modules/extensions.js"));

var _routesnamed = require("../modules/routesnamed.js");

var _utils = require("../modules/utils.js");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/**
 * @param {any} request of this body
 * @param {any} response 
 */


router.get(_routesnamed.contact, function (req, res, next) {
  _helpers["default"].getFullName("", "");

  _extensions["default"].returnMultiplication(5, 5);

  _extensions["default"].returnSum(4, 4);

  (0, _utils.myLogger)();
  _utils.myNumbers;
  (0, _utils.Alligator)();
  console.log(req);
  console.log(res); //

  res.render("contact.html");
});
router.get(_routesnamed.getbookbycategory, function (req, res) {
  console.log(req.params);
  var username = req.params.user;
  var category = req.paramas.categorySlug;
  console.log(username);
  console.log(category);
  res.send(req.params);
});
router.route('/article').get(function (req, res) {
  res.send('Get the article');
}).post(function (req, res) {
  res.send('Add an article');
}).put(function (req, res) {
  res.send('Update the article');
});
var _default = router; //export { router as ContactRouting };

exports["default"] = _default;