const controller = require('../controller/admin/index')
const user = require('../controller/user')
const article = require('../controller/article/index.js')
const goods = require('../controller/goods')

const component = require('../controller/component')
const global = require('../controller/global')
const contact = require('../controller/contact')
const message = require('../controller/message')
const Router = require('koa-router')
const router = new Router({prefix: '/api'})

//checkToken作为中间件存在
const checkToken = require('../libs/token/checkToken.js');

router.post('/adminLogin', controller.adminLogin);
//产品1
router
  .get('/goodss', goods.gets)
  .del('/goodss', checkToken, goods.dels)
  .get('/goods/:_id', goods.get)
  .post('/goods', checkToken, goods.post)
  .patch('/goods', checkToken, goods.patch)
  .del('/goods/:_id', checkToken, goods.del)

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
  .post('/upload', checkToken, controller.upload)
//carousel
router.get('/components', component.get)
  .put('/components', component.put)


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

router.get('/wOrder', checkToken, controller.wOrder);
module.exports = router;
