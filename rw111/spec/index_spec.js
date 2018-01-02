const main = require("../main/index");

const printInfo = require("../result");

describe("print boole", function () {

});
it('when there are ninety-nine bottles', function () {
    var number = 99;

    expect(main(number)).toEqual(printInfo());
});



