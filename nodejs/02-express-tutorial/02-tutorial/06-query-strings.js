// multiple inputs, doesn't follow an hierarchy then go with the
// query string

const express = require("express");
const app = express();

const { products } = require("../data/data.js");

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
  res.send("<h1>Hello</h1>");
});

app.get("/api/v1/res", (req, res) => {
  console.log(req.query);
});

app.listen(3001, () => {
  console.log("Listening on the part 3001");
});
