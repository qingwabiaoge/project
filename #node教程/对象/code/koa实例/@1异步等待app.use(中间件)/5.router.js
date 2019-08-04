const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')


router = new Router()
router.get('/cs', async (ctx, next) => {
    ctx.body = 'routeBefore'
    await next()
    ctx.body += 'routeAfter'
})


app.use(router.routes())
    .use(router.allowedMethods())
    .use(async (ctx, next) => {
        ctx.body += '1';
        await next();
        ctx.body += 2;

    })

app.listen(3000)
console.log(":3000")