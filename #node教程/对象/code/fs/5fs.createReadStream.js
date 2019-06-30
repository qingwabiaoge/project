var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('./data/1.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
    data += chunk;
    console.log(data)

});

readerStream.on('end',function(){
    console.log(data);
    console.log('读取结束')
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");