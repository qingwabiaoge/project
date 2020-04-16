const Koa=require('koa')
const app=new Koa()
const koaStatic=require('koa-static')


const port=8888

app.use(koaStatic(__dirname))

app.listen(port)

console.log(`listen ${port}`)


