const Koa = require('koa')
const app = new Koa()


const logger = async (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    await  next();
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
}
app.use(logger);

app.use(ctx=>{ctx.body=1})
app.listen(3000)