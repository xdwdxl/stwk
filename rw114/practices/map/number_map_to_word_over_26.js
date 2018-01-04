'use strict';
var number_map_to_word_over_26 = function(collection){
  var letter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var result = [];

  for (var i = 0;i<collection.length;i++) {
    if (collection[i] % 26 === 0) {
      result.push(letter[Math.floor(collection[i] / 26) - 1].concat(letter[26]));
    } else {
      result.push(letter[Math.floor(collection[i] / 26)].concat(letter[collection[i] % 26]));
    }
  }

  return result;
};

module.exports = number_map_to_word_over_26;
