const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const path = require('path')
const static = require('koa-static')
// const bodyParser = require('koa-bodyparser')
// const xmlParser = require('koa-xml-body');
const koaBody = require('koa-body');
const response = require('./middlewares/response.js')
const router = require('./router')
const consola = require('consola')
const {Nuxt, Builder} = require('nuxt')
const nuxt_config = require('../nuxt.config')
const host = nuxt_config.env.HOST
const port = nuxt_config.env.PORT
// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../staticPath'

app.use(response) //捕捉错误和空返回值
  .use(static(path.join(__dirname, staticPath)))
  // .use(bodyParser())
  .use(cors())
  .use(koaBody({
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],//允许解析delete
    multipart: true,
    formidable: {
      maxFileSize: 1 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
    }
  }))
  .use(router.routes())//使用主路由
  .use(router.allowedMethods());


let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })
  app.listen(port)

  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })


}

start()


// app.listen(port); //这里是巨坑 不要加host,加host画蛇添足,不填写服务器的host还无法运行
// console.log('Server listening on ' + host + ':' + port)

require('./db/index.js')//此文件有一个model引入即可





