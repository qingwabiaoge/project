<template>
  <!--rgba必须放到这里才行不知道为啥-->
  <div :style="bg">{{primary}}</div>
</template>

<script>
  import {rgba} from 'polished'
  import mixin from '@/mixins/page-mixin'

  export default {
    loyout: 'demo',
    data() {
      return {
        bg: undefined
      }
    },
    mixins: [mixin],
    mounted() {
      //data早于computed去的不了计算属性primary所以要放这里
      this.bg = {background: rgba(this.primary, 0.2)}

    }
  }

</script>
