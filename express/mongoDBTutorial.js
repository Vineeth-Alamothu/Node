const express = require('express');
const connectDB = require('./db/db_connection');

const app = express();

connectDB();

const user = require('./models/userModel');

const addUser = async () => {
    await user.create({
        name: "Vineeth",
        email: "vineeth@gmail.com"
    });
}

addUser();

app.listen(1000, () => console.log("Server started at port 1000"));