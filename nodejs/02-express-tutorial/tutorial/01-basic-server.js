const http = require("http");

const server = http.createServer((req, res) => {
  console.log("User hit the server");
  res.end("Home Page");
  // almost the termination step
  // must always have end, to signal that the communication had
  // ended.
});

server.listen(3001);
