'use strict';

function create_updated_collection(collection_a, object_b) {
  var collectionC = [];

  for (var i = 0; i < collection_a.length; i++) {
    var elem = existKey(collection_a[i], collectionC);
    if (elem) {
      elem.count++;
    }
    else {
      collectionC.push({"key": collection_a[i], "count": 1})
    }
  }
  return reduce(collectionC, object_b);
}

function existKey(key, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].key === key) {
      return array[i];
    }
  }
}
function reduce(collectionC, object_b) {
  for (var k = 0; k < collectionC.length; k++) {
    for (var j = 0; j < object_b.value.length; j++) {
      if (collectionC[k].key === object_b.value[j]) {
        var result = parseInt(collectionC[k].count / 3);
        collectionC[k].count -= result;
      }
    }
  }

  return collectionC;
}

module.exports = create_updated_collection;
