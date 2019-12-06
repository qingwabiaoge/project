<template>
  <div>
    css3不支持使用模板里的变量--heading-color,运行color函数,无法半透明解决方案 <br>
    color(var(--heading-color) alpha(10%));

    <!--方案1--------------->
    <!--render晚于data可以找到rgba函数-->
    <h1 :style="{background: rgba(this.primary, 0.2)}">{{primary}} </h1>
    <!--方案2 -----------------------------  -->
    <h2 :style="bg">h2</h2>
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

    }
  },
  mixins: [mixin],
  computed: {
    //data早于computed所能直接赋值计算属性primary所以要放这里
    bg () {
      return { background: rgba(this.primary, 0.2) }
    }

  }
}

</script>
