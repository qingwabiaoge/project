<template>
  <!--幻灯片模块-->
  <el-carousel  :interval="5000" :height="height + 'px'" >
    <el-carousel-item v-for="item in $store.state.components.carouselFull.ul" :key="item.image">
      <nuxt-link :to="{path:item.href||'#'}">
        <img :src="item.image"  :alt="item.title">
      </nuxt-link>
    </el-carousel-item>
  </el-carousel>

</template>

<script>
  export default {
    data() {
      return {
        height: 500

      }
    },
    mounted() {
      this.height = 880/ 1920 * document.body.clientWidth
    }
  }
</script>
<style scoped>

  .componentData {

  }

</style>
