let mongoose = require('mongoose')


let options = {
  // 大致意思就是说:当前的URL字符串解析器被弃用然后也提供了解决方案 让你在选项里面{useNewUrlParser: true}
  useNewUrlParser: true,
  useCreateIndex: true

}

mongoose.connect('mongodb://localhost/demo', options, (err) => {
  if (err) {
    console.log(`Connection Error:${err}`)
  } else {
    console.log('Connection success!')
  }
})
exports.Person=require('./Person')
