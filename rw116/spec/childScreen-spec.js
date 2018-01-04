let sinon = require("sinon");
let childScreen = require("../lib/childScreen");
describe('childScreen',()=>{
    it('when input number is 张三，123，汉，1，数学：75，语文：95，英语：80，编程：80,should output 学生张三的成绩被添加',()=>{
        sinon.spy(console, 'log');
        let studentInfoArr = [];
        let testChildScreen = new childScreen(studentInfoArr);
        testChildScreen.chooseInputNumber1();
        expect(console.log.args.join()).toBe("学生张三的成绩被添加");
    });
/*    it('when input number is 张三,should output 请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：',()=>{
        sinon.spy(console, 'log');
        let studentInfoArr = [];
        let testChildScreen = new childScreen(studentInfoArr);
        testChildScreen.chooseInputNumber1();
        expect(console.log.args.join()).toBe("请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：");
    });
    it('test hasSchoolNumber ，when has schoolNumber return true',()=>{
        let testArr = [{ name: '张三',
            number: '123',
            nation: '汉',
            klass: '1',
            math: 75,
            chinese: 95,
            english: 80,
            code: 82.5 },
            { name: '李四',
                number: '124',
                nation: '汉',
                klass: '1',
                math: 85,
                chinese: 80,
                english: 90,
                code: 81.25 }]
    });
    let inputStr1 = "123,124";
    let studentInfoArr = [];
    let testChildScreen = new childScreen(studentInfoArr);
    let result = testChildScreen.hasSchoolNumber();
    expect(result).toEqual(true);
    */
});