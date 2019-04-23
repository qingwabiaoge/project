import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './moduleA'


Vue.use(Vuex);

//lei初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录

export default new Vuex.Store({
  modules: {
     moduleA
  }
});
