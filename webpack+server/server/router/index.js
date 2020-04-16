const Router = require('koa-router')


const autorMidware = require('../router-midwares/autorMidware')
const koaBodyMidware=require('../router-midwares/koaBodyMidware')

const request = require('../controllers/request')


const router = new Router({prefix: '/api'})
router.get('/', (ctx, next) => {
  ctx.body = 'index'
})

router.get('/request', request)
  .del('/request', request)
  .post('/request', request)
  .put('/request', request)
  .patch('/request', request)


router.get('/autor', autorMidware, request)

router.post('/formdata', koaBodyMidware,request)




module.exports = router
