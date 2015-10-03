var express = require('express');
var app = express();

var path = require('path'); // import path module (to construct file path)

app.get('/', function (req, resp) {
  resp.sendFile(path.join(__dirname, "/index.html"));
});

app.get('/user', function (req, resp) {
  resp.sendFile(path.join(__dirname, "/user.html"));
});

app.listen(8080);