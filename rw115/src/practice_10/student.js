import Person from "../../src/practice_2/person.js";

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, age);
        this.klass = klass;
        if (id === 1) {
            this.name = name;
        }
    }
    introduce() {
        if (this.klass.leader === this) {
            return super.introduce() + " I am a Student. I am Leader of Class "+this.klass.number+".";
        }
        else
            return super.introduce() + " I am a Student. I am at Class "+this.klass.number+".";
    }
}
export default Student;






