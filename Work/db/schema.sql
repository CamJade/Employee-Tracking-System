--set up database
DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;
USE business_db;

--set up tables(departments, roles, employees)
DROP TABLE IF EXISTS department;
CREATE TABLE department (
    name VARCHAR(30) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
);

DROP TABLE IF EXISTS role;
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, --role id primary key
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL, --role department_id foreign key
    FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE SET NULL,
    FOREIGN KEY (manager_id) 
        REFERENCES employee(id)
        ON DELETE SET NULL
);