const Koa = require('koa')

const app = new Koa()

function fn (ctx) {
  //写入到response对象 所以放到哪个作用域写都可以
  ctx.body += 2
}
const midware = (ctx, next) => {
  ctx.body = '1',
  next()
  fn(ctx)
}
const midware2 = (ctx, next) => {
  ctx.body += '3',
  next()
  ctx.body += '4'
}

app.use(midware)
app.use(midware2)

app.listen(3000)
console.log(':3000')
