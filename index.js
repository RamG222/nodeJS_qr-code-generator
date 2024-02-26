import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

//1. Use the inquirer npm package to get user input.
var url;
inquirer
  .prompt({
    message: "What is url?",
    name: "URL",
  })
  .then((ans) => {
    url = ans.URL;
    console.log(url);
    var qr_code = qr.image(url);
    qr_code.pipe(fs.createWriteStream("qr_image.png"));
  })
  .catch((e) => {
    console.log(e);
  });

//2. Use the qr-image npm package to turn the user entered URL into a QR code image.

//3. Create a txt file to save the user input using the native fs node module.
