'use strict';

function hybrid_operation_to_uneven(collection) {
  var result = 0;

  for (var i in collection) {
    if (collection[i] % 2 !== 0) {
      result+=(collection[i]*3+5);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

