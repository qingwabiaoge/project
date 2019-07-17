const Koa = require('koa')
const app = new Koa()
const json = require('./data/test')


const readFile = async (ctx) => {
    ctx.body = json
}

app.use(readFile)
app.listen('3000')

