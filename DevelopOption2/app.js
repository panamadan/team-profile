// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer")
const fs = require("fs");
const engineerCard = require("./htmlRender/engineerCard");
const internCard = require("./htmlRender/internCard");
const managerCard = require("./htmlRender/managerCard");
const mainRender = require("./htmlRender/mainRender");


const outputPath = path.resolve(__dirname, "output", "team.html");

let teamMember = {};
let allTeamMemeber = [];


function mainApp() {
    // create a manager
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is your manager's id?",
                name: "managerId"
            },
            {
                type: "input",
                message: "What is your manager's email?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "What is your manager's Office Number?",
                name: "managerNumber"
            },


        ])
        .then(answers => {
            const { managerName, managerId, managerEmail, managerNumber } = answers
            const managerObj = new Manager(managerName, managerId, managerEmail, managerNumber)
            const managerCardhtml = managerCard(managerObj)
            teamMember.push(managerCardhtml)
            createTeam();
        })

}
// this function create a list to add teammembers
function createTeam() {

    inquirer
        .prompt([

        ])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team

        })
}

// a function that create an engineer
function getEngineer() {

    inquirer
        .prompt([


        ])
        .then(answers => {

        })

}
// a function that create an intern
function getIntern() {

    inquirer
        .prompt([


        ])
        .then(answers => {

        })

}

function buildTeam() {
    fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()


