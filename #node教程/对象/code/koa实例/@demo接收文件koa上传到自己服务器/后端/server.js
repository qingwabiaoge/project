const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const Router = require('koa-router')
const koaBody = require('koa-body')
const fs = require('fs')

const app = new Koa()
const router = new Router()
const staticPath = './static'
var cors = require('koa2-cors');




router.post('/uploadfile', async (ctx, next) => {
    // 上传单个文件

    const file = ctx.request.files.file; // 获取上传文件


    // 创建可读流
    const reader = fs.createReadStream(file.path);

    //当前时间挫
    const timestamp = (new Date()).valueOf();
    //取得后缀名
    const suffix=file.type.split('/')[1]
    //改名
    const rename=timestamp+'.'+suffix;
    //在服务器路径
    const filePath = path.join(__dirname, './static/upload') + `/${rename}`;

    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = "上传成功！";
});

//静态目录插件
app.use(static(path.join(__dirname, staticPath)))
//跨域
app.use(cors());
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 1 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
    }
}));


app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
    console.log('[demo] static-use-middleware is starting at port 3000')
})