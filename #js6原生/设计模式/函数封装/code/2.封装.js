const Koa = require('koa')
const app = new Koa()

function callback(m, n) { //m,n ���õĵط�

    return (ctx, next) => { //��������ͬ�ĵط�
        if (!ctx.body) {
            ctx.body = m
        }else {
            ctx.body += m
        }


        next()
        ctx.body += n
    }

}

app.use(callback('1', '2'))
app.use(callback('3', '4'))
app.use(callback('5', '6'))
app.listen(3000)
