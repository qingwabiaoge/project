<template>

  <div>
    <title-zh-english :data="components.trend">

    </title-zh-english>
   <!-- <div class="text-center">
      <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
          style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
        trend
      </h3>
    </div>
-->

    <el-row>
      <el-col v-for="item in produces"  :md="6" :lg="4" :key="item._id">
        <picD :data="item">

        </picD>

      </el-col>

    </el-row>


  </div>

</template>




<script>

import mixin from '@/mixins/page-mixin'
  export default {

    async asyncData({$axios,store}) {

      const {produces} = await $axios.get('/produces', {params: {flag: '首页'}})
      return {
        //注入数据到当前组件,类似于prop的作用,为了head使用
        produces,...store.getters['components/components'].trend
      }
    },
    mixins:[mixin],
  }

</script>
