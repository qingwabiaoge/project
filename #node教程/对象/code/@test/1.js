const Koa = require('koa')
const app = new Koa()


function fn(ctx) {
  console.log(ctx.body)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ctx.body += 2
      //ctx.body里添加2后再resolve
      resolve()
    })
  })
}

app.use(async (ctx, next) => {
  ctx.body = '1';
  next() //接收next()返回的promise
  await fn(ctx)//等待接收异步函数的值undefined

})


app.use( (ctx, next) => {
  ctx.body += '3';
  next();
  ctx.body += '4'
})
app.listen(3000)
