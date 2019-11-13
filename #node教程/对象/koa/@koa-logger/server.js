const logger = require('koa-logger')
const Koa = require('koa')

const app = new Koa()

var fs = require("fs");

console.log("程序执行完毕");


app.use(logger((str, args) => {
  fs.appendFile('1.log', args, function (err) {
    if (err)
      return console.error(err);
    console.log('写入文件成功');
  });
}))
app.listen(3000);
