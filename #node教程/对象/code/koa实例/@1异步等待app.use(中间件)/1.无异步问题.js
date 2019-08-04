const Koa = require('koa')
const app = new Koa()
app.use((ctx, next) => {
    ctx.body = '1',
        next()
    ctx.body += 2
})
app.use((ctx, next) => {
    ctx.body += '3',
        next()
    ctx.body += 4
})

app.listen(3000)
console.log(":3000")