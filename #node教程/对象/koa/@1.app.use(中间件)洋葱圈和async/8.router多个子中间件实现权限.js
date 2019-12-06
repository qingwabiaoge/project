const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

const control = async (ctx, next) => {

  ctx.body = '1'
  await next()

  ctx.body += '2'
}


const i = 0
const routerMiddlewares = (ctx, next) => {
  if (i) {
    //ctx.body += '3';
    return next() //如果没有next()则不执行下一个routerMiddlewares
  } else {
    ctx.body += 'err'
  }
}


const routerMiddlewares2 = (ctx, next) => {
  ctx.body += '5'
  next()
  ctx.body += '6'
}
router.get('/', routerMiddlewares, routerMiddlewares2)


app.use(control)
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(3000)
console.log(':3000')
