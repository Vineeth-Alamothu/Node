const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('I am Vineeth');
});

app.listen(1000, () => {
    console.log('Server is running on port 1000');
});