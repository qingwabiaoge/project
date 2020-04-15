const Koa = require('koa')

const app = new Koa()

const logger =  (ctx, next) => {
  // 在ctx.body前运行
  if(ctx.request.url==='/'){
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  }
   next()
  // ctx.body后运行
  if(ctx.request.url==='/'){
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  }
}

const midware = (ctx) => {
  ctx.body = 1
}

app.use(logger)
app.use(midware)
app.listen(3000)
