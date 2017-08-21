let http = require('http');
//fs = file system
let fs = require("fs");

let port = process.argv[2];
let file = process.argv[3];

//create the http server:
let server = http.createServer( function callback(request, response) {
  let readStream = fs.createReadStream(file);
  readStream.pipe(response);
});
server.listen(port);



//OFFICIAL SOLUTION:
/*
let http = require('http');
let fs = require("fs");

let server = http.createServer(function (req, res) {
//I have no idea what this line below does:
  res.writeHead(200, { 'content type': 'text/plain'})

  fs.createReadStream(process.argv[3].pipe(res)
});

server.listen(Number(process.argv[2]));

*/
