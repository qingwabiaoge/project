// pages/address/index.js
const regeneratorRuntime = require('../../libs/runtime')
import { get, post } from '../../util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
      value: '你好你好',
  },
    onChange( e) {
        this.setData({
            value2: e.detail.value
        })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  getUserInfo: async function () {
    //如果有全局数据
    // 说明是app.js获取了globalData.userInfo是
    // 是二次登陆
    const openId = wx.getStorageSync('openId')
    console.log(openId)
    const { userInfo } = await get('getUser', { openId })
    this.setData({
      userInfo: userInfo,
    })

  },
  onLoad() {
    this.getUserInfo()
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})