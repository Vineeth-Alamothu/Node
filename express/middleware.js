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

module.exports = reqFilter;