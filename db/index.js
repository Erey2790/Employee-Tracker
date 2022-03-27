const connection = require('../config/connection');
class DB {
    constructor (connection) {
        this.connection = connection;

    }
findAllDepartments() {
    return this.connection.promise().query(
        'SELECT * FROM department'
    )
}

findViewAllRoles() {
    return this.connection.promise().query(
        'SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department on role.department_id = department.id;'
    )
}

viewAllEmployees() {
    return this.connection.promise().query(
        'SELECT * FROM employee'
    )
}

addADepartment() {
    return this.connection.promise().query(
        'INSERT INTO department (name) values (?)'
    )
}

viewEmployeeByDepartment() {
    return this.connection.promise().query(
        'SELECT employee.first_name, employee.last_name, department.department_name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id'
    )
}

}

module.exports = new DB (connection);

