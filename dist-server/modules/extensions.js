"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tr;
exports.getFullName = void 0;
exports.returnMultiplication = returnMultiplication;
exports.returnSubtraction = returnSubtraction;
exports.returnSum = returnSum;

//ES6 Modules export
var getFullName = function getFullName(name, surname) {
  return name + " " + surname;
};

exports.getFullName = getFullName;

function returnMultiplication(value1, value2) {
  return value1 * value2;
}

function returnSubtraction(value1, value2) {
  return value1 - value2;
}

function returnSum(value1, value2) {
  return value1 + value2;
}

function tr(value1, value2) {
  return value1 + value2;
}