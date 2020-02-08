'use strict';

const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, gender, id, title, email, school) {
        super(name, gender, id, title, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Employee;