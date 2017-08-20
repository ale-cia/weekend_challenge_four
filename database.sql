CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    job_title VARCHAR(40) NOT NULL,
    employees_salary FLOAT NOT NULL
);

SELECT SUM (employees_salary) FROM employees;

