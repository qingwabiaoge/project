const fs = require('fs')
const callback = require('../callback')


fs.readdir('../assets/',  callback);

fs.readFileList('../assets/',  callback);