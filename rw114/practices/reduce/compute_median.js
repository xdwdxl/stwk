'use strict';

function compute_median(collection) {
  var result = [];
  var number = 0;
  result = collection.sort(function (a, b) {return a - b;});
  if (result.length % 2 === 0) {
    number = (result[result.length / 2 - 1] + result[result.length / 2]) / 2;
  } else {
    number = result[Math.floor(result.length / 2)];
  }
  return number;
}

module.exports = compute_median;


