let http = require("http");

//this is the HTTP get request:
http.get(process.argv[2], function(response) {
  //the callback is a string, hence utf8, which is same as .toString()  ?
  response.setEncoding('utf8');
  //if I get an error, just console the error
  response.on('error', function(err) {
    console.log(err);
  });
  //if I get data, just condole the data (out of the string?)
  response.on('data', function(data) {
    console.log(data);
  });
});
