let outputReportCard = require("../lib/reportCard");
let main = require("../lib/main");
describe('reportCard',()=>{
    it('testSchoolNumberStr should get true when the school number format is right',()=>{
        // main();
        let inputSchoolNumberStr = "123,124";
        let testOutputReportCard = new outputReportCard(inputSchoolNumberStr);
        let result = testOutputReportCard.testSchoolNumberStr();
        expect(result).toBe(true);
    });
    it('testSchoolNumberStr should get true when the school number format is right',()=>{
        let inputSchoolNumberStr = "123,124,125,136";
        let testOutputReportCard = new outputReportCard(inputSchoolNumberStr);
        let result = testOutputReportCard.testSchoolNumberStr();
        expect(result).toBe(true);
    });
    it('testSchoolNumberStr should get false when the school number format less 3 number is false',()=>{
        let inputSchoolNumberStr = "12";
        let testOutputReportCard = new outputReportCard(inputSchoolNumberStr);
        let result = testOutputReportCard.testSchoolNumberStr();
        expect(result).toBe(false);
    });
    it('testSchoolNumberStr should get false when the school number format is false',()=>{
        let inputSchoolNumberStr = "1245623,123";
        let testOutputReportCard = new outputReportCard(inputSchoolNumberStr);
        let result = testOutputReportCard.testSchoolNumberStr();
        expect(result).toBe(false);
    });
    it('outputStudentInfoArr should get an objectArr when the school number format is right and there are 2 obj',()=>{
        let inputSchoolNumberStr = "123,124";
        let studentInfoArr = [{ name: '张三',
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
                code: 81.25 }];
        let testOutputReportCard = new outputReportCard(inputSchoolNumberStr,studentInfoArr);
        let result = testOutputReportCard.outputStudentInfoArr();
    expect(result).toEqual(studentInfoArr);
    });
    it('outputStudentInfoArr should get an objectArr when the school number format is right and this only 1 obj',()=>{
        let inputSchoolNumberStr = "123";
        let studentInfoArr = [{ name: '张三',
            number: '123',
            nation: '汉',
            klass: '1',
            math: 75,
            chinese: 95,
            english: 80,
            code: 82.5 }];
        let testOutputReportCard = new outputReportCard(inputSchoolNumberStr,studentInfoArr);
        let result = testOutputReportCard.outputStudentInfoArr();
        expect(result).toEqual(studentInfoArr);
    });
    it('printStudentReportCard should get a studentReportCard',()=>{
        let inputSchoolNumberStr = "123,124";
        let studentInfoArr = [{ name: '张三',
            number: '123',
            nation: '汉',
            klass: '1',
            math: 75,
            chinese: 95,
            english: 80,
            code: 80 },
            { name: '李四',
                number: '124',
                nation: '汉',
                klass: '1',
                math: 85,
                chinese: 80,
                english: 70,
                code: 90 }];
       let testOutputReportCard = new outputReportCard(inputSchoolNumberStr,studentInfoArr) ;
       let result = testOutputReportCard.printStudentReportCard();
       let expectResult =
           '成绩单\n'+ '姓名|数学|语文|英语|编程|平均分|总分\n'+'========================\n'+
           '张三|75|95|80|80|82.5|330\n'+'李四|85|80|70|90|81.25|325\n'+'========================\n'+
           '全班总分平均数：327.5\n'+'全班总分中位数：327.5';
       expect(result).toEqual(expectResult);
    });

});