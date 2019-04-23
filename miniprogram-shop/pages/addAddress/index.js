import data from './data'
import {$wuxToptips} from '../../dist/index'
import {get, post} from '../../util.js'

const regeneratorRuntime = require('../../libs/runtime')
const isTel = (value) => !/^1[34578]\d{9}$/.test(value)
const app = getApp()
Page({
    data: {
       userInfo:[],
        options1: data,
        area: '',
        address: '',
        tel: '',
        name:''
    },

  //检查登陆状态
  
    //选择地址
    onOpen1() {
        this.setData({visible1: true})
    },
    onClose1() {
        this.setData({visible1: false})
    },
    onChange1(e) {
        this.setData({area: e.detail.options.map((n) => n.label).join('/')})
        console.log('onChange1', e.detail)
        console.log(this.data.area)
    },
//详细地址
    onChange2(e) {
        this.setData({
            address: e.detail.value,
        })
        console.log(this.data.address)
    },
    onChange3(e) {
        this.setData({
            name: e.detail.value,
        })
        console.log(this.data.name)
    },
    //电话号码
    onChange(e) {

        this.setData({
            error: isTel(e.detail.value),
            tel: e.detail.value,
        })
        console.log(this.data.tel)
    },
    onFocus(e) {
        this.setData({
            error: isTel(e.detail.value),
        })
        console.log('onFocus', e)
    },
    onBlur(e) {
        this.setData({
            error: isTel(e.detail.value),
        })
        console.log('onBlur', e)
    },
    onConfirm(e) {
        console.log('onConfirm', e)
    },
    onClear(e) {
        console.log('onClear', e)
        this.setData({
            error: true,
            value: '',
        })
    },
    onError() {

        $wuxToptips().show({
            icon: 'cancel',
            hidden: false,
            text: '请输入11位手机号码',
            duration: 3000,
            success() {
            },
        })
    },
    //提交
    async addAdress() {
      const openId = wx.getStorageSync('openId')
        await post('addContact', {
            openId,
            contact: {
                address: this.data.area + this.data.address,
                tel: this.data.tel,
                name:this.data.name,
            }
        })
    }

})
