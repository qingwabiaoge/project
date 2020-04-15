const Router = require('koa-router')
const token=true


const autor=async(ctx,next)=>{

ctx.body+='5'
if(token){
next()
}
ctx.body+='6'
}


const routerMiddlewares = async (ctx, next) => {
  ctx.body += '3'
  await next()
  ctx.body += '4'
}



const router=new Router({prefix: '/api'})
router.get('/',(ctx,next)=>{
  ctx.body='index'
})
router.get('/cs',autor,routerMiddlewares)

module.exports=router