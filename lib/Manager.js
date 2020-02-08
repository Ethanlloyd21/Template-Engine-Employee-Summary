'use strict';

const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, gender, id, title, email, officeNumber) {
        super(name, gender, id, title, email);
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;