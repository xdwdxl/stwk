import Person from "./Person";

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;

    }
    introduce(){
         if(this.klass){
            return super.introduce()+" I am a Teacher. I teach Class 2.";
        }
         else return super.introduce()+" I am a Teacher. I teach No Class.";
    }
}
export default Teacher;