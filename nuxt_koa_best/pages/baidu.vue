<template>
  <div>
    <nuxt-link to="/contact">
      <img v-for="item in [1,2,3]" v-lazy="`/images/baidu/${item}.jpg`" alt="艺术涂料" :key="'baidu'+item">
    </nuxt-link>
    <div class="container">
      <img v-for="item in [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]"
           v-lazy="`/images/baidu/${item}.jpg`" alt="艺术涂料" :key="'baidu'+item">
      <picScale :data="$store.state.componentDatas.picScale">

      </picScale>
      <img v-for="item in [28,29,30]" v-lazy="`/images/baidu/${item}.jpg`" alt="艺术涂料" :key="'baidu'+item">
    </div>
  </div>
</template>
<script>
  import picScale from '@/components/picScale/index.vue'


  export default {


    head() {
      return {
        title: '艺术涂料_乳胶漆_水性涂料_硅藻泥_无机涂料',
        meta: [
          {charset: 'utf-8'},
          {name: 'viewport', content: 'width=device-width, initial-scale=1'},
          {
            hid: 'description',
            name: 'description',
            content: 'BEST百事得成立于2005年，位于意大利Viadana-维亚达纳，作为房屋内部装饰涂料品牌，百事得bset着重于提高对人体居住环境的健康性，舒适性而努力。在意大利本土拥有1600家销售网点，产品涵盖了艺术涂料、内外墙建筑涂料、木器漆以及全线的民用涂料产品。'
          }
        ],
        link: [
          {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
        script: [
          {src: '/script/baidu.js'}]
      }
    },

    async fetch({store}) {

      await store.dispatch('getComponentDatas', 'picScale');
    },
    components: {picScale}
  }
</script>
