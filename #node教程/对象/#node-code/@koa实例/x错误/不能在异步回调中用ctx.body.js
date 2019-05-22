const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')




const read = async (ctx) => {
    ctx.body = 1
    fs.readFile(path.join(__dirname, './data/test.json'), (err, data) => {

        if (err) {
            console.log(err)
        } else {
            //ctx.body在异步回调里无效 ,mongoose的回调函数也是异步回调
            ctx.body = data.toString()
        }

    })
}

app.use(read)
app.listen(3000)