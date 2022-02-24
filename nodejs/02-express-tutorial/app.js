const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  if (url === "/") {
    res.writeHead(200, "This works fam!", { "content-type": "text/html" });
    res.write("homePage");
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
  res.end();
});

server.listen(3001);
