'use strict';

function compute_chain_median(collection) {
  var result = [];
  var result_a = [];
  result_a = collection.split("->");
  for (var i = 0;i<result_a.length;i++){
    result.push(parseInt(result_a[i]));
  }
  result=result.sort(function (a,b) {return a-b;})
  var number = (result[result.length / 2 - 1] + result[result.length / 2]) / 2;
  return number;
}

module.exports = compute_chain_median;
