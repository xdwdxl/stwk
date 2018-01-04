/*"use strict";

let sinon = require("sinon");
let main = require("../lib/main");
describe('main()', () => {
    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });
});*/
/*
describe('goChildScreen()', () => {
    it('should display  childscreen when input 1', () => {
        let inputNum = getInput();
        if(inputNum==="1"){
            goChildScreen(inputNum);
            expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：,请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：`);
        }
        if(inputNum ==="2"){
            goChildScreen(inputNum);
            expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：,请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`)
        }
    });
});
describe('addStudentInfo()',()=>{
    "use strict";
    it('shuold dispaly mainscreen when the studentinfo format is right',()=>{
       let inputInfo = getInput();
       let student = new addStudentInfo(inputInfo);
       if(student.testStudentInfo()){
           student.printAddStudentInfo();
           expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：,请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：,学生张三的成绩被添加,1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
       }
    });
    it('shuold dispaly mainscreen when the studentinfo format is right',()=>{
        let inputInfo = getInput();
        let student = new addStudentInfo(inputInfo);
        if(student.testStudentInfo()!==true){
            student.printAddStudentInfo();
            expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：,请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：,请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
        }
    });
});

describe('goChildScreen()',()=>{
    "use strict";
    let inputNum =  getInput();
    if(inputNum === "1") {
        it('should disply childScreen when input 1', () => {

            goChildScreen("1");
            expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：,请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：`);
        })
    }
    if(inputNum === "2"){
           it('should disply childScreen when input 2',()=>{
               goChildScreen("2");
               expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：,请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
           });
       }
});
describe('addStudentInfo()',()=>{
    "use strict";
    it('should return main when fomat is right',()=>{

        addStudentInfo("张三，123，汉，1，数学：75，语文：95，英语：80，编程：80");
        李四，124，汉，1，数学：70，语文：95，英语：80，编程：80
        刘五，125，汉，1，数学：70，语文：95，英语：80，编程：80
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：,请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：,1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);

    });
});
*/
