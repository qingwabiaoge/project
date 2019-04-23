<template lang='pug'>

  div
    include ../../pug/pug1/index.pug
    include ../../pug/pug2/index.pug
</template>


<script>
  import mixin from '@/pug/pug1/mixin'
  import mixin2 from '@/pug/pug2/mixin'

  export default {
 /*   asyncData() {
      return {msg: 'page'}
    },*/
    mixins: [mixin, mixin2]
  }
</script>
<style lang="less">
  @import "../../pug/pug1/index.less";
</style>
