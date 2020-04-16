const path = require('path')
const Koa = require('koa')

const static = require('koa-static')

const router = require('./router')

const defalutResponse = require('./midwares/defalutResponse')

const root = path.join(__dirname, '../dist')

const bodyParser = require('koa-bodyparser')

//xml中间件
const xmlParser = require('koa-xml-body') // note the default

const app = new Koa()
app.use(static(root))
   .use(defalutResponse)
   .use(xmlParser())
   .use(bodyParser())
   .use(router.routes())
   .use(router.allowedMethods())
app.listen(3000)
