<template>

  <div class="container" style="padding: 20px; margin-top: 30px;  background: #fff">
    <el-row :gutter="25">
      <el-col :md="12">
        <img :src="components.brand.image" :alt="components.brand.title">
      </el-col>
      <el-col :md="12" style="line-height: 2">

        <h1 style="text-transform: uppercase">{{components.brand.title}}{{components.brand.subtitle}}</h1>
        <hr>
        <i class="iconfont icon-zuoji1 uk-margin-right-small"></i>TEL:{{components.contact.tel}} <br>
        <i class="iconfont icon-qq uk-margin-right-small"></i>Q Q:{{components.contact.qq}} <br>
        <i class="iconfont icon-coordinates uk-margin-right-small"></i>ADDRESS:{{components.contact.address}} <br>
      </el-col>

    </el-row>
    <el-row class="uk-margin-top-small" style="margin-top: 30px">

      <div v-html="components.contact.content"></div>
    </el-row>

    <el-row class="uk-margin-top-small" style="margin-top: 30px">

      <img v-lazy="components.contact.map" :alt="components.brand.title">


    </el-row>

  </div>
</template>

<script>




</script>
