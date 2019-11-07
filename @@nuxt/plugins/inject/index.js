import Vue from 'vue'
import betweenInt from './tool/betweenInt'
import cookie from './tool/cookie'
import deviceType from './tool/deviceType'
import randomNum from './tool/randomNum'
import randomString from './tool/randomString'
import getReqCookies from './tool/getReqCookies'


const tool = {betweenInt, cookie, deviceType, randomNum, randomString, getReqCookies}
//必须先声明再注入要不页面不加载,原因可能是prototyp是非响应式的
const isdev = process.env.NODE_ENV === "development"
Vue.prototype.$isdev = isdev

export default ({app,store,router}, inject) => {
//注入到app  store router vue.prototype
  inject('tool', tool)
}

