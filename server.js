// init project
var express = require('express');
var app = express();
var crawlLyrics = require('./crawlLyrics')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/:term', function (req, res){
  res.setHeader('Content-Type', 'application/json');
  crawlLyrics(req.params.term, function(err, data){
    if (err) throw err;
    res.json(data);
  });
})

port = 3000
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
