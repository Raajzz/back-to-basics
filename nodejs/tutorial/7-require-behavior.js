/* 

- If there's a function and function invokation inside `fileWithThatCode.js` when you require it using `require('./fileWithThatCode')` that code runs. Reason? Only when that code runs, your module.exports will be populated with whatever that you want to allow (ie, stuff that's inside `module.exports`). That is why when you call require() the code runs and if there's a function call, then the function call runs too.

*/

