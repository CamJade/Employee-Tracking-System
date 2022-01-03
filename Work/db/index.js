//move sql queries into this folder to better organize
//add connection to db
const connection = require("./connection");

class sql {
    constructor(connection) {
        this.connection = connection;
      }

    createDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
      }

      createRole(role) {
        return this.connection.promise().query("INSERT INTO role SET ?", role);
      }
      createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
      }
      deleteDepartment(departmentId) {
        return this.connection.promise().query(
          "DELETE FROM department WHERE id = ?", departmentId);
      }
      deleteEmployee(employeeId) {
        return this.connection.promise().query(
          "DELETE FROM employee WHERE id = ?", employeeId
        );
      }
};

module.exports = new sql(connection);