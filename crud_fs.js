const fs = require('fs');

const path = require('path');

const crudPath = path.join(__dirname, 'CRUD');

// console.log(crudPath);

const mypath = `${crudPath}/crud.txt`;

// create
fs.writeFileSync(mypath, "Create, Read, Update, Delete", (err) => {
    if(err) throw err;
    console.log('File created');
});


// read
// fs.readFile(mypath, 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// update
// fs.appendFile(mypath, ' in nodejs', (err) => {
//     if(err) throw err;
//     console.log('Updated');
// });

//delete
// fs.unlink(mypath, (err) => {
//     if(err) throw err;
//     console.log('File deleted');
// });

// rename
// fs.rename(mypath, `${crudPath}/MYCRUD.txt`, (err) => {
//     if(err) throw err;
//     console.log('File renamed successfully');
// });

