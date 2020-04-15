const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

const normalMiddlewares = async (ctx, next) => {

  ctx.body = '页头'
  await next()

  ctx.body += '页尾'
}


const hasToken = false

const routerAutorMiddleware = (ctx, next) => {
  if (hasToken) {
    //ctx.body += '3';
   next() //如果没有next()则不执行下一个routerMiddlewares,能执行normalMiddlewares的ctx.bocy_=2估计是路由中间件做了设置
  } else {
    ctx.body += '无权打开本页面'
  }
}


const routerMiddleware = (ctx, next) => {
  ctx.body += '3'
  next()
  ctx.body += '4'
}


router.get('/', routerAutorMiddleware, routerMiddleware)


app.use(normalMiddlewares)
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(3000)
console.log(':3000')
