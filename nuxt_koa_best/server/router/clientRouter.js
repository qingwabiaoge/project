const Router = require('Koa-router')
const controller=require('../controller/client')

const clientRouter = new Router//ronter作用：koa根目录响应-》若干目录响应

clientRouter
    .get('/getArticles', controller.getArticles)
    .get('/getArticleById/:id', controller.getArticleById)
clientRouter
    .get('/getGoodss',controller.getGoodss)
    .get('/getGoodsById/:id', controller.getGoodsById)
clientRouter
    .get('/getBanners/',controller.getBanners)
// 微信登录支付




module.exports=clientRouter
