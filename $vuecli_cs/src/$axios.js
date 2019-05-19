import axios from 'axios'
import store from './store'
import router from './router'
import {Message} from 'element-ui';


const baseURL = 'http://127.0.0.1:3000/api/'
//创建一个axios实例
const $axios = axios.create({
  baseURL,
  timeout: 3000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

// 添加请求拦截器,请求数据前做些什么
$axios.interceptors.request.use(
  config => {
    // 在发送请求之前1做些什么：每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    // 对请求错误做些什么
    return Promise.reject(err);
  }
);
// 添加响应拦截器 接收数据前做些什么
$axios.interceptors.response.use(
  // status=2xx的 正确的的走这里
  res => {

    if (res.data.code === -1&&res.data.data.msg) {
      Message.error(res.data.data.msg)
    } else {
      if (res.data.data.msg) { //如过有msg 就提示msg
        Message({
          message: res.data.data.msg,
          type: 'success'
        });

      }

    }
    return res.data.data; //返回数据
  },
  //检测status默认除了2XX之外的都是错误的，就会走这里
  error => {
    if (error.response) {

      switch (error.response.status) {
        case 401:
          Message.error('登陆过期，请重新登陆' )
          store.dispatch('UserLogout'); //可能是token过期，清除它
          router.replace({ //跳转到登录页面
            path: '/',
            query: {redirect: router.currentRoute.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
          });
          break
        case 404:
          Message.error('404错误，请检查网络' + error.response.statusText)
          break

        default:
          Message.error('错误:' + error.response.statusText)

      }
    }
    return Promise.reject(error.response);
  }
);

export default $axios
