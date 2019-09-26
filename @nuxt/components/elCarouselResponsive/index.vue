<template>
  <!--幻灯片模块-->
  <el-carousel :interval="5000" :height="height + 'px'">
    <el-carousel-item v-for="(item,index) in data" :key="item.image">
      <nuxt-link :to="{path:item.href||''}">
        <!--item.url兼容images-->
        <img ref="img" :src="item.image||item.url" :alt="item.title">
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

      el.onload=function () {

        this.height = (el.offsetHeight / el.offsetWidth) * el.parentElement.clientWidth
      }

    }
  }
</script>
<style scoped>

  .componentData {

  }

</style>
