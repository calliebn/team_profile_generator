const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

const addEmployee = employeeInfo => {
    //html string for employee cards
    let allCards = '';

    employeeInfo.forEach(employee => {
        const { firstName, lastName, id, role } = employee;
        let newEmployee = '';
        let uniqueInfo = '';

        switch (role) {
            case 'Manager':
                newEmployee = new Manager(firstName, lastName, id, employee.officeNumber);
                uniqueInfo = newEmployee.getOfficeNumber();
                break;

            case 'Engineer':
                newEmployee = new Engineer(firstName, lastName, id, employee.github);
                uniqueInfo = newEmployee.getGithub();
                break;

            case 'Intern':
                newEmployee = new Intern(firstName, lastName, id, employee.school);
                uniqueInfo = newEmployee.getSchool();
                break;

            default:
                newEmployee = new Employee(firstName, lastName, id);
        };

        allCards += `
        <div class="column is-one-quarter-desktop">
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    ${newEmployee.getIcon()}
                </div>
                <div class="media-content">
                    <p class="title is-4">${newEmployee.getName()}</p>
                    <p class="subtitle is-6">${newEmployee.getRole()}</p>
                </div>
            </div>
            <div class="content">
                <p>${newEmployee.getId()}<br />
                ${newEmployee.getEmail()}<br />
                ${extraInfo}</p>
            </div>
        </div>
    </div>
</div>`
    })
    return allCards;
};

const pageGenerator = pageData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />
    </head>
    <body>
        <section class="hero is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">My Team</h1>
                </div>
            </div>
        </section>
        <main class="m-6">
            <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                ${addEmployee(pageData)}
            </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = pageGenerator;