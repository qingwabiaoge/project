const Koa = require('Koa')
const Router = require('Koa-router')
const app = new Koa()//实例化koa
const api=require('./router/api')
const admin=require('./router/admin')
const router = new Router//ronter作用：koa根目录响应-》若干目录响应
const cors = require('koa2-cors');
var xmlParser = require('koa-xml-body'); // note the default
var bodyParser = require('koa-bodyparser');
const middlewares = require('./middlewares/')


router.use('/api', api.routes(), api.allowedMethods())

//路由里指定路由组使用中间件
router.use('/admin', middlewares.autor, admin.routes(), admin.allowedMethods())

app.use(middlewares.response)
  .use(cors())
  //xmlParser必须和bodyParser一起用 并删除koaBody, 貌似还要放到全局
  .use(xmlParser())
  .use(bodyParser())
  //router要放到bodyParser后
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
console.log('start 3000')

