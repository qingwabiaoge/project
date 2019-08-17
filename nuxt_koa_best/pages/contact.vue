<template>
  <div class="background-gray-lightest padding-top-small padding-bottom-largest">
<!--    <pictextContact :data="$store.state.componentDatas.pictextContact" class="hidden@xs"></pictextContact>-->

    <div class="container  margin-top padding   background-default">
      <el-row :gutter="25">
        <el-col :md="12">
          <img :src="$store.state.config.global.image" :alt="$store.state.config.global.name">
        </el-col>
        <el-col :md="12" style="line-height: 2">
          <h1>{{$store.state.config.global.name}}</h1>
          <hr>
          <i class="iconfont icon-zuoji1 margin-right-small"></i>热线:{{$store.state.config.global.tel}} <br>
          <i class="iconfont icon-qq margin-right-small"></i>Q Q:{{$store.state.config.global.qq}} <br>
          <i class="iconfont icon-coordinates margin-right-small"></i>地址:{{$store.state.config.global.address}} <br>
        </el-col>

      </el-row>
      <el-row class="margin-top-small">

        <img v-lazy="$store.state.config.global.map" :alt="$store.state.config.global.name">

      </el-row>
    </div>


  </div>

</template>
<script>

  import pictextContact from '@/components/pictextContact/'
  import picA from '@/components/picA/index.vue'


  export default {

    components: {pictextContact, picA},

    async fetch({store, params}) {
      await store.dispatch('getComponentDatas', 'pictextContact');
      await store.dispatch('getArticles', {componentName: "picA", category: params.newsCategory, limit: 8});

    }


  }
</script>

<style lang="less" module>
  :global .collapse-nav {
    a {
      //无法在这这里用mixin,因为嵌套也改选择器的名字
      .hover-underline();
      .hover-underline-left();
      display: block;
      padding: 15px;

    }
  }
</style>
