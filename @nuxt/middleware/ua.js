export default(ctx)=> {
//新建函数挂载在app上 app.fn
//   console.log(ctx)

  ctx.userAgent = process.server ? ctx.req.headers["user-agent"]
                                 : navigator.userAgent;
}
