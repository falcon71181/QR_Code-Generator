import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";  // QR Code png/svg
import qrcode from 'qrcode-terminal';  // terminal QR Code

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const input_url = answers.URL;
    var qr_svg = qr.image(input_url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('ur_qr.png')); // save QR Image
    qrcode.generate(input_url); // terminal QR Code
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });