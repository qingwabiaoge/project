module.exports = (ctx, next) => {
  if (ctx.request.header.authorization === 'mytoken') {
    next()
  } else {
    ctx.state.code = -1
    ctx.state.msg = '登录失败'
  }
}
