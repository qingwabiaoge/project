var fs = require("fs");

const callback=(err, res) => {
  if (err) {
    console.log(err)
  } else if (res) {
    console.log(`异步读取txt:${res.toString()}`)

  } else {
    console.log('成功')
  }
}

// 异步读取1
fs.readFile('../assets/1.txt', callback);




// 异步读取2
//文件转buffer对象,还可以指定编码
 fs.readFile(new Buffer.from('../assets/1.txt', 'ascii'),callback);






