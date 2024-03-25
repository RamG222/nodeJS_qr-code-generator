import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

//Asking for User Input 
inquirer
  .prompt({
    message: "What is url?",
    name: "URL",
  })

  .then((ans) => {
    var url;

    url = ans.URL;
    console.log(url);
    var qr_code = qr.image(url);
    qr_code.pipe(fs.createWriteStream("qr_image.png"));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The files has been saved!");
    });
  })
  .catch((e) => {
    console.log(e);
  });
