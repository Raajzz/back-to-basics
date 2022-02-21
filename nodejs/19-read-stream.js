const { createReadStream } = require("fs");

const readStream = createReadStream("./content/big-file.txt", {
  highWaterMark: 1000,
//   highWaterMark sends data in chunks eh!
  encoding: "utf-8",
});

readStream.on("data", (result)=>{
    console.log(result);
})