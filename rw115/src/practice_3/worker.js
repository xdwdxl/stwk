
import Person from "../practice_1/Person";

class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){

        return "I am a Worker. I have a job.";
    }
}
export default Worker;