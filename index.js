const inquirer = require('inquirer');
const fs = require('fs');

// importing Manager, Engineer, and Intern classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// setting an empty array to push the teamData to so that it's not overwritten
let teamData = [];

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const generateManager = () => {


    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your Manager's name:",
            validate: mName => {
                if (mName) {
                    return true;
                } else {
                    console.log('Please enter a Manager name.')
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter your manager's employee ID:",
            validate: mId => {
                if (mId) {
                    return true;
                } else {
                    console.log('Please enter a Manager employee ID.');
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your Manager's email:",
            validate: mEmail => {
                if (mEmail) {
                    return true;
                } else {
                    console.log('Please enter a Manager email.')
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Please enter your Manager's office number:",
            validate: mOfficeNum => {
                if (mOfficeNum) {
                    return true;
                } else {
                    console.log('Please enter a Manager office number.');
                }
            }
        }, 
        {
            type: 'confirm',
            name: 'confirmEmployees',
            message: 'Would you like to add an Employee to your team?',
            default: true
        }
    ])
    .then(managerData => {
        const { name, id, email, officeNum, confirmEmployees } = managerData;
        const manager = new Manager (name, id, email, officeNum);

        if (confirmEmployees === true) {
            teamData.push(manager)
            addEmployee()
                .then(employeeData => {
                    // write to HTML file
                })
        } else {
            teamData.push(manager);
            return teamData;
        }
    })
}

const addEmployee = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'title',
            message: "Please choose your Employee's title:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's name!")
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's id:",
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log("Please enter the Employee's ID!");
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Employee's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's email.");
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineer's Github username:",
            when: (input) => input.title === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else { 
                    console.log("Please enter the Engineer's Github username!");
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Intern's school:",
            when: (input) => input.title === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confAddEmployee',
            message: 'Would you like to add more employees to your Team?',
            default: false
        }
    ])
    .then(employeeData => {

        let { name, id, email, title, github, school, confAddEmployee } = employeeData;
        let employee;

        if (title === 'Engineer') {
            employee = new Engineer (name, id, email, github);

        } else if (title === 'Intern') {
            employee = new Intern (name, id, email, school)
        }

        teamData.push(employee);

        if (confAddEmployee) {
            return addEmployee(teamData);
        } else {
            return teamData;
        }
    })
}

generateManager()
    // returns HTML with just the manager if the user opts to not include any additional employees (acceptance criteria called for a finish building team BEFORE adding members)
    .then(managerData => {
        console.log(managerData);
        // write to HTML file
    })

    






