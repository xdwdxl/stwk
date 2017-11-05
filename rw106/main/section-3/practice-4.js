'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var collectionC = [];
    for (var i = 0; i < collectionA.length; i++) {
        collectionC = isExist1(collectionA[i], collectionC);
    }
    for (var k = 0; k < collectionC.length; k++) {
        for (var j = 0; j < objectB.value.length; j++) {
            if (collectionC[k].key == objectB.value[j]) {
                var shang = parseInt(collectionC[k].count / 3);
                collectionC[k].count -= shang;
            }
        }
    }
    return collectionC;
    function isExist1(element, collectionC) {
        var keycount = element.split("-");
        var key = keycount.length == 1 ? element : keycount[0];
        var count = keycount.length == 1 ? 1 : keycount[1];
        for (var i = 0; i < collectionC.length; i++) {
            if (collectionC[i].key == key) {
                collectionC[i].count += parseInt(count);
                return collectionC;
            }
        }
        collectionC.push({"key": key, "count": parseInt(count)});
        return collectionC;
        function isExsit(element,collectionC) {
            for(var i=0;i<collectionC.length;i++){
                if (element==collectionC[i])
                    return true;
            }

        }
    }

}

