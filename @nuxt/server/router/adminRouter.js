const controller = require('../controller/admin')
const Router = require('koa-router');
const router = new Router();
//checkToken作为中间件存在
const checkToken = require('../libs/token/checkToken.js');


router.post('/adminLogin', controller.adminLogin);
//产品1
router
    .get('/goodss', controller.getGoodss)
    .get('/getGoodsById/:id', controller.getGoodsById)
    .post('/goods', controller.addGoods)
    .post('/editGoods', controller.editGoods)
    .post('/delGoods', controller.delGoods)
    .post('/delGoodss', controller.delGoodss);
//文章
router
    .get('/getArticles', controller.getArticles)
    .get('/getArticleById/:id', controller.getArticleById)
    .post('/addArticle', controller.addArticle)
    .post('/editArticle', controller.editArticle)
    .post('/delArticle', controller.delArticle)
    .post('/delArticles', checkToken, controller.delArticles);
//上传图片到oss

router
    .post('/upload', controller.ossUpload)
//carousel
router
    .get('/getBanners', controller.getBanners)
    .post('/addBanner', controller.addBanner)
    .post('/editBanner', controller.editBanner)
    .post('/delBanner', controller.delBanner)
router
    .get('/global', controller.getGlobal)
    .patch('/global', controller.patchGlobal)
// 微信登录支付
router
    .get('/login', controller.login)
router
    .get('/getUser', controller.getUser)
    .get('/editUser', controller.editUser)

router.get('/wOrder', controller.wOrder);
module.exports = router;
