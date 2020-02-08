'use strict';

const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, gender, id, tittle, email, gitUsername) {
        super(name, gender, id, title, email);
        this.gitUsername = gitUsername;
    }

    getGitHub() {
        return this.gitUsername;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;