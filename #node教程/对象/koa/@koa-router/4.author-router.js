const Koa = require('koa')
const Router = require('koa-router')
var router = new Router
const app = new Koa()


const token = true
const routerMidware = (ctx, next) => {
  if (token) {
    return next()
  } else {

    ctx.body = {
      code: '-1',
      msg: 'login pleaese'
    }
  }
}


const nav = `<a href="/">index</a> <a href="/routerMidware">routerMidware</a><hr>`

router.get('/', (ctx, next) => ctx.body = `${nav}index`)
router.get('/autor', routerMidware, (ctx, next) => ctx.body = `${nav}routerMidware`)
app.use(router.routes()).use(router.allowedMethods())
app.listen(3004)
console.log(3004)
