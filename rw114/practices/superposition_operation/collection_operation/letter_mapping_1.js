'use strict';

function even_to_letter(collection) {
  var result = [];
  for (var i = 0;i<collection.length;i++){
    if(collection[i]%2===0){
      result.push(String.fromCharCode(collection[i]+96))
    }
  }

  return result;
}

module.exports = even_to_letter;
