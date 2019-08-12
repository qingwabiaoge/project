const Koa = require('Koa')


const Router = require('Koa-router')
const app = new Koa()//实例化koa
const router = new Router//ronter作用：koa根目录响应-》若干目录响应
const cors = require('koa2-cors');
const koaBody = require('koa-body')
var xmlParser = require('koa-xml-body'); // note the default
var bodyParser = require('koa-bodyparser');
const controller = require('./controller')
const response = require('./middlewares/response')


router

//koa的request对象
    .get('/request/', controller.request)
    .get('/request/:id', controller.request)
    .put(/request/, controller.request)
    .post('/request/', controller.request)
    .del('/request/', controller.request)
    //指定路由使用中间件
    .post('/request-file/',
        koaBody({
            parsedMethods: [
                'POST',
                'PUT',
                'PATCH',
                'DELETE'//允许解析delete
            ],
            multipart: true,
            formidable: {
                maxFileSize: 1 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
            }
        }),
        controller.request)


app.use(response)
    .use(cors())


    //xmlParser必须和bodyParser一起用 并删除koaBody, 貌似还要放到全局
    .use(xmlParser())
    .use(bodyParser())


    //取得json ,router要放到bodyParser后
    .use(router.routes())
    .use(router.allowedMethods())


app.listen(3000)
console.log('start 3000')

