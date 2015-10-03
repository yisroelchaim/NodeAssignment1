var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello, World!');
});
app.get('/:name', function (req, res) {
    res.send('Hello, ' + req.params.name + "!");
});
app.listen(8080);

