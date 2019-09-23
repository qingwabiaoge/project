var fs = require("fs");
const path = require('path')
const callback = require('../callback')

// 异步读取
fs.readFile(path.join(__dirname, '../assets/1.txt'), callback);

// 同步读取1
var data = fs.readFileSync(path.join(__dirname, '../assets/1.txt'));
console.log("同步读取: " + data.toString());

