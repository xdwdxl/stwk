'use strict';

function get_union(collection_a, collection_b) {
  var result = [];
  var s = new Set(collection_a.concat(collection_b));
  result = Array.from(s);

  return result;
}

module.exports = get_union;

