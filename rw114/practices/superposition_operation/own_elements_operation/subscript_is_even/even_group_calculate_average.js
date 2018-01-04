'use strict';
var even_group_calculate_average = function(collection){
  var result_a = [];
  var result_b =[];
  var result_c = 0;
  var result_d = 0;
  var result_e = 0;
  var result_f=[];
  var result_g =[];
  var result_three =[];
  var num_a=0;
  var num_b=0;
  var num_c=0;
  var result = 0;
  var collectionA = [];
  var a=0;

  for (var i = 0; i < collection.length; i++) {
    if ((i + 1) % 2 === 0) {
      result++;
      result_a.push(collection[i]);
    }
  }
  for(var i in result_a){
    if(result_a[i] %2 !==0){
      a++;
    }
  }
  if(a === result_a.length){
    collectionA.push(0);
    return collectionA;
  }

  for(var index in result_a){
    if(result_a[index] % 2 === 0){
      result_b.push(result_a[index]);
    }
  }
  for(var index in result_b){
    if(result_b[index] / 100 > 1){
      result_three.push(result_e[index]);
      result_e +=result_b[index];
      num_c++;
    }else if(result_b[index] / 10 >1){
      result_g.push(result_d[index]);
      result_d+=result_b[index];
      num_b++;
    }else{
      result_f.push(result_c[index]);
      result_c+=result_b[index];
      num_a++;
    }
  }
  if(result_g.length===0&&result_f.length ===0){
    collectionA.push(result_e/num_c);
    return collectionA;
  }
  collectionA.push(result_c/num_a);
  collectionA.push(result_d/num_b);
  collectionA.push(result_e/num_c);

  return collectionA;
};
module.exports = even_group_calculate_average;
