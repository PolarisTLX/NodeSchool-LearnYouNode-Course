let fs = require("fs");

//this one requires understanding the event loop for asynchronous javascript

//difference to syncronous problem:  instead of declaring a variable of  fs.readFile
//a second argument of function(err, data) { ...console.log() is added}
fs.readFile(process.argv[2], function(err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString().match(/\n/g).length);
});


//ALTERNATE SOLUTION:  I don't think I like it but demonstrates how function can be used
/*
let fs = require("fs");

function handleFile (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString().match(/\n/g).length);
}

fs.readFile(process.argv[2], handleFile);
*/


//OFFICIAL SOLUTION:
/*
let fs = require("fs");
let file = process.argv[2];

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err);
  }
  let lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});
*/
