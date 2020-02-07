'use strict';

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//const html = require('./template/generateHtml');
const fs = require('fs');
const prompt = require('./lib/prompt');

async function init() {
    try {
        await prompt.enterPrompt();
    }
    catch (error) {
        console.error(error);
    }

}




init();