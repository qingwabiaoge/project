<template>
  <div class="uk-background-gray-lightest uk-padding-top-small uk-padding-bottom-largest">
    <pictextContact :data="$store.state.componentDatas.pictextContact" class="uk-hidden@xs"></pictextContact>

    <div class="container  uk-margin-top uk-padding   uk-background-default">
      <el-row :gutter="25">
        <el-col :md="12">
          <img :src="$store.state.config.global.image" :alt="$store.state.config.global.name">
        </el-col>
        <el-col :md="12" style="line-height: 2">
          <h1>{{$store.state.config.global.name}}</h1>
          <hr>
          <i class="iconfont icon-zuoji1 uk-margin-right-small"></i>热线:{{$store.state.config.global.tel}} <br>
          <i class="iconfont icon-qq uk-margin-right-small"></i>Q Q:{{$store.state.config.global.qq}} <br>
          <i class="iconfont icon-coordinates uk-margin-right-small"></i>地址:{{$store.state.config.global.address}} <br>
        </el-col>

      </el-row>
      <el-row class="uk-margin-top-small">

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
