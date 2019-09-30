<template>
  <div>


    <div class="container" style="background: #fff; padding: 20px;">

      <title-zh-english :data="components.brand">

      </title-zh-english>
      <!--   <div class="text-center">
           <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
               style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
             BRAND
           </h3>
         </div>
   -->

      <pictextCompany :data="components.brand"></pictextCompany>


    </div>


    <div class="container">

      <title-zh-english :data="components.article">

      </title-zh-english>

      <!-- <div class="text-center">
         <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
             style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
           article
         </h3>
       </div>-->

      <el-row :gutter="30" v-if="components.article.show">
        <el-col :md="8"
                v-for="(item,index) in articles"
                :key="'picA'+index">
          <picA :data="item" style="margin: 50px 0 30px">
          </picA>
        </el-col>
      </el-row>

      <!-- <div class="text-center">
         <h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"
             style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">
           oem
         </h3>
       </div>
       <div class="text-center">
         <img v-lazy="$store.state.components['page-oem'].image"  :alt="$store.state.global.title">
       </div>-->

    </div>

  </div>
</template>


<script>
  export default {
    async asyncData({$axios}) {
      const {articles} = await $axios.get('/articles', {params: {category: "公司新闻"}})
      return {articles}
    }

  }
</script>
