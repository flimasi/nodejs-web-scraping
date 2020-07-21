# nodejs-web-scraping
Node js web crawler

## Install Modules
``
npm install request cheerio sequelize mysql2 dotenv babel babel-cli fs --save
``

## Scraping

Manual execution
- node scraping.js


Crontab

``
30 6 1 * * node /home/felipe/example/scraping.js
``

## Store Data

- folder: dataBuffer 