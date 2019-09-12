const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')

var i = 0
const routerMiddlewares = async (ctx, next) => {
  if (i) {
    next()//直接执行下一个中间件 routerMiddlewares2
  } else {
    ctx.body = 'err' //执行这个中间件 ,无next不用执行routerMiddlewares2
  }
}

const routerMiddlewares2 = (ctx, next) => {
  ctx.body = '3'
}


const router = new Router()
router.get('/', routerMiddlewares, routerMiddlewares2)
app.use(router.routes())
  .use(router.allowedMethods())


app.listen(3000)
console.log(":3000")
