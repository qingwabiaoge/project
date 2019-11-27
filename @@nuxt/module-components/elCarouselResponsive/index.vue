<template>
  <!--幻灯片模块-->
  <el-carousel :interval="3000" :height="height + 'px'">
    <!-- data.images为了兼容宝贝详情页的images-->
    <el-carousel-item v-for="(item,index) in data.children||data.images" :key="'el-carousel'+index">
      <nuxt-link :to="{path:item.href||''}">
        <!--item.url为了兼容宝贝详情页的images-->
        <img ref="img" :src="item.image||item.url" :alt="item.title">
      </nuxt-link>
    </el-carousel-item>
  </el-carousel>

</template>

<script>
  import mixin from '@/mixins/conponent-mixin'

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
