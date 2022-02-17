const args = process.argv.slice(2);
const fs = require("fs");
const request = require('request');
const website = args[0];
const file = args[1];

request(website, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  const filesize = body.length;

  fs.writeFile(file, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
    console.log(`Downloaded and saved ${filesize} bytes to ./index.html`);
  });
});