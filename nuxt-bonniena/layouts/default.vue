<template>
  <div :style="{background:`url(${$store.state.global.background})`,backgroundAttachment: 'fixed'} ">
    <header2></header2>
<!--    <bannerCategory></bannerCategory>-->
    <!--
        <nuxt style="padding-bottom:90px; background-repeat: no-repeat;background-attachment: fixed;" :style="{backgroundImage:`url(${$store.state.global.background})`}"/>-->
    <nuxt/>
    <footerTalk></footerTalk>
  </div>
</template>

<script>
  import header2 from '@/components/header2/index.vue'
  import footer3 from '@/components/footer3/index.vue'

  export default {

    components: {header2, footer3},

  }

</script>

<style>
  /* body {
     background-image: url("../assets/images/bg_white.jpg");
     background-attachment: fixed;
   }*/

</style>
