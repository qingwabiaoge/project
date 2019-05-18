const Koa = require('koa')
const Router = require('koa-router')
var router = new Router
const app = new Koa()
router.get('/qin', (ctx,next) => ctx.body = 'hello')
app.use(router.routes()).use(router.allowedMethods())
app.listen(8888)
console.log(8888)