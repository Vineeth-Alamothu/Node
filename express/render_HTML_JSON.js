const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
        <input type="text" id="input" placeholder="Enter something">
        <br/>
        <a href="/contact" id="button">go to contact us page</a>
        <br/>
        <a href="/about" id="button">go to about us page</a>
        `);
});

app.get("/contact", (req, res) => {
  res.send(`<h2>Contact Us</h2>`);
});

app.get("/about", (req, res) => {
  res.send([
    {
      name: "John Doe",
      age: 30,
    },
    {
      name: "Jane Doe",
      age: 25,
    },
  ]);
});

app.listen(1000, () => {
  console.log("Server is running on http://localhost:1000");
});
