// const connection = require('./config/connection');
const mysql = require('mysql2');
const inquirer = require('inquirer'); 
const cTable = require('console.table'); 
const db = require('./db');
const colors = require('colors');




  
const initApp = () => {
    console.log('Hello, Welcome to Employee Tracker App. Please select from one of the options below to get started.'.rainbow);
    startPrompts();
}

const startPrompts = () => {
    inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    {
                        name: 'View all departments',
                        value: 'viewDepartments',
                    },
                    {
                        name: 'View all roles',
                        value: 'viewAllRoles',
                    },
                    {
                        name: 'View all employees',
                        value: 'viewAllEmployees',
                    },
                    {
                        name: 'Add a department',
                        value: 'addADepartment',
                    },
                    {
                        name: 'Add a role',
                        value: 'addARole',
                    },
                    {
                        name: 'Add a employee',
                        value: 'addAEmployee',
                    },
                    {
                        name: 'Update an employee role',
                        value: 'updateAnEmployeeRole',
                    },
                    {
                        name: 'Update an employee manager',
                        value: 'updateAnEmployeeManager',
                    },
                    {
                        name: 'View employees by department',
                        value: 'viewEmployeeByDepartment',
                    },
                    {
                        name: 'Delete a department',
                        value: 'deleteADepartment',
                    },
                    {
                        name: 'Delete a role',
                        value: 'deleteARole',
                    },
                    {
                        name: 'Delete an employee',
                        value: 'deleteAnEmployee',
                    },
                    {
                        name: 'View all deparment budgets',
                        value: 'viewAllDeparmentBudgets',
                    },
                    {
                        name: 'Quit',
                        value: 'quit',
                    },
                ],
            },
    ]).then(answer => {
        switch(answer.choice) {
            case 'viewDepartments':
                viewAllDepartments();
                break;
            case 'viewAllRoles':
                viewAllRoles();
                break;
            case 'viewAllEmployees':
                viewAllEmployees();
                break;
            case 'addADepartment':
                addADepartment();
                break;
            case 'addARole':
                addARole();
                break;
            case 'addAEmployee':
                addAEmployee();
                break;
            case 'updateAnEmployeeRole':
                updateAnEmployeeRole();
                break;
            case 'updateAnEmployeeManager':
                updateAnEmployeeManager();
                break;
            case 'viewEmployeeByDepartment':
                viewEmployeeByDepartment();
                break;
            case 'deleteADepartment':
                deleteADepartment();
                break;
            case 'deleteARole':
                deleteARole();
                break;
            case 'deleteAnEmployee':
                deleteAnEmployee();
                break;
            case 'viewAllDeparmentBudgets':
                viewAllDeparmentBudgets();
                break;
            default: 
                quit();                                           
        }
        // if (answer.option === "viewDepartments") {
        //     db.query('SELECT * FROM departments', function (err, results) {
        //         console.table(results);
        //     })
        // }
        // startPrompts();
    })
};

// view all departments 

// view all roles

// view all employees

// add a department

// update an employee role
const quit = function () {
    process.exit();
}
initApp();