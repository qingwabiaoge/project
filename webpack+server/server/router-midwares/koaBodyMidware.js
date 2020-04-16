const koaBody = require('koa-body')
const koaBodyMidware = koaBody({
  parsedMethods: [
    'POST',
    'PUT',
    'PATCH',
    'DELETE'//允许解析delete
  ],
  multipart: true,
  formidable: {
    maxFileSize: 1 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
  }
})

module.exports=koaBodyMidware
