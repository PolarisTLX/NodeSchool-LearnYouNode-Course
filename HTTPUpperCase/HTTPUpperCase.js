//load the HTTP module:
let http = require("http");

//also need API module mentioned below:
let map = require("through2-map");


//make variable for the port from what is given to us in the problem:
let port = process.argv[2];

//create the server:
let server = http.createServer(function callback (request, response) {
  if (request.method !== "POST"){
    return response.end('Not a POST. Send me a POST\n')
  }
    //console.log(req);   //to make sure that works
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
});

//listen to the port:
server.listen(port);

//to check if it a request is a post request:
//if (req.method == "POST") {...

//require('through2-map') is an APi that makes it the simplest way to solve this
//needs to be installed
