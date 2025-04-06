const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/welcome', (req, res) => {
    const empInfo = {
        name: 'John Doe',
        age: 30,
        position: 'Software Engineer'
    }
    res.render('Welcome', {empInfo});
});

app.listen(1000, () => {
    console.log('Server is running on port 1000');
});