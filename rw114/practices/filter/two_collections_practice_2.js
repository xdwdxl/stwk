'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var result = [];
  var count = 0;
  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < collection_b.length; j++) {
      if (collection_a[i] !== collection_b[j]) {
        count++;
      }
      if (count === collection_b.length) {
        result.push(collection_a[i]);
      }
    }
    count=0;
  }
   return result;
}

module.exports = choose_no_common_elements;

