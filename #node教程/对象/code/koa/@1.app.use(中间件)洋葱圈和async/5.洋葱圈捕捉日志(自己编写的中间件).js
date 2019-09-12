const Koa = require('koa')
const app = new Koa()


const logger = async (ctx, next) => {
  //在ctx.body前运行
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    await next();
    //ctx.body后运行
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
}


app.use(logger);
app.use(ctx => {
    ctx.body = 1
})
app.listen(3000)
