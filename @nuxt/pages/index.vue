<template>
  <div>

    <el-carousel-responsive :data="components.swiper.children"></el-carousel-responsive>

    <title-zh-english :data="components.goods">

    </title-zh-english>

    <!--
        <el-row :gutter="20">
          <el-col :md="12"><img v-for="item in components.goods.children" :src="item.image" alt="" style="height: 500px"></el-col>

        </el-row>
    -->

    <div class="container" v-if="components.goods.show" :data="components.goods.children">
      <el-row :gutter="5">
        <el-col :md="14">

          <picC :data='Object.assign(goodsCategory[0],{href:`/goods/${goodsCategory[0].id}?page=1`})'
                placement="left"
                :height="500"></picC>

        </el-col>
        <el-col :md="10">
          <picC :data='Object.assign(goodsCategory[1],{href:`/goods/${goodsCategory[1].id}?page=1`})'
                placement="left"
                :height="500">

          </picC>
        </el-col>
        <el-col :md="14">
          <picC :data='Object.assign(goodsCategory[2],{href:`/goods/${goodsCategory[2].id}?page=1`})'
                placement="left"
                :height="280">

          </picC>
        </el-col>
        <el-col :md="10">
          <picC :data='Object.assign(goodsCategory[3],{href:`/goods/${goodsCategory[3].id}?page=1`})'
                placement="left"
                :height="280">

          </picC>
        </el-col>

      </el-row>


    </div>

    <title-zh-english :data="components.history">

    </title-zh-english>
    <!--   <div class="text-center">
         <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
             style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
           HISTORY
         </h3>
       </div>-->

    <pictext-history :data="components.history">

    </pictext-history>


    <div
      :style="{background:`url(${global.background2})`,backgroundAttachment: 'fixed'} "
      style="padding-bottom: 90px; margin-bottom: -90px">


      <title-zh-english :data="components.trend"></title-zh-english>
      <!--<div class="text-center">-->
      <!--<h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"-->
      <!--style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">-->
      <!--trend-->
      <!--</h3>-->
      <!--</div>-->

      <el-row>
        <el-col v-for="item in goodss" :md="6" :lg="4" :xs="12" :key="item._id">
          <nuxt-link :to="`/goods/detail/${item._id}`">
            <picE :data="item" height="300">

            </picE>
          </nuxt-link>
        </el-col>

      </el-row>

    </div>

    <title-zh-english
      :data="components.oem"></title-zh-english>
    <div v-if="components.oem.show"
         class="container">
      <img v-lazy="components.oem.image">
    </div>
    <!--
        <div class="text-center">
          <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
              style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
            oem
          </h3>
        </div>
        <div class="text-center">
          <img v-lazy="$store.state.components['page-oem'].image"  :alt="global.title">
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
    },
    mounted() {
      console.log(this.test)
    }
  }

</script>
