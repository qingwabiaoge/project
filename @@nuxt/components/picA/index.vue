<template>
  <div>
    <!--则个div不能去掉,为了父组件使用margin-top-->

    <div :class="$style.picA"
         style="margin-top:50px"
    >
      <!--如果是组件 data.href存在,如果不是组件则是文章-->

        <img
          v-lazy="data.image" :alt="data.title"/>

        <div class="padding">
          <h3>{{data.title}}</h3>
          <p v-if="data.description">{{data.description|setLength(80)}}...</p>
          <p>———— Read more</p>

        </div>

    </div>

  </div>


</template>

<script>
  import mixin from '@/mixins/conponent-mixin'
export default {
    mixins:[mixin],

  }
</script>

<style lang="less" module>

  .picA {

    border: 1px solid #ccc;
    position: relative;
    &:hover {
      background: #222;
      .inverse-wrap()
    }
    img {
      margin-top: -50px;
      padding-right: 20px;
    }
  }

</style>
