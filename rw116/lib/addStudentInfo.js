"use strict";
class addStudentInfo{
    constructor(str){
        this.str = str;
    }
    testStudentInfo() {
        let reg = /[\u4e00-\u9fa5]{1,3}，[0-9]{3}，[\u4e00-\u9fa5]，[0-9]，[\u4e00-\u9fa5]{2}：[0-9]{1,3}，[\u4e00-\u9fa5]{2}：[0-9]{1,3}，[\u4e00-\u9fa5]{2}：[0-9]{1,3}，[\u4e00-\u9fa5]{2}：[0-9]{1,3}$/;
        return reg.test(this.str);
    }
    getSingleStudentInfo(){
        let strArr = this.str.split("，");
        let studentInfo = {};
        studentInfo.name = strArr[0];
        studentInfo.number = strArr[1];
        studentInfo.nation = strArr[2];
        studentInfo.klass = strArr[3];
        studentInfo.math = Number(strArr[4].substr(3));
        studentInfo.chinese = Number(strArr[5].substr(3));
        studentInfo.english = Number(strArr[6].substr(3));
        studentInfo.code = Number(strArr[7].substr(3));
        return studentInfo;
    }
}
module.exports = addStudentInfo;