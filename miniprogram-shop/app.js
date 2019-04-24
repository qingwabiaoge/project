//app.js
import {get, addImageHttp} from './util.js'
import config from './config'

require('./libs/mixin.js')


const regeneratorRuntime = require('./libs/runtime')
App({
    host: '/',
    userInfo: null,
    components: {},
    categorys: [],
    goodsCategory: [],
    articleCategory: [],

    onLaunch: async function () {
        //獲得原始的components
        let {components} = await get(`components`)

        console.log(components)
        //獲得components
        components.forEach((item, index, self) => {
            this.components[item.key] = item
        })


        this.categorys = components.filter(item => item.isCategory === true)


        this.goodsCategory = this.components.goods.children


        this.articleCategory = this.components.article.children


        console.log('app', this)

        // //获取缓存中的用户信息
        // const openId = wx.getStorageSync('openId')
        // const {userInfo} = await get('getUser', {openId})
        // this.userInfo = userInfo
        //

    }
})