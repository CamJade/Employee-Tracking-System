const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  //port: 3307,  
  user: 'root',
  password: 'Sunflower231109*',
  database: 'business_db'
},
);


connection.connect(error => console.log(error));

module.exports = connection;