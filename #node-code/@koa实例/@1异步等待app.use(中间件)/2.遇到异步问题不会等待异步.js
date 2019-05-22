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
    setTimeout(() => {
        ctx.body += 4
    }, 1000)  //还未输出 app程序已运行完毕

})
app.use((ctx, next) => {
    ctx.body += '5',
        next()
    ctx.body += 6
})
app.listen(3000)
console.log(":3000")