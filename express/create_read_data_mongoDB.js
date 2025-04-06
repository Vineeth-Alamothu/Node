const express = require('express');
const connectDB = require('./db/db_connection');

const Employee = require('./models/employeeModel');

const app = express();

connectDB();

const addEmployee = async () => {
    await Employee.create({
        name: "Vineeth",
        email: "vineeth@gmail.com",
        position: "Software Engineer",
        department: "IT",
    });
}

addEmployee();

const getEmployees = async () => {
    const employees = await Employee.find();
    console.log(employees);
}

getEmployees();


app.listen(1000, () => {
    console.log("Server is running on port 1000");
}
);