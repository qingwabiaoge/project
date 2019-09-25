import Vue from 'vue'
import Vuex from 'vuex'

import global from './global'
import components from './components'
import token from './token'
import rules from './rules'
import tool from '@/store/tool'
import nuxt_config from '../../../@nuxt/nuxt.config'
import dev from './dev'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {

    tool: tool,
    HOST: `http://${nuxt_config.env.HOST}:${nuxt_config.env.PORT}/api`
  },
  modules: {global, dev, components, token, rules}
});
