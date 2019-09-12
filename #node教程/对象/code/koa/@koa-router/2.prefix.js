const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

const router = new Router({prefix: '/api'})

router.get('/qin', ctx => ctx.body = 'hello')
app.use(router.routes())
   .use(router.allowedMethods())
app.listen(3001)
console.log(3001)
