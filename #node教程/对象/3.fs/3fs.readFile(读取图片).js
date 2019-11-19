var fs = require("fs");
const path = require('path')
const callback = require('../callback')

// 异步读取
fs.readFile(path.join(__dirname, '../assets/1.jpg'), callback);

