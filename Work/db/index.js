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
};

module.exports = new sql(connection);