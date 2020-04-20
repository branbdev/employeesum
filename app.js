const Manager = require('./Develop/lib/manager');
const Engineer = require('./Develop/lib/engineer');
const Intern = require('./Develop/lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require('./Develop/lib/htmlrenderer');


const roster = [];

function createRoster() {
    inquirer
        .prompt([{
            type: "list",
            name: "userChoice",
            message: "Are you a(n):",
            choices: ["Manager", "Engineer", "Intern", "Roster is full!"]

        }]).then(memberChoice => {
            switch (memberChoice.userChoice) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Roster is full!":
                    render(roster);
                    break
            }
        })

    function addManager() {
        inquirer
            .prompt([{
                    type: "input",
                    name: "managerName",
                    message: "What is your first name?"

                },

                {
                    type: "input",
                    name: "managerID",
                    message: "What is your employee ID?"
                },

                {
                    type: "input",
                    name: "managerEmail",
                    message: "What is your email?"
                },

                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your office number?"
                }

            ]).then(userChoice => {
                console.log(userChoice);
                const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.officeNumber)

                roster.push(manager)

                createRoster();
            })
    }

    function addEngineer() {
        inquirer
            .prompt([{
                    type: "input",
                    name: "engineerName",
                    message: "What is your first name?"

                },

                {
                    type: "input",
                    name: "engineerID",
                    message: "What is your employee ID?"
                },

                {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is your email?"
                },

                {
                    type: "input",
                    name: "github",
                    message: "What is your Github username?"
                }

            ]).then(userChoice => {
                console.log(userChoice);
                const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.github)

                roster.push(engineer)

                createRoster();
            })
    }

    function addIntern() {
        inquirer
            .prompt([{
                    type: "input",
                    name: "InternName",
                    message: "What is your first name?"

                },

                {
                    type: "input",
                    name: "internID",
                    message: "What is your employee ID?"
                },

                {
                    type: "input",
                    name: "internEmail",
                    message: "What is your email?"
                },

                {
                    type: "input",
                    name: "school",
                    message: "Where did you graduate?"
                }

            ]).then(userChoice => {
                console.log(userChoice);
                const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.school)

                roster.push(intern)

                createRoster();
            })
    }

}

module.exports = roster;

createRoster();