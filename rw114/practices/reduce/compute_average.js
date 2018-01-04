'use strict';

function compute_average(collection) {
  var sum=0;

  for(var i = 0; i < collection.length; i++){
    sum += collection[i];
  }

  var result = sum / collection.length;

  return result;
}

module.exports = compute_average;

