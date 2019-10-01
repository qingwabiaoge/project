<template>
  <div>

    <el-carousel-responsive :data="components.swiper"></el-carousel-responsive>

    <title-zh-english :data="{...components.produce,background:'none'}">

    </title-zh-english>

    <div class="container" v-if="components.produce.show" :data="components.produce.children"
         style="margin-bottom: 90px">
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

  </div>


</template>

<script>
  import head from '@/plugins/head-part'
  import mixin from '@/plugins/page-mixin'

  export default {
    scrollToTop: true,
    async asyncData({$axios, store, app}) {
      const {produces} = await $axios.get('/produces', {params: {flag: true}})
      return {
        produces, ...store.state.global.global
      }
    },
    head,
    mixins:[mixin]

  }

</script>
