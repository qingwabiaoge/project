import Vuex from 'vuex'
//const {mapState, mapActions, mapMutations, mapGetters} = Vuex.createNamespacedHelpers('components')
//把mixin挂载在vue实例
const componentsMapObject = Vuex.createNamespacedHelpers('components')
const globalMapObject = Vuex.createNamespacedHelpers('global')

export default {
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
