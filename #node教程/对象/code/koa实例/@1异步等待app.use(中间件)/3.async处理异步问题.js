const Koa = require('koa')
const app = new Koa()

async function fn(ctx) {
    ctx.body += 2
}

app.use(async (ctx, next) => {
    ctx.body = '1';
    await next() //接收next()的promise

    await fn(ctx)

})
app.use(async (ctx, next) => {
    ctx.body += '3';
    next();
    ctx.body += '4'
})
app.listen(3000)