module.exports = async (ctx, next) => {
    //node的req对象
    ctx.body ={req:Object.keys(ctx.req),cookie:ctx.req.headers.cookie}

}