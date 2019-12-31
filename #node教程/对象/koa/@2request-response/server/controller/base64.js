const fs = require('fs')
const path = require('path')
module.exports = async (ctx, next) => {
  let {base64} = ctx.request.body
  //去掉图片base64码前面部分data:image/png;base64
  base64 = base64.replace('data:image/png;base64,', "");

  //base64字符串转buffer变文件
  fs.writeFile(path.join(__dirname, '../images/1.png'), new Buffer.from(base64, 'base64'), function (err) {
    if (err) return
    console.log('图片保存成功')
  })

}
