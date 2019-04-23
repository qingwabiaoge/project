// import Vue from 'vue'
import Vuex from 'vuex'
import global from './global'
import components from './components'
import contact from './contact'
// const _ = require('lodash');
// import localConfig from './config'
//import theme from './theme'


export default () => new Vuex.Store({

  state: {
    primary: 'fb00c9',
    test: [{
      color:'红色',
      button: "more+",
      href: "/produces/快时尚",
      image: "/images/image.jpg",
      subtitle: "快时尚 ",
      description:'稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全',
      title: '标题',
      etitle: "Fast fashion",
    },
      {
        color:'红色',
        button: "more+",
        href: "/produces/快时尚",
        image: "/images/image2.jpg",
        subtitle: "快时尚 ",
        description:'稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全',
        title: '标题',
        etitle: "Fast fashion",
      },
      {
        color:'红色',
        button: "more+",
        href: "/produces/快时尚",
        image: "/images/image3.jpg",
        subtitle: "快时尚 ",
        description:'稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全',
        title: '标题',
        etitle: "Fast fashion",
      }
    ]
    // components: {}
    //theme
  },
  modules: {global, components, contact}
  // mutations: {
  //
  //   setGlobal(state, global) {
  //     state.global = global
  //   },
  //   setcomponentDatas(state, data) {
  //     // state => Object.assign(state,{a:1})
  //     state.componentDatas = data
  //   }
  //   ,
  //   setComponents(state, data) {
  //     state.components = data
  //   },
  //   setCategorys(state, data) {
  //     state.categorys = data
  //   }
  // }
  // ,
  //
  // actions: {
  //   async nuxtServerInit({commit}, {$axios}) {
  //     const {global} = await $axios.get('/getGlobal')
  //     commit('setGlobal', global)
  //
  //
  //     /*    const {componentDatas} = await  this.$axios.get('/getComponentDatas')   //按照键值名分裂数组
  //         const _componentDatas = _.groupBy(componentDatas, 'componentName')
  //         commit('setcomponentDatas', _componentDatas)
  // */
  //
  //     const {components} = await  this.$axios.get('/getComponents')   //按照键值名分裂数组
  //     const _conponents = {}
  //     components.forEach((item, index, self) => {
  //       _conponents[item.mark] = item
  //     })
  //     commit('setComponents', _conponents)
  //
  //
  //
  //     const categorys = components.filter(item => item.isCategory === true)
  //     commit('setCategorys', categorys)
  //
  //   },
  // }


})

