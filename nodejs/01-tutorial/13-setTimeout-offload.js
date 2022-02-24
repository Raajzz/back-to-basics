console.log("first");

setInterval(() => {
  console.log("setInterval");
}, 2000);

setTimeout(() => {
  console.log("setTimeout");
}, 2000);

console.log("third");