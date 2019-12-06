module.exports = (ctx, next) => {
  console.log(ctx.request.header.authorization )
  if (ctx.request.header.authorization === 'mytoken') {
   return  next()
  } else {
    ctx.state.code = -1
    ctx.state.msg = '登录失败'
  }
}
