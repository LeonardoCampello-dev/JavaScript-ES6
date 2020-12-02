"use strict";

function sum() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
  return x + y;
}

console.log(sum(1));
console.log(sum());
