const Koa = require('koa')

const app = new Koa()

function fn2 (ctx) {
  console.log(ctx.body)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ctx.body += 2
      // ctx.body里添加2后再resolve
      resolve()
    }, 500)
  })
}

function fn4 (ctx) {
    console.log(ctx.body)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        ctx.body += 4
        // ctx.body里添加2后再resolve
        resolve()
      }, 500)
    })
  }

const midware = async (ctx, next) => {
  ctx.body = '1'//同步执行
  await next()//异步
  await fn2(ctx)// 等待接收异步函数的值undefined,才结束函数
}
const midware2 = async (ctx, next) => {
  ctx.body += '3'
  next()
  await fn4(ctx)
}

app.use(midware)
app.use(midware2)
app.listen(3000)
