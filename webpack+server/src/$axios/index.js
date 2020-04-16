import $axios from 'axios'
$axios.defaults.baseURL = 'http://localhost:3000/api'
$axios.defaults.headers.common['Authorization'] = false;
$axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';


const store = {state: {token: 'mytoken'}}

  // 拦截器,拦截request并添加信息------------------------------------------------------------
  $axios.interceptors.request.use(
    config => {
      // 在headers里加入数据,会覆盖全局默认值
      if (store.state.token) {
//###############2头文件加入方式2
        config.headers.Authorization = store.state.token;
      }
      // loadinginstace = Loading.service({fullscreen: true}) // 请求打开loading
      return config;
    },
    err => {
      // 对请求错误做些什么
      return Promise.reject(err);
      //  等价于 new Promise((resolve, reject) => reject(err))
    }
  );

//过滤器 过滤response数据-------------------------------------------------------------
  $axios.interceptors.response.use(
    // status=2xx的 正确的的走这里
    res => {
      console.log('默认返回的报文response:', res)

      if (res.data.code === -1 && res.data.msg) {

      } else {
        if (res.data.msg) {
          alert(res.data.msg)
        }
        return res.data.data;
      }

    },

    //检测status默认除了2XX之外的都是错误的，就会走这里
    error => {
      if (error.response) {

        switch (error.response.status) {
          case 401:
            alert('登陆过期，请重新登陆')
            break
          case 404:
            alert('404错误，请检查网络' + error.response.statusText)
            break

          default:
            alert('错误:' + error.response.statusText)

        }
      }
      return Promise.reject(error.response);
    }
  );

export default $axios