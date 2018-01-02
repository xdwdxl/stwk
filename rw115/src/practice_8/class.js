class klass {
    leader;

    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return "Class "+this.number;
    }

    assignLeader(student) {
        if (student.id === 1) {
            student.id = 0;
        }
        if (student.klass.number === this.number) {
            this.leader = student;
        }

    }

}
export default klass;
