<template>
  <div :style="{background:`url(${global.background})`,backgroundAttachment: 'fixed'} ">
    <header2 :data="{title:components.brand.title,image:global.image,children:categorys}"></header2>
    <!--    <bannerCategory></bannerCategory>-->
    <nuxt/>
    <footerMessage :data="{...components.contact,beian:global.beian}"></footerMessage>
  </div>
</template>
<script>
  import mixin from '@/mixins/map-mixin'
  export default {
    mixins:[mixin]
  }
</script>

<style>
  /* body {
     background-image: url("../assets/images/bg_white.jpg");
     background-attachment: fixed;
   }*/

</style>


