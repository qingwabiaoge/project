//引包
var mongoose = require('mongoose');
//创建一个数据库连接

var options = {
  // 大致意思就是说:当前的URL字符串解析器被弃用然后也提供了解决方案 让你在选项里面{useNewUrlParser: true}
  useNewUrlParser: true,
  useCreateIndex: true,
  // user: 'myUserName',
  // pass: 'myPassword'
}


mongoose.connect('mongodb://localhost/demo', options, function (err) {
  if (err) {
    console.log('Connection Error:' + err)
  } else {
    console.log('Connection success!')
  }
})
exports.Category=require('./Category')