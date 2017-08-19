//code largely carried over from Filtered

let fs = require("fs");

//this line is new for this problem:
module.exports = function (dirName, extName, callback) {

  fs.readdir(dirName, function(err, data) {
    if (err) {

      return callback(err);
      /*
      return console.error(err);
      //if there is an error, just exit function
      */

//NOTE THAT and IF requires and ELSE  or it requires a RETURN in the IF statement.

    }
    let regexTest = new RegExp('.+\.' + extName + '$');
    //match any character, with at least 1, then matching the dot .   and the extention name provided, which is in the second argument: process.argv[3]
    //  + '$'   is to make sure that is it the end of name
    data = data.filter(function(elem) {
      return regexTest.test(elem);
    });
    callback(null, data);
  });

}
