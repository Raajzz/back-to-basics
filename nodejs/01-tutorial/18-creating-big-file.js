const fs = require("fs")

let data = "";

for(let i = 0; i<10_000; i++){
    data += `Hello World ${i}\n`
}

fs.writeFile("./content/big-file.txt", data, (err)=>{
    if(err){
        console.log(err);
    } else{
        console.log("Written big-file.txt");
    }
}) 