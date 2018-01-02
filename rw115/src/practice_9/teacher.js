
import Person from "../../src/practice_2/person.js";

class Teacher extends Person {
    constructor(id,name, age, klass) {
        super(id,age);
        this.klass = klass;
        if(id===1){
            this.name=name;
        }
    }

    introduce() {
        if (this.klass) {
            return super.introduce()+" I am a Teacher. I teach Class "+this.klass.number+".";
        }
        else
            return super.introduce()+" I am a Teacher. I teach No Class.";
    }
}

export default Teacher




