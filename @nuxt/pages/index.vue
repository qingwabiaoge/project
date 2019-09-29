<template>
  <div>

    <el-carousel-responsive :data="components.swiper"></el-carousel-responsive>

    <title-zh-english :data="{...components.produce,background:'none'}">

    </title-zh-english>

    <!--
        <el-row :gutter="20">
          <el-col :md="12"><img v-for="item in components.produce.children" :src="item.image" alt="" style="height: 500px"></el-col>

        </el-row>
    -->

    <div class="container" v-if="components.produce.show" :data="components.produce.children" style="margin-bottom: 90px">
      <el-row :gutter="5">
        <el-col :md="14">

          <picC :data='Object.assign(produceCategory[0],{href:`/produce/${produceCategory[0].id}?page=1`})'
                placement="left"
                :height="500"></picC>

        </el-col>
        <el-col :md="10">
          <picC :data='Object.assign(produceCategory[1],{href:`/produce/${produceCategory[1].id}?page=1`})'
                placement="left"
                :height="500">

          </picC>

        </el-col>
        <el-col :md="14">
          <picC :data='Object.assign(produceCategory[2],{href:`/produce/${produceCategory[2].id}?page=1`})'
                placement="left"
                :height="280">

          </picC>
        </el-col>
        <el-col :md="10">
          <picC :data='Object.assign(produceCategory[3],{href:`/produce/${produceCategory[3].id}?page=1`})'
                placement="left"
                :height="280">

          </picC>
        </el-col>

      </el-row>


    </div>

    <title-zh-english inverse :data="{...components.history}">

    </title-zh-english>
    <!--   <div class="text-center">
         <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
             style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
           HISTORY
         </h3>
       </div>-->

    <pictext-history :data="components.history ">

    </pictext-history>


    <title-zh-english :data="components.trend"></title-zh-english>
    <picE-list :data="{...components.trend,children:produces}">

    </picE-list>

    <title-zh-english
      :data="components.oem"></title-zh-english>

    <div v-if="components.oem.show"
         style="background: white;text-align: center">
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
  import head from '@/plugins/head-part'


  export default {
    scrollToTop: true,
    async asyncData({$axios, store, app}) {
      const {produces} = await $axios.get('/produces', {params: {flag: true}})
      return {
        produces, ...store.state.global.global
      }
    },
    head,

  }

</script>
