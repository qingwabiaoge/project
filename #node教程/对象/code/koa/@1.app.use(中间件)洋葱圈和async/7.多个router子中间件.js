const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')


const routerMiddlewares = async (ctx, next) => {
  ctx.body += '1'
  next()
  ctx.body += '2'
}

const routerMiddlewares2 = (ctx, next) => {
  ctx.body += '3'
  next()
  ctx.body += '4'
}
const router = new Router()
router.get('/', routerMiddlewares, routerMiddlewares2)
app.use(router.routes())
  .use(router.allowedMethods())


app.listen(3000)
console.log(":3000")
