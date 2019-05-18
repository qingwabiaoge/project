import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import CONFIG from '../config'
import isLoading from './isLoading'
import global from './global.js'
import articles from './articles'
import componentDatas from './componentDatas'
import article from './article'


export default () => {
    return new Vuex.Store({
        state: {
            host: 'http://localhost:5757/api/',
            config:CONFIG
        },
        modules: {
            isLoading,//加载状态
            global,
            article,
            articles,
            componentDatas,


        }


    })
}
