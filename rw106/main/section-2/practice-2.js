'use strict';

module.exports = function countSameElements(collection) {
    var shuzu =[];
    for(var i=0;i<collection.length;i++){
        shuzu = isExist(collection[i],shuzu);
    }
    return shuzu;
    function isExist(element,shuzu) {
        var keycount =element.split("-");
        var key = keycount.length==1?element:keycount[0];
        var count = keycount.length==1?1:keycount[1];
        for(var i=0;i<shuzu.length;i++){
            if (shuzu[i].key==key){
                shuzu[i].count +=parseInt(count);
                return shuzu;
            }
        }
        shuzu.push({"key":key,"count":parseInt(count)});
        return shuzu;

    }
}
