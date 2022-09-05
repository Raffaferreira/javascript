"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseEntity = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @property {ObjectID} _id
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
var BaseEntity = /*#__PURE__*/_createClass(function BaseEntity() {
  var _this = this;

  _classCallCheck(this, BaseEntity);

  this.createdAt = new Date();
  this.updatedAt = new Date();

  var props = wrap(this).__meta.properties;

  Object.keys(props).forEach(function (prop) {
    if ([ReferenceType.ONE_TO_MANY, ReferenceType.MANY_TO_MANY].includes(props[prop].reference)) {
      _this[prop] = new Collection(_this);
    }
  });
});

exports.BaseEntity = BaseEntity;