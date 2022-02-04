// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'please describe your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'what type of license would you like to use?',
        choices: ['None', 'MIT', 'Apache', 'Boost']
    },

];

//Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

//Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(userAnswers => {
            console.log('creating your README now')
            writeToFile('NewReadme.md', generateMarkdown({ ...userAnswers }))
        })
}

// Function call to initialize app
init();
