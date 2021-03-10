// piomaweb
// const http = require('http'); // 1
//
// http.createServer((request, response) => { // 2
//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/plain');
//   response.end('Hello World');
// }).listen(3000); // 3
//
// console.log('Server running at http://127.0.0.1:3000/');

// express
// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
//
// app.listen(8888, function () {
//   console.log('Example app listening on port 8888!');
// });

//생활코딩
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);
