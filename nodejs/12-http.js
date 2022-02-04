const http = require("http")

const server = http.createServer((req, res)=>{
  if(req.url === "/"){
    res.end("Home Page")
  }
  if(req.url === "/about"){
    res.end("About page")
  }
  if(req.url === "noend"){
    res.end("noend")
  } 
})  

server.listen(3001,(err)=>{
  if(err){
    console.log(err);
    return;
  } else{
    console.log("server is running on port 3001");
  }
})