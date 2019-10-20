<template>


  <div class="container">

    <title-zh-english :data="components.article">

    </title-zh-english>


    <el-row :gutter="30" v-if="components.article.show">
      <el-col :md="8"
              v-for="(item,index) in articles"
              :key="'picA'+index">
        <nuxt-link :to="`/article/${item._id}`">
          <picA :data="item" style="margin: 50px 0 30px">
          </picA>
        </nuxt-link>
      </el-col>
    </el-row>


  </div>


</template>


<script>
  import mixin from '@/mixins/page-mixin'

  export default {
    async asyncData({$axios}) {
      const {articles} = await $axios.get('/articles', {params: {}})
      return {articles}
    },
    mixins: [mixin]
  }
</script>
