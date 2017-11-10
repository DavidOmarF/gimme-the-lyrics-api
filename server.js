// init project
var express = require('express');
var app = express();
var crawlLyrics = require('./crawlLyrics')

app.get('/:artist&:song', function (req, res){
  crawlLyrics(req.params.artist, req.params.song, function(data){
    res.end(JSON.stringify(data));
  });
})

// listen for requests :)
port = 27017
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
