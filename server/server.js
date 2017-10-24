var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('client'));

app.get('/', function (req, res) {
  res.sendFile('../client/index.html');
});

app.get('/api/songs', function (req, res) {
  res.send('songs');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
