const path=require('path')
const Koa = require('koa')

const static = require('koa-static')
const root=path.join(__dirname,'../dist')
const Router=require('koa-router')

const router=new Router({prefix:'/api'})
      router.get('/',(ctx)=>{ctx.body=1})

const app = new Koa()
app.use(static(root))
   .use(router.routes())
   .use(router.allowedMethods())

  app.listen(3000)
