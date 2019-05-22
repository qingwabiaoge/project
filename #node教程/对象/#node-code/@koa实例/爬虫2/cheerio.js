var cheerio = require('cheerio'),
$ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('1234');
$('h2').removeClass('title');

console.log($.html());