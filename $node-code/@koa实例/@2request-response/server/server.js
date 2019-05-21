const Koa = require('Koa')


const Router = require('Koa-router')
const app = new Koa()//实例化koa
const router = new Router//ronter作用：koa根目录响应-》若干目录响应
const cors = require('koa2-cors');
const koaBody = require('koa-body')
// const xmlParser = require('koa-xml-body')
const controller = require('./controller')
const response = require('./middlewares/response')


router
    .get('/req', controller.req)
    .get('/res', controller.res)

    .get('/request/', controller.request)
    .get('/request/:id', controller.request)

    .post('/request/', controller.request)

    .del('/request/', controller.request)

app.use(response)
    .use(cors())
    // .use(xmlParser())
    .use(koaBody({
        parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],//允许解析delete
        multipart: true,
        formidable: {
            maxFileSize: 1 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
        }
    }))
    // 使用ctx.body解析中间件
    .use(router.routes())
    .use(router.allowedMethods())//router貌似要放到最后

app.listen(3000)
console.log('start 3000')

