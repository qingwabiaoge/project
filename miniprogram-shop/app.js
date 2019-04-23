//app.js
import {get} from './util.js'

require('./libs/mixin.js')

const regeneratorRuntime = require('./libs/runtime')
App({

    userInfo: null,
    components: {},
    categorys: [],
    goodsCategory: [],
    articleCategory: [],

    onLaunch: async function () {
        //獲得原始的components
        const {components} = await get(`components`)   //按照键值名分裂数组
        const _components = components

        //獲得components
        _components.forEach((item, index, self) => {
            this.components[item.key] = item
        })


        this.categorys = _components.filter(item => item.isCategory === true)


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