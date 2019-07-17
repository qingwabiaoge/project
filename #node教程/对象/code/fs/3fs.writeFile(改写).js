const fs = require('fs')
const callback = require('../callback')


fs.writeFile('./assets/1.txt', '这是一段通过fs.writeFile函数写入的内容；\r\n', callback);