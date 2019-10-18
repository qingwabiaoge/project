const Router = require('Koa-router')
const api = new Router()
const controller = require('../controller')
const middlewares = require('../middlewares/')
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


api
  .get('/request/', controller.request)//koa的request对象
  .get('/request/:id', controller.request)
  .put(/request/, controller.request)
  .post('/request/', controller.request)
  .del('/request/', controller.request)
  .patch('/request/', controller.request)
  //路由里指定路由使用上传中间件
  .post('/request-file/', koaBodyMidware, controller.request)
  //路由里指定路由使用autor中间件
  .get('/autor/', middlewares.autor, controller.autor)
  .get('/setcookie/', controller.setCookie)

module.exports = api
