const Router = require('koa-router')



const autorMidware=require('../router-midwares/autorMidware')
const response=require('../controllers/response')




const router = new Router({ prefix: '/api' })
router.get('/', (ctx, next) => {
  ctx.body = 'index'
})


router.get('/response', response)
      .del('/response', response)
      .post('/response', response)

    

router.get('/autor', autorMidware, response)



module.exports = router