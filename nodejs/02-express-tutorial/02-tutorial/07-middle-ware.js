const express = require("express");
const app = express();

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("about");
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
