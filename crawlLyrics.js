let cheerio = require('cheerio');
let request = require('request');

function cleanString(s){
    return s.replace(/\s+/g, '-').toLowerCase();
}

function makeSourceFor(artist, song){
    let domain = "https://genius.com/";
    artist = cleanString(artist)
    song = cleanString(song)
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