const admin = require('../controller/admin/index')
const user = require('../controller/user')
const article = require('../controller/article/index.js')
const produce = require('../controller/produce')
const category = require('../controller/category')
const component = require('../controller/component')
const global = require('../controller/global')
const message = require('../controller/message')
const Router = require('koa-router')
const router = new Router({prefix: '/api'})

//checkToken作为中间件存在
const checkToken = require('../libs/token/checkToken.js');
router.get('/test', ctx => ctx.body = {code: '0', data: {msg: '后端返回的消息', produce: '家具'}})
router.post('/login', admin.login);
//产品1
router
  .get('/produces', produce.gets)
  .del('/produces', checkToken, produce.dels)
  .get('/produce/:_id', produce.get)
  .post('/produce', checkToken, produce.post)
  .patch('/produce', checkToken, produce.patch)
  .del('/produce/:_id', checkToken, produce.del)

//文章

router
  .get('/articles', article.gets)
  .del('/articles', checkToken, article.dels)
  .get('/article/:_id', article.get)
  .post('/article', checkToken, article.post)
  .patch('/article/', checkToken, article.patch)
  .del('/article/:_id', checkToken, article.del)

//栏目

//message
router
  .get('/messages', message.gets)
  .post('/message', message.add)
  .del('/message/:_id', checkToken, message.del)
  .del('/messages/',checkToken, message.dels)

//上传图片到oss

router
  .post('/upload', checkToken, admin.upload)
//carousel
router .get('/category/:_id', category.get)
  .get('/categorys', category.gets)
  .post('/category', category.post)
  .patch('/category', category.patch)
  .del('/category/:_id',  category.del)


router .get('/component/:_id', component.get)
  .get('/components', component.gets)
  .post('/component', component.post)
  .patch('/component', component.patch)
  .del('/component/:_id',  component.del)


router
  .get('/global', global.get)
  .patch('/global', checkToken, global.patch)


// 微信登录支付
router
  .get('/login', user.login)
router
  .get('/getUser', user.getUser)
  .post('/addContact', user.addContact)

router.get('/wOrder', checkToken, admin.wOrder);
module.exports = router;
