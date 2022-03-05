INSERT INTO department (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 4),
('Account Manager', 160000, 5),
('Accountant', 125000, 6),
('Legal Team Lead', 250000, 7),
('Laywer', 190000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Smith', 1, 101),
('Mike', 'Chan', 2, 102),
('Ashely', 'Rodriguez', 3, 103),
('Kevin', 'Tupik', 4, 104),
('Kunal', 'Singh', 5, 105),
('Sarah', 'Lourd', 6, 106);

