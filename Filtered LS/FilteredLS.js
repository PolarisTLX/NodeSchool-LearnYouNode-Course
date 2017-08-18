//path.extname('index.html')
//returns   '.html'

let fs = require("fs");

fs.readdir(process.argv[2], function(err, data) {
  if (err) {
    return console.error(err);
    //if there is an error, just exit function
  }
  let regexTest = new RegExp('.+\.' + process.argv[3] + '$');
  //match any character, with at least 1, then matching the dot .   and the extention name provided, which is in the second argument: process.argv[3]
  //  + '$'   is to make sure that is it the end of name
  data.filter(function(elem) {
    return regexTest.test(elem);
  }).forEach(function(elem) {
    //these are the file names
    console.log(elem);
  });
});


//OFFICIAL SOLUTION:
/*
let fs = required('fs');
let path = require('path');

let folder = process.argv[2];
let ext = "." + process.argv[3];

fs.readdir(folder, function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function (file) {
    if (path.extname(file) === ext {
      console.log(file)
    }
  });
});

*/
