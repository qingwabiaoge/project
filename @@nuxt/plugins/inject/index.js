import Vue from 'vue'
import betweenInt from './betweenInt'
import cookie from './cookie'
import deviceType from './deviceType'
import randomNum from './randomNum'
import randomString from './randomString'
import getReqCookies from './getReqCookies'


const tool = {betweenInt, cookie, deviceType, randomNum, randomString, getReqCookies}
//必须先声明再注入要不页面不加载
const isdev = process.env.NODE_ENV === "development"

Vue.prototype.$primaryColor = "fb00c9"
Vue.prototype.$isdev = isdev
// Vue.prototype.$tool = tool

export default ({app}, inject) => {
  //inject('myCombinedInjectedFunction', (string) => console.log('app联合注入', string))
  inject('$tool', tool)
}
