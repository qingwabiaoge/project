let mongoose = require('mongoose')
// 创建一个数据库连接
// mongoose.connect("mongodb://localhost/cheshi");
// let db = mongoose.connection;
// // 防止Mongoose: mpromise 错误
// mongoose.Promise = global.Promise;
//
// db.on('error', function(){
//     console.log('数据库连接出错！');
// });
// db.on('open', function(){
//     console.log('数据库连接成功！');
// });
// module.exports = db;

let options = {
  // 大致意思就是说:当前的URL字符串解析器被弃用然后也提供了解决方案 让你在选项里面{useNewUrlParser: true}
  useNewUrlParser: true,
  useCreateIndex: true
  // user: 'myUserName',
  // pass: 'myPassword'
}

mongoose.connect('mongodb://localhost/demo', options, (err) => {
  if (err) {
    console.log(`Connection Error:${err}`)
  } else {
    console.log('Connection success!')
  }
})
