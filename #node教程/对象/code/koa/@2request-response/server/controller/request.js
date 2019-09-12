module.exports = async (ctx, next) => {


  ctx.status = 200
  ctx.state.code = 0
  ctx.state.msg = 'hello'
  ctx.state.data = 'state.customData数据'


  console.log("ctx-----------")
  console.log(Object.keys(ctx))

  console.log('ctx.request.header----------------')
  //ctx.req是node的request对象
  console.log(ctx.request.header === ctx.req.headers)  //true
  console.log(ctx.request.header === ctx.header) //true
  console.log(ctx.request.header)
  console.log('cookie:',ctx.req.headers.cookie)


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
