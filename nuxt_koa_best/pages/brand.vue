<template>
  <div>

    <div class="text-center">
      <img src="@/assets/pic/brandbg.jpg" alt="">
    </div>
    <icolist :data="$store.state.componentDatas.icolist"></icolist>
    <titleScale title="品牌"
                subTitle="介绍"
                text="BRAND infor"
    >
    </titleScale>

    <pictextSlider :data="$store.state.componentDatas.pictextSlider"
                   :descriptionLength="10000"
                   :showButton="false">

    </pictextSlider>

    <titleScale title="炫彩"
                subTitle="艺术"
                text="Color Art"
    >
    </titleScale>
    <div class='background-gray-dark padding-top-larger padding-bottom-larger'>
      <pictextThree :data="$store.state.componentDatas.pictextThree"></pictextThree>
    </div>
    <titleScale title="品牌"
                subTitle="历史"
                text="brand history"
                class="hidden@xs"
                :description="$store.state.componentDatas.pictextHistory[0].description">
    </titleScale>

    <pictextHistory :data="$store.state.componentDatas.pictextHistory" class="hidden@xs"></pictextHistory>


 <!--   <titleScale title="CCTV"
                subTitle="合作品牌"
                text="CCTV Cooperative brand"
                description="CCTV合作品牌,春晚涂料供应商">
    </titleScale>
    <div class="container">
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in $store.state.componentDatas['el-carousel']" :key="item.image">
          <img v-lazy="item.image" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    -->

  </div>

</template>

<script>
  // import icolist from '@/components/icolist/index.vue'
  // import pictextThree from '@/components/pictextThree/index.vue'
  // import pictextSlider from '@/components/pictextSlider/index.vue'
  // import pictextHistory from '@/components/pictextHistory/index.vue'

  export default {
    created(){
      console.log(this.$route)
    },

    components: {
      //icolist,
      //pictextSlider,
      // pictextHistory
    },
    async fetch({store}) {
      await store.dispatch('getComponentDatas', 'icolist');
      await store.dispatch('getComponentDatas', 'pictextSlider')
      await store.dispatch('getComponentDatas', 'pictextThree');
      await store.dispatch('getComponentDatas', 'pictextHistory');
      await store.dispatch('getComponentDatas', 'el-carousel');


    }
  }

</script>

<style lang="less">
  //幻灯片响应手机
  @media (max-width: @global-breakpoint-phone) {
    :global( .el-carousel__indicators--outside) {

      margin-top: -200px;
    }
  }




</style>
