"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myAge = exports["default"] = void 0;
var Me = {
  myName: "Justin",
  sayMyName: function sayMyName() {
    console.log(this.myName);
  }
};
var myAge = exports.myAge = 20;
var _default = exports["default"] = Me;