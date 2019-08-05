const Koa=require('koa')
const app=new Koa()
const Router=require('koa-router')
admin=new Router()
admin.get('/a',ctx=>ctx.body='a')
admin.get('/b',ctx=>ctx.body='b')

weixin=new Router()
weixin.get('/c',ctx=>ctx.body='c')
weixin.get('/d',ctx=>ctx.body='d')



router=new Router()
router.use('/admin',admin.routes(),admin.allowedMethods())
router.use('/weixin',weixin.routes(),weixin.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3004)

console.log(3004)