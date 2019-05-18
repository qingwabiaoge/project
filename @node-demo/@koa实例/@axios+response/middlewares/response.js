//这个中间件需要放到的第一位
module.exports = async (ctx, next) => {
    try {
        //捕捉await next() 全局返回的错误
        await next()
       // 经过了后面的路由的中间件,查看ctx的键body  有没有被赋值
        ctx.body = ctx.body || {
            code: ctx.state.code || 0,
            msg: ctx.state.msg || '操作成功',
            data: ctx.state.data || {0: '默认返回值'}
        }
    }
    catch (e) {
        console.log(e)//输出错误到控制台 给pm2记录
        ctx.status = 200
        ctx.body = {
            code: -1,
            data: {msg: +e && e.message ? '操作失败' + e.message : '操作失败' + e.toString()}
        }
    }
}
