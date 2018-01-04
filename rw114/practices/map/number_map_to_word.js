'use strict';
var number_map_to_word = function(collection){
var result = [];
for (var i = 0; i<collection.length;i++){
  result.push(String.fromCharCode(collection[i]+96));
}
return result;
};

module.exports = number_map_to_word;
