'use strict';
var calculate_median = function(collection){
  var result_a = [];
  var result = 0;
  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result++;
      result_a.push(collection[i]);
    }
  }
  if (result % 2 !== 0) {
    return result_a[Math.ceil(result_a.length / 2) - 1];
  } else {
    return (result_a[Math.ceil(result_a.length / 2)-1] + result_a[Math.ceil(result_a.length / 2)])/2;
  }
};
module.exports = calculate_median;
