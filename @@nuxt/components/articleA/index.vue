<template>
  <div :class="$style['article']">
    <h1 class="text-center margin-top">{{data.title}}</h1>

    <blockquote>
      {{data.description}}
    </blockquote>

    <img v-if="data.image" v-lazy="data.image" :alt="data.title">

    <div v-html="data.content">

    </div>

  </div>

</template>
<script>
  import mixin from '@/mixins/conponent-mixin'

  export default {
    mixins: [mixin],
  }
</script>

<style lang="less" module>
  .article {

    background: white;
    padding: 50px 20px;
    overflow: hidden;

    img:first-of-type {
      float: left;
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }

</style>
