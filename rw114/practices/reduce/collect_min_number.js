'use strict';

function collect_min_number(collection) {
  var maxInCollection = Math.min.apply(Math,collection);
  return maxInCollection;
}

module.exports = collect_min_number;

