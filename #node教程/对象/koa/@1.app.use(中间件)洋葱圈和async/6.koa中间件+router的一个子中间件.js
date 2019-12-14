const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

const router = new Router()

const normalMiddlewares = async (ctx, next) => {
  ctx.body = '1' // 在路由执行前添加
  await next()
  ctx.body += '2'// 在路由执行后添加
}


const routerMiddlewares = async (ctx, next) => {
  ctx.body += '3'
  await next()
  ctx.body += '4'
}

router.get('/', routerMiddlewares)


//使用普通中间件
app.use(normalMiddlewares)
  //使用路由中间件
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
console.log(':3000')
