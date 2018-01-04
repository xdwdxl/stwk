'use strict';
var even_asc_odd_desc = function(collection){
  var result_a = [];
  var result_b = [];

  for (var i = 0; i < collection.length; i++) {
    if ((collection[i]) % 2 === 0) {

      result_a.push(collection[i]);
    } else {
      result_b.push(collection[i]);
    }
  }

  return result_a.sort(function (a, b) {return a - b;}).concat(result_b.sort(function (a, b) {return b - a;}));
};


module.exports = even_asc_odd_desc;
