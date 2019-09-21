<template>
  <div>

    <carouselFull></carouselFull>

    <title-zh-english :data="{title:'produces',subtitle:'产品'}">

    </title-zh-english>


    <!--  <pictextFour>


      </pictextFour>-->


    <div :style="{background:`url(${$store.state.global.background2})`,backgroundAttachment: 'fixed'} ">

      <title-zh-english :data="{title:'brand',subtitle:'品牌'}">

      </title-zh-english>

      <div class="container">

        <pictextCompany></pictextCompany>
      </div>

    </div>

    <title-zh-english :data="{title:'service',subtitle:'服务'}">

    </title-zh-english>
    <!--  <div class="text-center">
        <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
            style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
          service
        </h3>
      </div>-->

    <!--   <pictextOne>

       </pictextOne>-->

    <div
      :style="{background:`url(${$store.state.global.background2})`,backgroundAttachment: 'fixed'} "
      style="padding-bottom: 90px; margin-bottom: -90px">


      <title-zh-english :data="{title:'trend',subtitle:'潮流'}"></title-zh-english>
      <!--<div class="text-center">-->
      <!--<h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"-->
      <!--style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">-->
      <!--trend-->
      <!--</h3>-->
      <!--</div>-->

      <el-row>
        <el-col v-for="item in goodss" :md="6" :lg="4" :xs="12" :key="item._id">
          <picD :data="item">

          </picD>

        </el-col>

      </el-row>

    </div>


    <!--
        <div class="text-center">
          <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
              style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
            oem
          </h3>
        </div>
        <div class="text-center">
          <img v-lazy="$store.state.components['page-oem'].image"  :alt="$store.state.global.title">
        </div>-->

  </div>


</template>

<script>

  export default {

    scrollToTop: true,
    async asyncData({$axios}) {

      const {goodss} = await $axios.get('/goodss', {params: {flag: '首页'}})
      return {
        goodss
      }
    }
  }

</script>
