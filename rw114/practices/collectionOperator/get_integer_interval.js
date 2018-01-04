'use strict';

function get_integer_interval(number_a, number_b) {
  var jieguo = [];
  if(number_a<number_b){
    for (var i=number_a;i<=number_b;i++){
        jieguo.push(i);
    }
    return jieguo;
  }
  else if (number_a>number_b) {
    for (var i = number_a; i >= number_b; i--) {
        jieguo.push(i);
    }
    return jieguo;
  }
  else  {
      return [number_b];
    }
  }


module.exports = get_integer_interval;

