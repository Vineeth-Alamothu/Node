const express = require("express");

const app = express();

const reqFilter = (req, res, next) => {
    const salary = req.query.salary;
    if(!salary){
        res.send("Salary is not provided");
    }
    else if(salary < 50000){
        res.send("Salary is less than 50000");
    }
    else{
        next();
    }
}

app.use(reqFilter);
app.get("/", (req, res) => {
  res.send("This is our middleware tutorial in ExpressJS");
});

app.get("/about", (req, res) => {
  res.send("This is our about page");
});

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});
