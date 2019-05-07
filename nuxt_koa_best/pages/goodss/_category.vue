<template>
    <div class="uk-background-gray-lightest uk-padding-top-small uk-padding-bottom-largest">

        <pictextContact  :data="$store.state.componentDatas.pictextContact" class="uk-hidden@xs"></pictextContact>

        <div class="uk-margin-top container">

            <el-row :gutter="30">
                <el-col :md="6">
                    <titlebarA icon="chanpin"
                               title="产品中心"
                               subTitle="PRODUCE"
                               class="uk-border-bottom">

                    </titlebarA>

                  <div class="uk-background-default uk-padding-bottom-large uk-padding-top">
                    <nuxt-link
                      class="uk-display-block hover-underline hover-underline-left "
                      style="padding: 15px 0 15px 30px"
                      v-for="item in $store.state.config.goodsCategory"
                      :key="item.text"
                      :to="{path:`/goodss/${item.text}`}">
                      {{item.text}}
                    </nuxt-link>

                  </div>

                    <titlebarA icon="xiazai"
                               title="联系我们"
                               subTitle="CONTACT"
                               class="uk-border-bottom uk-margin-top uk-hidden@xs">

                    </titlebarA>


                      <pictextContactSiderbar class="uk-hidden@xs"></pictextContactSiderbar>



                </el-col>
                <el-col :md="18" >
                    <el-row :gutter="10">
                        <el-col :md="12"
                                v-for="item in $store.state.goodss.picBGroup"
                                 :key="item.title">
                            <picB :item="item">

                            </picB>
                        </el-col>
                    </el-row>

                    <pagination

                            :page-size="15"
                            :total="151"
                            :current="2"
                            path="/公司新闻"
                            class="uk-text-center uk-margin-top">

                    </pagination>
                </el-col>

            </el-row>


        </div>


    </div>

</template>
<script>
   import $api from '@/api'
    import pictextContact from '@/components/pictextContact/'
    import picB from '@/components/picB/index.vue'
   import pictextContactSiderbar from '@/components/pictextContactSiderbar/index'


    export default {
        data() {
            return {
                pictextContactData: [],
                picBdata: [],


            }
        },
        components: {pictextContact, picB,pictextContactSiderbar},
        async asyncData({store,params}) {
          await store.dispatch('getComponentDatas', 'pictextContact');
          await store.dispatch('getGoodss', {componentName:'picBGroup',category: params.category});
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
