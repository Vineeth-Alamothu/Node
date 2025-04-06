const express = require('express');
const path = require('path');
const app = express();

const staticPath = path.join(__dirname, 'public'); 

console.log(staticPath);
app.use(express.static(staticPath));


app.listen(1000, () =>{
    console.log('Server is running on http://localhost:1000');
})