var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, resp) {
  if(req.query.pwd === "nectarom"){
    resp.sendFile(path.join(__dirname,'/index.html'));
  } 
  else {
    resp.send('Please input your password as a query string eg: pwd=foobar');
  }
});
app.get('/user', function (req, resp) {
  if(req.query.pwd === "nectarom"){
    resp.sendFile(path.join(__dirname,'/user.html'));
  } 
  else {
    resp.send('Please input your password as a query string eg: pwd=foobar');
  }
});

app.listen(8080);

//http://localhost:8080/user?pwd=nectarom
//http://localhost:8080/?pwd=nectarom
