let fs = require("fs");

let origBuffFile = fs.readFileSync(process.argv[2]);

let numNewLines = origBuffFile.toString().split('\n').length - 1;

console.log(numNewLines);


//let fs = require('fs);            is provided by the problem as necessary Node library module
//fs.readFileSync('/path/to/file')  is provided in the problem
//process.argv[2]                   is provided in the problem as the path to the file (/first command-line argument?)


//Same solution using 'utf8' instead of .toString():
/*
let fs = require("fs");

let origBuffFile = fs.readFileSync(process.argv[2], 'utf8');

let numNewLines = origBuffFile.split('\n').length - 1;

console.log(numNewLines);
*/

//Shortest version of above solution:
/*
let fs = require("fs");

let numNewLines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;

console.log(numNewLines);
*/


//ALTERNATE SOLUTION:

/*
let fs = require("fs");

let origBuffFile = fs.readFileSync(process.argv[2], 'utf8');

let numNewLines = origBuffFile.toString().match(/\n/g).length;

console.log(numNewLines);
*/

//the ", 'utf8')"  is the same thing as ".toString()" / negates it?

//.match()  is a match method available on strings.
//  (/\n/g).length  is to count the number of \n occurences
