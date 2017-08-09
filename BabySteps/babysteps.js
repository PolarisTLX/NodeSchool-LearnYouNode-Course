/*
NOTE:  arguments can be accessed via global "process: object.
the "process" object has an argv property which is an array containing the complete comman-line, ie process.argv

Also all elements in the process.argv are strings, so need to convert them into numbers by:
  Number(process.argv)
*/

let result = 0;

for (i = 2; i < process.argv.length; i++) {
result += Number(process.argv[i])
}

console.log(result);


//Alternate solution:

/*
let args = process.argv.slice(2);

let sum = args.reduce(function(acc, curr) {
  return +acc + +curr;
});

console.log(sum);
*/

//The unary operator `+` forces the expression to type Number. 
//So `+acc + +curr` means the same as `Number(acc) + Number(curr)`.


//Short Solution:

/*
console.log(process.argv.slice(2).reduce(function(acc, curr) {
  return +acc + +curr;
});
*/

//Shortest Solution with Arrow Function:

/*
console.log(process.argv.slice(2).reduce((acc, curr) => +acc + +curr));
*/