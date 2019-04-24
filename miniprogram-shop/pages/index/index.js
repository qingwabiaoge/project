// pages/index/index.js
import {get} from '../../util.js'
import CONFIG from '../../config.js'
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
        //导航数据
        icoNav: app.goodsCategory,
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

        wx.navigateTo({url:'/pages/search/index'})
    },
    onConfirm() {

    },
    onBlur() {
        this.onConfirm()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        get('goodss', {flag: true}).then(
            ({goodss}) => {

//设置data对象
                this.setData({goodss})

            }
        )

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