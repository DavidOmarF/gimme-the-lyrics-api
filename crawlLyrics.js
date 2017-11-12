let cheerio = require('cheerio');
let request = require('request');
let getFirstResult = require('./getFirstResult');

function toTitleCase(s) {
    return s
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}

function cleanString(s) {
    // s = s.trim()
    return s.replace(/\s+/g, '-').toLowerCase();
}

function crawlLyrics(term, callback) {
    getFirstResult(term, function (source) {
        request(source, function (err, res, body) {
            if (err) throw err;

            let $ = cheerio.load(body);
            let lyrics = ""
            $(".lyrics").each(function (index) {
                lyrics = $(this).find('p').text().trim()
            })
            // console.log('scrapped', lyrics);
            callback(null, {lyrics})
        });
    });
}

module.exports = crawlLyrics;