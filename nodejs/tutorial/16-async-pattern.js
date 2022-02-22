const fs = require("fs");
const util = require("util");

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

const  putText = (path, data) => {
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

const combineFile = async () => {
  try {
    const firstText = await getText("./content/first.txt");
    const secondText = await getText("./content/subfolder/second.txt");
    console.log(await putText("./content/subfolder/result-sync.txt",`${firstText} ${secondText}`));
  } catch (error) {
    console.log(error);
  }
}

// combineFile()


// USING PROMISIFY
const readFilePromisify = util.promisify(fs.readFile)
const writeFilePromisify = util.promisify(fs.writeFile)

const combineFilePromisify = async () => {
  try {
    // const firstText = await getText("./content/first.txt");
    const firstText = await readFilePromisify("./content/first.txt", "utf-8")
    // const secondText = await getText("./content/subfolder/second.txt");
    const secondText = await readFilePromisify("./content/subfolder/second.txt", "utf-8");
    // console.log(await putText("./content/subfolder/result-sync.txt",`${firstText} ${secondText}`));
    await writeFilePromisify("./content/subfolder/result-sync.txt",`${firstText} ${secondText}`)
    console.log("Done");
  } catch (error) {
    console.log(error);
  }
}

combineFilePromisify();

