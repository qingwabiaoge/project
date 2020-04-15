const path=require('path')
const Koa = require('koa')

const static = require('koa-static')

const router = require('./router')
const root=path.join(__dirname,'../dist')

const app = new Koa()
app.use(static(root))
   .use(router.routes())
   .use(router.allowedMethods())

  app.listen(3000)
