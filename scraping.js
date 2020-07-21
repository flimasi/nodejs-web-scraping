/**
 * Scraping Url target
 * #author Felipe Lima <felipe@felipelima.eti.br>
 */

var cheerio = require('cheerio');
var request = require("request");
const baseURL = 'http://www.github.com';

// Crawler Data and Store
const getMetaData = async () => {
    request({uri: baseURL},
        function(error, response, body, fs) {

            const $ = cheerio.load(body)
            const txt = $('.application-main ').text()

            fs = require('fs');
            let filename = Date.now();
            fs.writeFile('dataBuffer/'+ filename + '.txt', txt, function (err) {
                if (err) return console.log(err);
                console.log('Capture ' + baseURL +' > dataBuffer/'+ filename + '.txt');
            });
        });

};

getMetaData();
