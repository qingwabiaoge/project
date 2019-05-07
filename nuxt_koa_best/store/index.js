import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


import config from './config.js'
import articles from './articles'
import componentData from './componentData'
import componentDatas from './componentDatas'
import article from './article'
import goodss from './goodss'
import categorys from './categorys'


export default () => {
  return new Vuex.Store({
    state: {
      isLoading: false,
    },
    setLoading(state) {

      state.isLoading = !state.isLoading
    },
    modules: {
      //这些变量名不能随意改动变量既vue的key

      config,
      article,
      articles,
      componentData,
      componentDatas,
      goodss,
      categorys
    }


  })
}
