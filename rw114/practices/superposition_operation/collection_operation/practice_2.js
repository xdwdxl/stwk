'use strict';

function hybrid_operation_to_uneven(collection) {
  var result = [];

  for (var i in collection) {
    if (collection[i] % 2 !== 0) {
      result.push(collection[i]*3+2);
    }
  }
  return result;

}

module.exports = hybrid_operation_to_uneven;

