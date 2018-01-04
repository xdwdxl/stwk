'use strict';

function grouping_count(collection) {
  var result = [];
  for (var i = 0;i<collection.length;i++){
    if(result[collection[i]]){
      result[collection[i]]+=1;
    }
    else{
      result[collection[i]]=1;
    }
  }
return result;
}
module.exports = grouping_count;

