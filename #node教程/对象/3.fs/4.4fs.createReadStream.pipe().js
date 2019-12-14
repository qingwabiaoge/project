// 管道流
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('../assets/1.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('../assets/2.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

