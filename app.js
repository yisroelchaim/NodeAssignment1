var express = require('express');
var app = express();
var http = require('http'); // for making get request to openweathermap.org

app.get('/', function (req, resp) {
  resp.send('Please enter a zipcode eg: http://localhost:8080/75204,us');
});

app.get('/:zipcode', function (clientRequest, clientResponse) {
  //api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1111111111 
// 946a3de513c93d7d85f9b182a3a390ae
// http://api.openweathermap.org/data/2.5/weather?zip=94040,us
  var zip = clientRequest.params.zipcode;
  var appid =  "946a3de513c93d7d85f9b182a3a390ae";
  var options = {
    host: 'api.openweathermap.org',
    port: 80,
    path: '/data/2.5/weather?zip=' + zip + ",us&APPID=" + appid
  };

  http.get(options, function(resp){
    resp.on('data', function(chunk){
      clientResponse.send(chunk.toString());
    });
  }).on("error", function(e){
    console.log("Got error: " + e.message);
  });

});

app.listen(8080);

