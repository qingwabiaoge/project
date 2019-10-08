import Vuex from 'vuex'

//const {mapState, mapActions, mapMutations, mapGetters} = Vuex.createNamespacedHelpers('components')
//把mixin挂载在vue实例
const components = Vuex.createNamespacedHelpers('components')
const global = Vuex.createNamespacedHelpers('global')

export default {
  computed: {
    ...global.mapState([
      'global'
    ]),
    ...components.mapGetters([
      'components',
      'articleCategory',
      'categorys',
      'produceCategory',
    ])
  },

}
