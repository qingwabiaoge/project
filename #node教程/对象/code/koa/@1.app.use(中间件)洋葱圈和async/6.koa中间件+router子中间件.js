const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

const control = async (ctx, next) => {
  ctx.body = '1'; //在路由执行前添加
  await next();
  ctx.body += '2';////在路由执行后添加
}

const routerControl = async (ctx, next) => {
  ctx.body += '3'; //在路由执行前添加
  await next();
  ctx.body += '4';////在路由执行后添加
}
router.get('/', routerControl)


app.use(control)
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(3000)
console.log(":3000")
