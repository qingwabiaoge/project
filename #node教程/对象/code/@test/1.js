const fs = require('fs')
const callback = require('./callback')
var readStream = fs.createReadStream('./cs/1.txt', )
fs.appendFile('./cs/2.txt', '', callback)
var writerStream = fs.createWriteStream('./cs/2.txt', callback)

readStream.pipe(writerStream)