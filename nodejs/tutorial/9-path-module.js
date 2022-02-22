const path = require("path")

console.log(path.sep);

const filePath = path.join("content", "subfolder", "test.txt")

console.log(filePath);

// The path.basename() method returns the filename part of a file path.

console.log(path.basename(filePath));

console.log(path.join(__dirname, "content", "subfolder", "test.txt"));

// path.resoblve()
// if resolve() finds '/' it's going to consider it as the root
// and after that it tries to construct the absolute path and see 
// if it works

// the below code will become D:\content and then D:\subfolder and finally D:\test.txt, since D:\test.txt makes sense, it'll normalize it and returns that as the potention absolute path 
console.log(path.resolve("/content", "/subfolder", "/test.txt"));

// the below will produce, first the root directory D:/.....nodejs and content will be combined to give D:/.....nodejs and after that, when it reaches /subfolder, it'll consider /subfolder as the main directory on D and then the path becomes D:/subfolder and then test.txt will just be appended
console.log(path.resolve("content", "/subfolder", "test.txt"));

// since no root is appeared the directory, the root directory of app.js D:/.....nodejs will be it's parent directory
console.log(path.resolve(__dirname,"/content", "subfolder", "test.txt"));