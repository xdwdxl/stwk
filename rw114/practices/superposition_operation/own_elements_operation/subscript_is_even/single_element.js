'use strict';
var single_element = function(collection){
  var result = 0;
  var result_a = [];
  var result_b = [];
  var result_c = [];
  var num = 0;

  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result++;
      result_b.push(collection[i]);
    }
  }
  result_c = Array.from(new Set(result_b));
  for (var index in result_c) {

    for (var i in result_b) {
      if (result_c[index] === result_b[i]) {
        num++;
      }
    }
    if (num === 1) {
      result_a.push(result_c[index]);
    }
    num = 0;
  }
  return result_a
};
module.exports = single_element;
