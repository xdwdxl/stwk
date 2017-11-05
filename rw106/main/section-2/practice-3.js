'use strict';

module.exports = function countSameElements(collection) {
    var shuzu = [];
    for(var i = 0;i < collection.length;i++){
        shuzu = isExist(collection[i], shuzu);
    }
    return shuzu;
    function isExist(element,shuzu){
        var keycount = get(element);
        for(var i = 0;i<shuzu.length;i++){
            if((shuzu[i]).name == keycount[0]){
                (shuzu[i]).summary += parseInt(keycount[1]);
                return shuzu;
            }
        }
        shuzu.push({"name": keycount[0], "summary": parseInt(keycount[1])});
        return shuzu;
    }
    function get(element){
        var keycount=[element,1];
        if (element.split("-").length > 1) {
            keycount[0] = element.split("-")[0];
            keycount[1] = element.split("-")[1];
        }
        else if (element.split(":").length > 1) {
            keycount[0] = element.split(":")[0];
            keycount[1] = element.split(":")[1];
        }
        else if(element.split("[").length > 1)
        {
            keycount[0] = element.split("[")[0];
            keycount[1] = element.split("[")[1].split("]")[0];
        }
        return keycount;
    }

}