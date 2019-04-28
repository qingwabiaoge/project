import {get} from '../../util.js'

const app = getApp()
const {computed} = require('../../libs/vuefy.js')
// pages/sort/index.js
Page({

    /**
     * 页面的初始数据
     */

    data: {
        // siderba数据

        siderbarData: [],
        value: 3,

        //axios数据
        page: 1,
        size: 10,
        //piclist-simple插件数据
        goodssData: [],
        noMore: false
    },

    getGoodss() {
        //柯理化函数

        get('goodss', {
            cid: this.data.value,
            page: this.data.page,
            size: this.data.size
        }).then(
            ({goodss, total}) => {
                //设置data对象
                this.setData({goodssData: [...this.data.goodssData, ...goodss]})
                //设置自动加载
                if (goodss.length < this.data.size) {
                    this.setData({noMore: true})
                } else {

                }

            }
        )
    },
// 点击侧边栏导航
    siderbarClick({detail}) {
        this.setData({category: detail})
        this.setData({goodss: []})
        this.setData({page: 1})
        this.setData({noMore: false})
        this.getGoodss()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //获得query参数若获取不到是从tabbar进去的设置为''
        const category = options.category ? options.category : ''
        this.setData({category})
        this.getGoodss()
        computed(this, {
            siderbarData: () => app.goodsCategory


        })
    },

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
        this.setData({page: 1})
        this.getGoodss()

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.setData({page: this.data.page + 1})
        this.getGoodss()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})