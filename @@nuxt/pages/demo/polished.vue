<template>
  <div>
    <!--render晚于data可以找到rgba函数-->
    <h1 :style="{background: rgba(this.primary, 0.2)}">{{primary}} </h1>
    <h2 :style="bg">css3不支持模板里的变量 使用 color(var(--heading-color) alpha(10%));不支持的半透明解决方案</h2>
  </div>
</template>

<script>
import { rgba } from 'polished'
import mixin from '@/mixins/page-mixin'

export default {
  layout: 'demo',
  data () {
    return {
      rgba,
      bg: undefined
    }
  },
  mixins: [mixin],
  mounted () {
    //data早于computed所能直接赋值计算属性primary所以要放这里
    this.bg = { background: rgba(this.primary, 0.2) }

  }
}

</script>
