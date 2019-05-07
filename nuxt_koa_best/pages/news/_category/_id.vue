<template>
  <div class="uk-background-gray-lightest uk-padding-top-small uk-padding-bottom-largest">
    <pictextContact :data="$store.state.componentDatas.pictextContact" class="uk-hidden@xs"></pictextContact>

    <div class="uk-margin-top container ">

      <el-row :gutter="30">
        <el-col :md="6" class="uk-hidden@xs">
          <titlebarA icon="xinwenzixun"
                     title="新闻资讯"
                     subTitle="NEWS"
                     class="uk-border-bottom">

          </titlebarA>


          <div class="uk-background-default uk-padding-bottom-large uk-padding-top">


            <nuxt-link
              class="uk-display-block hover-underline hover-underline-left "
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
                     class="uk-border-bottom uk-margin-top">

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
