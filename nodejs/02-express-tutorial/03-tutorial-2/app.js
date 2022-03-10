const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("common"));

app.get("/", (req, res) => {
  res.status(200).send("Home");
});

app.listen(3001, (req, res) => {
  console.log("Listening on port 3001");
});
