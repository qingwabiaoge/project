module.exports = async (ctx, next) => {


    ctx.response.body = {data:{msg:'msg'}, code: 0}
    ctx.response.status=201
    console.log("ctx-----------")
    console.log(Object.keys(ctx))



    console.log("ctx.request.url---------")
    console.log(ctx.url === ctx.request.url);
    console.log(ctx.request.url)


    console.log("ctx.request.ip---------")
    console.log(ctx.ip === ctx.request.ip);
    console.log(ctx.request.ip)

    console.log("ctx.request.query---------")
    console.log(ctx.query === ctx.request.query);
    console.log(JSON.stringify(ctx.request.query))


    console.log('ctx.request.body---------')
    console.log(ctx.request.body)


    console.log('ctx.request.files.file--------------')
    console.log(ctx.request.files)


    console.log('ctx.params---------')
    console.log(ctx.params)


}
