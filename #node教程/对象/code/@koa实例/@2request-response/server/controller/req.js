module.exports = async (ctx, next) => {
    //node的req对象
    ctx.body =Object.keys(ctx.req)
}