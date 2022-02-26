// setting up and application manually without using expressjs

const http = require("http");
const { readFileSync } = require("fs");

// reading a file using readFileSync

const homeHtml = readFileSync("./navbar-app/index.html");
const homeCss = readFileSync("./navbar-app/styles.css");
const homeSvg = readFileSync("./navbar-app/logo.svg");
const homeJs = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homeHtml);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(homeCss);
    res.end();
  } else if (url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(homeSvg);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/js" });
    res.write(homeJs);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404! <br> Page Not Found</h1>");
    res.end();
  }
});

server.listen(3001, () => {
  console.log("server is running on port 3001");
});
