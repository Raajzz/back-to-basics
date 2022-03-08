const express = require("express");
const app = express();
const { products } = require("../data/data.js");

// app.get("/", (req, res) => {
//   res.status(200).json([
//     {
//       name: "John",
//     },
//     {
//       name: "Susan",
//     },
//   ]);
// });

app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
