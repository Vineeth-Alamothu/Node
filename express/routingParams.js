const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    if(name && age){
        res.send(`Hello ${name} of age ${age}`);
    }
    else if(name){
        res.send(`Hello ${name}`);
    }
    else{
        res.send('Routing parameters');
    }
})

app.listen(1000, () => {
    console.log('Server is running on port 1000');
})