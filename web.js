var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // var buf = new Buffer(fs.reafFileSync("index.html", "ascii"));
  // response.send(buf.toString());
  response.send("Almafa");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});