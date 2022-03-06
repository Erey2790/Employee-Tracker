

INSERT INTO department (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 150000, 1),
    ('Salesperson', 90000, 1),
    ('Lead Engineer', 110000, 2),
    ('Software Engineer', 100000, 2),
    ('Account Manager', 120000, 3),
    ('Accountant', 155000, 3),
    ('Legal Team Lead', 150000, 4),
    ('Lawyer', 130000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Bart', 'Doe', 1, NULL),
    ('Mike', 'Simpson', 2, 1),
    ('Alex', 'Rodriguez', 3, NULL),
    ('Kevin', 'Sweat', 4, 3),
    ('Colin', 'Singh', 5, NULL),
    ('James', 'Brown', 6, 2),
    ('Sarah', 'Torres', 7, NULL),
    ('Tom', 'Riddle', 8, 3);

