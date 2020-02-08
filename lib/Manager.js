'use strict';

const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, gender, id, email, officeNumber) {
        super(name, gender, id, email);
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