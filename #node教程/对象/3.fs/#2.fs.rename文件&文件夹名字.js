const fs = require('fs')
const callback = require('../callback')

fs.rename('../assets/1.txt', '../assets/11.txt', callback)
fs.rename('../assets/1', '../assets/11', callback)
