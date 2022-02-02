const { fritz, firstName, secondName } = require('./4-names')
const { sayHi, sayWelcome } = require('./5-utils')
const data = require('./6-alternative-export')

console.log(data);

console.log();

sayHi(fritz)
sayHi(firstName)
sayHi(secondName)

console.log();

sayWelcome(fritz)
sayWelcome(firstName)
sayWelcome(secondName)