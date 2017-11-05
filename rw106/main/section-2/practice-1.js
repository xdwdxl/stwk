'use strict';

module.exports = function countSameElements(collection) {
  var shuzu=[]
    for(var i=0;i<collection.length;i++){
    var elem=existkey(collection[i],shuzu);
    if(elem){
      elem.count++;
    }
    else(shuzu.push({"key":collection[i],"count":1}))
    }
  return shuzu;
    function existkey (key,array){
      for(var i=0;i<array.length;i++){
        if(array[i].key==key){
          return array[i];
        }
      }
    }
    return null;
}
