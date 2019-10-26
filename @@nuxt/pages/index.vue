<template>
  <div>

    <el-carousel-responsive :data="components.swiper"></el-carousel-responsive>

    <title-zh-english :data="{...components.produce,background:'none'}">

    </title-zh-english>
    <pic-c-list :data="components.produce">

    </pic-c-list>


    <title-zh-english inverse :data="{...components.history}">

    </title-zh-english>

    <pictext-history :data="components.history" >

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

  import mixin from '@/mixins/page-mixin'

  export default {
    scrollToTop: true,
    async asyncData({$axios, store, app}) {
      const {produces} = await $axios.get('/produces', {params: {flag: true}})
      return {
        //服务器渲染 created钩子没有运行 不能用this
        produces,
        //注入数据到当前组件,类似于prop的作用,为了head使用
        ...store.state.global.global
      }
    },

    //mixin的运行机制未知
    mixins: [mixin]
  }

</script>
