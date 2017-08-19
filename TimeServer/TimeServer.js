//modules needed:
let net = require("net");


let port = process.argv[2];

let date = new Date();
let year = date.getFullYear();
//for some reason the months are coming back 1 behind, so added +1
let month = date.getMonth() + 1;
if (month < 10) {month = "0" + month};
let day = date.getDate();
if (day < 10) {day = "0" + day};
let hour = date.getHours();
if (hour < 10) {hour = "0" + hour};
let minute = date.getMinutes();
if (minute < 10) {minute = "0" + minute};

let fullDate = year +"-"+ month +"-"+ day +" "+ hour +":"+ minute + "\n";

let server = net.createServer(function listener(socket){
  socket.end(fullDate);
});

server.listen(port);


//OFFICIAL SOLUTION:

/*
let net = require("net");

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date ()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1 ) + '-' +
    zeroFill(d.getDate() + ' ' +
    zeroFill(d.getHours() + ':' +
    zeroFill(d.getMinutes())
}

let server = net.createServer(function (socket) {
  socket.end(now() + '\n')
});

server.listen(Number(process.argv[2]));

*/
