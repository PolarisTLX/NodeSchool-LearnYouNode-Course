let worker = require('./Modular');

let callback = function(err, data) {
  if (err) {
    return console.error(err);
  }
  data.forEach(function(elem) {
    console.log(elem);
  });
}

worker(process.argv[2], process.argv[3], callback);
