'use strict';

const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, gender, id, tittle, email, officeNumber) {
        super(name, gender, id, tittle, email);
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