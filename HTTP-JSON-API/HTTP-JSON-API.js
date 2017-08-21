//this one is looking for a GET request

let http = require("http");
let url = require("url");
let port = process.argv[2];


let server = http.createServer(function(request, response) {
  //check for a GET request
  if (request.method == "GET") {
      //console.log("It works!");  //check if it works
    //parse url with url.parse(request.url, true)
    let parsedUrl = url.parse(request.url, true);
    //console.log(parsedURL);
    let path = parsedUrl.path;
    //check path for api.parsetime
    //query.iso is found in the returned data, can see if when you console log it
    let date = new Date(parsedUrl.query.iso);

    //indexOf to find the location of "parsetime" string within the string of or variable "path"
    //result of -1 means does not occur in our tested variable
    if(path.indexOf("parsetime") >= 0) {
      //send json object hour minute second
      var result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }
      response.end(JSON.stringify(result));
    }
    //check path for api/unixtime
    if(path.indexOf("unixtime") >= 0) {
      //send json object unixtime
      var result = {"unixtime": date.getTime()}
      response.end(JSON.stringify(result));
    }
  }
});

server.listen(process.argv[2]);
