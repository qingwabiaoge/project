const Koa = require('koa')
const app = new Koa()

function fn(m, n) {

    return (ctx, next) => {
        ctx.body += m
        next()
        ctx.body += n
    }

}


app.use(fn('1', '2'))
    .use(fn('3', '4'))
    .use(fn('5', '6'))

app.listen(3000)

