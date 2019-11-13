const Koa = require('koa');
const app = new Koa();

const mid = ctx => {
    ctx.throw(500);
    //ctx.status=500
};

app.on('error', (err, ctx) => {
    console.error('server error', err);
});

app.use(mid);
app.listen(3000);
