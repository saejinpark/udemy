const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!!");
//   res.send("<h1>This is my webpage!</h1>");
// });

app.get("/", (req, res) => {
  res.send("This is the home page!");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit`);
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!");
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats!!!! THIS IS DIFFERRENT THAN A GET REQUEST!!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!!");
});

app.get("/*", (req, res) => {
  res.send("I don't know that path!!");
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080!");
});
