'use strict';

function double_to_one(collection) {
  var result = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length === undefined) {
      result.push(collection[i]);
    }

    for (var j = 0; j < collection[i].length; j++) {
      result.push(collection[i][j]);
    }
  }
  return result;
}

module.exports = double_to_one;
