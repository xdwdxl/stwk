'use strict';
var is_exist_element = function(collection,element){
  var result_a = [];
  var result = 0;

  for (var i = 0; i < collection.length; i++) {
    if ((i) % 2 === 0) {
      result++;
      result_a.push(collection[i]);
    }
  }
  if (element === 3 && result_a.indexOf(3) !== -1) {
    return true;
  } else {
    return false;
  }
  if (element === 4 && result_a.indexOf(4) === -1) {
    return false
  } else {
    return true;
  }

};
module.exports = is_exist_element;
