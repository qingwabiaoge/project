const debug = require('debug')('koa-weapp-demo')
module.exports = async function (ctx, next) {
    try {

        await next() // catch 住全局的抛出的错误  await next()洋葱圈
       /*
       处理响应结果
        如果直接写入在 body 中，输出body
        如果写在 ctx.body 为空，则查看ctx.state.code state是否设置
        */
        ctx.body = ctx.body ? ctx.body : {
            code: ctx.state.code !== undefined ? ctx.state.code : 0,//如果没有设置输出0
            data: ctx.state.data !== undefined ? ctx.state.data : {msg:'操作成功'}
        }
    }
    catch (e) {
         console.log(e)//输出错误到控制台 给pm2记录
        debug('Catch Error: %o', e)
        // 设置状态码为 200 msg,给axios接收
        ctx.status = 200
        ctx.body = {
            code: -1,
            data: {msg: +e && e.message ? '操作失败' + e.message : '操作失败' + e.toString()}
        }
    }
}
