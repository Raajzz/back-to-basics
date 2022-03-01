const express = require("express");
const path = require("path");
const app = express();

// the manual way without app.use(express.static()) method

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../index.html"));
// });

// app.get("/styles.css", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../styles.css"));
// });

// app.get("/logo.svg", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../logo.svg"));
// });

// app.get("/browser-app.js", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../browser-app.js"));
// });

// app.all("*", (req, res) => {
//   res.send("<h1>404 Page Does Not Exist!</h1>");
// });

// app.listen(3001, () => {
//   console.log("Listening on port 3001");
// });

// a better way

// setup static middleware

app.use(express.static(path.resolve(__dirname, "./public")))

app.all("*", (req, res)=>{
  res.send("<h1>404 Page Does Not Exist!</h1>");
})

app.listen(3001, () => {
  console.log("Listening on port 3001");
});

// better way ++ 

