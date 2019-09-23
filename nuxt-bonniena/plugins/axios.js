//Message在全局中所以不用页面vue实例初始化就可以用
import {Message} from 'element-ui';

//修改app.$axios
export default function ({$axios,redirect,env}) {
  let axios = $axios;

  // linuxt用这个配置去 nuxt.conf里的axios配置
// axios.defaults.baseURL = `http://47.107.170.105/api`;
  axios.defaults.baseURL = `http://${env.HOST}:${env.PORT}/api`;
  axios.defaults.timeout = 10000;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  // 请求回调
  axios.onRequest(config => {
  });

  // 返回回调
  axios.onResponse(res => {

    if (res.data.code === -1 && res.data.data.msg) {
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
  },);

  // 错误回调
  axios.onError(error => {
    if (error.response) {

      switch (error.response.status) {
        case 401:
          Message.error('登陆过期，请重新登陆' );
          redirect({ path: '/' });
          break;
        case 404:
          Message.error('404错误，请检查网络' + error.response.statusText);
          break;

        default:
          Message.error('错误:' + error.response.statusText)
      }
    }
    return Promise.reject(error.response);
  });
  axios.getGoodss = function () {

    return $axios.get('/qin')
  }
}
