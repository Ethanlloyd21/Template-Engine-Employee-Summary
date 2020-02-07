'use strict';

const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(gitUsername) {
        super(name, id, title, email);
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