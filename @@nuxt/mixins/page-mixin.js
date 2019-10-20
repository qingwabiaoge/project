import Vuex from 'vuex'
//const {mapState, mapActions, mapMutations, mapGetters} = Vuex.createNamespacedHelpers('components')
//把mixin挂载在vue实例
const componentsMapObject = Vuex.createNamespacedHelpers('components')
const globalMapObject = Vuex.createNamespacedHelpers('global')

export default {
  head() {

    return {
      //这里之所以能用this可能因为是因为app里有$head
      //只是表达式 声明函数时间会提前计算

      title: this.title,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          hid: 'description',
          name: 'description',
          //只是表达式 声明函数时间会提前计算
          content: this.description
        }
      ],
    }
  },
  computed: {
    ...globalMapObject.mapState([
      'global'
    ]),
    ...componentsMapObject.mapGetters([
      'components',
      'articleCategory',
      'categorys',
      'produceCategory',
    ])
  },

}
