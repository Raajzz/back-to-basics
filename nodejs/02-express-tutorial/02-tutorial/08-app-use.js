const express = require("express");
const app = express();
const logger = require("../logger");

app.get("/", (req, res) => {
  res.send("Home Page");
});

console.log(app);

app.use(logger);

console.log(app);

app.listen(3001, () => {
  console.log("listening on port 3001");
});
