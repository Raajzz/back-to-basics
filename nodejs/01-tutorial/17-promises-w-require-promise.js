// reading a file using require("fs").promises


const fs = require("fs").promises

const displayContent = async () => {
  const dataFirst = await fs.readFile("./content/first.txt","utf-8");
  const dataSecond = await fs.readFile("./content/subfolder/second.txt", "utf-8");
  console.log(dataFirst, dataSecond);
}

displayContent();