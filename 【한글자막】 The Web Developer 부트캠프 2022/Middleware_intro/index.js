const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("common"));

app.use((req, res, next) => {
  console.log("THIS IS MY FIRST MIDDLEWARE!!!");
  return next();
});

app.use((req, res, next) => {
  console.log("THIS IS MY SECOND MIDDLEWARE!!!");
  return next();
});

app.get("/", (req, res) => {
  res.send("HOME PAGE!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF!");
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
