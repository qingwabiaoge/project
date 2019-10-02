import Vue from'vue'
//必须先声明再注入要不页面不加载
const isdev=process.env.NODE_ENV==="development"
import * as tool from '@/tool'
Vue.prototype.$primaryColor="fb00c9"
Vue.prototype.$isdev=isdev
Vue.prototype.$tool=tool
