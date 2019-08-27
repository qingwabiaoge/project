const Router = require('Koa-router')
const admin = new Router()
const controller = require('../controller')

admin.get('/autor/', controller.autor)

module.exports = admin
