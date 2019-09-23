const fs = require('fs')
const path = require('path')

module.exports = async (ctx, next) => {
  const data = ctx.request.body
  const stringfyData=JSON.stringify(data)
  fs.writeFile(path.join(__dirname, './data.json'), stringfyData, function (err) {
    if (err)
      return console.error(err);
    console.log('写入文件成功');
  });
}
