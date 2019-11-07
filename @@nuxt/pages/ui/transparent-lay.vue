<template>
  <div>
    <button @click="isShow=true">按钮</button>
    <transparentLay v-model="isShow" type="primary"></transparentLay>
  </div>

</template>

<script>
  export default {   layout: 'ui',
    layout:'ui',
    data() {
      return {
        isShow: false
      }
    }
  }
</script>

<style lang="less" module>

</style>
