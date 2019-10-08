<template>
  <div :style="{background:`url(${global.background})`,backgroundAttachment: 'fixed'} ">
    <nuxt/>
  </div>
</template>
<script>

  import mixin from '@/mixins/map-mixin'
  export default {
    mixins:[mixin]
  }
</script>
