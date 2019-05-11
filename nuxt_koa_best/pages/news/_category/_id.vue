<template>
  <div class="background-gray-lightest padding-top-small padding-bottom-largest">
    <pictextContact :data="$store.state.componentDatas.pictextContact" class="hidden@xs"></pictextContact>

    <div class="margin-top container ">

      <el-row :gutter="30">
        <el-col :md="6" class="hidden@xs">
          <titlebarA icon="xinwenzixun"
                     title="新闻资讯"
                     subTitle="NEWS"
                     class="border-bottom">

          </titlebarA>


          <div class="background-default padding-bottom-large padding-top">


            <nuxt-link
              class="display-block hover-underline hover-underline-left "
              style="padding: 15px 0 15px 30px"
              v-for="item in $store.state.config.articleCategory"
              :key="item.text"
              :to="{path:`/news/${item.text}`}">
              {{item.text}}
            </nuxt-link>
          </div>

          <titlebarA icon="xiazai"
                     title="联系我们"
                     subTitle="CONTACT US"
                     class="border-bottom margin-top">

          </titlebarA>

          <pictextContactSiderbar></pictextContactSiderbar>


        </el-col>
        <el-col :md="18">
          <articleA :data="$store.state.article[$route.params.id]"></articleA>

        </el-col>

      </el-row>


    </div>


  </div>

</template>
<script>

  import pictextContact from '@/components/pictextContact/'
  import articleA from '@/components/articleA/index.vue'
  import pictextContactSiderbar from '@/components/pictextContactSiderbar/index'


  export default {
    validate({params}) {

      console.log(/(\d|\w){24}/.test(params.id))
      return /(\d|\w){24}/.test(params.id)
    },

    components: {pictextContact,articleA,pictextContactSiderbar },
    async fetch({store, params}) {

      await store.dispatch('getComponentDatas', 'pictextContact');

      await store.dispatch('getArticleById', params.id);
      },



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
