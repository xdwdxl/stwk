
class klass {
    leader;

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    assignLeader(student) {
        if (student.id === 1) {
            student.id = 0;
        }
        if (student.klass === this) {
            this.leader = student;
        }
        if (this.teacher) {
            console.log("I am "+this.teacher.name+". I know "+student.name+" become Leader of Class "+this.number+".");
        }
        else {
            console.log("It is not one of us.");
        }
    }

    appendMember(student) {
        student.klass = this;

        if(this.teacher1){
            console.log("I am "+this.teacher1.name+". I know "+student.name+" has joined Class "+this.number+".");
        }
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;

    }

    registerJoinListener(teacher) {
        this.teacher1 = teacher;
    }
}

export default klass;


