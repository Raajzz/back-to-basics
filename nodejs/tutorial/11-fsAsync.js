// Okay, readFile is asynchronous, which means, the code that
// you want to run shall be called after the operation had
// completed. Which means you shall pass a callback function
// that starts to run after reading the file

const fs = require("fs");

fs.readFile("./content/first.txt","utf-8",(err, result)=>{
  if(err){
    console.log(err);
  } else{
    console.log(result);
  }
})

// CALLBACK HELL! 

fs.readFile("./content/first.txt","utf-8",(err,result)=>{
  if(err){
    console.log(err);
  } else{
    const first = result
    fs.readFile("./content/subfolder/second.txt",(err, resultSecond)=>{
      if(err){
        console.log(err);
      } else{
        const second = resultSecond
        fs.writeFile("./content/subfolder/result-sync.txt", `${first + second}`, (err)=>{
          if(err){
            console.log(err);
          }
        })
      }
    })
  }
})