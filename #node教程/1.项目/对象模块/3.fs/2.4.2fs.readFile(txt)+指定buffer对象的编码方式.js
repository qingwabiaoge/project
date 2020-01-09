var fs = require("fs");

const callback = (err, res) => {
  if (err) {
    console.log(err)
  } else if (res) {
    console.log(`异步读取txt:${res.toString()}`)

  } else {
    console.log('成功')
  }
}


// 同步读取1
//文件转buffer对象,还可以指定编码
var buf = fs.readFileSync(new Buffer.from('../assets/1.txt','ascii'));
console.log(buf)
//buffer对象对象转字符串
console.log("同步读取: " + buf.toString());


// 异步读取1
fs.readFile('../assets/1.txt',callback);

