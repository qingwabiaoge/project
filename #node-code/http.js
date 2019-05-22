var http = require('http');
const fs = require('fs')
const callback=require('./fs/callback')

http.createServer(function (req, res) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain

    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.appendFile('./fs/test/req.json', JSON.stringify(Object.keys(req)),callback)
    fs.appendFile('./fs/test/res.json', JSON.stringify(Object.keys(res)),callback)
    // 发送响应数据 "Hello World"
    res.end('123');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');