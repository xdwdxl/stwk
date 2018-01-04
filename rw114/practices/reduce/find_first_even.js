'use strict';

function find_first_even(collection) {
  var result = 0;
  for (var i = 0;i<collection.length;i++) {
    if (collection[i] % 2 === 0) {
      result = collection[i];
      return result;
    }
  }

}

module.exports = find_first_even;

