var fs = require("fs");
const path = require('path')
const callback = require('../callback')
var file = path.join(__dirname, '../assets/1.json');
fs.readFile(file, 'utf-8', callback);
