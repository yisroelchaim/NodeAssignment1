var http = require('http'); // import the built-in http module

var server = http.createServer();

function requestHandler(request, response) {

  response.write("Hello, World"); // send this to client
  response.end();

}

server.on("request", requestHandler);

// Subscribe to the request event
// create an http server, if we receive a client request
// call the function that is passed as arg

server.listen(8080);// Ask the server to start listening


