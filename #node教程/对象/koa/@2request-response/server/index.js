const Koa = require('Koa')
const app = new Koa()//实例化koa
const router = require('./router')


const cors = require('koa2-cors')
var xmlParser = require('koa-xml-body') // note the default
var bodyParser = require('koa-bodyparser')
const response = require('./middlewares/response')


app.use(response)
  .use(cors())
  //xmlParser必须和bodyParser一起用 并删除koaBody, 貌似还要放到全局

  .use(xmlParser())
  .use(bodyParser())
  //router要放到bodyParser后
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
console.log('start 3000')

