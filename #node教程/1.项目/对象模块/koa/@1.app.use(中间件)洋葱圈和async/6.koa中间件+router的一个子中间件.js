const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const routerMiddlewares = async (ctx, next) => {
  ctx.body += '3'
  await next()
  ctx.body += '4'
}
const router = new Router()
router.get('/', routerMiddlewares)



const normalMiddlewares = async (ctx, next) => {
  ctx.body = '1' // 在路由执行前添加
  await next()
  ctx.body += '2'// 在路由执行后添加
}




//使用普通中间件
app.use(normalMiddlewares)
  //使用路由中间件
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
console.log(':3000')
