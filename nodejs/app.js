const fs = require("fs");

// SETTING UP THE PROMISE

const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const putText = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Written Sucessfully");
      }
    });
  });
};

const appendStringArray = (array) => {
  let resultString = ""
  for(let i = 0; i<array.length; i++){
    resultString += array[i] + " "
  }
  return resultString
}

const firstPromise = getText("./content/first.txt");
const secondPromise = getText("./content/subfolder/second.txt");
const thirdPromise = getText("./content/subfolder/third.txt");
const fourthPromise = getText("./content/subfolder/fourth.txt");

Promise.all([firstPromise, secondPromise, thirdPromise, fourthPromise])
  .then((values) => {
    putText("./content/subfolder/result-sync.txt", appendStringArray(values))
    .then(result => console.log(result))
    .catch(err=>console.log(err))
  })
  .catch((err) => console.log(err));

// getText("./content/first.txt")
//   .then((dataFirst) => {
//     getText("./content/subfolder/second.txt")
//       .then((dataSecond) => {
//         getText("./content/subfolder/third.txt")
//         .then((dataThird)=>{
//           getText("./content/subfolder/fourth.txt")
//           .then((dataFourth)=>{
//               // gonna stop here, because it's getting tedious
//               return putText(
//                 "./content/subfolder/result-sync.txt",
//                 `${dataFirst} ${dataSecond} ${dataThird} ${dataFourth}`
//               );
//           })
//           .catch(err=>console.log(err))
//         })
//         .catch(err=>console.log(err))
//       })
//       .catch((err) => console.log(err));
//   })
//   .then((result) => {
//     console.log("Huh");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/*

  */

/*
So, I finally started studying promises, I have a doubt regarding a scenario where I would be reading from 5 files (using nodejs, although it isn't that complicated) and writing to a 6th file. I have a function for reading from a file and I have another function for writing to a file.

Here's my code, https://pastebin.com/wAX8457D

This is the code for reading from 2 files and writing to a third file, the problem is, if I were to go for that 5 files issue, I'll end up with this,

```js
getText("./content/first.txt")
  .then((dataFirst) => {
    getText("./content/subfolder/second.txt")
      .then((dataSecond) => {
        getText("./content/subfolder/third.txt")
        .then((dataThird)=>{
          getText("./content/subfolder/fourth.txt")
          .then((dataFourth)=>{
              // gonna stop here, because it's getting tedious
              return putText(
                "./content/subfolder/result-sync.txt",
                `${dataFirst} ${dataSecond} ${dataThird} ${dataFourth}`
              );
          })
          .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))
      })
      .catch((err) => console.log(err));
  })
  .then((result) => {
    console.log("Huh");
  })
  .catch((err) => {
    console.log(err);
  });
```
Am I in Promise Hell?
*/
