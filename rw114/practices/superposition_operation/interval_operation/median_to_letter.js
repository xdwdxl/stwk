'use strict';

function median_to_letter(collection) {
  var result = 0;
  var collection_a = (collection[Math.ceil(collection.length/2)]);
  if (collection_a % 26 === 0) {
    result = (String.fromCharCode(Math.floor(collection_a / 26) - 1+96).concat(String.fromCharCode(26+96)));
  } else {
    result = (String.fromCharCode(Math.floor(collection_a / 26)+96).concat(String.fromCharCode(collection_a % 26+96)));
  }

  return result;

}

module.exports = median_to_letter;
