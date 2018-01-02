import Person from "./Person";

class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        return super.introduce()+" I am a Student. I am at Class 2.";
    }
}
export default Student;