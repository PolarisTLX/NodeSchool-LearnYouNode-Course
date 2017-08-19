//same as the HTTP collect problem but with 3 links provided
//and need to deal with making sure they are done in order despite asynchronous

let http = require("http");

let url_1 = process.argv[2];
let url_2 = process.argv[3];
let url_3 = process.argv[4];

let one = "";
let two = "";
let three = "";

http.get(url_1, function callback (response) {
  response.setEncoding("utf8");
  response.on("data", function(data){
    one = one + data;
})
//this listens for the end event controls what order things occur despite asynchronous
response.on("end", function(){
    console.log(one);

    //Now repeated for the second one:
    http.get(url_2, function callback (response) {
      response.setEncoding("utf8");
      response.on("data", function(data){
        two = two + data;
    })
    response.on("end", function(){
        console.log(two);

        //Now repeated for the second one:
        http.get(url_3, function callback (response) {
          response.setEncoding("utf8");
          response.on("data", function(data){
            three = three + data;
        })
        response.on("end", function(){
            console.log(three);
          });
        });

      });
    });

  });
});
