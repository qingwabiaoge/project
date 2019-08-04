const Koa = require('koa')
const app = new Koa()

function fn(ctx) {
    setTimeout(() => {
        ctx.body += 2
    })  //还未输出 app程序已运行完毕
}

app.use((ctx, next) => {
    ctx.body = '1',
        next()
    fn(ctx)
    
})
app.use((ctx, next) => {
    ctx.body += '3',
        next()
    ctx.body += '4'

})

app.listen(3000)
console.log(":3000")