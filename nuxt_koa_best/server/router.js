const controller = require('./controller/admin/index')
const user = require('./controller/user')
const category = require('./controller/category/')
const article = require('./controller/article/index.js')
const goods = require('./controller/goods')
const componentData = require('./controller/componentData')
const global = require('./controller/global')
const Router=require('koa-router')
const router = new Router({prefix: '/api'})

//checkToken作为中间件存在
const checkToken = require('./libs/token/checkToken.js');

router.post('/adminLogin', controller.adminLogin);
//产品1
router
    .get('/getGoodss', goods.getGoodss)
    .get('/getGoodsById/:_id', goods.getGoodsById)
    .post('/addGoods', checkToken,goods.addGoods)
    .post('/editGoods', checkToken,goods.editGoods)
    .post('/delGoods',checkToken, goods.delGoods)
    .post('/delGoodss',checkToken, goods.delGoodss);
//文章
router
    .get('/getArticles', article.getArticles)
    .get('/getArticleById/:_id', article.getArticleById)
    .post('/addArticle',checkToken, article.addArticle)
    .post('/editArticle/',checkToken, article.editArticle)
    .post('/delArticle/:_id',checkToken, article.delArticle)
    .post('/delArticles', checkToken, article.delArticles);
//栏目
router
    .get('/getCategorys', category.getCategorys)
    .get('/getCategoryById/:_id', category.getCategoryById)
    .post('/addCategory',checkToken, category.addCategory)
    .post('/editCategory', checkToken,category.editCategory)
    .post('/delCategory/:_id',checkToken, category.delCategory)
    .post('/delCategorys', checkToken, category.delCategorys);

//上传图片到oss

router
    .post('/upload',checkToken, controller.upload)
//carousel
router
    .get('/getComponentDatas', componentData.getComponentDatas)
    .get('/getComponentDataById/:id', componentData.getComponentDataById)
    .post('/addComponentData',checkToken, componentData.addComponentData)
    .post('/editComponentData',checkToken, componentData.editComponentData)
    .post('/delComponentData',checkToken, componentData.delComponentData)
router
    .get('/getGlobal', global.getGlobal)
    .patch('/editGlobal', checkToken,global.editGlobal)
// 微信登录支付
router
    .get('/login', user.login)
router
    .get('/getUser',checkToken, user.getUser)
    .post('/addContact',checkToken, user.addContact)

router.get('/wOrder',checkToken, controller.wOrder);
module.exports = router;
