const admin = require('../controller/admin/index')
const user = require('../controller/user')
const article = require('../controller/article/index.js')
const produce = require('../controller/produce')

const component = require('../controller/component')
const global = require('../controller/global')
const contact = require('../controller/contact')
const message = require('../controller/message')
const Router = require('koa-router')
const router = new Router({prefix: '/api'})

//checkToken作为中间件存在
const checkToken = require('../libs/token/checkToken.js');
router.get('/test', ctx => ctx.body = {code: '0', data: {msg: '后端返回的消息', produce: '家具'}})
router.post('/adminLogin', admin.adminLogin);
router.get('/validateToken',checkToken,admin.validateToken)
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
  .get('/getMessages', message.getMessages)
  .post('/addMessage', message.addMessage)
  .post('/delMessage/:_id', checkToken, message.delMessage)
  .post('/delMessages/', message.delMessages)

//上传图片到oss

router
  .post('/upload', checkToken, admin.upload)
//carousel
router.get('/components', component.gets)
  .post('/component', component.post)
  .patch('/component', component.patch)
  .del('/component/:_id',  component.del)


router
  .get('/global', global.get)
  .patch('/global', checkToken, global.patch)

router
  .get('/getContact', contact.getContact)
  .patch('/editContact', checkToken, contact.editContact)
// 微信登录支付
router
  .get('/login', user.login)
router
  .get('/getUser', user.getUser)
  .post('/addContact', user.addContact)

router.get('/wOrder', checkToken, admin.wOrder);
module.exports = router;
