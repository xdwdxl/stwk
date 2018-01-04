"use strict";
let getInput = require("../lib/getInput");
let addStudentInfo = require("../lib/addStudentInfo");
let reportCard = require("../lib/reportCard");
let mainScreen =
    `1. 添加学生
     2. 生成成绩单
     3. 退出
     请输入你的选择（1～3）：`;
class childScreen{
    constructor(arr){
        this.studentInfoArr = arr;
    }
    chooseInputNumber1(){
        let inputStudentInfo = getInput();
        let studentInfo = new addStudentInfo(inputStudentInfo);
        if (studentInfo.testStudentInfo()) {
            this.studentInfoArr.push(studentInfo.getSingleStudentInfo());
            console.log("学生" + studentInfo.getSingleStudentInfo().name + "的成绩被添加");
        }
        if(studentInfo.testStudentInfo() === false){
            console.log("请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：");
            this.chooseInputNumber1();
        }
    }

    hasSchoolNumber(arr,inputStr){
        let j = 0;
        let strArr= inputStr.split(",");
        strArr.forEach((item)=>{
            for(let i=0;i<arr.length;i++){
                if(item === arr[i].number){
                    j++;
                }
            }
        });
        if(j > 0){
            return true;
        }else{
            return false;
        }
    }

    chooseInputNumber2(){
        let inputSchoolNumberString = getInput();
        let mainReportCard = new reportCard(inputSchoolNumberString, this.studentInfoArr);
        if (mainReportCard.testSchoolNumberStr()) {
            if(this.hasSchoolNumber(this.studentInfoArr,inputSchoolNumberString)){
                let studentReportCard = mainReportCard.printStudentReportCard();
                console.log(studentReportCard);
            }
            else{
                console.log("此学号不存在,请重新输入");
                this.chooseInputNumber2();
            }

        } else {
            console.log("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
            this.chooseInputNumber2();
        }
    }

    goChildScreen(){
        console.log(mainScreen);
        let readlineSync = require('readline-sync');
        let inputNumber = readlineSync.question('');
        if (inputNumber === "1") {
            console.log("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
            this.chooseInputNumber1();
            this.goChildScreen();
        }
        if (inputNumber === "2") {
            console.log("请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
            this.chooseInputNumber2();
            this.goChildScreen();
        }
        if(inputNumber === "3"){
            readlineSync.close;
        }
    }


}
module.exports = childScreen;