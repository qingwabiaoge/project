<template>
  <div :style="{background:`url(${global.background})`,backgroundAttachment: 'fixed'} ">
    <nuxt/>
  </div>
</template>
<script>

  import mixin from '@/plugins/page-mixin'
  export default {
    mixins:[mixin]
  }
</script>
