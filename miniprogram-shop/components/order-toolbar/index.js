// components/buy-toolbar/index.js
Component({
    /**
     * 组件的属性列表
     */
    data: {
        allGoodsNumber: 0 //购物车所有商品数量
    },
    properties: {
        goods: {            // 本页商品数据
            type: Object,     // 类型（必填）
            value: {}     // 属性初始值（可选），如果未指定则会根据类型选择一个
        }

    },
    options: {
        addGlobalClass: true,//组件内部使用全局的css
    },
    /**
     * 组件的初始数据
     */


    /**
     * 组件的方法列表
     */

    attached(){
        this.setAllGoodsNumber()
    },
    methods: {
        setAllGoodsNumber(){
            const cartItems = wx.getStorageSync("cartItems") || []
            let allGoodsNumber = 0
            cartItems.forEach((item) => {
                allGoodsNumber += item.number
            })
            this.setData({allGoodsNumber})
        },

        addCart() {
            const cartItems = wx.getStorageSync("cartItems") || []
            const exist = cartItems.find(item => item._id === this.data.goods._id
            )

            //如果购物车里面有该商品那么他的数量每次加一
            if (exist) {
                exist.number = parseInt(exist.number) + 1
            } else {

                cartItems.push({
                    ...this.data.goods,
                    number: 1,
                    selected: true
                })
            }

            wx.showToast({
                title: "加入购物车成功！",
                duration: 1000
            })

            //更新缓存数据

            wx.setStorage({
                key: "cartItems",
                data: cartItems
            })
            this.setAllGoodsNumber()
            console.log(this)

        },
        addCartAndBuy(){

            this.addCart()
            wx.navigateTo({ url:'/pages/cart/index'})
        }



    }
})
