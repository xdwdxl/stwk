

import Person from "../../src/practice_2/person.js";

class Teacher extends Person {
    constructor(id,name, age, klasses) {
        super(id,age);
        this.klasses = klasses;
        if(id===1){
            this.name=name;
        }
    }

    introduce() {
        if(!this.klasses){
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }
        return super.introduce() + " I am a Teacher. I teach Class "+this.klasses[0].number+", "+this.klasses[1].number+".";
    }

}

export default Teacher;




