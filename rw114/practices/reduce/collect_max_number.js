'use strict';

function collect_max_number(collection) {
  var maxInCollection = Math.max.apply(Math,collection);
  return maxInCollection;
}

module.exports = collect_max_number;
