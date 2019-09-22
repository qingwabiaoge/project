<template>
  <div>
    <el-row :gutter="25">
      <el-col :md="12">
        <img :src="components.brand.image" :alt="components.brand.title">
      </el-col>
      <el-col :md="12" style="line-height: 2">
        <h1>{{components.brand.etitle}}{{components.brand.title}}</h1>
        <hr>
        <i class="iconfont icon-zuoji1 uk-margin-right-small"></i>TEL:{{components.contact.tel}} <br>
        <i class="iconfont icon-qq uk-margin-right-small"></i>Q Q:{{components.contact.qq}} <br>
        <i class="iconfont icon-coordinates uk-margin-right-small"></i>ADDRESS:{{components.contact.address}} <br>
      </el-col>

    </el-row>
    <el-row class="uk-margin-top-small" style="margin-top: 30px">

      <img v-lazy="components.contact.map" :alt="components.brand.title">


    </el-row>

  </div>
</template>
