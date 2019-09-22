<template>

  <div>
    <title-zh-english :data="{title:'trend',subtitle:'潮流'}">

    </title-zh-english>
   <!-- <div class="text-center">
      <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
          style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
        trend
      </h3>
    </div>
-->

    <el-row>
      <el-col v-for="item in goodss"  :md="6" :lg="4" :key="item._id">
        <picD :data="item">

        </picD>

      </el-col>

    </el-row>


  </div>

</template>


<script>

  export default {

    async asyncData({$axios}) {

      const {goodss} = await $axios.get('/goodss', {params: {flag: '首页'}})
      return {
        goodss
      }
    }
  }

</script>
