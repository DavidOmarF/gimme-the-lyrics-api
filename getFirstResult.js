const jquery = require('jquery');
const Nightmare = require('nightmare');
const nightmare = Nightmare();


function getFirstResult(songInfo, callback) {
    let term = songInfo + " site:genius.com"
    console.log(term);
    nightmare
        .goto('https://duckduckgo.com')
        .type('#search_form_input_homepage', term)
        .click('#search_button_homepage')
        .wait('#r1-0 a.result__a')
        .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
        .end()
        .then(callback)
        .catch((error) => {
            console.error('Search failed:', error);
        });
}

module.exports = getFirstResult