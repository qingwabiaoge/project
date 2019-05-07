import axios from 'axios'
const api = axios.create({
  //必须单独改这里不能引入nuxt.config的地址因为这个提前打包都nuxt,打包时间已经确定了网址和端口
  // baseURL:`http://127.0.0.1:3000/api/`,
   baseURL:`http://47.107.170.105:3000/api/`,
  timeout: 10000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

api.interceptors.response.use(
  // status=2xx的 正确的的走这里
  res => {

    if (res.data.code === -1 && res.data.data.msg) {
      console.log(res.data.data.msg)
    } else {
      if (res.data.data.msg) {
        console.log({
          message: res.data.data.msg,
          type: 'success'
        });
      }

      return res.data.data; //返回给的res的数据,默认返回自定义的data里的数据

    }

  },
);

export default api
