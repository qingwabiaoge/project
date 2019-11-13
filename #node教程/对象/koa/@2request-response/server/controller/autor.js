module.exports = (ctx, next) => {
  ctx.status = 200
  ctx.state.code = 0
  ctx.state.msg = '有权限'
  ctx.state.article = '权限页面数据'
}
