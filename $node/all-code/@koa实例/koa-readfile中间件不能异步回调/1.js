const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')

function fn() {
    //异步回调koa不支持必须封装成promise
    return new Promise((resolve, reject) => {

        fs.readFile(path.join(__dirname, './data/test.txt'), (err, data) => {

            if (err) {
                console.log(err)
            } else {

                resolve(data.toString())
            }

        })
    })
}


const readFile = async (ctx) => {
    ctx.body = await fn()
}

app.use(readFile)
app.listen('3000')

