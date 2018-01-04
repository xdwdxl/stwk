'use strict';

function choose_no_repeat_number(collection) {
  var result = [];
  var a = new Set(collection);
  result = Array.from(a);
  return result;
}

module.exports = choose_no_repeat_number;
