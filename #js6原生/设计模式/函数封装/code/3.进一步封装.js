const Koa = require('koa')
const app = new Koa()

function fn(m, n) { //m,n ���õĵط�

    app.use((ctx, next) => { //��������ͬ�ĵط�
        if (!ctx.body) {
            ctx.body = m
        } else {
            ctx.body += m
        }
        next()
        ctx.body += n
    })

}

fn('1', '2')
fn('3', '4')
fn('5', '6')
app.listen(3000)
