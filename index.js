const fs = require ('fs')
const inquirer = require ('inquirer')

const questions = [
    {
        type: 'input',
        message: 'What is the managers name?',
        name: 'managerName'
    },

    {
        type: 'input',
        message: 'What is the managers employee ID?',
        name: 'managerID'
    },

    {
        type: 'input',
        message: 'What is the managers email address?',
        name: 'managerEmail'
    },

    {
        type: 'input',
        message: 'What is the managers office number?',
        name: 'managerOffice'
    },

    {
        type: 'confirm',
        message: 'Are you done building your team?',
        
    },

    {
    type: 'list',
    message: 'What would you like to do next?',
    name: 'breakOne',
    choices: ['Add an engineer', 'Add an intern', 'Finish building team'],


    }
]
