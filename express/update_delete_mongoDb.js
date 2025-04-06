const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

const getEmployees = async () => {
    const employees = await Employee.find();
    console.log(employees, 'All employees');
}


const updateEmployee = async (id, updatedData) => {
    const result = await Employee.updateOne({ _id: id }, { $set: updatedData });
    console.log(result.nModified === 0 ? `No employee found with that ${id}` : 'Employee updated successfully updated');
}


const deleteEmployee = async (id) => {
    const result = await Employee.deleteOne({ _id: id });
    console.log(result.deletedCount === 0 ? `No employee found with that ${id}` : 'Employee deleted successfully');
}

const main = async () => {
    await getEmployees();

    const employeeId = '67f2ca048df5032fcc4c0070';
    const updatedData = {
        position: 'Senior Developer',
        department: 'Engineering',
    };

    await updateEmployee(employeeId, updatedData);
    await getEmployees();

    await deleteEmployee(employeeId);
    await getEmployees();
}

main();

app.listen(1000, () => {
    console.log('Server is running on port 1000');
});