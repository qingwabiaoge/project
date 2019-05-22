import axios from 'axios'
const baseURL = "http://localhost:5757/api/"
//创建一个axios实例
const api = axios.create({
  baseURL,
  timeout: 3000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
});

api.interceptors.response.use(
  // status=2xx的 正确的的走这里
  res => {

    if (res.data.code === -1&&res.data.data.msg) {
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

export {api}
