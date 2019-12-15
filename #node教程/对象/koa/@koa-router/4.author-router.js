const Koa = require('koa')
const Router = require('koa-router')
var router = new Router
const app = new Koa()


const token = false
const autor = (ctx, next) => {
  if (token) {
    return next()
  } else {

    ctx.body = {
      code: '-1',
      msg: 'login pleaese'
    }
  }
}


const nav = `<a href="/">index</a> <a href="/autor">autor</a><hr>`

router.get('/', (ctx, next) => ctx.body = `${nav}index`)
router.get('/autor', autor, (ctx, next) => ctx.body = `${nav}autor`)
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log(3000)
