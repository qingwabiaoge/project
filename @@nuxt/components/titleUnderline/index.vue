<template>


  <div class="text-center">
    <div class="inline hover-underline hover-underline-center margin-xlarge-top  margin-medium-bottom  padding-bottom-sm">
      <slot>.....</slot>
    </div>
  </div>


</template>
<script>
  import mixin from '@/plugins/mixins'
export default {
    mixins:[mixin],


  }


</script>


