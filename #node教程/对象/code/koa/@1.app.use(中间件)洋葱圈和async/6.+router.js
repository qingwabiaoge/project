const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')


router = new Router()
router.get('/', async (ctx, next) => {
    ctx.body += 'root'
})


app.use(async (ctx, next) => {
    ctx.body = '1';
    await next();
    ctx.body += 2;

})
    .use(router.routes())
    .use(router.allowedMethods())


app.listen(3000)
console.log(":3000")