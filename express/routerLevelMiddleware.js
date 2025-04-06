const express = require("express");
const reqFilter = require("./middleware");

const app = express();

const router = express.Router();

router.use(reqFilter);

// Middleware to filter for a single route

// app.get("/", reqFilter, (req, res) => {
//   res.send("This is our home page");
// });


app.get("/", (req, res) => {
  res.send("This is our home page");
});

// middleware to filter for multiple routes
router.get("/about", (req, res) => {
  res.send("This is our about page");
});

router.get("/contact", (req, res) => {
  res.send("This is our contact page");
});

app.use("/", router);

app.listen(1000, () => {
  console.log("Server is running on port 1000");
});
