const fs=require('fs')
const callback=require('../callback')
fs.rename('./assets/1.txt', './assets/2.txt',  callback);
