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
            {
                type: "list",
                message: [
                    "engineer",
                    "intern",
                    "build team"],
                name: "teamMembers",
            }

        ])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team
            switch(answers.choice)
            {
                case "enginneer": getEngineer()
                
                    break;
            
                case "intern": getIntern()
                    
                    break;
            
                case "build team": buildTeam()
                    ;
            
            }
        })
}

// a function that create an engineer
function getEngineer() {

    inquirer
        .prompt([

            {
                type: "input",
                message: "What is your engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is your engineer's id?",
                name: "engineerId"
            },
            {
                type: "input",
                message: "What is your engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is your engineer's GitHub?",
                name: "engineerGithub"
            },
        ])
        .then(answers => {
            const { engineerName, engineerId, engineerEmail, engineerNumber } = answers
            const engineerObj = new Engineer(engineerName, engineerId, engineerEmail, engineerNumber)
            const engineerCardhtml = engineerCard(engineerObj)
            teamMember.push(engineerCardhtml)
            createTeam();
        })

}
// a function that create an intern
function getIntern() {

    inquirer
        .prompt([

            {
                type: "input",
                message: "What is your intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is your intern's id?",
                name: "internId"
            },
            {
                type: "input",
                message: "What is your intern's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is your intern's school?",
                name: "internSchool"
            },

        ])
        .then(answers => {
            const { internName, internId, internEmail, internNumber } = answers
            const internObj = new Intern(internName, internId, internEmail, internNumber)
            const internCardhtml = internCard(internObj)
            teamMember.push(internCardhtml)
            createTeam();

        })

}

function buildTeam() {
    fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()


