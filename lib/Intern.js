'use strict';

class Intern extends Employee {
    constructor(school) {
        super(name, id, title, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}