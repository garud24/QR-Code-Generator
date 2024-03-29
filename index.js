/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import * as qr from 'qr-image';

import * as fs from  "fs";

inquirer
  .prompt([
    {
        message: "Enter your URL:",
        name: "URL", 
    },
  ])
  .then((answers) => {
    //console.log(answers);
    const url = answers.URL;
    var q = qr.image(url);
    q.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile("URL_QR_image.txt",url,(err) =>{
        if (err) throw err;
        console.log("The URL file has been created!!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });





