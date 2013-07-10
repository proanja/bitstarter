var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var f = fs.readFileSync('index.html');
  var buf = new Buffer(100);
  buf.write(f);
  response.send(buf.write(f).toString('utf-8'));
  response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
