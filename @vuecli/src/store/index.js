import Vue from 'vue'
import Vuex from 'vuex'

import global from './global'
import oricomponents from './oricomponents'
import token from './token'
import rules from './rules'
import tool from '@/tool'
Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    tool:tool,
    newsCategory: ['品牌新闻', '行业新闻'],
  },
  modules: {global, oricomponents, token, rules}
});
