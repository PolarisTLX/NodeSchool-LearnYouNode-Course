//the 2 modules that needed to be loaded for this:
let http = require("http");
//this concat-stream needed to be npm installed
let concat = require('concat-stream');

//http get request based on the argument that was provided ".argv[2]"
//the gave the response stream to the callback function
http.get(process.argv[2], function(response) {
  //use 'utf8' to avoid using .toString(), though might not be easier/shorter/cleaner
  response.setEncoding('utf8');
  //if here is an error, console it:
  response.on('error', function(err) {
    return console.log(err);
  });
  //if there is data, concole log the length and the data
  let concatBuffer = concat(function(buffer) {
    console.log(buffer.length);
    //don't need  log(buffer.toString()); if we have line 5 with 'utf8'
    console.log(buffer);
  });
  //not sure what .pipe does
  response.pipe(concatBuffer);
});



//OFFICIAL SOLTUION:
/*

let http = require("http");
//using bl (buffer list) instead of concat-stream
let bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});

*/
