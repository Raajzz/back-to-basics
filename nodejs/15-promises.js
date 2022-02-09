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

/*
Promise Hell, Mitigated by Promise.all()
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

*/
