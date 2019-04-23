<template>
  <div>
    <!--则个div不能去掉,为了父组件使用margin-top-->

    <div :class="$style.picA"
         style="margin-top:50px"
    >
      <!--如果是组件 data.href存在,如果不是组件则是文章-->
      <nuxt-link :to="data.href||$route.path+'/'+data._id||'#'">
        <img
          v-lazy="data.image" :alt="data.title"/>

        <div class="padding">
          <h3>{{data.title}}</h3>
          <p v-if="data.description">{{data.description|setLength(80)}}...</p>
          <p>———— Read more</p>

        </div>
      </nuxt-link>
    </div>

  </div>


</template>

<script>
  export default {

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
