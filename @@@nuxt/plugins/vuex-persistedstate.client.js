import createPersistedState from 'vuex-persistedstate'
//修改app.sore
export default ({store}) => {
 /* 这里是引入函数
  这个函数是闭包
  然后再运行
  运行的结果影响到本地存储*/
  createPersistedState({
    key: 'vuex',
    paths: []
  })(store)
}
