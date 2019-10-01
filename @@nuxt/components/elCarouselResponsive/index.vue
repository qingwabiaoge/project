<template>
  <!--幻灯片模块-->
  <el-carousel :interval="5000" :height="height + 'px'">
    <el-carousel-item v-for="(item,index) in data.children||data.images" :key="item.image">
      <nuxt-link :to="{path:item.href||''}">
        <!--item.url兼容images-->
        <img ref="img" :src="item.image||item.url" :alt="item.title">
      </nuxt-link>
    </el-carousel-item>
  </el-carousel>

</template>

<script>
  import mixin from '@/plugins/conponent-mixin'

  export default {
    mixins: [mixin],
    data() {
      return {
        height: 500
      }
    },
    mounted() {
      const el = this.$refs.img[0]
      const that = this
      el.onload = function () {
        that.height = (this.offsetHeight / this.offsetWidth) * this.parentElement.parentElement.clientWidth
      }

    }
  }
</script>
<style scoped>

  .componentData {

  }

</style>
