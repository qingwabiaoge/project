const Koa = require('Koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body += 'root'
})


router.get('/cs', async (ctx, next) => {
  ctx.body += 'cs'
})


app.use(async (ctx, next) => {
  ctx.body += '1'
  await next()
  ctx.body += '2'
})
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(3000)
