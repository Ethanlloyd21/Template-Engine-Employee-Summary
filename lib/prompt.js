const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFiles = util.promisify(fs.writeFile);
const puppeteer = require('puppeteer');
const { resolve } = require("path");

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

const storeToArray = [];
let img;




async function enterPrompt() {

    await addManager();
    await optionTeam();

};

async function addManager() {

    const qManager = await inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter the name of the Manager: ',
            validate: input => {
                const test = input.match(/^[a-zA-Z][a-zA-Z\s]*$/);
                if (test) return true;
                else new Error('Plese enter letters only!');
            }
        },
        {
            type: 'list',
            name: 'gender',
            message: 'Please choose a gender: ',
            choices: ['Male', 'Female', 'do not want to provide']
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the ID number: ',
            validate: input => {
                const test = input.match(/^[0-9a-zA-Z]+$/); //some ID# contains combination of letters and numbers. ie. LM619765
                if (test) return true;
                else new Error('Please enter letters and numbers only!');
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the email of the Manager: ',
            validate: input => {
                const test = input.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                if (test) return true;
                else new Error('Please enter a valid email address!');
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the office number: ',
            // validate: input => {
            //     const test = input.match(/^[0-9]+$/);
            //     if (test) return true;
            //     else new Error('Please enter letters and numbers only!');
            // }
        },
    ]);

    const managerArray = new Manager(qManager.managerName, qManager.gender, qManager.id, 'Manager', qManager.email, qManager.officeNumber);
    console.log(qManager.officeNumber);

    console.log(managerArray);
    storeToArray.push(managerArray);
    console.log(storeToArray);
};


async function addEngineer() {

    const qEngineer = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Engineer: ',
        validate: input => {
            const test = input.match(/^[a-zA-Z][a-zA-Z\s]*$/);
            if (test) return true;
            else new Error('Plese enter letters only!');
        }
    },
    {
        type: 'list',
        name: 'gender',
        message: 'Please choose a gender: ',
        choices: ['Male', 'Female', 'do not want to provide']
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the ID number: ',
        validate: input => {
            const test = input.match(/^[0-9a-zA-Z]+$/); //some ID# contains combination of letters and numbers. ie. LM619765
            if (test) return true;
            else new Error('Please enter letters and numbers only!');
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email: ',
        validate: input => {
            const test = input.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            if (test) return true;
            else new Error('Please enter a valid email address!');
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the Github user name: ',
        validate: input => {
            const test = input.match(/^[0-9a-zA-Z]+$/); //github users name only contains letters and numbers.
            if (test) return true;
            else new Error('Please enter letters and numbers only!');
        }
    }]);
    const engineerArray = new Engineer(qEngineer.name, qEngineer.gender, qEngineer.id, 'Engineer', qEngineer.email, qEngineer.github);
    storeToArray.push(engineerArray);
    optionTeam();

};

async function addIntern() {

    const qIntern = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Intern: ',
        validate: input => {
            const test = input.match(/^[a-zA-Z][a-zA-Z\s]*$/);
            if (test) return true;
            else new Error('Plese enter letters only!');
        }
    },
    {
        type: 'list',
        name: 'gender',
        message: 'Please choose a gender: ',
        choices: ['Male', 'Female', 'do not want to provide']
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the ID number: ',
        validate: input => {
            const test = input.match(/^[0-9a-zA-Z]+$/); //some ID# contains combination of letters and numbers. ie. LM619765
            if (test) return true;
            else new Error('Please enter letters and numbers only!');
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email: ',
        validate: input => {
            const test = input.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
            if (test) return true;
            else new Error('Please enter a valid email address!');
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the school: ',
        validate: input => {
            const test = input.match(/^[a-zA-Z][a-zA-Z\s]*$/);
            if (test) return true;
            else new Error('Plese enter letters only!');
        }
    }]);
    const internArray = new Intern(qIntern.name, qIntern.gender, qIntern.id, 'Intern', qIntern.email, qIntern.school);
    storeToArray.push(internArray);
    optionTeam();
};

async function optionTeam() {
    const qTeam = await inquirer.prompt([
        {
            type: 'list',
            name: 'optionEmp',
            message: 'Add a team members',
            choices: ['Engineer', 'Intern', 'Quit']
        },
    ]);
    switch (qTeam.optionEmp) {
        case 'Engineer': await addEngineer();
            break;
        case 'Intern': await addIntern();
            break;
        default: console.log(storeToArray);
            break;
    }

}




function generateHTML(name, gender, id, tittle, email, officeNumber) {


    if (gender === 'Male') {
        img = 'lib/img/manager1.png';
    }
    else if (gender === 'Female') {
        img = "lib/img/manager2.png";
    }
    else img = "lib/img/uknown.png";

    const createHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://fontawesome.com/v4.7.0/path/to/font-awesome/css/font-awesome.min.css">
    
        <title>Github Discovery</title>
        <style>
            body {
                background-color: #99e6b3;
                color: white;

            }

            #top-card {
                padding-top: 70px;
                width: 50%;

            }

            #middle-card {
                padding-top: 20px;
                padding-bottom: 20px;
            }

            .card-body,
            .card {
                background-color: orange;
                border: solid 5px white;
                border-radius: 15px;
                text-align: left;
            }

            #photo {
                height: 250px;
                width: 250px;
                padding-right: 20px;
            }

            #photo2 {
                height: auto;
                width: 70%;
                padding-right: 20px;
                align-items: center;
            }

            #info {
                padding-left: 20px;
                padding-top: 10px;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container text-center" id="top-card">
            <div class="card">
                <div class="card-body">
                    <div class="row">

                        <div class="col-sm-12 col-md-6">
                            <img src="${img}" class="img-responsive img-circle" id="photo">
                        </div>
                        <div class="col-sm-12 col-md-6" id="info">
                            <h1>${tittle}</h1>
                            <h4>Name: ${name}</h4>
                            <p class="setting">ID: ${id}</p>
                            <p class="setting">Email: ${email}</p>
                            <p class="setting">Office Number: ${officeNumber}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="container text-center">
            <div class="row" id="middle-card">
                <div class="insert">
                </div>
            </div>
        </div>
    </body>
    
    </html>`;

    /*
    writeFiles("main.html", createHTML, function (err) {
        if (err) {
            return console.error(err);
        }
    });
    //toPDF();
    */
}


function engineerDiv() {
    if (gender === 'Male') {
        img = 'lib/img/manager1.png';
    }
    else if (gender === 'Female') {
        img = "lib/img/manager2.png";
    }
    else img = "lib/img/uknown.png";

    const createEngineer =
        `<div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <img src="${img}" class="img-responsive img-circle" id="photo2">
                <p class="setting">${role}</p>
                <p class="setting">Name: ${name}</p>
                <p class="setting">ID: ${id}</p>
                <p class="setting">Email: ${email}</p>
                <p class="setting">Github username: ${gitUserName}</p>
            </div>
        </div>
    </div>`;

}




async function toPDF() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(`file://${resolve(__dirname, `../templates/main.html`)}`, { waitUntil: `networkidle0` });
    const pdf = await page.pdf({ path: `../output/main.pdf`, format: 'A4', printBackground: true });

    await browser.close();
    return pdf
}


module.exports = {
    enterPrompt, addManager, optionTeam, addEngineer, addIntern
};
