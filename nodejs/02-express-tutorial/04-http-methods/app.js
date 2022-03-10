const express = require("express");
const app = express();
const { people } = require("../01-data/data");

app.use(express.static("../01-methods-public"));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// handling the post from the HTML

app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  if (req.body.name) {
    res.status(200).send(`Welcome ${req.body.name}`);
  } else {
    res.status(404).send(`No name provided`);
  }
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
