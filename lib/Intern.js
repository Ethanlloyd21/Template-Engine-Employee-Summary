'use strict';

const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, gender, id, email, school) {
        super(name, gender, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;