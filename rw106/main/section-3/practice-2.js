'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {

    for(var i=0;i<collectionA.length;i++){
        for(var j=0;j<objectB.value.length;j++){
            if(collectionA[i].key==objectB.value[j]){
                var array=parseInt(collectionA[i].count/3);
                if(collectionA[i].count>=3&&collectionA[i].count%3>=0){
                    collectionA[i].count-=array;
                }
            }
        }
    }
    return collectionA;
}

