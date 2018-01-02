

import Person from "../practice_1/Person";

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){

        return "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.klass+"."
    }
}
export default Student;