// import Vue from 'vue'
import Vuex from 'vuex'
import global from './global'
import components from './components'
import test from './test'
// const _ = require('lodash');
// import localConfig from './config'
//import theme from './theme'


export default () => new Vuex.Store({

  state: {
    primary: 'fb00c9',
    test
    //theme
  },
  modules: {global, components}


})

