<template>
  <div>

    <!--<swiperFull></swiperFull>-->
      <carouselFull></carouselFull>

    <icolist :data="$store.state.componentDatas.icolist"></icolist>
    <titleScale title="艺术"
                 subTitle="产品"
                text="atr produce"
                 href="/produce">
    </titleScale>

    <picFade :data="$store.state.componentDatas.picFade"></picFade>

      <titleScale title="工程"
                  subTitle="案例"
                  text="ENGINEERING CASE"
                >
      </titleScale>

    <pic-scale :data="$store.state.componentDatas.picScale">

    </pic-scale>


      <titleScale title="品牌"
                  subTitle="介绍"
                  text="BRAND infor"
                  href="/brand">
      </titleScale>


    <pictextSlider :data="$store.state.componentDatas.pictextSlider">

    </pictextSlider>

    <titleScale title="品牌"
                subTitle="历史"
                text="brand history"
                href="/brand"
                class="hidden@xs"
               description="　BEST 百事得成立于2005年，位于意大利Viadana-维亚达纳，作为房屋内部装饰涂料品牌，百事得bset着重于提高对人体居住环境的健康性，舒适性而努力。在意大利本土拥有1600家销售网点，产品涵盖了艺术涂料、内外墙建筑涂料、木器漆以及全线的民用涂料产品。">
    </titleScale>


    <pictextHistory :data="$store.state.componentDatas.pictextHistory"  class="hidden@xs"></pictextHistory>


    <titleScale title="公司"
                subTitle="新闻"
                text="brand news"
                href="/公司新闻">
    </titleScale>

    <el-row :gutter="80" class="margin-top-small">
      <el-col :xl="6" :md="6"  v-for="(item,index) in $store.state.articles.picA"
                  :key="'picAlist'+index">
        <picA :item="item" class="margin-top">
        </picA>
      </el-col>
    </el-row>

  </div>
</template>

<script>



  export default {


    head () {
      return {
        title:this.$store.state.config.global.title+'_'+this.$store.state.config.global.name,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },
    async fetch({store}) {
      await store.dispatch('getComponentDatas', 'pictextThree');
      await store.dispatch('getComponentDatas','sliderFull');
      await store.dispatch('getComponentDatas','icolist');
      await store.dispatch('getComponentDatas','picFade');
      await store.dispatch('getComponentDatas','picScale');
      await store.dispatch('getComponentDatas','pictextSlider');
      await store.dispatch('getComponentDatas','pictextHistory');
      await store.dispatch('getArticles',{componentName:'picA',category:'公司新闻'});

    }
  }

</script>

<style lang="less" module="">

</style>
