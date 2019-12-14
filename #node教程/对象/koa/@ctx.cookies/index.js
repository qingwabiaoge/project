const Koa = require('koa')
const app = new Koa()
const setCookie = require('./setCookie')
app.use(setCookie)

app.listen(3000)
console.log(3000)
