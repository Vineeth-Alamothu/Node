const http = require('http');

// creating server with anonymous function

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("<h2>Hello World</h2>");
//     res.end();
// }).listen(1000)  


// using function as a parameter
const sayHello = (req, res) => {
    res.write("Hello World from sayHello function");
    res.end();
}

http.createServer(sayHello).listen(1000);