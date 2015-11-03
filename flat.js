'use strict';
function *flat(arr) {
  // my code goes here
  for (var i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value.constructor == Array) {
      yield *flat(value);
    }
    else {
      yield value;
    }
  }
}

var A = [1, [2, [3, 4], 5], 6];

for (var f of flat(A)){
  console.log(f);
}
