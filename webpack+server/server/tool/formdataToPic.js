const path = require('path')
const fs = require('fs')
module.exports = function(file) {

  // 获取上传文件
  // 创建可读流,读取浏览器端电脑上的文件路径
  const reader = fs.createReadStream(file.path)
  //当前时间挫
  const timestamp = (new Date()).valueOf()
  //取得后缀名
  const suffix = file.type.split('/')[1]
  //在服务器路径
  const filePath = path.join(__dirname, '../../dist/upload') + `/${timestamp}.${suffix}`

  // 创建可写流
  const writeStream = fs.createWriteStream(filePath)
  // 可读流通过管道写入可写流
  reader.pipe(writeStream)

console.log(`http://localhost:3000/upload/${timestamp}.${suffix}`)
}
