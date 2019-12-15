const Koa = require('koa')
const app = new Koa()
const setCookie = async (ctx) => {
  ctx.cookies.set(
    'cid',
    'token',    //可替换为token
    {
      domain: 'localhost',  // 写cookie所在的域名
      path: '/',       // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date('2017-02-15'),  // cookie失效时间
      httpOnly: false,  // 是否只用于http请求中获取
      overwrite: false  // 是否允许重写
    }
  )
  ctx.body = 'cookie is ok'

}

app.use(setCookie)

app.listen(3000)
console.log(3000)
