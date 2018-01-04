'use strict';

function collect_all_even(collection) {
  var hanshu = [];
  for (var i=0;i<collection.length;i++){
    if(collection[i]%2===0){
      hanshu.push(collection[i])
    }
  }
return hanshu;
}
module.exports = collect_all_even;
