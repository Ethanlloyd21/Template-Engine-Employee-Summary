const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const writeFiles = util.promisify(fs.writeFile);
const puppeteer = require('puppeteer');
const { resolve } = require("path");

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

let img;


async function enterPrompt() {

    await addManager();
};

async function addManager() {

    const qManager = await inquirer.prompt[{
        type: 'input',
        name: 'mName',
        message: 'Enter the name of the Manager: '
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
        message: 'Enter the ID number: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the Manager: '
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the office number: '
    }];


    console.log(mName);
    console.log(gender);
    console.log(id);
    console.log(email);
    let manager = new Employee(mName, gender, id, email);
    let managerOffice = new Manager(officeNumber);
    generateHTML(manager.getName(), manager.getGender(), manager.getId(), manager.getEmail(), managerOffice.getofficeNumber());
    optionTeam();

};

async function addEngineer() {

    const qEngineer = await inquirer.prompt[{
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Engineer: '
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
        message: 'Enter the ID number: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email: '
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the Github user name: '
    }];
    optionTeam();

};

async function addIntern() {

    const qIntern = await inquirer.prompt[{
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Intern: '
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
        message: 'Enter the ID number: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email: '
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the school: '
    }];
    optionTeam();
};

async function optionTeam() {
    const qTeam = await inquirer.prompt[{
        type: 'list',
        name: 'optionEmp',
        message: 'Enter your team: ',
        choices: ['Engineer', 'Intern', 'Quit!']
    }];

    switch (optionEmp) {
        case 'Engineer':
            await addEngineer();
            break;
        case 'Intern':
            await addIntern();
            break;
        case 'Quit!':
            console.log('terminating...');
            break;
    }
};




function generateHTML() {

    if (gender === 'Male') {
        img = "../lib/img/manager1.png";
    }
    else if (gender === 'Female') {
        img = "../lib/img/manager2.png";
    }
    else img = "../lib/img/uknown.png";

    const create = `<!DOCTYPE html>
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
    
            .card-body,
            .test-body {
                background-color: orange;
                border: solid 5px white;
                border-radius: 25px;
                text-align: left;
            }
    
            #photo {
                height: 250px;
                width: 250px;
                padding-right: 20px;
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
                            <img src=${img} class="img-responsive img-circle" id="photo">
                        </div>
                        <div class="col-sm-12 col-md-6" id="info">
                            <h1>Manager</h1>
                            <h4>${name}</h4>
                            <p>ID: ${id}</p>
                            <p>Email: ${email}</p>
                            <p>Office Number: ${officeNumber}</p>
                        </div>
    
                    </div>
                </div>
            </div>
            <div class="insert"></div>
    </body>
    
    </html>`;
    writeFiles("../templates/main.html", generateHTML, function (err) {
        if (err) {
            return console.error(err);
        }
    });
    //toPDF();
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
