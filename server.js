var express = require('express');
var app = new express();

app.use(express.json());

app.use(express.static(__dirname + '/public'));

var port = Number(process.env.PORT || 3003);
app.listen(port);

console.log("Server is listening on port: " + port);
