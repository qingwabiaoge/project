const Koa = require('koa')
const app = new Koa()
app.use((ctx, next) => {
 ctx.sendError('000002', '该用户名已存在');
})
app.listen(3000)
