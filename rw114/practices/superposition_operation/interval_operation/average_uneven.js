'use strict';

function average_uneven(collection) {
  var sum = 0;
  var result = [];

  for (var i in collection) {
    if (collection[i] % 2 !== 0) {
      sum += collection[i];
      result.push(collection[i]);
    }
  }

  return sum / result.length;

}

module.exports = average_uneven;
