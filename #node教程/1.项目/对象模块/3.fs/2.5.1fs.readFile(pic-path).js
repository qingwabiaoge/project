const fs = require('fs');
//读取图片到buffer对象,默认用base64编码

/*fs.readFile(path[, options], callback)#
  中英对照提交修改

版本历史
path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
options <Object> | <string>

encoding <string> | <null> 默认值: null。
flag <string> 参阅支持的文件系统标志。默认值: 'r'。
callback <Function>

err <Error>
data <string> | <Buffer>
异步地读取文件的全部内容。

fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
回调会传入两个参数 (err, data)，其中 data 是文件的内容。

如果没有指定 encoding，则返回原始的 buffer。

*/
const pic = fs.readFileSync('../assets/1.jpg')
console.log(pic)
console.log(typeof pic)
//转成base64字符串可以在浏览器里直接使用
const str = pic.toString('base64');
console.log(str)

