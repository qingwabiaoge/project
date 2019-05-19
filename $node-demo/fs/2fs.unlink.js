const fs=require('fs')
const callback=require('./callback')
fs.unlink('./test/1.txt',callback)