const Koa = require('koa')
const app = new Koa()

function f() {
    return new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve(3)

            }, 1000)

        }
    )
}

app.use(async (ctx, next) => {
    ctx.body = '1'
    await next()
    ctx.body += 2
})
app.use(async (ctx, next) => {

    const res = await f() //async await异步等待接收执行下句
    ctx.body += res
    next()
    ctx.body += 4


})
app.use((ctx, next) => {
    ctx.body += '5',
        next()
    ctx.body += 6
})
app.listen(3000)
console.log(":3000")