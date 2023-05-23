// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown =require(".utils/generateMarkdown");

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your project about?',
        name: 'description',
      },
      {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: [
            "MIT",
            "Apache",
            "Mozilla Public",
            "Boost Software",
            "The Unlicense",
        ]
      },
      {
        type: 'input',
        message: 'What is the installation process for this project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How do you use this project?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers){
        console.log("answers", answers)
        const page = generateMarkdown(answers)
        console.log(page)
    })
}
function generateMarkdown(data) {
    console.log("data", data)
    return `# ${data.title}
    # ${data.description}
  
  `;
  }
// Function call to initialize app
init();
