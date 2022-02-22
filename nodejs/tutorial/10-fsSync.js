const { readFileSync, writeFileSync } = require("fs")

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/subfolder/second.txt", "utf-8");

// WRITING TO THE FILE
writeFileSync('./content/subfolder/result-sync.txt', `The combination of the two files ${first + second}`)

writeFileSync(
  "./content/subfolder/result-sync.txt",
  `The combination of the two files ${first + second}`,
  {
    flag:"a"
  }
);
console.log(first, second);