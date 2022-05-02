const inquirer = require("inquirer");
const Employee = require('../lib/employee.js');
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");


const employees = [];

// Functions for each User Input

function inputManager() {
    inquirer.prompt([
    {
        type: "input",
        message: "What is your team manager's name?",
        name: "managerName"
    }, {
        type: "input",
        message: "What is your team manager's employee id?",
        name: "managerTag"
    }, {
        type: "input",
        message: "What is their email address?",
        name: "managerEmail"
    }, {
        type: "input",
        message: "What is their office number?",
        name: "managerNumber"
    },     
]}
.then(function(data) {
    const manager = new Manager(data.managerName, data.managerTag, data.managerEmail, data.managerNumber);
    employees.push(manager);
})


// TODO: Create an array of questions to input team members.
const questions = [{
    type: "input",
    message: "What is your team manager's name?",
    name: "Name"
}, {
    type: "input",
    message: "What is your team manager's employee id?",
    name: "Tag"
}, {
    type: "input",
    message: "What is their email address?",
    name: "Email"
}, {
    type: "input",
    message: "What is their office number?",
    name: "Number"
}, {
    type: "list",
    message: "Great Job! Time to add an Engineer, Intern or Finish Building Team  ",
    choices: ["Engineer", "Intern", "Finish Team"]
}, {
    type: "input",
    message: "What is their office number?",
    name: "Number"
}, {
    type: "input",
    message: "What is their office number?",
    name: "Number"
}, {
    type: "input",
    message: "What is their office number?",
    name: "Number"
},
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err)
        } else {
            console.log("File Created!")
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
        })
}

// Function call to initialize app
init();
