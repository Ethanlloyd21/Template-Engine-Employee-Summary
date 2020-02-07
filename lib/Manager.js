'use strict';


class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, title, email);
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

