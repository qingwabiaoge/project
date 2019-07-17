console.log(`-------文件信息-------`)

const fs = require('fs')
const callback=require('../callback')


fs.stat('./assets/1.jpg', function (err, stats) {
    if (err) {
        console.log(err)
    } else {
        console.info(stats);
        console.info(stats.isFile()); //true
        console.info(stats.isDirectory()); //false
    }
});