// pages/index/index.js
import {get} from '../../util.js'

const regeneratorRuntime = require('../../libs/runtime')
const { computed} = require('../../libs/vuefy.js')
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        //幻灯片
        componentDatas: [],
        //搜索框的默认值
        name: '',
        swiperData:[],
        //导航数据
        //热卖商品列表
        goodss: []

    },
    // 搜索框收入人内容
    onChange({detail}) {
        this.setData({name: detail.value})

    },
    onClear() {
        this.setData({name: ''})

    },
    onFocus(e) {

        wx.navigateTo({url: '/pages/search/index'})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        const {goodss} = await get('goodss', {flag: true})
        this.setData({goodss})


        computed(this, {
            icoNavData: function () {
                return app.goodsCategory
            },
            swiperData(){
                return app.components.swiper.children
            }
        })
    }
    ,

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {


    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log("刷新")
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log("触底")
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})