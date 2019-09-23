<template>
  <!--幻灯片模块-->
  <el-carousel :interval="5000" :height="height + 'px'">
    <el-carousel-item v-for="(item,index) in $store.getters['components/components'].swiper.children" :key="item.image">
      <nuxt-link :to="{path:item.href||'#'}">
        <img ref="img" :src="item.image" :alt="item.title">
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
      const el = this.$refs.img[0]

      el.onload = () => {
        this.height = (el.offsetHeight / el.offsetWidth) * document.body.clientWidth
      }

    }
  }
</script>
<style scoped>

  .componentData {

  }

</style>
