const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

//路由1-----------------
const api = new Router()
api.get('/a', ctx => ctx.body = 'a')
api.get('/b', ctx => ctx.body = 'b')
//路由2-----------------------
weixin = new Router()
weixin.get('/c', ctx => ctx.body = 'c')
weixin.get('/d', ctx => ctx.body = 'd')

//总路由
router = new Router()
router.use('/api', api.routes(), api.allowedMethods())
router.use('/weixin', weixin.routes(), weixin.allowedMethods())

//app.use
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3004)

console.log(3004)
