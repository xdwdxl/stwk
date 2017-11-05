'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var shuzu=[];
    var collectionB=objectB;
    for(var i=0;i<collectionA.length;i++){
        for(var j=0;j<collectionB.value.length;j++){
            if(collectionA[i].key==collectionB.value[j])
                shuzu.push(collectionA[i].key)
        }
    }
  return shuzu;
}
