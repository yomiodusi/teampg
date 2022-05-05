const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const fs = require('fs');
const render = require("./src/render")



const employees = [];
// send to browser


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
])
.then(function(data) {
    const manager = new Manager(data.managerName, data.managerTag, data.managerEmail, data.managerNumber);
    employees.push(manager);
    joinTeam();
});
}

function inputEngineer() {
    inquirer.prompt([
    {
        type: "input",
        message: "What is your team engineer's name?",
        name: "engineerName"
    }, {
        type: "input",
        message: "What is your team engineer's employee id?",
        name: "engineerTag"
    }, {
        type: "input",
        message: "What is their team engineer's email address?",
        name: "engineerEmail"
    }, {
        type: "input",
        message: "What is your team engineer's github username?",
        name: "engineerGithub"
    },     
])
.then(function(data) {
    const engineer = new Engineer(data.engineerName, data.engineerTag, data.engineerEmail, data.engineerGithub);
    employees.push(engineer);
    joinTeam();
});
}

function inputIntern() {
    inquirer.prompt([
    {
        type: "input",
        message: "What is your team intern's name?",
        name: "internName"
    }, {
        type: "input",
        message: "What is your team intern's employee id?",
        name: "internTag"
    }, {
        type: "input",
        message: "What is their team intern's email address?",
        name: "internEmail"
    }, {
        type: "input",
        message: "What is your team intern's school?",
        name: "internSchool"
    },     
])
.then(function(data) {
    const intern = new Intern(data.internName, data.internTag, data.internEmail, data.internSchool);
    employees.push(intern);
    joinTeam();
});
}

function joinTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "addingMember",
            message: "Welcome! Which Team Member would you like to add?",
            choices: [ "Manager", "Engineer", "Intern", "TeamComplete" ]
        },     
    ])
    .then(function(data) {
        console.log(employees)
        if (data.addingMember === "Manager") {
            inputManager()
        } else if (data.addingMember === "Engineer") {
            inputEngineer()
        } else if (data.addingMember === "Intern") {
            inputIntern()    
        } else if (data.addingMember === "Team Complete") {
            teamComplete()       
        }
    });
}
joinTeam()

// // TODO: Create a function to write completed array 
function teamComplete() {
    fs.writeFile("./dist/teampg.html",render(employees), "utf-8", function(err) {
        if (err) {
            return console.log(err)
        } else {
            console.log("Your Team has been made!")
        }
    })

}


init();
