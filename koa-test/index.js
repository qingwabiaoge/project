const Koa=require('koa')
const static=require('koa-static')
const path=require('path')
const app=new Koa()
const root=path.join(__dirname,'./dist')
app.use(static(root))
const port=3000
app.listen(port)
console.log(port)

//http://localhost:3000/1.jpg