var request = require('request');
var fs = require('fs')
request('https://www.baidu.com/img/bd_logo1.png').pipe(fs.createWriteStream('../assets/doodle.png')
)