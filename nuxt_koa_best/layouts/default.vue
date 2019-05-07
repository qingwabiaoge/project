<template>
  <div>
    <headerA></headerA>

    <nuxt style="padding-bottom:90px; background-repeat: no-repeat;background-attachment: fixed;" :style="{backgroundImage:`url(${$store.state.config.global.background})`}"/>

    <footerBlack></footerBlack>
  </div>
</template>

<script>
  import  headerA from '@/components/headerA/index.vue'
  import  footerBlack from '@/components/footerBlack/index.vue'
  export default {

    components:{headerA,footerBlack},
    mounted(){
      console.log(this.$route)
    }
  }

</script>
