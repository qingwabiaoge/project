const Koa = require('koa')
const app = new Koa()

app.use((ctx, next) => {
  ctx.body=ctx.cookies.get('username')||'没有token';
  //1.1后端设置ｃｏｏｋｉｅ:此方法仅用于ｈｔｔｐ请求localhost:3000/api时,后端向浏览器cookie设置toekn
  ctx.cookies.set(
    'username',
    'token_code_xxx',
    {
      domain: 'localhost',  // 写cookie所在的域名
      path: '/',       // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date('2017-02-15'),  // cookie失效时间
      httpOnly: false,  // 是否只用于http请求中获取
      overwrite: false  // 是否允许重写
    }
  )
})
app.listen(3000)
