// components/navigator-siderbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodss: Array,
    noMore: Boolean
  },
  options: {
    addGlobalClass: true,//组件内部使用全局的css
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      this.triggerEvent('setactive', e.currentTarget.dataset.id)
    }
  }
})
