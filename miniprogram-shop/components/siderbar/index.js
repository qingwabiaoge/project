// components/siderbar/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: Array,
        value: String //当前active的栏目
    },
    options: {
       // addGlobalClass: true,//组件内部使用全局的css
    },

    /**
     * 组件的初始数据
     */

    /**
     * 组件的方法列表
     */
    methods: {
        onTap: function (e) {
            this.triggerEvent('input', e.currentTarget.dataset.category)
        }
    }
})
