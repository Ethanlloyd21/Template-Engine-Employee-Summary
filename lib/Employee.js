'use strict';

class Employee {
    constructor(name, gender, id, email) {
        this.name = name;
        this.gender = gender;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getGender() {
        return this.gender;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;