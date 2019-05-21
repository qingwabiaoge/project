const Koa = require('koa');
const app = new Koa();
global.i = 1
app.use((ctx, next) => {
    i+=1
    ctx.body = i
})
app.listen(3000)