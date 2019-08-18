<template>

<!--    <pictextContact :data="$store.state.componentDatas.pictextContact" class="visible@s"></pictextContact>-->

    <div class="margin-top container ">

      <el-row :gutter="30">
        <el-col :md="6" class="hidden-xs-only">
          <titlebarA icon="xinwenzixun"
                     title="新闻资讯"
                     subTitle="NEWS"
                     class="border-bottom ">

          </titlebarA>


          <div class="background-default padding-bottom padding-top">


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
          <el-row :gutter="30">
            <el-col :md="12"
                    v-for="(item,index) in $store.state.articles.picA"
                    :key="'picA'+index">
              <picA :item="item" style="margin: 50px 0 30px">
              </picA>
            </el-col>
          </el-row>

   <!--       <pagination

            :page-size="15"
            :total="151"
            :current="2"
            path="/公司新闻"
            class="text-center margin-top">

          </pagination>-->
        </el-col>

      </el-row>


    </div>




</template>
<script>

  import pictextContact from '@/components/pictextContact/'
  import picA from '@/components/picA/index.vue'
  import pictextContactSiderbar from '@/components/pictextContactSiderbar/index'

  export default {

    components: {pictextContact, picA, pictextContactSiderbar},
    validate({params}) {
      // Must be a number
      return /[\u4e00-\u9fa5]+/.test(params.category)
    },
    async fetch({store, params}) {
      await store.dispatch('getComponentDatas', 'pictextContact');
      await store.dispatch('getComponentDatas', 'pictextContactSiderbar');
      await store.dispatch('getArticles', {componentName: "picA", category: params.category, limit: 8});


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
