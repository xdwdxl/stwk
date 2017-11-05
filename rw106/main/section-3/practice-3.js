'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var collectionC = [];
    for (var i = 0; i < collectionA.length; i++) {
        var elem = existKey(collectionA[i], collectionC);
        if (elem) {
            elem.count++;
        }
        else {
            collectionC.push({"key": collectionA[i], "count": 1})
        }
    }
    return  reduce(collectionC,objectB);

}

function existKey(key,array) {
    for(var i=0;i<array.length;i++){
        if(array[i].key==key){
            return array[i];
        }
    }

}

function reduce(collectionC,objectB) {
    for (var k = 0; k < collectionC.length; k++) {
        for (var j = 0; j < objectB.value.length; j++) {
            if (collectionC[k].key == objectB.value[j]) {
                var shang = parseInt(collectionC[k].count / 3);
                collectionC[k].count -= shang;
            }
        }
    }


    return collectionC;
}
