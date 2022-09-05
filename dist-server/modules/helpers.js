"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = teste;
exports.getFullName = getFullName;

function getFullName(name, surname) {
  return name + " " + surname;
}

function teste() {
  console.log("teste");
} //CommonJs Module export
//module.exports = getFullName;
// module.exports = {
//     logInfo: info,
//     logError: error,
//     defaultMessage,
// };