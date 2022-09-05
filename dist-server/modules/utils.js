"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alligator = void 0;
exports.myLogger = myLogger;
exports.myNumbers = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//You can export members one by one. What’s not 
//exported won’t be available directly outside the module:
var myNumbers = [1, 2, 3, 4];
exports.myNumbers = myNumbers;
var animals = ['Panda', 'Bear', 'Eagle']; // Not available directly outside the module

function myLogger() {
  console.log(myNumbers, animals);
}

var Alligator = /*#__PURE__*/_createClass(function Alligator() {// ...

  _classCallCheck(this, Alligator);
});

exports.Alligator = Alligator;