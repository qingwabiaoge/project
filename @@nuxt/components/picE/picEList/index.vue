<template>
  <div style="padding-bottom: 90px; ">


    <!--<div class="text-center">-->
    <!--<h3 class="hover-underline hover-underline-center  display-inline-block text-uppercase"-->
    <!--style="font-size: 78px; line-height:1.5;margin-top: 60px; margin-bottom:60px ">-->
    <!--trend-->
    <!--</h3>-->
    <!--</div>-->

    <el-row>
      <el-col v-for="item in data.children" :md="6" :lg="4" :xs="12" :key="item._id">
        <nuxt-link :to="`/produce/detail/${item._id}`">
          <picE :data="item" height="300">

          </picE>
        </nuxt-link>
      </el-col>

    </el-row>

  </div>
</template>
<script>
  import mixin from '@/mixins/conponent-mixin'

export default {
    mixins:[mixin],

  }
</script>
