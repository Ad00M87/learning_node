var http = require('http');
var fs = require('fs');
var hello = require('./hello_world');
var server = http.createServer();

server.on('request', function(request, response) {
  fs.readFile('index.html', function(err, contents) {
    if (err) {
      response.writeHead(500, 'text/plain');
      logger.emit('error', err);
      response.end(err);
    } else {
      response.writeHead(200, 'text/html');
      response.end(contents);
    }
    hello();
  })
}).listen(8080);
console.log('Server running at http://localhost:8080/');

server.on('close', function() {
  console.log("Server shutting down...");
});
