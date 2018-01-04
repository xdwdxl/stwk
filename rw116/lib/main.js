"use strict";
let childScreen = require("../lib/childScreen");
function main() {
    let studentInfoArr = [];
    let mainChildScreen = new childScreen(studentInfoArr);
    mainChildScreen.goChildScreen();
}
module.exports = () => {
    main();
};
