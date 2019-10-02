import * as tool from '@/tool'

export default (ctx) => {
//新建函数挂载在app上 app.fn
//   console.log(ctx)

  const userAgent = process.server ? ctx.req.headers["user-agent"]
    : navigator.userAgent;

  ctx.userAgent = tool.deviceType(userAgent)

}
