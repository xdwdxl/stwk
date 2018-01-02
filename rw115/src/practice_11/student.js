import Person from "../../src/practice_8/person.js";

class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass = klass;
    }

    introduce(){
        if(this.id === 0){
            return super.introduce()+" I am a Student. I am Leader of Class "+this.klass.number+".";
        }
        return super.introduce()+" I am a Student. I am at Class "+this.klass.number+".";
    }
}
export default Student;




