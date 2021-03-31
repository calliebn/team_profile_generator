const fs = require('fs')
const inquirer = require('inquirer')
const pageGenerator = require('./src/template.js')
const allEmployees = [];

const questions = [
    {
        type: 'list',
        message: 'What is the employee\'s role?',
        name: 'role',
        choices: () => {
            if (allEmployees.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },

    {
        type: 'input',
        message: 'What is their first name?',
        name: 'firstName'
    },

    {
        type: 'input',
        message: 'What is their last name?',
        name: 'lastName'
    },

    {
        type: 'input',
        message: 'What is their ID number?',
        name: 'id'
    },

    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'What is the Engineer\'s GitHub username?',
        name: 'github',
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'school',
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            }else {
                return false;
            }
        }
    },

    {
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'addEmployee',
        default: true
    }
]

const promptUser = () => {
    return inquirer.prompt(questions)
        .then(userResponse => {

            allEmployees.push(userResponse);

            if (userResponse.addEmployee) {
                return promptUser();
            } else {
                return allEmployees;
            };
        });
};

const writeProfile = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log('Team profile created');
    });
};

console.log(`Let's create a team!`);

promptUser()
    .then(data => pageGenerator(data))
    .then(generatedHTML => writeProfile(generatedHTML))
    .catch(err => console.log(err));