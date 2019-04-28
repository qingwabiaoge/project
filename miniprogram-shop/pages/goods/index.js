
import {get} from '../../util.js'
const {computed} = require('../../libs/vuefy.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
  
//tab---------------
    current: 'tab1',
    tabs: [
      {
        key: 'tab1',
        title: '详情'
      
      },
      {
        key: 'tab2',
        title: '产品参数'
     
      },
      {
        key: 'tab3',
        title: '评论'
      
      },
    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    get('goods/' + options.id).then(
      ({
        goods
      }) => {

        //设置data对象
        this.setData({
          goods
        })
        console.log(this.data.goods)
      }
    )
//折扣
    computed(this,{
      discount:function(){
       return (this.data.goods.price * 10 / this.data.goods.maxPrice).toFixed(2).toString()
      }
     
    })
 
  },
  onTabsChange(e) {
    console.log('onTabsChange', e)
    const { key } = e.detail
    this.setData({
      current:key
   
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})