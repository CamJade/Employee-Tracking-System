--pre-populate database
USE business_db;

INSERT INTO department (name, id)
    VALUES ('Marketing', 1),
           ('Operations', 2),
           ('Finance', 3),
           ('Sales', 4),
           ('Human Resource', 5);

INSERT INTO role (id, title, salary, department_id)
    VALUES (15, 'Executive', 90000, 1),
           (16, 'Manager', 80000, 1),
           (17, 'Specialist', 70000, 1),
           (18, 'Analyst', 65000, 1),
           (19, 'Representative', 60000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) --id should auto increment
    VALUES ('Michael', 'Scott', 16, 7),
           ('Dwight', 'Schrute', 17, 8),
           ('Pam', 'Beesly', 19, NULL),
           ('Jim', 'Halpert', 16, 9),
           ('Angela', 'Martin', 18, NULL);