const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/query", (req, res) => {
  res.send("query");
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
