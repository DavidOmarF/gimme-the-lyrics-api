// init project
var express = require('express');
var app = express();
var crawlLyrics = require('./crawlLyrics')

app.get('/:artist&:song', function (req, res){
  res.setHeader('Content-Type', 'application/json');
  crawlLyrics(req.params.artist, req.params.song, function(data){
    res.json(data);
  });
})

// listen for requests :)
port = 3000
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
