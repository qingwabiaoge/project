const Koa = require('koa')
const app = new Koa()

app.use((ctx)=>ctx.body={b:[{a:1},1]})
app.listen(3000)