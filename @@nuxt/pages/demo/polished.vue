<template>
  <!--rgba必须放到这里才行不知道为啥-->
  <div :style="{background:rgba(primary,0.2)}">{{primary}}</div>
</template>

<script>
  import {rgba} from 'polished'
  import mixin from '@/mixins/page-mixin'

  export default {
    loyout: 'demo',
    data() {
      return {
        rgba
      }
    },
    mixins: [mixin]
  }

</script>
