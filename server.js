const connection = require('./config/connection');
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
                        value: 'Update an employee role',
                    },
                    {
                        name: 'Update an employee manager',
                        value: 'Update an employee manager',
                    },
                    {
                        name: 'View employees by department',
                        value: 'View employees by department',
                    },
                    {
                        name: 'Delete a department',
                        value: 'Delete a department',
                    },
                    {
                        name: 'Delete a role',
                        value: 'Delete a role',
                    },
                    {
                        name: 'Delete an employee',
                        value: 'Delete an employee',
                    },
                    {
                        name: 'View all deparment budgets',
                        value: 'View all deparment budgets',
                    },
                    {
                        name: 'Quit',
                        value: 'Quit',
                    },
                ],
            },
    ]).then(answer => {
        if (answer.option === "viewDepartments") {
            db.query('SELECT * FROM departments', function (err, results) {
                console.table(results);
            })
        }
        startPrompts();
    })
};

// view all departments 

// view all roles

// view all employees

// add a department

// update an employee role
initApp();