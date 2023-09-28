const gen = require('./utils/generateMarkdown.js');
const fs = require("fs");
const inquirer = require("inquirer");

// Creating an array of quetions for inquirer
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
        choices: ['none','MIT', 'Apache-2.0', 'CDDL-1.0', 'GPL-2.0'],
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

// A function to handle the writing of the Readme data to a file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Successfully created README.md") );
}

// A function to initialize the application
function init() {
    // Launch inquirer
    inquirer.prompt(questions).then((answers) => {
       const data = gen.generateMarkdown(answers);
        // write to file
       writeToFile('./output/README2.md', data);
})
}

// Function call to initialize app
init();
