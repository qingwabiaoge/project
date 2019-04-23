import {get, weixinGetUserInfo, weixinLogin} from '../../util.js'
//index.js
//获取应用实例
const regeneratorRuntime = require('../../libs/runtime')
const app = getApp()

Page({
    data: {
        userInfo: false,
        // canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

    //检查登陆状态
    getUserInfo: async function () {
        //如果有全局数据
        // 说明是app.js获取了globalData.userInfo是
        // 是二次登陆
        const openId = wx.getStorageSync('openId')
        const {userInfo} = await get('getUser', {openId})
        this.setData({
            userInfo: userInfo,
        })

    },
    onLoad(){
        this.getUserInfo()
    },

    //首次获得用户信息和登录,登陆弹窗授权后wx.getUserInfo可用
    async login() {
        // @特别注意:如果以前点过收权框得到的iv code encryptedData会登陆失败
        const {iv, encryptedData} = await weixinGetUserInfo()
        const {code} = await weixinLogin()
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const {openId} = await get('login', {iv, code, encryptedData})
        //设置本地缓存供二次登陆登录时间app.js读取缓存
        wx.setStorageSync('openId', openId)
        this.getUserInfo()
    }
    ,
    order() {

        get('wOrder').then(({payParam}) => {//五个参数

            wx.requestPayment(
                {
                    ...payParam,//五个参数
                    'success': function (res) {
                        console.log('支付成功'), console.log(res)
                    },
                    'fail': function (res) {
                        console.log('支付失败'), console.log(res)
                    },
                    'complete': function (res) {
                        console.log('complete'), console.log(res)
                    }
                })
        })
    }
})
