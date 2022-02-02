/* OS MODULE */

const os = require("os")

// console.log(`System Uptime is ${os.uptime()/(60*60*24)} days`);

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}

console.log(currentOS); 