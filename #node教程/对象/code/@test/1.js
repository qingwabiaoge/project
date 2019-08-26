const fs=require('fs')
const callback=require('./callback')
const i=fs.readFile('./cs/1.txt',callback)
console.log(i)
