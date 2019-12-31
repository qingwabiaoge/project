const Koa = require('koa')

const app = new Koa()
const Router = require('koa-router')

const router = new Router()

const normalMiddlewares = async (ctx, next) => {
  ctx.body = '1'
  await next()
  ctx.body += '2'
}

const routerMiddlewares = async (ctx, next) => {
  ctx.body += '3'
  await next()
  ctx.body += '4'
}

const routerMiddlewares2 = async (ctx, next) => {
  ctx.body += '5'
  await next()
  ctx.body += '6'
}


router.get('/', routerMiddlewares, routerMiddlewares2)

app.use(normalMiddlewares)
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
console.log(':3000')
