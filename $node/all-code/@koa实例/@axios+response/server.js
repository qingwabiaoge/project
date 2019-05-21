const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const response = require('./middlewares/response')

app.use(response)
    .use(cors())
    .use(ctx => {
        const {a} = ctx.query
        ctx.status = 200

        ctx.state.code=0
        ctx.state.msg='hello'
        ctx.state.data='state.customData数据'

        //ctx.body = {code: 0, msg: 'xxx', customData: 'ctx.body数据'}
    })

app.listen(4000);

