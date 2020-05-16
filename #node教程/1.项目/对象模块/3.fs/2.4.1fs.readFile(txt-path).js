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
//文字自动转buffer对象
var data = fs.readFileSync('../assets/1.txt');
console.log('data:',data)
//buffer对象转字符串
console.log("同步读取: " + data.toString());


// 异步读取1
fs.readFile('../assets/1.txt',callback);

