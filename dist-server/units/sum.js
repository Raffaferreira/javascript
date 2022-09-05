"use strict";

function sum(a, b) {
  return a + b;
}

module.exports = sum;
exports.log = {
  console: function (_console) {
    function console(_x) {
      return _console.apply(this, arguments);
    }

    console.toString = function () {
      return _console.toString();
    };

    return console;
  }(function (msg) {
    console.log(msg);
  }),
  file: function file(msg) {// log to file here
  }
};