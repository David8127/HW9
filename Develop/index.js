// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What do you want your README file to be named?",
        name: "fileName"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "How would you describe your project?",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license is your project?",
        name: "license",
        choices: [
            {name: 'MIT', value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
            {name: 'ISC', value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"},
            {name: 'Boost', value: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"},
            {name: 'Apache', value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"},
            {name: 'Mozilla', value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"},
            {name: 'None', value: false}
        ]
    },
    {
        type: "input",
        message: "Describe how to install and initiate your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide inscructions and examples for use. You can include screenshots as needed after the README file is rendered",
        name: "usage"
    },
    {
        type: "input",
        message: "List any collaborators you had for this project, including links to their GitHub profiles.",
        name: "contributing"
    },
    {
        type: "input",
        message: "Write tests for you application here.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
        .then(response => {
            const md = generateMarkdown(response)
            writeToFile(`${response.fileName}.md`, md)
        })
}

// Function call to initialize app
init();
