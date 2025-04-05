// built in functions are called as core modules
// two types of modules
// 1. global modules -- console
// 2. non global modules -- file system, http, url, etc.
// 3. external modules -- installed using npm like express, mysql, etc.

const myFile = require('fs'); // importing file system module

console.log("Node core modules"); // logging to console

myFile.writeFileSync("coremodules.txt", "Nodejs core modules Tutorial"); // writing to file
