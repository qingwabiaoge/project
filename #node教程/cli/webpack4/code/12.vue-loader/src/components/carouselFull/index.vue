<template>
  <!--幻灯片模块-->
  <el-carousel indicator-position="" :interval="20000" :height="componentDataHeight + 'px'" class="componentData">
    <el-carousel-item v-for="item in $store.state.componentDatas.sliderFull" :key="item.imgurl">
      <nuxt-link :to="{path:item.href||'#'}">
        <img :src="item.imgurl"  alt="">
      </nuxt-link>
    </el-carousel-item>
  </el-carousel>

</template>

<script>
  export default {
    data() {
      return {
        componentDataHeight: 500

      }
    },
    mounted() {
      this.componentDataHeight = 943 / 1920 * document.body.clientWidth
    }
  }
</script>
<style scoped>

  .componentData {

  }

</style>
