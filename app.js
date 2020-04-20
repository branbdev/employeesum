const Manager = require("./Develop/lib/manager");
const Engineer = require("./Develop/lib/engineer");
const Intern = require("./Develop/lib/intern");
const render = require("./Develop/lib/htmlrenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");​
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");​




const questions = [{
        type: 'input',
        name: 'foo',
        question: 'what is foo?'
    },
    {
        type: 'input',
        name: 'foo',
        question: 'what is foo?'
    },
    {
        type: 'input',
        name: 'foo',
        question: 'what is foo?'
    },
    {
        type: 'input',
        name: 'foo',
        question: 'what is foo?'
    },
    {
        type: 'input',
        name: 'foo',
        question: 'what is foo?'
    }
]