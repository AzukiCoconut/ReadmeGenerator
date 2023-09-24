const generator = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project name?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "description",
    },
    {
        type: "input",
        message: "What is the installation instructions?",
        name: "installInstructions",
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usageInfo",
    },
    {
        type: "list",
        message: "Choose a license to include:",
        name: "license",
        choices: ['MIT', 'Apache-2.0', 'CDDL-1.0', 'GPL-2.0'],
    },
    {
        type: "input",
        message: "Please enter contribution guidelines.",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please enter the testing instructions.",
        name: "testing",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {console.log(answers);
});
}

// Function call to initialize app
init();
