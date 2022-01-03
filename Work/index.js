

//connect to mysql database and perform queries
const mysql = require('mysql2'); 
//interave with user via command line
const inquirer = require('inquirer'); 
//print mysql rows to console
const cTable = require('console.table'); 
const connection = require('./db/connection');
const sql = require("./db");

connection.connect ((error) => {
    //if (error) throw error;
    //else 
    
    console.log ('Welcome to the Employee Tracking System');
    startPrompt();
});

//async function startPrompt() {
//    await inquirer.prompt([
function startPrompt() {
    inquirer.prompt(
        {
        name: 'choice',
        type: 'list',
        message: 'Please choose an option based on what you would like to do',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Quit'
        ]
    })
    //let compare = await answer() (
    //    const {options} = answer
    
    .then((questionChosen) => {
        const {choice} = questionChosen;

        if (choice === 'View all departments') {
            //console.log('match is working');
            viewDepartments();
        }
        if (choice === 'View all roles') {
            viewRoles();
        }
        if (choice === 'View all employees') {
            viewEmployees();
        }
        if (choice === 'Add a department') {
            addDepartment();
        }
        if (choice === 'Add a role') {
            addRole();
        }
        if (choice === 'Add an employee') {
            addEmployee();
        }
        if (choice === 'Update an employee role') {
            updateEmployee();
        }
        if (choice === 'Quit') {
            connection.end();
        }
    })
};

function viewDepartments() {
    //console.log('its working');
     connection.query('SELECT * FROM department;', (err, results) => {
         if (err) {
             console.log(err);
         };
         console.log('');
         console.log('');
         console.log('');
     console.table(results);
     startPrompt();
   })
   //startPrompt();
};

function viewRoles() {
    connection.query('SELECT * FROM role;', function (err, results) {
        if (err) {
            console.log(err);
        };
        console.log('');
        console.log('');
        console.log('');
    console.table(results);
    startPrompt();
  })
 
};

function viewEmployees() {
    connection.query('SELECT * FROM employee;', function (err, results) {
        if (err) {
            console.log(err);
        };
        console.log('');
        console.log('');
        console.log('');
    console.table(results);
    startPrompt();
  })
 
};

function addDepartment() {
    inquirer.prompt([
        {
          name: "department_name",
          type: "input",
          message: "What Department would you like to add?"
        }
    ]).then(res =>  {
        sql.createDepartment(res)
            .then
                
            
                console.log(`Added ${res.department_name} to the database`)

                startPrompt();
    });
}
    ;

//INSERT INTO role (name, salary, department_id) VALUES (?, ?, ?)
function addRole() {
    
    inquirer.prompt([
        {
          name: "title",
          type: "input",
          message: "What Role would you like to add?"
        },
        {
            name: "salary",
            type: "input",
            message: "Please set the salary for this role."
        },
        {
            name: "department_id",
            type: "list",
            message: "What department does this role belong to?",
            choices: [
                1,
                2,
                3,
                4,
                5,
            ]
        }
    ]).then(res =>  {
        sql.createRole(res)
            .then
                
            
                console.log(`Added ${res.title} to the database`)

                startPrompt();
    });
};

//INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?) `
//prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
function addEmployee() {
    
    inquirer.prompt([
        {
          name: "first_name",
          type: "input",
          message: "Enter employee's first name."
        },
        {
            name: "last_name",
            type: "input",
            message: "Enter employee's last name."
        },
        {
            name: "department_id",
            type: "list",
            message: "What department does this role belong to?",
            choices: [
                1,
                2,
                3,
                4,
                5,
            ]
        }
    ]).then(res =>  {
        sql.createRole(res)
            .then
                
            
                console.log(`Added ${res.title} to the database`)

                startPrompt();
    });
};
