import Vue from 'vue'
import Vuex from 'vuex'

const {mapState, mapActions, mapMutations, mapGetters} = Vuex.createNamespacedHelpers('components')
//把mixin挂载在vue实例
Vue.mixin({
  props: ['data'],
  methods: {
    // 必传 标题，描述。其他的 meta 标签通过 payload 注入，其中，每个 meta 的 hid 需要是唯一的。
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [{
          hid: 'description',
          name: 'description',
          content
        }].concat(payload)
      }
    },

  },
  computed: {

    ...mapGetters([
      'components',
      'articleCategory',
      'categorys',
      'goodsCategory',
    ])
  },

})

