const Koa = require('koa')

const app = new Koa()

const logger = async (ctx, next) => {
  // 在ctx.body前运行
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  await next()
  // ctx.body后运行
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
}

const midware = (ctx) => {
  ctx.body = 1
}

app.use(logger)
app.use(midware)
app.listen(3000)
