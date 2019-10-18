<template>
  <div>

    <el-carousel-responsive :data="components.swiper"></el-carousel-responsive>

    <title-zh-english :data="{...components.produce,background:'none'}">

    </title-zh-english>
    <pic-c-list :data="components.produce">

    </pic-c-list>


    <title-zh-english inverse :data="{...components.history}">

    </title-zh-english>

    <pictext-history :data="components.history " class="container">

    </pictext-history>


    <title-zh-english :data="components.trend"></title-zh-english>
    <picE-list :data="{...components.trend,children:produces}">

    </picE-list>

    <title-zh-english
      :data="components.oem">

    </title-zh-english>

    <div v-if="components.oem.show"
         style="background: white;text-align: center">
      <img v-lazy="components.oem.image">
    </div>

  </div>


</template>

<script>
  import head from '@/plugins/head-part'
  import mixin from '@/mixins/map-mixin'

  export default {
    scrollToTop: true,
    async asyncData({$axios, store, app}) {
      const {produces} = await $axios.get('/produces', {params: {flag: true}})
      return {
        produces, ...store.state.global.global
      }
    },
    head,
    mixins: [mixin]

  }

</script>
