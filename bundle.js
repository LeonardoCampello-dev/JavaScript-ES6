"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var find = arr.find(function (item) {
  return item === 9;
});
console.log(find);
