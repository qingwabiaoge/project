const path = require('path')
const fs = require('fs')
module.exports = async (ctx, next) => {
  // 上传单个文件

console.log(ctx.request.files)
  // 获取上传文件
  const {file} = ctx.request.files
  // 创建可读流,读取浏览器端电脑上的文件路径
  const reader = fs.createReadStream(file.path)
  //当前时间挫
  const timestamp = (new Date()).valueOf()
  //取得后缀名
  const suffix = file.type.split('/')[1]
  //在服务器路径
  const filePath = path.join(__dirname, '../static/upload') + `/${timestamp}.${suffix}`

  // 创建可写流
  const writeStream = fs.createWriteStream(filePath)
  // 可读流通过管道写入可写流
  reader.pipe(writeStream)
  ctx.state.code = 0
  ctx.state.data = {image: `http://localhost:3000/upload/${timestamp}.${suffix}`}
}
