const path = require('path')
const callback = require('../callback')
const fs = require('fs')

var readStream = fs.createReadStream('../assets/1.txt')
var writerStream=fs.createWriteStream('../assets/2.txt')
 readStream.pipe(writerStream)
