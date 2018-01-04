'use strict';

function double_to_one(collection) {
  var result = [];
  var result_a = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length === undefined) {
      result.push(collection[i]);
    }
    for (var j = 0; j < collection[i].length; j++) {
      result.push(collection[i][j]);
    }
    var a = new Set(result);
    result_a = Array.from(a);
  }

  return result_a;
}

module.exports = double_to_one;
