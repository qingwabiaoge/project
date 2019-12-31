const Koa = require('koa')

const app = new Koa()

function fn (ctx) {
  console.log(ctx.body)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ctx.body += 2
      // ctx.body里添加2后再resolve
      resolve()
    }, 500)
  })
}

const midware = async (ctx, next) => {
  ctx.body = '1'//同步执行
  next()//同步执行
  await fn(ctx)// midware函数还没执行结束,等待接收异步函数的值undefined
}
const midware2 = (ctx, next) => {
  ctx.body += '3'
  next()
  ctx.body += '4'
}

app.use(midware)
app.use(midware2)
app.listen(3000)
