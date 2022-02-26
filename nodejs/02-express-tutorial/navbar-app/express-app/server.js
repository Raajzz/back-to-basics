const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../styles.css"));
});

app.get("/logo.svg", (req, res) => {
  res.sendFile(path);
});

app.all("*", (req, res) => {
  res.send("<h1>404 Page Does Not Exist!</h1>");
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
