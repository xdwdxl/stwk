"use strict";
class reportCard {
    constructor(str, arr) {
        this.schollNumberStr = str;
        this.studentInfo = arr;
    }

    testSchoolNumberStr() {
        let reg = /^[0-9]{3}$/;
        if (this.schollNumberStr.length > 3) {
            let splitArr = this.schollNumberStr.split(",");
            let regTest = splitArr.every((item) => {
                return reg.test(Number(item));
            });
            return regTest;
        } else {
            return reg.test(this.schollNumberStr);
        }
    }

    outputStudentInfoArr() {
        let resultArr = [];
        if (this.schollNumberStr.length > 3) {
            let splitArr = this.schollNumberStr.split(",");
            splitArr.forEach((item) => {
                for (let i = 0; i < this.studentInfo.length; i++) {
                    if (item === this.studentInfo[i].number)
                        resultArr.push(this.studentInfo[i]);
                }
            });
        }
        if(this.schollNumberStr.length === 3){
            for (let i = 0; i < this.studentInfo.length; i++) {
                if (this.schollNumberStr === this.studentInfo[i].number)
                    resultArr.push(this.studentInfo[i]);
            }
        }
        return resultArr;
    }

    printStudentReportCard(){
        let reportCardPart1 = '成绩单\n'+ '姓名|数学|语文|英语|编程|平均分|总分\n';
        let reportCardPart2 = '';
        let allScore = 0;
        let studentAllScoreArr = [];
        this.outputStudentInfoArr().forEach((item)=>{
            let studentAllScore = item.math+item.chinese+item.english+item.code;
            studentAllScoreArr.push(studentAllScore);
            allScore+=studentAllScore;
            let averageScore = studentAllScore/4;
            reportCardPart2+=item.name+'|'+item.math+'|'+item.chinese+'|'+item.english+'|'+item.code+'|'+averageScore+'|'+studentAllScore+'\n';
        });
        let len = studentAllScoreArr.length;
        let studentAllScoreMedian = 0;
        if(studentAllScoreArr.length%2===0){
            studentAllScoreMedian = (studentAllScoreArr[len/2]+studentAllScoreArr[len/2-1])/2;
        }
        else{
            studentAllScoreMedian = studentAllScoreArr[(len-1)/2];
        }
        let reportCardPart3 = '全班总分平均数：'+allScore/this.outputStudentInfoArr().length+'\n'+'全班总分中位数：'+studentAllScoreMedian;

       return reportCardPart1+'========================\n'+reportCardPart2+'========================\n'+reportCardPart3;
    }

}
module.exports = reportCard;
