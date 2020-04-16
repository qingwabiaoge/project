
const formdataTopic = require('../tool/formdataToPic.js')
const base64ToPic = require('../tool/base64ToPic')
module.exports = async (ctx, next) => {


  ctx.status = 200
  ctx.state.code = 0
  ctx.state.msg = 'msg'
  ctx.state.data = 'data'


    //1.1后端设置ｃｏｏｋｉｅ:此方法仅用于ｈｔｔｐ请求localhost:3000/api时,后端向浏览器cookie设置toekn
    ctx.cookies.set(
      'cid',
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
    //1.2 koa版后端获取cookie此方法仅用于获取ｈｔｔｐ请求localhost:3000/api时获取request.cookie里的token
    console.log(`ctx.cookies.get('username')------`)
    console.log(ctx.cookies.get('username'))



  /*2.1 前端设置cookiee  ajax请求时浏览器不会自动向ctx.headers.cookie注入token值,就只能自己在axios注入token,代码为axios.defaults.headers.common['Authorization'] = 'DEFAULT.TOKEN';*/

  //http和axios都可以使用获取token
  console.log("ctx.req.rawHeaders-----------")
  console.log(ctx.req.rawHeaders)

  //http和axios都可以使用获取token
  console.log("ctx.req.headers-----------")
  console.log(ctx.req.headers)

  //http和axios都可以使用获取token
  console.log('ctx.header=ctx.request.header=ctx.req.headers----------------')
  console.log(ctx.request.header === ctx.req.headers, ctx.header === ctx.request.header)  //true
  console.log(ctx.header)

  console.log(`ctx.request.method------`)
  console.log(ctx.method === ctx.request.method)
  console.log(ctx.method)

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
  if (ctx.request.body.base64) {
    base64ToPic(ctx.request.body.base64)
  }

  console.log('ctx.request.files--------------')
  console.log(ctx.request.files === ctx.request)
  console.log(ctx.request.files)
  if (ctx.request.files) {
    formdataTopic(ctx.request.files.file)
  }


  console.log('ctx.params---------')
  console.log(ctx.request.params === ctx.params) //false
  console.log(ctx.params)


}
