<template>
  <div>


<!--    <title-zh-english :data="components.service">-->

<!--    </title-zh-english>-->
    <!--  <div class="text-center">
        <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
            style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
          service
        </h3>
      </div>-->
    <!--{{$store.state.test[0]}}-->

    <pictext1 :data="components.service">

    </pictext1>
    <!--<div class="text-center">
      <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
          style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
        service
      </h3>
    </div>
-->
    <div class="container" v-html="components.service.content">

    </div>
  </div>
</template>

<script>
  import mixin from '@/mixins/page-mixin'
  export default {
    asyncData({store}){
      //注入数据到当前组件,类似于prop的作用,为了head使用
      return{...store.getters['components/components'].service}
    },
    mixins:[mixin]
  }
</script>
