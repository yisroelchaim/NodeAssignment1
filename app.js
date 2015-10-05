var express = require('express');
var app = express();
var http = require('http'); // for making get request to openweathermap.org
var expressHbs = require('express-handlebars');

// ++
var fs = require('fs');
var path = require('path');
var hbs = require('hbs');
//---

//++
// Set view engine to handlebars
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//---


app.get('/', function(req, resp) {
    resp.send('Please enter a zipcode eg: http://localhost:8080/75204,us');
});


app.get('/:zipcode', function(clientRequest, clientResponse) {
    //api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=1111111111 
    // 946a3de513c93d7d85f9b182a3a390ae
    // http://api.openweathermap.org/data/2.5/weather?zip=94040,us
    var zip = clientRequest.params.zipcode;
    var appid = "946a3de513c93d7d85f9b182a3a390ae";
    var options = {
        host: 'api.openweathermap.org',
        port: 80,
        path: '/data/2.5/weather?zip=' + zip + ",us&APPID=" + appid
    };

    http.get(options, function(resp) {
        resp.on('data', function(chunk) {
            //clientResponse.send(chunk.toString());
            console.log(chunk.toString());
            //clientResponse.render('index', chunk.toString());
            var obj = JSON.parse(chunk.toString());
            clientResponse.render('index', {
                weather: obj.weather[0].main,
                description: obj.weather[0].description,
                humidity: obj.main.humidity,
                temp: ((obj.main.temp - 273.15) * 9/5 + 32).toFixed(1),
                temp_min: ((obj.main.temp_min - 273.15) * 9/5 + 32).toFixed(1),
                temp_max: ((obj.main.temp_max - 273.15) * 9/5 + 32).toFixed(1)
            });

        });
    }).on("error", function(e) {
        console.log("Got error: " + e.message);
    });

});

app.listen(8080);

/*
npm install handlebars --save

Create  /views
        layout.hbs
        index.hbs

*/