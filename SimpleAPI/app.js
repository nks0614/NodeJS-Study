// TEST API
var express = require('express');
var app = express();

var package_file = require('./package.json');

app.get('/servers', function(req, res) {
    res.send([{name:'test-server'}, {name:'beta-server1'}]);
});

app.get('/status', function(req, res) {
    res.send(package_file);
})

app.listen(process.env.PORT);

console.log("Server running at " + process.env.PORT);