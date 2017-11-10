let cheerio = require('cheerio');
let request = require('request');

function makeSourceFor(artist, song){
    let domain = "https://genius.com/";
    artist = artist.replace(/\s+/g, '-').toLowerCase();
    song = song.replace(/\s+/g, '-').toLowerCase();
    return domain + artist + "-" + song + "-lyrics"
}

function crawlLyrics(artist, song, callback){
    let source = makeSourceFor(artist, song);
    request(source, function(err, res, body) {
        if (err) throw err;
        
        let $ = cheerio.load(body);
        let lyrics = ""
        $(".lyrics").each(function(index){
            lyrics = $(this).find('p').text().trim()
        })
        // console.log('scrapped', lyrics);
        callback({artist, song, lyrics})
    })
}

module.exports = crawlLyrics;