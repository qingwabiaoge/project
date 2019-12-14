const Router = require('Koa-router')
const router = new Router({prefix: '/api'})
const request= require('../controller/request')
const author = require('../middlewares/author')

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


router
  .get('/request/', request)//koa的request对象
  .get('/request/:id', request)
  .put(/request/, request)
  .post('/request/', request)
  .del('/request/', request)
  .patch('/request/', request)
  //路由里指定路由使用上传中间件
  .post('/request-file/', koaBodyMidware, request)
  //路由里指定路由使用author中间件
  .post('/author/', author, request)


module.exports = router
