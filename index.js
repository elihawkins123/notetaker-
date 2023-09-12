// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const fs=require("fs")
const generateMarkdown=require("./utils/generateMarkdown")
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// TODO: Create an array of questions for user input
const questions = [{
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },{
        type: 'input',
        name: 'description',
        message: 'what is the description?'
    },{
        type: 'input',
        name: 'installation_instructions',
        message: 'What are the installation instructions?'
    },{
        type: 'input',
        name: 'usage_information',
        message: 'What is the usage information?'
    },{
        type: 'input',
        name: 'contribution_guidelines',
        message: 'What are the contribution guidelines?'
    },{
        type: 'input',
        name: 'testing_instructions',
        message: 'What are the testing instructions?'
    },{
        type: 'list',
        message: 'What is your license?',
        name: 'license',
        choices: ['Apache', 'MIT', 'Perl'],
      },{
        type: 'input',
        name: 'Github_username',
        message: 'What is your git hub username?'
      },{
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response=>{
        writeToFile("README.md",response)
    })
}

// Function call to initialize app
init();
