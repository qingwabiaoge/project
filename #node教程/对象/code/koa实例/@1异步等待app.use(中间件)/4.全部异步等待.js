const Koa = require('koa')
const app = new Koa()

function f(n) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(n)
            }, 1000)
        }
    )
}

app.use(async (ctx, next) => {
    ctx.body = '1'
    await next()  //等下下一个中间件
    const res = await f(2) //async await异步等待接收
    ctx.body += res
})
app.use(async (ctx, next) => {
    ctx.body += '3'
    await next()
    const res = await f(4) //async await异步等待接收
    ctx.body += res

})
app.use(async (ctx, next) => {
    ctx.body += '5',
        await  next()
    const res = await f(6) //async await异步等待接收
    ctx.body += res
})
app.listen(3000)
console.log(":3000")